const CACHE_NAME = 'nz-trip-2026-v2';
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
  // 立即啟動新的 Service Worker
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 快取策略：Network First（開發友善）- 優先從網路取得，失敗才用快取
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // 網路請求成功，更新快取並返回
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // 網路失敗，使用快取
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // 如果快取也沒有，返回離線頁面或錯誤
            return new Response('離線模式：無法載入此資源', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// 清理舊快取並立即接管所有頁面
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // 清理舊快取
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // 立即接管所有頁面
      self.clients.claim()
    ])
  );
});
