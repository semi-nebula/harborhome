# Harbor Home — Study Mechanics & Update Chains

How every study feature works, and exactly what updates when you change one thing.

---

## 1. The reactivity model (the core idea)

Harbor Home is **not** a fine-grained reactive framework. It uses one simple pattern:

> **mutate `state` → `saveState()` → re-render**

- `state` is a single big object — the **single source of truth** — persisted to `localStorage` (key `harbor-home:v1`). Each Space has its own slice (`activeSpace()`).
- `saveState()` serializes `state` to localStorage. `queueSave(300)` debounces rapid writes.
- Re-rendering happens two ways:

### A. Full re-render — `applyState()`
Called after *structural* changes (switch Space, finish onboarding, import a backup, change settings). It re-renders **~27 views in one shot**, including every study view:
`renderStudyLog · renderStudyHealth · renderSubjectInsights · renderProductivityInsights · renderTodayPlan · renderSyllabus · renderMocks · renderMistakes · renderTasks · renderHabits · renderTimer · renderCalendar · renderSidebar …`

### B. Targeted cascade (the common case)
Most edits don't re-render everything. They call **`saveState()` + the directly-affected widget + `renderDailyPulse()`**. `renderDailyPulse()` is the **hub** — after drawing the pulse chips it fans out into:
`renderStudyHealth() → renderSubjectInsights() → renderProductivityInsights() → renderTodayPlan()`

So one small edit cheaply refreshes the analytics that depend on it, without rebuilding the whole dashboard.

### The compute layer (pure functions)
None of the analytics are *stored*. They are **derived on every render** by pure helpers that read the raw arrays:
`studyMinutesByDate · studyScores · studyStreaks · studyTrendInfo · studySubjectTotals · syllabusStats · subjectReadiness · isReviewDue · subjectMistakeStats · subjectMockStats · mockPercent · countdownInfo`

This is why "changing one thing updates things" — the widgets always recompute from current raw data, so they can never go stale relative to the source arrays.

---

## 2. The raw inputs (what you actually edit)

All inside the active Space:
| Array | Shape | Drives |
|---|---|---|
| `studySessions[]` | `{id, subject, minutes, note, date, createdAt}` | study log, charts, scores, streaks, subject split, consistency |
| `syllabus[]` | subjects → `chapters[]` each with `status` (`not-started`/`learning`/`revision`/`done`) | progress %, subject readiness, revision health |
| `mistakeLog[]` | `{id, subject, topic, type, text, correction, reviewDate, reviewCount, forgottenCount, reviewed, lastReviewedAt}` | review queue, mistake health, weak topics |
| `mockTests[]` | `{id, name, score, total, date, notes}` | mock %, trends, mock preparedness |
| `tasks[]` / `habits[]` | `{id, title, done, priority, dueDate}` / `{id, name, completions:{date:true}}` | pulse, plan, consistency |
| `countdown` | exam date + label | pace prediction |

---

## 3. Every study mechanism

### 3a. Study log widget — `renderStudyLog()`
Reads `studySessions[]` and derives:
- **Today / week / month / lifetime** minutes (`studyMinutesByDate`, `studyMonthMinutes`).
- **7-day bar chart** + **28-day heatmap** (intensity = minutes ÷ max).
- **Streaks** (`studyStreaks`): *current* = consecutive days back from today with >0 min; *longest* = best run ever.
- **Focus score / consistency / avg** (`studyScores`):
  - `consistency = round(activeDaysInLast7 / 7 × 100)`
  - `focus = clamp(0,100, round(min(avg,90)/90 × 55 + consistency/100 × 45))`
- **Subject distribution** (`studySubjectTotals`): minutes grouped by subject.
- **Trend** (`studyTrendInfo`): compares avg of days[0:3] vs days[3:6]; ≥+20 = Up, ≤−20 = Down, else Steady.

### 3b. Syllabus & chapter status — `renderSyllabus()` / `syllabusStats()`
- `syllabusStats` flattens all chapters: `percent = done / total × 100`.
- Cycling a chapter's status button rotates `not-started → learning → revision → done`.

### 3c. Per-subject readiness — `subjectReadiness()`
For each syllabus subject:
```
revisionScore = round((done + revision·0.7 + learning·0.35) / chapters × 100)
penalty        = min(45, Σ(8 + forgottenCount·4 + (reviewDue?5:0))   ← from mistakes in this subject)
studyBonus     = min(10, floor(subjectStudyMinutes / 120))
score          = clamp(0,100, round(revisionScore − penalty + studyBonus))
```
So a subject's score rises with chapter progress + study time, and falls with unreviewed/forgotten mistakes.

### 3d. Mistakes + spaced repetition — `renderMistakes()` / `isReviewDue()`
- **Schedule**: intervals `[1, 3, 7, 14, 30, 60]` days. Each successful review advances `reviewCount` → next interval. `reviewDate = today + interval[reviewCount]`.
- **Due?** `isReviewDue = !reviewed && reviewDate <= today`.
- **"Forgot"**: `forgottenCount++`, reset to review tomorrow (+1 day).
- Reviewing clears it from the due queue → raises mistake health (see 3f).

### 3e. Mocks — `renderMocks()` / `mockPercent()`
- `mockPercent = round(score/total × 100)`. List shows each mock, delta vs previous, and a per-mock insight.

### 3f. Preparation Health (the prediction engine) — `studyHealthData()` → `renderStudyHealth()`
The headline **"% ready"** is a weighted blend of five derived signals:
```
readiness = round(
    subjectAvg      · 0.34   ← average of per-subject readiness (3c)
  + revisionHealth  · 0.20   ← (done + revision·0.7) / total chapters × 100
  + mockPreparedness· 0.20   ← mockAvg===null ? 35 : min(100, mockAvg + min(10, mocks·2))
  + consistency     · 0.16   ← active study days in last 7 / 7 × 100
  + mistakeHealth   · 0.10   ← mistakes ? max(0, 100 − due·10 − total·2) : 70
)
```
- **Title/prediction** by threshold: ≥78 "on track", ≥55 "good base, needs attention", else "needs focused recovery" — each names your **weakest subject** as the next focus.
- **Pace nudge**: if an exam date is set and syllabus < 100%, it computes `chapters-left ÷ days-left` → "Finish ~N chapters/day".
- **Override**: if ≥3 mistakes are due, the prediction becomes "clear due mistakes before new chapters".

### 3g. Subject insights — `renderSubjectInsights()` / `subjectInsightData()`
Per subject: chapter split (done/revision/learning/pending), study minutes, mistake stats (due/reviewed/forgotten/weak topics), linked-mock stats (by matching the subject name in mock notes), study trend, and a readiness score — sorted weakest-first.

### 3h. Productivity / pattern insights — `renderProductivityInsights()` / `productivityInsightItems()`
Encouraging, plain-language pattern cards derived from `studySessions[]` (best time of day, strongest day, focus subject, consistency).

### 3i. Daily pulse — `renderDailyPulse()` (the hub)
Builds up to 5 "today" chips from many sources, then **fans out** to health + both insight renders + today's plan:
countdown days · minutes studied today · open tasks · syllabus % · due mistakes · latest mock % · habits done today.

### 3j. Tasks & habits
`tasks[]`/`habits[]` feed the pulse, today's plan, and (habits) the 7-day dots. Toggling either → `renderTasks/Habits → renderDailyPulse`.

---

## 4. Concrete "change X → what updates" chains

| You… | Handler runs | Updates |
|---|---|---|
| **Log a study session** | form submit → `addStudySession()` | `saveState → renderStudyLog → renderDailyPulse` → health, subject insights, productivity insights, plan |
| **Delete a study session** | `data-study-delete` | `saveState → renderStudyLog → renderDailyPulse` |
| **Cycle a chapter** (not-started→…→done) | `data-syllabus-cycle` | `saveState → renderSyllabus → renderDailyPulse` → health, subject insights, productivity insights, plan |
| **Add / review / forget / delete a mistake** | mistake handlers | `saveState → renderMistakes → renderDailyPulse` |
| **Add a mock** | mock form | `saveState → renderMocks → renderDailyPulse` |
| **Toggle a task** | `data-task-check` | `saveState → renderTasks → renderCalendar → renderDailyPulse` |
| **Toggle a habit** | `data-habit-check` | `saveState → renderHabits → renderDailyPulse` |
| **Set exam countdown** | countdown form | `saveState → renderCountdown → renderDailyPulse` |
| **Switch Space / finish setup / import** | — | full `applyState()` (all 27 views) |

⚠️ **Update:** this gap is **fixed** — cycling a syllabus chapter now calls `renderDailyPulse()` (the hub), so Health %, Subject Insights, Productivity Insights, and Today's Plan all refresh in the same click as the chapter status change.

---

## 5. Why it's consistent
Because **nothing analytical is stored** — every widget recomputes from the raw arrays on render — a change to `studySessions`, `syllabus`, `mistakeLog`, `mockTests`, `tasks`, or `habits` is automatically reflected the next time its widget (or the pulse hub) renders. The only thing the code has to get right is *which* renders to call after each mutation — and that's the cascade table above.
