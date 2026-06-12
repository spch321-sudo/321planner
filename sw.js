/* 自我清除 service worker
   作用：把舊版 service worker 與所有快取清掉，之後一律走網路抓最新版。
   瀏覽器每次造訪會自動比對 sw.js 是否變動，變動就會安裝這個新版並自我註銷。 */
self.addEventListener('install', function(e){
  self.skipWaiting();
});
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys()
      .then(function(keys){ return Promise.all(keys.map(function(k){ return caches.delete(k); })); })
      .then(function(){ return self.registration.unregister(); })
      .then(function(){ return self.clients.matchAll(); })
      .then(function(clients){
        clients.forEach(function(c){ try{ c.navigate(c.url); }catch(err){} });
      })
  );
});
self.addEventListener('fetch', function(e){
  /* 永遠走網路，絕不從快取倒舊版 */
  e.respondWith(
    fetch(e.request).catch(function(){ return new Response('', {status:504}); })
  );
});
