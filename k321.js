/* 321每日得勝 × 321 共用帳號（ES5，外掛檔；需要 ../321steward/k321acct.js）
 * ‧ 設定頁「雲端同步」上方加一張「321 共用帳號」卡片
 * ‧ 登入後：自動加密備份每日得勝全部資料（位置 'planner'），換手機用同一組帳號碼找回
 * ‧ 把前 1 天到後 45 天的時程與連結日曆活動公開給 321管家（位置 'planner-pub'），管家不必再貼同步網址
 * ‧ 共用設定（空中團契開通）由 K321ACCT.syncProfile 處理 */
(function(){
 var A=window.K321ACCT;if(!A)return;
 var P=/sc\.html/.test(location.pathname)?'zs':(/en\.html/.test(location.pathname)?'en':'zh');
 var X={
  zh:{t:'🔑 321 共用帳號',intro:'一組帳號碼，所有 321 App 共用：自動加密備份、換手機一鍵找回，你的時程也會自動出現在 321管家。',open:'建立或登入 321 帳號',on:'✓ 已登入',last:'上次同步：',never:'尚未同步',sync:'立即同步',acct:'帳號碼與登出',synced:'✓ 已同步到 321 帳號',fail:'同步失敗：',ask:'雲端有你在 321 帳號備份的每日得勝資料（{n} 項），要下載到這支手機嗎？\n會以雲端內容覆蓋本機同名資料。',done:'✓ 已從 321 帳號找回資料，重新整理中…',name:'每日得勝'},
  zs:{t:'🔑 321 共用账号',intro:'一组账号码，所有 321 App 共用：自动加密备份、换手机一键找回，你的时程也会自动出现在 321管家。',open:'建立或登录 321 账号',on:'✓ 已登录',last:'上次同步：',never:'尚未同步',sync:'立即同步',acct:'账号码与登出',synced:'✓ 已同步到 321 账号',fail:'同步失败：',ask:'云端有你在 321 账号备份的每日得胜数据（{n} 项），要下载到这部手机吗？\n会以云端内容覆盖本机同名数据。',done:'✓ 已从 321 账号找回数据，重新整理中…',name:'每日得胜'},
  en:{t:'🔑 321 Account',intro:'One code for every 321 app: encrypted automatic backup, one-step restore on a new phone, and your schedule appears in the 321 Steward.',open:'Create or sign in to a 321 Account',on:'✓ Signed in',last:'Last sync: ',never:'Not synced yet',sync:'Sync now',acct:'Account code / sign out',synced:'✓ Synced to your 321 Account',fail:'Sync failed: ',ask:'Your 321 Account has a Daily Victory backup ({n} items). Download it to this phone?\nIt replaces local data with the same names.',done:'✓ Restored from your 321 Account, reloading…',name:'Daily Victory'}
 }[P];
 function msg(m,c){try{if(typeof toast==='function')toast(m,c);}catch(e){}}
 function pad(n){return n<10?'0'+n:''+n;}
 function dstr(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());}
 function hm(ms){var d=new Date(ms);return pad(d.getHours())+':'+pad(d.getMinutes());}
 /* 公開給管家的時程 */
 function pubList(){
  var out=[],i,j,base=new Date();base.setHours(0,0,0,0);
  for(i=-1;i<=45;i++){var d=new Date(base.getTime());d.setDate(d.getDate()+i);var ds=dstr(d),evs=[];
   try{if(typeof schedLoad==='function')evs=evs.concat(schedLoad(ds)||[]);}catch(e){}
   try{if(typeof schedGetRepeatEventsForDay==='function')evs=evs.concat(schedGetRepeatEventsForDay(ds)||[]);}catch(e){}
   for(j=0;j<evs.length;j++){var v=evs[j];if(v&&v.title)out.push({d:ds,s:v.start||'',e:v.end||'',t:v.title,c:v.color||'#2d3a8c',n:X.name});}
   try{if(typeof _gcDayList==='function'){var g=_gcDayList(ds)||[];for(j=0;j<g.length;j++){var x=g[j],e=x.e||{};if(!e.t&&!e.s)continue;
     out.push({d:ds,s:e.a?'':hm(e.s),e:e.a?'':hm(e.e),t:e.t||'',l:e.l||'',c:x.c||'#4285f4',n:x.cn||X.name});}}}catch(e){}
  }
  return out;
 }
 function store(){var s={},k,i;for(i=0;i<localStorage.length;i++){k=localStorage.key(i);if(k&&k.indexOf('p4_')===0&&k!=='p4_fbconfig'&&k!=='p4_cloud_lastpush'&&k!=='p4_lang')s[k]=localStorage.getItem(k);}return s;}
 var busy=false,timer=null;
 function sync(cb){
  if(!A.get()||busy){if(cb)cb('busy');return;}busy=true;
  A.put('planner',{v:1,at:Date.now(),store:store()},function(e1){
   A.put('planner-pub',{v:1,at:Date.now(),ev:pubList()},function(e2){busy=false;if(cb)cb(e1||e2);repaint();});
  });
 }
 function soon(){if(!A.get())return;clearTimeout(timer);timer=setTimeout(function(){sync(null);},60000);}
 if(typeof window.lsS==='function'){var _lsS=window.lsS;window.lsS=function(k,v){_lsS(k,v);try{if(k&&String(k).indexOf('p4_')===0)soon();}catch(e){}};}
 function restoreAsk(){
  A.fetch('planner',function(err,o){
   if(err||!o||!o.store){sync(null);return;}
   var n=0,k;for(k in o.store)n++;
   if(n&&confirm(X.ask.replace('{n}',n))){
    var c=0;if(typeof _applyCloudStore==='function')c=_applyCloudStore(o.store);else{for(k in o.store){try{localStorage.setItem(k,o.store[k]);c++;}catch(e){}}}
    msg(X.done);setTimeout(function(){location.reload();},900);
   }else sync(null);
  });
 }
 function changed(kind){
  if(kind==='create')sync(function(e){msg(e?X.fail+e:X.synced);});
  else if(kind==='login'){restoreAsk();A.syncProfile();}
  repaint();
 }
 function card(){
  var a=A.get(),at=Math.max(A.lastAt('planner'),A.lastAt('planner-pub'));
  var h='<div id="k321card" style="margin-bottom:18px"><div style="font-size:13px;color:#65768b;font-weight:700;letter-spacing:1px;margin:2px 2px 8px">'+X.t+'</div><div class="card" style="border:2px solid #1D3A6E">';
  if(a){h+='<div style="font-size:15px;font-weight:800;color:#2A8550;margin-bottom:6px">'+X.on+'</div><div style="font-size:14px;color:#4a5a72;margin-bottom:10px">'+(at?X.last+new Date(at).toLocaleString():X.never)+'</div>'+
   '<div style="display:flex;gap:8px"><button onclick="K321P.sync()" style="flex:1;padding:11px;background:#1D3A6E;border:none;border-radius:10px;color:#fff;font-size:15px;font-weight:700;cursor:pointer">'+X.sync+'</button><button onclick="K321P.open()" style="flex:1;padding:11px;background:#fff;border:1.5px solid #c9d3e6;border-radius:10px;color:#1D3A6E;font-size:15px;font-weight:700;cursor:pointer">'+X.acct+'</button></div>';}
  else h+='<div style="font-size:14px;color:#4a5a72;line-height:1.7;margin-bottom:10px">'+X.intro+'</div><button onclick="K321P.open()" style="width:100%;padding:13px;background:linear-gradient(135deg,#1D3A6E,#11264B);border:none;border-radius:12px;color:#E5B85E;font-size:16px;font-weight:800;cursor:pointer">'+X.open+'</button>';
  return h+'</div></div>';
 }
 function repaint(){var el=document.getElementById('k321card');if(el)el.outerHTML=card();}
 if(typeof window.renderCloudSection==='function'){var _rcs=window.renderCloudSection;window.renderCloudSection=function(){return card()+_rcs.apply(this,arguments);};}
 window.K321P={sync:function(){sync(function(e){msg(e&&e!=='busy'?X.fail+e:X.synced);});},open:function(){A.open({lang:P,onChange:changed});},card:card};
 setTimeout(function(){if(!A.get())return;A.syncProfile();if(Date.now()-A.lastAt('planner-pub')>10*60000)sync(null);},4000);
 document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden'&&A.get()&&Date.now()-A.lastAt('planner-pub')>3*60000)sync(null);});
})();
