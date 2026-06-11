/* ═══════════════════════════════════════════════
   321每日得勝 — 離線 Service Worker
   改版時把 CACHE 的版號 +1（例如 v2、v3），
   使用者下次開啟就會自動更新快取。
   ═══════════════════════════════════════════════ */
var CACHE = '321daily-v1';

var ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
  'favicon-32.png'
];

/* 安裝：預先快取 app 外殼 */
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(ASSETS);
    }).then(function(){ return self.skipWaiting(); })
  );
});

/* 啟用：清除舊版本快取 */
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE){ return caches.delete(k); }
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* 取用：快取優先，無網路時回退到首頁 */
self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET'){ return; }
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached){ return cached; }
      return fetch(e.request).then(function(resp){
        if(resp && resp.status === 200 && resp.type === 'basic'){
          var clone = resp.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
        }
        return resp;
      }).catch(function(){
        // 離線且未快取：導航請求回退到首頁
        if(e.request.mode === 'navigate'){ return caches.match('index.html'); }
      });
    })
  );
});
