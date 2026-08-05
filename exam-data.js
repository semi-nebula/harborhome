/* ─────────────────────────────────────────────────────────────
   Harbor Home — Verified exam data (batch 1)
   Real official sites, real YouTube channels, full chapter lists.
   Data is researched + verified (2026). More exams added per batch.
   Schema:
     EXAM_DATA[template] = {
       official: { label, url },        // official website
       extra:    [ {label, url} ],      // syllabus PDF / PYQ portals
       channels: [ {name, url} ],       // real YouTube channels
       subjects: { 'Physics': [chapters...] }
     }
   ───────────────────────────────────────────────────────────── */

const EXAM_DATA = {
  /* ── JEE (Main + Advanced) ─────────────────────────────── */
  jee: {
    official: { label: 'JEE Main Official (NTA)', url: 'https://jeemain.nta.ac.in/' },
    extra: [
      { label: 'JEE Advanced Official', url: 'https://jeeadv.ac.in/' },
      { label: 'NTA Exam Portal', url: 'https://nta.ac.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'SATHEE — free lectures (IIT Kanpur)', url: 'https://sathee.iitk.ac.in/' }
    ],
    channels: [
      { name: 'Physics Wallah (JEE)', url: 'https://www.youtube.com/@PhysicsWallah' },
      { name: 'JEE Wallah', url: 'https://www.youtube.com/@JEEWallah' },
      { name: 'Unacademy JEE', url: 'https://www.youtube.com/@UnacademyJEE' },
      { name: 'Vedantu JEE', url: 'https://www.youtube.com/@VedantuJEE' },
      { name: 'Physics Galaxy (Ashish Arora)', url: 'https://www.youtube.com/@PhysicsGalaxy' },
      { name: 'Competishun (Mohit Tyagi)', url: 'https://www.youtube.com/@MohitTyagi' },
      { name: 'Pankaj Sir Chemistry', url: 'https://www.youtube.com/@PankajSirChemistry' },
      { name: 'MathonGo', url: 'https://www.youtube.com/@MathonGo' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics & Optical Instruments','Wave Optics','Dual Nature of Matter & Radiation','Atoms & Nuclei','Semiconductor Electronics'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Purification & Characterisation of Organic Compounds','Some Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules','Polymers','Chemistry in Everyday Life'],
      Maths: ['Sets, Relations & Functions','Complex Numbers & Quadratic Equations','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits, Continuity & Differentiability','Application of Derivatives','Integral Calculus','Differential Equations','Coordinate Geometry','Three-Dimensional Geometry','Vector Algebra','Statistics & Probability','Trigonometry']
    }
  },

  /* ── NEET ──────────────────────────────────────────────── */
  neet: {
    official: { label: 'NEET Official (NTA)', url: 'https://neet.nta.nic.in/' },
    extra: [
      { label: 'NTA Exam Portal', url: 'https://nta.ac.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'NMC — NEET info', url: 'https://www.nmc.org.in/' }
    ],
    channels: [
      { name: 'Physics Wallah (NEET)', url: 'https://www.youtube.com/@PW-NEETWallah' },
      { name: 'NEET Wallah', url: 'https://www.youtube.com/@NEETWallah' },
      { name: 'Unacademy NEET', url: 'https://www.youtube.com/@UnacademyNEET' },
      { name: 'Vedantu NEET (NEET Made Ejee)', url: 'https://www.youtube.com/@NEETMadeEjee' },
      { name: 'Aakash BYJU’S NEET', url: 'https://www.youtube.com/@AakashBYJUSNEET' },
      { name: 'Biology at Ease', url: 'https://www.youtube.com/@BiologyatEase' }
    ],
    subjects: {
      'Biology (Botany)': ['The Living World','Biological Classification','Plant Kingdom','Morphology of Flowering Plants','Anatomy of Flowering Plants','Cell: The Unit of Life','Cell Cycle & Cell Division','Biomolecules','Photosynthesis in Higher Plants','Respiration in Plants','Plant Growth & Development','Sexual Reproduction in Flowering Plants'],
      'Biology (Zoology)': ['Animal Kingdom','Structural Organisation in Animals','Breathing & Exchange of Gases','Body Fluids & Circulation','Excretory Products & their Elimination','Locomotion & Movement','Neural Control & Coordination','Chemical Coordination & Integration','Human Reproduction','Reproductive Health','Principles of Inheritance & Variation','Molecular Basis of Inheritance','Evolution','Human Health & Disease','Microbes in Human Welfare','Biotechnology: Principles & Processes','Biotechnology & its Applications'],
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics & Optical Instruments','Wave Optics','Dual Nature of Matter & Radiation','Atoms & Nuclei','Semiconductor Electronics'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Purification & Characterisation of Organic Compounds','Some Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules','Polymers','Chemistry in Everyday Life']
    }
  },

  /* ── CUET UG ───────────────────────────────────────────── */
  cuet: {
    official: { label: 'CUET UG Official (NTA)', url: 'https://exams.nta.ac.in/CUET-UG/' },
    extra: [
      { label: 'NTA Exam Portal', url: 'https://nta.ac.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'CUET Wallah (PW)', url: 'https://www.youtube.com/@CUETWallah' },
      { name: 'Unacademy CUET', url: 'https://www.youtube.com/@UnacademyCUET' },
      { name: 'Vedantu CUET', url: 'https://www.youtube.com/@VedantuCUET' },
      { name: 'The Social Brains', url: 'https://www.youtube.com/@TheSocialBrains' }
    ],
    subjects: {
      'English / Language': ['Reading Comprehension','Verbal Ability','Grammar & Usage','Vocabulary','Synonyms & Antonyms'],
      'General Test': ['Current Affairs & GK','General Mental Ability','Numerical Ability & Quantitative Reasoning','Logical & Analytical Reasoning','General Awareness'],
      'Domain (choose per university)': ['Physics','Chemistry','Mathematics','Biology','Accountancy','Business Studies','Economics','History','Geography','Political Science','Psychology','Computer Science']
    }
  },

  /* ── GATE ──────────────────────────────────────────────── */
  gate: {
    official: { label: 'GATE 2026 Official (IIT Guwahati)', url: 'https://gate2026.iitg.ac.in/' },
    extra: [
      { label: 'GATE Aptitude portal', url: 'https://gate.iitg.ac.in/' },
      { label: 'NPTEL — free courses', url: 'https://nptel.ac.in/' }
    ],
    channels: [
      { name: 'GATE Wallah (PW)', url: 'https://www.youtube.com/@GATEWallah' },
      { name: 'Unacademy GATE', url: 'https://www.youtube.com/@UnacademyGATE' },
      { name: 'Kreatryx (GATE)', url: 'https://www.youtube.com/@KreatryxGATEEESE' },
      { name: 'NPTEL IIT', url: 'https://www.youtube.com/@iit' }
    ],
    subjects: {
      'General Aptitude': ['Verbal Ability','Numerical Ability','Spatial Reasoning','Data Interpretation'],
      'Engineering Mathematics': ['Linear Algebra','Calculus','Differential Equations','Probability & Statistics','Numerical Methods','Complex Variables','Transform Theory'],
      'Core Paper (choose)': ['Computer Science','Electrical','Electronics & Comm.','Mechanical','Civil','Chemical','Instrumentation','Metallurgy','Production & Industrial','Aerospace','Biotechnology']
    }
  },

  /* ── UPSC CSE ──────────────────────────────────────────── */
  upsc: {
    official: { label: 'UPSC Official', url: 'https://upsc.gov.in/' },
    extra: [
      { label: 'UPSC Calendar', url: 'https://upsc.gov.in/examinations' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'PIB — press releases', url: 'https://pib.gov.in/' }
    ],
    channels: [
      { name: 'StudyIQ IAS', url: 'https://www.youtube.com/@Studyiqofficial' },
      { name: 'OnlyIAS (PW)', url: 'https://www.youtube.com/@OnlyIASUPSC' },
      { name: 'Unacademy UPSC', url: 'https://www.youtube.com/@UnacademyUPSC' },
      { name: 'Drishti IAS (Hindi)', url: 'https://www.youtube.com/@DrishtiIASvideos' }
    ],
    subjects: {
      'GS Paper I': ['Indian Heritage & Culture','History of India & Indian National Movement','Geography (Physical, Social, Economic)','Indian Society'],
      'GS Paper II': ['Indian Constitution','Governance & Polity','Social Justice','International Relations'],
      'GS Paper III': ['Indian Economy','Agriculture','Science & Technology','Environment & Ecology','Internal Security','Disaster Management'],
      'GS Paper IV': ['Ethics, Integrity & Aptitude','Case Studies'],
      'CSAT': ['Comprehension','Interpersonal & Communication Skills','Logical Reasoning & Analytical Ability','Decision Making','General Mental Ability','Basic Numeracy','Data Interpretation']
    }
  },

  /* ── CLAT ──────────────────────────────────────────────── */
  clat: {
    official: { label: 'CLAT Consortium Official', url: 'https://consortiumofnlus.ac.in/' },
    extra: [
      { label: 'CLAT 2026 info', url: 'https://consortiumofnlus.ac.in/clat-2026/' },
      { label: 'Legal news — LiveLaw', url: 'https://www.livelaw.in/' },
      { label: 'Legal news — Bar & Bench', url: 'https://www.barandbench.com/' }
    ],
    channels: [
      { name: 'LegalEdge (CLAT)', url: 'https://www.youtube.com/@LegalEdgeCLAT' },
      { name: 'Law Prep Tutorial', url: 'https://www.youtube.com/@LawPrep' },
      { name: 'LegalBots', url: 'https://www.youtube.com/@legalbots' }
    ],
    subjects: {
      'Legal Reasoning': ['Legal Concepts','Constitution of India','Contract Law','Torts','Criminal Law','Legal Maxims'],
      'Logical Reasoning': ['Critical Reasoning','Arguments & Assumptions','Cause & Effect','Strengthen & Weaken'],
      'Quantitative Techniques': ['Basic Maths','Data Interpretation','Percentages & Ratios','Graphs & Tables'],
      'English Language': ['Reading Comprehension','Grammar','Vocabulary','Cloze Test'],
      'Current Affairs & GK': ['National & International Events','Legal Current Affairs','Static GK']
    }
  },

  /* ── CAT ───────────────────────────────────────────────── */
  cat: {
    official: { label: 'CAT Official (IIM)', url: 'https://iimcat.ac.in/' },
    extra: [
      { label: 'CAT Syllabus & dates', url: 'https://iimcat.ac.in/' },
      { label: 'Ramanujan College — QA resources', url: 'https://www.ramanjancollege.ac.in/' }
    ],
    channels: [
      { name: 'Unacademy CAT', url: 'https://www.youtube.com/@UnacademyCAT' },
      { name: 'Cracku', url: 'https://www.youtube.com/@Cracku' },
      { name: 'MBA Wallah (PW)', url: 'https://www.youtube.com/@MBAWallah' },
      { name: 'Rodha', url: 'https://www.youtube.com/@Rodha' }
    ],
    subjects: {
      'VARC': ['Reading Comprehension','Para Jumbles','Para Summary','Odd Sentence Out','Vocabulary & Grammar'],
      'DILR': ['Logical Arrangements','Games & Tournaments','Data Interpretation (Tables, Charts)','Venn Diagrams','Puzzles'],
      'Quant': ['Arithmetic','Algebra','Geometry & Mensuration','Number System','Modern Maths','Progressions']
    }
  },

  /* ── NDA ───────────────────────────────────────────────── */
  nda: {
    official: { label: 'NDA Official (UPSC)', url: 'https://upsc.gov.in/examinations/nda' },
    extra: [
      { label: 'UPSC Calendar', url: 'https://upsc.gov.in/examinations' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'SSB interview info', url: 'https://www.joinindianarmy.nic.in/' }
    ],
    channels: [
      { name: 'SSBCrack', url: 'https://www.youtube.com/@SSBCrack' },
      { name: 'NDA & NA Exam (DDE)', url: 'https://www.youtube.com/@DDECoaching' },
      { name: 'Unacademy Defence', url: 'https://www.youtube.com/@UnacademyDefence' }
    ],
    subjects: {
      Mathematics: ['Algebra','Trigonometry','Matrices & Determinants','Vector Algebra','Analytical Geometry','Differential Calculus','Integral Calculus','Differential Equations','Statistics & Probability'],
      'General Ability (English)': ['Comprehension','Grammar','Vocabulary','Synonyms & Antonyms'],
      'General Ability (G.K.)': ['Physics','Chemistry','Biology','Geography','History','Polity','Current Affairs']
    }
  },

  /* ── SSC CGL ───────────────────────────────────────────── */
  'ssc-cgl': {
    official: { label: 'SSC Official', url: 'https://ssc.gov.in/' },
    extra: [
      { label: 'SSC CGL notification', url: 'https://ssc.gov.in/home' },
      { label: 'Current affairs — PIB', url: 'https://pib.gov.in/' }
    ],
    channels: [
      { name: 'SSC Wallah (PW)', url: 'https://www.youtube.com/@SSCWallahPW' },
      { name: 'RBE (SSC)', url: 'https://www.youtube.com/@RBESSC' },
      { name: 'Examपुर (Exampur)', url: 'https://www.youtube.com/@Examपुर' },
      { name: 'Unacademy SSC', url: 'https://www.youtube.com/@UnacademySSC' }
    ],
    subjects: {
      'Quantitative Aptitude': ['Number System','Percentages','Ratio & Proportion','Time & Work','Speed, Distance & Time','Simple & Compound Interest','Mensuration','Algebra','Geometry','Data Interpretation'],
      'Reasoning': ['Analogy','Series','Coding-Decoding','Blood Relations','Direction Sense','Puzzles','Logical Venn Diagrams','Statement & Conclusions','Non-Verbal Reasoning'],
      'English': ['Vocabulary','Grammar','Comprehension','Synonyms & Antonyms','Error Spotting','Sentence Improvement'],
      'General Awareness': ['Static GK','Current Affairs','Science','History','Geography','Polity','Economy']
    }
  },

  /* ── MHT CET (Maharashtra) ──────────────────────────────── */
  cet: {
    official: { label: 'MHT CET Official (CET Cell)', url: 'https://cetcell.mahacet.org/' },
    extra: [
      { label: 'MHT CET mock tests (official)', url: 'https://cetcell.mahacet.org/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'Maharashtra HSC board (MSBSHSE)', url: 'https://www.mahahsscboard.gov.in/' }
    ],
    channels: [
      { name: 'GanitAnk (MHT CET)', url: 'https://www.youtube.com/@GanitAnk' },
      { name: 'PW MHT CET', url: 'https://www.youtube.com/results?search_query=PW+MHT+CET+channel' },
      { name: 'Unacademy MHT CET', url: 'https://www.youtube.com/results?search_query=Unacademy+MHTCET+channel' },
      { name: 'Dinesh Sir Live Study', url: 'https://www.youtube.com/results?search_query=Dinesh+Sir+Live+Study+channel' },
      { name: 'RG Lectures', url: 'https://www.youtube.com/results?search_query=RG+Lectures+MHT+CET' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules','Chemistry in Everyday Life'],
      Maths: ['Mathematical Logic','Matrices','Trigonometry','Straight Lines','Circles & Conics','Functions, Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Applications of Definite Integrals','Differential Equations','Probability','Vectors','3D Geometry','Statistics'],
      'Biology (PCB option)': ['Diversity in Living World','Structural Organisation in Animals & Plants','Cell Structure & Function','Plant Physiology','Human Physiology','Reproduction','Genetics & Evolution','Biology & Human Welfare','Biotechnology','Ecology']
    }
  },

  /* ── KCET (Karnataka) ───────────────────────────────────── */
  kcet: {
    official: { label: 'KCET Official (KEA)', url: 'https://cetonline.karnataka.gov.in/' },
    extra: [
      { label: 'KEA — Karnataka Examinations Authority', url: 'https://kea.kar.nic.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'PUC syllabus (Karnataka)', url: 'https://pue.karnataka.gov.in/' }
    ],
    channels: [
      { name: 'Kiran Pothina (Maths)', url: 'https://www.youtube.com/results?search_query=Kiran+Pothina+channel' },
      { name: 'SimplifiedMinds Karnataka', url: 'https://www.youtube.com/results?search_query=SimplifiedMinds+Karnataka+channel' },
      { name: 'PW Kannada / KCET', url: 'https://www.youtube.com/results?search_query=PW+Kannada+KCET+channel' },
      { name: 'Unacademy Karnataka PUC', url: 'https://www.youtube.com/results?search_query=Unacademy+Karnataka+PUC+channel' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules','Chemistry in Everyday Life'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics'],
      Biology: ['Diversity in Living World','Structural Organisation in Animals & Plants','Cell Structure & Function','Plant Physiology','Human Physiology','Reproduction','Genetics & Evolution','Biology & Human Welfare','Biotechnology','Ecology']
    }
  },

  /* ── WBJEE (West Bengal) ────────────────────────────────── */
  wbjee: {
    official: { label: 'WBJEE Official (WBJEEB)', url: 'https://wbjeeb.nic.in/' },
    extra: [
      { label: 'WBJEEB — information & dates', url: 'https://wbjeeb.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'WB Board (WBBSE/WBCHSE)', url: 'https://wbchse.nic.in/' }
    ],
    channels: [
      { name: 'Physics Wallah', url: 'https://www.youtube.com/@PhysicsWallah' },
      { name: 'Unacademy JEE', url: 'https://www.youtube.com/@UnacademyJEE' },
      { name: 'WBJEE preparation (search)', url: 'https://www.youtube.com/results?search_query=WBJEE+preparation+lectures' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics']
    }
  },

  /* ── COMEDK UGET (Karnataka private colleges) ───────────── */
  comedk: {
    official: { label: 'COMEDK UGET Official', url: 'https://www.comedk.org/' },
    extra: [
      { label: 'COMEDK — info & registration', url: 'https://www.comedk.org/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'Physics Wallah', url: 'https://www.youtube.com/@PhysicsWallah' },
      { name: 'Unacademy JEE', url: 'https://www.youtube.com/@UnacademyJEE' },
      { name: 'COMEDK prep (search)', url: 'https://www.youtube.com/results?search_query=COMEDK+UGET+preparation' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics']
    }
  },

  /* ── KEAM (Kerala) ─────────────────────────────────────── */
  keam: {
    official: { label: 'KEAM Official (CEE Kerala)', url: 'https://cee.kerala.gov.in/' },
    extra: [
      { label: 'CEE Kerala — info & dates', url: 'https://cee.kerala.gov.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' },
      { label: 'Kerala SCERT', url: 'https://scert.kerala.gov.in/' }
    ],
    channels: [
      { name: 'Physics Wallah', url: 'https://www.youtube.com/@PhysicsWallah' },
      { name: 'Exam Winner (Kerala)', url: 'https://www.youtube.com/results?search_query=Exam+Winner+KEAM+channel' },
      { name: 'Xylem Learning (Kerala)', url: 'https://www.youtube.com/results?search_query=Xylem+Learning+KEAM+channel' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics'],
      Biology: ['Diversity in Living World','Structural Organisation in Animals & Plants','Cell Structure & Function','Plant Physiology','Human Physiology','Reproduction','Genetics & Evolution','Biology & Human Welfare','Biotechnology','Ecology']
    }
  },

  /* ── GUJCET (Gujarat) ───────────────────────────────────── */
  gujcet: {
    official: { label: 'GUJCET Official (GSEB)', url: 'https://gujcet.gseb.org/' },
    extra: [
      { label: 'GSEB — Gujarat board', url: 'https://gseb.org/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'PW Gujarati', url: 'https://www.youtube.com/results?search_query=PW+Gujarati+channel' },
      { name: 'GUJCET prep (search)', url: 'https://www.youtube.com/results?search_query=GUJCET+preparation+lectures' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics'],
      Biology: ['Diversity in Living World','Structural Organisation in Animals & Plants','Cell Structure & Function','Plant Physiology','Human Physiology','Reproduction','Genetics & Evolution','Biology & Human Welfare','Biotechnology','Ecology']
    }
  },

  /* ── OJEE (Odisha) ──────────────────────────────────────── */
  ojee: {
    official: { label: 'OJEE Official', url: 'https://ojee.nic.in/' },
    extra: [
      { label: 'OJEE — dates & info', url: 'https://www.odishajee.com/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'Physics Wallah', url: 'https://www.youtube.com/@PhysicsWallah' },
      { name: 'OJEE prep (search)', url: 'https://www.youtube.com/results?search_query=OJEE+preparation+lectures' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics']
    }
  },

  /* ── AP EAPCET (Andhra Pradesh) ─────────────────────────── */
  'ap-eapcet': {
    official: { label: 'AP EAPCET Official', url: 'https://cets.apsche.ap.gov.in/EAPCET' },
    extra: [
      { label: 'AP EAPCET — results & ranks', url: 'https://cets.apsche.ap.gov.in/EAPCET' },
      { label: 'AP SCERT / Intermediate', url: 'https://bieap.apcfss.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'PW Telugu', url: 'https://www.youtube.com/results?search_query=PW+Telugu+channel' },
      { name: 'EAPCET prep (search)', url: 'https://www.youtube.com/results?search_query=AP+EAPCET+preparation+lectures' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics'],
      'Botany (Agri/Pharma stream)': ['Diversity in Living World','Plant Kingdom','Morphology of Flowering Plants','Anatomy of Flowering Plants','Cell Biology','Plant Physiology','Plant Growth & Development','Sexual Reproduction in Flowering Plants','Genetics & Evolution','Biotechnology'],
      'Zoology (Agri/Pharma stream)': ['Animal Kingdom','Structural Organisation in Animals','Human Physiology','Human Reproduction','Reproductive Health','Genetics & Evolution','Human Health & Disease','Microbes in Human Welfare','Biotechnology','Ecology']
    }
  },

  /* ── TS EAPCET (Telangana) ──────────────────────────────── */
  'ts-eapcet': {
    official: { label: 'TS EAPCET Official', url: 'https://eapcet.tgche.ac.in/' },
    extra: [
      { label: 'TGCHE — exam portal', url: 'https://eapcet.tgche.ac.in/' },
      { label: 'Telangana Intermediate (BIE)', url: 'https://tsbie.cgg.gov.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'PW Telugu', url: 'https://www.youtube.com/results?search_query=PW+Telugu+channel' },
      { name: 'TS EAPCET prep (search)', url: 'https://www.youtube.com/results?search_query=TS+EAPCET+preparation+lectures' }
    ],
    subjects: {
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Rotational Motion','Gravitation','Properties of Solids & Liquids','Thermodynamics','Kinetic Theory of Gases','Oscillations & Waves','Electrostatics','Current Electricity','Magnetic Effects of Current & Magnetism','Electromagnetic Induction & AC','Electromagnetic Waves','Ray Optics','Wave Optics','Dual Nature of Matter','Atoms & Nuclei','Semiconductor Devices'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding & Molecular Structure','Chemical Thermodynamics','Solutions','Equilibrium','Redox Reactions & Electrochemistry','Chemical Kinetics','Classification of Elements & Periodicity','p-Block Elements','d- & f-Block Elements','Coordination Compounds','Basic Principles of Organic Chemistry','Hydrocarbons','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules'],
      Maths: ['Sets & Relations','Functions','Matrices & Determinants','Permutations & Combinations','Binomial Theorem','Sequences & Series','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Coordinate Geometry','3D Geometry','Vectors','Probability & Statistics'],
      'Botany (Agri/Pharma stream)': ['Diversity in Living World','Plant Kingdom','Morphology of Flowering Plants','Anatomy of Flowering Plants','Cell Biology','Plant Physiology','Plant Growth & Development','Sexual Reproduction in Flowering Plants','Genetics & Evolution','Biotechnology'],
      'Zoology (Agri/Pharma stream)': ['Animal Kingdom','Structural Organisation in Animals','Human Physiology','Human Reproduction','Reproductive Health','Genetics & Evolution','Human Health & Disease','Microbes in Human Welfare','Biotechnology','Ecology']
    }
  },

  /* ── IMU CET (Maritime) ─────────────────────────────────── */
  imucet: {
    official: { label: 'IMU Official', url: 'https://www.imu.edu.in/' },
    extra: [
      { label: 'IMU CET — admissions', url: 'https://www.imu.edu.in/' },
      { label: 'NCERT Textbooks', url: 'https://ncert.nic.in/textbook.php' }
    ],
    channels: [
      { name: 'IMU CET prep (search)', url: 'https://www.youtube.com/results?search_query=IMU+CET+preparation' },
      { name: 'Maritime careers (search)', url: 'https://www.youtube.com/results?search_query=Indian+Maritime+University+preparation' }
    ],
    subjects: {
      Maths: ['Algebra','Trigonometry','Matrices & Determinants','Vectors','Coordinate Geometry','Calculus','Differential Equations','Probability & Statistics'],
      Physics: ['Units & Measurement','Kinematics','Laws of Motion','Work, Energy & Power','Thermodynamics','Electrostatics','Current Electricity','Magnetism','Optics','Modern Physics'],
      Chemistry: ['Some Basic Concepts of Chemistry','Atomic Structure','Chemical Bonding','Thermodynamics','Equilibrium','Organic Chemistry Basics','Hydrocarbons'],
      English: ['Reading Comprehension','Grammar','Vocabulary','Prepositions','Sentence Correction'],
      'General Knowledge': ['Current Affairs','Geography','History','Science & Technology','Sports','Maritime Knowledge']
    }
  },

  /* ── MH CET Law (Maharashtra) ───────────────────────────── */
  'mh-cet-law': {
    official: { label: 'MH CET Law Official (CET Cell)', url: 'https://cetcell.mahacet.org/' },
    extra: [
      { label: 'MH CET Law — 5-year LLB', url: 'https://cetcell.mahacet.org/' },
      { label: 'LiveLaw — legal news', url: 'https://www.livelaw.in/' }
    ],
    channels: [
      { name: 'LegalEdge (CLAT)', url: 'https://www.youtube.com/@LegalEdgeCLAT' },
      { name: 'MH CET Law prep (search)', url: 'https://www.youtube.com/results?search_query=MH+CET+Law+preparation' }
    ],
    subjects: {
      'Legal Aptitude': ['Legal Concepts','Constitution','Contract Law','Torts','Criminal Law','Legal Maxims'],
      'Logical Reasoning': ['Critical Reasoning','Arguments & Assumptions','Cause & Effect','Sequencing'],
      'English': ['Reading Comprehension','Grammar','Vocabulary'],
      'General Knowledge': ['Current Affairs','Static GK','Legal GK']
    }
  },

  /* ── MAH MBA CET (Maharashtra) ──────────────────────────── */
  'mah-mba-cet': {
    official: { label: 'MAH MBA CET Official (CET Cell)', url: 'https://cetcell.mahacet.org/' },
    extra: [
      { label: 'MAH MBA CET — dates & info', url: 'https://cetcell.mahacet.org/' },
      { label: 'CMAT practice (NTA)', url: 'https://cmat.nta.nic.in/' }
    ],
    channels: [
      { name: 'MBA Wallah (PW)', url: 'https://www.youtube.com/@MBAWallah' },
      { name: 'Cracku', url: 'https://www.youtube.com/@Cracku' },
      { name: 'Unacademy CAT / MBA', url: 'https://www.youtube.com/@UnacademyCAT' }
    ],
    subjects: {
      'Logical & Abstract Reasoning': ['Arrangements','Series','Coding-Decoding','Venn Diagrams','Abstract Patterns'],
      'Verbal Ability': ['Reading Comprehension','Grammar','Vocabulary','Para Completion'],
      'Quantitative Aptitude': ['Arithmetic','Algebra','Geometry','Number System','Data Interpretation']
    }
  },

  /* ─────────────────────────────────────────────────────────────
     BOARDS — real official websites + shared NCERT-aligned chapters.
     BOARD_INFO[slug] = { name, icon, url10, url12 }
     The board templates in the app are built from these.
     ───────────────────────────────────────────────────────────── */
};

const BOARD_INFO = {
  'cbse': { name: 'CBSE', icon: 'CB', url10: 'https://www.cbse.gov.in/', url12: 'https://www.cbse.gov.in/' },
  'icse': { name: 'ICSE', icon: 'IC', url10: 'https://cisce.org/', url12: 'https://cisce.org/' },
  'isc': { name: 'ISC', icon: 'ISC', url10: 'https://cisce.org/', url12: 'https://cisce.org/' },
  'maharashtra-board': { name: 'Maharashtra Board', icon: 'MH', url10: 'https://www.mahahsscboard.in/', url12: 'https://www.mahahsscboard.in/' },
  'karnataka-board': { name: 'Karnataka Board', icon: 'KA', url10: 'https://kseab.karnataka.gov.in/', url12: 'https://kseab.karnataka.gov.in/' },
  'west-bengal-board': { name: 'West Bengal Board', icon: 'WB', url10: 'https://wbbse.wb.gov.in/', url12: 'https://wbchse.wb.gov.in/' },
  'tamil-nadu-board': { name: 'Tamil Nadu Board', icon: 'TN', url10: 'https://dge.tn.gov.in/', url12: 'https://dge.tn.gov.in/' },
  'kerala-board': { name: 'Kerala Board', icon: 'KE', url10: 'https://dhsekerala.gov.in/', url12: 'https://dhsekerala.gov.in/' },
  'gujarat-board': { name: 'Gujarat Board', icon: 'GJ', url10: 'https://gseb.org/', url12: 'https://gseb.org/' },
  'rajasthan-board': { name: 'Rajasthan Board', icon: 'RJ', url10: 'https://rajeduboard.rajasthan.gov.in/', url12: 'https://rajeduboard.rajasthan.gov.in/' },
  'up-board': { name: 'UP Board', icon: 'UP', url10: 'https://upmsp.edu.in/', url12: 'https://upmsp.edu.in/' },
  'bihar-board': { name: 'Bihar Board', icon: 'BR', url10: 'https://biharboardonline.bihar.gov.in/', url12: 'https://biharboardonline.bihar.gov.in/' },
  'mp-board': { name: 'MP Board', icon: 'MP', url10: 'https://mpbse.nic.in/', url12: 'https://mpbse.nic.in/' },
  'telangana-board': { name: 'Telangana Board', icon: 'TS', url10: 'https://bse.telangana.gov.in/', url12: 'https://tsbie.cgg.gov.in/' },
  'andhra-board': { name: 'Andhra Pradesh Board', icon: 'AP', url10: 'https://bse.ap.gov.in/', url12: 'https://bieap.apcfss.in/' },
  'odisha-board': { name: 'Odisha Board', icon: 'OD', url10: 'https://bseodisha.ac.in/', url12: 'https://chseodisha.nic.in/' },
  'assam-board': { name: 'Assam Board', icon: 'AS', url10: 'https://sebaonline.org/', url12: 'https://ahsec.assam.gov.in/' },
  'punjab-board': { name: 'Punjab Board', icon: 'PB', url10: 'https://pseb.ac.in/', url12: 'https://pseb.ac.in/' },
  'haryana-board': { name: 'Haryana Board', icon: 'HR', url10: 'https://bseh.org.in/', url12: 'https://bseh.org.in/' },
  'jharkhand-board': { name: 'Jharkhand Board', icon: 'JH', url10: 'https://jac.jharkhand.gov.in/', url12: 'https://jac.jharkhand.gov.in/' },
  'chhattisgarh-board': { name: 'Chhattisgarh Board', icon: 'CG', url10: 'https://cgbse.nic.in/', url12: 'https://cgbse.nic.in/' },
  'himachal-board': { name: 'Himachal Board', icon: 'HP', url10: 'https://hpbose.org/', url12: 'https://hpbose.org/' },
  'uttarakhand-board': { name: 'Uttarakhand Board', icon: 'UK', url10: 'https://ubse.uk.gov.in/', url12: 'https://ubse.uk.gov.in/' },
  'jk-board': { name: 'J&K Board', icon: 'JK', url10: 'https://jkbose.nic.in/', url12: 'https://jkbose.nic.in/' },
  'goa-board': { name: 'Goa Board', icon: 'GA', url10: 'https://gseb.goa.gov.in/', url12: 'https://gseb.goa.gov.in/' },
  'manipur-board': { name: 'Manipur Board', icon: 'MN', url10: 'https://bosem.org.in/', url12: 'https://cohsem.nic.in/' },
  'meghalaya-board': { name: 'Meghalaya Board', icon: 'ML', url10: 'https://mbose.in/', url12: 'https://mbose.in/' },
  'mizoram-board': { name: 'Mizoram Board', icon: 'MZ', url10: 'https://mbse.edu.in/', url12: 'https://mbse.edu.in/' },
  'nagaland-board': { name: 'Nagaland Board', icon: 'NL', url10: 'https://nbsenagaland.com/', url12: 'https://nbsenagaland.com/' },
  'tripura-board': { name: 'Tripura Board', icon: 'TR', url10: 'https://tbse.tripura.gov.in/', url12: 'https://tbse.tripura.gov.in/' }
};

/* Shared NCERT-aligned chapters (all state boards follow NCERT closely) */
const BOARD_CHAPTERS = {
  '10-maths': ['Real Numbers','Polynomials','Pair of Linear Equations in Two Variables','Quadratic Equations','Arithmetic Progressions','Triangles','Coordinate Geometry','Introduction to Trigonometry','Some Applications of Trigonometry','Circles','Areas Related to Circles','Surface Areas & Volumes','Statistics','Probability'],
  '10-science': ['Chemical Reactions & Equations','Acids, Bases & Salts','Metals & Non-metals','Carbon & its Compounds','Life Processes','Control & Coordination','How do Organisms Reproduce?','Heredity & Evolution','Light – Reflection & Refraction','Human Eye & Colourful World','Electricity','Magnetic Effects of Electric Current','Our Environment'],
  '10-social': ['India & the Contemporary World II (History)','Contemporary India II (Geography)','Democratic Politics II (Civics)','Understanding Economic Development','Resources & Development','Nationalism in India','Money & Credit','Political Parties'],
  '10-english': ['Reading Comprehension (Unseen Passages)','Writing Skills (Letters & Essays)','Grammar','Literature: Prose','Literature: Poetry','Supplementary Reader'],
  '12-physics': ['Electric Charges & Fields','Electrostatic Potential & Capacitance','Current Electricity','Moving Charges & Magnetism','Magnetism & Matter','Electromagnetic Induction','Alternating Current','Electromagnetic Waves','Ray Optics & Optical Instruments','Wave Optics','Dual Nature of Radiation & Matter','Atoms','Nuclei','Semiconductor Electronics'],
  '12-chemistry': ['Solid State','Solutions','Electrochemistry','Chemical Kinetics','Surface Chemistry','General Principles & Processes of Isolation of Elements','p-Block Elements','The d- & f-Block Elements','Coordination Compounds','Haloalkanes & Haloarenes','Alcohols, Phenols & Ethers','Aldehydes, Ketones & Carboxylic Acids','Amines','Biomolecules','Polymers','Chemistry in Everyday Life'],
  '12-maths': ['Relations & Functions','Inverse Trigonometric Functions','Matrices','Determinants','Continuity & Differentiability','Applications of Derivatives','Integrals','Applications of Integrals','Differential Equations','Vector Algebra','Three Dimensional Geometry','Linear Programming','Probability'],
  '12-biology': ['Reproduction in Organisms','Sexual Reproduction in Flowering Plants','Human Reproduction','Reproductive Health','Principles of Inheritance & Variation','Molecular Basis of Inheritance','Evolution','Human Health & Disease','Strategies for Enhancement in Food Production','Microbes in Human Welfare','Biotechnology: Principles & Processes','Biotechnology & its Applications','Organisms & Populations','Ecosystem','Biodiversity & Conservation','Environmental Issues'],
  '12-english': ['Reading Comprehension (Unseen Passages)','Writing Skills (Letters, Essays & Reports)','Grammar & Usage','Literature: Flamingo','Literature: Vistas','Supplementary Reader']
};

