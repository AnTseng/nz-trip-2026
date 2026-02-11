const CACHE_NAME = 'nz-trip-2026-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/data.js',
  '/modules/tripInfo.js',
  '/modules/flights.js',
  '/modules/weatherInfo.js',
  '/modules/drivingTips.js',
  '/modules/packingList.js',
  '/modules/tips.js',
  '/modules/days.js',
  '/modules/schedules.js',
  '/modules/food.js'
];

// 安裝 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 快取策略：優先使用快取，失敗時從網路取得
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果有快取就返回快取，否則從網路取得
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // 不快取非 GET 請求或非同源請求
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // 複製回應並加入快取
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});

// 清理舊快取
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
