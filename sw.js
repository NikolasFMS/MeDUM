// Isolated Service Worker for Medium: Abandoned Mansion (Vanilla HTML5/JS)
// Strictly scoped to this app's directory and cache prefix so sibling GitHub Pages apps are never affected.

const CACHE_PREFIX = 'medium-mansion-vanilla-';
const APP_CACHE = CACHE_PREFIX + 'v6';
const FONT_CACHE = CACHE_PREFIX + 'fonts-v1';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './secrets-data.js',
  './dictionaries-data.js',
  './app.js',
  './manifest.webmanifest',
  './icon.svg',
  './apple-touch-icon.png',
  './pwa-192x192.png',
  './pwa-512x512.png',
  './pwa-maskable-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then((cache) =>
      Promise.all(
        PRECACHE_ASSETS.map((asset) =>
          cache.add(new Request(asset, { cache: 'reload' }))
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith(CACHE_PREFIX) &&
                key !== APP_CACHE &&
                key !== FONT_CACHE
            )
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Cache Google Fonts in an isolated font cache when online; instant non-blocking CSS fallback offline
  if (
    url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com'
  ) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request)
            .then((response) => {
              if (response && (response.ok || response.type === 'opaque')) {
                cache.put(request, response.clone()).catch(() => {});
              }
              return response;
            })
            .catch(() =>
              url.origin === 'https://fonts.googleapis.com'
                ? new Response('', {
                    status: 200,
                    headers: { 'Content-Type': 'text/css; charset=utf-8' },
                  })
                : new Response('', { status: 408 })
            );
        })
      )
    );
    return;
  }

  // Only intercept requests strictly inside this Service Worker's directory scope
  const scopeUrl = self.registration.scope;
  if (!request.url.startsWith(scopeUrl)) {
    return;
  }

  const indexUrl = new URL('index.html', scopeUrl).href;

  // Navigation requests: network first with rock-solid offline cached index.html fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches
              .open(APP_CACHE)
              .then((cache) => cache.put(indexUrl, copy))
              .catch(() => {});
          }
          return response;
        })
        .catch(() =>
          caches.open(APP_CACHE).then(async (cache) => {
            return (
              (await cache.match(indexUrl, { ignoreSearch: true })) ||
              (await cache.match(scopeUrl, { ignoreSearch: true })) ||
              (await cache.match('./index.html', { ignoreSearch: true })) ||
              (await cache.match('./', { ignoreSearch: true })) ||
              new Response('Offline', { status: 503 })
            );
          })
        )
    );
    return;
  }

  // Same-scope static assets: Cache-first with background refresh
  event.respondWith(
    caches.open(APP_CACHE).then((cache) =>
      cache.match(request, { ignoreSearch: true }).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              cache.put(request, response.clone()).catch(() => {});
            }
            return response;
          })
          .catch(() => cached);

        return cached || networkFetch;
      })
    )
  );
});
