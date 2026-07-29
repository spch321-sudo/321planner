/* ============================================================
   321每日得勝 — Service Worker（離線可用 / Offline-capable）

   策略：
   1. index.html 採「網路優先 network-first」：
      有網路一律取最新版並更新快取；沒網路時用快取，再退回 index.html。
      → 使用者永遠離線可開，且有網時自動拿到最新版，不會卡舊版。
   2. 其他同源資源（圖示、manifest…）採 stale-while-revalidate：
      先給快取秒開，背景默默更新。
   3. 跨網域請求（Firebase、gstatic…）一律不攔截，
      確保雲端同步、動態載入完全正常。

   部署：把本檔 sw.js 與 index.html 放在同一資料夾。
   ★ 每次改版，請把下面 CACHE 版本號往上加（例如 v1.15.0 → v1.16.0），
     舊快取會在新版啟用時自動清除。
   ============================================================ */
var CACHE = 'p4-v1.15.0';
var CORE  = ['./', './index.html', './manifest.json', './icon-192.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // 逐一加入；任一資源缺失（例如未放某圖示）也不會導致整體安裝失敗
      return Promise.all(CORE.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// 供頁面主動觸發立即更新（選用）
self.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  // 跨網域（Firebase / gstatic 等）交給瀏覽器處理，SW 不介入
  if (url.origin !== self.location.origin) return;

  var accept = req.headers.get('accept') || '';
  var isHTML = req.mode === 'navigate' || accept.indexOf('text/html') !== -1;

  if (isHTML) {
    // 網路優先：有網取最新並更新快取；沒網用快取；再退回 index.html
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (m) {
          return m || caches.match('./index.html') || caches.match('./');
        });
      })
    );
    return;
  }

  // 其他同源資源：stale-while-revalidate（先快取、背景更新）
  e.respondWith(
    caches.match(req).then(function (cached) {
      var net = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || net;
    })
  );
});
