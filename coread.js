/* 321每日得勝 · 一起共讀
   帶領者開房間 → 6 位數共讀碼／邀請連結／QR；加入者的手機跟著帶領者切到同一個畫面、同一個捲動位置。
   只同步「在哪個畫面」（畫面代號、日期、月份等語言無關的識別）；個人資料（任務、靈修、日誌、設定…）絕不傳送。
   個人性畫面（設定、記錄、日誌、統計、專案、事工、各種視窗、共讀面板）一律不同步。
   連線層：peerjs.min.js（Cloudflare 中繼站相容層）。三語頁面（tc／sc／en）共用本檔與同一個房號前綴，互通。
   ES5。 */
(function () {
  var VER = (typeof APP_VERSION !== 'undefined' ? APP_VERSION : '1');
  var PEER_JS = ['peerjs.min.js?v=' + VER];
  var QR_JS = ['https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js', 'https://unpkg.com/qrcode-generator@1.4.4/qrcode.js', 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js'];
  var PFX = 'pl321-', COOL = 8000;
  var LK = (typeof APP_LANG !== 'undefined' && APP_LANG === 'sc') ? 'zs' : ((typeof APP_LANG !== 'undefined' && APP_LANG === 'en') ? 'en' : 'zh');

  /* ---------- 網址帶 ?join=碼（&screen=1 = 投影螢幕）：先記下，再把參數從網址拿掉 ---------- */
  var LINK = null;
  try {
    var q0 = location.search || '', mj = q0.match(/[?&]join=(\d{6})/);
    if (mj) { LINK = { j: mj[1], s: /[?&]screen=1/.test(q0) ? 1 : 0 }; try { sessionStorage.setItem('cr_j', JSON.stringify({ j: LINK.j, s: LINK.s, t: Date.now() })); } catch (e) { } }
    else { var o0 = JSON.parse(sessionStorage.getItem('cr_j') || 'null'); if (o0 && Date.now() - o0.t < 20000) LINK = { j: o0.j, s: o0.s ? 1 : 0 }; }
    if (LINK && LINK.s) window.CR_SCREEN = true;
    if (mj && history.replaceState) { var kept = q0.replace(/^\?/, '').split('&').filter(function (x) { return x && !/^(join|screen)=/.test(x); }).join('&'), q1 = kept ? '?' + kept : ''; history.replaceState(null, '', location.pathname + q1 + location.hash); }
  } catch (e) { }

  var TX = {
    zh: { title: '一起共讀', desc: '開一個共讀房間，把共讀碼或連結傳給弟兄姊妹。他們打開後，手機會跟著你切換到同一個畫面、同一個位置。每個人看到的內容與資料都是自己的，不會分享給別人。', host: '開共讀房間（我來帶領）', join: '加入', codePH: '輸入 6 位數共讀碼', orJoin: '或加入別人的共讀', code: '共讀碼', people: '已有 {0} 人加入', waiting: '等待弟兄姊妹加入…', invite: '傳送邀請', copyLink: '複製連結', copied: '已複製', end: '結束共讀', leave: '離開共讀', inviteMsg: '📡 一起來共讀《321每日得勝》！\n點連結加入：{0}\n或打開 App 按「📡 共讀」輸入共讀碼：{1}', following: '跟著帶領者', paused: '你自己操作了 · 點這裡回到帶領者', other: '帶領者在個人頁面（此頁不同步）', connecting: '連線中…', hostChip: '共讀 {0} · {1} 人', hostNoSync: ' · 此頁不同步', ended: '共讀已結束', joined: '已加入共讀，畫面會跟著帶領者', noRtc: '這支手機的瀏覽器不支援共讀，請改用 Chrome 或 Safari', loadErr: '共讀功能載入失敗，請確認網路後再試', badCode: '請輸入 6 位數共讀碼', notFound: '找不到這個共讀房間，請確認共讀碼，或請帶領者重新開房間', followOnly: '你正在跟著共讀', back2: '回到帶領者', tip: '提示：帶領者的手機請保持 App 開著、螢幕不要關，大家才會一直同步。設定、記錄、日誌等個人頁面不會同步。', qrTip: '用手機相機掃描加入', btn: '共讀', joinedOne: '有一位弟兄姊妹加入共讀', hostLeft: '帶領者暫時離線，正在重新連線…', close: '關閉' },
    zs: { title: '一起共读', desc: '开一个共读房间，把共读码或链接传给弟兄姊妹。他们打开后，手机会跟着你切换到同一个画面、同一个位置。每个人看到的内容与数据都是自己的，不会分享给别人。', host: '开共读房间（我来带领）', join: '加入', codePH: '输入 6 位数共读码', orJoin: '或加入别人的共读', code: '共读码', people: '已有 {0} 人加入', waiting: '等待弟兄姊妹加入…', invite: '发送邀请', copyLink: '复制链接', copied: '已复制', end: '结束共读', leave: '离开共读', inviteMsg: '📡 一起来共读《321每日得胜》！\n点链接加入：{0}\n或打开 App 按「📡 共读」输入共读码：{1}', following: '跟着带领者', paused: '你自己操作了 · 点这里回到带领者', other: '带领者在个人页面（此页不同步）', connecting: '连线中…', hostChip: '共读 {0} · {1} 人', hostNoSync: ' · 此页不同步', ended: '共读已结束', joined: '已加入共读，画面会跟着带领者', noRtc: '这支手机的浏览器不支持共读，请改用 Chrome 或 Safari', loadErr: '共读功能载入失败，请确认网络后再试', badCode: '请输入 6 位数共读码', notFound: '找不到这个共读房间，请确认共读码，或请带领者重新开房间', followOnly: '你正在跟着共读', back2: '回到带领者', tip: '提示：带领者的手机请保持 App 开着、屏幕不要关，大家才会一直同步。设置、记录、日志等个人页面不会同步。', qrTip: '用手机相机扫描加入', btn: '共读', joinedOne: '有一位弟兄姊妹加入共读', hostLeft: '带领者暂时离线，正在重新连线…', close: '关闭' },
    en: { title: 'Read together', desc: 'Open a room and send the room code or link to others. When they open it, their phones follow you to the same screen and position. Everyone sees their own content and data; nothing personal is shared.', host: 'Open a room (I’ll lead)', join: 'Join', codePH: 'Enter the 6-digit room code', orJoin: 'Or join someone else’s room', code: 'Room code', people: '{0} joined', waiting: 'Waiting for others to join…', invite: 'Send invite', copyLink: 'Copy link', copied: 'Copied', end: 'End session', leave: 'Leave', inviteMsg: '📡 Come use 321 Daily Victory together with me!\nTap to join: {0}\nOr open the app, tap “📡 Together” and enter code {1}', following: 'Following the leader', paused: 'You moved on your own · tap to return to the leader', other: 'Leader is on a personal page (not synced)', connecting: 'Connecting…', hostChip: 'Room {0} · {1}', hostNoSync: ' · page not synced', ended: 'Session ended', joined: 'Joined — your screen will follow the leader', noRtc: 'This browser cannot join a room. Please use Chrome or Safari.', loadErr: 'Could not load Read together. Check your connection and try again.', badCode: 'Please enter the 6-digit room code', notFound: 'Room not found. Check the code, or ask the leader to open a new room.', followOnly: 'You are following', back2: 'Back to leader', tip: 'Tip: the leader should keep the app open with the screen on so everyone stays in sync. Personal pages (settings, records, journal…) are never synced.', qrTip: 'Scan with a phone camera to join', btn: 'Together', joinedOne: 'Someone joined the room', hostLeft: 'The leader is offline for a moment — reconnecting…', close: 'Close' }
  };
  function X(k) { var s = (TX[LK] || TX.zh)[k]; if (s == null) s = TX.zh[k] || k; for (var i = 1; i < arguments.length; i++) s = s.replace('{' + (i - 1) + '}', arguments[i]); return s; }
  function E(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function ss(k, v) { try { if (v === undefined) return JSON.parse(sessionStorage.getItem(k) || 'null'); if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function say(m) { try { if (typeof toast === 'function') toast(m); } catch (e) { } }
  function $(id) { return document.getElementById(id); }

  var loaded = {};
  function loadJs(urls, test, cb) {
    if (test()) { cb(true); return; } var i = 0;
    (function nx() {
      if (i >= urls.length) { cb(false); return; } var u = urls[i++];
      if (loaded[u]) { setTimeout(function () { cb(test()); }, 0); return; }
      var s = document.createElement('script'); s.src = u; s.async = true;
      s.onload = function () { loaded[u] = 1; if (test()) cb(true); else nx(); }; s.onerror = function () { nx(); };
      document.head.appendChild(s);
    })();
  }

  /* ---------- 樣式 ---------- */
  (function () {
    var st = document.createElement('style'); st.id = 'crcss';
    st.textContent =
      '.crrow{display:flex;align-items:center;margin:0 0 6px}.crrow .crtopb{display:inline-flex;align-items:center;gap:5px;border:1px solid #1e4d8c55;background:#fff;color:#1e4d8c;border-radius:999px;padding:3px 11px;font:inherit;font-size:13px;font-weight:700;cursor:pointer;line-height:1.5}.crrow .crtopb.on{background:#2d3a8c;color:#fff;border-color:#2d3a8c}'
      + 'body.crScreen .crrow{display:none}'
      + '.crbar{position:fixed;top:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;height:36px;z-index:85;display:flex;align-items:center;justify-content:center;gap:6px;padding:0 10px;background:linear-gradient(90deg,#1a3a6b,#6b45b0);color:#fff;font-size:13px;font-weight:700;border:0;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:inherit}'
      + '.crbar .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#5BD38A;animation:crp 1.6s infinite;flex:none}.crbar.wait .dot{background:#F2C14E}.crbar.off{background:linear-gradient(90deg,#b45309,#d97706)}.crbar.off .dot{background:#fff;animation:none}'
      + '@keyframes crp{0%,100%{opacity:1}50%{opacity:.35}}'
      + 'body.crOn{padding-top:36px}body.crOn .hdr{top:36px}'
      + '.crmask{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1100;display:flex;align-items:flex-end;justify-content:center}'
      + '.crsheet{background:#fff;color:#1a1d23;width:100%;max-width:480px;max-height:88vh;overflow-y:auto;border-radius:20px 20px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom));box-sizing:border-box}'
      + 'body.dark .crsheet{background:#1f1d19;color:#e8edf5}'
      + '.crsheet .crt{font-weight:800;font-size:18px;color:#1e4d8c;margin-bottom:10px}body.dark .crsheet .crt{color:#7ba7ff}'
      + '.crsheet .crd{font-size:14px;line-height:1.7;color:#4a5a72;margin-bottom:12px}body.dark .crsheet .crd{color:#b8c2d6}'
      + '.crsheet .crk{font-size:13px;color:#65768b;text-align:center;margin-top:6px}'
      + '.crsheet .crcode{font-size:36px;font-weight:800;letter-spacing:.12em;text-align:center;color:#2d3a8c;margin:2px 0 8px;font-variant-numeric:tabular-nums}body.dark .crsheet .crcode{color:#9db8ff}'
      + '.crsheet .crqr{display:flex;justify-content:center;margin:4px 0}.crsheet .crqr img{width:170px;height:170px;image-rendering:pixelated;background:#fff;border-radius:10px;padding:4px}'
      + '.crsheet .crn{text-align:center;font-weight:700;margin:10px 0 4px}.crsheet .crx{font-size:12px;color:#65768b;text-align:center;line-height:1.6}'
      + '.crsheet .cra{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px}'
      + '.crsheet button.crb{font:inherit;font-size:15px;font-weight:700;padding:10px 16px;border-radius:12px;border:1.5px solid #1e4d8c;background:#e8edf5;color:#1e4d8c;cursor:pointer}.crsheet button.crb.pri{background:#2d3a8c;color:#fff;border-color:#2d3a8c}.crsheet button.crb.full{width:100%;display:block}'
      + 'body.dark .crsheet button.crb{background:#26304f;color:#cfe0ff;border-color:#3b4a7a}body.dark .crsheet button.crb.pri{background:#4558c9;color:#fff}'
      + '.crsheet .crj{display:flex;gap:8px;margin-top:6px}.crsheet .crj input{flex:1;min-width:0;font:inherit;font-size:18px;letter-spacing:.1em;padding:10px 12px;border:1px solid #d8dce8;border-radius:12px;background:#f8fafc;color:#1a1d23;text-align:center}body.dark .crsheet .crj input{background:#2a2720;color:#e8edf5;border-color:#3a362c}';
    document.head.appendChild(st);
  })();

  /* ---------- 狀態 ---------- */
  var C = { role: '', code: '', peer: null, conns: [], host: null, lastSt: null, lastPos: null, retry: 0, rt: null, manualAt: 0, status: '', want: null, applying: 0, off: false, pend: false, lastKey: '', ot: null, first: false, misses: 0, lastRx: 0, chipHtml: '' };
  function joinUrl(code, scr) {
    var base = location.origin + location.pathname.replace(/[^\/]*$/, '');
    return base + '?join=' + code + (scr ? '&screen=1' : '');
  }
  function newCode() { var c = ''; for (var i = 0; i < 6; i++) c += Math.floor(Math.random() * 10); return c.charAt(0) === '0' ? '1' + c.slice(1) : c; }
  function live() { var o = []; for (var i = 0; i < C.conns.length; i++) if (C.conns[i].open) o.push(C.conns[i]); return o; }

  /* ---------- 這個 App 的「畫面」識別 ---------- */
  var OVERLAYS = '[id$="-modal"],[id$="-overlay"],#onb,#mile-ov,#_cf-ov,#rp-check-prov,#lm-detail';
  function shown(el) { try { var cs = window.getComputedStyle(el); return cs.display !== 'none' && cs.visibility !== 'hidden'; } catch (e) { return false; } }
  function overlayOpen() {
    var sb = $('sb'); if (sb && sb.className.indexOf('on') >= 0 && /(^|\s)on(\s|$)/.test(sb.className)) return true;
    var ms = document.querySelectorAll(OVERLAYS);
    for (var i = 0; i < ms.length; i++) if (shown(ms[i])) return true;
    return false;
  }
  /* 回傳 null = 此頁不同步（個人頁面、視窗、共讀面板） */
  function pageNow(ignorePanel) {
    if ((!ignorePanel && $('crpanel')) || overlayOpen()) return null;
    var sc = document.querySelector('.sc.on'); if (!sc || !sc.id) return null;
    var id = sc.id.replace(/^s-/, '');
    try {
      if (id === 'home') return { p: 'home', d: curDate, ht: (htab === 'priority' || htab === 'review') ? htab : 'tasks' };
      if (id === 'pray' || id === '920' || id === 'wrev') return { p: id };
      if (id === 'sched') return { p: 'sched', d: _schedDate };
      if (id === 'cal') return { p: 'cal', y: calY, m: calM };
      if (id === 'wk') return { p: 'wk', w: wkStart };
    } catch (e) { }
    return null;   /* 日誌 grat、統計 sta、專案 proj、事工 ministry、計時 foc 等個人頁面 */
  }
  function pgKey(pg) { return pg ? pg.p + ':' + (pg.ht || '') : ''; }
  function navBtn(id) { return document.querySelector('.nb[onclick*="\'' + id + '\'"]'); }
  function goPage(pg) {
    var cur = document.querySelector('.sc.on'), curId = cur ? cur.id.replace(/^s-/, '') : '';
    try {
      if (pg.p === 'home') {
        if (curId !== 'home') goSc('home', navBtn('home'));
        if (pg.d && pg.d !== curDate) { curDate = pg.d; loadAndRender(); }
        var tbs = document.querySelectorAll('#s-home .tabs .tb'), ix = { tasks: 0, priority: 1, review: 2 }[pg.ht || 'tasks'];
        var anyOn = document.querySelector('#s-home .tabs .tb.on');
        if ((htab !== (pg.ht || 'tasks') || !anyOn) && tbs[ix]) hTab(pg.ht || 'tasks', tbs[ix]);
      } else if (pg.p === 'pray' || pg.p === '920' || pg.p === 'wrev') {
        if (curId !== pg.p) goSc(pg.p, navBtn(pg.p));
      } else if (pg.p === 'sched') {
        if (curId !== 'sched') goSc('sched', navBtn('sched'));
        if (pg.d && pg.d !== _schedDate) { _schedDate = pg.d; schedRenderDateLabel(); schedRender(); }
      } else if (pg.p === 'cal') {
        if (curId !== 'cal') goSc('cal', navBtn('cal'));
        if (typeof pg.y === 'number' && (pg.y !== calY || pg.m !== calM)) { calY = pg.y; calM = pg.m; renderCal(); }
      } else if (pg.p === 'wk') {
        if (curId !== 'wk') goSc('wk', null);
        if (pg.w && pg.w !== wkStart) { wkStart = pg.w; renderWk(); }
      }
    } catch (e) { if (window.console) console.error(e); }
  }

  /* ---------- 傳送 ---------- */
  function cast(m) { var cs = live(); for (var i = 0; i < cs.length; i++) try { cs[i].send(m); } catch (e) { } }
  function ratio() { var mx = document.documentElement.scrollHeight - (window.innerHeight || 600); return mx > 0 ? Math.round(Math.max(0, Math.min(1, window.scrollY / mx)) * 1000) / 1000 : 0; }
  function sendSt() {
    if (C.role !== 'host') return;
    var pg = pageNow(true); C.lastKey = JSON.stringify(pg);
    C.lastSt = { t: 'st', pg: pg, f: ratio(), ts: Date.now() }; C.lastPos = null; cast(C.lastSt);
  }
  function sendPos() {
    if (C.role !== 'host' || pageNow(true) === null) return;
    C.lastPos = { t: 'pos', f: ratio(), ts: Date.now() }; cast(C.lastPos);
  }
  var scT = null;
  window.addEventListener('scroll', function () { if (C.role === 'host') { clearTimeout(scT); scT = setTimeout(sendPos, 220); } }, { passive: true });

  /* ---------- 帶領者 ---------- */
  function host(code, quiet) {
    loadJs(PEER_JS, function () { return !!window.Peer; }, function (ok) {
      if (!ok) { say(X('loadErr')); return; }
      teardown(); C.role = 'host'; C.code = code || newCode(); C.status = 'connecting'; ss('cr321', { r: 'host', c: C.code }); ui();
      var p = C.peer = new Peer(PFX + C.code, { debug: 0 });
      p.on('open', function () { C.retry = 0; C.status = 'ok'; ui(); if (!quiet) panel(); sendSt(); });
      p.on('connection', function (c) {
        C.conns.push(c);
        c.on('open', function () { ui(); say(X('joinedOne')); paintCount(); if (C.lastSt) try { c.send(C.lastSt); } catch (e) { } if (C.lastPos) try { c.send(C.lastPos); } catch (e) { } });
        c.on('close', function () { drop(c); }); c.on('error', function () { drop(c); });
      });
      p.on('disconnected', function () { if (C.role === 'host' && !p.destroyed) setTimeout(function () { try { p.reconnect(); } catch (e) { } }, 1500); });
      p.on('error', function (e) {
        if (C.role !== 'host') return;
        if (e && e.type === 'unavailable-id') { if (C.retry++ < 5) { C.status = 'connecting'; ui(); clearTimeout(C.rt); C.rt = setTimeout(function () { host(C.code, true); }, 3000); } else { say(X('loadErr')); endNow(); } return; }
        if (e && (e.type === 'network' || e.type === 'server-error' || e.type === 'socket-error' || e.type === 'socket-closed')) { clearTimeout(C.rt); C.rt = setTimeout(function () { if (C.role === 'host') host(C.code, true); }, 4000); }
      });
    });
  }
  function drop(c) { var o = []; for (var i = 0; i < C.conns.length; i++) if (C.conns[i] !== c) o.push(C.conns[i]); C.conns = o; ui(); paintCount(); }

  /* ---------- 加入者 ---------- */
  function userMove() { if (C.role === 'follow') { C.manualAt = Date.now(); ui(); setTimeout(ui, COOL + 100); } }
  window.addEventListener('touchmove', userMove, { passive: true }); window.addEventListener('wheel', userMove, { passive: true });
  function join(code) {
    code = String(code || '').replace(/\D/g, ''); if (code.length !== 6) { say(X('badCode')); return; }
    loadJs(PEER_JS, function () { return !!window.Peer; }, function (ok) {
      if (!ok) { say(X('loadErr')); return; }
      teardown(); C.role = 'follow'; C.code = code; C.status = 'connecting'; C.first = true; C.misses = 0; C.off = false; ss('cr321', { r: 'follow', c: code }); closePanel(); ui();
      var p = C.peer = new Peer({ debug: 0 });
      p.on('open', function () { dial(); });
      p.on('disconnected', function () { if (C.role === 'follow' && !p.destroyed) setTimeout(function () { try { p.reconnect(); } catch (e) { } }, 1500); });
      p.on('error', function (e) {
        if (C.role !== 'follow') return;
        if (e && e.type === 'peer-unavailable') { C.misses++; if (C.first && C.misses >= 3) { say(X('notFound')); leave(true); return; } C.status = 'connecting'; ui(); redial(4000); return; }
        redial(4000);
      });
    });
  }
  function redial(ms) { clearTimeout(C.rt); C.rt = setTimeout(function () { if (C.role === 'follow') dial(); }, ms || 3000); }
  function dial() {
    var p = C.peer; if (!p || p.destroyed || C.role !== 'follow') return;
    if (p.disconnected) { try { p.reconnect(); } catch (e) { } redial(3000); return; }
    try { if (C.host) C.host.close(); } catch (e) { }
    var c = C.host = p.connect(PFX + C.code, { reliable: true });
    var to = setTimeout(function () { if (!c.open && C.role === 'follow' && C.host === c) { try { c.close(); } catch (e) { } redial(1000); } }, 12000);
    c.on('open', function () { clearTimeout(to); C.misses = 0; C.lastRx = Date.now(); C.status = 'ok'; if (C.first) { C.first = false; say(X('joined')); } ui(); });
    c.on('data', function (m) {
      C.lastRx = Date.now(); if (C.status !== 'ok') { C.status = 'ok'; ui(); } if (!m) return;
      if (m.t === 'st') applySt(m); else if (m.t === 'pos') applyPos(m); else if (m.t === 'end') leave();
    });
    c.on('close', function () { clearTimeout(to); if (C.role === 'follow' && C.host === c) { C.status = 'lost'; ui(); redial(2500); } });
    c.on('error', function () { });
  }
  function scrollTo_(f, smooth) {
    var mx = document.documentElement.scrollHeight - (window.innerHeight || 600), top = Math.round(Math.max(0, mx) * (f || 0));
    C.applying = Date.now();
    try { window.scrollTo({ top: top, behavior: smooth ? 'smooth' : 'auto' }); } catch (e) { window.scrollTo(0, top); }
  }
  function applySt(m, force) {
    if (m) C.want = m; m = C.want; if (!m) return;
    if (!m.pg) { ui(); return; }
    if (overlayOpen()) { C.pend = true; ui(); return; }   /* 加入者自己開著視窗：不打斷，關掉後再跟上 */
    C.pend = false; C.off = false; if (force) C.manualAt = 0;
    C.applying = Date.now();
    var before = document.querySelector('.sc.on'); var bid = before ? before.id : '';
    goPage(m.pg);
    var after = document.querySelector('.sc.on');
    var moved = !(after && after.id === bid);
    if (force || Date.now() - C.manualAt > COOL) setTimeout(function () { if (C.role === 'follow') scrollTo_(m.f, !moved); }, moved ? 160 : 20);
    ui();
  }
  function applyPos(m) {
    if (!m || !C.want || !C.want.pg) return;
    C.want.f = m.f;
    if (Date.now() - C.manualAt <= COOL) return;
    if (overlayOpen() || pgKey(pageNow()) !== pgKey(C.want.pg)) return;
    scrollTo_(m.f, true);
  }

  /* 畫面變動（切頁、重畫）後：帶領者補送，加入者檢查有沒有自己跑掉 */
  function onChange() {
    if (C.role === 'host') {
      var k = JSON.stringify(pageNow(true)); if (k !== C.lastKey) sendSt(); else ui();
    } else if (C.role === 'follow' && C.want) {
      if (C.pend && !overlayOpen() && !$('crpanel')) { applySt(null, false); return; }
      var pg = pageNow();
      if (pg && C.want.pg && Date.now() - C.applying > 900 && pgKey(pg) !== pgKey(C.want.pg) && !C.off) { C.off = true; ui(); }
    }
  }
  function placeBtn() {
    var hd = document.querySelector('.sc.on .hdr'); if (!hd) return;
    var b = $('crTop'), row = b ? b.parentNode : null;
    if (!b) {
      row = document.createElement('div'); row.className = 'crrow';
      b = document.createElement('button'); b.id = 'crTop'; b.className = 'crtopb'; b.type = 'button';
      b.setAttribute('aria-label', 'co-read'); b.onclick = function (e) { if (e && e.stopPropagation) e.stopPropagation(); panel(); };
      row.appendChild(b);
    }
    if (hd.firstChild !== row) hd.insertBefore(row, hd.firstChild);
    var h = '📡 ' + E(X('btn')) + (C.role ? ' ●' : '');
    if (b.getAttribute('data-h') !== h) { b.innerHTML = h; b.setAttribute('data-h', h); }
    var on = C.role ? ' on' : ''; var cn = 'crtopb' + on; if (b.className !== cn) b.className = cn;
  }
  var moT = null;
  try {
    var mo = new MutationObserver(function () { placeBtn(); clearTimeout(moT); moT = setTimeout(onChange, 150); });
    mo.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style'] });
  } catch (e) { }

  /* 心跳：帶領者每 5 秒報平安；加入者 15 秒沒收到就重新連線 */
  setInterval(function () {
    if (C.role === 'host') cast({ t: 'hb' });
    else if (C.role === 'follow' && C.host && C.lastRx && Date.now() - C.lastRx > 15000) { C.lastRx = 0; C.status = 'lost'; ui(); dial(); }
  }, 5000);
  window.addEventListener('pagehide', function () { if (C.role === 'host') cast({ t: 'hb' }); });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) return;
    if (C.role === 'follow' && C.status !== 'ok') dial();
    if (C.role === 'host' && C.peer && C.peer.disconnected) try { C.peer.reconnect(); } catch (e) { }
  });

  /* ---------- 結束 ---------- */
  function teardown() { clearTimeout(C.rt); try { if (C.peer) C.peer.destroy(); } catch (e) { } C.peer = null; C.conns = []; C.host = null; C.want = null; C.pend = false; C.off = false; }
  function end() { var cs = live(); cast({ t: 'end' }); setTimeout(endNow, cs.length ? 300 : 0); }
  function endNow() { teardown(); C.role = ''; C.code = ''; C.lastSt = null; C.lastPos = null; ss('cr321', null); ui(); closePanel(); say(X('ended')); }
  function leave(quiet) { teardown(); C.role = ''; C.code = ''; ss('cr321', null); ui(); closePanel(); if (!quiet) say(X('ended')); }

  /* ---------- 畫面：頂端狀態列＋面板 ---------- */
  function ui() {
    var el = $('crbar');
    placeBtn();
    if (!C.role || window.CR_SCREEN) { if (el) el.parentNode.removeChild(el); document.body.classList.remove('crOn'); C.chipHtml = ''; return; }
    var t, cls = 'crbar';
    if (C.role === 'host') {
      t = C.status === 'ok' ? X('hostChip', C.code.slice(0, 3) + ' ' + C.code.slice(3), live().length) : X('connecting');
      if (C.status === 'ok' && pageNow(true) === null) t += X('hostNoSync');
    } else if (C.status !== 'ok') { t = C.status === 'lost' ? X('hostLeft') : X('connecting'); cls += ' wait'; }
    else if (C.want && !C.want.pg) { t = X('other'); }
    else if (C.off || (C.manualAt && Date.now() - C.manualAt <= COOL)) { t = X('paused'); cls += ' off'; }
    else t = X('following');
    var h = cls + '|' + t;
    if (!el) {
      el = document.createElement('button'); el.id = 'crbar'; el.type = 'button';
      el.onclick = function () { if (C.role === 'follow' && (C.off || C.manualAt) && C.want && C.want.pg && !$('crpanel')) { applySt(null, true); return; } panel(); };
      document.body.appendChild(el);
    }
    document.body.classList.add('crOn');
    if (C.chipHtml !== h) { C.chipHtml = h; el.className = cls; el.innerHTML = '<span class="dot"></span>📡 ' + E(t); }
  }
  function qrInto(id, text) {
    loadJs(QR_JS, function () { return typeof window.qrcode === 'function'; }, function (ok) {
      var box = $(id); if (!box || !ok) { if (box) box.style.display = 'none'; return; }
      try { var q = qrcode(0, 'M'); q.addData(text); q.make(); box.innerHTML = q.createImgTag(5, 10); } catch (e) { box.style.display = 'none'; }
    });
  }
  function paintCount() { var e = $('crcount'); if (e) { var n = live().length; e.textContent = n ? X('people', n) : X('waiting'); } }
  function closePanel() {
    var p = $('crpanel'); if (!p) return; if (p.parentNode) p.parentNode.removeChild(p);
    clearTimeout(moT); moT = setTimeout(function () { onChange(); if (C.role === 'follow' && C.pend) applySt(null, false); }, 150);
  }
  function copy(text, msg) {
    var done = function () { say(msg || X('copied')); };
    try { navigator.clipboard.writeText(text).then(done, fb); } catch (e) { fb(); }
    function fb() { try { var a = document.createElement('textarea'); a.value = text; a.style.position = 'fixed'; a.style.opacity = '0'; document.body.appendChild(a); a.select(); document.execCommand('copy'); document.body.removeChild(a); done(); } catch (e) { } }
  }
  function shareText(text) { if (navigator.share) { navigator.share({ text: text })['catch'](function () { }); } else copy(text); }
  function panel() {
    closePanel();
    var h = '<div class="crt">📡 ' + E(X('title')) + '</div>';
    if (C.role === 'host') {
      h += '<div class="crk">' + E(X('code')) + '</div><div class="crcode">' + E(C.code.slice(0, 3) + ' ' + C.code.slice(3)) + '</div>' +
        '<div class="crqr" id="crqr"></div><div class="crx">' + E(X('qrTip')) + '</div><div class="crn" id="crcount"></div>' +
        '<div class="cra"><button class="crb pri" data-cr="invite">↗ ' + E(X('invite')) + '</button><button class="crb" data-cr="copy">⧉ ' + E(X('copyLink')) + '</button></div>' +
        (window.CR_SCR_UI ? CR_SCR_UI(function () { return X('title'); }, '') : '') +
        '<div class="crx" style="margin-top:10px">' + E(X('tip')) + '</div>' +
        '<div class="cra"><button class="crb" data-cr="end">■ ' + E(X('end')) + '</button><button class="crb" data-cr="close">' + E(X('close')) + '</button></div>';
      window.__crScrU = joinUrl(C.code, true);
    } else if (C.role === 'follow') {
      h += '<div class="crk">' + E(X('followOnly')) + '</div><div class="crcode">' + E(C.code.slice(0, 3) + ' ' + C.code.slice(3)) + '</div>' +
        '<div class="cra"><button class="crb pri" data-cr="back">' + E(X('back2')) + '</button><button class="crb" data-cr="leave">' + E(X('leave')) + '</button></div>' +
        '<div class="cra"><button class="crb" data-cr="close">' + E(X('close')) + '</button></div>';
    } else {
      h += '<div class="crd">' + E(X('desc')) + '</div><button class="crb pri full" data-cr="host">📡 ' + E(X('host')) + '</button>' +
        '<div class="crk" style="margin-top:16px">' + E(X('orJoin')) + '</div>' +
        '<div class="crj"><input id="crin" type="tel" inputmode="numeric" maxlength="7" autocomplete="off" placeholder="' + E(X('codePH')) + '"><button class="crb pri" data-cr="join">' + E(X('join')) + '</button></div>' +
        '<div class="cra"><button class="crb" data-cr="close">' + E(X('close')) + '</button></div>';
    }
    var m = document.createElement('div'); m.id = 'crpanel'; m.className = 'crmask';
    m.innerHTML = '<div class="crsheet">' + h + '</div>';
    m.addEventListener('click', function (e) {
      if (e.target === m) { closePanel(); return; }
      var n = e.target; while (n && n !== m && !(n.getAttribute && n.getAttribute('data-cr'))) n = n.parentNode;
      if (!n || n === m) return;
      var a = n.getAttribute('data-cr');
      if (a === 'host') { closePanel(); host(); }
      else if (a === 'join') { var i = $('crin'); join(i ? i.value : ''); }
      else if (a === 'invite') shareText(X('inviteMsg', joinUrl(C.code), C.code));
      else if (a === 'copy') copy(joinUrl(C.code));
      else if (a === 'end') end();
      else if (a === 'leave') leave();
      else if (a === 'back') { closePanel(); applySt(null, true); }
      else if (a === 'close') closePanel();
    }, false);
    document.body.appendChild(m);
    var inp = $('crin'); if (inp) inp.onkeydown = function (e) { if (e.keyCode === 13) join(inp.value); };
    if (C.role === 'host') { paintCount(); qrInto('crqr', joinUrl(C.code)); }
    else if (C.role === 'follow') { /* 面板開著時暫不同步 */ }
    ui();
  }

  /* ---------- 對外接口 ---------- */
  window.CR = {
    on: function () { return !!C.role; },
    role: function () { return C.role; },
    sheet: panel, join: join, host: host, end: end, leave: leave,
    page: pageNow, state: function () { return C; },
    text: function (k) { return X(k); }
  };
  if (document.body) { document.body.classList.toggle('crScreen', !!window.CR_SCREEN); placeBtn(); }

  /* 重新整理後回到原本的共讀；網址帶 ?join= 則自動加入 */
  var keep = ss('cr321');
  if (LINK) setTimeout(function () { join(LINK.j); }, 600);
  else if (keep && keep.c) setTimeout(function () { if (keep.r === 'host') host(keep.c, true); else join(keep.c); }, 600);
})();
