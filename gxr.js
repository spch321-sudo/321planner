/* gxr.js — 321 閱讀套件（ES5）：TTS321 朗讀核心 v1.4.0（取自創世記講義）＋ GXR 掛件。 */
var TTS321 = (function () {
  'use strict';

  /* ── 預設值 ────────────────────────────────────────────────────────── */

  var DEF = {
    worker: '',
    db: 'r321_tts',
    store: 'a',
    voices: {},
    defaultVoice: '',
    lang: 'zh-TW',
    /* 中文一句約 110 字；英文一句長得多，所以每個 App 自己給 */
    chunk: { punct: '。！？；\n', min: 110, max: 300 },
    sil: { s: 140, c: 140, e: 260 },
    say: [],              // 破音字修正 [[RegExp, '替代字'], …]
    t2s: null,            // 繁→簡：單字表 {繁:簡} 或 fn(str)->str；給了就自動展開 say 的簡體版
    script: null,         // 'tc' | 'sc' | fn()->'tc'|'sc'；知道是哪一套就只產那一套
    preStart: 2,          // 抓到幾段就開播
    preAhead: 8,          // 往前預抓幾段
    parallel: 4,          // 同時幾個請求
    retry: [800, 1600],   // 退避重試（毫秒）；Worker 冷啟動用
    holdScroll: 6000,     // 使用者自己捲過之後，幾毫秒內不搶畫面
    /* 停在哪裡：存進設定的哪一格。設成 '' 就不記。
       這一格要加進 ST321 的 defaults（唯一欄位清單），不要另外開一個
       localStorage key——不然匯出備份的時候會漏掉，換一台裝置就沒了。 */
    bookmarkKey: 'ttsMark',
    keyFor: null,         // fn(unit) -> string  這一句在這一頁的身分證（畫線／書籤用同一把）
    labels: {
      bar: '朗讀中', buffering: '緩衝中…', prev: '上一句', next: '下一句',
      pause: '暫停', resume: '繼續', stop: '停止', follow: '自動捲動',
      resumeFrom: '從上次停的地方繼續（第 {n} 句）',
      startOver: '從頭開始讀',
      followOn: '朗讀時自動捲動', followOff: '不自動捲動，畫面由你控制',
      fallback: '真人語音連不上，改用裝置語音',
      nosupport: '這台裝置不支援朗讀'
    },
    media: null,          // { artist, album, icon } 鎖屏／耳機／車機上顯示什麼
    settings: null,       // { get: fn -> {human,voice,rate,follow}, save: fn }
    elFor: null,          // fn(unit) -> DOM element | null
    stillHere: null,      // fn(scope) -> bool   還在同一頁嗎
    clean: null,          // fn(text) -> text    App 專屬的朗讀前清理
    toast: null,          // fn(msg)
    onItem: null          // fn(index, unit)     每換一句回呼（選用）
  };

  var C = null;                       // 生效中的設定
  var SPK = { on: false, tok: 0 };    // 播放狀態
  var PL = null;                      // 串流佇列
  var AUP = null;                     // 兩個 <audio> 輪流用
  var LAST = [];                      // 目前標示中的元素
  var SAY = [];                       // 展開後的破音字表
  var BAR = null;

  /* ── 小工具 ────────────────────────────────────────────────────────── */

  function ext(a, b) { for (var k in b) if (b.hasOwnProperty(k)) a[k] = b[k]; return a; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function set() { return (C && C.settings && C.settings.get && C.settings.get()) || {}; }
  function save() { if (C && C.settings && C.settings.save) C.settings.save(); }
  function toast(m) { if (C && C.toast) C.toast(m); }
  function L(k) { return (C && C.labels && C.labels[k]) || DEF.labels[k] || ''; }

  function voiceName() {
    var s = set(), v = C.voices[s.voice] || C.voices[C.defaultVoice];
    if (!v) { for (var k in C.voices) { v = C.voices[k]; break; } }
    return v ? v.name : '';
  }
  function rateAttr() {
    var r = set().rate || 0;
    return (r >= 0 ? '+' : '') + (r * 5) + '%';
  }

  /* ── 破音字表：繁體 pattern 自動展開簡體 ──────────────────────────────
   * 學神神學的教訓：SAYFIX 全是繁體 pattern，簡體模式下畫面文字已經是簡體，
   * 整張表比對不到——902 處校正有 733 處對簡體讀者完全失效。
   * 核心在這裡做掉，App 只要給一張繁→簡單字表（make_scmap.py 本來就有）。
   * ------------------------------------------------------------------- */

  /* C.t2s 可以是一張單字表 {繁:簡}，也可以是宿主自己的轉換函式（詞組表那種）。 */
  function t2s(str) {
    if (!C.t2s) return str;
    if (typeof C.t2s === 'function') { try { return C.t2s(str); } catch (e) { return str; } }
    var out = '', i;
    for (i = 0; i < str.length; i++) out += (C.t2s[str.charAt(i)] || str.charAt(i));
    return out;
  }

  /* 這裡有一個很容易漏掉的坑。
   *
   * 有些規則的 pattern 繁簡同形，但**替代字不同形**——例如
   *
   *     重生 → 蟲生（繁）    重生 → 虫生（簡）
   *
   * 兩條都加的話，pattern 一模一樣，先加的那一條永遠先換掉，
   * 後面那一條再也找不到東西。簡體讀者拿到的就是「蟲生」——
   * 唸得出來，但那是繁體字混進簡體版裡。
   *
   * 所以要知道現在是繁是簡。C.script 給了就只產那一套；
   * 沒給就兩套都產（舊行為，不會弄壞既有的 App）。
   * 切換語言之後記得叫一次 TTS321.rebuildSay()。
   * ------------------------------------------------------------------- */

  function script() {
    if (!C || !C.script) return '';
    try { return typeof C.script === 'function' ? C.script() : C.script; }
    catch (e) { return ''; }
  }

  function buildSay() {
    SAY = [];
    var seen = {}, sc = script();
    function add(re, to) {
      var k = String(re) + '\u0000' + to;
      if (seen[k]) return;
      seen[k] = 1; SAY.push([re, to]);
    }
    function toSC(re, to) {
      var srcS = t2s(re.source), toS = t2s(to);
      return [new RegExp(srcS, re.flags || 'g'), toS];
    }
    for (var i = 0; i < (C.say || []).length; i++) {
      var pair = C.say[i], re = pair[0], to = pair[1], v;
      if (sc === 'sc' && C.t2s && re instanceof RegExp) {
        v = toSC(re, to); add(v[0], v[1]);          // 簡體版只要簡體那一套
        continue;
      }
      add(re, to);
      if (sc === 'tc') continue;                    // 繁體版只要繁體那一套
      if (C.t2s && re instanceof RegExp) {          // 不知道是哪一套：兩套都上
        v = toSC(re, to);
        if (v[0].source !== re.source || v[1] !== to) add(v[0], v[1]);
      }
    }
  }

  /* ── 送去合成之前的整理 ───────────────────────────────────────────── */

  function sanitize(t) {
    t = String(t == null ? '' : t).replace(/<[^>]+>/g, ' ');
    t = t.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
         .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    if (C.clean) t = C.clean(t);                    // App 專屬清理（原文、括號出處…）
    for (var i = 0; i < SAY.length; i++) t = t.replace(SAY[i][0], SAY[i][1]);
    t = t.replace(/\s+([，。！？；、,.!?;])/g, '$1');
    return t.replace(/\s{2,}/g, ' ').replace(/^\s+|\s+$/g, '');
  }

  function chunks(t) {
    t = sanitize(t);
    if (!t) return [];
    var out = [], buf = '', i, ch, cfg = C.chunk;
    for (i = 0; i < t.length; i++) {
      ch = t.charAt(i); buf += ch;
      if (cfg.punct.indexOf(ch) >= 0 && buf.length >= cfg.min) { out.push(buf); buf = ''; }
    }
    if (buf.replace(/^\s+|\s+$/g, '')) out.push(buf);
    var fin = [];
    for (i = 0; i < out.length; i++) {
      var s = out[i];
      while (s.length > cfg.max) { fin.push(s.slice(0, cfg.max)); s = s.slice(cfg.max); }
      if (s) fin.push(s);
    }
    return fin.length ? fin : [t];
  }

  /* ── 原文（希伯來文／希臘文）只唸一遍 ──────────────────────────────
   * 中文語音唸不出原文。後面若跟著括號裡的拼音，就只唸那個拼音；
   * 沒有拼音就整段略過。略過之後還要把「原文是（）。」這種懸在半空的
   * 括號與接續詞一起收乾淨——不收的話會唸成「原文是　。」。
   *
   * 這一段本來只在創世記 App 裡；啟示錄那一版只把希臘文拿掉，
   * 留下一對空括號。收進核心之後兩邊都對。
   * ------------------------------------------------------------------ */

  var ORIG_CH = '\u0590-\u05FF\u0370-\u03FF\u1F00-\u1FFF';
  var ORIG_RUN = '[' + ORIG_CH + '][' + ORIG_CH + '\\s\'\u2019\\-\u05be\u05f3\u05f4\u00b7]*';
  var RE_ORIG_ROMAN = new RegExp(
    ORIG_RUN + '\\s*[（(]\\s*([A-Za-z][A-Za-z\'\u2019\u0101\u0113\u012b\u014d\u016b\\- ]*)\\s*[）)]', 'g');
  var RE_ORIG_RUN = new RegExp(ORIG_RUN, 'g');

  function stripOriginal(t) {
    t = String(t == null ? '' : t);
    t = t.replace(RE_ORIG_ROMAN, ' $1 ').replace(RE_ORIG_RUN, '\u0000');
    t = t.replace(/[（(]\s*\u0000\s*[）)]/g, '\u0000');
    t = t.replace(/[是叫作為的]?\s*\u0000\s*(?=[，。；、！？])/g, '');
    t = t.replace(/\s*\u0000\s*/g, ' ');
    return t.replace(/[（(]\s*[）)]/g, ' ');
  }

  /* 送去合成的字 ≠ 畫面上的字。
     畫面要留著原文、書名號、8:28 這些；送去唸的要換成「八章二十八節」。
     核心在這裡統一做，宿主只要給畫面上的字就好——
     否則每個 App 都要自己記得先 sanitize 一次，漏掉就整段原文照著亂唸。 */
  function speechText(u) {
    if (typeof u === 'string') return sanitize(u);
    if (u._s == null) u._s = sanitize(u.t);
    return u._s;
  }

  /* ── IndexedDB 音檔快取 ───────────────────────────────────────────── */

  function db(cb) {
    try {
      if (!window.indexedDB) return cb(null);
      var r = indexedDB.open(C.db, 1);
      r.onupgradeneeded = function () {
        try {
          if (!r.result.objectStoreNames.contains(C.store)) r.result.createObjectStore(C.store);
        } catch (e) {}
      };
      r.onsuccess = function () { cb(r.result); };
      r.onerror = function () { cb(null); };
    } catch (e) { cb(null); }
  }

  function cacheGet(k, cb) {
    db(function (d) {
      if (!d) return cb(null);
      try {
        var q = d.transaction(C.store).objectStore(C.store).get(k);
        q.onsuccess = function () { cb(q.result || null); };
        q.onerror = function () { cb(null); };
      } catch (e) { cb(null); }
    });
  }

  function cachePut(k, blob) {
    db(function (d) {
      if (!d) return;
      try { d.transaction(C.store, 'readwrite').objectStore(C.store).put(blob, k); } catch (e) {}
    });
  }

  function cacheCount(cb) {
    db(function (d) {
      if (!d) return cb(0);
      try {
        var q = d.transaction(C.store).objectStore(C.store).count();
        q.onsuccess = function () { cb(q.result || 0); };
        q.onerror = function () { cb(0); };
      } catch (e) { cb(0); }
    });
  }

  /* 這幾段已經下載了幾段？——一次交易查完，不逐段開連線。
     用在「預先下載」按鈕上：進頁時要能說出「已有 12/45」。 */
  function cacheHave(units, cb) {
    units = units || [];
    if (!units.length) return cb(0, 0);
    var pre = voiceName() + '|' + rateAttr() + '|';
    db(function (d) {
      if (!d) return cb(0, units.length);
      try {
        var st = d.transaction(C.store).objectStore(C.store);
        var n = 0, done = 0, i;
        for (i = 0; i < units.length; i++) {
          (function (u) {
            var k = pre + speechText(u);
            var q = st.getKey ? st.getKey(k) : st.count(k);
            q.onsuccess = function () {
              if (q.result !== undefined && q.result !== 0) n++;
              if (++done === units.length) cb(n, units.length);
            };
            q.onerror = function () { if (++done === units.length) cb(n, units.length); };
          })(units[i]);
        }
      } catch (e) { cb(0, units.length); }
    });
  }

  function cacheClear(cb) {
    db(function (d) {
      if (!d) return cb && cb();
      try {
        var q = d.transaction(C.store, 'readwrite').objectStore(C.store).clear();
        q.onsuccess = function () { cb && cb(); };
        q.onerror = function () { cb && cb(); };
      } catch (e) { cb && cb(); }
    });
  }

  /* ── 取音檔：快取 → Worker（退避重試）───────────────────────────────
   * 領導力 App 的教訓：一個 session 裡「只有第一次」會失敗，換語言再換回來就好——
   * 那是 Worker 冷啟動的指紋，不是哪個語音的 bug。解法是開機預熱 ＋ 退避重試。
   * ------------------------------------------------------------------- */

  function post(text) {
    return fetch(C.worker, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        voice: voiceName(), rate: rateAttr(),
        sil: C.sil.s, silc: C.sil.c, sile: C.sil.e, text: text
      })
    }).then(function (res) {
      if (!res.ok) throw new Error('TTS ' + res.status);
      return res.blob();
    });
  }

  function fetchAudio(piece) {
    var key = voiceName() + '|' + rateAttr() + '|' + piece;
    return new Promise(function (resolve, reject) {
      cacheGet(key, function (hit) {
        if (hit) return resolve(hit);
        var n = 0;
        function attempt() {
          post(piece).then(function (blob) {
            cachePut(key, blob); resolve(blob);
          }, function (err) {
            if (n >= C.retry.length) return reject(err);
            var wait = C.retry[n++];
            setTimeout(attempt, wait);
          });
        }
        attempt();
      });
    });
  }

  /* 開機就先戳一下，把冷啟動的代價吃在使用者按下播放之前 */
  function warmUp() {
    if (!C || !C.worker) return;
    /* 離線時不必預熱——Worker 也連不上，只會在主控台留下一筆紅字 */
    try { if (navigator.onLine === false) return; } catch (e) {}
    try { post('.').then(function () {}, function () {}); } catch (e) {}
  }

  /* ── 兩個 <audio> 輪流接力 ────────────────────────────────────────── */

  var SILENT = 'data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA';

  function pair() {
    if (!AUP) {
      AUP = [];
      for (var i = 0; i < 2; i++) {
        var a = new Audio();
        a.preload = 'auto'; a.loop = false;
        a.setAttribute('playsinline', '');
        a.addEventListener('play', function () { mediaState('playing'); });
        a.addEventListener('pause', function () { if (!SPK.on) mediaState('paused'); });
        AUP.push(a);
      }
    }
    return AUP;
  }

  /* ── MediaSession（鎖屏控制）與 Wake Lock ─────────────────────────── */

  var wake = null;

  /* 鎖屏上的封面：宿主沒指定就用頁面自己的 apple-touch-icon／icon */
  function appIcon() {
    if (C.media && C.media.icon) return C.media.icon;
    try {
      var l = document.querySelector('link[rel="apple-touch-icon"], link[rel="icon"]');
      return (l && l.getAttribute('href')) || '';
    } catch (e) { return ''; }
  }

  /* Wake Lock 會被系統收回——螢幕一鎖就收，分頁一藏也收。
     收回之後 wake 這個變數還在，看起來像還握著，其實早就沒了。
     所以要看 released，而且回到前景時要再要一次。 */
  function wakeGet() {
    try {
      if (!navigator.wakeLock || !navigator.wakeLock.request) return;
      if (wake && !wake.released) return;
      navigator.wakeLock.request('screen').then(function (w) {
        wake = w;
        try { w.addEventListener('release', function () { wake = null; }); } catch (e) {}
      }, function () { wake = null; });
    } catch (e) {}
  }

  /* 鎖屏上要看得到「唸到哪裡了」。每換一句就更新一次。 */
  function mediaNow(k, total) {
    try {
      if (!navigator.mediaSession) return;
      var md = navigator.mediaSession.metadata;
      if (md && total) md.artist = (C.media && C.media.artist ? C.media.artist + '　·　' : '') +
                                   '第 ' + (k + 1) + ' / ' + total + ' 句';
      if (navigator.mediaSession.setPositionState) {
        navigator.mediaSession.setPositionState({
          duration: total || 0, position: Math.min(k, total || 0), playbackRate: 1
        });
      }
    } catch (e) {}
  }

  function mediaSetup(title) {
    try {
      if (!navigator.mediaSession || !window.MediaMetadata) return;
      var m = C.media || {}, ic = appIcon();
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: title || L('bar'),
        artist: m.artist || '',
        album: m.album || '',
        artwork: ic ? [{ src: ic, sizes: '180x180', type: 'image/png' }] : []
      });
      navigator.mediaSession.setActionHandler('play', function () { if (SPK.pause) togglePause(); });
      navigator.mediaSession.setActionHandler('pause', function () { if (!SPK.pause) togglePause(); });
      navigator.mediaSession.setActionHandler('stop', stop);
      navigator.mediaSession.setActionHandler('previoustrack', function () { step(-1); });
      navigator.mediaSession.setActionHandler('nexttrack', function () { step(1); });
      /* 車機／耳機只給快轉鍵的，也讓它當上下一句用 */
      navigator.mediaSession.setActionHandler('seekbackward', function () { step(-1); });
      navigator.mediaSession.setActionHandler('seekforward', function () { step(1); });
    } catch (e) {}
    wakeGet();
  }

  function mediaState(s) {
    try { if (navigator.mediaSession) navigator.mediaSession.playbackState = s; } catch (e) {}
  }

  function wakeRelease() {
    try { if (wake) { wake.release(); wake = null; } } catch (e) {}
  }

  /* ── 背景播放的看門狗 ─────────────────────────────────────────────
   * 接力本身是靠 <audio> 的 ended 事件走的，不靠計時器，所以切到背景
   * 之後計時器被節流也不會斷。真正會斷的是另外三件事：
   *
   *   ① iOS 只認「手勢當下」play() 過的元素。兩個播放器輪流接力，
   *      其中一個沒被解鎖的話，在前景看不出來（使用者的觸碰隨時在解鎖），
   *      一切到背景就只有一半的句子出得了聲。
   *      → play() 那一刻兩個都餵一段無聲檔解鎖（這一段本來就有）。
   *
   *   ② 電話、Siri、鬧鐘打斷之後，元素被系統按了暫停，而且不會自己回來。
   *      畫面上還顯示「朗讀中」，耳機裡什麼都沒有。
   *
   *   ③ 切到背景的那一瞬間剛好在換句，新元素的 play() 被擋掉。
   *
   * ②③ 的指紋一模一樣：**我們認為正在播，可是元素是停的**。
   * 所以不必分辨是哪一種，看到這個狀態就推一下。
   *
   * 每秒一次。背景節流會把它拉長到幾秒一次——那正好，反正是救援，
   * 不是主線。
   * ------------------------------------------------------------------- */

  var WD = null;

  function current() {
    try { return PL ? pair()[PL.cur] : null; } catch (e) { return null; }
  }

  function nudge() {
    if (!SPK.on || SPK.pause || SPK.buffering) return;
    var a = current();
    if (!a || !a.src || a.ended) return;
    if (!a.paused) { SPK.stall = 0; return; }
    SPK.stall = (SPK.stall || 0) + 1;
    /* 連續推了十幾秒還是不動，就別再推了——再推下去只是在主控台刷紅字。
       使用者回到前景按一下播放鍵，一切照常。 */
    if (SPK.stall > 15) return;
    try { var p = a.play(); if (p && p['catch']) p['catch'](function () {}); } catch (e) {}
    mediaState('playing');
  }

  function watch(on) {
    try { if (WD) { clearInterval(WD); WD = null; } } catch (e) {}
    if (on) { try { WD = setInterval(nudge, 1000); } catch (e) {} }
  }

  var bgBound = false;
  function bindBackground() {
    if (bgBound) return;
    bgBound = true;
    try {
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) return;
        if (!SPK.on || SPK.pause) return;
        wakeGet();        // 藏起來的時候被系統收回了，回來要再要一次
        SPK.stall = 0;    // 回到前景重新給它機會
        nudge();
      });
    } catch (e) {}
  }

  /* ── 逐句標示與跟讀 ───────────────────────────────────────────────
   * 手動捲動偵測不可以用 scroll 事件——自己的 smooth scroll 會觸發它，
   * 於是「使用者捲過了」永遠成立，跟讀就再也不動了。改聽真正的輸入意圖事件。
   * ------------------------------------------------------------------- */

  function clearMark() {
    for (var i = 0; i < LAST.length; i++) {
      try { LAST[i].classList.remove('spk-now'); } catch (e) {}
    }
    LAST = [];
  }

  function mark(unit) {
    if (!unit || !PL) return;
    if (C.stillHere && !C.stillHere(PL.scope)) return;   // 不在這一頁就不動畫面
    clearMark();
    var els = C.elFor ? C.elFor(unit) : (unit.el || null);
    if (!els) return;
    if (!(els instanceof Array)) els = [els];
    if (!els.length) return;

    /* 收起來的摺疊區塊，讀到就打開 */
    try {
      var dt = els[0].closest && els[0].closest('details');
      if (dt && !dt.open) dt.open = true;
    } catch (e) {}

    for (var i = 0; i < els.length; i++) els[i].classList.add('spk-now');
    LAST = els;

    if (set().follow === 0) return;
    if (Date.now() < (SPK.hold || 0)) return;
    try { els[0].scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    catch (e) { try { els[0].scrollIntoView(); } catch (e2) {} }
  }

  function bindIntent() {
    var evs = ['wheel', 'touchstart', 'touchmove', 'pointerdown'];
    for (var i = 0; i < evs.length; i++) {
      window.addEventListener(evs[i], function () {
        if (SPK.on) SPK.hold = Date.now() + C.holdScroll;
      }, { passive: true });
    }
    window.addEventListener('keydown', function (e) {
      if (!SPK.on) return;
      var k = e.key;
      if (k === 'ArrowUp' || k === 'ArrowDown' || k === 'PageUp' || k === 'PageDown' ||
          k === 'Home' || k === 'End' || k === ' ') SPK.hold = Date.now() + C.holdScroll;
    });
  }

  /* 畫面重繪之後把標示點回原位。
     畫線／換色／寫筆記都會整個重繪，舊元素失效，不重綁就再也標不回來。 */
  function rebind() {
    if (!SPK.on || !PL) return;
    var u = PL.units[PL.i];
    if (!u) return;
    var hold = SPK.hold;
    SPK.hold = Date.now() + 1;      // 重綁不搶畫面
    mark(u);
    SPK.hold = hold;
  }

  /* ── 控制列 ───────────────────────────────────────────────────────── */

  function drawBar() {
    if (!SPK.on) { if (BAR) { BAR.parentNode && BAR.parentNode.removeChild(BAR); BAR = null; } return; }
    if (!BAR) {
      BAR = document.createElement('div');
      BAR.id = 'spkbar'; BAR.className = 'spkbar';
      document.body.appendChild(BAR);
      BAR.addEventListener('click', function (e) {
        var a = e.target.getAttribute && e.target.getAttribute('data-a');
        if (a === 'prev') step(-1);
        else if (a === 'next') step(1);
        else if (a === 'pause') togglePause();
        else if (a === 'stop') stop();
        else if (a === 'follow') toggleFollow();
      });
    }
    var st = SPK.buffering ? '<span class="pv">' + esc(L('buffering')) + '</span>'
      : (SPK.total ? '<span class="pv">' + ((SPK.i || 0) + 1) + '/' + SPK.total + '</span>' : '');
    /* 只要這一輪真的標示得到畫面上的元素，就該有「跟讀」開關——
       同一支 App 可能一頁有句子結構、另一頁沒有（整頁唸完那種），
       所以要問這一輪的第一個單位，不是問宿主有沒有給 elFor。 */
    var canFollow = false;
    try {
      var u0 = PL && PL.units && PL.units[0];
      if (u0) {
        var e0 = C.elFor ? C.elFor(u0) : u0.el;
        canFollow = !!(e0 && (!(e0 instanceof Array) || e0.length));
      }
    } catch (e) { canFollow = false; }
    var fol = canFollow
      ? '<button data-a="follow" class="' + (set().follow === 0 ? '' : 'on') + '" title="' +
        esc(L('follow')) + '">' + (set().follow === 0 ? '⇕' : '⇳') + '</button>' : '';
    BAR.innerHTML = '<span class="dot"></span><b>' + esc(SPK.title) + '</b>' + st +
      '<button data-a="prev" title="' + esc(L('prev')) + '">⏮</button>' +
      '<button data-a="pause" title="' + esc(SPK.pause ? L('resume') : L('pause')) + '">' +
      (SPK.pause ? '▶' : '⏸') + '</button>' +
      '<button data-a="next" title="' + esc(L('next')) + '">⏭</button>' +
      fol +
      '<button data-a="stop" title="' + esc(L('stop')) + '">✕</button>';
  }

  /* ── 串流播放 ─────────────────────────────────────────────────────── */

  function pump() {
    if (!PL || PL.tok !== SPK.tok) return;
    var end = Math.min(PL.units.length, Math.max(C.preStart, PL.i + 1 + C.preAhead));
    for (var k = PL.i; k < end && PL.running < C.parallel; k++) {
      if ((PL.try[k] || 0) < 3) grab(k);
    }
  }

  function grab(k) {
    if (!PL || PL.tok !== SPK.tok) return;
    if (PL.blobs[k] || PL.pend[k]) return;
    PL.pend[k] = 1; PL.running++;
    var my = SPK.tok;
    fetchAudio(speechText(PL.units[k])).then(function (b) {
      if (PL && PL.tok === my) PL.blobs[k] = b;
    }, function () {
      if (PL && PL.tok === my) { PL.fail++; PL.try[k] = (PL.try[k] || 0) + 1; }
    })['then'](function () {
      if (!PL || PL.tok !== my) return;
      PL.pend[k] = 0; PL.running--;
      var n = 0;
      for (var i = 0; i < PL.blobs.length; i++) if (PL.blobs[i]) n++;
      SPK.prep = n;
      drawBar(); pump();
    });
  }

  function playAt(k) {
    if (!PL || PL.tok !== SPK.tok) return;
    if (k >= PL.units.length) return stop({ done: true });
    var b = PL.blobs[k];
    if (!b) {
      if ((PL.try[k] || 0) >= 3) {          // 這一段真的抓不到，跳過去，不要卡住整課
        PL.i = k; SPK.i = k; return playAt(k + 1);
      }
      SPK.buffering = true; SPK.i = k; drawBar(); pump();
      return setTimeout(function () { playAt(k); }, 150);
    }
    /* 還在緩衝的時候按了暫停：音檔一到就照放不誤，暫停等於沒按。
       使用者會以為是當掉了。 */
    if (SPK.pause) { SPK.buffering = false; PL.i = k; SPK.i = k; drawBar(); return; }
    SPK.buffering = false;
    PL.i = k; SPK.i = k;
    var els = pair(), a = els[PL.cur];
    a.src = URL.createObjectURL(b);
    a.onended = function () {
      if (!PL || PL.tok !== SPK.tok) return;
      try { URL.revokeObjectURL(a.src); } catch (e) {}
      PL.cur = 1 - PL.cur;
      playAt(k + 1);
    };
    a.onerror = function () {
      if (PL && PL.tok === SPK.tok) { PL.cur = 1 - PL.cur; playAt(k + 1); }
    };
    var p = a.play(); if (p && p['catch']) p['catch'](function () {});
    mark(PL.units[k]);
    mediaNow(k, PL.units.length);
    if (C.onItem) { try { C.onItem(k, PL.units[k]); } catch (e) {} }
    drawBar(); pump();
    var nb = PL.blobs[k + 1];
    if (nb) {
      var nx = els[1 - PL.cur];
      try { nx.src = URL.createObjectURL(nb); nx.load(); } catch (e) {}
    }
  }

  function waitAndStart() {
    var my = SPK.tok, st = (PL && PL.i) || 0;
    (function tick() {
      if (!PL || PL.tok !== my || !SPK.on) return;
      var ready = PL.blobs[st] && (PL.blobs[st + 1] || PL.units.length < st + 2);
      if (ready) return playAt(st);
      if (PL.fail >= 3 && !PL.blobs[st]) {
        var txt = [];
        for (var i = st; i < PL.units.length; i++) txt.push(PL.units[i].t);
        stop({ forget: true }); toast(L('fallback'));
        return native(txt.join('\n'));
      }
      setTimeout(tick, 120);
    })();
  }

  /* ── 裝置內建語音（離線／Worker 掛掉時的退路）──────────────────────── */

  function native(t) {
    if (!window.speechSynthesis) return toast(L('nosupport'));
    try { speechSynthesis.cancel(); } catch (e) {}
    var u = new window.SpeechSynthesisUtterance(sanitize(t));
    u.lang = C.lang;
    u.rate = 0.94 + (set().rate || 0) * 0.05;
    try {
      var vs = speechSynthesis.getVoices(), base = C.lang.split('-')[0], v = null, i;
      for (i = 0; i < vs.length; i++) if (vs[i].lang.replace('_', '-') === C.lang) { v = vs[i]; break; }
      if (!v) for (i = 0; i < vs.length; i++) if (vs[i].lang.indexOf(base) === 0) { v = vs[i]; break; }
      if (v) u.voice = v;
    } catch (e) {}
    try { speechSynthesis.speak(u); } catch (e) {}
  }

  /* ── 停在哪裡 ───────────────────────────────────────────────────────
   * 按停止多半不是「不要了」，是「先到這裡，等一下接著讀」。
   * 所以停止的時候要把位置留下來——而且要留在設定裡，跟著備份走，
   * 不要另外開一個 localStorage key（匯出的時候會漏掉，換一台裝置就沒了）。
   *
   * 留兩份：第幾句，加上那一句的身分證。
   *   · 只留第幾句 → 講義改過一次（多一段、少一段），第 37 句就不是原來那句
   *   · 只留身分證 → 宿主沒給 keyFor 的話什麼都沒有
   * 回來的時候先認身分證，認不出來才退回第幾句。
   * ------------------------------------------------------------------- */

  function unitKey(u) {
    if (!u) return '';
    if (C && C.keyFor) { try { return String(C.keyFor(u) || ''); } catch (e) { return ''; } }
    return String(u.key || u.id || '');
  }

  function bmSave() {
    if (!C || !C.bookmarkKey || !PL || !PL.units.length) return null;
    var i = Math.max(0, Math.min(PL.units.length - 1, PL.i || 0));
    var b = {
      scope: PL.scope || '', i: i, total: PL.units.length,
      key: unitKey(PL.units[i]), title: SPK.title || '', at: Date.now()
    };
    try { var s = set(); s[C.bookmarkKey] = b; save(); } catch (e) {}
    return b;
  }

  function bookmark(scope) {
    if (!C || !C.bookmarkKey) return null;
    var b = null;
    try { b = set()[C.bookmarkKey]; } catch (e) { b = null; }
    if (!b || typeof b.i !== 'number') return null;
    /* 同一支 App 有好幾頁，書籤只對得上自己那一頁。
       沒給 scope 就不挑——宿主自己知道它在問哪一頁。 */
    if (scope != null && String(scope) !== String(b.scope == null ? '' : b.scope)) return null;
    return b;
  }

  function clearBookmark() {
    if (!C || !C.bookmarkKey) return;
    try {
      var s = set();
      if (s[C.bookmarkKey] == null) return;
      s[C.bookmarkKey] = null;
      save();
    } catch (e) {}
  }

  function keyIndex(units, key) {
    key = String(key == null ? '' : key);
    if (!key) return -1;
    for (var i = 0; i < units.length; i++) if (unitKey(units[i]) === key) return i;
    return -1;
  }

  function bmIndex(units, b) {
    if (!b || !units || !units.length) return 0;
    var k = keyIndex(units, b.key);
    if (k >= 0) return k;
    k = parseInt(b.i, 10) || 0;
    return Math.max(0, Math.min(units.length - 1, k));
  }

  /* 這一輪要從第幾句起。三種說法，優先序由明確到含糊。 */
  function startIndex(units, opts) {
    var n = 0;
    if (opts.from != null && opts.from !== 'bookmark') n = parseInt(opts.from, 10) || 0;
    else if (opts.at != null) { n = keyIndex(units, opts.at); if (n < 0) n = 0; }
    else if (opts.resume || opts.from === 'bookmark') n = bmIndex(units, bookmark(opts.scope));
    if (n < 0) n = units.length + n;               // -1 = 最後一句
    return Math.max(0, Math.min(units.length - 1, n));
  }

  /* ── 對外 API ─────────────────────────────────────────────────────── */

  function play(units, opts) {
    if (!C) throw new Error('TTS321.init() 還沒呼叫');
    opts = opts || {};
    units = (units || []).filter(function (u) { return u && speechText(u); });
    if (!units.length) return;

    var st = startIndex(units, opts);
    if (!set().human) {
      /* 裝置語音沒有「第幾句」的概念，但「從第幾句開始」還是要算數——
         從 st 那一句起串起來唸就好。 */
      var txt = [];
      for (var i = st; i < units.length; i++) txt.push(units[i].t);
      return native(txt.join('\n'));
    }
    stop();
    var my = ++SPK.tok;
    SPK = {
      on: true, pause: false, tok: my, i: st, prep: 0,
      total: units.length, title: opts.title || L('bar'), hold: 0
    };
    PL = {
      tok: my, units: units, blobs: [], pend: [], try: [], i: st, cur: 0,
      scope: opts.scope || null, fail: 0, running: 0
    };
    var els = pair(), k;
    for (k = 0; k < els.length; k++) {
      try { els[k].pause(); els[k].removeAttribute('src'); els[k].load(); } catch (e) {}
    }
    SPK.stall = 0;
    watch(true);
    /* iOS 只認手勢當下的 play()：趁這一刻把兩個播放器都解鎖。
       這一步是背景播放的命根子——少了它，切到背景之後只有一半的句子
       出得了聲，而且在前景永遠測不出來（使用者的觸碰隨時都在解鎖）。 */
    for (k = 0; k < els.length; k++) {
      try {
        els[k].src = SILENT;
        var p = els[k].play(); if (p && p['catch']) p['catch'](function () {});
      } catch (e) {}
    }
    setTimeout(function () {
      for (var i = 1; i < els.length; i++) { try { els[i].pause(); } catch (e) {} }
    }, 0);

    mediaSetup(SPK.title);
    drawBar();
    pump();
    waitAndStart();
  }

  function stop(opt) {
    opt = opt || {};
    /* 停止 ≠ 不要了。先把停在哪裡記下來，再收攤。
       真的讀完了（done）才把書籤清掉——不然下次點朗讀會從最後一句起唸。 */
    if (SPK.on && !opt.forget && !opt.done) bmSave();
    if (opt.done) clearBookmark();
    SPK.tok++; SPK.on = false; SPK.pause = false; SPK.buffering = false;
    SPK.stall = 0;
    watch(false);
    PL = null;
    try {
      var els = pair();
      for (var i = 0; i < els.length; i++) { els[i].pause(); els[i].onended = null; els[i].onerror = null; }
    } catch (e) {}
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
    wakeRelease();
    mediaState('paused');
    clearMark();
    drawBar();
  }

  function togglePause() {
    if (!SPK.on) return;
    SPK.pause = !SPK.pause;
    try {
      var a = pair()[PL ? PL.cur : 0];
      if (SPK.pause) a.pause();
      else { var p = a.play(); if (p && p['catch']) p['catch'](function () {}); }
    } catch (e) {}
    SPK.stall = 0;
    if (SPK.pause) { bmSave(); wakeRelease(); }   // 暫停著被系統關掉，回來還找得到
    else {
      wakeGet();
      /* 緩衝中按過暫停的話，現在手上這個元素根本沒有 src——
         要從那一句重新排，不是對著空元素按播放。 */
      try { if (PL && !pair()[PL.cur].src) playAt(PL.i); } catch (e) {}
    }
    mediaState(SPK.pause ? 'paused' : 'playing');
    drawBar();
  }

  /* 開始、暫停、停止要能各按各的，不能只有一顆「切換」。
     宿主的工具列上是三顆分開的按鈕，用 togglePause 去湊，
     會出現「按暫停卻繼續播」那種怎麼看都像壞掉的情形。 */

  function pausePlay() {
    if (SPK.on && !SPK.pause) togglePause();
    return !!SPK.pause;
  }

  function resumePlay() {
    if (SPK.on && SPK.pause) togglePause();
    return !!(SPK.on && !SPK.pause);
  }

  /* 從書籤（或指定的某一句）開始讀。
       playFrom(units)                → 接著上次停的地方
       playFrom(units, { from: 12 })  → 從第 13 句
       playFrom(units, { at: 'p7' })  → 從身分證是 p7 的那一句 */
  function playFrom(units, opts) {
    var o = ext({}, opts || {});
    if (o.from == null && o.at == null) o.resume = true;
    return play(units, o);
  }

  function step(d) {
    if (!SPK.on || !PL) return;
    var k = Math.max(0, Math.min(PL.units.length - 1, PL.i + d));
    try { pair()[PL.cur].pause(); } catch (e) {}
    PL.cur = 1 - PL.cur;
    SPK.pause = false;
    playAt(k);
  }

  function toggleFollow() {
    var s = set();
    s.follow = (s.follow === 0) ? 1 : 0;
    save(); drawBar();
    toast(L(s.follow !== 0 ? 'followOn' : 'followOff'));
    if (s.follow !== 0) { SPK.hold = 0; rebind(); }
  }

  /* 整課預先下載：抓完就進 IndexedDB，之後離線也能聽 */
  function prefetch(units, onDone, onProgress) {
    units = units || [];
    var ok = 0, fail = 0, idx = 0, live = 0;
    if (!units.length) return onDone && onDone(0, 0);
    function next() {
      while (live < C.parallel && idx < units.length) {
        (function (u) {
          live++; idx++;
          fetchAudio(speechText(u)).then(function () { ok++; }, function () { fail++; })['then'](function () {
            live--;
            if (onProgress) onProgress(ok + fail, units.length);
            if (ok + fail >= units.length) { if (onDone) onDone(ok, fail); }
            else next();
          });
        })(units[idx]);
      }
    }
    next();
  }

  /* ── 從畫面直接生出朗讀單元 ───────────────────────────────────────
   * 新 App 最花時間的一段，其實是「把內容切成句子，而且每一句要綁得到畫面上的
   * 元素」——沒有這一步就沒有逐句標示，也沒有跟讀。
   *
   * 這個函式就地把 root 底下的文字切成句子、包成 <span class="ms">，回傳
   * [{t, el}]。App 不必改自己的渲染方式，掛上去就有跟讀。
   *
   * 已經自己有句子結構的 App（像創世記講義的 span.ms[data-s]）不要用這個，
   * 直接給自己的 units 與 elFor 即可。
   * ------------------------------------------------------------------- */

  function fromDOM(root, opt) {
    opt = opt || {};
    var sel = opt.sel || 'p,li,h2,h3,h4,blockquote,td',
        punct = opt.punct || '。！？；!?',
        skip = opt.skip || '',
        minLen = opt.min || 1;
    if (!root) return [];

    var blocks = root.querySelectorAll(sel), units = [], seq = 0;

    for (var b = 0; b < blocks.length; b++) {
      var el = blocks[b];
      if (skip && el.closest && el.closest(skip)) continue;
      if (el.querySelector && el.querySelector(sel)) continue;   // 只取最內層，不重複唸
      if (el.getAttribute('data-noread') != null) continue;

      /* 已經包過就沿用，不要每次重切（重切會讓畫線之類的標記失效）*/
      var had = el.querySelectorAll('span.ms');
      if (had.length) {
        for (var h = 0; h < had.length; h++) {
          var ht = had[h].textContent.replace(/^\s+|\s+$/g, '');
          if (ht.length >= minLen) units.push({ t: ht, el: had[h], key: had[h].getAttribute('data-s') });
        }
        continue;
      }

      var txt = el.textContent;
      if (!txt || !txt.replace(/^\s+|\s+$/g, '')) continue;

      /* 切句：標點跟著前一句走 */
      var parts = [], buf = '', i, ch;
      for (i = 0; i < txt.length; i++) {
        ch = txt.charAt(i); buf += ch;
        if (punct.indexOf(ch) >= 0) { parts.push(buf); buf = ''; }
      }
      if (buf.replace(/^\s+|\s+$/g, '')) parts.push(buf);
      if (!parts.length) continue;

      /* 重建這個區塊的內容——只在這裡動 DOM，動完就不再動 */
      el.textContent = '';
      for (i = 0; i < parts.length; i++) {
        var sp = document.createElement('span');
        sp.className = 'ms';
        sp.setAttribute('data-s', String(seq));
        sp.textContent = parts[i];
        el.appendChild(sp);
        var pt = parts[i].replace(/^\s+|\s+$/g, '');
        if (pt.length >= minLen) units.push({ t: pt, el: sp, key: String(seq) });
        seq++;
      }
    }
    return units;
  }

  function init(cfg) {
    C = ext(ext({}, DEF), cfg || {});
    C.chunk = ext(ext({}, DEF.chunk), (cfg && cfg.chunk) || {});
    C.sil = ext(ext({}, DEF.sil), (cfg && cfg.sil) || {});
    C.labels = ext(ext({}, DEF.labels), (cfg && cfg.labels) || {});
    buildSay();
    bindIntent();
    bindBackground();
    if (cfg && cfg.warmUp !== false) setTimeout(warmUp, 1200);
    return API;
  }

  var API = {
    init: init,
    play: play,
    playFrom: playFrom,             /* 從書籤／指定段落開始 */
    fromDOM: fromDOM,
    stop: stop,
    pause: pausePlay,               /* 明確暫停（已經暫停就不動） */
    resume: resumePlay,             /* 明確繼續 */
    togglePause: togglePause,
    bookmark: bookmark,             /* 上次停在哪 → { scope, i, total, key, title, at } */
    saveBookmark: bmSave,
    clearBookmark: clearBookmark,
    canResume: function (scope) { return !!bookmark(scope); },
    indexOfKey: function (units, key) { return keyIndex(units || [], key); },
    step: step,
    toggleFollow: toggleFollow,
    rebind: rebind,
    prefetch: prefetch,
    warmUp: warmUp,
    chunks: chunks,
    sanitize: sanitize,
    rebuildSay: buildSay,           /* 繁簡切換之後叫一次 */
    stripOriginal: stripOriginal,
    cacheCount: cacheCount,
    cacheHave: cacheHave,
    cacheClear: cacheClear,
    nudge: nudge,                   /* 手動推一把（很少用得到；看門狗自己會推）*/
    isOn: function () { return !!SPK.on; },
    isPaused: function () { return !!SPK.pause; },
    index: function () { return PL ? PL.i : -1; },
    total: function () { return PL ? PL.units.length : 0; },
    voices: function () { return C ? C.voices : {}; },
    setVoice: function (k) { var s = set(); s.voice = k; save(); stop(); },
    version: '1.4.0'
  };
  return API;
})();


/* ══════════════════════════════════════════════════════════════════════
   GXR · 321 閱讀套件掛件（ES5，給沒有逐句朗讀／畫線入口的 321 App）
   · 把「可讀內容」的區塊切成一句一句（.gxs-s，跟 GXA 的畫線同一套標記）
   · 頂列 🔊：整頁跟讀（Azure 真人語音、逐句高亮、背景播放、鎖屏、Wake Lock、失敗改裝置語音）
   · 頂列 ✨：小智／美圖工作室／我的畫線／321 工具箱／朗讀設定
   · 畫線與小智、美圖由 gxa.js（GXA）提供；沒有 gxa.js（舊 WebView）時只剩朗讀
   設定：window.GXR_CFG（先於本檔載入）
   ══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.GXR) return;
  var CF = window.GXR_CFG || {};
  var doc = document;
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  function each(a, f) { for (var i = 0; i < a.length; i++) f(a[i], i); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function lang() { try { var l = CF.lang ? CF.lang() : 'zh'; return l === 'zs' || l === 'en' ? l : 'zh'; } catch (e) { return 'zh'; } }
  var LANG = lang(), EN = LANG === 'en', ZS = LANG === 'zs';
  /* 三語字串：S3(繁, 简, EN) */
  function S3(zh, zs, en) { return EN ? en : (ZS ? zs : zh); }
  var SLUG = CF.slug || (location.pathname.split('/').filter(Boolean)[0] || 'app');

  /* ── 設定（自己的 localStorage key） ── */
  var KEY = 'gxr_' + SLUG, ST;
  try { ST = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { ST = {}; }
  if (ST.human == null) ST.human = 1;
  if (ST.rate == null) ST.rate = 0;
  if (ST.follow == null) ST.follow = 1;
  function keep() { try { localStorage.setItem(KEY, JSON.stringify(ST)); } catch (e) {} }

  var VOICES, DEFV;
  if (EN) {
    VOICES = {
      andrew: { name: 'en-US-AndrewNeural', label: 'Andrew', desc: 'Male' },
      emma: { name: 'en-US-EmmaNeural', label: 'Emma', desc: 'Female' },
      brian: { name: 'en-US-BrianNeural', label: 'Brian', desc: 'Male' }
    }; DEFV = 'andrew';
  } else {
    VOICES = {
      yunjhe: { name: 'zh-TW-YunJheNeural', label: S3('雲哲', '云哲', ''), desc: S3('溫潤男聲', '温润男声', '') },
      yunfan: { name: 'zh-CN-Yunfan:DragonHDLatestNeural', label: S3('雲帆', '云帆', ''), desc: S3('高清男聲', '高清男声', '') },
      xiaochen: { name: 'zh-CN-Xiaochen:DragonHDLatestNeural', label: S3('曉辰', '晓辰', ''), desc: S3('高清女聲', '高清女声', '') }
    }; DEFV = ZS ? 'yunfan' : 'yunjhe';
  }
  if (!VOICES[ST.voice]) ST.voice = DEFV;

  /* ── 提示 ── */
  var tT = 0;
  function toast(m) {
    var t = $('#gxrToast');
    if (!t) { t = doc.createElement('div'); t.id = 'gxrToast'; t.className = 'gxr-toast'; doc.body.appendChild(t); }
    t.textContent = m; t.className = 'gxr-toast on';
    clearTimeout(tT); tT = setTimeout(function () { t.className = 'gxr-toast'; }, 2400);
  }

  /* ══ 朗讀前整理 ══ */
  var CN = '零一二三四五六七八九';
  function cnNum(n) {
    n = parseInt(n, 10); if (isNaN(n)) return '';
    if (n < 10) return CN.charAt(n);
    if (n < 20) return '十' + (n % 10 ? CN.charAt(n % 10) : '');
    if (n < 100) return CN.charAt(Math.floor(n / 10)) + '十' + (n % 10 ? CN.charAt(n % 10) : '');
    if (n < 1000) { var h = Math.floor(n / 100), r = n % 100; return CN.charAt(h) + '百' + (r === 0 ? '' : (r < 10 ? '零' + CN.charAt(r) : cnNum(r))); }
    return String(n);
  }
  /* 書卷：[繁全名, 简全名, 繁簡稱, 简簡稱] */
  var BK = [
    ['創世記', '创世记', '創', '创'], ['出埃及記', '出埃及记', '出'], ['利未記', '利未记', '利'], ['民數記', '民数记', '民'], ['申命記', '申命记', '申'],
    ['約書亞記', '约书亚记', '書', '书'], ['士師記', '士师记', '士'], ['路得記', '路得记', '得'], ['撒母耳記上', '撒母耳记上', '撒上'], ['撒母耳記下', '撒母耳记下', '撒下'],
    ['列王紀上', '列王纪上', '王上'], ['列王紀下', '列王纪下', '王下'], ['歷代志上', '历代志上', '代上'], ['歷代志下', '历代志下', '代下'], ['以斯拉記', '以斯拉记', '拉'],
    ['尼希米記', '尼希米记', '尼'], ['以斯帖記', '以斯帖记', '斯'], ['約伯記', '约伯记', '伯'], ['詩篇', '诗篇', '詩', '诗'], ['箴言', '箴言', '箴'],
    ['傳道書', '传道书', '傳', '传'], ['雅歌', '雅歌', '歌'], ['以賽亞書', '以赛亚书', '賽', '赛'], ['耶利米書', '耶利米书', '耶'], ['耶利米哀歌', '耶利米哀歌', '哀'],
    ['以西結書', '以西结书', '結', '结'], ['但以理書', '但以理书', '但'], ['何西阿書', '何西阿书', '何'], ['約珥書', '约珥书', '珥'], ['阿摩司書', '阿摩司书', '摩'],
    ['俄巴底亞書', '俄巴底亚书', '俄'], ['約拿書', '约拿书', '拿'], ['彌迦書', '弥迦书', '彌', '弥'], ['那鴻書', '那鸿书', '鴻', '鸿'], ['哈巴谷書', '哈巴谷书', '哈'],
    ['西番雅書', '西番雅书', '番'], ['哈該書', '哈该书', '該', '该'], ['撒迦利亞書', '撒迦利亚书', '亞', '亚'], ['瑪拉基書', '玛拉基书', '瑪', '玛'],
    ['馬太福音', '马太福音', '太'], ['馬可福音', '马可福音', '可'], ['路加福音', '路加福音', '路'], ['約翰福音', '约翰福音', '約', '约'], ['使徒行傳', '使徒行传', '徒'],
    ['羅馬書', '罗马书', '羅', '罗'], ['哥林多前書', '哥林多前书', '林前'], ['哥林多後書', '哥林多后书', '林後', '林后'], ['加拉太書', '加拉太书', '加'], ['以弗所書', '以弗所书', '弗'],
    ['腓立比書', '腓立比书', '腓'], ['歌羅西書', '歌罗西书', '西'], ['帖撒羅尼迦前書', '帖撒罗尼迦前书', '帖前'], ['帖撒羅尼迦後書', '帖撒罗尼迦后书', '帖後', '帖后'],
    ['提摩太前書', '提摩太前书', '提前'], ['提摩太後書', '提摩太后书', '提後', '提后'], ['提多書', '提多书', '多'], ['腓利門書', '腓利门书', '門', '门'],
    ['希伯來書', '希伯来书', '來', '来'], ['雅各書', '雅各书', '雅'], ['彼得前書', '彼得前书', '彼前'], ['彼得後書', '彼得后书', '彼後', '彼后'],
    ['約翰一書', '约翰一书', '約壹', '约壹'], ['約翰二書', '约翰二书', '約貳', '约贰'], ['約翰三書', '约翰三书', '約參', '约参'], ['猶大書', '犹大书', '猶', '犹'], ['啟示錄', '启示录', '啟', '启']
  ];
  var BKMAP = null, BKRE = null;
  function bkInit() {
    if (BKMAP) return; BKMAP = {}; var names = [];
    each(BK, function (b) {
      var full = ZS ? b[1] : b[0];
      for (var k = 0; k < b.length; k++) { if (!b[k]) continue; BKMAP[b[k]] = full; names.push(b[k]); }
    });
    names.sort(function (a, b) { return b.length - a.length; });
    var uniq = [], seen = {};
    each(names, function (n) { if (!seen[n]) { seen[n] = 1; uniq.push(n); } });
    BKRE = new RegExp('(^|[^0-9A-Za-z\\u4e00-\\u9fff])(' + uniq.join('|') + ')\\s*(\\d{1,3})\\s*[:：]\\s*(\\d{1,3})(?:\\s*[-–—~～到]\\s*(\\d{1,3}))?', 'g');
  }
  function speakRefsZh(t) {
    bkInit();
    t = t.replace(BKRE, function (m, pre, bk, ch, v, v2) {
      var full = BKMAP[bk] || bk, unit = /^(詩篇|诗篇)$/.test(full) ? '篇' : '章';
      return pre + full + cnNum(ch) + unit + cnNum(v) + (v2 ? '到' + cnNum(v2) : '') + '節';
    });
    /* 剩下的「3:16」 */
    t = t.replace(/(\d{1,3})\s*[:：]\s*(\d{1,3})(?:\s*[-–—~～]\s*(\d{1,3}))?(?![\d:])/g, function (m, a, b, c, off, s) {
      if (/\d$/.test(s.slice(Math.max(0, off - 1), off))) return m;
      if (+a <= 24 && /^\d\d$/.test(b) && +b < 60) return m;          /* 像時間（5:30）就不動 */
      return cnNum(a) + '章' + cnNum(b) + (c ? '到' + cnNum(c) : '') + '節';
    });
    return t;
  }
  function speakRefsEn(t) {
    return t.replace(/\b([1-3]?\s?[A-Z][a-z]+(?:\s+of\s+[A-Z][a-z]+)?)\.?\s+(\d{1,3}):(\d{1,3})(?:\s*[-–—]\s*(\d{1,3}))?/g, function (m, bk, ch, v, v2) {
      return bk + ' chapter ' + ch + ', verse' + (v2 ? 's ' + v + ' to ' + v2 : ' ' + v);
    });
  }
  /* 括號裡只有出處：「（約壹4:8）」「(John 3:16)」不唸 */
  function dropParenRefs(t) {
    var re = EN ? /\s*[(（]\s*(?:[1-3]?\s?[A-Z][a-z]+\.?\s+\d{1,3}(?::\d{1,3}(?:[-–—]\d{1,3})?)?(?:\s*[;,；，、]\s*)?)+\s*[)）]/g
      : /\s*[（(]\s*(?:(?:[參参見见cf\.\s]*)[一-鿿]{1,10}\s*\d{1,3}\s*[:：篇章]\s*\d{0,3}(?:\s*[-–—~～到]\s*\d{1,3})?節?[；;、，,\s]*)+[）)]/g;
    return t.replace(re, '');
  }
  var EMO = new RegExp('[\\uD83C-\\uD83E][\\uDC00-\\uDFFF]|[\\u2190-\\u21FF\\u2300-\\u23FF\\u2460-\\u24FF\\u25A0-\\u27BF\\u2900-\\u297F\\u2B00-\\u2BFF\\uFE0F\\u200D\\u20E3]', 'g');
  function speechClean(t) {
    t = String(t == null ? '' : t);
    t = t.replace(/\*\*|__|`/g, '').replace(/^[ \t]*#{1,6}[ \t]*/gm, '').replace(/^[ \t]*>[ \t]?/gm, '');
    t = dropParenRefs(t);
    t = EN ? speakRefsEn(t) : speakRefsZh(t);
    t = t.replace(EMO, ' ');
    if (EN) { t = t.replace(/\s*&\s*/g, ' and '); }
    else {
      t = t.replace(/\s*&\s*/g, '和').replace(/[《》「」『』【】〈〉]/g, '');
      t = t.replace(/321/g, '三二一').replace(/920/g, '九二零').replace(/235/g, '二三五').replace(/811/g, '八一一');
      t = t.replace(/(\d+)\s*[~～–—]\s*(\d+)/g, '$1到$2');
      t = t.replace(/[：]/g, '，').replace(/[｜|／/]/g, '，').replace(/[·•‧]/g, ' ');
      try { if (window.PRON321) t = PRON321.fix(t, ZS ? 'cn' : 'tw', VOICES[ST.voice] ? VOICES[ST.voice].name : ''); } catch (e) {}
    }
    return t.replace(/[ \t ]+/g, ' ').replace(/\s*\n\s*/g, '\n').replace(/^\s+|\s+$/g, '');
  }

  /* ══ 切句與標記（和 GXA 畫線同一套：.gxs-s / data-gxb / data-gxs） ══ */
  function splitS(t) {
    var re = EN ? /[^.!?;]+[.!?;]+["”’)]*\s*|[^.!?;]+$/g
      : /[^。！？；!?]+[。！？；!?]+[」』”’）)]*(?:\s*[（(][^（）()]{1,24}[）)])?|[^。！？；!?]+$/g;
    return String(t).match(re) || [t];
  }
  var SKIPW = 'sup,label,button,textarea,input,select,.lbl,.gxhl-skip,.gxhl-note,script,style';
  function hashStr(s) { var h = 2166136261, i; for (i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 16777619) >>> 0; } return h.toString(36); }
  function matchesAny(el, sel) { try { return el.matches ? el.matches(sel) : (el.msMatchesSelector ? el.msMatchesSelector(sel) : false); } catch (e) { return false; } }
  var BCOUNT = 0;
  function needWrap(box) {
    if (!(box.textContent || '').replace(/\s+/g, '')) return false;
    if (box.getAttribute('data-gxb') == null) return true;
    return !box.querySelector('.gxs-s');                   // 內容被宿主重填（textContent=…），句子標記沒了
  }
  function wrapBox(box) {
    if (!needWrap(box)) return;
    var key = hashStr((box.textContent || '').replace(/\s+/g, ''));
    box.setAttribute('data-gxb', String(BCOUNT++));
    box.setAttribute('data-gxk', key);
    var tw = doc.createTreeWalker(box, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = tw.nextNode())) {
      if (!n.nodeValue.replace(/\s+/g, '')) continue;
      var p = n.parentNode, skip = false;
      while (p && p !== box) { if (p.nodeType === 1 && matchesAny(p, SKIPW + (CF.read && CF.read.skip ? ',' + CF.read.skip : ''))) { skip = true; break; } p = p.parentNode; }
      if (!skip) nodes.push(n);
    }
    var si = 0;
    each(nodes, function (tn) {
      var f = doc.createDocumentFragment(), parts = splitS(tn.nodeValue);
      each(parts, function (part) {
        if (!part.replace(/\s+/g, '')) { f.appendChild(doc.createTextNode(part)); return; }
        var s = doc.createElement('span'); s.className = 'gxs-s'; s.setAttribute('data-gxs', String(si++)); s.setAttribute('data-gxk', key + '|' + (si - 1)); s.textContent = part; f.appendChild(s);
      });
      tn.parentNode.replaceChild(f, tn);
    });
  }
  function visible(el) { return !!(el.offsetWidth || el.offsetHeight || (el.getClientRects && el.getClientRects().length)); }
  var NOREAD = '.gxroot,#gxaroot,.spkbar,.gxr-ui,.gxr-pop,.gxr-ov,[data-noread],.crchip,.crmask,#crTop,nav,script,style';
  function roots() {
    var rs = [];
    if (CF.read && CF.read.rootFn) { try { each(CF.read.rootFn() || [], function (r) { if (r) rs.push(r); }); } catch (e) {} }
    if (!rs.length && CF.read && CF.read.root) each($$(CF.read.root), function (r) { rs.push(r); });
    if (!rs.length) rs.push(doc.body);
    return rs;
  }
  function blocks(all) {
    var sel = CF.read && CF.read.sel; if (!sel) return [];
    var out = [], seen = [];
    each(roots(), function (r) {
      each($$(sel, r), function (b) {
        if (seen.indexOf(b) >= 0) return; seen.push(b);
        if (b.closest && b.closest(NOREAD)) return;
        if (CF.read.skipIn && b.closest && b.closest(CF.read.skipIn)) return;
        if (b.querySelector(sel)) return;                 // 只取最內層
        if (!all && !visible(b)) return;
        out.push(b);
      });
    });
    return out;
  }
  function scan() {
    var all = blocks(true), fresh = 0;
    each(all, function (b) { if (needWrap(b)) { wrapBox(b); fresh++; } });
    attachHL();
    if (fresh && SPKON()) { try { TTS321.rebind(); } catch (e) {} }
    return blocks(false);
  }
  /* 預設：區塊文字裡第一個「書名 章:節」當出處 */
  function refInText(t) {
    t = String(t || '');
    if (EN) {
      var m = t.match(/\b((?:[1-3]\s)?[A-Z][a-z]+(?:\s+of\s+[A-Z][a-z]+)?)\.?\s+(\d{1,3}):(\d{1,3})(?:\s*[-–—]\s*(\d{1,3}))?/);
      return m ? m[1] + ' ' + m[2] + ':' + m[3] + (m[4] ? '-' + m[4] : '') : '';
    }
    bkInit(); BKRE.lastIndex = 0;
    var z = BKRE.exec(t);
    return z ? (BKMAP[z[2]] || z[2]) + ' ' + z[3] + ':' + z[4] + (z[5] ? '-' + z[5] : '') : '';
  }
  function refOfEl(el) {
    var box = el.closest ? el.closest('[data-gxb]') : null;
    try { if (CF.refOf) { var r = CF.refOf(el, box); if (r) return r; } } catch (e) {}
    return refInText(box ? box.textContent : '');
  }
  function quoteDefault() {
    var bs = blocks(false), i, t, r;
    for (i = 0; i < bs.length; i++) {
      t = (bs[i].textContent || '').replace(/\s+/g, ' ').trim(); r = refInText(t);
      if (r && t.length > 10) {
        t = t.replace(/\s*[—（(]\s*[^—（()]*\d+\s*:\s*\d+[^—（()]*[）)]?\s*$/, '').replace(/^[「『“]|[」』”]$/g, '').replace(/[」』”]\s*[^」』”]*\d+\s*:\s*\d+[^」』”]*$/, '').trim();
        return { text: t, ref: r };
      }
    }
    return null;
  }
  function attachHL() {
    if (CF.hl === false || !window.GXA || !GXA.hl || !GXA.hl.attach) return;
    each(roots(), function (r) {
      GXA.hl.attach(r, {
        unit: '.gxs-s', para: '[data-gxb]', key: SLUG,
        idOf: function (el) { var b = el.closest('[data-gxb]'); return (b ? b.getAttribute('data-gxk') : 'x') + '|' + el.getAttribute('data-gxs'); },
        refOf: refOfEl,
        readFrom: function (el) { read(el); }
      });
    });
  }

  /* ══ 朗讀 ══ */
  function SPKON() { try { return !!(window.TTS321 && TTS321.isOn()); } catch (e) { return false; } }
  function viewKey() { try { return CF.view ? String(CF.view()) : 'v'; } catch (e) { return 'v'; } }
  function unitsFor(bs) {
    var us = [];
    each(bs, function (b) {
      var sp = $$('.gxs-s', b), cur = null;
      each(sp, function (s) {
        if (s.closest && s.closest('[data-gxb]') !== b) return;
        var tx = (s.textContent || '').replace(/^\s+|\s+$/g, '');
        if (!tx) return;
        if (cur) {
          cur.t += (EN ? ' ' : '') + tx; cur.els.push(s);
        } else cur = { t: tx, els: [s], k: s.getAttribute('data-gxk'), blk: b };
        /* 太短的句子併進下一句（未滿 14 字、且合併後不超過 90 字） */
        var len = cur.t.replace(/\s+/g, '').length;
        if (len >= (EN ? 30 : 14) || len >= 90) { us.push(cur); cur = null; }
      });
      if (cur) { us.push(cur); cur = null; }
    });
    return us;
  }
  function elFor(u) {
    var ok = true, i;
    for (i = 0; i < u.els.length; i++) if (!u.els[i].isConnected && !doc.documentElement.contains(u.els[i])) { ok = false; break; }
    if (ok) return u.els;
    /* 重繪之後：依 key 找回新元素 */
    var found = [];
    for (i = 0; i < u.els.length; i++) {
      var k = u.els[i].getAttribute('data-gxk'), e = k ? $('.gxs-s[data-gxk="' + k.replace(/"/g, '') + '"]') : null;
      if (e) found.push(e);
    }
    if (found.length) u.els = found;
    return found.length ? found : null;
  }
  function bottomPx() {
    var h = 0;
    try {
      if (CF.bottomSel) {
        each($$(CF.bottomSel), function (n) { var r = n.getBoundingClientRect(); if (r.height && r.bottom >= innerHeight - 4) h = Math.max(h, r.height); });
      }
    } catch (e) {}
    return h;
  }
  function placeBar() {
    var h = bottomPx(); placeFab();
    doc.documentElement.style.setProperty('--spk-bar-bottom', 'calc(' + Math.round(h) + 'px + env(safe-area-inset-bottom))');
  }
  var TTSLAB = EN ? {
    bar: 'Reading', buffering: 'Loading…', prev: 'Previous', next: 'Next', pause: 'Pause', resume: 'Resume', stop: 'Stop', follow: 'Auto-scroll',
    fallback: 'Voice service unavailable — using the device voice', nosupport: 'Reading aloud is not supported on this device'
  } : (ZS ? {
    bar: '朗读中', buffering: '缓冲中…', prev: '上一句', next: '下一句', pause: '暂停', resume: '继续', stop: '停止', follow: '自动滚动',
    fallback: '真人语音连不上，改用设备语音', nosupport: '这台设备不支持朗读'
  } : {});
  var inited = false;
  function ttsInit() {
    if (inited || !window.TTS321) return inited;
    inited = true;
    TTS321.init({
      worker: 'https://azure-tts.spch321.workers.dev',
      voices: VOICES, defaultVoice: DEFV,
      lang: EN ? 'en-US' : (ZS ? 'zh-CN' : 'zh-TW'),
      chunk: EN ? { punct: '.!?;\n', min: 140, max: 320 } : { punct: '。！？；\n', min: 110, max: 300 },
      script: ZS ? 'sc' : 'tc',
      media: { artist: CF.name || '321', album: S3('國度321空中團契', '国度321空中团契', 'Kingdom 321 Fellowship') },
      settings: { get: function () { return ST; }, save: keep },
      labels: TTSLAB,
      clean: speechClean,
      elFor: elFor,
      bookmarkKey: '',
      stillHere: function (scope) { return !scope || scope === viewKey(); },
      toast: toast
    });
    return true;
  }
  function stop() { try { if (window.TTS321) TTS321.stop(); } catch (e) {} sync(); }
  function read(fromEl) {
    if (!ttsInit()) { toast(S3('這台裝置不支援朗讀', '这台设备不支持朗读', 'Reading aloud is not supported on this device')); return; }
    try { if (window.SAGE321 && SAGE321.close && $('.gxz.on')) { /* 小智開著就不干擾 */ } } catch (e) {}
    var bs = scan(), us = unitsFor(bs);
    if (!us.length) { toast(S3('這一頁沒有可以朗讀的文字', '这一页没有可以朗读的文字', 'Nothing to read on this page')); return; }
    var from = 0, i;
    if (fromEl) {
      for (i = 0; i < us.length; i++) { if (us[i].els.indexOf(fromEl) >= 0) { from = i; break; } }
    } else {
      var topY = (CF.topInset ? CF.topInset() : 60);
      for (i = 0; i < us.length; i++) { var r = us[i].els[0].getBoundingClientRect(); if (r.bottom > topY + 8) { from = i; break; } }
      if (i >= us.length) from = 0;
    }
    placeBar();
    var ttl = CF.title ? CF.title() : '';
    TTS321.play(us, { title: ttl || (CF.name || ''), scope: viewKey(), from: from });
    sync();
    var tk = 0, iv = setInterval(function () { sync(); if (++tk > 600 || !SPKON()) { clearInterval(iv); sync(); } }, 800);
  }
  function speakText(text, title) {
    if (!ttsInit()) return;
    placeBar();
    var parts = TTS321.chunks(text).map(function (t) { return { t: t }; });
    if (!parts.length) return;
    TTS321.play(parts, { title: title || (S3('小智', '小智', 'Xiaozhi')) });
    sync();
  }
  function sync() {
    var b = $('#gxrRead'); if (!b) return;
    var on = SPKON();
    b.className = 'gxr-b gxr-read' + (CF.btnClass ? ' ' + CF.btnClass : '') + (on ? ' on' : '');
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.textContent = on ? '⏹' : '🔊';
  }

  /* ══ 設定面板 ══ */
  function closeOv(id) { var o = $('#' + id); if (o) o.parentNode.removeChild(o); }
  function settingsSheet() {
    closeOv('gxrSet'); closePop();
    var o = doc.createElement('div'); o.id = 'gxrSet'; o.className = 'gxr-ov gxr-ui';
    function row() {
      var vs = '';
      for (var k in VOICES) if (VOICES.hasOwnProperty(k)) vs += '<button data-v="' + k + '" class="' + (ST.voice === k ? 'on' : '') + '"><b>' + esc(VOICES[k].label) + '</b>' + (VOICES[k].desc ? '<small>' + esc(VOICES[k].desc) + '</small>' : '') + '</button>';
      var rates = [[-4, S3('慢', '慢', 'Slow')], [0, S3('標準', '标准', 'Normal')], [3, S3('快', '快', 'Fast')], [6, S3('更快', '更快', 'Faster')]], rs = '';
      each(rates, function (r) { rs += '<button data-r="' + r[0] + '" class="' + (ST.rate === r[0] ? 'on' : '') + '">' + r[1] + '</button>'; });
      return '<div class="gxr-card"><div class="gxr-h">' + S3('朗讀設定', '朗读设置', 'Read-aloud settings') + '<button class="gxr-x" data-x="1" aria-label="close">✕</button></div>' +
        '<div class="gxr-lab">' + S3('聲音', '声音', 'Voice') + '</div><div class="gxr-seg">' + vs + '</div>' +
        '<div class="gxr-lab">' + S3('語速', '语速', 'Speed') + '</div><div class="gxr-seg">' + rs + '</div>' +
        '<div class="gxr-lab">' + S3('朗讀方式', '朗读方式', 'Engine') + '</div><div class="gxr-seg">' +
        '<button data-h="1" class="' + (ST.human ? 'on' : '') + '">' + S3('真人語音', '真人语音', 'Natural voice') + '</button><button data-h="0" class="' + (!ST.human ? 'on' : '') + '">' + S3('裝置語音', '设备语音', 'Device voice') + '</button></div>' +
        '<div class="gxr-lab">' + S3('朗讀時畫面', '朗读时画面', 'While reading') + '</div><div class="gxr-seg">' +
        '<button data-f="1" class="' + (ST.follow !== 0 ? 'on' : '') + '">' + S3('自動捲動', '自动滚动', 'Auto-scroll') + '</button><button data-f="0" class="' + (ST.follow === 0 ? 'on' : '') + '">' + S3('不捲動', '不滚动', 'Stay put') + '</button></div>' +
        '<div class="gxr-acts"><button class="gxr-btn" data-t="1">▶ ' + S3('試聽', '试听', 'Preview') + '</button><button class="gxr-btn pri" data-x="1">' + S3('完成', '完成', 'Done') + '</button></div></div>';
    }
    function draw() { o.innerHTML = row(); }
    draw();
    o.addEventListener('click', function (e) {
      var t = e.target; while (t && t !== o && !(t.getAttribute && (t.getAttribute('data-v') || t.getAttribute('data-r') != null || t.getAttribute('data-h') != null || t.getAttribute('data-f') != null || t.getAttribute('data-t') || t.getAttribute('data-x')))) t = t.parentNode;
      if (t === o) { closeOv('gxrSet'); return; }
      if (!t || !t.getAttribute) return;
      if (t.getAttribute('data-x')) { closeOv('gxrSet'); return; }
      if (t.getAttribute('data-v')) { ST.voice = t.getAttribute('data-v'); keep(); draw(); return; }
      if (t.getAttribute('data-r') != null) { ST.rate = parseInt(t.getAttribute('data-r'), 10); keep(); draw(); return; }
      if (t.getAttribute('data-h') != null) { ST.human = t.getAttribute('data-h') === '1' ? 1 : 0; keep(); draw(); return; }
      if (t.getAttribute('data-f') != null) { ST.follow = t.getAttribute('data-f') === '1' ? 1 : 0; keep(); draw(); return; }
      if (t.getAttribute('data-t')) { speakText(S3('平安，願神賜福給你。這是朗讀的聲音。', '平安，愿神赐福给你。这是朗读的声音。', 'Peace be with you. This is how the reading voice sounds.'), S3('試聽', '试听', 'Preview')); }
    });
    doc.body.appendChild(o);
  }

  /* ══ 我的畫線 ══ */
  var COLHEX = { gold: '#D9B168', green: '#6FAE71', blue: '#6C93D1', pink: '#E58FA0', purple: '#A48AC9', maroon: '#8C4A4E', brown: '#8A6740', charcoal: '#54534E' };
  function hlList() {
    closeOv('gxrHl'); closePop();
    if (!window.GXA || !GXA.hl || !GXA.hl.db) { toast(S3('畫線功能需要較新的瀏覽器', '画线功能需要较新的浏览器', 'Highlights need a newer browser')); return; }
    var o = doc.createElement('div'); o.id = 'gxrHl'; o.className = 'gxr-ov gxr-ui gxr-full';
    var db = GXA.hl.db(), pre = SLUG + '|';
    function items() {
      var a = [];
      for (var k in db) if (db.hasOwnProperty(k) && k.indexOf(pre) === 0 && db[k] && db[k].t) a.push({ k: k, h: db[k] });
      a.sort(function (x, y) { return (y.h.ts || 0) - (x.h.ts || 0); });
      return a;
    }
    function draw() {
      var a = items(), h = '<div class="gxr-card full"><div class="gxr-h">' + S3('我的畫線', '我的画线', 'My highlights') + '<button class="gxr-x" data-x="1" aria-label="close">✕</button></div><div class="gxr-scroll">';
      if (!a.length) h += '<p class="gxr-empty">' + S3('還沒有畫線。在內文點一句話，就會畫上金色線；再點一下可以換色、寫默想、問小智、做成美圖。', '还没有画线。在内文点一句话，就会画上金色线；再点一下可以换色、写默想、问小智、做成美图。', 'No highlights yet. Tap any sentence in the text to underline it; tap again to change colour, add a reflection, ask Xiaozhi or make a card.') + '</p>';
      each(a, function (it, i) {
        var hh = it.h;
        h += '<div class="gxr-hi"><span class="gxr-dot" style="background:' + (COLHEX[hh.c] || COLHEX.gold) + '"></span><div class="gxr-hb"><div class="gxr-ht">' + esc(hh.t) + '</div>' +
          (hh.ref ? '<div class="gxr-hr">' + esc(hh.ref) + '</div>' : '') + (hh.n ? '<div class="gxr-hn">' + esc(hh.n) + '</div>' : '') +
          '<div class="gxr-ha"><button data-i="' + i + '" data-a="card">🖼 ' + S3('做成美圖', '做成美图', 'Make a card') + '</button><button data-i="' + i + '" data-a="ask">✨ ' + S3('問小智', '问小智', 'Ask Xiaozhi') + '</button><button data-i="' + i + '" data-a="read">🔊</button><button data-i="' + i + '" data-a="del">✕</button></div></div></div>';
      });
      o.innerHTML = h + '</div></div>';
      o.__items = a;
    }
    draw();
    o.addEventListener('click', function (e) {
      var t = e.target; if (t === o) { closeOv('gxrHl'); return; }
      if (t.getAttribute && t.getAttribute('data-x')) { closeOv('gxrHl'); return; }
      var a = t.getAttribute && t.getAttribute('data-a'); if (!a) return;
      var it = o.__items[parseInt(t.getAttribute('data-i'), 10)]; if (!it) return;
      var hh = it.h;
      if (a === 'del') { delete db[it.k]; try { localStorage.setItem('gxa_hl_' + SLUG, JSON.stringify(db)); } catch (x) {} try { each(roots(), function (r) { GXA.hl.paint(r); }); } catch (x2) {} draw(); }
      else if (a === 'card') { closeOv('gxrHl'); GXA.studio({ text: hh.t, ref: hh.ref || '', note: hh.n || '' }); }
      else if (a === 'ask') { closeOv('gxrHl'); try { SAGE321.open(); SAGE321.send((EN ? 'Help me meditate on this: “' + hh.t + '”' : (ZS ? '请就这句话帮助我默想：「' : '請就這句話幫助我默想：「') + hh.t + '」') + (hh.ref ? (EN ? ' (' + hh.ref + ')' : '（' + hh.ref + '）') : '') + (hh.n ? (EN ? '\nMy reflection: ' : '\n我的默想：') + hh.n : '')); } catch (x3) {} }
      else if (a === 'read') { speakText(hh.t, S3('我的畫線', '我的画线', 'My highlights')); }
    });
    doc.body.appendChild(o);
  }

  /* ══ ✨ 選單 ══ */
  function closePop() { closeOv('gxrPop'); }
  function togglePop(anchor) {
    if ($('#gxrPop')) { closePop(); return; }
    var p = doc.createElement('div'); p.id = 'gxrPop'; p.className = 'gxr-pop gxr-ui';
    var hasG = !!(window.GXA && window.SAGE321);
    var rows = [['read', SPKON() ? '⏹' : '🔊', SPKON() ? S3('停止朗讀', '停止朗读', 'Stop reading') : S3('朗讀本頁', '朗读本页', 'Read this page'), S3('逐句跟讀，可背景播放', '逐句跟读，可后台播放', 'Sentence by sentence, plays in background')]];
    if (hasG) {
      rows.push(['sage', '✨', S3('小智', '小智', 'Xiaozhi'), S3('問問題、解經、默想、禱告', '问问题、解经、默想、祷告', 'Ask, reflect, pray')]);
      rows.push(['card', '🖼', S3('美圖工作室', '美图工作室', 'Card studio'), S3('經文與金句做成圖片、配樂、錄影', '经文与金句做成图片、配乐、录影', 'Verse cards, music, recording')]);
      rows.push(['hl', '📑', S3('我的畫線', '我的画线', 'My highlights'), S3('畫過的句子與默想', '画过的句子与默想', 'Your underlined sentences')]);
      rows.push(['hub', '🧰', S3('321 工具箱', '321 工具箱', '321 Toolbox'), S3('讀經樂、我的作品、聚會與奉獻', '读经乐、我的作品、聚会与奉献', 'Bible Fun, my works, meetings')]);
    }
    rows.push(['set', '⚙️', S3('朗讀設定', '朗读设置', 'Read-aloud settings'), S3('聲音、語速、自動捲動', '声音、语速、自动滚动', 'Voice, speed, auto-scroll')]);
    var h = '';
    each(rows, function (r) { h += '<button data-a="' + r[0] + '"><span class="i">' + r[1] + '</span><span class="t"><b>' + esc(r[2]) + '</b><small>' + esc(r[3]) + '</small></span></button>'; });
    p.innerHTML = h;
    p.addEventListener('click', function (e) {
      var t = e.target; while (t && t !== p && !(t.getAttribute && t.getAttribute('data-a'))) t = t.parentNode;
      if (!t || t === p) return;
      var a = t.getAttribute('data-a'); closePop();
      try {
        if (a === 'read') { if (SPKON()) stop(); else read(); }
        else if (a === 'sage') SAGE321.open();
        else if (a === 'card') GXA.studio(quoteNow());
        else if (a === 'hl') hlList();
        else if (a === 'hub') GXA.hub();
        else if (a === 'set') settingsSheet();
      } catch (x) { try { console.error(x); } catch (y) {} }
    });
    doc.body.appendChild(p);
    var r = anchor && anchor.getBoundingClientRect ? anchor.getBoundingClientRect() : null;
    if (r) {
      var w = Math.min(300, innerWidth - 16);
      p.style.width = w + 'px';
      if (r.top > innerHeight / 2) p.style.bottom = Math.round(innerHeight - r.top + 8) + 'px';
      else p.style.top = Math.round(r.bottom + 6) + 'px';
      p.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.right - w)) + 'px';
    }
    setTimeout(function () {
      function off(e) { if (!p.contains(e.target) && e.target !== anchor) { closePop(); doc.removeEventListener('click', off, true); } }
      doc.addEventListener('click', off, true);
    }, 0);
  }
  function quoteNow() {
    try { var q = (CF.quote && CF.quote()) || quoteDefault(); if (q) return { text: q.text || q.t || '', ref: q.ref || '', note: q.note || '' }; } catch (e) {}
    return {};
  }

  /* ══ 頂列按鈕 ══ */
  function mkBtn(id, cls, label, txt) {
    var b = doc.createElement('button'); b.id = id; b.type = 'button';
    b.className = 'gxr-b ' + cls; b.setAttribute('aria-label', label); b.setAttribute('title', label); b.textContent = txt;
    return b;
  }
  function placeFab() {
    var f = $('#gxrFab'); if (!f) return;
    var h = bottomPx(), ov = false;
    try { ov = !!(CF.overlayActive && CF.overlayActive()); } catch (e) {}
    f.className = 'gxr-fab gxr-ui' + (ov ? ' top' : '');
    f.style.bottom = 'calc(' + Math.round(ov ? 0 : h) + 'px + env(safe-area-inset-bottom) + 14px)';
    doc.documentElement.style.setProperty('--spk-bar-gap-right', '60px');
  }
  function mountBtns() {
    if ($('#gxrBtns')) return true;
    var hasG = !!(window.GXA && window.SAGE321), hc = CF.btnClass ? ' ' + CF.btnClass : '';
    var box = doc.createElement('span'); box.id = 'gxrBtns'; box.className = 'gxr-btns gxr-ui';
    var rb = mkBtn('gxrRead', 'gxr-read' + hc, S3('朗讀本頁', '朗读本页', 'Read this page aloud'), '🔊');
    rb.onclick = function (e) { e.preventDefault(); e.stopPropagation(); if (SPKON()) stop(); else read(); };
    box.appendChild(rb);
    var sb = null;
    if (hasG) {
      sb = mkBtn('gxrMore', 'gxr-more', S3('小智、美圖、畫線', '小智、美图、画线', 'Xiaozhi, cards, highlights'), '✨');
      sb.onclick = function (e) { e.preventDefault(); e.stopPropagation(); togglePop(sb); };
    } else {
      var gb = mkBtn('gxrSetBtn', 'gxr-more' + hc, S3('朗讀設定', '朗读设置', 'Read-aloud settings'), '⚙');
      gb.onclick = function (e) { e.preventDefault(); e.stopPropagation(); settingsSheet(); };
      box.appendChild(gb);
    }
    var placed = false;
    try { if (CF.mount) placed = CF.mount(box) !== false && !!box.parentNode; } catch (e) {}
    if (!placed) {
      var host = null; try { host = CF.top && CF.top(); } catch (e2) {}
      if (host) { host.appendChild(box); placed = true; }
    }
    if (placed && sb && !CF.noFab) {
      /* ✨ 做成右下角浮動鈕（頂列放不下太多鈕） */
      sb.className = 'gxr-fab gxr-ui'; sb.id = 'gxrFab'; box.removeChild && sb.parentNode === box && box.removeChild(sb);
      doc.body.appendChild(sb); placeFab();
    } else if (placed && sb) { sb.className += hc; box.appendChild(sb); }
    if (!placed) { if (sb) box.appendChild(sb); box.className += ' float'; doc.body.appendChild(box); }
    sync();
    return true;
  }
  function ensureBtns() { if (!$('#gxrBtns')) { try { mountBtns(); } catch (e) {} } else if ($('#gxrFab')) placeFab(); }

  /* ══ 樣式（TTS 標示與控制列、本檔的面板） ══ */
  function css() {
    if ($('#gxrcss')) return;
    var st = doc.createElement('style'); st.id = 'gxrcss';
    st.textContent = [
      ':root{--spk-now:#FFE9A8;--spk-bar-bg:#12305E;--spk-bar-fg:#fff;--spk-bar-on:#F0C462;--spk-bar-bottom:calc(64px + env(safe-area-inset-bottom));--spk-bar-gap-right:0px;--spk-bar-z:140;--spk-btn-bg:transparent;--spk-btn-size:32px;--spk-btn-radius:8px;--spk-btn-font:16px}',
      ':root[data-dark="1"],:root[data-theme="dark"],:root.dark,:root.dark-mode,body.dark{--spk-now:#6B5A22;--spk-bar-bg:#0B1D3A}',
      '.spk-now{background:var(--spk-now)!important;border-radius:4px;box-shadow:0 0 0 3px var(--spk-now);-webkit-box-decoration-break:clone;box-decoration-break:clone;transition:background .18s ease;color:inherit}',
      '.spkbar{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(var(--spk-bar-bottom) + 10px);z-index:var(--spk-bar-z);display:flex;align-items:center;gap:8px;max-width:calc(100vw - 24px);padding:8px 12px;border-radius:999px;background:var(--spk-bar-bg);color:var(--spk-bar-fg);box-shadow:0 8px 28px rgba(0,0,0,.34);font-size:14px;line-height:1;box-sizing:border-box}',
      '.spkbar b{font-weight:600;flex:1 1 auto;min-width:4.5em;max-width:34vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '.spkbar .pv{opacity:.7;font-size:12px;font-variant-numeric:tabular-nums;white-space:nowrap}',
      '.spkbar button{appearance:none;-webkit-appearance:none;border:0;background:var(--spk-btn-bg);color:var(--spk-bar-fg);font-size:var(--spk-btn-font);line-height:1;padding:0;cursor:pointer;border-radius:var(--spk-btn-radius);min-width:var(--spk-btn-size);height:var(--spk-btn-size);flex:0 0 auto}',
      '.spkbar button:active{background:rgba(255,255,255,.16)}.spkbar button.on{color:var(--spk-bar-on)}',
      '.spkbar .dot{width:8px;height:8px;border-radius:50%;background:var(--spk-bar-on);flex:0 0 auto;animation:spkp 1.4s ease-in-out infinite}',
      '@keyframes spkp{0%,100%{opacity:1}50%{opacity:.35}}',
      '@media (max-width:380px){.spkbar{gap:4px;padding:7px 9px}.spkbar b{max-width:24vw}.spkbar button{min-width:28px;height:28px;font-size:15px}}',
      /* 頂列按鈕 */
      '.gxr-btns{display:inline-flex;gap:6px;align-items:center;flex:0 0 auto}',
      '.gxr-btns.float{position:fixed;top:calc(8px + env(safe-area-inset-top));right:8px;z-index:90;background:rgba(255,255,255,.92);border:1px solid rgba(0,0,0,.12);border-radius:999px;padding:3px 5px;box-shadow:0 2px 10px rgba(0,0,0,.14)}',
      ':where(.gxr-b){width:36px;height:36px;border-radius:50%;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.85);color:inherit;font-size:17px;line-height:1;padding:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-family:inherit;-webkit-tap-highlight-color:transparent}',
      '.gxr-b{font-size:17px;line-height:1;text-align:center}',
      '.gxr-b.on{background:#12305E;color:#fff;border-color:#12305E}',
      '@media (max-width:380px){:where(.gxr-b){width:32px;height:32px;font-size:15px}.gxr-btns{gap:4px}}',
      '.gxr-fab{position:fixed;right:14px;bottom:calc(78px + env(safe-area-inset-bottom));z-index:95;width:50px;height:50px;border-radius:50%;border:0;background:linear-gradient(135deg,#1F4D3D,#2E6B55);color:#fff;font-size:22px;line-height:1;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.28);display:inline-flex;align-items:center;justify-content:center;padding:0;font-family:inherit;-webkit-tap-highlight-color:transparent}',
      '.gxr-fab:active{transform:scale(.94)}.gxr-fab.top{z-index:3200}.gxr-pop{z-index:3300}.gxr-ov{z-index:3300}',
      'body:has(#gxaroot .gxz.on) .gxr-fab,body:has(#gxaov.on) .gxr-fab,body:has(#gxaroot #gxs.on) .gxr-fab{display:none!important}',
      '.gxr-toast{position:fixed;left:50%;bottom:calc(96px + env(safe-area-inset-bottom));transform:translateX(-50%) translateY(16px);background:#1F2A26;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;opacity:0;pointer-events:none;transition:.2s;z-index:400;max-width:86vw;text-align:center}',
      '.gxr-toast.on{opacity:1;transform:translateX(-50%) translateY(0)}',
      /* 選單與面板 */
      '.gxr-pop{position:fixed;z-index:150;background:#fff;color:#23211C;border:1px solid rgba(0,0,0,.12);border-radius:14px;box-shadow:0 12px 36px rgba(0,0,0,.22);padding:6px;box-sizing:border-box}',
      '.gxr-pop button{display:flex;gap:10px;align-items:center;width:100%;text-align:left;background:none;border:0;border-radius:10px;padding:9px 10px;cursor:pointer;color:inherit;font-family:inherit}',
      '.gxr-pop button:active,.gxr-pop button:hover{background:rgba(0,0,0,.06)}',
      '.gxr-pop .i{font-size:20px;width:28px;text-align:center}.gxr-pop .t{display:block}.gxr-pop b{display:block;font-size:15px}.gxr-pop small{display:block;font-size:12px;color:#6B6255;margin-top:1px}',
      '.gxr-ov{position:fixed;inset:0;z-index:160;background:rgba(0,0,0,.42);display:flex;align-items:flex-end;justify-content:center}',
      '.gxr-card{background:#fff;color:#23211C;border-radius:18px 18px 0 0;width:100%;max-width:560px;padding:16px 16px calc(18px + env(safe-area-inset-bottom));box-sizing:border-box;max-height:88vh;overflow:auto;font-family:inherit}',
      '.gxr-card.full{height:88vh;display:flex;flex-direction:column}.gxr-scroll{overflow:auto;flex:1;-webkit-overflow-scrolling:touch}',
      '.gxr-h{display:flex;align-items:center;justify-content:space-between;font-size:17px;font-weight:800;margin-bottom:10px}',
      '.gxr-x{width:34px;height:34px;border-radius:50%;border:1px solid rgba(0,0,0,.14);background:#fff;font-size:15px;cursor:pointer;color:#23211C}',
      '.gxr-lab{font-size:12.5px;color:#6B6255;margin:12px 0 6px}',
      '.gxr-seg{display:flex;gap:8px;flex-wrap:wrap}.gxr-seg button{flex:1 1 auto;min-width:72px;border:1px solid #CFC7B2;background:#fff;color:#23211C;border-radius:10px;padding:9px 8px;font-size:14px;cursor:pointer;font-family:inherit}',
      '.gxr-seg button small{display:block;font-size:11px;color:#6B6255}.gxr-seg button.on{background:#12305E;color:#fff;border-color:#12305E}.gxr-seg button.on small{color:#dfe6f5}',
      '.gxr-acts{display:flex;gap:10px;margin-top:16px}.gxr-btn{flex:1;border:1px solid #CFC7B2;background:#fff;color:#23211C;border-radius:10px;padding:11px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit}.gxr-btn.pri{background:#12305E;color:#fff;border-color:#12305E}',
      '.gxr-hi{display:flex;gap:10px;padding:12px 0;border-bottom:1px solid #E6E0D2}.gxr-dot{flex:0 0 12px;height:12px;border-radius:50%;margin-top:7px}',
      '.gxr-hb{flex:1;min-width:0}.gxr-ht{font-size:15px;line-height:1.7;overflow-wrap:anywhere}.gxr-hr{font-size:12.5px;color:#8A6A3A;margin-top:2px}.gxr-hn{font-size:13.5px;background:#F5EBD9;border-radius:8px;padding:6px 9px;margin-top:6px;line-height:1.6}',
      '.gxr-ha{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.gxr-ha button{border:1px solid #CFC7B2;background:#fff;color:#23211C;border-radius:9px;padding:6px 10px;font-size:13px;cursor:pointer;font-family:inherit}',
      '.gxr-empty{font-size:14px;color:#6B6255;line-height:1.8;padding:24px 4px}',
      '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]):not([data-dark="0"]) .spkbar{--spk-bar-bg:#0B1D3A}}'
    ].join('\n');
    if (CF.css) st.textContent += '\n' + CF.css;
    doc.head.appendChild(st);
  }

  /* ══ 啟動 ══ */
  var dirty = 0, boot = 0;
  function schedule() {
    clearTimeout(dirty);
    dirty = setTimeout(function () { try { scanQuick(); ensureBtns(); placeFab(); } catch (e) {} }, 320);
  }
  function scanQuick() {
    var bs = blocks(true), need = false, i;
    for (i = 0; i < bs.length; i++) if (needWrap(bs[i])) { need = true; break; }
    if (need) scan(); else if (window.GXA) attachHL();
  }
  function start() {
    css();
    mountBtns();
    scan();
    try {
      var mo = new MutationObserver(function () { schedule(); });
      mo.observe(doc.body, { childList: true, subtree: true });
    } catch (e) {}
    /* GXA（ES2017）比較晚載入完，載入後補掛 ✨ 與畫線 */
    var n = 0, iv = setInterval(function () {
      n++;
      if (window.GXA && window.SAGE321) {
        if (!$('#gxrMore') && !$('#gxrFab')) { var b = $('#gxrBtns'); if (b && b.parentNode) b.parentNode.removeChild(b); mountBtns(); }
        attachHL(); clearInterval(iv);
      } else if (n > 60) clearInterval(iv);
    }, 250);
    doc.addEventListener('visibilitychange', function () { if (!doc.hidden) ensureBtns(); });
    window.addEventListener('resize', placeFab);
    setTimeout(placeFab, 700); setTimeout(placeFab, 2500);
  }

  window.GXR = {
    read: read, stop: stop, speak: speakText, scan: scan, settings: settingsSheet, hlList: hlList, start: start,
    clean: speechClean, cnNum: cnNum, quote: quoteNow, refInText: refInText, units: function () { return unitsFor(blocks()); }, st: ST, lang: LANG
  };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', function () { setTimeout(start, 0); });
  else setTimeout(start, 0);
})();
