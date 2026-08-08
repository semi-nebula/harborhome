/* Harbor Home service worker — offline app shell.
   Strategy: network-first for app code so deploys appear without hard refresh;
   cache-first for heavy static media/icons; never touch third-party APIs. */
const VERSION = 'harbor-home-v16';
const PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './exam-data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './assets/wallpapers/wp-aurora.jpg',
  './assets/wallpapers/wp-city.jpg',
  './assets/wallpapers/wp-desert.jpg',
  './assets/wallpapers/wp-forest.jpg'
];
const NETWORK_FIRST = new Set([
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/exam-data.js',
  '/manifest.json'
]);

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

async function networkFirst(request, fallbackKey) {
  const cache = await caches.open(VERSION);
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response && response.status === 200 && response.type === 'basic') cache.put(fallbackKey || request, response.clone());
    return response;
  } catch (error) {
    return (await cache.match(fallbackKey || request)) || (await cache.match('./index.html')) || Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response && response.status === 200 && response.type === 'basic') cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, './index.html'));
    return;
  }

  const pathname = url.pathname;
  if (NETWORK_FIRST.has(pathname) || /\.(?:js|css|json)$/i.test(pathname)) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});
