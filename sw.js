/* 321每日得勝 Service Worker —— 三語整合＋自動更新版
   ‧ 每次發佈 VER 都不同 → 瀏覽器發現 sw.js 改變就安裝新 SW
   ‧ install：skipWaiting；預載用 cache:'reload' 繞過 GitHub Pages 約 10 分鐘的 HTTP 快取
   ‧ activate：只刪自己前綴的舊快取（同網域還有其他 321 App）、clients.claim、通知所有頁面；
     背景中的舊頁面直接帶到新版
   ‧ fetch：HTML／JS／JSON 網路優先（no-cache），離線才用快取；圖片快取優先；影音與 Range 請求不攔截 */
var VER = 'v2026.1021.2340';
var PFX = 'p4planner-';
var V = PFX + VER;
var SHELL = ['./', './index.html', './tc.html', './sc.html', './en.html',
  './manifest.json', './manifest-sc.json', './manifest-en.json',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png', './favicon-32.png'];

function mine(k) { return k.indexOf(PFX) === 0 || /^p4-v\d/.test(k); }  /* p4-v… 是三個舊 repo 的快取名 */

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(function (c) {
    return Promise.all(SHELL.map(function (u) {
      return fetch(new Request(u, { cache: 'reload' })).then(function (r) { if (r && r.ok) return c.put(new URL(u, self.location).href, r); })['catch'](function () { });
    }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return mine(k) && k !== V; }).map(function (k) { return caches['delete'](k); }));
  }).then(function () { return self.clients.claim(); }).then(function () {
    return self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  }).then(function (cs) {
    cs.forEach(function (c) {
      try { c.postMessage({ t: 'sw-updated', v: VER }); } catch (x) { }
      if (c.visibilityState === 'hidden' && c.navigate) { try { c.navigate(c.url); } catch (x) { } }
    });
  }));
});

self.addEventListener('message', function (e) {
  if (e.data === 'skip' || (e.data && e.data.type === 'SKIP_WAITING')) self.skipWaiting();
});

self.addEventListener('fetch', function (e) {
  var r = e.request; if (r.method !== 'GET') return;
  var u; try { u = new URL(r.url); } catch (x) { return; }
  if (u.origin !== self.location.origin) return;            /* Firebase、gstatic 等交給瀏覽器 */
  var p = u.pathname;
  var scope = new URL('./', self.location).pathname;          /* /321planner/ */
  if (p.indexOf(scope) !== 0) return;                         /* 同網域的其他 App 不碰 */
  if (/\.(mp3|m4a|aac|wav|ogg|opus|mp4|mov|webm)$/i.test(p) || r.headers.get('range')) return;

  if (/version\.json$/.test(p)) {
    e.respondWith(fetch(u.origin + p + '?t=' + Date.now(), { cache: 'no-store' })['catch'](function () {
      return new Response('{}', { headers: { 'Content-Type': 'application/json' } });
    }));
    return;
  }

  var nav = r.mode === 'navigate' || /\.html$/.test(p) || /\/$/.test(p);
  if (nav || /\.(json|js|css)$/.test(p)) {
    var key = u.origin + (/\/$/.test(p) ? p + 'index.html' : p);   /* 每個語言檔各自一個快取鍵 */
    e.respondWith(fetch(u.origin + p + u.search, { cache: 'no-cache', credentials: 'same-origin' }).then(function (resp) {
      if (resp && resp.ok) { var cp = resp.clone(); caches.open(V).then(function (c) { c.put(key, cp); }); }
      return resp;
    })['catch'](function () {
      return caches.match(key).then(function (h) {
        if (h) return h;
        return caches.match(r, { ignoreSearch: true }).then(function (h2) {
          return h2 || (nav ? caches.match(u.origin + scope + 'tc.html') : undefined);
        });
      });
    }));
    return;
  }

  e.respondWith(caches.match(r, { ignoreSearch: true }).then(function (h) {
    return h || fetch(r).then(function (resp) {
      if (resp && resp.ok) { var cp = resp.clone(); caches.open(V).then(function (c) { c.put(r, cp); }); }
      return resp;
    });
  }));
});
