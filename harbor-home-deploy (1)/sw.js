/* Harbor Home service worker — offline app shell.
   Strategy: cache-first for the shell, network-first for navigation
   (so updates reach users), network-only for third-party APIs. */
const VERSION = 'harbor-home-v2';
const PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './assets/wallpapers/wp-aurora.jpg',
  './assets/wallpapers/wp-city.jpg',
  './assets/wallpapers/wp-desert.jpg',
  './assets/wallpapers/wp-forest.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // never touch third-party (firebase, weather, favicons)

  if (request.mode === 'navigate') {
    // Network-first so fresh deploys load; cached shell as offline fallback.
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html').then((hit) => hit || caches.match('./')))
    );
    return;
  }

  // Same-origin static: cache-first, then network + cache.
  event.respondWith(
    caches.match(request).then((hit) => hit || fetch(request).then((response) => {
      if (response && response.status === 200 && response.type === 'basic') {
        const copy = response.clone();
        caches.open(VERSION).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
