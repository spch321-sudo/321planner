/* gxa.js — 321 互動功能（ES2017）：小智 SAGE321、美圖工作室 GXS（配樂／錄製／我的作品）、畫線 GXHL、讀經樂、工具箱；取自 321生活操練 GXA v1.3，加 VPICK321。需先定義 window.GXA_CFG。 */

/* ═══════════════════════════════════════════════════════════════════
   GXA · 321互動聖經功能（給任何 321 App）
   自帶儲存、自帶全螢幕頁面（讀經樂／我的作品／聚會與奉獻／工具箱），
   樣式全部收在 #gxaroot（.gxroot）底下，不碰主程式的變數和樣式。
   主程式只要在 window.GXA_CFG 告訴它：App 名稱、語言、課程內容、怎麼開回課程、TTS 等。
   ═══════════════════════════════════════════════════════════════════ */
window.GXA_FACTORY = function () {
  function GXA_SCM() { const a = "丟並乾亂亞佈佔併來係倉個們倖倣倫偉側偵偽備傭傳債傷傾僅僕僥僱價儀償優儲兇兌兒內兩冊冪凍別刪則剎剛剝創劃劇劍劑勁動務勝勞勢勵勸勻匯匱區協卻厭厲參叢吶員唸問啟喚喪單嗎嘆嘔嘗噴嚇嚨嚮嚴囉國圍園圓圖團執堅報場塊塋塗塵墊墜墮墳壇壓壞壟壯壺壽夠夢夥夾奧奪奮妝姊姦娛婦媽嬰孫學宮寢實寧審寫寬寵寶將專尋對導尷屍屜屢層屬岡崗嶺師帳帶幣幫幹幾庫廚廟廠廢廣廳張強彆彈彌彎彙彷彿後徑從復徵徹恆恥悅悶惡愛態慘慚慣慮慶慾憂憊憐憑憤憫憲憶懇應懲懶懷懸懺懼懾戀戰戲戶拋挾捨捫捲掃掙掛採揀揚換揮搆損搖搗搶搾摀摻撈撐撥撫撲撿擁擄擇擊擋擔據擠擬擱擴擺擾攏攔攙攢攤攪攬敗敘敵數斃斬斷於時晝暢暫曆曉曠曬書會東桿條棄棗棟業極榮構槓樁樂樑樓標樞樣樸樹橋機橫檔檢檯檻櫃欄權欖欽歐歡歲歷歸殘殯殺殼毀氣氾決沒沖況洩涼淒淚淨淪淵淺減測渾湊湧湯準溝溫滅滌滲滾滿漁漢漲漸漿潑潔潤潰澀澆濃濕濟濫濺濾瀆瀉灑灘灣災為烏無煉煙煩熱燈燒燙營燻燼爐爛爭爾牆牽犢犧狀狹猶獄獅獎獨獲獵獸獻現瑣瑪環甕甚產畢畫異當疇疊瘋瘡療癆癒癟癢癤癥癬癮癱發皺盜盞盡監盤盪眾睜瞞矯確碼磚磣磯礎礙祕禍禪禮禱禿稅稜種稱穀穌積穢穩穫窩窪窮窯窺竄竊競筆節範築篤篩簡簷簽簾籃籌籠籤籲糞糧糰糾紀約紅紋納紐純紗紙級紛紡紮細紹終組絆結絕絡給統絲綁綑經綜綠維綱網綴綻綿緊緒線緣編緩緬緯練緻縟縫縮縱縵縷總績繃織繚繞繩繪繫繳繸繼續纏罰罵羅羨義習聖聞聯聰聲聳職聽聾肅脅脈脛脫脹腎腦腫腳腸膚膩膽膿臉臘臟臥臨臺與興舉舊艙艱芻茲莊華萬葉著葦蒐蓆蓋蓮蔭薦薩藉藍藝藥蘆蘭處虛號虧蝕蝦螞螢蟲蠶蠻術衛衝裊補裝裡製複褲褻襬襲見規視親覺覽觀觸訂計訊討訓訖託記訛訟訣訪設許訴診註詐評詛詞詢試詩詫詭詮話該詳誇認誕誘語誠誡誤誦誨說誰課調談請諒論諧諭諮諱諷諸諾謀謂謊謎謔謗謙講謝謬謹證譏識譜譯議譴護讀變讓讚豈豐豬貓貝貞負財貢貧貨販貪貫責貴貶買貸費貼賀賂賄資賊賓賙賜賞賠賣賤賦質賬賭賴賺購賽贅贈贊贏贓贖趕跡踐蹟蹤躍車軋軌軍軛軟軸較載輒輔輕輩輪輯輸輿轄轉轟辦辭辯農迴這連週進遊運過達違遞遠適遲遷選遺邁還邊邏鄉鄭鄰醃醜醫釋釐釘針鈍鈕鈴鉤鉸銀銅銜銳銷鋒鋤鋪鋸鋼錄錢錨錯鍋鍵鎖鎚鎧鎮鏈鏟鏡鏨鐘鐮鐵鐺鑄鑑鑒鑰鑽鑿長門閂閃閉開閒間閘閱闆闊闔闖關陣陰陳陸陽隊階際隨險隱隸隻雖雙雛雜雞離難雲電霧靈靜鞏韋韻響頁頂項順須頌預頑頒頓領頭頸頻顆題額顎顏願顛類顧顯風飛飢飯飲飼飽飾餅養餓餘館餵饑饒馬馳馴駁駕駝駭駱騎騙騰騸驅驕驗驚驟驢骯髒體髮鬆鬍鬚鬢鬥鬧鬮鬱魚魯鮮鯨鰭鰻鱗鳥鳩鳴鴉鴕鴞鴟鴨鴿鵜鵝鵪鶉鶘鷂鷥鷲鷹鷺鸕鸛鹹鹽麥麵麼黃點黨黴鼴齊齒齡齣龍侶飄蕩穡島萊姪餽轍狽崙慟鶴馱簍摟呂誣鍊銘糴輛爺囑駒殮遜荊簫擰吳蘇鷙鐲楊楓儘嬌惱斂糶蒼諄罷咷蕪搧錘遙亙墾箋餬繡擲槍軀歎瀝槳嚀嶼釁諺瞇潛滯鬨侷啞輾羈訝摶頗譽龐檉禦麗廝暱諂慄豎顫饋虜瞭髖緘餌瘓錫綽騾駐倆諉愾鐐莖圇隴勳覷礦鉗覲稟噓蕭儉貿嚥饈凱韁巖濘絞噸繭駛蠅蔥攝廂誌嚐轅釣郵輝帥頰蛻韌訃髏蹺錦剋察摺毆漬燭癲締菸蘋蠟裏襯誚誼謠謨謾跤銹錶颳餃餡馭騷鰥俱傘傢剷嗇壘幟弔徬慫撻曖棧濱瀰籬綹縋縛縣聶膠莢蠍誄譚讒踴釧鉛銖錙鍛鍤鑲顱嘩噠噯噹孿廁攆棲癇睏絨綢縊繆纜蒔蘿蟻衊詆諦賢趨錠鏽鑼閨閹闡鹼齋龕儕嗆囈堊峽嶇廄搥攜暈柵樺檸櫻汙竅緞緹缽罈褸襤譫鈔韓顴餉餒鳶鴻鵑嘯廈影晉濁片祿緝路鎔億囂嬤嬪孌朧澤瀏熾燉瘧盃盧睪礫稈繕詔讞蹣釀錐鍬頃鷗鸇鹵僑嬸訕辮俠喬壩撚燄燬牘璽縞纖蘚蝨踰蹧鈎鍍閡閣闢鱷", b = "丢并干乱亚布占并来系仓个们幸仿伦伟侧侦伪备佣传债伤倾仅仆侥雇价仪偿优储凶兑儿内两册幂冻别删则刹刚剥创划剧剑剂劲动务胜劳势励劝匀汇匮区协却厌厉参丛呐员念问启唤丧单吗叹呕尝喷吓咙向严啰国围园圆图团执坚报场块茔涂尘垫坠堕坟坛压坏垄壮壶寿够梦伙夹奥夺奋妆姐奸娱妇妈婴孙学宫寝实宁审写宽宠宝将专寻对导尴尸屉屡层属冈岗岭师帐带币帮干几库厨庙厂废广厅张强别弹弥弯汇仿佛后径从复征彻恒耻悦闷恶爱态惨惭惯虑庆欲忧惫怜凭愤悯宪忆恳应惩懒怀悬忏惧慑恋战戏户抛挟舍扪卷扫挣挂采拣扬换挥构损摇捣抢榨捂掺捞撑拨抚扑捡拥掳择击挡担据挤拟搁扩摆扰拢拦搀攒摊搅揽败叙敌数毙斩断于时昼畅暂历晓旷晒书会东杆条弃枣栋业极荣构杠桩乐梁楼标枢样朴树桥机横档检台槛柜栏权榄钦欧欢岁历归残殡杀壳毁气泛决没冲况泄凉凄泪净沦渊浅减测浑凑涌汤准沟温灭涤渗滚满渔汉涨渐浆泼洁润溃涩浇浓湿济滥溅滤渎泻洒滩湾灾为乌无炼烟烦热灯烧烫营熏烬炉烂争尔墙牵犊牺状狭犹狱狮奖独获猎兽献现琐玛环瓮什产毕画异当畴叠疯疮疗痨愈瘪痒疖症癣瘾瘫发皱盗盏尽监盘荡众睁瞒矫确码砖碜矶础碍秘祸禅礼祷秃税棱种称谷稣积秽稳获窝洼穷窑窥窜窃竞笔节范筑笃筛简檐签帘篮筹笼签吁粪粮团纠纪约红纹纳纽纯纱纸级纷纺扎细绍终组绊结绝络给统丝绑捆经综绿维纲网缀绽绵紧绪线缘编缓缅纬练致缛缝缩纵缦缕总绩绷织缭绕绳绘系缴䍁继续缠罚骂罗羡义习圣闻联聪声耸职听聋肃胁脉胫脱胀肾脑肿脚肠肤腻胆脓脸腊脏卧临台与兴举旧舱艰刍兹庄华万叶着苇搜席盖莲荫荐萨借蓝艺药芦兰处虚号亏蚀虾蚂荧虫蚕蛮术卫冲袅补装里制复裤亵䙓袭见规视亲觉览观触订计讯讨训讫托记讹讼诀访设许诉诊注诈评诅词询试诗诧诡诠话该详夸认诞诱语诚诫误诵诲说谁课调谈请谅论谐谕谘讳讽诸诺谋谓谎谜谑谤谦讲谢谬谨证讥识谱译议谴护读变让赞岂丰猪猫贝贞负财贡贫货贩贪贯责贵贬买贷费贴贺赂贿资贼宾赒赐赏赔卖贱赋质账赌赖赚购赛赘赠赞赢赃赎赶迹践迹踪跃车轧轨军轭软轴较载辄辅轻辈轮辑输舆辖转轰办辞辩农回这连周进游运过达违递远适迟迁选遗迈还边逻乡郑邻腌丑医释厘钉针钝钮铃钩铰银铜衔锐销锋锄铺锯钢录钱锚错锅键锁锤铠镇链铲镜錾钟镰铁铛铸鉴鉴钥钻凿长门闩闪闭开闲间闸阅板阔阖闯关阵阴陈陆阳队阶际随险隐隶只虽双雏杂鸡离难云电雾灵静巩韦韵响页顶项顺须颂预顽颁顿领头颈频颗题额颚颜愿颠类顾显风飞饥饭饮饲饱饰饼养饿余馆喂饥饶马驰驯驳驾驼骇骆骑骗腾骟驱骄验惊骤驴肮脏体发松胡须鬓斗闹阄郁鱼鲁鲜鲸鳍鳗鳞鸟鸠鸣鸦鸵鸮鸱鸭鸽鹈鹅鹌鹑鹕鹞鸶鹫鹰鹭鸬鹳咸盐麦面么黄点党霉鼹齐齿龄出龙侣飘荡穑岛莱侄馈辙狈仑恸鹤驮篓搂吕诬链铭籴辆爷嘱驹殓逊荆箫拧吴苏鸷镯杨枫尽娇恼敛粜苍谆罢啕芜扇锤遥亘垦笺糊绣掷枪躯叹沥桨咛屿衅谚眯潜滞哄局哑辗羁讶抟颇誉庞柽御丽厮昵谄栗竖颤馈虏了髋缄饵痪锡绰骡驻俩诿忾镣茎囵陇勋觑矿钳觐禀嘘萧俭贸咽馐凯缰岩泞绞吨茧驶蝇葱摄厢志尝辕钓邮辉帅颊蜕韧讣髅跷锦克查折殴渍烛癫缔烟苹蜡里衬诮谊谣谟谩交锈表刮饺馅驭骚鳏具伞家铲啬垒帜吊彷怂挞暧栈滨弥篱绺缒缚县聂胶荚蝎诔谭谗踊钏铅铢锱锻锸镶颅哗哒嗳当孪厕撵栖痫困绒绸缢缪缆莳萝蚁蔑诋谛贤趋锭锈锣闺阉阐碱斋龛侪呛呓垩峡岖厩捶携晕栅桦柠樱污窍缎缇钵坛褛褴谵钞韩颧饷馁鸢鸿鹃啸厦影晋浊片禄缉路镕亿嚣嬷嫔娈胧泽浏炽炖疟杯卢睾砾秆缮诏谳蹒酿锥锹顷鸥鹯卤侨婶讪辫侠乔坝捻焰毁牍玺缟纤藓虱逾糟钩镀阂阁辟鳄"; const o = {}; for (let i = 0; i < a.length; i++) o[a[i]] = b[i]; return o; }
  'use strict';
  const C = () => window.GXA_CFG || {};
  const LANG = (() => { try { return C().lang ? C().lang() : 'zh'; } catch (e) { return 'zh'; } })();
  const GXA_isEN = () => LANG === 'en';
  window.GX_BOOK = { zh: C().name || '321', en: C().nameEn || C().name || '321', slug: C().slug || 'gxa' };
  /* ── 掛載點 ── */
  function ROOT() {
    let r = document.getElementById('gxaroot');
    if (!r) {
      r = document.createElement('div'); r.id = 'gxaroot'; r.className = 'gxroot';
      document.body.appendChild(r);
      if (LANG === 'en') r.setAttribute('lang', 'en');
    }
    return r;
  }
  window.GXA_root = ROOT;
  /* ── 自己的儲存（不碰主程式的資料） ── */
  const KEY = 'gxa_' + (C().slug || 'app');
  let S;
  try { S = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { S = {}; }
  if (!S.set || typeof S.set !== 'object') S.set = {};
  S.set.sc = LANG === 'zs' ? 1 : 0;
  S.set.role = 'read';
  if (!Array.isArray(S.xz)) S.xz = [];
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  /* ── 繁→简（介面字；回答由小智直接用简体寫） ── */
  const SCM = GXA_SCM();
  function toSC(s) { s = String(s == null ? '' : s); if (LANG !== 'zs') return s; let o = ''; for (const ch of s) o += SCM[ch] || ch; return o; }
  /* ── 提示 ── */
  function toast(m, ms) {
    const r = ROOT(); let t = r.querySelector('.gxa-toast');
    if (!t) { t = document.createElement('div'); t.className = 'gxa-toast'; r.appendChild(t); }
    t.textContent = toSC(m); t.classList.add('on');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('on'), ms || 2400);
  }
  /* ── 自己的頁面（全螢幕覆蓋層） ── */
  const R = { tab: '', ch: 0, sub: '' };
  const SVC = { xz: 'https://xiaozhi-proxy.spch321.workers.dev', model: 'claude-sonnet-4-6' };
  try { const s2 = C().svc && C().svc(); if (s2) Object.assign(SVC, s2); } catch (e) {}
  /* 讀經樂的課程來源：D.ch＝課程清單，D.txt[n]＝第 n 課的段落 */
  const D = { ch: [], txt: {}, noRef: true };
  function refreshD() {
    let list = [];
    try { list = (C().lessons && C().lessons()) || []; } catch (e) { list = []; }
    D.ch = list; D.txt = {};
    list.forEach((l, i) => { D.txt[i + 1] = (l.paras || []).filter(Boolean); });
    let cur = 1; try { cur = (C().current && C().current()) || 1; } catch (e) {}
    S.last = Math.max(1, Math.min(list.length || 1, cur));
    S.steps = {};
    list.forEach((l, i) => { if (l.read) S.steps[i + 1] = 1; });
  }
  let ovTitle = '';
  function setTitle(t) { ovTitle = t || ''; const h = document.getElementById('gxaTitle'); if (h) h.textContent = toSC(ovTitle); }
  function ov() {
    const r = ROOT(); let o = document.getElementById('gxaov');
    if (!o) {
      o = document.createElement('div'); o.id = 'gxaov';
      o.innerHTML = '<div class="gxa-bar"><button class="gxa-back" id="gxaBack" aria-label="back">‹</button><b id="gxaTitle"></b><button class="gxa-x" id="gxaX" aria-label="close">✕</button></div><div class="gxa-view" id="gxaView"></div>';
      r.appendChild(o);
      o.querySelector('#gxaBack').onclick = () => { if (R.sub && R.tab !== 'hub') go('hub'); else closeOv(); };
      o.querySelector('#gxaX').onclick = () => closeOv();
    }
    return o;
  }
  function closeOv() {
    const o = document.getElementById('gxaov'); if (o) o.classList.remove('on');
    document.documentElement.classList.remove('gxa-lock');
    clearInterval(meetT);
    try { C().onClose && C().onClose(); } catch (e) {}
  }
  let meetT = 0;
  function go(tab, ch, sub) {
    if (tab === 'text') { closeOv(); try { C().openLesson && C().openLesson(ch); } catch (e) {} return; }
    R.tab = tab || 'hub'; R.ch = ch || 0; R.sub = sub || '';
    if (R.tab === 'tools' && R.sub === 'play') refreshD();
    const o = ov(); o.classList.add('on'); document.documentElement.classList.add('gxa-lock');
    render();
    const v = document.getElementById('gxaView'); if (v) v.scrollTop = 0;
  }
  function render() {
    const o = document.getElementById('gxaov');
    if (!o || !o.classList.contains('on')) return;
    const k = R.tab + '/' + R.sub, v = document.getElementById('gxaView');
    const rt = (window.GX && GX.routes) || {};
    if (rt[k]) v.innerHTML = rt[k]();
    else { setTitle(T('321 工具箱', '321 Toolbox')); v.innerHTML = hub(); }
    if (k === 'tools/play' && GX._plPaint) GX._plPaint();
    if (window.GXS && GXS.after) try { GXS.after(k); } catch (e) {}
    clearInterval(meetT);
    if (v.querySelector('.nextmtg') && GX._nextMeet) meetT = setInterval(() => { const n = document.getElementById('mtNext'); if (n) n.innerHTML = GX._nextMeet(); }, 30000);
    if (LANG === 'zs') scWalk(v);
  }
  const T = (zh, en) => LANG === 'en' ? en : zh;
  const esc0 = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  function hub() {
    const row = (ic, t, s, js) => `<button class="chrow" onclick="${js}"><span class="chn">${ic}</span><span style="flex:1"><b>${esc0(t)}</b><span class="s">${esc0(s)}</span></span></button>`;
    return `<div class="sect" style="padding-bottom:6px"><p class="eyebrow">${esc0((LANG === 'en' && C().nameEn) || C().name || '321')}</p>
      <h2 class="big">${esc0(T('一起讀、一起想、一起分享。', 'Read, reflect, and share together.'))}</h2></div>` +
      row('✨', T('小智', 'Xiaozhi'), T('陪讀、解經、禱告；可選回答對象與長度', 'Reading companion — choose audience and length'), 'GXA.close();SAGE321.open()') +
      row('🎯', T('讀經樂', 'Bible Fun'), T('小智照這一課出題：猜謎、測驗、錯題本', 'Riddles and a quiz from this lesson, with a notebook for misses'), "GXA.go('tools',0,'play')") +
      row('🖼', T('美圖工作室', 'Card studio'), T('經文美圖、整張原圖、小智寫祝福', 'Scripture cards, full-photo mode, blessing by Xiaozhi'), 'GXA.studio()') +
      row('🎬', T('我的作品', 'My works'), T('錄好的語音、卡片影片、音樂卡片', 'Recorded voice, card videos and music cards'), "GXA.go('me',0,'works')") +
      row('🎥', T('聚會與奉獻', 'Meetings & giving'), T('Zoom 一鍵加入、聚會時間、奉獻帳號', 'Join Zoom, meeting times, giving accounts'), "GXA.go('me',0,'meet')") +
      ((window.GX && GX.settingsCard) ? GX.settingsCard() : '') +
      ((window.GX && GX._intro) ? GX._intro() : '');
  }
  function scWalk(el) {
    if (LANG !== 'zs' || !el) return;
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    let n; while ((n = w.nextNode())) { const t = toSC(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
    el.querySelectorAll && el.querySelectorAll('[placeholder]').forEach(e => { e.setAttribute('placeholder', toSC(e.getAttribute('placeholder'))); });
  }
  if (LANG === 'zs') {
    try {
      new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(nd => {
        if (nd.nodeType === 3) { const t = toSC(nd.nodeValue); if (t !== nd.nodeValue) nd.nodeValue = t; }
        else if (nd.nodeType === 1) scWalk(nd);
      }))).observe(ROOT(), { childList: true, subtree: true });
    } catch (e) {}
  }

var NAR321 = (function () {
  'use strict';

  /* ── 帶入詞 ────────────────────────────────────────────────────────
   * 寫這些句子的時候想的是：一位牧者站在台上，講到這裡會怎麼開口？
   * 不是「系統提示音」，是一個人在講話。
   * ------------------------------------------------------------------- */

  var T = {
    /* 分段／節標題：{n} 是段序（中文數字），{t} 是標題 */
    section: [
      '第{n}段，{t}。',
      '我們來看第{n}段，{t}。',
      '接下來是第{n}段：{t}。',
      '第{n}段講的是{t}。',
      '我們往下走。第{n}段，{t}。',
      '來到第{n}段，{t}。'
    ],
    /* 沒有段序、只有標題的時候 */
    heading: [
      '{t}。',
      '我們來看{t}。',
      '接下來談{t}。',
      '底下是{t}。',
      '這一段講{t}。'
    ],
    /* 序號題目：{n} 是題序 */
    numbered: [
      '第{n}題。',
      '我們看第{n}題。',
      '接著是第{n}題。',
      '來到第{n}題。',
      '第{n}題這樣問。',
      '我們往下，第{n}題。'
    ],
    /* 條列裡的第幾點 */
    item: [
      '第{n}，',
      '{n}是，',
      '再來，',
      '接著，',
      '還有一點，'
    ],
    /* 想更深：問 */
    deeper: [
      '我們在這裡想更深一點。有人會問，',
      '這裡容我多說一句。可能有人心裡正在問，',
      '我知道有人讀到這裡會停下來問，',
      '讓我們把這一段再往裡走一步。有人問，',
      '這裡有一個問題值得停下來。有人問，',
      '也許你正在想這個問題：'
    ],
    /* 想更深：答 */
    deeperAnswer: [
      '我的回答是這樣。',
      '我是這樣看的。',
      '我們可以這樣想。',
      '這一題我會這樣回答。',
      '讓我這樣說。',
      '答案其實就在經文裡。'
    ],
    /* 五步驟：{k} 是「看」「聽」「想」「講」「行」，{t} 是內容 */
    step: [
      '這一步是「{k}」。{t}',
      '接下來我們「{k}」。{t}',
      '「{k}」這一步：{t}',
      '先來「{k}」。{t}',
      '我們「{k}」。{t}'
    ],
    /* 收尾 */
    wrap: [
      '我們來收尾。',
      '最後，我們把這一段收起來。',
      '到這裡，我們收個尾。',
      '讓我們把這一段收在一起。'
    ],
    /* 表格：畫面上是表，耳朵裡是一段話 */
    table: [
      '這裡有一張表，我用說的帶你看過一遍。',
      '接下來這一段本來是一張表，我把它讀成一段話。',
      '這一段我整理成了表格，用聽的是這樣。',
      '底下是一張對照表，我一列一列說。'
    ],
    /* 條列 */
    list: [
      '這裡有幾點。',
      '底下分成幾點來看。',
      '這一段有幾點。',
      '我列了幾點。'
    ],
    /* 引用經文 */
    quote: [
      '經上說：',
      '聖經這樣說：',
      '我們來讀這一節：',
      '這一節是這樣寫的：'
    ],

    /* ── 開始、暫停、停止、接續 ──────────────────────────────────
     * 這四件事本來沒有聲音：按下去就開始唸，按停就沒聲了。
     * 少了這一句話，聽的人不知道自己在哪裡——尤其是「從書籤繼續」，
     * 冷不防從半路唸起，耳朵會以為前面漏掉了。
     *
     * 一位牧者不會這樣帶人。他會說「我們接著上次停的地方」。
     * ------------------------------------------------------------- */

    /* 開始：{t} 是這一課的名字 */
    start: [
      '我們一起來讀{t}。',
      '{t}。我們開始。',
      '來，我們讀{t}。',
      '我們從{t}開始。',
      '{t}，我們一起聽。'
    ],
    /* 開始，可是不知道叫什麼名字 */
    startBare: [
      '我們開始。',
      '來，我們一起來讀。',
      '我們一起來讀這一段。',
      '好，我們開始讀。'
    ],
    /* 指定從第幾段開始：{n} 段序，{t} 標題 */
    startAt: [
      '我們從第{n}段開始，{t}。',
      '這一次從第{n}段起，{t}。',
      '我們直接來到第{n}段，{t}。',
      '從第{n}段讀起。{t}。',
      '我們從第{n}段往下讀，{t}。'
    ],
    /* 指定從第幾段開始，可是那一段沒有標題 */
    startAtBare: [
      '我們從第{n}段開始。',
      '這一次從第{n}段起。',
      '我們直接來到第{n}段。',
      '從第{n}段讀起。'
    ],
    /* 接著上次停的地方：{n} 段序 */
    resume: [
      '我們接著上次停的地方，從第{n}段繼續。',
      '上一次讀到第{n}段，我們從那裡接下去。',
      '我們回到第{n}段，接著往下讀。',
      '接著剛才停下來的地方，第{n}段。',
      '我們從第{n}段再往下走。'
    ],
    /* 暫停 */
    pause: [
      '我們先停在這裡。',
      '先停一下。',
      '到這裡先歇一口氣。',
      '我們暫時停在這裡。'
    ],
    /* 停止 */
    stop: [
      '今天先讀到這裡。',
      '我們就讀到這裡。',
      '這一段先停在這裡。',
      '好，我們先到這裡。'
    ]
  };

  /* 表格與條列讀出來的零件。
   *
   * 這一組本來寫死在程式裡，英文版於是唸成
   * 「What follows was laid out as a table. 先看「x」，y。」——
   * 一半英文一半中文，而且所有測試都過，因為沒有人驗長相。
   *
   * 凡是會被唸出來或看到的字，一律要能換掉。 */
  var W = {
    rowFirst: ['先看', '我們先看', '第一個'],
    rowMid: ['再看', '接著', '然後', '再來', '接下來'],
    rowLast: ['最後'],
    cols: '這張表有{n}欄：{list}。',
    row2: '{link}「{label}」，{value}。',      // 兩欄表
    rowN: '{link}「{label}」：{parts}。',      // 三欄以上
    pair: '{col}是{value}',
    pairSep: '；',
    listSep: '、',
    itemFirst: '第{n}，',
    itemLast: '最後，',
    end: '。'
  };

  var DEF = {
    seed: 0,             // 換一課就換一個起點，整課的節奏不會跟上一課一樣
    speakUnit: true,
    cls: 'nar',          // HTML 的 class 前綴
    words: null,         // 上面那一組零件；英文版整組換掉
    /* 序號怎麼寫。預設中文數字（第三段）；英文版給 String（Section 3）。
       這一格漏了的話，英文版會唸成「Section 三」——模板全換成英文了，
       塞進去的數字還是中文，而且每一項測試都過，因為沒有人驗長相。 */
    num: null,           // fn(n) -> string
    labels: { col: '欄', row: '列' }
  };

  var C = null;

  function ext(a, b) { for (var k in b) if (b.hasOwnProperty(k)) a[k] = b[k]; return a; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function cfg() { return C || (C = ext({}, DEF)); }

  /* 中文數字。跟 REF321 的那一份刻意各留一份——
     這兩個模組不互相依賴，要能單獨掛。 */
  function cn(n) {
    n = parseInt(n, 10);
    var d = '零一二三四五六七八九';
    if (isNaN(n)) return '';
    if (n < 10) return d.charAt(n);
    if (n < 20) return '十' + (n % 10 ? d.charAt(n % 10) : '');
    if (n < 100) return d.charAt(Math.floor(n / 10)) + '十' + (n % 10 ? d.charAt(n % 10) : '');
    return String(n);
  }

  /* ── 挑一套 ────────────────────────────────────────────────────────
   * 用位置算，不用亂數。同一課唸兩次要一模一樣——
   * 亂數的話逐句標示與跟讀會對不上，而且使用者會覺得「怎麼跟剛才不一樣」。
   *
   * 各種帶入詞不可以同步：如果每一種都用 i % n，那麼第 0 個分段配第 0 個
   * 題目、第 1 個分段配第 1 個題目，整課的節奏會出現一種說不上來的規律感。
   * 所以混進種類名字的雜湊，讓每一種各走各的。
   * ------------------------------------------------------------------- */

  function hash(kind) {
    var h = 0, i;
    for (i = 0; i < kind.length; i++) h = (h * 31 + kind.charCodeAt(i)) % 9973;
    return h;
  }

  /* 序號：數字才轉，已經是字串的就原樣送出（宿主給「十二」那種） */
  function num(n) {
    if (typeof n !== 'number') return n == null ? '' : String(n);
    var f = cfg().num;
    if (f) { try { return String(f(n)); } catch (e) {} }
    return cn(n);
  }

  function pick(kind, i) {
    var arr = T[kind];
    if (!arr || !arr.length) return '';
    var n = (Math.abs(parseInt(i, 10) || 0) + hash(kind) + (cfg().seed | 0)) % arr.length;
    return arr[n];
  }

  function fill(tpl, vars) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, k) {
      return vars && vars[k] != null ? String(vars[k]) : '';
    });
  }

  /* ── 對外的幾種帶入 ─────────────────────────────────────────────── */

  function lead(kind, i, vars) { return fill(pick(kind, i), vars || {}); }

  function section(title, n, i) {
    title = String(title == null ? '' : title).replace(/[。．.]$/, '');
    if (n == null || n === '') return fill(pick('heading', i), { t: title });
    return fill(pick('section', i), { n: num(n), t: title });
  }

  function numbered(n, i) {
    return fill(pick('numbered', i), { n: num(n) });
  }

  function step(key, body, i) {
    return fill(pick('step', i), { k: key, t: String(body == null ? '' : body) });
  }

  function deeper(q, i) { return pick('deeper', i) + String(q == null ? '' : q); }
  function deeperAnswer(i) { return pick('deeperAnswer', i); }
  function wrap(i) { return pick('wrap', i); }

  /* ── 開始、暫停、停止、接續 ────────────────────────────────────────
   * `i` 是輪替的位置。分段、題目那些有天然的位置（第幾塊），
   * 這四種沒有——所以慣例是：
   *
   *   · 開始／接續：傳 0（種子已經一課一換，整課的第一句自然就不一樣）
   *   · 暫停／停止：傳「這一課按了第幾次」，同一課連按兩次才不會一樣
   *
   * 標題末尾的句號要去掉，不然會唸成「創世記第一章。。我們開始」。
   * ------------------------------------------------------------------- */

  function title_(t) {
    return String(t == null ? '' : t).replace(/[。．.\s]+$/, '');
  }

  function start(title, i) {
    var t = title_(title);
    if (!t) return pick('startBare', i);
    return fill(pick('start', i), { t: t });
  }

  function startAt(n, title, i) {
    var t = title_(title);
    var v = { n: num(n), t: t };
    if (!t) return fill(pick('startAtBare', i), v);
    return fill(pick('startAt', i), v);
  }

  function resume(n, i) {
    return fill(pick('resume', i), { n: num(n) });
  }

  function pause(i) { return pick('pause', i); }
  function halt(i) { return pick('stop', i); }

  /* ── Markdown ─────────────────────────────────────────────────────
   * 只認小智真的會用到的那幾種：標題、粗體、條列、編號、表格、引用、行內碼。
   * 不做完整的 Markdown——做完整的話要處理巢狀、參考式連結、HTML 混排，
   * 那是一整個函式庫，而且錯了會把整段答案弄亂。
   * ------------------------------------------------------------------- */

  function isTableLine(l) { return /^\s*\|.*\|\s*$/.test(l); }
  function isDivider(l) { return /^\s*\|[\s:|-]*\|\s*$/.test(l) && l.indexOf('-') >= 0; }

  function cells(l) {
    var t = String(l).replace(/^\s*\|/, '').replace(/\|\s*$/, '');
    var out = t.split('|'), i;
    for (i = 0; i < out.length; i++) out[i] = out[i].replace(/^\s+|\s+$/g, '');
    return out;
  }

  /* 把整段切成一塊一塊：段落、標題、條列、編號、表格、引用 */
  function blocks(md) {
    var lines = String(md == null ? '' : md).replace(/\r\n?/g, '\n').split('\n');
    var out = [], i = 0;
    while (i < lines.length) {
      var l = lines[i];
      if (!l.replace(/\s/g, '')) { i++; continue; }

      if (isTableLine(l) && i + 1 < lines.length && isDivider(lines[i + 1])) {
        var head = cells(l), rows = [];
        i += 2;
        while (i < lines.length && isTableLine(lines[i])) { rows.push(cells(lines[i])); i++; }
        out.push({ k: 'table', head: head, rows: rows });
        continue;
      }
      var m = l.match(/^\s*(#{1,6})\s*(.+)$/);
      if (m) { out.push({ k: 'h', n: m[1].length, t: m[2] }); i++; continue; }
      if (/^\s*>/.test(l)) {
        var q = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) {
          q.push(lines[i].replace(/^\s*>\s?/, '')); i++;
        }
        out.push({ k: 'quote', t: q.join('\n') });
        continue;
      }
      if (/^\s*([-*・]|\d+[.、)])\s+/.test(l)) {
        var items = [], ord = /^\s*\d+[.、)]/.test(l);
        while (i < lines.length && /^\s*([-*・]|\d+[.、)])\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*([-*・]|\d+[.、)])\s+/, '')); i++;
        }
        out.push({ k: 'list', ord: ord, items: items });
        continue;
      }
      var p = [];
      while (i < lines.length && lines[i].replace(/\s/g, '') &&
             !isTableLine(lines[i]) && !/^\s*(#{1,6}\s|>|[-*・]\s|\d+[.、)]\s)/.test(lines[i])) {
        p.push(lines[i]); i++;
      }
      /* 一行都沒收進來的話，i 就不會動——那是一個無窮迴圈，而且會把
         陣列撐爆。會走到這裡的是「長得像表格、可是下一行不是分隔線」
         那種行（例如只有一行的 `| 這不是表格 |`）。
         這種行就當成普通一段，硬收一行再往下走。 */
      if (!p.length) { p.push(lines[i]); i++; }
      out.push({ k: 'p', t: p.join('\n') });
    }
    return out;
  }

  /* 行內：粗體、行內碼。斜體不做——`*` 跟條列的記號同一個，
     分不乾淨的時候寧可原樣留著，也不要把句子拆壞。 */
  function inlineHTML(t) {
    return esc(t)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }
  function inlineText(t) {
    return String(t == null ? '' : t)
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/^\s+|\s+$/g, '');
  }

  /* ── 給眼睛看的 ──────────────────────────────────────────────────── */

  function html(md) {
    var bs = blocks(md), out = [], i, b, j, c = cfg().cls;
    for (i = 0; i < bs.length; i++) {
      b = bs[i];
      if (b.k === 'h') {
        out.push('<p class="' + c + 'h' + (b.n <= 2 ? '' : ' sm') + '">' + inlineHTML(b.t) + '</p>');
      } else if (b.k === 'quote') {
        out.push('<blockquote class="' + c + 'q">' + inlineHTML(b.t) + '</blockquote>');
      } else if (b.k === 'list') {
        var tag = b.ord ? 'ol' : 'ul';
        var li = '';
        for (j = 0; j < b.items.length; j++) li += '<li>' + inlineHTML(b.items[j]) + '</li>';
        out.push('<' + tag + ' class="' + c + 'l">' + li + '</' + tag + '>');
      } else if (b.k === 'table') {
        var h = '<div class="' + c + 'tw"><table class="' + c + 't"><thead><tr>';
        for (j = 0; j < b.head.length; j++) h += '<th>' + inlineHTML(b.head[j]) + '</th>';
        h += '</tr></thead><tbody>';
        for (j = 0; j < b.rows.length; j++) {
          h += '<tr>';
          for (var k = 0; k < b.head.length; k++) {
            h += '<td>' + inlineHTML(b.rows[j][k] || '') + '</td>';
          }
          h += '</tr>';
        }
        out.push(h + '</tbody></table></div>');
      } else {
        out.push('<p>' + inlineHTML(b.t) + '</p>');
      }
    }
    return out.join('');
  }

  /* ── 給耳朵聽的 ──────────────────────────────────────────────────── */

  /* 一張表讀成一段話。
     第一欄當成那一列在講什麼，其餘各欄是它的內容。
     兩欄表最單純：「甲，是乙。」 */
  function w() { return (cfg().words) || W; }

  function tableSpeech(b, i) {
    var head = b.head || [], rows = b.rows || [], out = [], j, k, ww = w();
    out.push(pick('table', i));
    /* 兩欄表不必報欄數——「這張表有二欄」是廢話，而且拖慢節奏。
       三欄以上才值得先說一聲，不然聽的人跟不上後面的對照。 */
    if (head.length >= 3) {
      out.push(fill(ww.cols, { n: num(head.length), list: head.join(ww.listSep) }));
    }
    for (j = 0; j < rows.length; j++) {
      var r = rows[j], label = inlineText(r[0] || '');
      var link = j === 0 ? ww.rowFirst[(i + j) % ww.rowFirst.length]
               : (j === rows.length - 1 && rows.length > 2 ? ww.rowLast[0]
                  : ww.rowMid[(i + j) % ww.rowMid.length]);
      if (head.length === 2) {
        out.push(fill(ww.row2, { link: link, label: label, value: inlineText(r[1] || '') }));
      } else {
        var parts = [];
        for (k = 1; k < head.length; k++) {
          var v = inlineText(r[k] || '');
          if (v) parts.push(fill(ww.pair, { col: inlineText(head[k]), value: v }));
        }
        out.push(fill(ww.rowN, { link: link, label: label, parts: parts.join(ww.pairSep) }));
      }
    }
    return out.join('');
  }

  function listSpeech(b, i) {
    var out = [], j;
    if (b.items.length > 2) out.push(pick('list', i));
    for (j = 0; j < b.items.length; j++) {
      var t = inlineText(b.items[j]);
      if (!t) continue;
      /* 前兩點說「第一」「第二」，後面換成連接詞——
         十點全部報數，聽的人會累。 */
      var ww = w();
      var head = j < 2 ? fill(ww.itemFirst, { n: num(j + 1) })
               : (j === b.items.length - 1 ? ww.itemLast
                  : fill(pick('item', i + j), { n: num(j + 1) }));
      out.push(head + t + (/[。！？.!?]$/.test(t) ? '' : ww.end));
    }
    return out.join('');
  }

  /* 整段 Markdown → 適合唸出來的純文字。
     opt.drop：一個 fn(text)->text，唸之前還要拿掉的東西
     （例如括號裡的經文出處：REF321.dropParenRefs）。 */
  function speech(md, opt) {
    opt = opt || {};
    var bs = blocks(md), out = [], i, b, t;
    var base = opt.i || 0;
    for (i = 0; i < bs.length; i++) {
      b = bs[i];
      if (b.k === 'table') { out.push(tableSpeech(b, base + i)); continue; }
      if (b.k === 'list') { out.push(listSpeech(b, base + i)); continue; }
      if (b.k === 'h') {
        t = inlineText(b.t);
        /* 「一、神的呼召」這種本身帶序號的標題，序號交給模板去說 */
        var m = t.match(/^([一二三四五六七八九十\d]+)[、．.]\s*(.+)$/);
        out.push(m ? section(m[2], m[1], base + i) : section(t, null, base + i));
        continue;
      }
      if (b.k === 'quote') {
        out.push(pick('quote', base + i) + inlineText(b.t));
        continue;
      }
      t = inlineText(b.t);
      /* 已經有句末標點的不補。冒號、分號、頓號也算——
         「三個立場：」後面接一張表，補成「三個立場：。」很難聽。 */
      if (t) out.push(t + (/[。！？；：、，,.:;!?」』）)]$/.test(t) ? '' : '。'));
    }
    var s = out.join('\n');
    if (opt.drop) { try { s = opt.drop(s); } catch (e) {} }
    return s;
  }

  /* ── 掛上 ─────────────────────────────────────────────────────────── */

  function init(c) {
    C = ext(ext({}, DEF), c || {});
    /* words 給了就跟預設合併——英文版只想換幾個零件時不必整組重寫 */
    C.words = ext(ext({}, W), (c && c.words) || {});
    if (c && c.templates) {
      for (var k in c.templates) {
        if (c.templates.hasOwnProperty(k)) T[k] = c.templates[k];
      }
    }
    return API;
  }

  var API = {
    init: init,
    lead: lead, section: section, numbered: numbered, step: step,
    deeper: deeper, deeperAnswer: deeperAnswer, wrap: wrap,
    start: start, startAt: startAt, resume: resume, pause: pause, stop: halt,
    html: html, speech: speech,
    blocks: blocks, cn: cn, num: num,
    templates: T,
    setSeed: function (n) { cfg().seed = n | 0; },
    version: '1.1.0'
  };
  return API;
})();

var SAGE321 = (function () {
  'use strict';

  /* v2.0.0（2026-10）：從《321互動聖經》v2.18 移植回核心——
   *   · sysExtra：回答對象／回答長度接在 App 的人設後面
   *   · followups：最新一則成功的回答底下出現追問鈕，一鍵替使用者送出
   *   · 回答被截斷（stop_reason＝max_tokens／length）就自動接著寫完，最多再接 4 次
   *   · 新回答進來時把較早的長回答收起來，頂列「收合」一次收合全部；
   *     展開／收合只改那一則的 class，不重畫整個對話，才不會打斷朗讀
   *   · 每則回答多了「分享」與「做成美圖」
   *   · reask()：切換回答長度時，用新長度把最後一個問題重新回答（取代、不疊加）
   */
  var DEF = {
    worker: '',
    model: 'claude-sonnet-4-6',
    maxTokens: 1600,
    history: 12,
    timeoutMs: 60000,
    longChars: 240,
    maxCont: 4,
    el: 'gxaxz',
    name: '小智',
    emoji: '✨',
    tagline: '陪讀 · 解經 · 禱告',
    hello: '',
    system: null,
    sysExtra: null,        // fn() -> 接在系統提示後面（回答對象、長度）
    crisis: null,          // fn(text) -> 求助卡文字或空字串（命中危機字詞時先固定顯示，不靠 AI）
    quicks: null,
    followups: null,       // fn() -> [[圖示, 短標, 完整追問句], …]
    controls: null,        // fn() -> html（頂列下方的設定列，由 App 畫）
    store: null,
    chapter: null,
    rich: true,
    speechClean: null,
    linkify: null,
    onSpeak: null,
    onCard: null,          // fn(text, question)
    onShare: null,         // fn(text, question)；沒給就用 navigator.share／剪貼簿
    shareTail: '',
    toast: null,
    onChange: null,
    labels: {
      hello: '陪你讀經的小幫手。',
      caveat: '我不是聖靈，也不能代替你的牧者——有疑問，還是要回到聖經，並找真實的屬靈同伴談。',
      placeholder: '問小智…', send: '送出', clear: '清空', close: '✕',
      thinking: '正在想…',
      more: '展開全文 ▾', less: '收合 ▴',
      speak: '🔊', save: '☆ 收藏', saved: '★ 已收藏', del: '刪除',
      share: '↗ 分享', card: '🖼 美圖', copied: '已複製，可以貼上分享',
      foldAll: '收合', foldedAll: '已收合所有長回答', foldNone: '目前沒有需要收合的回答',
      cont: '小智還在接著寫…', contAsk: '請從中斷的地方直接接著寫完，不要重複前面已經寫過的內容，也不要加開場白。',
      fuT: '追問：',
      didSave: '已加入收藏', didUnsave: '已取消收藏', didDel: '已刪除',
      offline: '目前沒有網路，小智暫時陪不了你。',
      slow: '小智等候得有點久，先暫停一下。',
      down: '小智暫時連不上線，請稍後再試。',
      comfort: '別忘了——最好的同伴是聖靈與神的話，你隨時可以直接向主傾心吐意。',
      empty: '小智一時想不出合適的話，但神的話永不落空。要不要換個方式再問一次？',
      exportTitle: '# 小智收藏', exportFile: 'sage-saved.md'
    }
  };

  var C = null;
  var XZ = { open: false, msgs: [], busy: false };

  function ext(a, b) { for (var k in b) if (b.hasOwnProperty(k)) a[k] = b[k]; return a; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escA(s) {
    return String(s == null ? '' : s).replace(/'/g, '&#39;').replace(/"/g, '&quot;')
      .replace(/\n/g, ' ').slice(0, 300);
  }
  function L(k) { return (C && C.labels && C.labels[k]) || DEF.labels[k] || ''; }
  function toast(m) { if (C && C.toast) C.toast(m); }
  function saved() { return (C.store && C.store.get && C.store.get()) || []; }
  function keep() { if (C.store && C.store.save) C.store.save(); if (C.onChange) C.onChange(); }
  function link(html) {
    if (!C.linkify) return html;
    try { return C.linkify(html); } catch (e) { return html; }
  }
  function nl(text) { return esc(text).split('\n').join('<br>'); }
  function body(text) {
    if (C.rich !== false && typeof NAR321 !== 'undefined' && NAR321.html) {
      try { return NAR321.html(text); } catch (e) {}
    }
    return nl(text);
  }
  function toSpeech(text) {
    var t = String(text == null ? '' : text);
    if (typeof NAR321 !== 'undefined' && NAR321.speech) {
      try { t = NAR321.speech(t); } catch (e) {}
    }
    if (C.speechClean) { try { t = C.speechClean(t); } catch (e) {} }
    return t;
  }
  function plainOf(text) {
    if (typeof NAR321 !== 'undefined' && NAR321.text) {
      try { return NAR321.text(text); } catch (e) {}
    }
    return String(text || '').replace(/^#{1,6}\s+/gm, '').replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/^>\s?/gm, '').replace(/^\s*[-*]\s+/gm, '・').replace(/\|/g, ' ');
  }
  function isLong(m) {
    return !!(m && m.role === 'assistant' && !m.cont && String(m.text || '').length > C.longChars);
  }
  function qOf(i) {
    for (var p = i - 1; p >= 0; p--) if (XZ.msgs[p].role === 'user') return XZ.msgs[p].text;
    return '';
  }

  /* ── 送出與接收 ───────────────────────────────────────────────── */

  function open() { XZ.open = true; draw(); }
  function close() {
    XZ.open = false;
    var el = document.getElementById(C.el);
    if (el) el.className = el.className.replace(/\bon\b/g, '').replace(/\s+/g, ' ');
  }
  function push(role, text, extra) {
    var m = { role: role, text: text };
    if (extra) ext(m, extra);
    XZ.msgs.push(m);
    return m;
  }
  /* 讀者提到自傷字詞：先固定顯示求助卡（不靠 AI），再照常回答 */
  function crisisCheck(q) {
    if (!C.crisis) return;
    var c = ''; try { c = C.crisis(q) || ''; } catch (e) { c = ''; }
    if (c) push('assistant', c, { ok: true, crisis: true });
  }

  function send(text) {
    var t = text;
    if (t == null) {
      var i = document.getElementById('gxxzin');
      t = (i && i.value) || '';
      if (i) i.value = '';
    }
    t = String(t).replace(/^\s+|\s+$/g, '');
    if (!t || XZ.busy) return;
    XZ.open = true;
    if (C.onSend) { try { C.onSend(); } catch (e) {} }
    push('user', t);
    crisisCheck(t);
    draw(); call();
  }
  function pick(q) { send(q); }

  function ask(quote, note, tmpl) {
    XZ.open = true;
    var q = (tmpl || C.askTemplate || function (s, n) {
      return '我讀到這一句：\n「' + s + '」\n' + (n ? n + '\n' : '') +
             '請幫我更明白這句話，並幫助我活出來。';
    })(String(quote || '').slice(0, 300), note || '');
    if (XZ.busy) { draw(); return; }
    if (C.onSend) { try { C.onSend(); } catch (e) {} }
    push('user', q);
    crisisCheck(q);
    draw(); call();
  }

  /* 切換回答長度：把最後一組問答拿掉，用同一個問題重新問一次 */
  function reask() {
    if (XZ.busy) return false;
    var ui = -1, i;
    for (i = XZ.msgs.length - 1; i >= 0; i--) if (XZ.msgs[i].role === 'user') { ui = i; break; }
    if (ui < 0 || ui === XZ.msgs.length - 1) return false;
    var q = XZ.msgs[ui].text;
    XZ.msgs.splice(ui);
    push('user', q);
    crisisCheck(q);
    draw(); call();
    return true;
  }

  function truncated(text, stop) {
    if (stop === 'max_tokens' || stop === 'length') return 'sure';
    if (stop) return '';
    var x = String(text || '').replace(/\s+$/, '');
    if (x.length < 280) return '';
    if (/[。！？.!?」』）)”"…~|]$/.test(x) || /(阿們|阿门|amen\.?)$/i.test(x)) return '';
    return 'guess';
  }
  function join(acc, piece) {
    piece = String(piece || '').replace(/^\s*(好的|好|OK|Okay|Sure)[，,。.!！]?\s*/i, '');
    var max = Math.min(40, acc.length, piece.length), k;
    for (k = max; k >= 4; k--) {
      if (acc.slice(-k) === piece.slice(0, k)) { piece = piece.slice(k); break; }
    }
    var head = piece.replace(/^\s+/, '');
    if (/^(#{1,6} |>|---)/.test(head)) return acc.replace(/\s+$/, '') + '\n\n' + head;
    if (/^([-*] |\d+[.)] |\|)/.test(head)) return acc.replace(/\s+$/, '') + '\n' + head;
    return acc + piece;
  }

  function post(sys, msgs, cb) {
    var ctrl = null, timer = null, done = false;
    try { if (window.AbortController) ctrl = new AbortController(); } catch (e) {}
    if (ctrl) timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, C.timeoutMs);
    function fin(out, why, stop) {
      if (done) return; done = true;
      if (timer) clearTimeout(timer);
      cb(out, why, stop);
    }
    fetch(C.worker, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: ctrl ? ctrl.signal : undefined,
      body: JSON.stringify((C.sendModel || typeof C.maxTokens === 'function') ? { model: C.model, max_tokens: (typeof C.maxTokens === 'function' ? C.maxTokens() : C.maxTokens), system: sys, messages: msgs } : { system: sys, messages: msgs })
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    }).then(function (data) {
      var t = '';
      if (data && data.content && data.content.length) {
        t = data.content.filter(function (b) { return !b.type || b.type === 'text'; })
          .map(function (b) { return b.text || ''; }).join('\n');
      } else if (data) {
        t = data.reply || data.text || data.message ||
          (data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : '') || '';
      }
      var stop = (data && (data.stop_reason || data.finish_reason ||
        (data.choices && data.choices[0] && data.choices[0].finish_reason))) || '';
      fin(String(t).replace(/^\s+|\s+$/g, ''), '', stop);
    })['catch'](function (e) {
      fin('', (e && e.name === 'AbortError') ? 'slow' : 'down', '');
    });
  }

  function foldOld() {
    var last = -1, i;
    for (i = 0; i < XZ.msgs.length; i++) if (XZ.msgs[i].role === 'assistant') last = i;
    for (i = 0; i < XZ.msgs.length; i++) {
      var m = XZ.msgs[i];
      if (isLong(m)) m.col = (i !== last);
    }
  }

  function call() {
    XZ.busy = true; draw();
    var off = false;
    try { off = (navigator.onLine === false); } catch (e) {}
    if (off) {
      push('assistant', L('offline') + '\n' + L('comfort'));
      XZ.busy = false; return draw();
    }
    var hist = [], i, src = XZ.msgs.slice(-C.history);
    for (i = 0; i < src.length; i++) {
      if (src[i].cont || src[i].crisis) continue;
      hist.push({ role: src[i].role, content: src[i].text });
    }
    while (hist.length && hist[0].role !== 'user') hist.shift();
    var sys = (C.system ? C.system() : '');
    if (C.sysExtra) { try { sys += C.sysExtra() || ''; } catch (e) {} }
    var m = null, n = 0;

    function finish(acc, why) {
      if (m) XZ.msgs.splice(XZ.msgs.indexOf(m), 1);
      if (acc) push('assistant', acc, { ok: true });
      else push('assistant', (why === 'slow' ? L('slow') : (why ? L('down') : L('empty'))) + '\n' + L('comfort'));
      XZ.busy = false;
      foldOld();
      draw();
    }
    function step(acc, why, stop) {
      if (!acc) return finish('', why);
      var tr = truncated(acc, stop);
      if (!tr || n >= (tr === 'sure' ? C.maxCont : 1)) return finish(acc, '');
      n++;
      if (!m) m = push('assistant', acc, { cont: true }); else m.text = acc;
      draw();
      post(sys, hist.concat([{ role: 'assistant', content: acc }, { role: 'user', content: L('contAsk') }]),
        function (out, w2, st2) {
          if (!out) return finish(acc, '');
          step(join(acc, out), '', st2);
        });
    }
    post(sys, hist, function (out, why, stop) { step(out, why, stop); });
  }

  /* ── 收藏、刪除、分享 ─────────────────────────────────────────── */

  function savedIdx(i) {
    var a = XZ.msgs[i];
    if (!a) return -1;
    var arr = saved(), j;
    for (j = 0; j < arr.length; j++) if (arr[j].a === a.text) return j;
    return -1;
  }
  function star(i) {
    var a = XZ.msgs[i];
    if (!a) return;
    var arr = saved(), k = savedIdx(i);
    if (k >= 0) {
      arr.splice(k, 1); keep(); draw();
      return toast(L('didUnsave'));
    }
    arr.unshift({
      q: qOf(i), a: a.text,
      ch: (C.chapter ? C.chapter() : 0) || 0,
      at: (new Date()).getTime()
    });
    keep(); draw(); toast(L('didSave'));
  }
  function drop(i) {
    XZ.msgs.splice(i, 1);
    if (i > 0 && XZ.msgs[i - 1] && XZ.msgs[i - 1].role === 'user') XZ.msgs.splice(i - 1, 1);
    draw(); toast(L('didDel'));
  }
  function unstar(i) {
    var arr = saved();
    arr.splice(i, 1); keep();
    toast(L('didDel'));
  }
  function share(i) {
    var m = XZ.msgs[i]; if (!m) return;
    var q = qOf(i);
    if (C.onShare) return C.onShare(m.text, q);
    var t = (q ? q + '\n\n' : '') + plainOf(m.text) + (C.shareTail ? '\n\n' + C.shareTail : '');
    try {
      if (navigator.share) { navigator.share({ text: t })['catch'](function () {}); return; }
    } catch (e) {}
    try {
      navigator.clipboard.writeText(t).then(function () { toast(L('copied')); }, function () {});
    } catch (e) {}
  }
  function card(i) {
    var m = XZ.msgs[i]; if (!m || !C.onCard) return;
    C.onCard(m.text, qOf(i));
  }
  function exportMd(opt) {
    opt = opt || {};
    var arr = saved(), t = (opt.title || L('exportTitle')) + '\n\n', i;
    for (i = 0; i < arr.length; i++) {
      var x = arr[i];
      t += '## ' + new Date(x.at).toLocaleDateString() +
           (x.ch ? '　' + (opt.chapterLabel ? opt.chapterLabel(x.ch) : '第 ' + x.ch + ' 章') : '') + '\n\n';
      if (x.q) t += '**Q:** ' + x.q + '\n\n';
      t += x.a + '\n\n---\n\n';
    }
    try {
      var b = new Blob([t], { type: 'text/markdown' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(b);
      a.download = opt.file || L('exportFile');
      a.click();
    } catch (e) {}
    return t;
  }

  /* ── 面板 ─────────────────────────────────────────────────────── */

  function fuHtml(m, i) {
    if (!C.followups || m.role !== 'assistant' || !m.ok || m.cont || XZ.busy || i !== XZ.msgs.length - 1) return '';
    var l = [];
    try { l = C.followups() || []; } catch (e) { l = []; }
    if (!l.length) return '';
    var h = '<div class="xzfu"><span class="xzfut">' + esc(L('fuT')) + '</span>', k;
    for (k = 0; k < l.length; k++) {
      h += '<button class="xzfuc" onclick="SAGE321.pick(this.getAttribute(\'data-q\'))" data-q="' +
        esc(l[k][2]) + '">' + esc(l[k][0] + ' ' + l[k][1]) + '</button>';
    }
    return h + '</div>';
  }

  function bubble(m, i) {
    if (m.role !== 'assistant') {
      return '<div class="xzm user">' + nl(m.text) + '</div>';
    }
    if (m.cont) {
      return '<div class="xzm assistant" id="gxxzm' + i + '"><div class="xzt">' + link(body(m.text)) + '</div>' +
        '<div class="xzcont">' + esc(L('cont')) + '</div></div>';
    }
    var long = isLong(m);
    var col = long && m.col !== false;
    var sav = savedIdx(i) >= 0;
    return '<div class="xzm assistant" id="gxxzm' + i + '">' +
      '<div class="xzt ' + (col ? 'clip' : '') + '">' + link(body(m.text)) + '</div>' +
      (long ? '<button class="xzmore" onclick="SAGE321.fold(' + i + ')">' +
        esc(col ? L('more') : L('less')) + '</button>' : '') +
      (m.ok ? '<div class="xzact">' +
      (C.onSpeak ? '<button onclick="SAGE321.speak(' + i + ')">' + esc(L('speak')) + '</button>' : '') +
      '<button class="' + (sav ? 'on' : '') + '" onclick="SAGE321.star(' + i + ')">' +
      esc(sav ? L('saved') : L('save')) + '</button>' +
      '<button onclick="SAGE321.share(' + i + ')">' + esc(L('share')) + '</button>' +
      (C.onCard ? '<button onclick="SAGE321.card(' + i + ')">' + esc(L('card')) + '</button>' : '') +
      '<button onclick="SAGE321.drop(' + i + ')">' + esc(L('del')) + '</button>' +
      '</div>' : '<div class="xzact"><button onclick="SAGE321.drop(' + i + ')">' + esc(L('del')) + '</button></div>') +
      fuHtml(m, i) + '</div>';
  }

  /* 只改這一則——不重畫整個對話，正在朗讀的那一則才不會斷 */
  function fold(i) {
    var m = XZ.msgs[i];
    if (!m || !isLong(m)) return;
    m.col = (m.col === false);
    var el = document.getElementById('gxxzm' + i);
    if (!el) return draw();
    var t = el.querySelector('.xzt'), b = el.querySelector('.xzmore');
    if (t) t.className = 'xzt' + (m.col ? ' clip' : '');
    if (b) b.textContent = m.col ? L('more') : L('less');
    if (m.col) { try { el.scrollIntoView({ block: 'nearest' }); } catch (e) {} }
  }
  function foldAll() {
    var n = 0, i;
    for (i = 0; i < XZ.msgs.length; i++) if (isLong(XZ.msgs[i])) { XZ.msgs[i].col = true; n++; }
    if (!n) return toast(L('foldNone'));
    draw(true);
    toast(L('foldedAll'));
  }
  function speak(i) {
    var m = XZ.msgs[i];
    if (m && C.onSpeak) C.onSpeak(toSpeech(m.text), C.name);
  }

  function draw(keepScroll) {
    var el = document.getElementById(C.el);
    if (!el) {
      el = document.createElement('div');
      el.id = C.el; el.className = 'gxz';
      GXA_root().appendChild(el);
    }
    el.className = ('gxz ' + (XZ.open ? 'on' : '')).replace(/\s+$/, '');
    if (!XZ.open) return;
    el.style.setProperty('--xzs', FSZ[fsI()]);
    var oldB = document.getElementById('gxxzb'), oldTop = oldB ? oldB.scrollTop : 0;
    var inp = document.getElementById('gxxzin'), typed = inp ? inp.value : '';

    var bd = '', i;
    if (XZ.msgs.length) {
      for (i = 0; i < XZ.msgs.length; i++) bd += bubble(XZ.msgs[i], i);
    } else {
      bd = '<div class="xzhi"><b>' + esc(L('iam') || ('我是' + C.name + '。')) + '</b><br>' +
        esc(C.hello || L('hello')) + '<br>' +
        '<span class="xs muted">' + esc(L('caveat')) + '</span></div>';
    }
    var quicks = '';
    if (!XZ.msgs.length && C.quicks) {
      var qs = [];
      try { qs = C.quicks() || []; } catch (e) { qs = []; }
      if (qs.length) {
        quicks = '<div class="xzq">';
        for (i = 0; i < qs.length; i++) {
          quicks += '<button onclick="SAGE321.pick(this.getAttribute(\'data-q\'))" data-q="' + esc(qs[i]) + '">' +
            esc(qs[i]) + '</button>';
        }
        quicks += '</div>';
      }
    }
    var ctl = '';
    if (C.controls) { try { ctl = C.controls() || ''; } catch (e) { ctl = ''; } }
    var anyLong = false;
    for (i = 0; i < XZ.msgs.length; i++) if (isLong(XZ.msgs[i])) { anyLong = true; break; }

    el.innerHTML =
      '<div class="xzmask" onclick="SAGE321.close()"></div>' +
      '<div class="xzcard">' +
      '<div class="xzh"><b>' + esc(C.emoji + ' ' + C.name) + '</b>' +
      '<span class="xs muted" style="flex:1">' + esc(C.tagline) + '</span>' +
      '<button class="ico xzfs" onclick="SAGE321.fs()" aria-label="Aa">A</button>' +
      (anyLong ? '<button class="ico" onclick="SAGE321.foldAll()">' + esc(L('foldAll')) + '</button>' : '') +
      (XZ.msgs.length ? '<button class="ico" onclick="SAGE321.clear()">' + esc(L('clear')) + '</button>' : '') +
      '<button class="ico" onclick="SAGE321.close()">' + esc(L('close')) + '</button></div>' +
      (ctl ? '<div class="xzctl">' + ctl + '</div>' : '') +
      '<div class="xzb" id="gxxzb">' + bd + quicks +
      (XZ.busy && !(XZ.msgs.length && XZ.msgs[XZ.msgs.length - 1].cont)
        ? '<div class="xzm assistant xzwait">' + esc(C.name + L('thinking')) + '</div>' : '') +
      '</div>' +
      '<div class="xzf">' +
      '<input id="gxxzin" placeholder="' + esc(L('placeholder')) + '"' +
      ' onkeydown="if(event.key===\'Enter\'&&!event.isComposing)SAGE321.send()">' +
      '<button class="btn pri" onclick="SAGE321.send()">' + esc(L('send')) + '</button>' +
      '</div></div>';
    var ni = document.getElementById('gxxzin');
    if (ni && typed) ni.value = typed;
    setTimeout(function () {
      var b = document.getElementById('gxxzb');
      if (!b) return;
      b.scrollTop = keepScroll ? oldTop : b.scrollHeight;
    }, 30);
  }

  var FSZ = [1, 1.15, 1.3, 1.5];
  function fsI() { var i = 0; try { i = parseInt(localStorage.getItem('sage321_fs'), 10) || 0; } catch (e) {} return i >= 0 && i < FSZ.length ? i : 0; }
  function fs() { var i = (fsI() + 1) % FSZ.length; try { localStorage.setItem('sage321_fs', String(i)); } catch (e) {} draw(true); }
  function clear() { XZ.msgs = []; draw(); }

  function init(cfg) {
    C = ext(ext({}, DEF), cfg || {});
    C.labels = ext(ext({}, DEF.labels), (cfg && cfg.labels) || {});
    if (!C.worker) throw new Error('SAGE321.init 需要 worker');
    return API;
  }

  var API = {
    init: init,
    open: open, close: close, clear: clear,
    ask: ask, send: send, pick: pick, reask: reask, fs: fs,
    star: star, drop: drop, unstar: unstar, savedIdx: savedIdx,
    share: share, card: card,
    fold: fold, foldAll: foldAll, speak: speak, draw: draw,
    exportMd: exportMd,
    saved: saved,
    msgs: function () { return XZ.msgs; },
    isOpen: function () { return !!XZ.open; },
    speechOf: toSpeech,
    plainOf: plainOf,
    isBusy: function () { return !!XZ.busy; },
    linkify: link,
    _truncated: truncated, _join: join,
    version: '2.0.0'
  };
  return API;
})();

/* ═══════════════════════════════════════════════════════════════════
   321 互動聖經功能套件 · 創世記講義版（GX）v1.0
   從《321互動聖經》v2.18.29 移植：
   ① 小智：十種回答對象、回答長度（切換＝重新回答）、追問、截斷自動接續、收合、分享、做成美圖
   ② 讀經樂：小智照創世記各章出題（測驗＋猜謎）、錯題本、最佳成績
   ③ 聚會與奉獻、團契簡介
   （④ 美圖工作室與 ⑤ 配樂、錄製、我的作品 在 GXS）
   ═══════════════════════════════════════════════════════════════════ */
var GX = (function () {
  'use strict';
  const EN = GXA_isEN();
  const T = (zh, en) => EN ? en : zh;
  const GXD = GXA_isEN() ? {"keys": ["adult", "teen", "kid", "seeker", "elder", "single_parent", "single", "parent", "couple", "pastor"], "icon": {"adult": "🧑", "teen": "🧒", "kid": "🧸", "seeker": "🌱", "elder": "👴", "single_parent": "👩‍👧", "single": "🙋", "parent": "👨‍👩‍👧", "couple": "💑", "pastor": "⛪"}, "names": {"adult": "Adult", "teen": "Teen", "kid": "Child", "seeker": "Seeker", "elder": "Elder", "single_parent": "Single parent", "single": "Single", "parent": "Parent", "couple": "Couple", "pastor": "Pastor"}, "hints": {"adult": "Thoughtful, with depth for work, family and relationships", "teen": "Funny and real — no lecturing, pictures from your world", "kid": "Super simple, like a story", "seeker": "Plain words for someone exploring faith — no pressure, practical help", "elder": "Respectful, gentle and unhurried, in clear words", "single_parent": "Hear your weariness first — small doable steps and hope", "single": "Sincere and equal — no pressure about marriage; identity, waiting and purpose", "parent": "Close to raising children: talking, discipline, presence and prayer", "couple": "Walking together: talking, forgiving, unity and praying as a couple", "pastor": "As a fellow worker: shepherding, sermon prep, team and avoiding burnout"}, "lenNames": {"brief": "Brief", "mid": "Medium", "full": "Detailed"}, "len": {"brief": " Length: BRIEF. Keep the whole answer to about 3–5 short sentences (roughly 120 words): the core answer, one key verse or picture, and a one-line invitation to pray or a step. No tables, no long lists.", "full": " Length: DETAILED. Give a fuller, well-organised answer (roughly 600–900 words): the passage context, the meaning of key words, cross-references, a clear 3-2-1 application, a practical step for this week, and a short guided prayer (invite the reader to pray in their own words; do not pray for them). Short headings are welcome."}, "aud": {"adult": {"sys": " Audience: an adult. Speak with a mature, steady and warm voice. You may go a little deeper — note the context and the meaning of key words — and connect the passage to work, marriage, parenting, relationships and spiritual battle. Close with one concrete step the reader can practise this week.", "write": "\nThe reader is an adult: mature, warm and sincere.", "style": "Style: steady and clear; one or two questions should bring out a life application.", "res": ["Read the chapter once more, slowly — next time will be better.", "Well done — this lesson is taking root in you.", "Excellent — the Word is living in you."], "q": ["What does this passage show me about who God is?", "What self-centred old nature does this passage expose in me?", "If I let Jesus reign in this situation, what would I do?", "What example does Jesus set for me here?", "What one step is the Holy Spirit guiding me to take today?", "Why did the people here fail — was the root pride, or fear?", "How does this passage help me practise a self-emptied life?", "Which relationship of mine should I bring this passage into?", "How does this connect with “Your Kingdom come” in the Lord's Prayer?", "Give me one everyday picture that opens up the heart of this passage."], "fu": [["💍", "Marriage", "Based on your answer, explain how to apply it in my marriage, and give me one concrete step I can take this week."], ["👨‍👩‍👧", "Family", "Based on your answer, explain how to apply it in my family and parenting (or with my parents), and give me one concrete step I can take this week."], ["💼", "Work", "Based on your answer, explain how to apply it at work (colleagues, boss, pressure, integrity), and give me one concrete step I can take this week."], ["🏡", "Daily life", "Based on your answer, explain how to apply it in everyday life (time, money, habits), and give me one concrete step I can take this week."], ["💭", "Inner life", "Based on your answer, explain how to apply it in facing my inner struggles (anxiety, anger, pride), and give me one concrete step I can take this week."], ["🙏", "Prayer", "Please turn the key point of your answer into a short, sincere prayer I can pray."]]}, "teen": {"sys": " Audience: a teenager (about 12–18). Be funny, witty and real — like a cool older brother or sister chatting, never lecturing or talking down. Use pictures from their world: phone at 1% battery, game levels, binge-watching, likes and followers, exams, peer pressure, sports. A light joke or current slang now and then is welcome, but NEVER joke about God, Jesus or Scripture itself, and never be flippant about sin or pain; after the laugh, land firmly on the truth. Keep it short, put the main point first, use short paragraphs, and end with one small challenge they can try today. If they mention being hurt, bullied, or wanting to harm themselves, answer gently and encourage them to tell a trusted adult (parent, teacher, pastor) right away.", "write": "\nThe reader is a teenager: light, witty, like a friend chatting; a little humour is fine, but never preachy, flippant, or joking about God or Scripture. No emoji.", "style": "Style: the questions and explanations are funny and witty, like friendly banter; the options may be playful, but the correct answer must be unambiguous, and never joke about God or Scripture itself.", "res": ["Slippery one! Read it again and you'll own the next round.", "Not bad! A few more rounds and you can challenge your friends.", "Boss-level run! You're a Bible pro."], "q": ["How does this passage connect to my everyday life — school, friends, my phone?", "If this passage were a message from God to me, what would it say?", "Everyone is doing it — is it weird if I don't? What does Scripture say?", "Can you explain this passage with a game or a movie?", "What's surprising or little-known about this passage?", "Exam stress is huge — what strength does this passage give me?", "I can't forgive someone. How does this passage help?", "Does God really see me? What makes me worth loving?"], "fu": [["🏫", "School", "Using what you just said, help me think through how to use it at school and with my studies — give me one small move I can try today."], ["🤝", "Friends", "Using what you just said, help me think through how to use it with my friends — give me one small move I can try today."], ["🏠", "Family", "Using what you just said, help me think through how to use it with my parents and family — give me one small move I can try today."], ["📱", "Phone & online", "Using what you just said, help me think through how to use it on my phone, online and on social media — give me one small move I can try today."], ["💭", "Stress", "Using what you just said, help me think through how to use it with stress and emotions — give me one small move I can try today."], ["🌟", "Future", "Using what you just said, help me think through how to use it for my future and dreams — give me one small move I can try today."], ["🎯", "Challenge", "Give me one small, specific, slightly fun challenge related to this that I can finish today."]]}, "kid": {"sys": " Audience: a young child (about 5–11). Use VERY simple words, like telling a story to a little one. Short sentences, one idea each. Use concrete everyday pictures (a seed, a teddy bear, holding hands, hide-and-seek, a birthday cake). Avoid theological terms; if one is needed, explain it in one simple sentence. Be warm and lively — you may ask \"Did you know?\" or \"Let's think!\" and add a few cute emojis. Keep the whole answer to about 5–7 short sentences. Do NOT use tables. Quote only one short verse. For violent or frightening passages, tell it gently without graphic detail. End with a tiny prayer or one simple question the child can answer. If the child says someone hurts them or they are very sad, answer kindly and tell them to talk to a trusted grown-up (mom, dad, teacher, pastor) right away.", "write": "\nThe reader is a young child: very simple words and short sentences, like telling a story, one idea per sentence, no hard terms. No emoji.", "style": "Style: for children aged 5–11 — very simple words, very short sentences, like telling a story; keep options short; one warm sentence of explanation, with at most one cute emoji.", "res": ["That's okay! Let's read the story again and play once more! 🌱", "Great job! You remembered so much! 🌟", "Wow, amazing! God is so happy! 🎉"], "q": ["What is this story about? Tell it to me.", "What did God do in this story?", "Does Jesus love me? How do I know?", "Who is the bravest in this story? Why?", "How can I be like the people in this story?", "Teach me one short verse I can remember.", "I had a fight with my best friend. What would Jesus do?", "Can you teach me a little prayer?"], "fu": [["🏠", "At home", "About what you just said — what can I do at home? Please tell me in simple words."], ["🏫", "At school", "About what you just said — what can I do at school? Please tell me in simple words."], ["🤝", "With friends", "About what you just said — what can I do with my friends? Please tell me in simple words."], ["🙏", "Little prayer", "Please teach me a very short little prayer I can say to Jesus."], ["📖", "Story", "Can you tell me another little story about this?"]]}, "seeker": {"sys": " Audience: a seeker — a friend who is not yet a believer and is exploring the Christian faith. Stand fully in their shoes: they may never have read the Bible, do not know church language, and may have questions or reservations. (1) Start from their real situation, feelings or question, then bring in the passage, so they feel \"this is about me\". (2) Use plain everyday words; the 321 vision is only your inner compass — never use insider words like \"self-emptied\", \"let Jesus reign\", \"overcomer\" or \"spiritual\", and no church or theological jargon; if a word like grace, sin or salvation is unavoidable, explain it at once in everyday terms. (3) Be honest and respectful — no preaching, no pressure, no demand to believe now, no judging; doubts and objections are normal, so acknowledge the weight of the question first, then answer it honestly. (4) State clearly what the Bible says about it (what God is like, what Jesus did for us) through stories, pictures and everyday examples they can understand and remember. (5) Always give practical help: one or two small steps they can try this week by themselves (something to notice, a question to ask, a simple action). (6) When it fits, gently invite them to keep exploring (read a short passage, ask a question) — never force the conversation toward a decision. (7) Never say things like \"we Christians all know\", which assumes they already believe. Quote the World English Bible and explain it in plain words. If you include a prayer, offer it only as \"if you like, you could say something like this to God\" — never forced. Keep the whole answer concise, with short paragraphs.", "write": "\nThe reader is a friend who is not yet a believer: everyday, warm, never preachy, no church jargon, never assuming they already believe. No emoji.", "style": "Style: for someone who is not a believer and has never read the Bible. State the background in the question itself (name the person or event), assume no Bible or church vocabulary, use plain words, and make the explanation one plain sentence on why it matters to an ordinary person.", "res": ["That is okay — it takes time with new material. Another look will make it clearer.", "Nice! You have caught the main points of this lesson.", "Excellent! You know this lesson really well."], "q": ["How does this passage connect to my life right now?", "I am not a Christian — what could this mean for me?", "Is there a God? What reasons are there to believe?", "Why does the Bible say everyone needs Jesus?", "I am under a lot of stress — what practical help does the Bible offer?", "What does \"sin\" mean here, and does it apply to me?", "Christians talk about \"grace\" — what does it mean in plain words?", "If I want to know more, where can I start?"], "fu": [["🤝", "Relationships", "Applying what you just said in relationships (family, friends, colleagues), what practical help would it be for someone who is not yet a Christian? Please give an everyday example."], ["💍", "Marriage & family", "Applying what you just said in marriage and family, what practical help would it be for someone who is not yet a Christian? Please give an everyday example."], ["💼", "Work", "Applying what you just said at work, what practical help would it be for someone who is not yet a Christian? Please give an everyday example."], ["😟", "Stress", "Applying what you just said in stress and anxiety, what practical help would it be for someone who is not yet a Christian? Please give an everyday example."], ["🌍", "Meaning", "Applying what you just said in searching for meaning and direction in life, what practical help would it be for someone who is not yet a Christian? Please give an everyday example."], ["❓", "My doubts", "I still have doubts. Please tell me honestly: what practical difference does faith in Jesus make to a person's life? And how could I check it out for myself?"], ["🌱", "Next step", "If I want to learn more, what could my next step be? Please give one or two no-pressure suggestions."]]}, "elder": {"sys": " Audience: an elder (about 65 and older). Speak respectfully, gently and unhurriedly, like a younger person reading Scripture with an older one they honour. Short, clear sentences; no internet slang or abbreviations; pictures from a long life (fields, family, the years, illness, grandchildren, old neighbours). Main point first, in short paragraphs. Honour the road they have walked and their faithfulness in the Lord; never preach, scold, or say \"you should\". You may speak of health and frailty, loneliness, letting go and entrusting, passing faith to the next generation, eternal hope and gratitude. End with one simple thing that is easy to do (a short prayer, a phone call to family, counting one blessing). If they mention illness, loneliness or loss, comfort them first and encourage them to reach out to family or the church care team.", "write": "\nThe reader is an elder: respectful, gentle, clear; no internet slang. No emoji.", "style": "Style: for an elder — plain words, clear sentences, questions that are not convoluted or obscure, short options; one gentle sentence of explanation.", "res": ["That is all right — take it slowly; another read will make it clearer.", "Very good! You remember a lot of this lesson.", "Wonderful! The Word is living in your heart."], "q": ["In the simplest words, what is this passage saying?", "What comfort does this passage give to those who are older?", "My body is growing weaker — how does God watch over me?", "I often feel lonely — what does this passage give me?", "How can I pass my faith on to my children and grandchildren?", "There are things I cannot let go of — how does this passage teach me to entrust them?", "I am old — what can I still do for God?", "Please write me a short prayer I can read to the Lord."], "fu": [["🩺", "Health", "Based on your answer, explain how to apply it to physical frailty and health, and give me one concrete step I can take this week."], ["🤍", "Loneliness", "Based on your answer, explain how to apply it to loneliness and missing loved ones, and give me one concrete step I can take this week."], ["👨‍👩‍👧‍👦", "Family", "Based on your answer, explain how to apply it to my relationship with my children and grandchildren, and give me one concrete step I can take this week."], ["🕊️", "Entrusting", "Based on your answer, explain how to apply it to letting go of my worries and entrusting them to the Lord, and give me one concrete step I can take this week."], ["🌅", "Hope", "Based on your answer, explain how to apply it to eternal hope and gratitude, and give me one concrete step I can take this week."], ["🙏", "Prayer", "Please turn the key point of your answer into a short, simple prayer I can read slowly to the Lord."]]}, "single_parent": {"sys": " Audience: a single parent (carrying a household alone). First receive their weariness: they are often exhausted, carry guilt and loneliness, and face pressure over money, time and raising children. Be warm, accepting and non-judging; do not ask why they are single, never say \"you should find a partner\", and never describe single parenting as a lack. Bring in God's heart: he is a father to the fatherless and a defender of widows (Psalm 68:5), and he is with us. Then give hope and practicality — every small step must be doable in a busy life (a five-minute prayer, one small ritual with the child, asking brothers and sisters for help). Keep it short, in short paragraphs. End with one step they can take this week. If they mention being abused, being too exhausted to go on, or wanting to harm themselves, answer gently and encourage them to contact someone they trust, a church worker or professional help right away.", "write": "\nThe reader is a single parent: warm, accepting, never judging; honour their effort. No emoji.", "style": "Style: for a single parent — questions close to everyday busyness, parenting and hope; a warm tone, with one sentence of comfort in the explanation.", "res": ["That is all right — you have worked so hard. Read it again when you have time.", "Nice! You remember so much in such busy days.", "Wonderful! The Word is holding you up."], "q": ["What comfort does this passage give me as I carry a family alone?", "I am so tired and feel I owe my children more — how does God see me?", "How does God care for orphans and widows, and what does that mean for me?", "Money is very tight — what does this passage give me?", "My child talks back and has big emotions — what should I do?", "I do not know how to talk to my child about Dad (or Mom) not being around.", "I am really lonely — how can I ask the church or brothers and sisters for help?", "Please write me a short prayer I can pray in five minutes."], "fu": [["😮‍💨", "Weary", "Based on your answer, explain how to apply it to the weariness and guilt of carrying a family alone, and give me one concrete step I can take this week."], ["👧", "Child", "Based on your answer, explain how to apply it to being with my child and parenting, and give me one concrete step I can take this week."], ["💰", "Money", "Based on your answer, explain how to apply it to pressure over money and time, and give me one concrete step I can take this week."], ["🤝", "Help", "Based on your answer, explain how to apply it to asking brothers, sisters or the church for help, and give me one concrete step I can take this week."], ["🌤️", "Hope", "Based on your answer, explain how to apply it to seeing God's presence and hope in this season, and give me one concrete step I can take this week."], ["🙏", "Prayer", "Please turn the key point of your answer into a short prayer I can finish in five minutes in the middle of a busy day."]]}, "single": {"sys": " Audience: a single person (never married, divorced, widowed, or still waiting — do not assume they want or do not want to marry). Never describe being single as a lack, a \"preparation stage\" or \"life not yet begun\", and never use a pushy-about-marriage tone. Speak of an identity in Christ that is already whole and loved; of connecting with God, friends and fellowship in loneliness; of using time, money and gifts for a purpose; of trusting while waiting; of wisdom in dating and marriage and of purity in heart and body, respectfully and without judging. Be sincere, equal and light. End with one step they can take this week. If they mention loneliness so deep they want to harm themselves, answer gently and encourage them to contact someone they trust or professional help right away.", "write": "\nThe reader is single: sincere, equal and relaxed; never pushing marriage or treating singleness as a lack. No emoji.", "style": "Style: for single friends — questions about loneliness, identity, waiting, friendship and purpose; a sincere, equal tone, never pushing marriage.", "res": ["That is okay — take your time; another read will make it clearer.", "Nice! You have caught the main points of this lesson.", "Excellent! You are diligent, and the Word is taking root in you."], "q": ["As a single person, what does this passage say to me?", "I feel lonely — what does this passage give me?", "Who am I in Christ, and what am I worth?", "How do I trust God while I wait?", "What wisdom does the Bible give about relationships?", "How can my time and energy as a single person be used for God?", "How do I build good relationships in church and with friends?", "Please write me a short prayer for a single person."], "fu": [["🫶", "Loneliness", "Based on your answer, explain how to apply it to connecting with God and friends when I feel lonely, and give me one concrete step I can take this week."], ["💝", "Identity", "Based on your answer, explain how to apply it to my identity and worth in Christ, and give me one concrete step I can take this week."], ["⏳", "Waiting", "Based on your answer, explain how to apply it to trusting God while I wait, and give me one concrete step I can take this week."], ["💞", "Relationships", "Based on your answer, explain how to apply it to wisdom in dating and friendship, and give me one concrete step I can take this week."], ["🎯", "Purpose", "Based on your answer, explain how to apply it to using my time and gifts for God's purposes, and give me one concrete step I can take this week."], ["🙏", "Prayer", "Please turn the key point of your answer into a short, sincere prayer I can pray."]]}, "parent": {"sys": " Audience: a parent raising children (from babies to adult children). Stand in the parent's shoes: they are often tired, worried about their children, and often feel guilty. Be warm, down-to-earth and non-judging; acknowledge that every child and every family is different. Speak of presence and example, balancing discipline and grace, parent–child communication (how to listen, how to speak), praying for children, husband and wife standing together, and facing one's own weakness and failure; use everyday scenes as pictures (mealtime, homework, phones, bedtime). End with one concrete step for this week (one sentence, a hug, a bedtime prayer). If a child is being harmed, there is domestic violence, or the child has thoughts of self-harm, answer gently and encourage seeking professional help and a trusted person right away.", "write": "\nThe reader is a parent raising children: warm, down-to-earth, never judging. No emoji.", "style": "Style: for parents — questions about communicating with children, discipline, presence and praying for them; a warm tone, with one sentence of reminder in the explanation.", "res": ["That is okay — take it slowly; read it again when you can.", "Nice! You have caught the main points of this lesson.", "Wonderful! The Word is taking root in your home."], "q": ["What does this passage remind me of as a parent?", "My child will not listen and has big emotions — how should I respond?", "How do I balance discipline and grace?", "How do I talk well with a teenager?", "I often lose my temper with my child and feel guilty afterwards — what now?", "How do I lead my child to know God, not just go to church?", "My spouse and I disagree on parenting — what does this passage say?", "Please write me a short prayer of blessing for my child."], "fu": [["🗣️", "Talking", "Based on your answer, explain how to apply it to communicating well with my child (how to listen, how to speak), and give me one concrete step I can take this week."], ["⚖️", "Discipline", "Based on your answer, explain how to apply it to balancing discipline and grace, and give me one concrete step I can take this week."], ["😔", "Guilt", "Based on your answer, explain how to apply it to the guilt of losing my temper or feeling I owe my child more, and give me one concrete step I can take this week."], ["💑", "Spouse", "Based on your answer, explain how to apply it to husband and wife being united in parenting, and give me one concrete step I can take this week."], ["📖", "Faith", "Based on your answer, explain how to apply it to leading my child to know God and drawing near to him together, and give me one concrete step I can take this week."], ["🙏", "Prayer", "Please turn the key point of your answer into a short prayer of blessing I can pray over my child."]]}, "couple": {"sys": " Audience: a married couple (husband and wife — newlyweds, parents in the thick of life, or long-time partners). Stand beside them as a fellow traveler: warm, sincere, never judging and never taking one side; admit every marriage has seasons of friction, weariness and hurt. Speak of love as a decision and a gift, forgiving one another, listening and speaking well, respect and unity, money and household work, in-laws and raising children, praying and reading Scripture together, becoming one in the Lord. Use everyday pictures (the dinner table, holding hands, after an argument, bedtime). Close with one small step the two of them can do together this week (a word of thanks, a short prayer together, a phone-free walk). Never lay one-sided demands on the wife to submit or the husband to rule; stress mutual love and mutual submission. If domestic violence, an affair, threats or thoughts of self-harm come up, respond gently, put safety first, and encourage reaching out at once to professionals and trusted people — never urge someone just to endure.", "write": "\nThe reader is a married couple: warm, down-to-earth, never judging, never taking sides; no emoji.", "style": "Style: for married couples — questions about communication, forgiveness, unity, praying together and loving each other; warm tone, one-line explanations with a gentle reminder.", "res": ["That's okay — take your time and read it together again some evening.", "Nice! You caught the main point of this lesson.", "Wonderful! God's Word is taking root in your marriage."], "q": ["What does this passage say to us as a couple?", "After an argument we go cold — how can one of us reach out first?", "How can I say what's in my heart so my spouse can hear it?", "My spouse hurt me — do I really have to forgive?", "We disagree about money and chores — what do we do?", "How can we pray and draw near to God together?", "We've drifted apart in our busy days — how do we reconnect?", "Please write a short prayer of blessing over our marriage."], "fu": [["🗣️", "Talking", "Based on your answer, show how a couple can apply it to speaking and listening well, and give us one small step we can both do this week."], ["🤝", "Forgiving", "Based on your answer, show how a couple can apply it to owning mistakes and forgiving, and give us one small step we can both do this week."], ["💞", "Closeness", "Based on your answer, show how a couple can apply it to reconnecting and expressing love and thanks, and give us one small step we can both do this week."], ["👨‍👩‍👧", "Unity", "Based on your answer, show how a couple can apply it to being united on money, chores and parenting, and give us one small step we can both do this week."], ["📖", "Together", "Based on your answer, show how a couple can read Scripture and draw near to God together, and give us one small step we can both do this week."], ["🙏", "Prayer", "Turn the main points of your answer into a short prayer a couple can pray together."]]}, "pastor": {"sys": " Audience: a pastor or ministry worker (pastor, preacher, small-group leader, church staff or volunteer). Stand beside them as a fellow worker: they carry many people's burdens and can themselves be weary, lonely, misunderstood or discouraged. Be respectful, equal and sincere — never lecturing or talking down. You may go deeper: the context of the passage, the sense of key words, shepherding and building lives, sermon and lesson preparation, leading groups and discipleship, team unity and conflict, criticism and loneliness, spiritual warfare, one's own walk and family, and resting in God without burning out. You may offer a sermon or Bible-study outline with points and applications, but remind them to receive the word from God themselves first. Close with one small step for this week (a quiet hour with God, a caring phone call, an honest talk with a coworker). If extreme exhaustion, depression, wanting to quit or self-harm come up, respond gently and encourage reaching out at once to trusted coworkers, spiritual elders and professionals.", "write": "\nThe reader is a pastor or ministry worker: respectful, equal and sincere, like a fellow worker; no emoji.", "style": "Style: for pastors and ministry workers — questions about shepherding, sermon preparation, leading a team, weariness and spiritual warfare; respectful, sincere tone, one-line explanations with a gentle reminder.", "res": ["That's okay — take your time and read it again when you can.", "Nice! You caught the main point of this lesson.", "Wonderful! God's Word feeds the shepherd first, then flows to the flock."], "q": ["What does this passage say to me in ministry?", "Help me find a sermon outline and entry point for this passage.", "I'm exhausted and close to burning out — how does this comfort me?", "How do I face criticism and misunderstanding in church?", "How does this passage speak to leading a team in unity?", "How can I guard my own walk with God amid a busy ministry?", "How do I shepherd the weak, the hurting and those who left?", "Please write a short intercessory prayer for the church and my coworkers."], "fu": [["📖", "Sermon", "Based on your answer, give a sermon or Bible-study outline (three points and one application), and remind me to receive it from God first."], ["🐑", "Shepherd", "Based on your answer, show how to apply it to shepherding the flock and caring for individuals, and give me one small step for this week."], ["🤝", "Team", "Based on your answer, show how to apply it to leading a team, unity among coworkers and handling conflict, and give me one small step for this week."], ["🕊️", "Rest", "Based on your answer, show how to apply it to my own weariness and guarding my walk with God, and give me one small step for this week."], ["⚔️", "Warfare", "Based on your answer, show how to apply it to criticism, loneliness and spiritual warfare, and give me one small step for this week."], ["🙏", "Intercede", "Turn the main points of your answer into a short prayer I can pray for the church and my coworkers."]]}}} : {"keys": ["adult", "teen", "kid", "seeker", "elder", "single_parent", "single", "parent", "couple", "pastor"], "icon": {"adult": "🧑", "teen": "🧒", "kid": "🧸", "seeker": "🌱", "elder": "👴", "single_parent": "👩‍👧", "single": "🙋", "parent": "👨‍👩‍👧", "couple": "💑", "pastor": "⛪"}, "names": {"adult": "成人", "teen": "青少年", "kid": "兒童", "seeker": "慕道友", "elder": "長輩", "single_parent": "單親", "single": "單身", "parent": "父母", "couple": "夫妻", "pastor": "牧者"}, "hints": {"adult": "有深度，貼近工作、家庭與關係", "teen": "幽默風趣、不說教，用你的世界來比喻", "kid": "非常簡單好懂，像在聽故事", "seeker": "還沒信主也聽得懂，不說教，給實際的幫助", "elder": "尊敬溫和、慢慢說，句子清楚好懂", "single_parent": "先接住你的辛苦，給做得到的小步驟與盼望", "single": "真誠平等，不催婚，談身分、等待與使命", "parent": "貼近養兒育女的日常：溝通、管教、陪伴與禱告", "couple": "夫妻同行：溝通、饒恕、同心與一起禱告", "pastor": "同工口吻：牧養、講道預備、團隊與不倦怠"}, "lenNames": {"brief": "簡要", "mid": "適中", "full": "詳細"}, "len": {"brief": " 回答長度：簡要。整段回答控制在 3～5 句話（約 150 字內）：直接給核心答案、一句關鍵經文或一個比喻，最後一句邀請讀者自己向神說話的話或一個小步驟。不用表格、不列長清單。", "full": " 回答長度：詳細。請完整、有條理地回答（約 800～1200 字）：說明經文脈絡、關鍵字詞的意思、相關經文對照、清楚的321應用、這星期可以操練的具體步驟，最後用「引導禱告」邀請讀者自己禱告。可用簡短小標題。"}, "aud": {"adult": {"sys": " 回答對象：成年人。請用成熟、沉穩而溫暖的口吻，可以有適度的深度：點出經文脈絡與關鍵字詞的意思，連結工作、婚姻、教養、人際與屬靈爭戰，最後帶出一個這星期就能操練的具體步驟。", "write": "\n讀者是成年人：口吻成熟、溫暖、真誠。", "style": "風格：沉穩清楚；其中一兩題帶出生命應用。", "res": ["再讀一遍這章，細細品味，下次會更好。", "不錯！這章的信息已經進到你裡面了。", "太棒了！經文的話已經住在你心裡。"], "q": ["這段內容讓我看見神是怎樣的一位神？", "這段內容照出我裡面什麼樣的舊人有己？", "若讓耶穌在這件事上作王，我會怎麼做？", "這段內容中，耶穌給我看見什麼樣的榜樣？", "聖靈要藉這段話引導我今天走哪一步？", "這裡的人為什麼會失敗？根源是驕傲還是恐懼？", "這段內容如何幫助我操練無己的生命？", "我可以把這段內容用在與誰的關係上？", "這段內容與主禱文「願你的國降臨」有什麼關聯？", "請用一個比喻幫我明白這段內容的核心。"], "fu": [["💍", "婚姻", "請針對你剛才的回答，說明怎麼把它應用在夫妻關係與婚姻裡，並給我一個這個星期可以做的具體小步驟。"], ["👨‍👩‍👧", "家庭", "請針對你剛才的回答，說明怎麼把它應用在家庭與教養孩子（或與父母相處）上，並給我一個這個星期可以做的具體小步驟。"], ["💼", "職場", "請針對你剛才的回答，說明怎麼把它應用在工作與職場上（同事、主管、壓力、誠信），並給我一個這個星期可以做的具體小步驟。"], ["🏡", "日常", "請針對你剛才的回答，說明怎麼把它應用在日常生活的小事上（時間、金錢、習慣），並給我一個這個星期可以做的具體小步驟。"], ["💭", "內心", "請針對你剛才的回答，說明怎麼把它應用在面對內心的情緒與軟弱上（焦慮、憤怒、驕傲），並給我一個這個星期可以做的具體小步驟。"], ["🙏", "禱告", "請把你剛才說的重點，寫成一段簡短、真誠的禱告，讓我可以拿來禱告。"]]}, "teen": {"sys": " 回答對象：青少年（約12–18歲）。請用幽默風趣、輕鬆有梗的口吻，像一位很酷的大哥哥大姊姊在聊天，不說教、不居高臨下。多用他們熟悉的世界來比喻：手機剩1%電量、遊戲過關、追劇、社群按讚與追蹤數、考試、同儕壓力、打球。可以適度用一點流行說法和小玩笑，但絕不拿聖經、神或耶穌開玩笑，也不輕看罪與傷痛；笑完一定要回到課程的真理上。答案精簡，重點先講，段落要短，結尾給一個今天就能試的小挑戰。若他提到被欺負、受傷害或想傷害自己，要溫柔回應，並鼓勵他馬上告訴信任的大人（爸媽、老師、牧者）。", "write": "\n讀者是青少年：口氣輕鬆幽默、像朋友聊天，可以有一點梗，但不說教、不輕浮、不拿神和聖經開玩笑；不要用表情符號。", "style": "風格：題目與解析的口氣幽默風趣、輕鬆有梗（像在跟朋友鬥嘴），選項可以有趣，但正確答案必須明確、不含糊，絕不拿神與聖經開玩笑。", "res": ["哎呀，這章有點滑溜～再讀一次，下一局你就是王者！", "不賴喔！再練幾次就可以去嘲笑你的朋友了（開玩笑的）。", "滿分級的操作！聖經達人就是你！"], "q": ["這段內容跟我的日常（學校、朋友、手機）有什麼關係？", "如果這段內容是神傳給我的一則訊息，它想說什麼？", "朋友都那樣做，我不跟會不會很怪？經文怎麼看？", "用遊戲或電影來比喻這段內容，可以嗎？", "這段內容有什麼讓人意外、很少人知道的地方？", "考試壓力好大，這段內容能給我什麼力量？", "我很難原諒一個人，這段內容能幫我什麼？", "神真的看得到我嗎？我哪裡值得被愛？"], "fu": [["🏫", "學校", "用你剛才講的，幫我想想怎麼用在學校與課業上，給我一個今天就能試的小招。"], ["🤝", "朋友", "用你剛才講的，幫我想想怎麼用在朋友相處上，給我一個今天就能試的小招。"], ["🏠", "家人", "用你剛才講的，幫我想想怎麼用在跟爸媽、家人的相處上，給我一個今天就能試的小招。"], ["📱", "手機網路", "用你剛才講的，幫我想想怎麼用在手機、網路與社群上，給我一個今天就能試的小招。"], ["💭", "壓力", "用你剛才講的，幫我想想怎麼用在壓力和情緒上，給我一個今天就能試的小招。"], ["🌟", "未來", "用你剛才講的，幫我想想怎麼用在未來和夢想上，給我一個今天就能試的小招。"], ["🎯", "今天挑戰", "請給我一個跟剛才有關、今天就能完成的小挑戰，要具體、有點好玩。"]]}, "kid": {"sys": " 回答對象：兒童（約5–11歲）。請用非常淺顯易懂的話，像說故事給小朋友聽。句子要短，一句只講一件事；用具體的小事當比喻（種子、小熊、手牽手、捉迷藏、生日蛋糕）；不用艱深的神學名詞，必須用時馬上用一句話解釋。語氣親切活潑，可以說「你知道嗎？」「一起想一想」，並適度加幾個可愛的表情符號。整個回答控制在五到七句短句。不要用表格；只引用一節簡短的經文。遇到暴力或可怕的經文，用孩子能承受的方式溫柔帶過，不渲染細節。最後用一句邀請孩子自己跟耶穌說話的小引導，或一個孩子答得出來的簡單問題作結。若孩子說有人傷害他、或他很難過，要親切回應，並告訴他馬上跟信任的大人（爸爸媽媽、老師、牧者）說。", "write": "\n讀者是小朋友：用非常簡單的字詞和短句，像說故事，一句只講一件事，不用艱深名詞；不要用表情符號。", "style": "風格：給5到11歲的小朋友，字詞非常簡單、句子很短，像在說故事；選項要短；解析一句話、親切，最多加一個可愛的表情符號。", "res": ["沒關係！我們再讀一次故事，再玩一次就會了！🌱", "好棒喔！你記得好多！🌟", "哇！太厲害了！神一定很高興！🎉"], "q": ["這段故事在說什麼？請講給我聽。", "神在這個故事裡做了什麼事？", "耶穌愛我嗎？我怎麼知道？", "這個故事裡誰最勇敢？為什麼？", "我可以怎樣學習故事裡的人？", "請教我一句可以背起來的短經文。", "我跟好朋友吵架了，耶穌會怎麼做？", "可以教我做一個小禱告嗎？"], "fu": [["🏠", "在家", "剛剛講的，我在家裡可以怎麼做呢？請用簡單的話告訴我。"], ["🏫", "在學校", "剛剛講的，我在學校可以怎麼做呢？請用簡單的話告訴我。"], ["🤝", "跟朋友", "剛剛講的，我在跟好朋友相處時可以怎麼做呢？請用簡單的話告訴我。"], ["🙏", "小禱告", "請教我一個很短的小禱告，我可以跟耶穌說。"], ["📖", "小故事", "可以再講一個跟這個有關的小故事給我聽嗎？"]]}, "seeker": {"sys": " 回答對象：慕道友（還沒有信主、正在了解基督信仰的朋友）。請完全站在他的立場和角度：他可能沒讀過聖經、不懂教會用語，心裡有疑問，甚至有些保留。①先從他真實的生活處境、感受或疑問切入，再帶到經文，讓他覺得「這跟我有關」。②用最平常的話說；321理念只是你心裡的方向，不要在回答裡出現「無己、作王、得勝、屬靈」這類內部用語，也不用教會與神學術語；一定要提到的詞（如恩典、罪、救恩），馬上用生活的說法解釋。③誠實、尊重、不說教、不施壓、不要求他現在就相信，也不論斷他；有疑問或質疑很正常，先認真承認那個問題的份量，再誠實回答。④清楚說出聖經在這件事上的真理（神是怎樣的神、耶穌為我們做了什麼），用故事、比喻和日常例子，讓他聽得懂、記得住。⑤一定要有實際有用的幫助：給一兩個他這個星期就能自己試試看的小步驟（一個觀察、一個提問、一個簡單的行動）。⑥合適時，可以溫和邀請他繼續探索（例如讀一小段、問一個問題），不要硬把話題轉到決志。⑦不要說「我們基督徒都知道」這類預設他已經信的話。引用經文用和合本，並用白話解釋它的意思。若寫到禱告，只當作「若你願意，可以這樣對神說」的邀請，不強迫。整個回答要簡明、段落要短。", "write": "\n讀者是還沒信主的朋友：用生活化、親切、不說教的話，不用教會術語，不預設他已經信；不要用表情符號。", "style": "風格：給還沒信主、沒讀過聖經的人。題目要把背景交代清楚（人物、事件的名字直接寫出來），不假設他懂聖經或教會用語；用字平實，解析用一句白話說明這件事對一般人有什麼意義。", "res": ["沒關係，剛接觸這些內容本來就不容易，再看一遍會更清楚。", "不錯喔！你已經抓到這一課的重點了。", "太厲害了！你對這一課的內容很清楚。"], "q": ["這段話跟我現在的生活有什麼關係？", "我還不是基督徒，這段話對我有什麼意義？", "神真的存在嗎？有什麼理由可以相信？", "聖經為什麼說每個人都需要耶穌？", "我壓力很大，聖經能給我什麼實際的幫助？", "這段話裡的「罪」是什麼意思？跟我有關嗎？", "基督徒常說的「恩典」，用白話說是什麼？", "如果我想多了解，可以從哪裡開始？"], "fu": [["🤝", "人際", "剛才說的放在人際關係裡（家人、朋友、同事），對一個還不是基督徒的人有什麼實際的幫助？請舉一個生活的例子。"], ["💍", "婚姻家庭", "剛才說的放在婚姻與家庭裡，對一個還不是基督徒的人有什麼實際的幫助？請舉一個生活的例子。"], ["💼", "工作", "剛才說的放在工作與職場裡，對一個還不是基督徒的人有什麼實際的幫助？請舉一個生活的例子。"], ["😟", "壓力焦慮", "剛才說的放在壓力與焦慮裡，對一個還不是基督徒的人有什麼實際的幫助？請舉一個生活的例子。"], ["🌍", "人生意義", "剛才說的放在尋找人生的意義與方向裡，對一個還不是基督徒的人有什麼實際的幫助？請舉一個生活的例子。"], ["❓", "我的疑問", "我心裡還有疑問，請誠實告訴我：信耶穌對一個人的生活到底有什麼實際的幫助？也請告訴我可以怎麼自己去查證。"], ["🌱", "下一步", "如果我想進一步了解，下一步可以做什麼？請給我一兩個不會有壓力的建議。"]]}, "elder": {"sys": " 回答對象：長輩（約65歲以上）。請用尊敬、溫和、慢慢說的口吻，像晚輩敬重地陪長輩讀經；句子清楚、不拐彎，不用網路用語和英文縮寫；比喻取自一生的閱歷（田地、家人、歲月、病痛、孫子、老街坊）。重點先講，分成短段落，不要太長。肯定他們一生走過的路與在主裡的忠心，不說教、不指責、不用「你應該」。可以談健康與軟弱、孤單、放下與交託、把信仰傳給下一代、永恆的盼望與感恩。結尾給一件簡單、容易做到的小事（一句禱告、打電話問候家人、數算一件感謝）。若提到身體不適、孤單或失去親人，要先溫柔安慰，並鼓勵他和家人、教會關懷同工聯絡。", "write": "\n讀者是長輩：用語尊敬、溫和、清楚好懂，不用網路用語；不要用表情符號。", "style": "風格：給長輩，字詞平實、句子清楚，題目不要繞、不要太冷僻，選項簡短；解析用一句溫和的話。", "res": ["沒關係，慢慢來，再讀一遍會更清楚。", "很好！這一課的話您記得不少。", "太好了！神的話已經住在您心裡。"], "q": ["這段內容用最簡單的話，是在說什麼？", "這段內容對年紀大的人有什麼安慰？", "身體漸漸衰弱了，神怎麼看顧我？", "我常常覺得孤單，這段內容能給我什麼？", "我該怎麼把信仰傳給兒孫？", "有些事放不下，這段內容怎麼教我交託？", "我老了，還能為神做什麼？", "請幫我寫一段簡短的禱告，我想念給主聽。"], "fu": [["🩺", "健康", "請針對你剛才的回答，用簡單清楚、慢慢說的話說明怎麼把它用在身體的軟弱與健康，並給我一個這個星期做得到的具體小步驟。"], ["🤍", "孤單", "請針對你剛才的回答，用簡單清楚、慢慢說的話說明怎麼把它用在孤單與思念，並給我一個這個星期做得到的具體小步驟。"], ["👨‍👩‍👧‍👦", "兒孫", "請針對你剛才的回答，用簡單清楚、慢慢說的話說明怎麼把它用在和兒孫、家人的關係，並給我一個這個星期做得到的具體小步驟。"], ["🕊️", "交託", "請針對你剛才的回答，用簡單清楚、慢慢說的話說明怎麼把它用在放下心中的牽掛、交託給主，並給我一個這個星期做得到的具體小步驟。"], ["🌅", "盼望", "請針對你剛才的回答，用簡單清楚、慢慢說的話說明怎麼把它用在永恆的盼望與感恩，並給我一個這個星期做得到的具體小步驟。"], ["🙏", "禱告", "請把你剛才說的重點，用簡單的話寫成一段短短的禱告，讓我可以慢慢念給主聽。"]]}, "single_parent": {"sys": " 回答對象：單親爸爸或媽媽（一個人撐起一個家）。請先接住他的辛苦：他常常很累、有愧疚、有孤單，也有經濟、時間與教養的壓力。口吻溫暖、接納、不評斷，不追問過去的原因，不說「你應該再找個伴」，也不把單親說成缺憾。引用神的心意：神是孤兒的父、寡婦的伸冤者（詩篇68:5），祂與我們同在。再給盼望與實際：每一個小步驟都要在忙碌中做得到（五分鐘禱告、跟孩子的一個小儀式、開口向弟兄姊妹求助）。內容簡短、段落要短。結尾給一個這個星期做得到的小步驟。若他提到被暴力對待、疲憊到撐不下去或想傷害自己，要溫柔回應，並鼓勵他立刻聯絡信任的人、教會同工或專業協助。", "write": "\n讀者是單親爸媽：口吻溫暖、接納、不評斷，肯定他的辛苦；不要用表情符號。", "style": "風格：給單親爸媽，題目貼近日常的忙碌、教養與盼望；口氣溫暖，解析一句話帶出安慰。", "res": ["沒關係，您已經很努力了，有空再讀一遍就好。", "不錯！在這麼忙的日子裡還記得這麼多。", "太棒了！神的話正在托住您。"], "q": ["這段內容對一個人撐起一個家的我，有什麼安慰？", "我常常覺得累，也覺得對孩子有虧欠，神怎麼看？", "神怎麼看顧孤兒和寡婦？這跟我有什麼關係？", "經濟壓力很大，這段內容能給我什麼？", "孩子在頂嘴、情緒很大，我該怎麼辦？", "我不知道怎麼跟孩子說爸爸（或媽媽）不在身邊的事。", "我真的很孤單，可以怎麼向教會或弟兄姊妹開口求助？", "請幫我寫一段五分鐘內能禱告完的短禱告。"], "fu": [["😮‍💨", "疲累", "請針對你剛才的回答，說明怎麼把它用在一個人撐家的疲累與內疚，並給我一個這個星期做得到的具體小步驟。"], ["👧", "孩子", "請針對你剛才的回答，說明怎麼把它用在陪伴孩子與教養，並給我一個這個星期做得到的具體小步驟。"], ["💰", "經濟", "請針對你剛才的回答，說明怎麼把它用在經濟與時間的壓力，並給我一個這個星期做得到的具體小步驟。"], ["🤝", "求助", "請針對你剛才的回答，說明怎麼把它用在向弟兄姊妹或教會開口求助，並給我一個這個星期做得到的具體小步驟。"], ["🌤️", "盼望", "請針對你剛才的回答，說明怎麼把它用在在這個階段看見神的同在與盼望，並給我一個這個星期做得到的具體小步驟。"], ["🙏", "禱告", "請把你剛才說的重點，寫成一段我在忙碌中五分鐘內就能禱告完的短禱告。"]]}, "single": {"sys": " 回答對象：單身的人（可能未婚、離婚、喪偶，或正在等候；不要預設他想結婚或不想結婚）。請不要把單身說成缺憾、「預備期」或「還沒到的人生」，也不要用催婚的口氣。談在基督裡的身分已經完整、被愛；談孤單時怎麼與神、與朋友、與團契連結；談時間、金錢與恩賜的運用與使命；談等待中的信靠；談感情與婚姻的智慧，以及在情感與身體上的聖潔，態度要尊重、不論斷。口吻真誠、平等、輕鬆。結尾給一個這個星期可以做的小步驟。若他提到孤單到想傷害自己，要溫柔回應並鼓勵他立刻聯絡信任的人或專業協助。", "write": "\n讀者是單身朋友：口吻真誠、平等、輕鬆，不催婚、不把單身說成缺憾；不要用表情符號。", "style": "風格：給單身的朋友，題目貼近孤單、身分、等待、友誼與使命；口氣真誠平等，不催婚。", "res": ["沒關係，慢慢來，再讀一遍就會更清楚。", "不錯喔！你把這一課的重點抓到了。", "太棒了！你很認真，神的話正在你裡面扎根。"], "q": ["單身的我，這段內容想對我說什麼？", "我覺得孤單，這段內容能給我什麼？", "在基督裡，我的身分和價值是什麼？", "等待的時候，要怎麼信靠神？", "感情的事，聖經給我什麼智慧？", "單身的時間和精力，可以怎麼為神所用？", "怎樣在教會和朋友中建立好的關係？", "請幫我寫一段單身者的簡短禱告。"], "fu": [["🫶", "孤單", "請針對你剛才的回答，說明怎麼把它用在孤單時怎麼與神、與朋友連結，並給我一個這個星期做得到的具體小步驟。"], ["💝", "身分", "請針對你剛才的回答，說明怎麼把它用在我在基督裡的身分與價值，並給我一個這個星期做得到的具體小步驟。"], ["⏳", "等待", "請針對你剛才的回答，說明怎麼把它用在等待中的信靠，並給我一個這個星期做得到的具體小步驟。"], ["💞", "感情", "請針對你剛才的回答，說明怎麼把它用在感情與交友的智慧，並給我一個這個星期做得到的具體小步驟。"], ["🎯", "使命", "請針對你剛才的回答，說明怎麼把它用在把時間與恩賜用在神的使命上，並給我一個這個星期做得到的具體小步驟。"], ["🙏", "禱告", "請把你剛才說的重點，寫成一段簡短、真誠的禱告，讓我可以拿來禱告。"]]}, "parent": {"sys": " 回答對象：正在養育孩子的父母（孩子可能從嬰幼兒到成年）。請站在父母的位置：他們常常疲累、擔心孩子、也常常內疚。口吻溫暖、貼近生活、不評斷；承認每個孩子與每個家庭都不同。談陪伴與榜樣、管教與恩典的平衡、親子溝通（怎麼聽、怎麼說）、為孩子禱告、夫妻同心、面對自己的軟弱與失敗；可用日常場景當比喻（吃飯、功課、手機、睡前）。結尾給一個這個星期可以做的具體小步驟（一句話、一個擁抱、一段睡前禱告）。若提到孩子遭受傷害、家庭暴力或孩子有自傷的念頭，要溫柔回應並鼓勵立刻尋求專業協助與信任的人。", "write": "\n讀者是正在養育孩子的父母：口吻溫暖、貼近生活、不評斷；不要用表情符號。", "style": "風格：給養育孩子的父母，題目貼近親子溝通、管教、陪伴與為孩子禱告；口氣溫暖，解析一句話帶出提醒。", "res": ["沒關係，慢慢來，有空再讀一遍就會更清楚。", "不錯！這一課的重點您已經抓到了。", "太棒了！神的話正在您的家裡扎根。"], "q": ["這段內容對養育孩子的我有什麼提醒？", "孩子不聽話、情緒很大，我該怎麼回應？", "管教和恩典要怎麼拿捏？", "怎麼跟青春期的孩子好好說話？", "我常常對孩子發脾氣，事後很內疚怎麼辦？", "怎麼帶孩子認識神，而不只是去教會？", "夫妻在教養上意見不同，這段內容怎麼說？", "請幫我寫一段為孩子祝福的短禱告。"], "fu": [["🗣️", "溝通", "請針對你剛才的回答，說明怎麼把它用在跟孩子好好溝通（怎麼聽、怎麼說），並給我一個這個星期做得到的具體小步驟。"], ["⚖️", "管教", "請針對你剛才的回答，說明怎麼把它用在管教與恩典的平衡，並給我一個這個星期做得到的具體小步驟。"], ["😔", "內疚", "請針對你剛才的回答，說明怎麼把它用在對孩子發脾氣或覺得虧欠的內疚，並給我一個這個星期做得到的具體小步驟。"], ["💑", "夫妻", "請針對你剛才的回答，說明怎麼把它用在夫妻在教養上同心，並給我一個這個星期做得到的具體小步驟。"], ["📖", "信仰", "請針對你剛才的回答，說明怎麼把它用在帶孩子認識神、一起親近神，並給我一個這個星期做得到的具體小步驟。"], ["🙏", "禱告", "請把你剛才說的重點，寫成一段我可以為孩子祝福的短禱告。"]]}, "couple": {"sys": " 回答對象：夫妻（正在經營婚姻的丈夫與妻子，可能是新婚、有孩子的中年夫妻，或相伴多年的伴侶）。請站在夫妻同行的位置：口吻溫暖、真誠、不評斷，不偏袒任何一方；承認每段婚姻都有磨合、疲累與受傷的時候。談愛是決定與付出、彼此饒恕、傾聽與表達（怎麼說、怎麼聽）、尊重與同心、金錢與家務的分工、姻親與孩子的教養、一起禱告與一起讀經、在主裡成為一體；可用日常場景當比喻（飯桌、手牽手、吵完架之後、睡前）。結尾給一個這個星期兩個人就能一起做的具體小步驟（一句感謝的話、一段兩人的禱告、一次不看手機的散步）。不要教導妻子順服或丈夫掌權的單方面要求，要強調彼此相愛、彼此順服。若提到家庭暴力、外遇、對方的威脅或有自傷念頭，要溫柔回應，把安全放在第一位，並鼓勵立刻尋求專業協助與信任的人，不要勸人一味忍耐。", "write": "\n讀者是夫妻：口吻溫暖、貼近生活、不評斷、不偏袒任何一方；不要用表情符號。", "style": "風格：給夫妻，題目貼近溝通、饒恕、同心、共同禱告與彼此相愛；口氣溫暖，解析一句話帶出提醒。", "res": ["沒關係，慢慢來，找個晚上兩個人再一起讀一遍。", "不錯！這一課的重點你們抓到了。", "太棒了！神的話正在你們的婚姻裡扎根。"], "q": ["這段內容對我們夫妻有什麼提醒？", "我們吵架之後總是冷戰，怎麼先伸出手？", "怎麼把心裡的話好好說給另一半聽？", "對方做錯事傷了我，我真的要饒恕嗎？", "我們為金錢與家務的事常常意見不同，怎麼辦？", "夫妻怎麼一起禱告、一起親近神？", "忙碌的日子裡，夫妻感情變淡了，怎麼重新連結？", "請幫我寫一段為我們婚姻祝福的短禱告。"], "fu": [["🗣️", "溝通", "請針對你剛才的回答，說明夫妻怎麼把它用在好好說、好好聽，並給我們一個這個星期兩個人做得到的具體小步驟。"], ["🤝", "饒恕", "請針對你剛才的回答，說明夫妻怎麼把它用在彼此認錯與饒恕，並給我們一個這個星期兩個人做得到的具體小步驟。"], ["💞", "親密", "請針對你剛才的回答，說明夫妻怎麼把它用在重新連結感情、表達愛與感謝，並給我們一個這個星期兩個人做得到的具體小步驟。"], ["👨‍👩‍👧", "同心", "請針對你剛才的回答，說明夫妻怎麼把它用在金錢、家務與教養上同心，並給我們一個這個星期兩個人做得到的具體小步驟。"], ["📖", "同讀", "請針對你剛才的回答，說明夫妻怎麼一起讀經、一起親近神，並給我們一個這個星期兩個人做得到的具體小步驟。"], ["🙏", "禱告", "請把你剛才說的重點，寫成一段夫妻可以一起禱告的短禱告。"]]}, "pastor": {"sys": " 回答對象：牧者與傳道同工（教會的牧師、傳道人、小組長與事奉的同工）。請站在同工的位置：他們常常肩負許多人的重擔，自己也會疲累、孤單、被誤解或灰心。口吻尊重、平等、真誠，像同工之間彼此扶持，不說教、不居高臨下。可以有適度的深度：點出經文脈絡、原文語境與關鍵字詞的意思，談牧養羊群與生命建造、預備講道與教導、帶領小組與門徒訓練、團隊同心與衝突、面對批評與孤單、屬靈爭戰、自己的靈命與家庭，以及不倦怠的安息與依靠；也可提供講章或查經的切入點、段落與應用建議，但要提醒最後仍須自己在神面前領受。結尾給一個這個星期可以做的具體小步驟（一段安靜親近神的時間、一通關心的電話、一次向同工的坦誠分享）。若提到極度疲憊、憂鬱、想放棄或有自傷念頭，要溫柔回應，並鼓勵立刻尋求信任的同工、屬靈長輩與專業協助。", "write": "\n讀者是牧者與傳道同工：口吻尊重、平等、真誠，像同工彼此扶持；不要用表情符號。", "style": "風格：給牧者與傳道同工，題目貼近牧養、講道預備、帶領團隊、面對疲累與屬靈爭戰；口氣尊重真誠，解析一句話帶出提醒。", "res": ["沒關係，慢慢來，有空再讀一遍就會更清楚。", "不錯！這一課的重點您已經抓到了。", "太棒了！神的話先餵養了牧者，也必流向羊群。"], "q": ["這段內容對事奉中的我有什麼提醒？", "請幫我找這段內容的講道架構與切入點。", "事奉很累、快要倦怠了，這段內容怎麼安慰我？", "怎麼面對教會裡的批評與誤解？", "帶領團隊與同工同心，這段內容怎麼說？", "怎麼在忙碌的牧養中保守自己的靈命？", "怎麼牧養軟弱、受傷或離開的羊？", "請幫我寫一段為教會與同工代求的短禱告。"], "fu": [["📖", "講道", "請針對你剛才的回答，提供一個可用於講道或查經的架構（三個要點與一個應用），並提醒我自己先在神面前領受。"], ["🐑", "牧養", "請針對你剛才的回答，說明怎麼把它用在牧養羊群與關心個別的人，並給我一個這個星期做得到的具體小步驟。"], ["🤝", "團隊", "請針對你剛才的回答，說明怎麼把它用在帶領團隊、同工同心與處理衝突，並給我一個這個星期做得到的具體小步驟。"], ["🕊️", "安息", "請針對你剛才的回答，說明怎麼把它用在自己的疲累與靈命保守，並給我一個這個星期做得到的具體小步驟。"], ["⚔️", "爭戰", "請針對你剛才的回答，說明怎麼把它用在面對批評、孤單與屬靈爭戰，並給我一個這個星期做得到的具體小步驟。"], ["🙏", "代禱", "請把你剛才說的重點，寫成一段我可以為教會與同工代求的短禱告。"]]}}};
  const SITE = 'https://spch321-sudo.github.io/bible/';
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const q1 = (s, r) => (r || document).querySelector(s);
  const qa = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const say = m => { try { toast(m); } catch (e) {} };
  const keep = () => { try { save(); } catch (e) {} };
  const isSC = () => !EN && !!(S && S.set && S.set.sc);
  const sc = s => (isSC() && typeof toSC === 'function') ? toSC(String(s)) : String(s);
  const FELLOW = T('國度321空中團契', 'Kingdom 321 Online Fellowship');
  const BK = window.GX_BOOK || { zh: '創世記', en: 'Genesis', slug: 'gn' };
  const BOOK = T(BK.zh, BK.en);
  const NCH = () => { try { return (D && D.ch && D.ch.length) || 50; } catch (e) { return 50; } };
  const chLabel = n => { const l = (D && D.ch && D.ch[n - 1]) || null; return l && l.label ? l.label : T('第 ' + n + ' 課', 'Lesson ' + n); };
  const home = () => location.origin + location.pathname.replace(/index\.html$|en\.html$/, '') + (/en\.html$/.test(location.pathname) ? 'en.html' : '');

  /* ── 回答對象與長度 ─────────────────────────────────────────── */
  const AUD_KEYS = GXD.keys;
  const aud = () => (S.set && AUD_KEYS.indexOf(S.set.aud) >= 0) ? S.set.aud : 'adult';
  const alen = () => (S.set && ['brief', 'mid', 'full'].indexOf(S.set.alen) >= 0) ? S.set.alen : 'mid';
  const A = () => GXD.aud[aud()];
  let audOpen = false;

  function wordAsked() {
    try { const ms = SAGE321.msgs(); for (let i = ms.length - 1; i >= 0; i--) if (ms[i].role === 'user') return /請查考原文字義|请查考原文字义|study the original-language meaning/.test(ms[i].text); } catch (e) {}
    return false;
  }
  function sysExtra() {
    let s = '\n\n【回答對象】' + A().sys;
    if (EN) s = '\n\n[Audience]' + A().sys;
    s += '\n\n' + XZ2.sysTail();   /* 信仰背景＋讀者資料＋回答長度（五段）改由 XZ2 提供，只送一次 */
    s += EN ? ' PRINCIPLES: (1) Be honest. Never invent a verse, a quotation, a Hebrew/Greek meaning or a historical fact; if unsure, say "I am not sure" and point the reader to the text. Quote Scripture only from the passage supplied or verses you are certain of, and always give the reference (book chapter:verse). (2) Where Christians differ, say so briefly and fairly instead of presenting one view as the only one. (3) You are an AI companion, not a pastor, doctor or lawyer: for medical, legal, abuse or serious emotional matters, encourage the reader to talk to a trusted pastor, a professional or local emergency services. (4) If the reader mentions suicide, self-harm, abuse or immediate danger: respond first with calm care, do not lecture or quote verses at length, encourage them to contact local emergency services or a crisis line and a trusted person right now, and gently stay with them.' : (isSC() ? ' 原则：（1）诚实：绝不编造经文、引言、原文字义或历史；不确定就直说「我不确定」，并请读者回到经文。引用经文只用提供的经文或你确定的经文，并一定写出出处（书名 章:节）。（2）遇到基督徒之间有不同看法的议题，简短公平地说明，不把单一立场说成唯一答案。（3）你是 AI 陪伴，不是牧者、医生或律师；涉及医疗、法律、受虐或严重情绪的事，鼓励读者找信任的牧者、专业人员或当地紧急服务。（4）若读者提到自杀、自伤、受虐或立即的危险：先用平静关怀的语气回应，不说教、不长篇引经，鼓励他现在就联系当地紧急服务或求助热线，以及身边可信任的人，并温柔地陪着他。' : ' 原則：（1）誠實：絕不編造經文、引言、原文字義或歷史；不確定就直說「我不確定」，並請讀者回到經文。引用經文只用提供的經文或你確定的經文，並一定寫出出處（書名 章:節）。（2）遇到基督徒之間有不同看法的議題，簡短公平地說明，不把單一立場說成唯一答案。（3）你是 AI 陪伴，不是牧者、醫生或律師；涉及醫療、法律、受虐或嚴重情緒的事，鼓勵讀者找信任的牧者、專業人員或當地緊急服務。（4）若讀者提到自殺、自傷、受虐或立即的危險：先用平靜關懷的語氣回應，不說教、不長篇引經，鼓勵他現在就聯絡當地緊急服務或求助專線，以及身邊可信任的人，並溫柔地陪著他。');   /* v2.59 誠實與危機原則 */
    if (wordAsked()) s += EN ? ' WORD STUDY: when the reader asks about the original-language meaning of a word, phrase or sentence, answer in this order with short headings: (1) Original — the Hebrew/Greek word(s) behind it, transliteration and basic meaning; if the Chinese union-version wording covers several original words, say so and explain each; (2) Usage here — part of speech or root idea and how it works in this verse and context; (3) Elsewhere — one or two other Bible uses ONLY if you are certain, with references; (4) Application — through the 3-2-1 lens (self-emptying, letting Jesus be King, led by the Spirit) with one small step for today. Be honest: label anything you are not sure of as uncertain, never invent Strong numbers or meanings, and close with one line reminding the reader to verify with a reliable lexicon (Strong\'s, BDAG, HALOT). Keep it clear and not too long.' : (isSC() ? ' 原文字义：当读者问某个字、词或句的原文字义时，用简短小标题依序回答：①原文——背后的希伯来文／希腊文、拼音与基本字义；若和合本这个词对应不只一个原文字，请分别说明；②在这节的用法——词性或字根意思，以及放在这节上下文怎么理解；③圣经其他用法——只写你确定的一两处，附出处；④应用——从321角度（无己、让耶稣作王、被圣灵引导）带出，并给一个今天可以操练的小步骤。务必诚实：不确定的就标明不确定，绝不编造 Strong 编号或字义；最后用一行提醒读者对照可靠的原文工具书（如 Strong\'s、BDAG、HALOT）。篇幅精练。' : ' 原文字義：當讀者問某個字、詞或句的原文字義時，用簡短小標題依序回答：①原文——背後的希伯來文／希臘文、拼音與基本字義；若和合本這個詞對應不只一個原文字，請分別說明；②在這節的用法——詞性或字根意思，以及放在這節上下文怎麼理解；③聖經其他用法——只寫你確定的一兩處，附出處；④應用——從321角度（無己、讓耶穌作王、被聖靈引導）帶出，並給一個今天可以操練的小步驟。務必誠實：不確定的就標明不確定，絕不編造 Strong 編號或字義；最後用一行提醒讀者對照可靠的原文工具書（如 Strong\'s、BDAG、HALOT）。篇幅精練。');   /* v2.64 原文字義：只在讀者問字義時才適用 */
    if (isSC()) s += '\n\n【語言】這位讀者使用简体中文，請一律用简体中文回答。';
    return s;
  }
  function followups() { return A().fu || []; }
  function quicks(base) {
    let b = [];
    try { b = base() || []; } catch (e) { b = []; }
    if (aud() === 'adult') return b;
    return b.slice(0, 2).concat((A().q || []).slice(0, 5));
  }
  function audBtns(where) {
    const nm = GXD.names;
    return AUD_KEYS.map(k => `<button class="gxa${aud() === k ? ' on' : ''}" onclick="GX.setAud('${k}','${where}')">${GXD.icon[k]} ${esc(nm[k])}</button>`).join('');
  }
  function ctl() { return XZ2.controlsHtml({ qs: true }); }
  function togAud() { XZ2.act('audtog'); }
  function setAud(k, where) {
    if (AUD_KEYS.indexOf(k) < 0) return;
    S.set.aud = k; keep();
    say(T('回答對象：', 'Answering for: ') + GXD.names[k]);
    try { XZ2.refresh(); } catch (e) {}
    if (where === 'xz') SAGE321.draw(true);
    else if (where === 'pl') plPaint();
    else render();
  }
  function setLen(k) { XZ2.act('len', k); }
  function settingsCard() {
    return `<div class="card" id="gxset"><p class="eyebrow">${esc(T('小智設定', 'Xiaozhi settings'))}</p>${XZ2.settingsHtml()}
      <p class="xs muted" style="margin:8px 0 0">${esc(T('讀經樂出題、小智寫祝福也會跟著回答對象調整口氣。', 'Bible Fun questions and Xiaozhi’s blessings follow this setting too.'))}</p></div>`;
  }
  function setLenMe(k) { XZ2.act('sLen', k); }

  /* ===== XZ2（-xz1103）：小智最新功能共用套件——回答長度五段、讀者資料、慕道友信仰背景、設定頁區塊、滿版小智頁摘要列 ===== */
  XZ2.init({
    app: (window.GX_BOOK && GX_BOOK.slug) || 'gxa', pfx: 'gxa-' + ((window.GX_BOOK && GX_BOOK.slug) || 'app') + '-', ownAud: true,
    lang: function () { return LANG; },
    aud: { get: function () { try { return S.set.aud; } catch (e) { return 'adult'; } }, set: function (k) { try { S.set.aud = k; keep(); } catch (e) {} } },
    legacyLen: function () { try { return S.set.alen; } catch (e) { return ''; } },
    ctxWord: '課文脈絡', ctxWordZs: '课文脉络', ctxWordEn: 'the lesson context',
    qsLabel: ['對象範例題', '对象范例题', 'Examples for me'],
    reAnswer: function (m) { try { if (SAGE321.reask()) { say(m); return true; } } catch (e) {} return false; },
    onAsk: function (q) { try { SAGE321.pick(q); } catch (e) {} },
    toast: function (m) { try { say(m); } catch (e) {} },
    readCtx: function () { try { const n = (S && S.last) || 0; return n && D.ch.length ? [T('目前讀到：', 'Currently reading: ') + chLabel(n)] : []; } catch (e) { return []; } }
  });
  try { XZ2.watchScroll('#gxxzb'); } catch (e) {}
  /* App 自己的「設定／我的」頁面：GXA_CFG.xzSet = { sel:容器選擇器, need:出現這個子元素才掛, before:掛在這個子元素前面（省略＝放最後） } */
  try {
    const hs = C().xzSet;
    if (hs && hs.sel) {
      let tm = 0;
      const place = () => {
        try {
          document.querySelectorAll(hs.sel).forEach(c => {
            if (c.querySelector('[data-xz2host]')) return;
            if (hs.need && !c.querySelector(hs.need)) return;
            const d = document.createElement('div'); d.setAttribute('data-xz2host', ''); d.className = 'xz2host';
            d.style.cssText = 'margin:14px 0;padding:12px 0 4px;border-top:1px solid rgba(128,128,128,.25);clear:both;text-align:left';
            d.innerHTML = '<div style="font-weight:700;margin:0 0 8px;font-size:15px">' + esc(T('小智設定', 'Xiaozhi settings')) + '</div>' + XZ2.settingsHtml();
            const a = hs.before && c.querySelector(hs.before);
            if (a && a.parentNode) a.parentNode.insertBefore(d, a); else c.appendChild(d);
          });
        } catch (e) {}
      };
      const start = () => { try { new MutationObserver(() => { clearTimeout(tm); tm = setTimeout(place, 120); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {} place(); };
      if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
    }
  } catch (e) {}

  /* ── 共用：一次性呼叫小智（重試、逾時） ───────────────────────── */
  async function aiRaw(sys, ask, ms, maxT) {
    let out = '', why = '';
    const waits = [900, 1800];
    for (let a = 0; a <= waits.length; a++) {
      const ac = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      const tm = ac ? setTimeout(() => ac.abort(), ms || 60000) : 0;
      try {
        const r = await fetch(SVC.xz, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(SVC.sendModel ? { model: SVC.model, max_tokens: SVC.maxTokens || 1000, system: sys, messages: [{ role: 'user', content: ask }] } : { system: sys, messages: [{ role: 'user', content: ask }] }),
          signal: ac ? ac.signal : undefined
        });
        if (!r.ok) throw new Error('http ' + r.status);
        const d = await r.json().catch(() => null);
        if (d && d.content && d.content.length) out = d.content.map(b => b.text || '').join('');
        else if (d) out = d.reply || d.text || d.message || '';
        if (!out) why = T('回覆是空的', 'empty reply');
        clearTimeout(tm);
        break;
      } catch (e) {
        clearTimeout(tm);
        why = (e && e.name === 'AbortError') ? T('逾時', 'timeout') : ((e && e.message) ? String(e.message) : 'network');
        if (a === waits.length) break;
        await new Promise(rs => setTimeout(rs, waits[a]));
      }
    }
    return { out: String(out || '').trim(), why };
  }

  /* ── 讀經樂 ─────────────────────────────────────────────────── */
  const PL_QN = 5, PL_RN = 4;
  let PL = null, plSrc = 'cur';
  function pdata() {
    if (!S.gx || typeof S.gx !== 'object') S.gx = {};
    const g = S.gx;
    if (!g.play || typeof g.play !== 'object') g.play = { right: 0, total: 0, best: {} };
    if (!g.play.best || typeof g.play.best !== 'object') g.play.best = {};
    if (!Array.isArray(g.wrong)) g.wrong = [];
    return g;
  }
  const curCh = () => Math.min(NCH(), Math.max(1, (R && R.ch) || S.last || 1));
  function plResolveSrc() {
    if (plSrc === 'rand') {
      const ks = Object.keys(S.steps || {}).map(Number).filter(n => n >= 1 && n <= NCH());
      const pool = ks.length ? ks : Array.from({ length: NCH() }, (_, i) => i + 1);
      return { ch: pool[Math.floor(Math.random() * pool.length)] };
    }
    return { ch: curCh() };
  }
  function chapPlain(n) {
    const parts = (D.txt[n] || []).map((t, i) => '[' + (i + 1) + ']' + t);
    const max = EN ? 6500 : 2600, glue = EN ? ' ' : '';
    let total = 0; parts.forEach(p => total += p.length);
    if (total <= max) return parts.join(glue);
    const s0 = Math.floor(Math.random() * parts.length), out = []; let len = 0;
    for (let j = s0; j < parts.length && len < max; j++) { out.push(parts[j]); len += parts[j].length; }
    for (let j = s0 - 1; j >= 0 && len < max; j--) { out.unshift(parts[j]); len += parts[j].length; }
    return out.join(glue);
  }
  function plSysQuiz(n, k) {
    const st = A().style;
    if (EN) return `You are a Bible teacher writing a quiz for a Christian discipleship app. The goal is to help people remember the KEY POINTS of this lesson.
Method: first decide the ${n} most important points in the passage (the core message, a key person or event, what God does or promises, one command or lesson, one life application) and write one question for each point.
Every question must:
1. Be clear and instantly understandable: one complete sentence under 25 words; name the person, place or event directly.
2. Ask about one thing only, with no tricks; never use "which of these is NOT", "all of the above" or "none of the above".
3. Have exactly one correct answer found directly in the passage; wrong options must look reasonable yet clearly contradict the passage.
4. Have short options (under 8 words), similar in length and form.
5. Avoid obscure numbers, names or guessing games; order from easier to harder.
6. Have a one-sentence explanation (under 25 words): the answer first, then why.
Write ${n} questions, each with exactly ${k} options. "v" is the verse number(s) holding the answer, e.g. "3" or "3-4". ${st} Write in English. Reply with JSON ONLY — no explanation, no markdown fence: {"q":[{"q":"question","o":["option","option"],"a":index of the correct option starting at 0,"e":"one-sentence explanation","v":"3"}]}`;
    return `你是聖經教師，替讀經App出測驗題，目標是幫人記住這一課的「重點」。
做法：先在心裡找出這段內容最重要的 ${n} 個重點（核心信息、關鍵人物或事件、神的作為或應許、一條命令或教訓、一個生命應用），每個重點出一題。
每一題都要做到：
1. 清楚明確、一看就懂：用完整的一句話，30字以內；直接寫出人名、地名、事件。
2. 一題只問一件事，不繞彎、不玩文字陷阱；不要用「下列何者不是」「以上皆是」「以上皆非」。
3. 只有一個正確答案，必須能直接從這段內容找到；錯誤選項要像合理的選擇，但和經文明顯不符。
4. 選項簡短（12字以內）、長度相近、句型一致。
5. 不考冷僻的數字、人名或要靠猜的細節；由易到難。
6. 解析用一句話（30字以內）：先說答案，再說為什麼。
共 ${n} 題，每題剛好 ${k} 個選項。v 是答案所在的節號，例如 "3" 或 "3-4"。${st}請用繁體中文。只回傳 JSON，不要任何說明、不要 markdown 圍欄：{"q":[{"q":"題目","o":["選項","選項"],"a":正確選項的序號（從0開始）,"e":"一句解析","v":"3"}]}`;
  }
  function plSysRiddle(n) {
    const st = A().style;
    if (EN) return `You are a Bible teacher designing riddles for a Christian discipleship app, to help people remember the key people, places, objects or events of this lesson. From the passage the user gives you, write ${n} riddles.
Every riddle must:
1. Have an answer that is a KEY point of the lesson (a central person, key place, important object or main event), given as the most common short name (1–4 words).
2. Start with "t" (type) — exactly one of "Person", "Place", "Object", "Event".
3. Give THREE hints, each one simple, clear sentence (under 18 words) of concrete fact: hint 1 true but not obvious (must NOT contain the answer); hint 2 narrows it; hint 3 nearly gives it away without saying it.
4. Use only facts really in the passage; together the hints must point to one answer only.
5. "alt" lists other common ways to say the answer (array, may be empty); "v" is the related verse number; "e" is one sentence (under 25 words) shown after it is guessed.
${st} Write in English. Reply with JSON ONLY — no explanation, no markdown fence: {"r":[{"t":"Person","h":["hint 1","hint 2","hint 3"],"a":"answer","alt":["other name"],"v":"3","e":"insight"}]}`;
    return `你是聖經教師，替讀經App設計「猜謎」，幫人記住這一課的重點人物、地點、物件或事件。依使用者提供的內容出 ${n} 個謎題。
每個謎題都要做到：
1. 答案必須是這一課的「重點」：核心人物、關鍵地點、重要物件或主要事件；用最常見的簡短名稱（2到6個字）。
2. 先給 t（類型），只能是「人物」「地點」「物件」「事件」其中一個。
3. 三個提示都用簡單明白的一句話（25字以內），講具體的事實：提示1真實但不太明顯（絕不可含有答案）；提示2再縮小範圍；提示3幾乎能讓人猜到，但不直接說出答案。
4. 每個提示都必須是這段內容裡真有的事；合起來只能指向唯一的答案。
5. alt 是答案的其他常見說法（陣列，可為空）；v 是相關的節號；e 是猜出來之後顯示的一句話亮點（30字以內）。
${st}請用繁體中文。只回傳 JSON，不要任何說明、不要 markdown 圍欄：{"r":[{"t":"人物","h":["提示1","提示2","提示3"],"a":"答案","alt":["別名"],"v":"3","e":"亮點"}]}`;
  }
  function plParse(text) {
    let s = String(text || '').replace(/```(?:json)?/gi, '').trim();
    const st = s.indexOf('{'); if (st < 0) return null;
    s = s.slice(st);
    try { return JSON.parse(s.slice(0, s.lastIndexOf('}') + 1)); } catch (e) {}
    const m = s.match(/"(q|r)"\s*:\s*\[/); if (!m) return null;
    let i = m.index + m[0].length; const items = [];
    while (i < s.length) {
      while (i < s.length && s[i] !== '{') i++;
      if (i >= s.length) break;
      let depth = 0, inStr = false, es = false, j = i;
      for (; j < s.length; j++) {
        const c = s[j];
        if (inStr) { if (es) es = false; else if (c === '\\') es = true; else if (c === '"') inStr = false; }
        else if (c === '"') inStr = true;
        else if (c === '{') depth++;
        else if (c === '}') { depth--; if (depth === 0) break; }
      }
      if (depth !== 0) break;
      try { items.push(JSON.parse(s.slice(i, j + 1))); } catch (e) {}
      i = j + 1;
    }
    const o = {}; if (items.length) o[m[1]] = items;
    return items.length ? o : null;
  }
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  function vOf(v) {
    const m = String(v == null ? '' : v).match(/(\d+)(?:\D+(\d+))?/);
    return m ? { v: +m[1], v2: m[2] ? +m[2] : 0 } : { v: 0, v2: 0 };
  }
  function normQuiz(list, src, k) {
    const out = [];
    (list || []).forEach(x => {
      if (!x || typeof x.q !== 'string' || !Array.isArray(x.o)) return;
      let o = x.o.map(z => String(z).trim()).filter(Boolean);
      const as = String(x.a).trim();
      const ai = /^[A-Da-d]$/.test(as) ? 'abcd'.indexOf(as.toLowerCase()) : (as === '' ? NaN : +x.a);
      const right = Number.isInteger(ai) ? o[ai] : null;
      if (!right) return;
      o = o.filter((z, i) => o.indexOf(z) === i);
      if (o.length < 2) return;
      if (o.length > k) { const kp = shuffle(o.filter(z => z !== right)); o = [right].concat(kp.slice(0, k - 1)); }
      shuffle(o);
      const vv = vOf(x.v);
      out.push({ q: String(x.q).trim(), o, a: o.indexOf(right), e: String(x.e || '').trim(), ch: src.ch, v: vv.v, v2: vv.v2 });
    });
    return out;
  }
  function normRiddle(list, src) {
    const out = [];
    (list || []).forEach(x => {
      if (!x || typeof x.a !== 'string' || !x.a.trim() || !Array.isArray(x.h)) return;
      const a = x.a.trim();
      const alt = (Array.isArray(x.alt) ? x.alt : []).map(z => String(z).trim()).filter(Boolean);
      const names = [a].concat(alt).filter(z => z.length >= 2).sort((p, q) => q.length - p.length);
      let h = x.h.map(z => String(z).trim()).filter(Boolean).slice(0, 3);
      if (!h.length) return;
      h = h.map((z, i) => {
        if (i >= h.length - 1 && h.length > 1) return z;
        names.forEach(nm => { z = z.split(nm).join('○'.repeat(Math.min(nm.length, 4))); });
        return z;
      });
      const vv = vOf(x.v);
      out.push({ h, a, alt, t: String(x.t || '').trim().slice(0, 12), e: String(x.e || '').trim(), ch: src.ch, v: vv.v, v2: vv.v2 });
    });
    return out;
  }
  const norm = s => String(s || '').toLowerCase().replace(/^the\s+/, '').replace(/[\s，。！？、：；,.!?'"“”‘’「」『』（）()·．\-]/g, '');
  function match(guess, it) {
    let g = norm(guess); if (!g) return false;
    const cands = [it.a].concat(it.alt || []);
    if (isSC()) cands.push.apply(cands, cands.map(z => toSC(z)));
    return cands.some(z => {
      const n = norm(z); if (!n) return false;
      return g === n || (g.length >= 2 && n.indexOf(g) >= 0) || (n.length >= 2 && g.indexOf(n) >= 0);
    });
  }
  const refOf = it => it.v ? T(`${BK.zh} ${it.ch}:${it.v}${it.v2 ? '-' + it.v2 : ''}`, `${BK.en} ${it.ch}:${it.v}${it.v2 ? '–' + it.v2 : ''}`) : '';
  const wid = it => it.ch + '|' + it.q.slice(0, 40);
  function addWrong(it) {
    const g = pdata(), id = wid(it);
    g.wrong = g.wrong.filter(w => w.id !== id);
    g.wrong.push({ id, ch: it.ch, v: it.v, v2: it.v2, q: it.q, o: it.o, a: it.a, e: it.e, ts: Date.now() });
    if (g.wrong.length > 100) g.wrong.splice(0, g.wrong.length - 100);
  }
  function delWrong(it) { const g = pdata(), id = wid(it); g.wrong = g.wrong.filter(w => w.id !== id); }

  async function plStart(mode, review) {
    if (PL && PL.stage === 'loading') return;
    const g = pdata();
    if (review) {
      const pool = g.wrong.slice();
      if (!pool.length) { say(T('錯題本是空的，太棒了！', 'No missed questions — great!')); return; }
      const items = shuffle(pool).slice(0, PL_QN).map(w => Object.assign({}, w));
      PL = { mode: 'quiz', review: true, src: { ch: items[0].ch }, items, i: 0, right: 0, score: 0, picked: null, stage: 'q' };
      plPaint(); return;
    }
    const src = plResolveSrc();
    PL = { mode, review: false, src, items: [], i: 0, right: 0, score: 0, picked: null, hints: 1, revealed: false, auto: false, judged: false, stage: 'loading' };
    plPaint();
    const gen = PL;
    try {
      const text = chapPlain(src.ch);
      const k = aud() === 'kid' ? 3 : 4;
      const sys = mode === 'quiz' ? plSysQuiz(PL_QN, k) : plSysRiddle(PL_RN);
      const ask = T('課程：' + chLabel(src.ch) + '\n\n', 'Lesson: ' + chLabel(src.ch) + '\n\n') + text;
      const r = await aiRaw(sys, ask, 75000, 2400);
      if (PL !== gen) return;
      const data = plParse(r.out);
      const items = mode === 'quiz' ? normQuiz(data && data.q, src, k) : normRiddle(data && data.r, src);
      if (!items.length) throw new Error(r.why || T('小智這次沒有出成題目', 'no questions this time'));
      PL.items = items; PL.stage = 'q';
    } catch (e) {
      if (PL !== gen) return;
      PL.stage = 'err'; PL.why = (e && e.message) ? String(e.message) : 'error';
    }
    if (PL === gen) plPaint();
  }
  function afterAnswer(ok, it) {
    const g = pdata();
    g.play.total++; if (ok) g.play.right++;
    if (PL.mode === 'quiz') { if (ok) { if (PL.review) delWrong(it); } else addWrong(it); }
    keep();
  }
  function plFinish() {
    PL.stage = 'end';
    const g = pdata(), key = PL.mode, n = PL.items.length, pct = n ? Math.round(PL.right / n * 100) : 0;
    if (!PL.review && (g.play.best[key] || 0) < pct) { PL.newBest = true; g.play.best[key] = pct; keep(); }
  }
  const top = () => { try { window.scrollTo(0, 0); } catch (e) {} };
  function plPaint() {
    const body = q1('#plBody'); if (!body) return;
    if (!PL) { plHome(body); return; }
    const mode = PL.mode, n = PL.items.length || (mode === 'quiz' ? PL_QN : PL_RN);
    const refTxt = chLabel(PL.src.ch);
    if (PL.stage === 'loading') {
      body.innerHTML = `<div class="pl-load"><div class="spin"></div>${esc(T('小智正在讀「' + refTxt + '」，幫你出題…', 'Xiaozhi is reading ' + refTxt + ' and writing your questions…'))}</div>`;
      return;
    }
    if (PL.stage === 'err') {
      body.innerHTML = `<div class="card"><h3 style="margin:0 0 6px">${esc(T('出題沒成功', 'Could not make questions'))}</h3>
        <div class="sm muted">${esc(PL.why || '')}</div>
        <div class="pl-row"><button class="btn pri" id="plRetry">${esc(T('再試一次', 'Try again'))}</button>
        <button class="btn" id="plHomeBtn">${esc(T('回讀經樂首頁', 'Back'))}</button></div></div>`;
      q1('#plRetry', body).onclick = () => { const m = PL.mode; PL = null; plStart(m); };
      q1('#plHomeBtn', body).onclick = () => { PL = null; plPaint(); };
      return;
    }
    const g = pdata();
    if (PL.stage === 'end') {
      const pct = Math.round(PL.right / n * 100), tier = pct >= 90 ? 2 : (pct >= 60 ? 1 : 0);
      const wl = g.wrong.length;
      body.innerHTML = `<div class="card"><div class="pl-score">
          <div class="pl-stars">${'⭐'.repeat(tier + 1)}</div>
          <div class="n">${PL.right} / ${n}</div>
          <div class="sm muted">${esc(refTxt)}${PL.mode === 'riddle' ? esc(T(`　得分 ${PL.score} / ${n * 3}`, `  Points ${PL.score} / ${n * 3}`)) : ''}</div>
          ${PL.newBest ? `<div class="pill on" style="margin-top:8px;display:inline-block">🏆 ${esc(T('新紀錄！', 'New best!'))}</div>` : ''}
        </div>
        <div style="text-align:center;margin:10px 0 4px;line-height:1.8">${esc(A().res[tier])}</div>
        <div class="pl-row">
          <button class="btn pri" id="plAgain">${esc(PL.review ? T('再複習一輪', 'Review more') : T('再來一局（新題目）', 'Play again (new questions)'))}</button>
          <button class="btn" id="plRead">📖 ${esc(T('回到課程', 'Back to the text'))}</button>
          <button class="btn" id="plShare">↗ ${esc(T('分享成績', 'Share score'))}</button>
          ${wl && !PL.review ? `<button class="btn" id="plRev">🔁 ${esc(T(`複習錯題（${wl}）`, `Review missed (${wl})`))}</button>` : ''}
          <button class="btn" id="plHomeBtn">🎯 ${esc(T('讀經樂首頁', 'Bible Fun home'))}</button>
        </div></div>`;
      q1('#plAgain', body).onclick = () => { const m = PL.mode, rv = PL.review; PL = null; plStart(m, rv); };
      q1('#plRead', body).onclick = () => { const c = PL.src.ch; PL = null; go('text', c); };
      q1('#plShare', body).onclick = plShare;
      const rv = q1('#plRev', body); if (rv) rv.onclick = () => { PL = null; plStart('quiz', true); };
      q1('#plHomeBtn', body).onclick = () => { PL = null; plPaint(); };
      return;
    }
    const it = PL.items[PL.i];
    const head = `<div class="pl-meta"><span>${mode === 'quiz' ? '📝 ' + esc(T('讀經測驗', 'Quiz')) : '🧩 ' + esc(T('聖經猜謎', 'Riddles'))}${PL.review ? ' · ' + esc(T('錯題複習', 'Review')) : ''}　${esc(refTxt)}</span><span>${PL.i + 1} / ${n}</span></div>
      <div class="pl-bar"><i style="width:${Math.round((PL.i + (PL.picked !== null || PL.revealed ? 1 : 0)) / n * 100)}%"></i></div>`;
    if (mode === 'quiz') {
      const done = PL.picked !== null;
      body.innerHTML = head + `<div class="pl-q">${esc(it.q)}</div>`
        + it.o.map((o, i) => {
          const cls = done ? (i === it.a ? 'ok' : (i === PL.picked ? 'bad' : '')) : '';
          const mark = done ? (i === it.a ? '✓ ' : (i === PL.picked ? '✗ ' : '')) : '';
          return `<button class="pl-opt ${cls}" data-i="${i}" ${done ? 'disabled' : ''}>${mark}${esc(o)}</button>`;
        }).join('')
        + (done ? `<div class="pl-expl"><b>${PL.picked === it.a ? esc(T('答對了！', 'Correct!')) : esc(T('正確答案是「', 'The answer is “') + it.o[it.a] + T('」', '”'))}</b>
            ${it.e ? '<br>' + esc(it.e) : ''}${refOf(it) ? `<br><span class="muted">📖 ${esc(refOf(it))}</span>` : ''}</div>
            <button class="btn pri" style="width:100%" id="plNext">${esc(PL.i + 1 >= n ? T('看成績', 'See my score') : T('下一題', 'Next'))}</button>` : '')
        + `<p class="xs muted" style="margin-top:14px">${esc(T('題目由小智根據經文出題，若有疑問請以聖經為準。', 'Questions are written by Xiaozhi from the text — when in doubt, trust the Bible.'))}</p>`;
      qa('.pl-opt', body).forEach(bt => bt.onclick = () => {
        if (PL.picked !== null) return;
        const i = +bt.dataset.i; PL.picked = i;
        const ok = i === it.a; if (ok) { PL.right++; PL.score++; }
        afterAnswer(ok, it); plPaint();
      });
      const nx = q1('#plNext', body);
      if (nx) nx.onclick = () => { PL.picked = null; PL.i++; if (PL.i >= n) plFinish(); plPaint(); top(); };
      return;
    }
    const shown = PL.hints, canMore = shown < it.h.length, pts = Math.max(1, 4 - shown);
    let html = head + `<p class="sm muted" style="margin:0 0 8px">${it.t ? esc(T('這一題的答案是一個「' + it.t + '」', 'The answer is a ' + it.t.toLowerCase())) : esc(T('猜猜看，答案是這一課裡的什麼？', 'Guess: what is it, from this lesson?'))}</p>`
      + it.h.slice(0, shown).map((h, i) => `<div class="pl-hint"><b>💡${i + 1}</b><span>${esc(h)}</span></div>`).join('');
    if (!PL.revealed) {
      html += `<div class="pl-guess"><input id="plIn" placeholder="${esc(T('輸入你的答案…', 'Type your answer…'))}" autocomplete="off"><button class="btn pri" id="plGo">${esc(T('猜', 'Guess'))}</button></div>
        <div class="pl-row">${canMore ? `<button class="btn" id="plMore">💡 ${esc(T('再給一個提示', 'Another hint'))}</button>` : ''}
        <button class="btn" id="plShow">👀 ${esc(T('揭曉答案', 'Show answer'))}</button></div>
        <p class="xs muted" style="margin-top:8px">${esc(T(`現在答對可得 ${pts} 分（提示越少分越高）`, `Worth ${pts} point${pts > 1 ? 's' : ''} now — fewer hints, more points`))}</p>`;
    } else {
      html += `<div class="pl-ans">${esc(it.a)}</div>
        <div class="pl-expl">${it.e ? esc(it.e) : ''}${refOf(it) ? `${it.e ? '<br>' : ''}<span class="muted">📖 ${esc(refOf(it))}</span>` : ''}</div>`;
      if (!PL.auto && !PL.judged) {
        html += `<p class="sm muted" style="text-align:center;margin:0 0 6px">${esc(T('你心裡猜到了嗎？', 'Did you have it in mind?'))}</p>
          <div class="pl-row"><button class="btn pri" id="plYes">🙋 ${esc(T(`猜到了（+${pts}）`, `Yes (+${pts})`))}</button>
          <button class="btn" id="plNo">😅 ${esc(T('差一點', 'Not quite'))}</button></div>`;
      } else {
        html += `<button class="btn pri" style="width:100%" id="plNext">${esc(PL.i + 1 >= n ? T('看成績', 'See my score') : T('下一題', 'Next'))}</button>`;
      }
    }
    body.innerHTML = html;
    const inp = q1('#plIn', body);
    const award = auto => { PL.auto = auto; PL.judged = true; PL.right++; PL.score += Math.max(1, 4 - PL.hints); PL.revealed = true; afterAnswer(true, it); };
    if (inp) {
      const guess = () => {
        const gs = inp.value.trim(); if (!gs) return;
        if (match(gs, it)) { award(true); plPaint(); return; }
        inp.classList.remove('pl-shake'); void inp.offsetWidth; inp.classList.add('pl-shake');
        if (canMore) { PL.hints++; say(T('不是喔，再給你一個提示～', 'Not quite — here’s another hint')); plPaint(); }
        else say(T('不是喔，再想想！', 'Not quite — think again!'));
      };
      q1('#plGo', body).onclick = guess;
      inp.onkeydown = e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); guess(); } };
    }
    const mo = q1('#plMore', body); if (mo) mo.onclick = () => { PL.hints++; plPaint(); };
    const sh = q1('#plShow', body); if (sh) sh.onclick = () => { PL.revealed = true; plPaint(); };
    const ye = q1('#plYes', body); if (ye) ye.onclick = () => { award(false); plPaint(); };
    const no = q1('#plNo', body); if (no) no.onclick = () => { PL.judged = true; afterAnswer(false, it); plPaint(); };
    const nx = q1('#plNext', body);
    if (nx) nx.onclick = () => { PL.i++; PL.hints = 1; PL.revealed = false; PL.auto = false; PL.judged = false; if (PL.i >= n) plFinish(); plPaint(); top(); };
  }
  async function plShare() {
    const n = PL.items.length;
    const text = (PL.mode === 'quiz' ? '📝 ' : '🧩 ')
      + T(`我在讀經樂${PL.mode === 'quiz' ? '測驗' : '猜謎'}「${chLabel(PL.src.ch)}」答對了 ${PL.right} / ${n}！`,
          `I got ${PL.right} / ${n} on the ${PL.mode === 'quiz' ? 'quiz' : 'riddles'} for ${BK.en} ${PL.src.ch}!`)
      + '\n\n—— ' + FELLOW + '\n' + home();
    shareText(sc(text));
  }
  async function shareText(text) {
    if (navigator.share) {
      try { await navigator.share({ text }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(text); say(T('已複製，可以貼到群組裡', 'Copied — paste it anywhere')); }
    catch (e) { say(T('這台裝置不支援分享', 'Sharing is not available here')); }
  }
  function plHome(body) {
    const g = pdata(), P = g.play, wrong = g.wrong.length;
    const rate = P.total ? Math.round(P.right / P.total * 100) : 0, c = curCh();
    body.innerHTML = `
      <div class="card">
        <p class="eyebrow">${esc(T('出題對象', 'Questions for'))}</p>
        <div class="gxaud">${audBtns('pl')}</div>
        <p class="xs muted gxhint">${esc(GXD.hints[aud()])}</p>
        <p class="eyebrow" style="margin-top:12px">${esc(T('從哪裡出題', 'Questions from'))}</p>
        <div class="row">
          <button class="pill ${plSrc === 'cur' ? 'on' : ''}" data-s="cur">📖 ${esc(chLabel(c))}</button>
          <button class="pill ${plSrc === 'rand' ? 'on' : ''}" data-s="rand">🎲 ${esc(T('讀過的課（隨機）', 'A random lesson I’ve read'))}</button>
        </div>
      </div>
      <button class="pl-big" id="plRiddle"><span class="ic">🧩</span><span><b class="t">${esc(T('聖經猜謎', 'Bible Riddles'))}</b>
        <span class="s">${esc(T(`${PL_RN} 個謎題，提示一個一個出現，越早猜到分越高`, `${PL_RN} riddles — hints appear one by one; guess early for more points`))}</span></span></button>
      <button class="pl-big" id="plQuiz"><span class="ic">📝</span><span><b class="t">${esc(T('讀經測驗', 'Bible Quiz'))}</b>
        <span class="s">${esc(T(`${PL_QN} 題選擇題，答完立刻看解析；答錯的會進錯題本`, `${PL_QN} multiple-choice questions with instant explanations; misses go to your notebook`))}</span></span></button>
      <div class="card">
        <div class="pl-stat">
          <div><b>${P.total}</b><span>${esc(T('累計答題', 'Answered'))}</span></div>
          <div><b>${P.total ? rate + '%' : '—'}</b><span>${esc(T('答對率', 'Correct'))}</span></div>
          <div><b>${wrong}</b><span>${esc(T('錯題本', 'Missed'))}</span></div>
        </div>
        ${(P.best.quiz || P.best.riddle) ? `<p class="xs muted" style="text-align:center;margin:8px 0 0">${esc(T('最佳成績', 'Best'))}　📝 ${P.best.quiz || 0}%　🧩 ${P.best.riddle || 0}%</p>` : ''}
        ${wrong ? `<div class="pl-row"><button class="btn pri" id="plRev">🔁 ${esc(T('複習錯題（不用連線）', 'Review missed (works offline)'))}</button>
          <button class="btn" id="plClr">${esc(T('清空錯題本', 'Clear notebook'))}</button></div>` : ''}
      </div>
      <p class="xs muted" style="line-height:1.7">${esc(T('題目由小智「照著這一課的內容」現場出，所以每次都不一樣，需要連線。', 'Questions are written live by Xiaozhi from the lesson, so each round is different. Needs a connection.'))}</p>`;
    qa('[data-s]', body).forEach(bt => bt.onclick = () => { plSrc = bt.dataset.s; plPaint(); });
    q1('#plRiddle', body).onclick = () => plStart('riddle');
    q1('#plQuiz', body).onclick = () => plStart('quiz');
    const rv = q1('#plRev', body); if (rv) rv.onclick = () => plStart('quiz', true);
    const cl = q1('#plClr', body); if (cl) cl.onclick = () => {
      if (!confirm(T('清空錯題本？', 'Clear the notebook?'))) return;
      pdata().wrong = []; keep(); plPaint();
    };
  }
  function vPlay() {
    setTitle(T('讀經樂', 'Bible Fun'), false);
    return `<div class="sect" style="padding-bottom:8px"><p class="eyebrow">${esc(T('讀經樂', 'Bible Fun'))}</p><h2 class="big">${esc(T('玩著玩著，就記住了。', 'Play, and it stays with you.'))}</h2></div><div id="plBody"></div>`;
  }
  function playFor(ch) { PL = null; plSrc = 'cur'; if (ch) { S.last = ch; keep(); } go('tools', 0, 'play'); }

  /* ── 聚會與奉獻 ─────────────────────────────────────────────── */
  const MEET_TZ = 8;
  const MEET_URL = 'https://zoom.us/j/8193972372?pwd=o3tuX9k87Lyhb3UEV7hgRtSUYVyI1Q.1';
  const MEET_ID = '819 397 2372', MEET_PASS = '321';
  const YT_URL = 'https://www.youtube.com/@kingdom321air';
  const MEETINGS = [
    { t: ['晨讀', 'Morning Reading'], days: [1, 2, 3, 4, 5, 6], s: '06:00', e: '07:00' },
    { t: ['午修靈糧', 'Midday Manna'], days: [1, 2, 3, 4, 5], s: '12:10', e: '13:00' },
    { t: ['晚禱', 'Evening Prayer'], days: [1, 2, 3, 4, 5], s: '21:00', e: '22:00' }
  ];
  const OFFERING = [
    { c: ['台灣', 'Taiwan'], holder: '社團法人中華活力全人關懷協會', bank: '新光商業銀行 新埔分行', acct: '(103) 0338101013000' },
    { c: ['馬來西亞', 'Malaysia'], holder: '馬來西亞安提阿教會', bank: 'Public Bank', acct: '3178557627' },
    { c: ['紐西蘭', 'New Zealand'], holder: 'Bin Lu', bank: 'ASB Bank Auckland Branch', acct: '12-3231-0055109-00' },
    { c: ['新加坡', 'Singapore'], holder: 'LEE CHEW YONG', bank: 'DBS My Account', acct: '275-153637-9' },
    { c: ['中國', 'China'], title: ['微信支付', 'WeChat Pay'], qr: SITE + 'wxpay.jpg', cap: '321祝福(**淑)' }
  ];
  const mtTitle = m => T(m.t[0], m.t[1]);
  function mtOccur(m, now) {
    now = now || Date.now();
    const sp = m.s.split(':').map(Number), ep = m.e.split(':').map(Number);
    const sh = new Date(now + MEET_TZ * 3600000);
    const base = Date.UTC(sh.getUTCFullYear(), sh.getUTCMonth(), sh.getUTCDate());
    for (let k = 0; k < 9; k++) {
      const day = new Date(base + k * 86400000);
      if (m.days.indexOf(day.getUTCDay()) < 0) continue;
      const st = day.getTime() + (sp[0] - MEET_TZ) * 3600000 + sp[1] * 60000;
      let en = day.getTime() + (ep[0] - MEET_TZ) * 3600000 + ep[1] * 60000;
      if (en <= st) en += 86400000;
      if (now < en) return { start: st, end: en, live: now >= st, m };
    }
    return null;
  }
  function mtNext(now) {
    let best = null;
    for (const m of MEETINGS) {
      const o = mtOccur(m, now);
      if (!o) continue;
      if (o.live) return o;
      if (!best || o.start < best.start) best = o;
    }
    return best;
  }
  const mtWd = d => T('週' + '日一二三四五六'[d], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d]);
  const pad2 = n => (n < 10 ? '0' : '') + n;
  const mtHm = ts => { const d = new Date(ts); return pad2(d.getHours()) + ':' + pad2(d.getMinutes()); };
  function mtUntil(ms) {
    const mins = Math.round(ms / 60000);
    if (mins < 1) return T('就要開始了', 'Starting now');
    if (mins < 60) return T(`還有 ${mins} 分鐘`, `in ${mins} min`);
    const h = Math.floor(mins / 60), m = mins % 60;
    if (h < 24) return T(`還有 ${h} 小時${m ? ' ' + m + ' 分' : ''}`, `in ${h} hr${m ? ' ' + m + ' min' : ''}`);
    const d = Math.floor(h / 24), hh = h % 24;
    return T(`還有 ${d} 天${hh ? ' ' + hh + ' 小時' : ''}`, `in ${d} day${d > 1 ? 's' : ''}${hh ? ' ' + hh + ' hr' : ''}`);
  }
  function nextMeetCard() {
    const o = mtNext();
    if (!o) return '';
    const sd = new Date(o.start), tp = new Date(o.start + MEET_TZ * 3600000);
    const sameTz = (-new Date().getTimezoneOffset() / 60) === MEET_TZ;
    return `<div class="nextmtg">
      <span class="nm-k">${esc(o.live ? T('正在聚會', 'Live now') : T('下一堂聚會', 'Next meeting'))}</span>
      <h4>${esc(mtTitle(o.m))}</h4>
      <div class="nm-t">${esc(T('你的時間', 'Your time'))}　${esc(mtWd(sd.getDay()))} ${mtHm(o.start)}–${mtHm(o.end)}</div>
      ${sameTz ? '' : `<div class="nm-sub">${esc(T('台北時間', 'Taipei'))}　${esc(mtWd(tp.getUTCDay()))} ${o.m.s}–${o.m.e}</div>`}
      <div class="mt-cd">${esc(o.live ? T('進行中', 'In progress') : mtUntil(o.start - Date.now()))}</div>
      <a class="btn" href="${esc(MEET_URL)}" target="_blank" rel="noopener">${esc(o.live ? T('立即加入', 'Join now') : T('一鍵加入聚會', 'Join the meeting'))}</a>
    </div>`;
  }
  function vMeet() {
    setTitle(T('聚會與奉獻', 'Meetings & Giving'), false);
    const rows = MEETINGS.map(m => {
      const o = mtOccur(m); if (!o) return '';
      const sd = new Date(o.start);
      return `<div class="mtrow"><div class="mttime"><b>${mtHm(o.start)}–${mtHm(o.end)}</b><small>${esc(mtWd(sd.getDay()))}　${esc(T('你的時間', 'your time'))}</small></div>
        <div class="mtmid"><div class="t">${esc(mtTitle(m))}</div><div class="s">Zoom · ${esc(T('台北', 'Taipei'))} ${m.s}–${m.e}</div><div class="cd">${esc(o.live ? T('進行中', 'In progress') : mtUntil(o.start - Date.now()))}</div></div>
        <a class="btn xs2" href="${esc(MEET_URL)}" target="_blank" rel="noopener">${esc(T('加入', 'Join'))}</a></div>`;
    }).join('');
    const offs = OFFERING.map((a, i) => `<div class="offer"><span class="oc">${esc(T(a.c[0], a.c[1]))}</span>
      ${a.qr ? `<div class="oh" style="text-align:center">${esc(T(a.title[0], a.title[1]))}</div><img src="${a.qr}" alt="${esc(a.cap)}" style="display:block;width:100%;max-width:300px;margin:8px auto;border-radius:10px"><div class="od" style="text-align:center">${esc(a.cap)}</div></div>`
        : `<div class="oh">${esc(a.holder)}</div><div class="od">${esc(a.bank)}</div><div class="oa">${esc(a.acct)}</div>
      <button class="btn xs2" onclick="GX.copyAcct(${i})">📋 ${esc(T('複製帳號', 'Copy account number'))}</button></div>`}`).join('');
    return `<div class="sect" style="padding-bottom:6px"><p class="eyebrow">${esc(FELLOW)}</p><h2 class="big">${esc(T('同一個 Zoom，天天都在。', 'One Zoom, every day.'))}</h2></div>
      <div id="mtNext">${nextMeetCard()}</div>
      <div class="card"><p class="eyebrow">🎥 ${esc(T('線上聚會 Zoom', 'Online meeting · Zoom'))}</p>
        <a class="btn pri" style="display:block;text-align:center" href="${esc(MEET_URL)}" target="_blank" rel="noopener">${esc(T('一鍵加入聚會', 'Join the meeting'))}</a>
        <p class="sm muted" style="margin:10px 0 0">${esc(T('會議號：', 'Meeting ID: '))}<b>${MEET_ID}</b>　${esc(T('密碼：', 'Passcode: '))}<b>${MEET_PASS}</b></p></div>
      <div class="card" style="padding-top:6px;padding-bottom:6px"><p class="eyebrow" style="margin-top:8px">${esc(T('聚會時間表', 'Meeting schedule'))}</p>${rows}</div>
      <div class="card"><p class="eyebrow">▶️ YouTube</p>
        <a class="btn" style="display:block;text-align:center" href="${esc(YT_URL)}" target="_blank" rel="noopener">${esc(T('前往 YouTube 頻道', 'Go to the YouTube channel'))}</a></div>
      <div class="card"><p class="eyebrow">🎁 ${esc(T('奉獻支持', 'Giving'))}</p>
        <p class="sm muted" style="margin:0">${esc(T('奉獻是回應神的供應，出於甘心樂意（林後九7）。凡事謝恩，把榮耀歸給神。', 'Giving is our response to God’s provision, offered cheerfully (2 Corinthians 9:7). Give thanks in everything, and give the glory to God.'))}</p>
        ${offs}</div>`;
  }
  async function copyAcct(i) {
    const a = OFFERING[i].acct;
    try { await navigator.clipboard.writeText(a); say(T('已複製帳號', 'Account number copied')); }
    catch (e) {
      const ta = document.createElement('textarea'); ta.value = a; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); say(T('已複製帳號', 'Account number copied')); } catch (_) { say(a); }
      ta.remove();
    }
  }
  function introCard() {
    return `<div class="card gxintro"><p class="eyebrow">${esc(FELLOW)}</p>
      <p class="sm" style="margin:0 0 8px;line-height:1.8">${esc(T('以「321理念」為核心的線上團契，連結台灣、馬來西亞、中國、印尼、新加坡、紐西蘭、澳洲、韓國、日本等多個國家敬虔愛神的人，每天透過線上聚會一同學習聖經真理，操練活出基督的生命。',
        'An online fellowship built on the 3-2-1 ideology, connecting godly believers in Taiwan, Malaysia, China, Indonesia, Singapore, New Zealand, Australia, Korea, Japan and many other countries. Every day we meet online to learn the truth of Scripture and practise living out the life of Christ.'))}</p>
      ${nextMeetCard()}
      <button class="btn" style="width:100%" onclick="GXA.go('me',0,'meet')">${esc(T('聚會時間與奉獻支持 ›', 'Meeting times & giving ›'))}</button></div>`;
  }

  /* ── 樣式 ─────────────────────────────────────────────────────── */
  const CSS = `
.xzm,.xzhi,.xzsv{font-size:calc(var(--fs,17px)*.88)}
.xzmore{font-size:calc(var(--fs,17px)*.76)}
.xzact button{font-size:calc(var(--fs,17px)*.74)}
.xzq button{font-size:calc(var(--fs,17px)*.85)}
.xzf input{font-size:max(16px,calc(var(--fs,17px)*.94))}
.xzh b{font-size:calc(var(--fs,17px)*1.0)}
.xzt .narh{font-size:1.04em}.xzt .narh.sm{font-size:.98em}
.gxsm,.gxlen button,.gxa{font-size:calc(var(--fs,17px)*.75)}
.xzm.assistant .xzt{line-height:1.9;letter-spacing:.01em}
.xzt p{margin:0 0 .75em}.xzt p:last-child{margin-bottom:0}
.xzt .narh{font-family:var(--serif);font-weight:700;color:var(--pine);margin:1.1em 0 .45em;padding:0 0 0 .6em;border-left:3px solid var(--brass);line-height:1.5}
.xzt .narh:first-child{margin-top:.1em}
.xzt blockquote.narq{margin:.8em 0;padding:.6em .9em;border-left:3px solid var(--brass);background:var(--mk-note-bg,rgba(156,107,24,.08));border-radius:0 10px 10px 0;font-family:var(--serif);font-size:1.02em;line-height:1.85}
.xzt ul.narl,.xzt ol.narl{margin:.4em 0 .8em;padding-left:1.4em}
.xzt .narl li{margin:.3em 0;padding-left:.15em}
.xzt .narl li::marker{color:var(--brass);font-weight:700}
.xzt b{color:var(--pine);font-weight:700}
.xzt .nartw{margin:.6em 0 .9em;overflow-x:auto;border-radius:10px;border:1px solid var(--line)}
.xzt table.nart{border-collapse:collapse;width:100%;font-size:.93em;line-height:1.6}
.xzt table.nart th,.xzt table.nart td{border-bottom:1px solid var(--line);padding:.45em .7em;text-align:left;vertical-align:top}
.xzt table.nart th{background:var(--mk-note-bg,rgba(156,107,24,.08));color:var(--pine);font-weight:700}
.xzt table.nart tr:last-child td{border-bottom:0}
.xzm.assistant{padding-top:14px;padding-bottom:12px}
.xzctl{padding:6px 14px 8px;border-bottom:1px solid var(--line)}
.gxrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.gxsm{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:4px 11px;font:inherit;font-size:12.5px;white-space:nowrap;cursor:pointer}
.gxlen{display:inline-flex;align-items:center;gap:4px;margin-left:auto}
.gxlen button{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:3px 10px;font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}
.gxlen button.on,.gxa.on{background:var(--pine);border-color:var(--pine);color:#fff}
.gxaud{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.gxa{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:5px 11px;font:inherit;font-size:13px;cursor:pointer;white-space:nowrap}
.gxhint{margin:6px 0 0}
.xzfu{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:10px;padding-top:8px;border-top:1px dashed var(--line)}
.xzfut{font-size:.8em;font-weight:700;color:var(--brass)}
.xzfuc{border:1px solid var(--pine);background:transparent;color:var(--pine);border-radius:999px;padding:5px 11px;font:inherit;font-size:.86em;font-weight:600;cursor:pointer;line-height:1.35}
.xzcont{font-size:.85em;color:var(--brass);margin-top:6px;font-style:italic}
.xzact{display:flex;flex-wrap:wrap;gap:6px}.xzact button{flex:0 0 auto !important;width:auto !important;white-space:nowrap;padding-left:10px;padding-right:10px}
.xzf input{min-width:0;flex:1 1 0;width:0}.xzf .btn{flex:0 0 auto;white-space:nowrap}
.pl-big{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:var(--card);margin-bottom:10px;cursor:pointer;width:100%;text-align:left;color:var(--ink);font:inherit}
.pl-big:active{background:var(--paper)}.pl-big .ic{font-size:30px;flex:0 0 auto}
.pl-big .t{display:block;font-family:var(--serif);font-size:17px}.pl-big .s{display:block;font-size:13px;color:var(--dusk);line-height:1.55}
.pl-bar{height:8px;border-radius:99px;background:var(--line);overflow:hidden;margin:6px 0 14px}
.pl-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--pine),var(--brass));border-radius:99px;transition:width .3s}
.pl-meta{display:flex;justify-content:space-between;gap:8px;font-size:12.5px;color:var(--dusk)}
.pl-q{font-family:var(--serif);font-size:1.12em;line-height:1.8;font-weight:700;margin:6px 0 14px;overflow-wrap:anywhere}
.pl-opt{display:block;width:100%;text-align:left;border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:12px;padding:12px 14px;margin-bottom:9px;font:inherit;font-size:.95em;line-height:1.6;cursor:pointer;overflow-wrap:anywhere}
.pl-opt:active{background:var(--paper)}.pl-opt[disabled]{cursor:default}
.pl-opt.ok{border-color:var(--pine);box-shadow:inset 0 0 0 1.5px var(--pine);font-weight:700}
.pl-opt.bad{border-color:var(--clay);box-shadow:inset 0 0 0 1.5px var(--clay)}
.pl-expl{background:var(--mk-note-bg,rgba(156,107,24,.08));border-radius:10px;padding:10px 12px;font-size:.92em;line-height:1.8;margin:4px 0 12px;overflow-wrap:anywhere}
.pl-expl b{color:var(--brass)}
.pl-hint{display:flex;gap:8px;align-items:flex-start;background:var(--card);border-left:3px solid var(--brass);border-radius:8px;padding:9px 12px;margin-bottom:8px;font-size:.95em;line-height:1.7;overflow-wrap:anywhere}
.pl-hint b{color:var(--brass);flex:0 0 auto}
.pl-guess{display:flex;gap:8px;margin:12px 0 8px}
.pl-guess input{flex:1 1 0;width:0;min-width:0;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:inherit;background:var(--card);color:var(--ink)}
.pl-guess .btn{flex:0 0 auto}
.pl-ans{text-align:center;font-family:var(--serif);font-size:26px;font-weight:900;color:var(--pine);margin:10px 0 4px;letter-spacing:.06em}
.pl-score{text-align:center;padding:8px 0 2px}.pl-score .n{font-family:var(--serif);font-size:46px;font-weight:900;color:var(--pine)}
.pl-stars{font-size:28px;letter-spacing:6px}
.pl-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.pl-row .btn{flex:1 1 auto}
.pl-stat{display:flex;text-align:center}.pl-stat div{flex:1}.pl-stat b{display:block;font-family:var(--serif);font-size:24px;color:var(--pine)}.pl-stat span{font-size:12px;color:var(--dusk)}
.pl-shake{animation:plshake .35s}
@keyframes plshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.pl-load{text-align:center;padding:46px 10px;color:var(--dusk)}
.pl-load .spin{width:34px;height:34px;margin:0 auto 14px;border-radius:50%;border:3px solid var(--line);border-top-color:var(--pine);animation:gxspin 1s linear infinite}
@keyframes gxspin{to{transform:rotate(360deg)}}
.nextmtg{background:linear-gradient(160deg,#1F4D3D,#0E2a20);color:#fff;border-radius:16px;padding:16px 18px;margin:10px 0 12px}
.nextmtg .nm-k{display:inline-block;background:rgba(255,255,255,.16);color:#E8C66A;border-radius:99px;padding:2px 12px;font-size:.8em;font-weight:700}
.nextmtg h4{margin:8px 0 2px;font-size:1.3em;font-family:var(--serif)}.nextmtg .nm-t{opacity:.95;font-size:.95em}.nextmtg .nm-sub{font-size:.85em;opacity:.8}
.nextmtg .mt-cd{color:#E8C66A;font-weight:700;margin:6px 0 10px;font-size:.95em}
.nextmtg .btn{display:block;text-align:center;background:#9C6B18;border-color:#9C6B18;color:#fff;text-decoration:none}
.mtrow{display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)}.mtrow:last-child{border-bottom:none}
.mttime{flex:0 0 auto;min-width:96px;background:var(--paper);border-radius:12px;padding:6px 10px;text-align:center;font-size:.88em;line-height:1.5}
.mttime b{display:block}.mttime small{display:block;color:var(--dusk);font-size:.82em}
.mtmid{flex:1;min-width:0}.mtmid .t{font-weight:700}.mtmid .s{font-size:.82em;color:var(--dusk)}.mtmid .cd{font-size:.82em;color:var(--pine);font-weight:700}
.offer{border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin-top:10px}
.offer .oc{display:inline-block;background:var(--pine);color:#fff;border-radius:8px;padding:2px 10px;font-size:.8em;font-weight:700}
.offer .oh{font-weight:700;margin:8px 0 2px;overflow-wrap:anywhere}.offer .od{color:var(--dusk);font-size:.9em}
.offer .oa{font-family:var(--mono);font-size:1.02em;margin:6px 0 10px;overflow-wrap:anywhere}
a.btn{text-decoration:none}
`;
  function css() {
    if (document.getElementById('gxcss')) return;
    const st = document.createElement('style'); st.id = 'gxcss'; st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ── 掛進主程式 ─────────────────────────────────────────────── */
  const routes = {
    'tools/play': () => vPlay(),
    'me/meet': () => vMeet()
  };
  function addRoute(k, fn) { routes[k] = fn; }
  let meetTimer = 0;
  function boot() {
    css();
    const _render = window.render;
    window.render = function () {
      const k = R.tab + '/' + R.sub;
      if (S.set.role && routes[k]) {
        try { window.__booted = true; } catch (e) {}
        q1('#view').innerHTML = routes[k]();
        if (typeof UI321 !== 'undefined' && UI321.markTab) UI321.markTab(R.tab);
        else qa('nav.tabs button').forEach(b => b.classList.toggle('on', b.getAttribute('data-t') === R.tab));
        q1('#back').classList.remove('hide');
        if (k === 'tools/play') plPaint();
        if (window.GXS && GXS.after) GXS.after(k);
      } else {
        _render();
      }
      clearInterval(meetTimer);
      if (q1('.nextmtg')) meetTimer = setInterval(() => {
        const n = q1('#mtNext') || null;
        if (n) n.innerHTML = nextMeetCard();
      }, 30000);
    };
    /* 子頁的「‹」回到那一個分頁的首頁，不是直接跳回今日 */
    const bk = q1('#back');
    if (bk) {
      const old = bk.onclick;
      bk.onclick = function (e) {
        if (!R.ch && R.sub) { if (R.sub === 'play') PL = null; return go(R.tab); }
        return old && old.call(this, e);
      };
    }
    const _vMe = window.vMe;
    window.vMe = function () {
      let h = _vMe();
      const extra = settingsCard() +
        `<button class="chrow" onclick="GXA.go('me',0,'works')"><span class="chn">🎬</span><span style="flex:1"><b>${esc(T('我的作品', 'My works'))}</b><span class="s">${esc(T('錄好的語音、卡片影片、音樂卡片', 'Recorded voice, card videos and music cards'))}</span></span></button>` +
        `<button class="chrow" onclick="GXA.go('me',0,'meet')"><span class="chn">🎥</span><span style="flex:1"><b>${esc(T('聚會與奉獻', 'Meetings & giving'))}</b><span class="s">${esc(T('Zoom 一鍵加入、聚會時間、奉獻帳號', 'Join Zoom, meeting times, giving accounts'))}</span></span></button>`;
      const cut = h.indexOf('<div class="card"><p class="eyebrow">' + T('朗讀聲音', 'Read-aloud voice'));
      if (cut > 0) h = h.slice(0, cut) + extra + h.slice(cut);
      else {
        const c2 = h.indexOf('<div class="card">', h.indexOf('</button>'));
        h = c2 > 0 ? h.slice(0, c2) + extra + h.slice(c2) : h + extra;
      }
      return h;
    };
    const _vTools = window.vTools;
    window.vTools = function () {
      const h = _vTools();
      if (R.sub) return h;
      return h + `<button class="chrow" onclick="GX.playFor()"><span class="chn">🎯</span>
        <span style="flex:1"><b>${esc(T('讀經樂', 'Bible Fun'))}</b><span class="s">${esc(T('小智照著這一課出題：聖經猜謎、讀經測驗、錯題本', 'Xiaozhi writes riddles and a quiz from the lesson, with a notebook for misses'))}</span></span></button>`;
    };
    const _vToday = window.vToday;
    window.vToday = function () {
      let h = _vToday();
      const cut = h.lastIndexOf('<div class="foot">');
      const add = introCard();
      return cut > 0 ? h.slice(0, cut) + add + h.slice(cut) : h + add;
    };
    const _vText = window.vText;
    window.vText = function () {
      let h = _vText();
      if (!R.ch) return h;
      return h + `<div class="row" style="margin-top:10px"><button class="btn" onclick="GX.playFor(${R.ch})">🎯 ${esc(T('考考我這一課', 'Quiz me on this lesson'))}</button></div>`;
    };
    try { render(); } catch (e) {}
  }

  return {
    EN, T, esc, sc, SITE, FELLOW, BOOK, BK, NCH, chLabel, home,
    sysExtra, followups, quicks, ctl, togAud, setAud, setLen, setLenMe, settingsCard,
    aud, alen, A, D: GXD, aiRaw, shareText,
    playFor, plStart, copyAcct, addRoute, boot,
    routes, css, _plPaint: plPaint, _nextMeet: nextMeetCard, _intro: introCard,
    _plParse: plParse, _match: match, _pl: () => PL
  };
})();

/* ═══════════════════════════════════════════════════════════════════
   GXS · 美圖工作室＋配樂錄製＋我的作品（從《321互動聖經》v2.18.29 移植）
   · 版型 9 種、尺寸 5 種、6 種外框、5 段字級
   · 相片：內建圖庫（互動聖經 bg.json，299 張）、Pexels 免費圖庫、自己的相片；
     當背景，或「整張原圖」（相片就是卡片，字排在最空的橫帶，字色自動）
   · 文字：經文、出處、稱呼、團體名、內文（小智寫祝福、改一改、用我的領受、不要內文）、署名
   · 配樂：詩歌庫 38 首（互動聖經 music.json）、自選音檔、音量
   · 錄製：只有聲音／卡片影片／自拍影片；不開口的音樂卡片 15／30／60 秒／整首；
     凡有配樂，結尾一律淡出 5 秒；iOS 分段 MP4 重新封裝
   · 我的作品：IndexedDB（gn_works）
   ═══════════════════════════════════════════════════════════════════ */
var GXS = (function () {
  'use strict';
  const EN = GX.EN, T = GX.T, esc = GX.esc, SITE = GX.SITE;
  const q1 = (s, r) => (r || document).querySelector(s);
  const qa = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const say = (m) => { try { toast(m); } catch (e) {} };
  const keep = () => { try { save(); } catch (e) {} };
  const PEXELS_KEY = 'ofCQ7i2mqaEddrACvvmzdgfrpZ90Z8gVOI9D6vYVf7uxWXCCtzQbj9yR';
  const isSC = () => !EN && !!(S && S.set && S.set.sc);
  const sc = s => GX.sc(s);
  const isIOS = () => /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const TPL = {
    navy:  { n: ['深藍聖夜', 'Midnight Navy'], bg: ['#123F92', '#0D3988', '#071A42'], glow: 'rgba(212,166,91,.30)', ink: '#F2ECDD', accent: '#F7EFDC', gold: '#D4A65B', sub: '#C0AF92', frame: 'rgba(212,166,91,.42)' },
    paper: { n: ['素樸信箋', 'Plain Letter'], bg: ['#FBF8F1', '#F4EFE3', '#EDE6D6'], glow: 'rgba(212,166,91,.45)', ink: '#3A3122', accent: '#23211C', gold: '#A9762F', sub: '#6C614D', frame: 'rgba(169,118,47,.34)' },
    dawn:  { n: ['晨曦盼望', 'Dawn of Hope'], bg: ['#FFF6EC', '#FBE9D2', '#F6D9B8'], glow: 'rgba(255,214,150,.6)', ink: '#3A2A1A', accent: '#8A4B16', gold: '#C97A22', sub: '#71563C', frame: 'rgba(181,101,29,.30)' },
    grace: { n: ['青草安歇', 'Green Pastures'], bg: ['#F2F7F1', '#E4EFE6', '#D6E7DA'], glow: 'rgba(160,200,170,.5)', ink: '#1C2E26', accent: '#255943', gold: '#3C8A64', sub: '#4B6356', frame: 'rgba(46,106,80,.28)' },
    rose:  { n: ['溫柔玫瑰', 'Gentle Rose'], bg: ['#FCF5F3', '#F6E7E3', '#EFD8D2'], glow: 'rgba(220,160,150,.45)', ink: '#33221E', accent: '#8A3D2E', gold: '#B36A54', sub: '#715650', frame: 'rgba(154,74,58,.28)' },
    sky:   { n: ['平安晴空', 'Peaceful Sky'], bg: ['#F1F7FB', '#DFEEF6', '#CFE4F0'], glow: 'rgba(150,200,230,.5)', ink: '#1B2A33', accent: '#1E5270', gold: '#2E7DA0', sub: '#49606C', frame: 'rgba(37,96,128,.28)' },
    linen: { n: ['素雅棉麻', 'Soft Linen'], bg: ['#F7F4EE', '#EFEAE0', '#E6DFD2'], glow: 'rgba(200,190,170,.4)', ink: '#2A2620', accent: '#4A4234', gold: '#8A7A5A', sub: '#635D51', frame: 'rgba(90,80,64,.26)' },
    night: { n: ['深夜星光', 'Starry Night'], bg: ['#101E1B', '#16302A', '#0E2420'], glow: 'rgba(232,201,122,.26)', ink: '#EDEAE0', accent: '#E8C97A', gold: '#E8C97A', sub: '#9FB0AA', frame: 'rgba(232,201,122,.34)' },
    plain: { n: ['純白簡潔', 'Pure White'], bg: ['#FFFFFF', '#FFFFFF', '#FFFFFF'], glow: 'rgba(0,0,0,0)', ink: '#23211C', accent: '#1F4D3D', gold: '#A9762F', sub: '#6B6255', frame: 'rgba(31,77,61,.22)' }
  };
  const TPL_ORDER = ['plain', 'navy', 'paper', 'dawn', 'grace', 'rose', 'sky', 'linen', 'night'];
  const SIZES = { p: [1080, 1920, ['直式 9:16', 'Portrait 9:16']], t: [1080, 1350, ['直式 4:5', 'Portrait 4:5']], s: [1080, 1080, ['方形', 'Square']], w: [1920, 1080, ['橫式 16:9', 'Landscape 16:9']], f: [1440, 1080, ['橫式 4:3', 'Landscape 4:3']] };
  const BORDERS = [['classic', ['古典雙框', 'Classic']], ['corner', ['雅緻角飾', 'Corners']], ['inline', ['內斂細線', 'Fine line']], ['dots', ['珠鏈點框', 'Dots']], ['ornate', ['華麗花角', 'Ornate']], ['none', ['無邊框', 'None']]];
  const FS = [[0.9, ['小一點', 'Smaller']], [1, ['標準', 'Standard']], [1.2, ['大', 'Large']], [1.45, ['特大', 'Extra large']], [1.7, ['超大', 'Huge']]];
  const DEF_TOP = () => GX.FELLOW;
  const DEF_TO = () => T('親愛的家人：平安！', 'Dear family, peace be with you!');
  const DEF_SIGN = () => T('願上帝賜福你！', 'God bless you!');

  function st() {
    if (!S.gxs || typeof S.gxs !== 'object') S.gxs = {};
    const g = S.gxs;
    if (!TPL[g.tpl]) g.tpl = 'plain';
    if (!SIZES[g.size]) g.size = 'p';
    if (!BORDERS.some(b => b[0] === g.border)) g.border = 'none';
    if (!(+g.fs >= .85 && +g.fs <= 1.8)) g.fs = 1.45;
    if (g.to == null) g.to = DEF_TO();
    if (g.top == null) g.top = '';
    if (g.sign == null) g.sign = '';
    if (!(+g.vol > 0)) g.vol = 0.22;
    if ([15, 30, 60, 0].indexOf(+g.mc) < 0) g.mc = 30;
    if (!g.bgCat) g.bgCat = 'scenery';
    return g;
  }
  /* 稱呼若還是某個語言的預設字，就換成目前語言；自己改過的不動 */
  const toVal = () => {
    const v = String(st().to || '').trim();
    return (v === '親愛的家人：平安！' || v === '亲爱的家人：平安！' || v === 'Dear family, peace be with you!') ? DEF_TO() : v;
  };

  /* ── 工作室狀態（這一次） ── */
  let item = null;           // { t, ref, n0, plain }
  let note = '';             // 內文
  let tab = 'look', busy = false, EL = null, rendering = 0;
  let bgList = null, pxS = { q: '', page: 1, items: [], busy: false, end: false };
  let hymns = null, bgmBlob = null, bgmName = '', bgmCredit = '', hymnEl = null, hymnPrev = null;
  const songBase = {};

  const SERIF0 = () => isSC() ? '"Noto Serif SC","Source Han Serif SC","Songti SC","STSong","SimSun",Georgia,serif'
    : (EN ? 'Georgia,"Times New Roman",serif' : '"Noto Serif TC","Songti TC","STSong","PMingLiU",Georgia,serif');
  const SANS0 = () => isSC() ? '"Noto Sans SC","PingFang SC","Microsoft YaHei","Heiti SC",sans-serif'
    : (EN ? '-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif' : '"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif');

  /* ── 畫卡片 ─────────────────────────────────────────────────── */
  function rr(c, x, y, w, h, r) {
    c.beginPath(); c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }
  const NO_START = '，。、；：？！）」』】》〉·…—％‰';
  const NO_END = '（「『【《〈';
  function wrapEN(c, text, maxW) {
    const out = [];
    String(text || '').split('\n').forEach(par => {
      if (!par) { out.push(''); return; }
      let line = '';
      par.split(/\s+/).forEach(w => {
        if (!w) return;
        const probe = line ? line + ' ' + w : w;
        if (c.measureText(probe).width > maxW && line) { out.push(line); line = w; }
        else line = probe;
      });
      if (line) out.push(line);
    });
    return out;
  }
  function wrapText(c, text, maxW) {
    if (EN) return wrapEN(c, text, maxW);
    const out = [];
    String(text || '').split('\n').forEach(par => {
      if (!par) { out.push(''); return; }
      let line = '';
      for (const ch of par) {
        if (c.measureText(line + ch).width > maxW && line) {
          if (NO_START.indexOf(ch) >= 0) { line += ch; continue; }
          let carry = '';
          while (line.length > 1 && NO_END.indexOf(line[line.length - 1]) >= 0) { carry = line[line.length - 1] + carry; line = line.slice(0, -1); }
          out.push(line); line = carry + ch;
        } else line += ch;
      }
      out.push(line);
    });
    return out;
  }
  function drawBorder(c, W, H, pad, F, Tp) {
    const B = st().border; if (B === 'none') return;
    const line = Tp.frame, line2 = Tp.frame.replace(/[\d.]+\)$/, '0.55)'), gold = Tp.gold;
    const m = pad * .5, x = m, y = m, w = W - m * 2, h = H - m * 2, R = Math.round(18 * F);
    if (B === 'classic') {
      c.strokeStyle = line; c.lineWidth = Math.max(2, W * .0022); rr(c, x, y, w, h, R); c.stroke();
      c.strokeStyle = line2; c.lineWidth = Math.max(1, W * .0009);
      rr(c, x + 9 * F, y + 9 * F, w - 18 * F, h - 18 * F, Math.round(12 * F)); c.stroke();
      c.fillStyle = gold;
      [[x, y], [x + w, y], [x, y + h], [x + w, y + h]].forEach(p => { c.beginPath(); c.arc(p[0], p[1], Math.round(5 * F), 0, 7); c.fill(); });
    } else if (B === 'corner') {
      c.strokeStyle = gold; c.lineWidth = Math.max(2, W * .003); c.lineCap = 'round';
      const L = Math.round(56 * F);
      const seg = (cx, cy, dx, dy) => { c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + dx * L, cy); c.moveTo(cx, cy); c.lineTo(cx, cy + dy * L); c.stroke(); };
      seg(x, y, 1, 1); seg(x + w, y, -1, 1); seg(x, y + h, 1, -1); seg(x + w, y + h, -1, -1);
      c.lineCap = 'butt';
    } else if (B === 'inline') {
      c.strokeStyle = line2; c.lineWidth = Math.max(1, W * .0013);
      rr(c, x + 6 * F, y + 6 * F, w - 12 * F, h - 12 * F, Math.round(14 * F)); c.stroke();
    } else if (B === 'dots') {
      c.fillStyle = line2;
      const r0 = Math.max(2, W * .0026), gap = Math.round(26 * F);
      const ex = x + 6 * F, ey = y + 6 * F, ew = w - 12 * F, eh = h - 12 * F;
      const dot = (px, py) => { c.beginPath(); c.arc(px, py, r0, 0, 7); c.fill(); };
      for (let px = ex; px <= ex + ew; px += gap) { dot(px, ey); dot(px, ey + eh); }
      for (let py = ey; py <= ey + eh; py += gap) { dot(ex, py); dot(ex + ew, py); }
    } else if (B === 'ornate') {
      c.strokeStyle = line; c.lineWidth = Math.max(2, W * .0022); rr(c, x, y, w, h, R); c.stroke();
      c.strokeStyle = gold; c.lineWidth = Math.max(1.5, W * .0016); c.lineCap = 'round';
      const L = Math.round(34 * F), o = Math.round(16 * F);
      const flo = (cx, cy, dx, dy) => {
        c.beginPath(); c.moveTo(cx + dx * o, cy + dy * o); c.lineTo(cx + dx * (o + L), cy + dy * o);
        c.moveTo(cx + dx * o, cy + dy * o); c.lineTo(cx + dx * o, cy + dy * (o + L)); c.stroke();
        c.fillStyle = gold; c.beginPath(); c.arc(cx + dx * o, cy + dy * o, Math.round(4.5 * F), 0, 7); c.fill();
      };
      flo(x, y, 1, 1); flo(x + w, y, -1, 1); flo(x, y + h, 1, -1); flo(x + w, y + h, -1, -1);
      c.lineCap = 'butt';
    }
  }
  function coverDraw(c, img, x, y, w, h) {
    const r = Math.max(w / img.width, h / img.height);
    const dw = img.width * r, dh = img.height * r;
    c.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  }
  function verseText() {
    const raw = sc(String(item.t || '')).replace(/〔[^〕]*〕/g, '').replace(/\[[^\]]*\]/g, '')
      .replace(/\s+/g, ' ').replace(/\s+([,.;:!?”’])/g, '$1').trim().replace(/[，、；：,;]+$/, '');
    if (item.plain) return raw;
    return EN ? ((/^[“"']/.test(raw) ? '' : '“') + raw + (/[”"']$/.test(raw) ? '' : '”'))
      : ((/^[「『]/.test(raw) ? '' : '「') + raw + (/[」』]$/.test(raw) ? '' : '」'));
  }
  const refText = () => sc(item.ref || '');
  const topText = () => sc(String(st().top || '').trim() || DEF_TOP());
  const signText = () => sc(String(st().sign || '').trim() || DEF_SIGN());
  const toText = () => sc(toVal());
  /* ── 相片狀態（照互動聖經 v2.18：背景與貼紙可並存；photoMode 預設 full）── */
  let photoImg = null, photoBy = '', stkImg = null, stkBy = '';
  let photoMode = 'full';
  let stkSize = 0.30, stkPos = 'br', stkShape = 'p';
  let origScale = 1, origDX = 0, origDY = 0, origMove = false;
  let origLay = 'auto', origSplit = false, origTarget = 'v', origNX = 0, origNY = 0;
  let fullKind = 'verse', fullScale = 1.1, fullBless = '', blessOwn = '';
  let suppressSticker = false;
  function setPhoto(im, by) {
    if (photoMode === 'sticker') { stkImg = im; stkBy = by || ''; }
    else { photoImg = im; photoBy = by || ''; }
  }
  const isFull = () => !!(photoImg && photoMode === 'full');
  const isFullV = () => isFull() && fullKind === 'verse';
  const STK_SIZES = [[0.22, ['小張', 'Small']], [0.30, ['中等', 'Medium']], [0.38, ['大張', 'Large']], [0.46, ['滿版', 'Full']], [0.62, ['超大', 'Huge']], [0.84, ['整排', 'Full width']]];
  const STK_POS = [['bl', ['左下', 'Bottom left']], ['bc', ['正下', 'Bottom centre']], ['br', ['右下', 'Bottom right']], ['tl', ['左上', 'Top left']], ['tr', ['右上', 'Top right']]];
  const STK_SHAPES = [['p', ['直式', 'Portrait']], ['w', ['橫式 16:9', 'Landscape 16:9']], ['s', ['方形', 'Square']]];
  const stkRatio = () => stkShape === 'w' ? 0.72 : (stkShape === 's' ? 1.06 : 1.12);
  function coverDraw2(c, img, x, y, w, h) {
    const ir = img.width / img.height, r = w / h;
    let sw, sh, sx, sy;
    if (ir > r) { sh = img.height; sw = sh * r; sx = (img.width - sw) / 2; sy = 0; }
    else { sw = img.width; sh = sw / r; sx = 0; sy = (img.height - sh) / 2; }
    c.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  }
  function dims() {
    if (isFull()) {
      const pw = photoImg.width, ph = photoImg.height;
      const long = Math.max(1080, Math.min(1920, Math.max(pw, ph))), k = long / Math.max(pw, ph);
      return [Math.round(pw * k / 2) * 2, Math.round(ph * k / 2) * 2];
    }
    return SIZES[st().size];
  }

  /* 整張原圖：只有 稱呼／經文或問候語（＋祝福）／署名，排在相片上方最空的地方（照互動聖經 drawFullCard） */
  function drawFull(cv, W, H) {
    cardOverflow = '';
    const ctx = cv.getContext('2d'); cv.width = W; cv.height = H;
    ctx.drawImage(photoImg, 0, 0, W, H);
    const S2 = Math.min(W, H) / 1080, sans = SANS(), serif = SERIF();
    const toName = toText();
    const sign = signText();
    let body, ref = '';
    if (fullKind === 'greet') {
      body = sc(String(st().greet || '').trim() || T('平安喜樂，主愛你！', 'Peace and joy to you, the Lord loves you!'));
    } else { body = verseText(); ref = refText(); }
    const bless = (fullKind === 'verse' ? sc(fullBless || '') : '').trim();
    const mg = Math.round(W * .07);
    const tw = Math.min(W - mg * 2, Math.max(H * 1.05, W * .6));
    const roomMax = Math.min(H * .85, H * .46 * Math.max(1, fullScale || 1));
    const FSc = fullScale || 1;
    const ts = Math.round(44 * S2 * FSc), ss = Math.round(26 * S2 * FSc);
    let row = null, rl = null; const sh = Math.max(24, Math.round(96 * H / W));
    try {
      const sw = 96, sc2 = document.createElement('canvas'); sc2.width = sw; sc2.height = sh;
      const sx = sc2.getContext('2d'); sx.drawImage(photoImg, 0, 0, sw, sh);
      const d = sx.getImageData(0, 0, sw, sh).data, g = new Float32Array(sw * sh);
      for (let i = 0; i < sw * sh; i++) g[i] = (d[i * 4] * .299 + d[i * 4 + 1] * .587 + d[i * 4 + 2] * .114);
      const x0 = Math.floor((W - tw) / 2 / W * sw), x1 = Math.ceil((W + tw) / 2 / W * sw);
      row = new Float32Array(sh); rl = new Float32Array(sh);
      for (let y = 0; y < sh; y++) {
        let e = 0, l = 0, n = 0;
        for (let x = x0; x < x1 - 1; x++) {
          e += Math.abs(g[y * sw + x + 1] - g[y * sw + x]) + (y + 1 < sh ? Math.abs(g[(y + 1) * sw + x] - g[y * sw + x]) : 0);
          l += g[y * sw + x]; n++;
        }
        row[y] = e / Math.max(1, n); rl[y] = l / Math.max(1, n) / 255;
      }
    } catch (e) { row = null; }
    let vs = Math.round(58 * S2 * FSc), vl, rs, bs = 0, bl = [], total, ty = mg, lum = .3, pick = null;
    const vsMin = FSc !== 1 ? vs : Math.round(22 * S2);   /* 使用者指定大小就不再自動縮小 */
    for (;;) {
      ctx.font = `600 ${vs}px ${serif}`; vl = wrapText(ctx, body, tw);
      rs = Math.min(Math.round(30 * S2 * FSc), Math.round(vs * .8));
      bs = Math.round(vs * .66); bl = [];
      if (bless) { ctx.font = `500 ${bs}px ${sans}`; bl = wrapText(ctx, bless, tw); }
      total = (toName ? ts * 1.9 : 0) + vl.length * vs * 1.5 + (ref ? rs * 2 : 0) + (bl.length ? bs * .9 + bl.length * bs * 1.55 : 0) + ss * 2.2;
      let bestE = 0, bty = mg, blum = .3;
      if (row) {
        const hh = Math.max(1, Math.round(total / H * sh)), y0 = Math.round(mg / H * sh);
        const maxY = Math.max(y0, Math.min(sh - hh, Math.round(sh * .55)));
        bestE = 1e9;
        for (let y = y0; y <= maxY; y++) {
          let e = 0, l = 0;
          for (let k = y; k < y + hh && k < sh; k++) { e += row[k]; l += rl[k]; }
          const s3 = e / hh + (y / sh) * 8;
          if (s3 < bestE) { bestE = s3; bty = y / sh * H; blum = l / hh; }
        }
      }
      const fits = total <= roomMax;
      if (fits && (!pick || bestE < pick.e)) pick = { e: bestE, vs, vl, rs, bs, bl, total, ty: bty, lum: blum };
      if ((fits && bestE <= 2.2) || vs <= vsMin) break;
      vs -= Math.max(1, Math.round(2 * S2));
    }
    if (!pick) pick = { e: 0, vs, vl, rs, bs, bl, total, ty: mg, lum: .3 };
    vs = pick.vs; vl = pick.vl; rs = pick.rs; bs = pick.bs; bl = pick.bl; total = pick.total; ty = pick.ty; lum = pick.lum;
    ty = Math.max(mg, Math.min(ty, H - mg - total));
    const x1c = -(W - tw) / 2 + mg * .5, x2c = (W - tw) / 2 - mg * .5;
    origDX = Math.max(x1c / W, Math.min(x2c / W, origDX));
    origDY = Math.max(-(ty - mg) / H, Math.min((H - mg - (ty + total)) / H, origDY));
    const dark = lum > .55;
    const inkC0 = inkVal(), ink = inkC0 || (dark ? '#2a2118' : '#ffffff'), sub = inkC0 || (dark ? 'rgba(42,33,24,.92)' : 'rgba(255,255,255,.95)');
    ctx.save(); ctx.translate(origDX * W, origDY * H);
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.shadowColor = dark ? 'rgba(255,255,255,.65)' : 'rgba(0,0,0,.55)'; ctx.shadowBlur = Math.round(10 * S2);
    const cx = W / 2; let y = ty;
    if (toName) {
      let t2 = ts; ctx.font = `600 ${t2}px ${serif}`;
      while (t2 > Math.round(22 * S2) && ctx.measureText(toName).width > tw) { t2 -= 2; ctx.font = `600 ${t2}px ${serif}`; }
      ctx.fillStyle = ink; y += ts * 1.05; ctx.fillText(toName, cx, y); y += ts * .85;
    }
    ctx.fillStyle = ink; ctx.font = `600 ${vs}px ${serif}`;
    y += vs * .1;
    vl.forEach(l => { y += vs * 1.0; ctx.fillText(l, cx, y); y += vs * .5; });
    if (ref) { ctx.font = `${rs}px ${sans}`; ctx.fillStyle = sub; y += rs * .6; ctx.fillText(ref, cx, y); y += rs * 1.4; }
    if (bl.length) { ctx.font = `500 ${bs}px ${sans}`; ctx.fillStyle = sub; y += bs * .3; bl.forEach(l => { y += bs * 1.1; ctx.fillText(l, cx, y); y += bs * .45; }); y += bs * .2; }
    let s2 = ss; ctx.font = `600 ${s2}px ${sans}`;
    while (s2 > Math.round(14 * S2) && ctx.measureText(sign).width > tw) { s2 -= 2; ctx.font = `600 ${s2}px ${sans}`; }
    ctx.fillStyle = sub; y += ss * 1.1; ctx.fillText(sign, cx, y);
    ctx.restore();
  }

  /* 一般卡片（照互動聖經 drawVerseCard：背景／貼紙／原圖） */
  function drawCard(cv, W, H) {
    if (isFull()) return drawFull(cv, W, H);
    const ctx = cv.getContext('2d'); cv.width = W; cv.height = H;
    cardOverflow = '';
    let Tp = inkT(TPL[st().tpl]);
    if (photoImg && photoMode !== 'orig') Tp = Object.assign({}, Tp, { sub: Tp.ink });   /* 相片上團契名與落款用內文色，確保看得清楚 */
    const Sm = Math.min(W, H), F = Sm / 1080, pad = Math.round(Sm * .085), iw = W - pad * 2;
    const wide = W > H * 1.2;
    let colW = wide ? Math.min(iw, Math.round(H * 1.5)) : iw;
    const sans = SANS(), serif = SERIF();
    const FB = st().fs;
    const orig = !!(photoImg && photoMode === 'orig');
    let TX = 0, TY = 0, TW = W, TH = H, TP = pad, pz = null;
    if (orig) {
      const gp = Math.round(24 * F), fr = Math.round(9 * F), pa = photoImg.width / photoImg.height;
      const AW = iw, AH = H - pad * 2;
      const shapeCap = W / H > 1.2 ? .55 : (W / H > .9 ? .40 : .46);
      const zhS = Math.min(AH * Math.min(.66, shapeCap * origScale), (AW - fr * 2) / pa + fr * 2);
      const stack = { pz: { x: pad, y: pad, w: AW, h: Math.round(zhS) } };
      stack.TX = pad; stack.TY = pad + Math.round(zhS) + gp; stack.TW = AW; stack.TH = H - pad - stack.TY;
      stack.area = Math.min(AW - fr * 2, (zhS - fr * 2) * pa) * Math.min((AW - fr * 2) / pa, zhS - fr * 2);
      stack.ok = stack.TH >= AH * .52;
      const zwS = Math.min(AW * Math.min(.62, .5 * origScale), (AH - fr * 2) * pa + fr * 2);
      const side = { pz: { x: pad, y: pad, w: Math.round(zwS), h: AH } };
      const gs = Math.round(44 * F);
      side.TX = pad + Math.round(zwS) + gs; side.TY = pad; side.TW = AW - Math.round(zwS) - gs; side.TH = AH;
      side.area = Math.min(zwS - fr * 2, (AH - fr * 2) * pa) * Math.min((zwS - fr * 2) / pa, AH - fr * 2);
      side.ok = side.TW >= AW * .38;
      let pk;
      if (origLay === 'stack') pk = stack; else if (origLay === 'side') pk = side;
      else if (stack.ok && side.ok) pk = stack.area >= side.area ? stack : side;
      else pk = stack.ok ? stack : (side.ok ? side : (W >= H * 1.2 ? side : stack));
      pz = pk.pz; TX = pk.TX; TY = pk.TY; TW = pk.TW; TH = pk.TH;
      TP = Math.round(W * .02);
    }
    const stkW = Math.round(Sm * stkSize);
    const stkHas = !!(stkImg && !suppressSticker && !orig);
    let stkSide = false;
    if (!orig) {
      const sideIw = W - 2 * (pad + stkW + Math.round(28 * F));
      if (wide && stkHas && stkPos !== 'bc' && sideIw >= W * .45) { stkSide = true; colW = Math.min(colW, sideIw); }
      TW = colW + 2 * pad; TX = Math.round((W - TW) / 2);
    }
    const tiw = TW - TP * 2;
    const g = ctx.createLinearGradient(0, 0, W * .3, H);
    g.addColorStop(0, Tp.bg[0]); g.addColorStop(.55, Tp.bg[1]); g.addColorStop(1, Tp.bg[2]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    if (photoImg && !orig) {
      coverDraw2(ctx, photoImg, 0, 0, W, H);
      const hx = Tp.bg[1].replace('#', '');
      const R0 = parseInt(hx.slice(0, 2), 16), G0 = parseInt(hx.slice(2, 4), 16), B0 = parseInt(hx.slice(4, 6), 16);
      const al = scrimAlphas(photoImg, Tp, [R0, G0, B0]);
      const scg = ctx.createLinearGradient(0, 0, 0, H);
      scg.addColorStop(0, `rgba(${R0},${G0},${B0},${al[0]})`);
      scg.addColorStop(.5, `rgba(${R0},${G0},${B0},${al[1]})`);
      scg.addColorStop(1, `rgba(${R0},${G0},${B0},${al[2]})`);
      ctx.fillStyle = scg; ctx.fillRect(0, 0, W, H);
    }
    const rg = ctx.createRadialGradient(W * .84, H * .10, 10, W * .84, H * .10, W * .75);
    rg.addColorStop(0, Tp.glow); rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    drawBorder(ctx, W, H, pad, F, Tp);
    if (orig) {
      const fr = Math.round(9 * F);
      const k = Math.min((pz.w - fr * 2) / photoImg.width, (pz.h - fr * 2) / photoImg.height);
      const dw = Math.round(photoImg.width * k), dh = Math.round(photoImg.height * k);
      const bx = Math.round(pz.x + (pz.w - dw - fr * 2) / 2), by = Math.round(pz.y + (pz.h - dh - fr * 2) / 2);
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,.26)'; ctx.shadowBlur = Math.round(22 * F); ctx.shadowOffsetY = Math.round(8 * F);
      rr(ctx, bx, by, dw + fr * 2, dh + fr * 2, Math.round(10 * F)); ctx.fillStyle = '#FDFBF6'; ctx.fill();
      ctx.restore();
      ctx.save(); rr(ctx, bx + fr, by + fr, dw, dh, Math.round(4 * F)); ctx.clip();
      ctx.drawImage(photoImg, bx + fr, by + fr, dw, dh); ctx.restore();
    }
    ctx.save(); ctx.translate(TX, TY);
    const FT = F;
    const grp = topText();
    const grpSz = Math.round(27 * FT * FB), grpY = TP + Math.round(42 * FT);
    ctx.textAlign = 'center'; ctx.fillStyle = Tp.sub; ctx.font = `600 ${grpSz}px ${sans}`;
    const gw = ctx.measureText(grp).width;
    ctx.fillText(grp, TW / 2, grpY);
    ctx.strokeStyle = Tp.frame.replace(/[\d.]+\)$/, '0.6)'); ctx.lineWidth = Math.max(1, 1.5 * FT);
    [[TW / 2 - gw / 2 - 28 * FT, -1], [TW / 2 + gw / 2 + 28 * FT, 1]].forEach(p => {
      ctx.beginPath(); ctx.moveTo(p[0], grpY - 9 * FT); ctx.lineTo(p[0] + p[1] * 30 * FT, grpY - 9 * FT); ctx.stroke();
    });
    const toName = toText();
    if (toName) {
      let ts2 = Math.round(40 * FT * FB);
      ctx.textAlign = 'center'; ctx.fillStyle = Tp.ink;
      while (ts2 > Math.round(22 * FT * FB)) { ctx.font = `600 ${ts2}px ${serif}`; if (ctx.measureText(toName).width <= tiw) break; ts2 -= Math.max(1, Math.round(2 * FT)); }
      ctx.font = `600 ${ts2}px ${serif}`;
      ctx.fillText(toName, TW / 2, TP + Math.round(132 * FT));
    }
    const stkBottom = stkHas && !stkSide && stkPos !== 'tl' && stkPos !== 'tr';
    const liftRoom = stkBottom ? Math.round(stkW * stkRatio()) + Math.round(30 * FT) : 0;
    const topRoom = TP + Math.round((toName ? 176 : 100) * FT), botRoom = TP + Math.round(70 * FT) + liftRoom;
    const room = TH - topRoom - botRoom;
    const verse = verseText();
    let nt = sc(String(note || '').trim());
    const ref = refText();
    let vs = Math.round(58 * FT * FB), vl, fixed, ns, nl, total;
    const vsMin = Math.round((orig ? 20 : 24) * FT);
    for (;;) {
      for (;;) {
        ctx.font = `600 ${vs}px ${serif}`;
        vl = wrapText(ctx, verse, tiw - (orig ? Math.round(vs * .7) : 0));
        if (vl.length <= (EN ? 9 : 7) || vs <= vsMin) break;
        vs -= Math.max(1, Math.round(3 * FT));
      }
      fixed = vs * .9 + vl.length * vs * 1.52 + Math.round(64 * FT) + (nt ? Math.round(86 * FT) : 0);
      ns = Math.min(Math.round(38 * FT * FB), Math.round(vs * .82)); nl = [];
      if (nt) {
        for (;;) {
          ctx.font = `${ns}px ${sans}`;
          nl = wrapText(ctx, nt, tiw);
          if (fixed + nl.length * ns * 1.76 <= room || ns <= Math.round(21 * FT)) break;
          ns -= Math.max(1, Math.round(2 * FT));
        }
      }
      total = fixed + (nt ? nl.length * ns * 1.76 : 0);
      if (total <= room || vs <= vsMin) break;   /* 所有模式：整塊放不下就先把經文縮小 */
      vs -= Math.max(1, Math.round(3 * FT));
    }
    if (nt && total > room + 1) {
      const fit = Math.floor((room - fixed) / (ns * 1.76));
      if (fit < 1) { nt = ''; nl = []; total = fixed - Math.round(86 * FT); cardOverflow = 'note'; }   /* 連一行都放不下：整段領受省略，絕不壓到署名 */
      else if (nl.length > fit) {
        nl = nl.slice(0, fit); let last = nl[fit - 1]; ctx.font = `${ns}px ${sans}`;
        while (last.length > 1 && ctx.measureText(last + '…').width > tiw) last = last.slice(0, -1);
        nl[fit - 1] = last.replace(/[，。、；：,.;:\s]+$/, '') + '…';
        total = fixed + nl.length * ns * 1.76; cardOverflow = 'note';
      }
    }
    if (total > room + 1) cardOverflow = 'verse';
    let y = topRoom + Math.max(0, (room - total) / 2);
    const vh = vs * .9 + vl.length * vs * 1.52 + Math.round(64 * FT), nh = total - vh;
    let vx = 0, vy = 0, nx = 0, ny = 0;
    if (orig) {
      const mg = Math.round(12 * F);
      const clampMv = (dx, dy, top, hh) => {
        const x1 = -(TX + TP) + mg, x2 = W - (TX + TW - TP) - mg;
        const y1 = -(TY + top) + mg, y2 = H - (TY + top + hh) - mg;
        return [Math.max(x1 / W, Math.min(x2 / W, dx)), Math.max(y1 / H, Math.min(y2 / H, dy))];
      };
      if (origSplit && nt) {
        let r1 = clampMv(origDX, origDY, y, vh); origDX = r1[0]; origDY = r1[1];
        let r2 = clampMv(origNX, origNY, y + vh, nh); origNX = r2[0]; origNY = r2[1];
        nx = origNX * W; ny = origNY * H;
      } else {
        let r1 = clampMv(origDX, origDY, y, total); origDX = r1[0]; origDY = r1[1];
        origNX = origDX; origNY = origDY; nx = origDX * W; ny = origDY * H;
      }
      vx = origDX * W; vy = origDY * H;
    }
    ctx.save(); ctx.translate(vx, vy);
    ctx.fillStyle = Tp.accent; ctx.font = `600 ${vs}px ${serif}`;
    y += vs * .9;
    vl.forEach(l => { ctx.fillText(l, TW / 2, y); y += vs * 1.52; });
    ctx.font = `${Math.min(Math.round(30 * FT), Math.round(vs * .85))}px ${sans}`; ctx.fillStyle = Tp.accent;
    if (ref) ctx.fillText(ref, TW / 2, y);
    y += Math.round(64 * FT);
    ctx.restore();
    if (nt) {
      ctx.save(); ctx.translate(nx, ny);
      ctx.fillStyle = Tp.gold;
      ctx.beginPath(); ctx.arc(TW / 2, y, Math.round(5 * FT), 0, 7); ctx.fill();
      ctx.strokeStyle = Tp.gold; ctx.lineWidth = 2.5 * FT;
      ctx.beginPath(); ctx.moveTo(TW / 2 - 52 * FT, y); ctx.lineTo(TW / 2 - 16 * FT, y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(TW / 2 + 16 * FT, y); ctx.lineTo(TW / 2 + 52 * FT, y); ctx.stroke();
      y += Math.round(86 * FT);
      ctx.textAlign = 'left'; ctx.fillStyle = Tp.ink; ctx.font = `${ns}px ${sans}`;
      nl.forEach(l => { ctx.fillText(l, TP, y); y += ns * 1.76; });
      ctx.textAlign = 'center';
      ctx.restore();
    }
    const lift = stkBottom ? Math.round(stkW * stkRatio()) + Math.round(16 * FT) : 0;
    ctx.textAlign = 'center'; ctx.fillStyle = Tp.sub;
    const sign = signText();
    let ss = Math.round(25 * FT * FB);
    while (ss > Math.round(15 * FT * FB)) { ctx.font = `600 ${ss}px ${sans}`; if (ctx.measureText(sign).width <= tiw) break; ss -= 2; }
    ctx.font = `600 ${ss}px ${sans}`;
    ctx.fillText(sign, TW / 2, TH - TP * .72 - Math.round(24 * FT) - lift);
    ctx.restore();
    if (stkHas) {
      const sw = stkW, sh = Math.round(sw * stkRatio());
      const top = stkPos === 'tl' || stkPos === 'tr';
      const bx = (stkPos === 'bl' || stkPos === 'tl') ? pad - 4 * F : (stkPos === 'bc') ? Math.round((W - sw) / 2) : W - pad - sw + 4 * F;
      const by = top ? pad + Math.round(70 * F) : H - pad - sh + 4 * F;
      ctx.save();
      ctx.translate(bx + sw / 2, by + sh / 2);
      ctx.rotate((stkShape === 'w' ? -1.4 : -3) * Math.PI / 180);
      ctx.shadowColor = 'rgba(0,0,0,.30)'; ctx.shadowBlur = Math.round(24 * F); ctx.shadowOffsetY = Math.round(9 * F);
      const fr = Math.round(10 * F), pb = (stkShape === 'p') ? Math.round(26 * F) : fr;
      rr(ctx, -sw / 2, -sh / 2, sw, sh, Math.round(10 * F)); ctx.fillStyle = '#FDFBF6'; ctx.fill();
      ctx.shadowColor = 'transparent';
      const iw2 = sw - fr * 2, ih2 = sh - fr - pb;
      ctx.save(); rr(ctx, -sw / 2 + fr, -sh / 2 + fr, iw2, ih2, Math.round(4 * F)); ctx.clip();
      coverDraw2(ctx, stkImg, -sw / 2 + fr, -sh / 2 + fr, iw2, ih2); ctx.restore();
      ctx.restore();
    }
  }
  function drawSelfie(cx, vid, W, H, F) {
    if (!vid || !vid.videoWidth) return;
    const pad = Math.round(Math.min(W, H) * .085), R = Math.round(Math.min(W, H) * 0.115);
    const cxx = W - pad - R + 4 * F, cyy = H - pad - R + 4 * F;
    cx.save();
    cx.shadowColor = 'rgba(0,0,0,.28)'; cx.shadowBlur = Math.round(22 * F); cx.shadowOffsetY = Math.round(8 * F);
    cx.beginPath(); cx.arc(cxx, cyy, R, 0, 7); cx.fillStyle = '#000'; cx.fill();
    cx.restore();
    cx.save(); cx.beginPath(); cx.arc(cxx, cyy, R, 0, 7); cx.clip();
    const vw = vid.videoWidth, vh = vid.videoHeight, side = Math.min(vw, vh);
    cx.translate(cxx, cyy); cx.scale(-1, 1);
    cx.drawImage(vid, (vw - side) / 2, (vh - side) / 2, side, side, -R, -R, R * 2, R * 2);
    cx.restore();
    cx.beginPath(); cx.arc(cxx, cyy, R, 0, 7);
    cx.lineWidth = Math.max(3, W * .006); cx.strokeStyle = '#F4EFE3'; cx.stroke();
    cx.beginPath(); cx.arc(cxx, cyy, R + 4 * F, 0, 7);
    cx.lineWidth = Math.max(2, W * .003); cx.strokeStyle = 'rgba(212,166,91,.85)'; cx.stroke();
  }

  /* ── 我的相片庫（IndexedDB，最多 40 張；進美圖自動接回上次那張）── */
  const PLIB_MAX = 40;
  let pdb = null, plRestored = false;
  function plOpen() {
    return new Promise((res, rej) => {
      if (pdb) return res(pdb);
      try {
        const q = indexedDB.open(GX.BK.slug + (EN ? '_photos_en' : '_photos'), 1);
        q.onupgradeneeded = e => e.target.result.createObjectStore('p', { keyPath: 'id' });
        q.onsuccess = e => { pdb = e.target.result; res(pdb); };
        q.onerror = () => rej(q.error);
      } catch (e) { rej(e); }
    });
  }
  const plReq = r => new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  async function plAll() {
    try { const db = await plOpen(); return (await plReq(db.transaction('p').objectStore('p').getAll())).sort((a, b) => b.ts - a.ts); }
    catch (e) { return []; }
  }
  async function plSave(img, by) {
    try {
      const db = await plOpen();
      const mk = (max, q, url) => new Promise(r => {
        const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.width * k)); c.height = Math.max(1, Math.round(img.height * k));
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        if (url) r(c.toDataURL('image/jpeg', q)); else c.toBlob(b => r(b), 'image/jpeg', q);
      });
      const pair = await Promise.all([mk(1600, .88, false), mk(260, .72, true)]);
      const id = 'p' + Date.now();
      await plReq(db.transaction('p', 'readwrite').objectStore('p').put({ id, ts: Date.now(), blob: pair[0], thumb: pair[1], by: by || '', w: img.width, h: img.height }));
      const all = await plAll();
      for (const o of all.slice(PLIB_MAX)) await plReq(db.transaction('p', 'readwrite').objectStore('p').delete(o.id));
      if (photoMode !== 'sticker') { st().photoLast = id; st().photoMode = photoMode; keep(); }
    } catch (e) {}
  }
  async function plLoad(rec) {
    const url = URL.createObjectURL(rec.blob);
    try {
      const im = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('decode')); i.src = url; });
      setPhoto(im, rec.by || '');
      if (photoMode !== 'sticker') { st().photoLast = rec.id; keep(); }
      return true;
    } finally { setTimeout(() => { try { URL.revokeObjectURL(url); } catch (_) {} }, 30000); }
  }
  async function plRestore() {
    if (plRestored || photoImg || !st().photoLast) return;
    plRestored = true;
    try {
      const db = await plOpen();
      const rec = await plReq(db.transaction('p').objectStore('p').get(st().photoLast));
      if (rec) { photoMode = st().photoMode || 'full'; await plLoad(rec); }
    } catch (e) {}
  }

  /* ── 預覽 ───────────────────────────────────────────────────── */
  let cardURL = '', cardOverflow = '';   /* v2.62：''／'note'（領受放不下已省略或縮短）／'verse'（經文縮到最小仍放不下） */
  let cardMime = 'image/png';
  /* 相片當背景時，遮罩強度依相片上／中／下三段最壞的亮度決定，讓字的對比 >= 5:1（v2.62.0） */
  const relLum = (r, g, b) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const hexRGB = h => { h = String(h).replace('#', ''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) || 0); };
  function scrimAlphas(img, Tp, bg) {
    const base = [.46, .66, .56], out = base.slice();
    try {
      const c = document.createElement('canvas'); c.width = 8; c.height = 12;
      const x = c.getContext('2d'); coverDraw2(x, img, 0, 0, 8, 12);
      const d = x.getImageData(0, 0, 8, 12).data, inkL = relLum.apply(null, hexRGB(Tp.ink));
      for (let b = 0; b < 3; b++) {
        const cells = [];
        for (let row = b * 4; row < b * 4 + 4; row++) for (let col = 0; col < 8; col++) { const i = (row * 8 + col) * 4; cells.push([d[i], d[i + 1], d[i + 2]]); }
        let a = base[b];
        for (; a < .9; a += .03) {
          let worst = 99;
          for (const p of cells) {
            const Lm = relLum(p[0] * (1 - a) + bg[0] * a, p[1] * (1 - a) + bg[1] * a, p[2] * (1 - a) + bg[2] * a);
            worst = Math.min(worst, (Math.max(Lm, inkL) + .05) / (Math.min(Lm, inkL) + .05));
          }
          if (worst >= 5) break;
        }
        out[b] = +Math.min(.9, a).toFixed(2);
      }
    } catch (e) {}
    return out;
  }
  function renderCard() {
    if (!item) return;
    clearTimeout(rendering);
    rendering = setTimeout(() => {
      const d = dims(), cv = document.createElement('canvas');
      try { drawCard(cv, d[0], d[1]); cardURL = cv.toDataURL('image/png'); } catch (e) { cardURL = ''; }
      const pv = q1('#gxsPv');
      if (pv && cardURL) { pv.src = cardURL; pv.style.aspectRatio = d[0] + ' / ' + d[1]; }
      warnPaint();
    }, 40);
  }
  /* v2.63.0：有相片的卡片輸出 JPEG .92（檔案小很多），純色維持 PNG 保持銳利 */
  function cardBlob() {
    const d = dims(), cv = document.createElement('canvas');
    drawCard(cv, d[0], d[1]);
    cardMime = (photoImg || stkImg) ? 'image/jpeg' : 'image/png';
    return new Promise(r => {
      try { cv.toBlob(b => r(b), cardMime, .92); }
      catch (e) { r(null); }
    });
  }
  const cardExt = () => cardMime === 'image/jpeg' ? '.jpg' : '.png';
  function warnPaint() {
    const el = q1('#cardWarn'); if (!el) return;
    el.style.display = cardOverflow ? '' : 'none';
    if (cardOverflow) el.textContent = cardOverflow === 'note'
      ? T('⚠️ 這張卡片放不下全部的領受文字，已先縮短；想完整呈現，可改選較高的尺寸（直式 9:16）或把領受寫短一點。', '⚠️ The note does not fit and was shortened. Choose a taller size (Portrait 9:16) or write a shorter note.')
      : T('⚠️ 經文比較長，字已縮到最小；建議改選直式 9:16，或只選一兩節。', '⚠️ The verse is long and already at the smallest size. Try Portrait 9:16 or pick less text.');
  }
  /* v2.63.0 一鍵調整：依序試幾組尺寸／字級，挑第一組放得下的 */
  function cardAutoFit() {
    if (isFull()) return T('整張原圖的版面請在上面調整文字大小', 'For a full photo, adjust the text size above');
    const g = st(), cands = [['t', 1.2], ['t', 1], ['p', 1.2], ['p', 1], ['p', .9]];
    const sz0 = g.size, fs0 = g.fs; let pick = cands[cands.length - 1];
    for (const c of cands) {
      g.size = c[0]; g.fs = c[1];
      const d = dims(), cv = document.createElement('canvas');
      drawCard(cv, Math.round(d[0] / 2), Math.round(d[1] / 2));
      if (!cardOverflow) { pick = c; break; }
    }
    g.size = pick[0]; g.fs = pick[1];
    if (sz0 === pick[0] && fs0 === pick[1]) return T('目前的尺寸與字級已經合適', 'Current size and text size already fit');
    return T('已選「', 'Chose “') + L2(SIZES[pick[0]][2]) + T('」與合適字級', '” and a fitting text size');
  }
  const fileBase = () => (EN ? GX.BK.en.toLowerCase().replace(/\s+/g, '') : '321' + GX.BK.zh) + '-' + String(item && item.ref || 'card').replace(/[\\/:*?"<>|\s]+/g, '');

  /* ── 相片 ───────────────────────────────────────────────────── */
  function loadImg(url, cors) {
    return new Promise((res, rej) => {
      const i = new Image();
      if (cors) i.crossOrigin = 'anonymous';
      i.onload = () => res(i);
      i.onerror = () => rej(new Error('img'));
      i.src = url;
    });
  }
  async function setPhotoURL(url, by) {
    say(T('載入相片中…', 'Loading photo…'));
    try {
      const r = await fetch(url, { mode: 'cors' });
      if (!r.ok) throw new Error('http ' + r.status);
      const b = await r.blob();
      const o = URL.createObjectURL(b);
      const im = await loadImg(o, false);
      setPhoto(im, by || ''); plSave(im, by || '');
      setTimeout(() => { try { URL.revokeObjectURL(o); } catch (e) {} }, 30000);
      paint();
      say(T('已選好這張相片', 'Photo selected'));
    } catch (e) {
      try { const im = await loadImg(url, true); setPhoto(im, by || ''); paint(); }
      catch (e2) {
        if (url.indexOf(SITE) === 0 && url.indexOf(SITE + 'bg/') !== 0) return setPhotoURL(SITE + 'bg/' + url.slice(SITE.length), by);
        say(T('這張相片載入失敗，請換一張', 'Could not load this photo — try another'));
      }
    }
  }
  function pickOwn() {
    const i = document.createElement('input');
    i.type = 'file'; i.accept = 'image/*'; i.style.cssText = 'position:fixed;left:-9999px';
    i.onchange = () => {
      const f = i.files && i.files[0]; i.remove();
      if (!f) return;
      const r = new FileReader();
      r.onload = async () => {
        try { const im = await loadImg(String(r.result), false); setPhoto(im, ''); plSave(im, ''); paint(); }
        catch (e) { say(T('這張相片讀不出來', 'Could not read this photo')); }
      };
      r.readAsDataURL(f);
    };
    document.body.appendChild(i); i.click();
  }
  async function bgLoad() {
    if (bgList) return bgList;
    const r = await fetch(SITE + 'bg.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error('http ' + r.status);
    const d = await r.json();
    bgList = { cats: (d.cats || []), list: (d.list || []) };
    bgList.cats = bgList.cats.filter(c => bgList.list.some(x => x.c === c.id));
    return bgList;
  }
  const bgName = x => EN ? (x.ne || x.n) : (isSC() ? (x.ns || x.n) : x.n);
  async function pxFetch(reset) {
    if (pxS.busy) return;
    pxS.busy = true;
    if (reset) { pxS.page = 1; pxS.items = []; pxS.end = false; }
    const q = pxS.q.trim(), s = st().size;
    const orient = s === 'w' || s === 'f' ? 'landscape' : (s === 's' ? 'square' : 'portrait');
    const url = (q ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=${orient}&`
      : 'https://api.pexels.com/v1/curated?') + `per_page=24&page=${pxS.page}`;
    try {
      const r = await fetch(url, { headers: { Authorization: PEXELS_KEY } });
      if (!r.ok) throw new Error('http ' + r.status);
      const d = await r.json();
      const got = (d && d.photos) || [];
      pxS.items = pxS.items.concat(got); pxS.end = got.length < 24; pxS.page++;
    } catch (e) { say(T('連不上圖庫，請稍後再試', 'Could not reach the photo library')); }
    pxS.busy = false;
  }
  const PX_PRE = EN
    ? [['Landscape', 'landscape'], ['Sunrise', 'sunrise'], ['Sky', 'sky'], ['Ocean', 'ocean'], ['Mountain', 'mountain'], ['Flowers', 'flowers'], ['Light', 'light rays'], ['Tree', 'tree'], ['Path', 'path'], ['Wheat', 'wheat field'], ['Water', 'calm water'], ['Clouds', 'clouds'], ['Mist', 'morning mist'], ['Stars', 'starry sky'], ['Desert', 'desert'], ['Cross', 'cross']]
    : [['風景', 'landscape'], ['日出', 'sunrise'], ['天空', 'sky'], ['海', 'ocean'], ['山', 'mountain'], ['花', 'flowers'], ['光', 'light rays'], ['樹', 'tree'], ['小路', 'path'], ['麥田', 'wheat field'], ['水', 'calm water'], ['雲', 'clouds'], ['晨霧', 'morning mist'], ['星空', 'starry sky'], ['曠野', 'desert'], ['十字架', 'cross']];

  /* ── 小智寫祝福、改一改 ─────────────────────────────────────── */
  function amenOnly(s) {
    return String(s || '')
      .replace(/[，,、\s]*(奉|靠著?)\s*(主\s*)?(耶穌|耶稣)(基督)?\s*(的)?\s*(名|聖名|圣名)\s*(禱告|祷告|祈求|求|祈禱|祈祷)?[，,。\s]*/g, '，')
      .replace(/[,;]?\s*(?:in|through)\s+(?:the\s+)?(?:(?:holy|precious|mighty)\s+)?name\s+of\s+(?:the\s+)?(?:Lord\s+)?Jesus(?:\s+Christ)?(?:\s+(?:we|I)\s+(?:pray|ask))?[,.]?/gi, '')
      .replace(/[,;]?\s*(?:in|through)\s+(?:the\s+Lord\s+)?Jesus(?:\s+Christ)?['’]s?\s+(?:holy\s+)?name(?:\s+(?:we|I)\s+(?:pray|ask))?[,.]?/gi, '')
      .replace(/([A-Za-z])\s+(Amen)\b/g, '$1. $2')
      .replace(/([。！？!?.])\s*[，,]\s*/g, '$1').replace(/^[，,\s]+/, '').replace(/\s{2,}/g, ' ').trim();
  }
  function amenBang(s) {
    s = String(s || '').trim();
    if (/(阿們|阿门)[。！!]?$/.test(s)) return s.replace(/(阿們|阿门)[。！!]?$/, '$1！').replace(/[，,]\s*(阿們|阿门)！$/, '。$1！').replace(/[。．.]{2,}/g, '。');
    if (/amen[.!]?$/i.test(s)) return s.replace(/amen[.!]?$/i, 'Amen!');
    return s;
  }
  const whoLine = () => {
    const w = toVal();
    return w ? T(`\n這段話是寫給「${w}」的，請直接對他說話，但不要再寫一次稱呼。`, `\nThis is written for "${w}" — speak directly to them, but do not repeat the greeting.`) : '';
  };
  async function blessWrite() {
    if (busy || !item) return;
    busy = true; paint();
    const full = isFull();
    const sys = full
      ? T('你是「小智」，國度321空中團契的屬靈同伴。請照使用者給的這段經文，寫一兩句很短的祝福送給弟兄姊妹：總共一到兩句、50字以內，口語、溫暖，從這段經文所顯明的神的心意出發。不要標題、不要引號、不要再抄一次經文、不要表情符號。祝福結尾只用「阿們」，不要寫「奉主耶穌的名禱告」。',
          'You are Xiaozhi, a spiritual companion from Kingdom 321 Online Fellowship. From the passage the user gives you, write a very short blessing for a brother or sister: one or two sentences, under 35 words, warm and spoken, drawn from what this passage shows of God. No headings, no quotation marks, do not quote the passage again, no emoji. End with just "Amen" — do not write "in the name of Jesus we pray".')
      : T('你是「小智」，國度321空中團契的屬靈同伴。請照使用者給的這段經文，寫一段溫暖的關懷祝福，送給弟兄姊妹。要求：先用一兩句點出這段經文裡神的心意，再寫一句貼近生活的祝福，最後用一句祝福收尾。總共三到四句、120 字以內，口語、溫暖、不說教，不要標題、不要條列、不要引號、不要再抄一次經文。祝福結尾只用「阿們」，不要寫「奉主耶穌的名禱告」。',
          'You are Xiaozhi, a spiritual companion from Kingdom 321 Online Fellowship. From the passage the user gives you, write a short, warm word of encouragement for a brother or sister. First name in one or two sentences what this passage shows of God’s heart, then one sentence that touches ordinary daily life, then close with a blessing. Three to four sentences, under 60 words. Warm and spoken, never preachy. No headings, no bullet points, no quotation marks, and do not quote the passage again. End with just "Amen" — do not write "in the name of Jesus we pray".');
    const own = String(blessOwn || '').trim();
    const ask = T('經文：', 'Passage: ') + item.t + (item.ref ? '（' + item.ref + '）' : '') + whoLine() + GX.A().write + T('\n不要用表情符號。', '\nNo emoji.')
      + (own ? T('\n\n使用者自己想說的話（請把這個意思自然融入祝福，仍要依經文來寫）：', '\n\nThe user’s own words (weave this in naturally, still grounded in the passage): ') + own : '');
    const r = await GX.aiRaw(sys, ask, 60000, 600);
    busy = false;
    const out = amenBang(amenOnly(String(r.out || '').replace(/[*#>`]/g, '').replace(/^「|」$/g, '').trim()));
    if (out) { if (full) fullBless = out.replace(/\s*\n+\s*/g, EN ? ' ' : ''); else note = out; say(T('小智寫好了，可以再改', 'Done — you can still edit it')); }
    else say(T('小智連不上', 'Xiaozhi could not connect') + (r.why ? '（' + r.why + '）' : ''));
    paint();
  }
  const TW_PICKS = EN ? ['Shorter', 'Longer', 'Warmer', 'More everyday', 'Stronger', 'Say it another way'] : ['短一點', '長一點', '更溫暖', '口語一點', '更有力', '換個說法'];
  async function tweak(instr) {
    if (busy || !item) return;
    const cur = String(isFullV() ? fullBless : note || '').trim();
    if (!cur) { say(T('內文還是空的——先自己寫一段，或請小智寫一段再來改。', 'The text is empty — write something first, or ask Xiaozhi to write it.')); return; }
    busy = true; paint();
    const sys = T('你是「小智」，國度321空中團契的屬靈同伴。請照使用者的要求，修改他給你的這段祝福。只回傳改好的內文本身——不要解釋、不要標題、不要條列、不要引號、不要再抄一次經文。保持溫暖、口語、不說教。祝福結尾只用「阿們」，不要寫「奉主耶穌的名禱告」。',
      'You are Xiaozhi from Kingdom 321 Online Fellowship. Rewrite the short blessing the user gives you, following their instruction. Return ONLY the rewritten text — no explanation, no heading, no bullet points, no quotation marks, and do not quote the passage again. Keep it warm and spoken, never preachy. Close with just "Amen" — do not write "in the name of Jesus we pray".');
    const ask = T('經文：', 'Passage: ') + item.t + (item.ref ? '（' + item.ref + '）' : '') + whoLine() + GX.A().write
      + T('\n\n目前的內文：\n', '\n\nCurrent text:\n') + cur + T('\n\n要怎麼改：', '\n\nHow to change it: ') + instr;
    const r = await GX.aiRaw(sys, ask, 60000, 600);
    busy = false;
    const out = amenBang(amenOnly(String(r.out || '').replace(/[*#>`]/g, '').replace(/^「|」$/g, '').trim()));
    if (out) { if (isFullV()) fullBless = out.replace(/\s*\n+\s*/g, EN ? ' ' : ''); else note = out; say(T('改好了', 'Rewritten')); }
    else say(T('小智連不上', 'Xiaozhi could not connect') + (r.why ? '（' + r.why + '）' : ''));
    paint();
  }

  /* ── 詩歌庫 ─────────────────────────────────────────────────── */
  async function hymnList() {
    if (hymns) return hymns;
    const r = await fetch(SITE + 'music.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error('http ' + r.status);
    const d = await r.json();
    hymns = Array.isArray(d) ? d : ((d && d.songs) || []);
    return hymns;
  }
  const songName = s => EN ? (s.ne || s.n) : (isSC() ? (s.ns || s.n) : s.n);
  function hymnAudio() {
    if (hymnEl) return hymnEl;
    hymnEl = document.createElement('audio');
    hymnEl.preload = 'auto'; hymnEl.playsInline = true;
    hymnEl.setAttribute('playsinline', ''); hymnEl.setAttribute('webkit-playsinline', '');
    hymnEl.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none';
    GXA_root().appendChild(hymnEl);
    return hymnEl;
  }
  function hymnStop() { if (hymnEl) { try { hymnEl.pause(); } catch (e) {} } hymnPrev = null; qa('.gxhp').forEach(b => b.textContent = '▶'); }
  function hymnPlay(i) {
    const s = hymns && hymns[i]; if (!s) return;
    const a = hymnAudio();
    if (hymnPrev === i) { hymnStop(); return; }
    hymnStop();
    const base = songBase[s.f] != null ? songBase[s.f] : '';
    a.src = SITE + base + encodeURIComponent(s.f);
    const p = a.play(); if (p && p.catch) p.catch(() => {
      if (base === '') { a.src = SITE + 'music/' + encodeURIComponent(s.f); const p2 = a.play(); if (p2 && p2.catch) p2.catch(() => say(T('這首歌暫時放不出來', 'This song could not play'))); }
    });
    hymnPrev = i;
    const b = q1('#gxhp' + i); if (b) b.textContent = '⏸';
  }
  async function hymnFetch(s) {
    const tries = songBase[s.f] != null ? [songBase[s.f]] : ['', 'music/'];
    let why = '';
    for (const b of tries) {
      try {
        const r = await fetch(SITE + b + encodeURIComponent(s.f), { mode: 'cors' });
        if (!r.ok) { why = 'HTTP ' + r.status; continue; }
        const blob = await r.blob();
        if (!blob.size || /text\/html/.test(blob.type || '')) { why = T('檔案不對', 'bad file'); continue; }
        songBase[s.f] = b;
        return blob;
      } catch (e) { why = T('網路', 'network'); }
    }
    throw new Error(why || 'fail');
  }
  async function hymnPick(i) {
    const s = hymns && hymns[i]; if (!s) return;
    hymnStop();
    say(T('下載詩歌中…', 'Downloading…'));
    try {
      bgmBlob = await hymnFetch(s);
      bgmName = songName(s);
      bgmCredit = T('詩歌：', 'Music: ') + songName(s) + (s.by ? (EN ? ' / ' : '／') + s.by : '');
      say(T('已選好配樂：', 'Music selected: ') + bgmName);
      closeSub(); paint();
    } catch (e) { say(T('這首詩歌下載失敗（', 'Could not download this song (') + e.message + T('）', ')')); }
  }
  function pickBgmFile() {
    const i = document.createElement('input');
    i.type = 'file'; i.accept = 'audio/*,video/*,.mp3,.m4a,.aac,.wav,.aif,.aiff,.caf,.flac,.ogg,.opus,.mp4,.mov,.webm';
    i.style.cssText = 'position:fixed;left:-9999px';
    i.onchange = () => {
      const f = i.files && i.files[0]; i.remove();
      if (!f) return;
      if (f.size > 25 * 1024 * 1024) { say(T('檔案太大（上限 25MB）', 'File too large (max 25 MB)')); return; }
      bgmBlob = f; bgmName = f.name; bgmCredit = '';
      say(T('已選好配樂：', 'Music selected: ') + f.name); paint();
    };
    document.body.appendChild(i); i.click();
  }

  /* ── 小面板（圖庫、Pexels、詩歌庫） ─────────────────────────── */
  function closeSub() { const m = q1('#gxsSub'); if (m) m.remove(); hymnStop(); }
  function sub(title, inner) {
    closeSub();
    const m = document.createElement('div'); m.id = 'gxsSub'; m.className = 'gxsmask';
    m.innerHTML = `<div class="gxscard"><div class="gxshead"><b>${esc(title)}</b><button class="ico" data-k="subx">✕</button></div><div id="gxsSubB">${inner}</div></div>`;
    m.addEventListener('click', e => { if (e.target === m || (e.target.getAttribute && e.target.getAttribute('data-k') === 'subx')) closeSub(); });
    GXA_root().appendChild(m);
    return q1('#gxsSubB', m);
  }
  async function openGallery() {
    const b = sub(T('內建圖庫', 'Built-in gallery'), `<p class="sm muted">${esc(T('載入中…', 'Loading…'))}</p>`);
    try { await bgLoad(); } catch (e) { b.innerHTML = `<p class="sm muted">${esc(T('圖庫連不上，請稍後再試', 'Could not reach the gallery'))}</p>`; return; }
    const draw = () => {
      const cat = bgList.cats.some(c => c.id === st().bgCat) ? st().bgCat : (bgList.cats[0] || {}).id;
      b.innerHTML = `<div class="gxchips">${bgList.cats.map(c => `<button class="${c.id === cat ? 'on' : ''}" data-c="${esc(c.id)}">${esc(bgName(c))}</button>`).join('')}</div>
        <div class="gxgrid">${bgList.list.map((x, i) => x.c !== cat ? '' : `<button class="gxcell" data-i="${i}"><img src="${SITE + esc(x.t || x.f)}" alt="" loading="lazy" data-alt="${esc(x.t && x.t !== x.f ? SITE + x.f + '|' : '')}${SITE}bg/${esc(x.t || x.f)}" onerror="GXS.thumbErr(this)"><span>${esc(bgName(x))}</span></button>`).join('')}</div>
        <p class="xs muted">${esc(T('圖片與《321互動聖經》共用同一個圖庫。', 'Shared with the 321 Interactive Bible gallery.'))}</p>`;
      qa('[data-c]', b).forEach(x => x.onclick = () => { st().bgCat = x.getAttribute('data-c'); keep(); draw(); });
      qa('.gxcell', b).forEach(x => x.onclick = async () => {
        const it = bgList.list[+x.getAttribute('data-i')]; if (!it) return;
        closeSub(); await setPhotoURL(SITE + it.f, '');
      });
    };
    draw();
  }
  function openPexels() {
    const b = sub(T('Pexels 免費圖庫', 'Pexels free photos'), `
      <div class="gxbar"><input id="pxQ" placeholder="${esc(T('想找什麼樣的畫面…', 'What kind of picture…'))}" value="${esc(pxS.q)}"><button class="btn pri" id="pxGo">${esc(T('搜尋', 'Search'))}</button></div>
      <div class="gxchips">${PX_PRE.map(p => `<button data-q="${esc(p[1])}">${esc(p[0])}</button>`).join('')}</div>
      <div class="gxgrid" id="pxGrid"></div>
      <div class="row" style="margin-top:10px"><button class="btn" id="pxMore">${esc(T('再多一些', 'More'))}</button></div>
      <p class="xs muted">${esc(T('照片來自 Pexels，免費可商用；卡片角落會印上攝影師名字。', 'Photos from Pexels, free to use; the photographer is credited on the card.'))}</p>`);
    const grid = q1('#pxGrid', b);
    const draw = () => {
      if (!pxS.items.length) { grid.innerHTML = `<p class="sm muted" style="grid-column:1/-1">${esc(pxS.busy ? T('載入中…', 'Loading…') : T('找不到相符的照片，換個字試試', 'Nothing found — try another word'))}</p>`; return; }
      grid.innerHTML = pxS.items.map((p, i) => `<button class="gxcell" data-i="${i}"><img src="${esc((p.src && (p.src.tiny || p.src.small)) || '')}" alt="" loading="lazy"><span>${esc(p.photographer || '')}</span></button>`).join('');
      qa('.gxcell', grid).forEach(x => x.onclick = async () => {
        const p = pxS.items[+x.getAttribute('data-i')]; if (!p) return;
        closeSub();
        await setPhotoURL((p.src && (p.src.large2x || p.src.large || p.src.original)) || '', p.photographer || '');
      });
      const mb = q1('#pxMore', b); if (mb) mb.style.display = pxS.end ? 'none' : '';
    };
    const run = async reset => { grid.innerHTML = `<p class="sm muted" style="grid-column:1/-1">${esc(T('載入中…', 'Loading…'))}</p>`; await pxFetch(reset); draw(); };
    q1('#pxGo', b).onclick = () => { pxS.q = q1('#pxQ', b).value; run(true); };
    q1('#pxQ', b).onkeydown = e => { if (e.key === 'Enter' && !e.isComposing) { pxS.q = e.target.value; run(true); } };
    qa('[data-q]', b).forEach(x => x.onclick = () => { pxS.q = x.getAttribute('data-q'); q1('#pxQ', b).value = pxS.q; run(true); });
    q1('#pxMore', b).onclick = () => run(false);
    if (pxS.items.length) draw(); else run(true);
  }
  /* ══ v1.3（2026-10-19）：AI 生圖、AI 配樂、內建字體與文字顏色、相機打不開的說明
     照《321互動聖經》v2.19–v2.20；沒有 AI 影片（主耀已要求刪除）。
     離開 App 去第三方工具的流程，一律先存「經文＋狀態」到 localStorage（key 含書卷代號），回來自動接回。 ══ */
  const TS = (zh, en) => sc(T(zh, en));
  const BKEY = String((window.GX_BOOK && window.GX_BOOK.slug) || (location.pathname.split('/')[1] || 'bk'));
  const RKEY = k => 'gx_' + k + '_resume_' + BKEY;
  const lsPut = (k, o) => { try { localStorage.setItem(RKEY(k), JSON.stringify(o)); } catch (e) {} };
  const lsTake = k => { let o = null; try { o = JSON.parse(localStorage.getItem(RKEY(k)) || 'null'); localStorage.removeItem(RKEY(k)); } catch (e) {} return o; };
  const itemSnap = () => item ? { t: item.t, ref: item.ref, n0: item.n0, plain: item.plain } : null;
  const isFramed = () => { try { return window.top !== window.self; } catch (e) { return true; } };
  const inAppBrowser = () => /Line\/|FBAN|FBAV|Instagram|MicroMessenger|Messenger|Telegram|MQQBrowser|Snapchat|TikTok|WhatsApp/i.test(navigator.userAgent || '');
  const copyText = async (ta) => {
    try { await navigator.clipboard.writeText(ta.value); }
    catch (e) { try { ta.focus(); ta.select(); document.execCommand('copy'); } catch (_) {} }
  };
  const copyQuiet = (txt) => { try { const q = navigator.clipboard.writeText(txt); if (q && q.catch) q.catch(() => {}); } catch (e) {} };
  const E2 = a => esc(sc(L2(a)));
  const chipRow2 = (id, arr, cur) => `<div class="gxchips" id="${id}">` + arr.map(x => `<button data-v="${x[0]}" class="${x[0] === cur ? 'on' : ''}">${E2(x[1])}</button>`).join('') + '</div>';
  const toolLinks = (arr, attr) => arr.map(x => `<a class="btn" ${attr}="1" style="display:block;margin-top:6px;text-align:left;text-decoration:none" target="_blank" rel="noopener" href="${x[0]}">${esc(x[1])}<span class="xs muted" style="margin-left:8px">${esc(sc(L2(x[2])))}</span></a>`).join('');

  /* ── AI 生圖 ── */
  const AIG_STYLES = [
    ['sc', ['風景', 'Landscape'], 'majestic natural landscape, golden hour light, soft clouds, serene and peaceful'],
    ['wc', ['水彩', 'Watercolor'], 'soft watercolor painting, gentle pastel colors, dreamy and hopeful'],
    ['oil', ['油畫', 'Oil painting'], 'classic oil painting, rich warm colors, reverent atmosphere'],
    ['lt', ['光影', 'Heavenly light'], 'rays of heavenly light breaking through clouds, cinematic, glowing, holy atmosphere'],
    ['nt', ['星空', 'Starry night'], 'peaceful starry night sky, deep blue and gold, calm and awe-inspiring'],
    ['fl', ['花草', 'Flowers'], 'lush flowers and green pastures, morning dew, soft sunlight, gentle and fresh']
  ];
  const AIG_SHAPES = [['p', ['直式 9:16', 'Portrait 9:16'], 576, 1024, '9:16'], ['w', ['橫式 16:9', 'Landscape 16:9'], 1024, 576, '16:9'], ['s', ['方形', 'Square'], 1024, 1024, '1:1']];
  const AIG_TOOLS = () => [
    ['https://gemini.google.com/app', 'Google Gemini', ['免費、需 Google 帳號', 'Free, Google account']],
    ['https://chatgpt.com/', 'ChatGPT', ['免費版有每日張數限制、需登入', 'Free tier has a daily limit, sign-in']],
    ['https://www.doubao.com/chat/', T('豆包 Doubao', 'Doubao (豆包)'), ['免費、中文提示詞很好用（中國大陸常用）', 'Free; works well with Chinese prompts']],
    ['https://pollinations.ai/', 'Pollinations', ['免費、免註冊', 'Free, no sign-up']]
  ];
  let aigSt = 'sc', aigSh = 'p', aigNote = '', aigPr0 = '';
  function aigPrompt() {
    const s = AIG_STYLES.find(x => x[0] === aigSt) || AIG_STYLES[0];
    const sh = AIG_SHAPES.find(x => x[0] === aigSh) || AIG_SHAPES[0];
    const verse = item ? String(item.t || '').replace(/\s+/g, ' ').trim().slice(0, 160) : '';
    const theme = (aigNote || '').trim();
    return 'A beautiful, uplifting Christian inspirational background image, ' + s[2] + '. '
      + (theme ? 'Scene: ' + theme + '. ' : '')
      + (verse ? 'Mood inspired by this Bible verse: "' + verse + '". ' : '')
      + 'No text, no letters, no words, no watermark, no people\'s faces; leave calm open space for verse text. Aspect ratio ' + sh[4] + ', high quality.';
  }
  function aiSave(pr) { lsPut('ai', { ts: Date.now(), item: itemSnap(), note, st: aigSt, sh: aigSh, sc: aigNote, pr: pr || '' }); }
  function fileToPhoto(f) {
    const r = new FileReader();
    r.onload = async () => {
      try { const im = await loadImg(String(r.result), false); setPhoto(im, ''); plSave(im, ''); paint(); say(T('已選好這張相片', 'Photo selected')); }
      catch (e) { say(T('這張相片讀不出來', 'Could not read this photo')); }
    };
    r.readAsDataURL(f);
  }
  function openAiGen() {
    if (!item) return;
    const b = sub(TS('✨ 用 AI 生成美圖', '✨ Make a picture with AI'), `
      <p class="xs muted" style="line-height:1.6;margin:0 0 6px">${esc(TS('不用找圖：用文字描述想要的畫面，免費 AI 工具幫你畫。已依這節經文寫好提示詞，可以直接用，也可以改。', 'No need to search: describe the scene and a free AI tool draws it. A prompt based on this verse is ready — use it or edit it.'))}</p>
      <p class="gxlab">${esc(TS('畫風', 'Style'))}</p>${chipRow2('aigSt', AIG_STYLES, aigSt)}
      <p class="gxlab">${esc(TS('尺寸', 'Shape'))}</p>${chipRow2('aigSh', AIG_SHAPES, aigSh)}
      <p class="gxlab">${esc(TS('想要的畫面（選填，可用中文或英文）', 'Scene you want (optional)'))}</p>
      <input id="aigScene" placeholder="${esc(TS('例如：清晨的湖邊、牧羊人與羊群、橄欖樹下的光', 'e.g. a quiet lake at dawn, a shepherd and sheep'))}" value="${esc(aigNote)}">
      <p class="gxlab">${esc(TS('提示詞（可修改）', 'Prompt (editable)'))}</p>
      <textarea id="aigPr" rows="8" style="font-size:13px;line-height:1.5"></textarea>
      <div class="row" style="margin-top:10px"><button class="btn pri" id="aigGen">${esc(TS('⚡ 在 App 內直接生成（免費）', '⚡ Generate here (free)'))}</button><button class="btn" id="aigCopy">${esc(TS('📋 複製提示詞', '📋 Copy prompt'))}</button></div>
      <p class="xs muted" id="aigMsg" style="min-height:18px;margin:8px 0 0"></p>
      <p class="gxlab">${esc(TS('或到這些免費工具貼上提示詞（點進去會自動複製）', 'Or paste it into these free tools (tapping copies the prompt)'))}</p>
      ${toolLinks(AIG_TOOLS(), 'data-aitool')}
      <label class="btn pri" style="display:block;cursor:pointer;margin-top:12px;text-align:center">${esc(TS('🖼 圖畫好了：從相簿選這張圖', '🖼 Picture ready: choose it from Photos'))}<input type="file" accept="image/*" hidden id="aigBack"></label>
      <p class="xs muted" style="line-height:1.6;margin:10px 0 0">${esc(TS('生成後把圖存到相簿，再回到這裡按上面的按鈕選它就能用。AI 生成的圖每次都不同；圖上不要有字，經文由 App 排上去。', 'Save the result to your album, then choose it with the button above. Each result is different. The picture has no text — the app adds the verse.'))}</p>`);
    const pr = q1('#aigPr', b), msg = q1('#aigMsg', b);
    let edited = false;
    const fill = () => { if (!edited) pr.value = aigPrompt(); };
    fill(); if (aigPr0) { pr.value = aigPr0; edited = true; aigPr0 = ''; }
    pr.oninput = () => { edited = true; };
    const chipsBind = (id, set) => qa('#' + id + ' button', b).forEach(x => x.onclick = () => {
      set(x.getAttribute('data-v')); edited = false; fill();
      qa('#' + id + ' button', b).forEach(o => o.classList.toggle('on', o === x));
    });
    chipsBind('aigSt', v => { aigSt = v; }); chipsBind('aigSh', v => { aigSh = v; });
    const scn = q1('#aigScene', b); scn.oninput = () => { aigNote = scn.value; edited = false; fill(); };
    q1('#aigCopy', b).onclick = async () => { await copyText(pr); aiSave(pr.value); msg.textContent = TS('已複製，到下面任一工具貼上就能生成', 'Copied — paste it into any tool below'); };
    qa('a[data-aitool]', b).forEach(a => a.addEventListener('click', () => { aiSave(pr.value); copyQuiet(pr.value); }));
    const back = q1('#aigBack', b);
    back.onchange = () => { const f = back.files && back.files[0]; if (!f) return; closeSub(); fileToPhoto(f); };
    let working = false;
    q1('#aigGen', b).onclick = async () => {
      if (working) return; working = true;
      const sh = AIG_SHAPES.find(x => x[0] === aigSh) || AIG_SHAPES[0];
      const url = 'https://image.pollinations.ai/prompt/' + encodeURIComponent(pr.value) + '?width=' + sh[2] + '&height=' + sh[3]
        + '&nologo=true&model=flux&seed=' + Math.floor(Math.random() * 1e6);
      msg.textContent = TS('AI 正在畫圖，約 10–40 秒，請稍候…', 'Drawing… about 10–40 seconds');
      try {
        const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 90000);
        const r = await fetch(url, { mode: 'cors', signal: ctl.signal }); clearTimeout(tm);
        if (!r.ok) throw new Error('http ' + r.status);
        const blob = await r.blob();
        if (!/^image\//.test(blob.type)) throw new Error('type');
        const obj = URL.createObjectURL(blob);
        const im = await loadImg(obj, false);
        setTimeout(() => { try { URL.revokeObjectURL(obj); } catch (e) {} }, 30000);
        setPhoto(im, 'AI'); plSave(im, 'AI');
        closeSub(); paint(); say(TS('已放進美圖', 'Added to your picture'));
      } catch (e) { msg.textContent = TS('這次沒有生成成功（免費服務有時很忙）。可以再按一次，或複製提示詞到下面的工具。', 'Could not generate this time (the free service is sometimes busy). Try again, or copy the prompt into a tool below.'); }
      working = false;
    };
  }

  /* ── AI 配樂 ── */
  const AIM_STYLES = [
    ['pi', ['鋼琴', 'Piano'], 'solo piano, soft and warm, gentle arpeggios'],
    ['st', ['弦樂', 'Strings'], 'warm string ensemble with soft piano, cinematic and tender'],
    ['gt', ['木吉他', 'Guitar'], 'fingerstyle acoustic guitar with light ambient pads'],
    ['am', ['空靈', 'Ambient'], 'ethereal ambient pads, slow evolving texture, spacious reverb'],
    ['wh', ['敬拜', 'Worship'], 'contemporary worship instrumental, piano, soft drums, warm synth pad, building gently'],
    ['hy', ['聖詩', 'Hymn'], 'reverent hymn-like instrumental, pipe organ and strings, unhurried']
  ];
  const AIM_MOODS = [
    ['pe', ['平安', 'Peace'], 'peaceful and calm'], ['hp', ['盼望', 'Hope'], 'hopeful and uplifting'], ['jy', ['喜樂', 'Joy'], 'joyful and bright'],
    ['cm', ['安慰', 'Comfort'], 'tender and comforting'], ['md', ['默想', 'Meditative'], 'quiet and meditative'], ['pr', ['讚美', 'Praise'], 'grateful and celebratory']
  ];
  const AIM_LENS = [['30', ['約 30 秒', '~30 sec'], 'about 30 seconds'], ['60', ['約 1 分鐘', '~1 min'], 'about 1 minute'], ['120', ['約 2 分鐘', '~2 min'], 'about 2 minutes']];
  const AIM_TOOLS = () => [
    ['https://suno.com/', 'Suno', ['每天有免費額度、可下載 MP3（免費方案多半限非商業）', 'Daily free credits, MP3 download (free plan is usually non-commercial)']],
    ['https://labs.google/fx/tools/music-fx', 'Google MusicFX', ['免費、需 Google 帳號、英文提示詞、約 70 秒', 'Free, Google account, English prompts, ~70 s']],
    ['https://stableaudio.com/', 'Stable Audio', ['有免費額度、可下載、適合純音樂', 'Free credits, download, good for instrumentals']]
  ];
  let aimSt = 'pi', aimMd = 'pe', aimLn = '60', aimNote = '', aimPr0 = '';
  function aimPrompt() {
    const s = AIM_STYLES.find(x => x[0] === aimSt) || AIM_STYLES[0];
    const m = AIM_MOODS.find(x => x[0] === aimMd) || AIM_MOODS[0];
    const l = AIM_LENS.find(x => x[0] === aimLn) || AIM_LENS[1];
    const verse = item ? String(item.t || '').replace(/\s+/g, ' ').trim().slice(0, 100) : '';
    const theme = (aimNote || '').trim();
    return 'Instrumental only, no vocals, no lyrics. Gentle Christian worship background music, ' + s[2] + '. Mood: ' + m[2] + '. '
      + (theme ? 'Imagery: ' + theme + '. ' : '')
      + (verse ? 'Inspired by this Bible verse: "' + verse + '". ' : '')
      + 'Slow to medium tempo, soft intro and gentle ending, easy to loop, ' + l[2] + '.';
  }
  function aimSave(pr) { lsPut('mu', { ts: Date.now(), item: itemSnap(), note, st: aimSt, md: aimMd, ln: aimLn, sc: aimNote, pr: pr || '' }); }
  function openAiMusic() {
    if (!item) return;
    const b = sub(TS('🎼 用 AI 生成配樂', '🎼 Make music with AI'), `
      <p class="xs muted" style="line-height:1.6;margin:0 0 6px">${esc(TS('不用找音樂：選曲風與心情，App 依這節經文寫好提示詞，貼到免費 AI 音樂工具，幾十秒就生成一首純音樂。', 'No need to hunt for music: pick a style and mood, the app writes a prompt from this verse; paste it into a free AI music tool and get an instrumental in under a minute.'))}</p>
      <p class="gxlab">${esc(TS('曲風', 'Style'))}</p>${chipRow2('aimSt', AIM_STYLES, aimSt)}
      <p class="gxlab">${esc(TS('心情', 'Mood'))}</p>${chipRow2('aimMd', AIM_MOODS, aimMd)}
      <p class="gxlab">${esc(TS('長度', 'Length'))}</p>${chipRow2('aimLn', AIM_LENS, aimLn)}
      <p class="gxlab">${esc(TS('想要的畫面或感覺（選填，中英文都可以）', 'Imagery or feeling (optional)'))}</p>
      <input id="aimScene" placeholder="${esc(TS('例如：清晨的湖邊、慢慢升起的陽光', 'e.g. a quiet lake at dawn, slowly rising sunlight'))}" value="${esc(aimNote)}">
      <p class="gxlab">${esc(TS('提示詞（可修改，英文效果最好）', 'Prompt (editable)'))}</p>
      <textarea id="aimPr" rows="7" style="font-size:13px;line-height:1.5"></textarea>
      <div class="row" style="margin-top:10px"><button class="btn pri" id="aimCopy">${esc(TS('📋 複製提示詞', '📋 Copy prompt'))}</button></div>
      <p class="xs muted" id="aimMsg" style="min-height:18px;margin:8px 0 0"></p>
      <p class="gxlab">${esc(TS('到這些免費工具貼上提示詞（點進去會自動複製）', 'Paste it into these free tools (tapping copies the prompt)'))}</p>
      ${toolLinks(AIM_TOOLS(), 'data-aimtool')}
      <label class="btn pri" style="display:block;cursor:pointer;margin-top:12px;text-align:center">${esc(TS('🎵 音樂做好了：從檔案選這首', '🎵 Music ready: choose the file'))}<input type="file" accept="audio/*,.mp3,.m4a,.wav" hidden id="aimBack"></label>
      <p class="xs muted" style="line-height:1.6;margin:10px 0 0">${esc(TS('在工具裡把音樂下載（MP3），存到「檔案」，回到這裡按上面的按鈕選它，就會成為這張美圖的配樂，錄影時自動混進去。各工具的免費額度與使用條款會變動；AI 生成的音樂若要公開發布或商用，請先看該工具的條款。', 'Download the MP3 in the tool, save it to Files, then choose it with the button above; it becomes the background music when you record. Free quotas and terms change — check each tool’s terms before publishing or commercial use.'))}</p>`);
    const pr = q1('#aimPr', b), msg = q1('#aimMsg', b);
    let edited = false;
    const fill = () => { if (!edited) pr.value = aimPrompt(); };
    fill(); if (aimPr0) { pr.value = aimPr0; edited = true; aimPr0 = ''; }
    pr.oninput = () => { edited = true; };
    const chipsBind = (id, set) => qa('#' + id + ' button', b).forEach(x => x.onclick = () => {
      set(x.getAttribute('data-v')); edited = false; fill();
      qa('#' + id + ' button', b).forEach(o => o.classList.toggle('on', o === x));
    });
    chipsBind('aimSt', v => { aimSt = v; }); chipsBind('aimMd', v => { aimMd = v; }); chipsBind('aimLn', v => { aimLn = v; });
    const scn = q1('#aimScene', b); scn.oninput = () => { aimNote = scn.value; edited = false; fill(); };
    q1('#aimCopy', b).onclick = async () => { await copyText(pr); aimSave(pr.value); msg.textContent = TS('已複製，到下面任一工具貼上就能生成', 'Copied — paste it into a tool below'); };
    qa('a[data-aimtool]', b).forEach(a => a.addEventListener('click', () => { aimSave(pr.value); copyQuiet(pr.value); }));
    const back = q1('#aimBack', b);
    back.onchange = () => {
      const f = back.files && back.files[0]; if (!f) return;
      closeSub();
      if (f.size > 25 * 1024 * 1024) { say(T('檔案太大（上限 25MB）', 'File too large (max 25 MB)')); return; }
      bgmBlob = f; bgmName = f.name; bgmCredit = '';
      say(T('已選好配樂：', 'Music selected: ') + f.name); paint();
    };
  }

  /* ── 卡片字體與文字顏色；楷體、圓體 App 自帶（霞鶩文楷、粉圓，開源，只含經文用字，第一次選用才下載，與互動聖經共用同一份） ── */
  const CARD_FONTS = [['auto', ['自動', 'Auto']], ['mingti', ['明體', 'Serif']], ['hei', ['黑體', 'Sans']], ['kai', ['楷體', 'Script']], ['yuan', ['圓體', 'Rounded']]];
  const CARD_INKS = [['', ['自動', 'Auto']], ['#FFFFFF', ['白', 'White']], ['#1F1B16', ['黑', 'Black']], ['#D4A65B', ['金', 'Gold']], ['#123F92', ['深藍', 'Navy']], ['#6B4423', ['咖啡', 'Brown']], ['#8A2D2D', ['酒紅', 'Wine']], ['#255943', ['深綠', 'Green']], ['#E8A0B4', ['粉紅', 'Pink']]];
  const cardFontKey = () => CARD_FONTS.some(x => x[0] === st().cardFont) ? st().cardFont : 'auto';
  const inkVal = () => /^#[0-9a-fA-F]{6}$/.test(st().cardInk || '') ? st().cardInk : '';
  const inkT = Tp => { const c = inkVal(); return c ? Object.assign({}, Tp, { ink: c, accent: c, sub: c }) : Tp; };
  const IBF = {};
  function fontStatText() {
    const k = cardFontKey();
    if (EN || (k !== 'kai' && k !== 'yuan')) return '';
    const s = IBF[k === 'kai' ? 'IBKai' : 'IBYuan'];
    if (!s) return TS('字體準備中…', 'Preparing font…');
    if (s === 'loading') return TS('⏳ 字體下載中（約 1–2 MB），請稍候…', '⏳ Downloading font (1–2 MB)…');
    if (s === 'ok') return TS('✓ 字體已載入', '✓ Font loaded');
    return TS('✗ 字體載入失敗（', '✗ Font failed to load (') + s + TS('）。請確認網路後，再按一次字體按鈕重試。', '). Check the network and tap the font button again.');
  }
  function fontStatShow() { const el = q1('#gxFontSt'); if (el) el.textContent = fontStatText(); }
  function ensureIBFont(name, url) {
    if (IBF[name]) return;
    if (!window.FontFace) { IBF[name] = 'no FontFace'; return; }
    IBF[name] = 'loading';
    try {
      const ff = new FontFace(name, 'url(' + url + ')');
      ff.load().then(f => {
        document.fonts.add(f); IBF[name] = 'ok';
        if (EL && EL.classList.contains('on') && item && !recOn()) paint(); else fontStatShow();
      }).catch(e => { IBF[name] = String((e && e.message) || e || 'error').slice(0, 60); fontStatShow(); });
    } catch (e) { IBF[name] = String((e && e.message) || e).slice(0, 60); fontStatShow(); }
  }
  function cardFontStack() {
    const k = cardFontKey();
    if (!EN && k === 'kai') ensureIBFont('IBKai', SITE + 'fonts/kai2.woff');
    if (!EN && k === 'yuan') ensureIBFont('IBYuan', SITE + 'fonts/yuan2.woff');
    if (k === 'mingti') return SERIF0();
    if (k === 'hei') return SANS0();
    if (k === 'kai') return isSC() ? '"IBKai","Kaiti SC","STKaiti","KaiTi","楷体",serif'
      : (EN ? '"Snell Roundhand","Apple Chancery","Brush Script MT",cursive' : '"IBKai","Kaiti TC","BiauKai","DFKai-SB","STKaiti","KaiTi",serif');
    if (k === 'yuan') return isSC() ? '"IBYuan","Yuanti SC","PingFang SC","Noto Sans SC",sans-serif'
      : (EN ? '"Avenir Next Rounded","Nunito","Trebuchet MS",sans-serif' : '"IBYuan","Yuanti TC","PingFang TC","Noto Sans TC",sans-serif');
    return '';
  }
  const SERIF = () => cardFontStack() || SERIF0();
  const SANS = () => cardFontStack() || SANS0();
  function fontInkUI() {
    const fk = cardFontKey(), ink = inkVal();
    return `<p class="gxlab">${esc(TS('卡片字體', 'Card font'))}</p>${chips(CARD_FONTS.map(x => [x[0], sc(L2(x[1]))]), fk, 'cfont')}
      <p class="xs muted" id="gxFontSt" style="margin:6px 0 0">${esc(fontStatText())}</p>
      ${hint(TS('選了字體，稱呼、經文、內文與署名都用同一種字體。楷體、圓體第一次選用要下載約 1–2 MB。', 'The whole card uses the chosen font. Script and Rounded download 1–2 MB on first use (Chinese only).'))}
      <p class="gxlab">${esc(TS('文字顏色', 'Text colour'))}</p>
      <div class="gxchips">${CARD_INKS.map(x => `<button class="${ink.toLowerCase() === x[0].toLowerCase() ? 'on' : ''}" data-k="cink" data-v="${x[0]}">${x[0] ? `<i style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${x[0]};border:1px solid rgba(128,128,128,.5);margin-right:5px;vertical-align:-1px"></i>` : ''}${E2(x[1])}</button>`).join('')}
        <label style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-size:13px">🎨 ${esc(TS('自選', 'Custom'))}<input type="color" id="gxInkC" value="${ink || '#1F1B16'}" style="width:34px;height:26px;padding:0;border:0;background:none"></label></div>
      ${hint(TS('「自動」會依版型或相片明暗自己選黑或白；金色裝飾線與邊框不變。', '“Auto” picks black or white from the template or photo; gold rules and borders stay.'))}`;
  }

  /* ── 相機打不開：說清楚原因；內嵌視窗（團契 App）、內嵌瀏覽器（LINE 等）常擋相機，給兩條退路 ── */
  function camFail(e) {
    const n = (e && e.name) || '';
    const noAPI = !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    const framed = isFramed();
    let why;
    if (framed) why = TS('目前是在團契 App 內嵌的視窗裡開的，系統不給內嵌視窗用相機。請按下面「用瀏覽器開啟並允許相機」，會用 Safari 開這個 App，並自動回到這節經文的自拍。', 'This app is open inside an embedded view, where the system blocks the camera. Tap “Open in browser and allow the camera” below to continue in Safari.');
    else if (noAPI || inAppBrowser()) why = TS('這個畫面是在 LINE／內嵌瀏覽器裡開的，相機被擋住了。請點右上角「用瀏覽器開啟」（Safari／Chrome），或把 App 加到主畫面再開。', 'This page is open inside an in-app browser (e.g. LINE) which blocks the camera. Tap “Open in browser” (Safari/Chrome) or add the app to your Home Screen.');
    else if (n === 'NotAllowedError' || n === 'SecurityError') why = TS('相機權限被拒絕。iPhone：設定 › Safari › 相機 選「允許」，或網址列左邊 AA › 網站設定 › 相機 › 允許，再回來按自拍。', 'Camera permission was denied. On iPhone: Settings › Safari › Camera › Allow, then try Selfie again.');
    else if (n === 'NotReadableError' || n === 'AbortError') why = TS('相機正被其他 App 使用（例如視訊通話），請先關掉再試。', 'The camera is in use by another app. Close it and try again.');
    else if (n === 'NotFoundError' || n === 'OverconstrainedError') why = TS('找不到前鏡頭。', 'No front camera found.');
    else why = TS('相機打不開（', 'Could not open the camera (') + (n || TS('未知原因', 'unknown')) + TS('）。', ').');
    const b = sub(TS('📷 自拍相機打不開', '📷 Camera unavailable'), `
      <p style="font-size:14px;line-height:1.7;margin:6px 0 10px">${esc(why)}</p>
      <p class="xs muted" style="line-height:1.6;margin:0 0 8px">${esc(TS('不想改設定也可以：用手機內建相機直接錄一段自拍影片，錄完會存進「我的作品」。', 'No need to change settings: record a selfie video with the phone camera; it is saved to My works.'))}</p>
      ${framed ? `<button class="btn pri" id="camTop" style="display:block;width:100%;margin-bottom:8px">${esc(TS('🔓 用瀏覽器開啟並允許相機', '🔓 Open in browser and allow the camera'))}</button>` : ''}
      <label class="btn ${framed ? '' : 'pri'}" style="display:block;cursor:pointer;text-align:center">${esc(TS('📱 用手機內建相機錄自拍', '📱 Record with the phone camera'))}<input type="file" accept="video/*" capture="user" hidden id="camNative"></label>`);
    const ct = q1('#camTop', b);
    if (ct) ct.onclick = () => {
      lsPut('cam', { ts: Date.now(), item: itemSnap(), note });
      const u = location.origin + location.pathname;
      let w = null; try { w = window.open(u, '_blank'); } catch (_) {}
      if (!w) { try { window.top.location.href = u; } catch (_) { location.href = u; } }
      closeSub();
    };
    q1('#camNative', b).onchange = async ev => {
      const f = ev.target.files && ev.target.files[0]; if (!f) return;
      closeSub();
      await saveWork(f, f.type || 'video/mp4', 'video', 0);
    };
  }

  /* ── 離開 App 再回來（或被系統重載）時接回原位：相機（10 分鐘內、且不在內嵌視窗）→ AI 配樂 → AI 生圖（12 小時內） ── */
  function resumeBoot() {
    let o = null, mode = '';
    if (!isFramed()) { o = lsTake('cam'); if (o && o.item && Date.now() - o.ts <= 10 * 60 * 1000) mode = 'cam'; else o = null; }
    if (!mode) { o = lsTake('mu'); if (o && o.item && Date.now() - o.ts <= 12 * 3600 * 1000) mode = 'mu'; else o = null; }
    if (!mode) { o = lsTake('ai'); if (o && o.item && Date.now() - o.ts <= 12 * 3600 * 1000) mode = 'ai'; else o = null; }
    if (!mode) return;
    let tries = 0;
    const iv = setInterval(() => {
      tries++;
      let ready = false;
      try { ready = !!(D && D.txt && S); } catch (e) { ready = false; }
      if (!ready) { if (tries > 40) clearInterval(iv); return; }
      clearInterval(iv);
      try {
        const it = o.item;
        if (!open({ text: it.t, ref: it.ref, note: it.n0, plain: it.plain })) return;
        if (o.note != null) note = o.note;
        if (mode === 'cam') { tab = 'rec'; paint(); setTimeout(() => setRecMode('s'), 1200); }
        else if (mode === 'mu') {
          aimSt = o.st || aimSt; aimMd = o.md || aimMd; aimLn = o.ln || aimLn; aimNote = o.sc || ''; aimPr0 = o.pr || '';
          tab = 'rec'; paint(); setTimeout(openAiMusic, 700);
        } else {
          aigSt = o.st || aigSt; aigSh = o.sh || aigSh; aigNote = o.sc || ''; aigPr0 = o.pr || '';
          tab = 'photo'; paint(); setTimeout(openAiGen, 700);
        }
      } catch (e) {}
    }, 400);
  }
  window.addEventListener('load', () => setTimeout(resumeBoot, 600));

  async function openHymns() {
    const b = sub(T('詩歌庫', 'Hymn library'), `<p class="sm muted">${esc(T('載入中…', 'Loading…'))}</p>`);
    try { await hymnList(); } catch (e) { b.innerHTML = `<p class="sm muted">${esc(T('詩歌庫連不上，請稍後再試', 'Could not reach the hymn library'))}</p>`; return; }
    b.innerHTML = hymns.map((s, i) => `<div class="gxhrow"><button class="gxhp" id="gxhp${i}" data-p="${i}">▶</button>
      <span class="gxhn"><b>${esc(songName(s))}</b>${s.by ? `<small>${esc(s.by)}</small>` : ''}</span>
      <button class="btn xs2" data-u="${i}">${esc(T('用這首', 'Use'))}</button></div>`).join('')
      + `<p class="xs muted">${esc(T('詩歌與《321互動聖經》共用；用詩歌庫的歌錄影片時，影片下緣會印上出處。', 'Shared with the 321 Interactive Bible; videos made with these songs carry a credit line.'))}</p>`;
    qa('[data-p]', b).forEach(x => x.onclick = () => hymnPlay(+x.getAttribute('data-p')));
    qa('[data-u]', b).forEach(x => x.onclick = () => hymnPick(+x.getAttribute('data-u')));
  }

function mx_u32(b,p){return b[p]*16777216+b[p+1]*65536+b[p+2]*256+b[p+3];}
function mx_i32(b,p){const v=mx_u32(b,p);return v>=2147483648?v-4294967296:v;}
function mx_u64(b,p){return mx_u32(b,p)*4294967296+mx_u32(b,p+4);}
function mx_typ(b,p){return String.fromCharCode(b[p],b[p+1],b[p+2],b[p+3]);}

function mx_boxes(b,start,end){
  const out=[];let p=start;
  while(p+8<=end){
    let size=mx_u32(b,p),hs=8;
    if(size===1){size=mx_u64(b,p+8);hs=16;}
    else if(size===0)size=end-p;
    if(size<8||p+size>end)break;
    out.push({type:mx_typ(b,p+4),start:p,size:size,hs:hs,body:p+hs,end:p+size});
    p+=size;
  }
  return out;
}
function mx_find(list,t){return list.filter(x=>x.type===t);}
function mx_one(list,t){const r=mx_find(list,t);return r.length?r[0]:null;}
function mx_children(b,mx_box){return mx_boxes(b,mx_box.body,mx_box.end);}

function mx_parseTrun(b,tr,tfhd,baseOffset){
  const flags=mx_u32(b,tr.body)&0xffffff;
  const cnt=mx_u32(b,tr.body+4);
  let p=tr.body+8;
  let dataOff=0;
  if(flags&0x1){dataOff=mx_i32(b,p);p+=4;}
  let firstFlags=null;
  if(flags&0x4){firstFlags=mx_u32(b,p);p+=4;}
  const samples=[];
  let off=baseOffset+dataOff;
  for(let i=0;i<cnt;i++){
    let dur=tfhd.defDur, size=tfhd.defSize, fl=tfhd.defFlags, cto=0;
    if(flags&0x100){dur=mx_u32(b,p);p+=4;}
    if(flags&0x200){size=mx_u32(b,p);p+=4;}
    if(flags&0x400){fl=mx_u32(b,p);p+=4;}
    if(flags&0x800){cto=mx_i32(b,p);p+=4;}
    if(i===0&&firstFlags!==null)fl=firstFlags;
    samples.push({off:off,size:size,dur:dur,cto:cto,sync:!(fl&0x10000)});
    off+=size;
  }
  return {samples:samples,dataOff:dataOff};
}

function mx_parseTfhd(b,mx_box){
  const flags=mx_u32(b,mx_box.body)&0xffffff;
  const trackId=mx_u32(b,mx_box.body+4);
  let p=mx_box.body+8;
  let base=null;
  if(flags&0x1){base=mx_u64(b,p);p+=8;}
  if(flags&0x2){p+=4;}
  let defDur=0,defSize=0,defFlags=0;
  if(flags&0x8){defDur=mx_u32(b,p);p+=4;}
  if(flags&0x10){defSize=mx_u32(b,p);p+=4;}
  if(flags&0x20){defFlags=mx_u32(b,p);p+=4;}
  return {trackId:trackId,base:base,defDur:defDur,defSize:defSize,defFlags:defFlags,
          defaultBaseIsMoof:!!(flags&0x020000),hasBase:!!(flags&0x1)};
}

/* ---- 產生 mx_box ---- */
function mx_box(type,...parts){
  let len=8;parts.forEach(p=>len+=p.length);
  const head=new Uint8Array(8);
  head[0]=(len>>>24)&255;head[1]=(len>>>16)&255;head[2]=(len>>>8)&255;head[3]=len&255;
  for(let i=0;i<4;i++)head[4+i]=type.charCodeAt(i);
  const out=new Uint8Array(len);out.set(head,0);
  let p=8;parts.forEach(x=>{out.set(x,p);p+=x.length;});
  return out;
}
function mx_b32(v){return new Uint8Array([(v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255]);}
function mx_b64(v){const hi=Math.floor(v/4294967296),lo=v>>>0;
  return new Uint8Array([(hi>>>24)&255,(hi>>>16)&255,(hi>>>8)&255,hi&255,
                         (lo>>>24)&255,(lo>>>16)&255,(lo>>>8)&255,lo&255]);}
function mx_cat(arr){let n=0;arr.forEach(a=>n+=a.length);const o=new Uint8Array(n);let p=0;
  arr.forEach(a=>{o.set(a,p);p+=a.length;});return o;}

function mx_remux(bytes){
  const b=bytes;
  const top=mx_boxes(b,0,b.length);
  const ftyp=mx_one(top,"ftyp");
  const moov=mx_one(top,"moov");
  if(!moov)throw new Error("no moov");
  const moofs=mx_find(top,"moof");
  if(!moofs.length)return null;              /* 不是分段 MP4，不用處理 */

  const mvBoxes=mx_children(b,moov);
  const mvhd=mx_one(mvBoxes,"mvhd");
  const mvTimescale=mx_u32(b,mvhd.body+(b[mvhd.body]===1?20:12));
  const traks=mx_find(mvBoxes,"trak");

  /* 收集每個 track 的所有 sample */
  const tracks={};
  traks.forEach(tk=>{
    const tkhd=mx_one(mx_children(b,tk),"tkhd");
    const v=b[tkhd.body];
    const id=mx_u32(b,tkhd.body+(v===1?20:12));
    tracks[id]={trak:tk,samples:[]};
  });

  moofs.forEach(mf=>{
    const trafs=mx_find(mx_children(b,mf),"traf");
    trafs.forEach(tf=>{
      const tfc=mx_children(b,tf);
      const tfhdBox=mx_one(tfc,"tfhd");
      if(!tfhdBox)return;
      const tfhd=mx_parseTfhd(b,tfhdBox);
      const t=tracks[tfhd.trackId];
      if(!t)return;
      /* 基準位移：預設是 moof 起點（default-base-is-moof） */
      const base=tfhd.hasBase?tfhd.base:mf.start;
      let running=null;
      mx_find(tfc,"trun").forEach(tr=>{
        const flags=mx_u32(b,tr.body)&0xffffff;
        const hasOff=!!(flags&0x1);
        const r=mx_parseTrun(b,tr,tfhd,hasOff?base:(running===null?base:running));
        r.samples.forEach(s=>t.samples.push(s));
        if(r.samples.length){
          const last=r.samples[r.samples.length-1];
          running=last.off+last.size;
        }
      });
    });
  });

  /* 依序把 sample 資料集中成一個 mdat */
  const order=[];
  Object.keys(tracks).forEach(id=>{
    tracks[id].samples.forEach((s,i)=>order.push({id:+id,i:i,off:s.off,size:s.size}));
  });
  order.sort((a,b2)=>a.off-b2.off);
  let mdatSize=0;order.forEach(o=>mdatSize+=o.size);

  const newOff={};
  let cur=0;
  order.forEach(o=>{
    if(!newOff[o.id])newOff[o.id]=[];
    newOff[o.id][o.i]=cur;cur+=o.size;
  });

  /* ---- 為每個 track 重建 stbl ---- */
  function buildStbl(id,stblOld,mediaTimescale){
    const ss=tracks[id].samples;
    const offs=newOff[id]||[];
    const old=mx_children(b,stblOld);
    const keep=[];
    ["stsd"].forEach(t=>{const x=mx_one(old,t);if(x)keep.push(b.slice(x.start,x.end));});

    /* stts */
    const stts=[];
    let runDur=-1,runCnt=0;
    ss.forEach(s=>{
      if(s.dur===runDur){runCnt++;}
      else{if(runCnt)stts.push([runCnt,runDur]);runDur=s.dur;runCnt=1;}
    });
    if(runCnt)stts.push([runCnt,runDur]);
    const sttsBody=[mx_b32(0),mx_b32(stts.length)];
    stts.forEach(e=>{sttsBody.push(mx_b32(e[0]));sttsBody.push(mx_b32(e[1]));});
    keep.push(mx_box("stts",mx_cat(sttsBody)));

    /* ctts（若有 composition offset） */
    if(ss.some(s=>s.cto!==0)){
      const ctts=[];let rv=null,rc=0;
      ss.forEach(s=>{if(s.cto===rv){rc++;}else{if(rc)ctts.push([rc,rv]);rv=s.cto;rc=1;}});
      if(rc)ctts.push([rc,rv]);
      const body=[new Uint8Array([1,0,0,0]),mx_b32(ctts.length)];
      ctts.forEach(e=>{body.push(mx_b32(e[0]));body.push(mx_b32(e[1]>>>0));});
      keep.push(mx_box("ctts",mx_cat(body)));
    }

    /* stss（關鍵影格）*/
    const syncs=[];
    ss.forEach((s,i)=>{if(s.sync)syncs.push(i+1);});
    if(syncs.length&&syncs.length!==ss.length){
      const body=[mx_b32(0),mx_b32(syncs.length)];
      syncs.forEach(v=>body.push(mx_b32(v)));
      keep.push(mx_box("stss",mx_cat(body)));
    }

    /* stsc：每個 sample 自成一個 chunk，最單純也最不會出錯 */
    keep.push(mx_box("stsc",mx_cat([mx_b32(0),mx_b32(1),mx_b32(1),mx_b32(1),mx_b32(1)])));

    /* stsz */
    const szBody=[mx_b32(0),mx_b32(0),mx_b32(ss.length)];
    ss.forEach(s=>szBody.push(mx_b32(s.size)));
    keep.push(mx_box("stsz",mx_cat(szBody)));

    /* co64：用 64 位元，長度固定，才好兩段式計算位移 */
    const coBody=[mx_b32(0),mx_b32(ss.length)];
    ss.forEach((s,i)=>coBody.push(mx_b64(offs[i]||0)));
    keep.push({__co:true,data:mx_cat(coBody),count:ss.length});

    return keep;
  }

  /* 兩段式：先算出 moov 長度，再填入真正的 chunk 位移 */
  function assemble(mdatStart){
    const newTraks=[];
    traks.forEach(tk=>{
      const tkc=mx_children(b,tk);
      const tkhd=mx_one(tkc,"tkhd");
      const v=b[tkhd.body];
      const id=mx_u32(b,tkhd.body+(v===1?20:12));
      const mdia=mx_one(tkc,"mdia");
      const mdc=mx_children(b,mdia);
      const mdhd=mx_one(mdc,"mdhd");
      const mv=b[mdhd.body];
      const mts=mx_u32(b,mdhd.body+(mv===1?20:12));
      const ss=tracks[id].samples;
      let dur=0;ss.forEach(s=>dur+=s.dur);

      /* tkhd：填入 movie timescale 的時長 */
      const tkhdBuf=b.slice(tkhd.start,tkhd.end);
      const mvDur=Math.round(dur/mts*mvTimescale);
      if(v===1)writeU64(tkhdBuf,tkhd.body-tkhd.start+28,mvDur);
      else writeU32(tkhdBuf,tkhd.body-tkhd.start+20,mvDur);

      /* mdhd：填入 media timescale 的時長 */
      const mdhdBuf=b.slice(mdhd.start,mdhd.end);
      if(mv===1)writeU64(mdhdBuf,mdhd.body-mdhd.start+24,dur);
      else writeU32(mdhdBuf,mdhd.body-mdhd.start+16,dur);

      const minf=mx_one(mdc,"minf");
      const mic=mx_children(b,minf);
      const stbl=mx_one(mic,"stbl");
      const parts=buildStbl(id,stbl,mts);
      const stblParts=parts.map(x=>x.__co?mx_box("co64",x.data):x);
      const newStbl=mx_box("stbl",...stblParts);
      const minfParts=mic.map(x=>x.type==="stbl"?newStbl:b.slice(x.start,x.end));
      const newMinf=mx_box("minf",...minfParts);
      const mdiaParts=mdc.map(x=>x.type==="minf"?newMinf:(x.type==="mdhd"?mdhdBuf:b.slice(x.start,x.end)));
      const newMdia=mx_box("mdia",...mdiaParts);
      const trakParts=tkc.filter(x=>x.type!=="edts").map(x=>
        x.type==="mdia"?newMdia:(x.type==="tkhd"?tkhdBuf:b.slice(x.start,x.end)));
      newTraks.push(mx_box("trak",...trakParts));
    });

    /* mvhd：填入整體時長 */
    let maxDur=0;
    Object.keys(tracks).forEach(id=>{
      const tk=tracks[id];const trak=tk.trak;
      const mdhd=mx_one(mx_children(b,mx_one(mx_children(b,trak),"mdia")),"mdhd");
      const mv=b[mdhd.body];
      const mts=mx_u32(b,mdhd.body+(mv===1?20:12));
      let d=0;tk.samples.forEach(s=>d+=s.dur);
      maxDur=Math.max(maxDur,Math.round(d/mts*mvTimescale));
    });
    const mvhdBuf=b.slice(mvhd.start,mvhd.end);
    if(b[mvhd.body]===1)writeU64(mvhdBuf,mvhd.body-mvhd.start+24,maxDur);
    else writeU32(mvhdBuf,mvhd.body-mvhd.start+16,maxDur);

    return mx_box("moov",mvhdBuf,...newTraks);
  }

  function writeU32(buf,p,v){buf[p]=(v>>>24)&255;buf[p+1]=(v>>>16)&255;buf[p+2]=(v>>>8)&255;buf[p+3]=v&255;}
  function writeU64(buf,p,v){const hi=Math.floor(v/4294967296),lo=v>>>0;
    writeU32(buf,p,hi);writeU32(buf,p+4,lo);}

  const ftypBuf=ftyp?b.slice(ftyp.start,ftyp.end)
                    :mx_box("ftyp",mx_strBytes("isom"),mx_b32(512),mx_strBytes("isomiso2avc1mp41"));
  const pass1=assemble(0);
  const mdatStart=ftypBuf.length+pass1.length+16;   /* 16 = mdat 的 64 位元表頭 */
  Object.keys(newOff).forEach(id=>{
    newOff[id]=newOff[id].map(v=>v+mdatStart);
  });
  const moovNew=assemble(mdatStart);

  /* 組出 mdat（64 位元長度） */
  const mdatHead=new Uint8Array(16);
  mdatHead[3]=1;
  "mdat".split("").forEach((c,i)=>mdatHead[4+i]=c.charCodeAt(0));
  const total=mdatSize+16;
  const hi=Math.floor(total/4294967296),lo=total>>>0;
  writeU32(mdatHead,8,hi);writeU32(mdatHead,12,lo);

  const out=new Uint8Array(ftypBuf.length+moovNew.length+16+mdatSize);
  let p=0;
  out.set(ftypBuf,p);p+=ftypBuf.length;
  out.set(moovNew,p);p+=moovNew.length;
  out.set(mdatHead,p);p+=16;
  order.forEach(o=>{out.set(b.subarray(o.off,o.off+o.size),p);p+=o.size;});
  return out;
}
function mx_strBytes(s){const a=new Uint8Array(s.length);for(let i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}

/* 只處理分段 MP4；其他格式或失敗時原封不動回傳，不影響既有流程 */

  async function fixVideoBlob(blob, mime) {
    try {
      if (!blob || !/mp4/i.test(mime || blob.type || '')) return blob;
      const buf = new Uint8Array(await blob.arrayBuffer());
      const out = mx_remux(buf);
      if (!out || !out.length) return blob;
      return new Blob([out], { type: 'video/mp4' });
    } catch (e) { return blob; }
  }

  /* ── 作品庫（IndexedDB） ───────────────────────────────────── */
  let wdb = null;
  function openWDB() {
    return new Promise(r => {
      if (wdb) return r(wdb);
      try {
        const q = indexedDB.open(GX.BK.slug + (EN ? '_works_en' : '_works'), 1);
        q.onupgradeneeded = e => { e.target.result.createObjectStore('rec', { keyPath: 'id' }); };
        q.onsuccess = e => { wdb = e.target.result; r(wdb); };
        q.onerror = () => r(null);
      } catch (e) { r(null); }
    });
  }
  const wtx = mode => wdb.transaction('rec', mode).objectStore('rec');
  const putRec = o => new Promise(r => { const q = wtx('readwrite').put(o); q.onsuccess = () => r(1); q.onerror = () => r(0); });
  const allRec = async () => { await openWDB(); return new Promise(r => { if (!wdb) return r([]); const q = wtx('readonly').getAll(); q.onsuccess = () => r((q.result || []).sort((a, b) => b.ts - a.ts)); q.onerror = () => r([]); }); };
  const delRec = id => new Promise(r => { const q = wtx('readwrite').delete(id); q.onsuccess = () => r(1); q.onerror = () => r(0); });
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  /* ── 錄製 ───────────────────────────────────────────────────── */
  let mr = null, chunks = [], recTimer = null, recSec = 0, recAnim = 0, recLabel = '';
  let recMode = 'c', selfieStream = null, curFade = null, recFading = false, mcGain = null;
  const BGM_FADEOUT = 5;
  const sup = m => { try { return window.MediaRecorder && MediaRecorder.isTypeSupported(m); } catch (e) { return false; } };
  const vidMime = () => ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find(sup) || '';
  const audMime = () => ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].find(sup) || '';
  const canVideo = () => !!(vidMime() && HTMLCanvasElement.prototype.captureStream);
  const extOf = m => (m || '').indexOf('mp4') >= 0 ? (m.indexOf('video') === 0 ? '.mp4' : '.m4a') : '.webm';
  const recOn = () => !!(mr && mr.state === 'recording');
  const mmss = s => (s < 600 ? '0' : '') + Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);

  function attachSelfie() {
    const el = q1('#gxsSelf');
    if (!el || !selfieStream) return;
    el.muted = true; el.playsInline = true;
    ['playsinline', 'webkit-playsinline', 'muted', 'autoplay'].forEach(a => el.setAttribute(a, ''));
    if (el.srcObject !== selfieStream) el.srcObject = selfieStream;
    const go2 = () => { const q = el.play(); if (q && q.catch) q.catch(() => {}); };
    el.onloadedmetadata = go2; go2();
    [80, 300, 800].forEach(ms => setTimeout(go2, ms));
  }
  function stopSelfie() {
    try { if (selfieStream) selfieStream.getTracks().forEach(t => t.stop()); } catch (e) {}
    const el = q1('#gxsSelf'); if (el) { try { el.pause(); } catch (e) {} el.srcObject = null; }
    selfieStream = null;
  }
  async function setRecMode(m) {
    if (recOn()) { say(T('錄製中不能換，先按「停止並完成」', 'Stop the recording first')); return; }
    recMode = m;
    if (m !== 's') { stopSelfie(); paint(); return; }
    try { selfieStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false }); }
    catch (e) { recMode = 'c'; camFail(e); }
    paint();
    if (recMode === 's') setTimeout(attachSelfie, 60);
  }
  function liveCanvas(W, H, withSelfie) {
    const base = document.createElement('canvas');
    suppressSticker = !!withSelfie; drawCard(base, W, H); suppressSticker = false;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const cx = cv.getContext('2d'), t0 = performance.now(), F = Math.min(W, H) / 1080;
    const svid = q1('#gxsSelf');
    const draw = () => {
      const el = (performance.now() - t0) / 1000;
      cx.drawImage(base, 0, 0);
      const ph = (el / 16) % 2, gx = W * (0.12 + 0.76 * (ph > 1 ? 2 - ph : ph));
      const rg = cx.createRadialGradient(gx, H * .12, 10, gx, H * .12, W * .55);
      rg.addColorStop(0, 'rgba(255,255,255,.10)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
      cx.fillStyle = rg; cx.fillRect(0, 0, W, H);
      if (withSelfie) drawSelfie(cx, svid, W, H, F);
      if (bgmCredit) {
        cx.textAlign = 'center'; cx.font = `${Math.round(19 * F)}px ${SANS()}`;
        cx.fillStyle = 'rgba(255,255,255,.62)'; cx.shadowColor = 'rgba(0,0,0,.55)'; cx.shadowBlur = Math.round(6 * F);
        cx.fillText(sc(bgmCredit), W / 2, H - Math.round(22 * F)); cx.shadowColor = 'transparent';
      }
    };
    const loop = () => { draw(); recAnim = requestAnimationFrame(loop); };
    loop();
    const bgT = setInterval(() => { if (!recOn() && performance.now() - t0 > 4000) clearInterval(bgT); else if (document.hidden) draw(); }, 500);
    const sw = q1('#gxsSelfWrap');
    if (sw && withSelfie) sw.style.cssText = 'position:absolute;width:2px;height:2px;opacity:.01;overflow:hidden;pointer-events:none';
    return cv;
  }
  function fadeIn(g, ac, to, sec) {
    if (!g || !ac) return;
    try { const t0 = ac.currentTime; g.gain.cancelScheduledValues(t0); g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(to, t0 + sec); }
    catch (e) { try { g.gain.value = to; } catch (_) {} }
  }
  function fadeOutStop(g, ac, sec) {
    if (recFading) return;
    if (!g || !ac) { if (recOn()) mr.stop(); return; }
    recFading = true;
    try { const t0 = ac.currentTime; g.gain.cancelScheduledValues(t0); g.gain.setValueAtTime(Math.max(g.gain.value, 0.0001), t0); g.gain.linearRampToValueAtTime(0.0001, t0 + sec); } catch (e) {}
    recLabel = T('音樂淡出中…（再按一次立即停止）', 'Music fading out… (tap again to stop now)');
    const s = q1('#gxsRecSt'); if (s) s.innerHTML = '<span class="recdot"></span>' + esc(recLabel);
    setTimeout(() => { if (recOn()) mr.stop(); }, sec * 1000 + 150);
  }
  function recStopNow() { if (!recOn()) return; if (recFading || !curFade) mr.stop(); else curFade(); }
  function recTick(label) {
    recLabel = label;
    const s = q1('#gxsRecSt'); if (s) s.innerHTML = '<span class="recdot"></span>' + esc(label);
    clearInterval(recTimer);
    recTimer = setInterval(() => { recSec++; const e = q1('#gxsRecTm'); if (e) e.textContent = mmss(recSec); }, 1000);
  }
  function stopTTS() { try { if (typeof stopSpeak === 'function') stopSpeak(); } catch (e) {} try { if (TTS321.isOn()) TTS321.stop(); } catch (e) {} }

  async function toggleRec() {
    if (recOn()) { recStopNow(); return; }
    if (!item) return;
    hymnStop(); stopTTS();
    if (recMode === 's' && (!selfieStream || !selfieStream.active)) {
      try { selfieStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false }); }
      catch (e) { recMode = 'c'; camFail(e); paint(); }
      if (recMode === 's') { paint(); attachSelfie(); await new Promise(r => setTimeout(r, 500)); }
    }
    let mic;
    try { mic = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }); }
    catch (e) {
      try { mic = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e2) { say(T('沒有取得麥克風權限', 'Microphone permission was not granted')); return; }
    }
    const svid = q1('#gxsSelf');
    const useSelfie = recMode === 's' && svid && svid.videoWidth;
    let ac = null, bgmEl = null, bgmURL = null, audioStream = mic, micGain = null, bgmGain = null;
    try {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      try { await ac.resume(); } catch (_) {}
      const dst = ac.createMediaStreamDestination();
      micGain = ac.createGain(); micGain.gain.value = 0.0001;
      ac.createMediaStreamSource(mic).connect(micGain).connect(dst);
      if (bgmBlob) {
        bgmURL = URL.createObjectURL(bgmBlob);
        bgmEl = new Audio(); bgmEl.src = bgmURL; bgmEl.loop = true;
        bgmGain = ac.createGain(); bgmGain.gain.value = 0.0001;
        ac.createMediaElementSource(bgmEl).connect(bgmGain).connect(dst);
      }
      audioStream = dst.stream;
    } catch (e) {
      try { if (ac) ac.close(); } catch (_) {}
      ac = null; bgmEl = null; bgmGain = null; micGain = null; audioStream = mic;
    }
    let stream = audioStream, kind = 'audio', mime = audMime();
    if (recMode !== 'a' && canVideo()) {
      try {
        const d = dims();
        const cv = liveCanvas(d[0], d[1], useSelfie);
        stream = new MediaStream(cv.captureStream(24).getVideoTracks().concat(audioStream.getAudioTracks()));
        kind = 'video'; mime = vidMime();
      } catch (e) { cancelAnimationFrame(recAnim); stream = mic; kind = 'audio'; mime = audMime(); }
    } else if (recMode !== 'a') say(T('這台裝置不能錄影片，先錄聲音；也可以改用手機的螢幕錄影。', 'This device cannot record video — recording voice instead.'));
    try {
      mr = new MediaRecorder(stream, Object.assign(mime ? { mimeType: mime } : {}, kind === 'video' ? { videoBitsPerSecond: 2200000 } : {}));
    } catch (e) {
      cancelAnimationFrame(recAnim);
      try { mr = new MediaRecorder(mic); kind = 'audio'; } catch (e2) { say(T('這台裝置不支援錄製', 'Recording is not supported on this device')); return; }
    }
    chunks = []; recSec = 0;
    mr.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    mr.onstop = async () => {
      clearInterval(recTimer); cancelAnimationFrame(recAnim); curFade = null; recFading = false;
      mic.getTracks().forEach(t => t.stop());
      stopSelfie();
      try { if (bgmEl) { bgmEl.pause(); bgmEl.src = ''; } } catch (_) {}
      try { if (bgmURL) URL.revokeObjectURL(bgmURL); } catch (_) {}
      try { if (ac) ac.close(); } catch (_) {}
      const type = mr.mimeType || mime || (kind === 'video' ? 'video/webm' : 'audio/webm');
      await finishRec(new Blob(chunks, { type }), type, kind);
    };
    await new Promise(r => setTimeout(r, 380));
    if (!mr) return;
    mr.start(1000);
    curFade = bgmEl ? (() => fadeOutStop(bgmGain, ac, BGM_FADEOUT)) : null;
    fadeIn(micGain, ac, 1, 0.28);
    if (bgmEl) { try { await bgmEl.play(); } catch (_) {} fadeIn(bgmGain, ac, st().vol, 0.9); }
    paint();
    recTick((kind === 'video' ? T('錄影中', 'Recording video') : T('錄音中', 'Recording voice')) + (bgmBlob ? '　♪' : ''));
  }
  async function musicRec() {
    if (recOn()) { recStopNow(); return; }
    if (!item) return;
    if (!bgmBlob) { say(T('先選一首配樂', 'Choose some music first')); return; }
    if (!canVideo()) { say(T('這台裝置不能錄影片', 'This device cannot record video')); return; }
    hymnStop(); stopTTS();
    let ac, bgmEl, bgmURL, audioStream;
    try {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      try { await ac.resume(); } catch (_) {}
      bgmURL = URL.createObjectURL(bgmBlob);
      bgmEl = new Audio(); bgmEl.src = bgmURL; bgmEl.loop = false;
      mcGain = ac.createGain(); mcGain.gain.value = 0.0001;
      const dst = ac.createMediaStreamDestination();
      ac.createMediaElementSource(bgmEl).connect(mcGain).connect(dst);
      mcGain.connect(ac.destination);
      audioStream = dst.stream;
    } catch (e) { say(T('這個音檔放不出來', 'This audio could not play')); return; }
    const d = dims();
    const cv = liveCanvas(d[0], d[1], false);
    const mime = vidMime();
    const stream = new MediaStream(cv.captureStream(24).getVideoTracks().concat(audioStream.getAudioTracks()));
    try { mr = new MediaRecorder(stream, Object.assign(mime ? { mimeType: mime } : {}, { videoBitsPerSecond: 2200000 })); }
    catch (e) { cancelAnimationFrame(recAnim); say(T('這台裝置不能錄影片', 'This device cannot record video')); return; }
    chunks = []; recSec = 0;
    mr.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    mr.onstop = async () => {
      clearInterval(recTimer); cancelAnimationFrame(recAnim); curFade = null; recFading = false;
      try { if (bgmEl) { bgmEl.pause(); bgmEl.src = ''; } } catch (_) {}
      try { if (bgmURL) URL.revokeObjectURL(bgmURL); } catch (_) {}
      try { if (ac) ac.close(); } catch (_) {}
      const type = mr.mimeType || mime || 'video/webm';
      await finishRec(new Blob(chunks, { type }), type, 'video');
    };
    mr.start(1000);
    try { await bgmEl.play(); } catch (e) {}
    fadeIn(mcGain, ac, 1, 0.6);
    curFade = () => fadeOutStop(mcGain, ac, BGM_FADEOUT);
    const len = +st().mc;
    bgmEl.onended = () => { if (recOn()) mr.stop(); };
    bgmEl.ontimeupdate = () => {
      if (len > 0 || recFading || !isFinite(bgmEl.duration)) return;
      const left = bgmEl.duration - bgmEl.currentTime;
      if (left <= BGM_FADEOUT && recOn()) fadeOutStop(mcGain, ac, Math.max(.5, left));
    };
    const lim = len > 0 ? len : 8 * 60;
    setTimeout(() => { if (!recFading && recOn()) fadeOutStop(mcGain, ac, BGM_FADEOUT); }, Math.max(0, lim - BGM_FADEOUT) * 1000);
    setTimeout(() => { if (recOn()) mr.stop(); }, lim * 1000 + 300);
    paint();
    recTick(T('音樂卡片製作中', 'Making music card') + '　♪');
  }
  async function finishRec(blob, type, kind) {
    mr = null;
    const dur = recSec;
    try { if (kind === 'video') blob = await fixVideoBlob(blob, type); } catch (e) {}
    paint();
    openReview(blob, blob.type || type, kind, dur);
  }
  async function saveWork(blob, type, kind, dur) {
    try {
      await openWDB();
      if (!wdb) throw new Error('IndexedDB');
      await putRec({ id: uid(), ts: Date.now(), blob, mime: blob.type || type, kind, dur: dur || 0, v: item ? item.t : '', r: item ? item.ref : '', n: note || '' });
      say(kind === 'video' ? T('影片已存進「我的作品」', 'Video saved to My works') : T('語音已存進「我的作品」', 'Voice saved to My works'));
      return true;
    } catch (e) { say(T('存檔失敗：', 'Save failed: ') + (e && e.message || e)); return false; }
  }
  async function shareBlob(blob, mime, kind) {
    const name = (EN ? GX.BK.en.toLowerCase().replace(/\s+/g, '') + '-' : '321' + GX.BK.zh + '-') + (kind === 'video' ? 'video' : 'voice') + '-' + Date.now() + extOf(mime);
    const f = new File([blob], name, { type: mime });
    if (navigator.canShare && navigator.canShare({ files: [f] })) {
      if (isIOS()) say(T('在分享面板選「儲存影片」就會存進相簿', 'Choose “Save Video” to put it in Photos'));
      try { await navigator.share({ files: [f] }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
    }
    const u = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 6000);
    say(T('已下載', 'Downloaded'));
  }
  let rvURL = null;
  function openReview(blob, mime, kind, dur) {
    if (rvURL) { try { URL.revokeObjectURL(rvURL); } catch (e) {} }
    rvURL = URL.createObjectURL(blob);
    let kept = false;
    const m = document.createElement('div'); m.className = 'gxsmask'; m.id = 'gxsRv';
    m.innerHTML = `<div class="gxscard"><div class="gxshead"><b>${esc(kind === 'video' ? T('錄好了，先看看', 'Here is your video') : T('錄好了，先聽聽', 'Here is your recording'))}</b></div>
      ${kind === 'video' ? `<video id="rvMedia" src="${rvURL}" controls playsinline webkit-playsinline autoplay style="width:100%;border-radius:14px;display:block;background:#000;max-height:56vh"></video>`
        : `<audio id="rvMedia" src="${rvURL}" controls autoplay style="width:100%"></audio>`}
      <p class="xs muted">${esc(T('滿意就儲存到「我的作品」，也可以直接分享。', 'Save it to My works, or share it right away.'))}</p>
      <div class="gxacts">
        <button class="btn pri" id="rvSave">${esc(T('儲存到我的作品', 'Save to My works'))}</button>
        <button class="btn" id="rvShare">↗ ${esc(T('分享／存到手機', 'Share / save to phone'))}</button>
        <button class="btn" id="rvAgain">${esc(T('重錄', 'Record again'))}</button>
        <button class="btn danger" id="rvDrop">${esc(T('不要了', 'Discard'))}</button>
      </div></div>`;
    GXA_root().appendChild(m);
    const shut = () => {
      const md = q1('#rvMedia', m); try { if (md) { md.pause(); md.src = ''; } } catch (e) {}
      m.remove();
      if (rvURL) { try { URL.revokeObjectURL(rvURL); } catch (e) {} rvURL = null; }
    };
    m.onclick = e => { if (e.target === m && (kept || confirm(T('還沒儲存，確定關掉嗎？', 'Not saved yet — close anyway?')))) shut(); };
    q1('#rvSave', m).onclick = async () => { const b = q1('#rvSave', m); b.disabled = true; if (await saveWork(blob, mime, kind, dur)) { kept = true; shut(); } else b.disabled = false; };
    q1('#rvShare', m).onclick = () => shareBlob(blob, mime, kind);
    q1('#rvAgain', m).onclick = async () => { shut(); if (recMode === 's') { await setRecMode('s'); await new Promise(r => setTimeout(r, 450)); } toggleRec(); };
    q1('#rvDrop', m).onclick = () => { if (!confirm(T('確定不要這一段？', 'Discard this recording?'))) return; shut(); say(T('已刪掉', 'Discarded')); };
  }

  /* ── 我的作品 ───────────────────────────────────────────────── */
  async function readyBlob(r) {
    if (r.kind !== 'video') return r.blob;
    const fixed = await fixVideoBlob(r.blob, r.mime);
    if (fixed !== r.blob) { try { await putRec(Object.assign({}, r, { blob: fixed, mime: 'video/mp4' })); } catch (e) {} }
    return fixed;
  }
  function vWorks() {
    setTitle(T('我的作品', 'My works'), false);
    return `<div class="sect" style="padding-bottom:6px"><p class="eyebrow">${esc(T('我的作品', 'My works'))}</p><h2 class="big">${esc(T('錄下來的，都在這裡。', 'Everything you recorded.'))}</h2>
      <p class="sm muted">${esc(T('作品存在這台裝置上（不跟著備份走）。在畫線或小智回答上按「做成美圖」，就能錄語音、卡片影片或音樂卡片。', 'Works stay on this device (not in backups). Tap “make a card” on a highlight or a Xiaozhi answer to record voice, a card video or a music card.'))}</p></div>
      <div id="gxWorks"><p class="sm muted">${esc(T('載入中…', 'Loading…'))}</p></div>`;
  }
  async function paintWorks() {
    const box = q1('#gxWorks'); if (!box) return;
    const list = await allRec();
    if (!list.length) { box.innerHTML = `<div class="card"><p class="sm muted" style="margin:0">${esc(T('還沒有作品。', 'No works yet.'))}</p></div>`; return; }
    box.innerHTML = list.map(r => `<div class="card gxwork">
      <p class="xs muted" style="margin:0 0 4px">${r.kind === 'video' ? '🎬 ' + esc(T('影片', 'Video')) : '🎙 ' + esc(T('語音', 'Voice'))}　${r.dur ? mmss(r.dur) + '　' : ''}${esc(new Date(r.ts).toLocaleString())}</p>
      <p class="sm" style="margin:0 0 4px;font-family:var(--serif)">${esc(String(r.v || '').slice(0, 80))}${String(r.v || '').length > 80 ? '…' : ''}</p>
      ${r.r ? `<p class="xs muted" style="margin:0 0 8px">${esc(r.r)}</p>` : ''}
      <div id="play_${r.id}"></div>
      <div class="row"><button class="btn xs2" onclick="GXS.workPlay('${r.id}')">▶ ${esc(T('播放', 'Play'))}</button>
      <button class="btn xs2" onclick="GXS.workShare('${r.id}')">↗ ${esc(T('分享', 'Share'))}</button>
      <button class="btn xs2" onclick="GXS.workDl('${r.id}')">⬇ ${esc(T('下載', 'Download'))}</button>
      <button class="btn xs2 danger" onclick="GXS.workDel('${r.id}')">✕</button></div></div>`).join('');
  }
  const getRec = async id => (await allRec()).find(x => x.id === id);
  let playURL = null;
  async function workPlay(id) {
    const r = await getRec(id); if (!r) return;
    if (playURL) URL.revokeObjectURL(playURL);
    playURL = URL.createObjectURL(r.blob);
    const box = q1('#play_' + id); if (!box) return;
    box.innerHTML = r.kind === 'video'
      ? `<video src="${playURL}" controls playsinline autoplay style="width:100%;border-radius:12px;display:block;margin-bottom:8px;max-height:60vh;background:#000"></video>`
      : `<audio src="${playURL}" controls autoplay style="width:100%;margin-bottom:8px"></audio>`;
  }
  async function workShare(id) {
    const r = await getRec(id); if (!r) return;
    const blob = await readyBlob(r);
    shareBlob(blob, (r.kind === 'video' && blob !== r.blob) ? 'video/mp4' : r.mime, r.kind);
  }
  async function workDl(id) {
    const r = await getRec(id); if (!r) return;
    const blob = await readyBlob(r);
    const mime = (r.kind === 'video' && blob !== r.blob) ? 'video/mp4' : r.mime;
    if (isIOS()) return shareBlob(blob, mime, r.kind);
    const u = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = u; a.download = (EN ? GX.BK.en.toLowerCase().replace(/\s+/g, '') + '-' : '321' + GX.BK.zh + '-') + (r.kind === 'video' ? 'video' : 'voice') + extOf(mime);
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 6000);
  }
  async function workDel(id) {
    if (!confirm(T('確定刪除這個作品？', 'Delete this work?'))) return;
    await openWDB(); await delRec(id); paintWorks(); say(T('已刪除', 'Deleted'));
  }

  /* ── 面板 ───────────────────────────────────────────────────── */
  const TABS = [['text', ['文字', 'Text']], ['photo', ['相片', 'Photo']], ['look', ['版面', 'Layout']], ['rec', ['配樂與錄製', 'Music & record']]];
  const L2 = a => T(a[0], a[1]);
  function chips(list, cur, key) {
    return `<div class="gxchips">${list.map(x => `<button class="${String(cur) === String(x[0]) ? 'on' : ''}" data-k="${key}" data-v="${esc(x[0])}">${esc(x[1])}</button>`).join('')}</div>`;
  }
  const hint = t => `<p class="xs muted" style="margin:6px 0 0">${esc(t)}</p>`;
  function moveCtl(resetLabel) {
    return `<div class="row" style="margin-top:8px">
        <button class="btn xs2 ${origMove ? 'pri' : ''}" data-k="omTog">${esc(origMove ? T('✋ 拖動中：點此鎖定', '✋ Dragging on — tap to lock') : T('✋ 用手指拖動文字', '✋ Drag the text'))}</button>
        <button class="btn xs2" data-k="omReset">${esc(resetLabel)}</button></div>
      <div class="row" style="margin-top:6px"><button class="btn xs2" data-k="nudge" data-v="-1,0">←</button><button class="btn xs2" data-k="nudge" data-v="0,-1">↑</button><button class="btn xs2" data-k="nudge" data-v="0,1">↓</button><button class="btn xs2" data-k="nudge" data-v="1,0">→</button></div>
      ${hint(origMove ? T('現在手指在上方預覽圖拖一拖，文字就會跟著移動；移好後按「鎖定」才能再捲動頁面。', 'Drag on the preview to move the text. Tap lock when done.') : T('也可以按方向鍵微調位置。', 'The arrows nudge the position.'))}`;
  }
  function tabText() {
    const g = st(), FULL = isFull();
    let h = `<p class="gxlab">${esc(T('經文／金句', 'Verse'))}</p>
      <textarea id="gxsT" rows="3">${esc(item.t)}</textarea>
      <p class="gxlab">${esc(T('出處', 'Reference'))}</p><input id="gxsR" value="${esc(item.ref || '')}">`;
    if (FULL) {
      h += `<p class="gxlab">${esc(T('文字內容', 'Text'))}</p>${chips([['verse', T('經文', 'Verse')], ['greet', T('問候語', 'Greeting')]], fullKind, 'fk')}`;
      if (fullKind === 'verse') {
        h += `<input id="gxsOwn" value="${esc(blessOwn)}" style="margin-top:8px" placeholder="${esc(T('自己說（選填）：想對他說什麼？例如：他最近工作很辛苦', 'Your own words (optional), e.g. he has been working hard'))}">
          <div class="row" style="margin-top:8px">
            <button class="btn pri" data-k="bless" ${busy ? 'disabled' : ''}>${busy ? esc(T('小智寫作中…', 'Xiaozhi is writing…')) : esc(T('✍️ 小智寫祝福（附在經文下面）', '✍️ Xiaozhi writes a blessing'))}</button>
            <button class="btn" data-k="tw" ${busy ? 'disabled' : ''}>${esc(T('✨ 改一改', '✨ Revise'))}</button>
            <button class="btn xs2" data-k="fbClr">${esc(T('不要祝福', 'No blessing'))}</button></div>
          <div class="gxchips" id="gxsTw" style="display:none;margin-top:6px">${TW_PICKS.map(p => `<button data-k="twp" data-v="${esc(p)}">${esc(p)}</button>`).join('')}</div>
          <textarea id="gxsFB" rows="2" style="margin-top:8px" placeholder="${esc(T('按上面的鈕，小智會依這節經文寫一兩句短祝福；也可以自己寫。', 'Tap the button for a one- or two-sentence blessing, or write your own.'))}">${esc(fullBless)}</textarea>`;
      } else {
        h += `<textarea id="gxsGreet" rows="2" style="margin-top:8px" placeholder="${esc(T('平安喜樂，主愛你！', 'Peace and joy to you!'))}">${esc(g.greet || '')}</textarea>`;
      }
    } else {
      h += `<p class="gxlab">${esc(T('卡片內文', 'Card text'))}</p>
        <textarea id="gxsN" rows="4" placeholder="${esc(T('寫下你的領受或祝福', 'Your note or blessing'))}">${esc(note)}</textarea>
        <input id="gxsOwn" value="${esc(blessOwn)}" style="margin-top:6px" placeholder="${esc(T('自己說（選填）：想對他說什麼？例如：他最近工作很辛苦', 'Your own words (optional), e.g. he has been working hard'))}">
        <div class="row" style="margin-top:8px">
          <button class="btn pri" data-k="bless" ${busy ? 'disabled' : ''}>${busy ? esc(T('小智寫作中…', 'Xiaozhi is writing…')) : '✍️ ' + esc(T('請小智寫祝福', 'Xiaozhi writes a blessing'))}</button>
          <button class="btn" data-k="tw" ${busy ? 'disabled' : ''}>${esc(T('✨ 改一改', '✨ Revise'))}</button>
          ${item.n0 ? `<button class="btn xs2" data-k="mine">${esc(T('用我的領受', 'Use my note'))}</button>` : ''}
          <button class="btn xs2" data-k="nonote">${esc(T('不要內文', 'No text'))}</button></div>
        <div class="gxchips" id="gxsTw" style="display:none;margin-top:6px">${TW_PICKS.map(p => `<button data-k="twp" data-v="${esc(p)}">${esc(p)}</button>`).join('')}</div>
        ${hint(T('寫給：', 'Written for: ') + GX.D.icon[GX.aud()] + ' ' + GX.D.names[GX.aud()] + T('（到「小智」頁或「我的」設定可以更改）', ' (change it in Xiaozhi or Me)'))}`;
    }
    h += `<p class="gxlab">${esc(T('稱呼（寫給誰）', 'Greeting (to whom)'))}</p><input id="gxsTo" value="${esc(toVal())}" placeholder="${esc(T('例如：親愛的小明：平安！（留空就不印）', 'e.g. Dear Sam, peace be with you! (blank for none)'))}">`;
    if (!FULL) h += `<p class="gxlab">${esc(T('上方團體名', 'Group name (top)'))}</p><input id="gxsTop" value="${esc(g.top)}" placeholder="${esc(DEF_TOP())}">`;
    h += `<p class="gxlab">${esc(T('署名', 'Signature'))}</p><input id="gxsSign" value="${esc(g.sign)}" placeholder="${esc(DEF_SIGN())}">`;
    h += fontInkUI();
    return h;
  }
  function tabLook() {
    const g = st();
    if (isFull()) return `${hint(T('整張相片就是整張卡片，不加邊框；只留稱呼、經文（或問候語）與署名，自動排在相片上方最空的地方。', 'The whole photo is the card, with no border: just the greeting, the verse (or a greeting line) and the signature, placed where the photo is emptiest.'))}
      <p class="gxlab">${esc(T('文字大小（也可以在預覽圖上用兩指捏合縮放）', 'Text size (or pinch on the preview)'))}　<b id="fSzV">${Math.round(fullScale * 100)}%</b></p>
      <input type="range" id="fSz" min="50" max="250" step="5" value="${Math.round(fullScale * 100)}" style="width:100%;padding:0;border:0;background:none">
      ${moveCtl(T('↺ 回到自動位置', '↺ Auto position'))}`;
    return `<p class="gxlab">${esc(T('樣式', 'Style'))}</p>
      <div class="gxchips">${TPL_ORDER.map(k => `<button class="gxtpl${g.tpl === k ? ' on' : ''}" data-k="tpl" data-v="${k}"><i style="background:linear-gradient(135deg,${TPL[k].bg[0]},${TPL[k].bg[2]});border-color:${TPL[k].gold}"></i>${esc(L2(TPL[k].n))}</button>`).join('')}</div>
      <p class="gxlab">${esc(T('外框', 'Border'))}</p>${chips(BORDERS.map(b => [b[0], L2(b[1])]), g.border, 'border')}
      <p class="gxlab">${esc(T('尺寸', 'Size'))}</p>${chips(Object.keys(SIZES).map(k => [k, L2(SIZES[k][2])]), g.size, 'size')}
      <p class="gxlab">${esc(T('字級', 'Text size'))}</p>${chips(FS.map(f => [f[0], L2(f[1])]), g.fs, 'fs')}
      ${hint(T('字級會一起放大團體名稱、稱呼、經文、內文與署名。', 'Scales the group name, greeting, verse, text and signature together.'))}
      <button class="btn block" id="cardAuto" data-k="autofit" style="margin:10px 0 4px;width:100%">${esc(T('✨ 一鍵調整：依經文長度自動選尺寸與字級', '✨ Auto-fit: pick size and text size for this text'))}</button>
      <p class="xs" id="cardWarn" style="display:none;margin:6px 0 0;color:#B35A00"></p>`;
  }
  function tabPhoto() {
    const isStk = photoMode === 'sticker';
    const cur = isStk ? stkImg : photoImg, by = isStk ? stkBy : photoBy;
    const mk = (n, on) => n + (on ? ' ✓' : '');
    let h = chips([['bg', mk(T('當背景', 'Background'), !!photoImg)], ['sticker', mk(T('貼在卡片上', 'Sticker'), !!stkImg)], ['orig', T('原圖', 'Original')], ['full', T('整張原圖', 'Full photo')]], photoMode, 'pmode');
    h += `<p class="gxlab">${esc(T('內建圖庫（先選分類，點一下就套用）', 'Built-in gallery (pick a category, tap to use)'))}</p>
      <div id="gxBgCats" class="gxchips"></div><div id="gxBgStrip" class="gxstrip"><span class="xs muted">${esc(T('載入中…', 'Loading…'))}</span></div>`;
    if (cur) {
      if (photoMode === 'full') h += hint(T('整張原圖：文字大小與位置到「版面」調整；稱呼、經文或問候語、祝福到「文字」修改。', 'Full photo: adjust text size and position under Layout; edit the words under Text.'));
      if (photoMode === 'orig') {
        h += hint(T('原圖完整呈現、不裁切，文字排在不蓋住相片的空位。', 'The photo is shown whole and uncropped; the text sits in the free space beside it.'))
          + `<p class="gxlab">${esc(T('相片大小', 'Photo size'))}</p>${chips([[0.85, T('小', 'Small')], [1, T('中', 'Medium')], [1.15, T('大', 'Large')]], origScale, 'oSz')}
          <p class="gxlab">${esc(T('構圖（自動會依相片與卡片尺寸挑最合適的）', 'Layout (Auto picks the best fit)'))}</p>${chips([['auto', T('自動', 'Auto')], ['stack', T('上圖下字', 'Photo on top')], ['side', T('左圖右字', 'Photo on left')]], origLay, 'oLay')}
          <p class="gxlab">${esc(T('文字位置（經文、出處與領受是一個區塊，可自己移動）', 'Text position'))}</p>${chips([[0, T('整塊一起移', 'Move together')], [1, T('分開移動', 'Move separately')]], origSplit ? 1 : 0, 'oSp')}
          ${origSplit ? `<p class="gxlab">${esc(T('現在要移動哪一塊？', 'Which part to move?'))}</p>${chips([['v', T('經文與出處', 'Verse & reference')], ['n', T('領受', 'My note')]], origTarget, 'oTg')}` : ''}
          ${moveCtl(T('↺ 回到預設', '↺ Reset'))}`;
      }
      if (isStk) h += `<p class="gxlab">${esc(T('形狀', 'Shape'))}</p>${chips(STK_SHAPES.map(x => [x[0], L2(x[1])]), stkShape, 'sShape')}
          <p class="gxlab">${esc(T('大小', 'Size'))}</p>${chips(STK_SIZES.map(x => [x[0], L2(x[1])]), stkSize, 'sSize')}
          <p class="gxlab">${esc(T('位置', 'Position'))}</p>${chips(STK_POS.map(x => [x[0], L2(x[1])]), stkPos, 'sPos')}`;
      if (by) h += hint(T('攝影：', 'Photo: ') + by + '（Pexels）');
      h += `<div class="row" style="margin-top:12px">
        <button class="btn xs2" data-k="own">${esc(T('換一張（從相簿）', 'Change (from album)'))}</button>
        <button class="btn xs2" data-k="px">${esc(T('🖼 從免費圖庫選', '🖼 Free photo library'))}</button>
        <button class="btn xs2" data-k="plib">${esc(T('📚 我的相片庫', '📚 My photos'))}</button>
        <button class="btn xs2" data-k="aig">${esc(T('✨ AI 生成美圖', '✨ Make with AI'))}</button>
        <button class="btn xs2 danger" data-k="nophoto">${esc(T('移除相片', 'Remove photo'))}</button></div>`;
    } else {
      h += `<button class="btn pri" style="width:100%;margin-top:12px" data-k="aig">${esc(T('✨ 用 AI 生成美圖（描述畫面，免費）', '✨ Make a picture with AI (free)'))}</button>
        <button class="btn" style="width:100%;margin-top:8px" data-k="px">${esc(T('🖼 從免費圖庫選', '🖼 Free photo library'))}</button>
        <button class="btn" style="width:100%;margin-top:8px" data-k="plib">${esc(T('📚 我的相片庫（用過的相片都在這裡）', '📚 My photos (everything you used before)'))}</button>
        <button class="btn" style="width:100%;margin-top:8px" data-k="own">${esc(T('📷 從相簿選一張', '📷 Pick from your album'))}</button>
        ${isStk && photoImg ? `<button class="btn" style="width:100%;margin-top:8px" data-k="useBg">${esc(T('把背景那張改成貼紙', 'Use the background photo as a sticker'))}</button>` : ''}
        ${hint(isStk ? T('貼紙會以拍立得的樣子貼在卡片上，可選形狀、大小與位置。', 'The sticker sits on the card like a polaroid; choose shape, size and position.') : T('選一張相片：整張原圖會把相片當成整張卡片；當背景會疊一層半透明的版型顏色。', 'Full photo turns the photo into the whole card; background adds a soft tint of the style colour.'))}`;
    }
    return h;
  }
  async function fillBuiltins() {
    const cats = q1('#gxBgCats', EL), strip = q1('#gxBgStrip', EL);
    if (!cats || !strip) return;
    try { await bgLoad(); } catch (e) { strip.innerHTML = `<span class="xs muted">${esc(T('圖庫連不上，請稍後再試', 'Could not reach the gallery'))}</span>`; return; }
    const cat = bgList.cats.some(c => c.id === st().bgCat) ? st().bgCat : (bgList.cats[0] || {}).id;
    cats.innerHTML = bgList.cats.map(c => `<button class="${c.id === cat ? 'on' : ''}" data-k="bgcat" data-v="${esc(c.id)}">${esc(bgName(c))}</button>`).join('');
    strip.innerHTML = bgList.list.map((x, i) => x.c !== cat ? '' : `<button class="gxcell" data-k="bgpick" data-v="${i}" title="${esc(bgName(x))}"><img src="${SITE + esc(x.t || x.f)}" alt="" loading="lazy" data-alt="${esc(x.t && x.t !== x.f ? SITE + x.f + '|' : '')}${SITE}bg/${esc(x.t || x.f)}" onerror="GXS.thumbErr(this)"><span>${esc(bgName(x))}</span></button>`).join('');
  }
  async function openPhotoLib() {
    const b = sub(T('📚 我的相片庫', '📚 My photos'), `<p class="xs muted">${esc(T('從相簿或圖庫選過的相片都會自動留在這裡（存在這支手機上，最多 40 張）。點一張就用；右上 × 是移出相片庫。', 'Photos you used are kept here on this phone (up to 40). Tap to use; × removes it.'))}</p><div class="gxgrid" id="plGrid"></div>`);
    const grid = q1('#plGrid', b);
    const draw = async () => {
      const all = await plAll();
      if (!all.length) { grid.innerHTML = `<p class="sm muted" style="grid-column:1/-1">${esc(T('還沒有相片。先從相簿或圖庫選一張，就會留在這裡。', 'No photos yet.'))}</p>`; return; }
      grid.innerHTML = all.map(o => `<div class="gxcell" data-id="${o.id}" style="position:relative;cursor:pointer"><img src="${o.thumb}" alt=""><span class="pxdel" data-d="${o.id}">×</span></div>`).join('');
      qa('.gxcell', grid).forEach(c => c.onclick = async e => {
        const d = e.target.closest('[data-d]');
        const db = await plOpen();
        if (d) { await plReq(db.transaction('p', 'readwrite').objectStore('p').delete(d.dataset.d)); if (st().photoLast === d.dataset.d) { st().photoLast = ''; keep(); } draw(); return; }
        const rec = await plReq(db.transaction('p').objectStore('p').get(c.dataset.id)); if (!rec) return;
        await plLoad(rec); closeSub(); paint();
      });
    };
    draw();
  }
  function tabRec() {
    const g = st(), on = recOn();
    return `<p class="gxlab">🎵 ${esc(T('背景音樂', 'Background music'))}</p>
      ${bgmBlob ? `<p class="sm" style="margin:0 0 2px"><b>♪ ${esc(sc(bgmName))}</b></p>${bgmCredit ? hint(sc(bgmCredit)) : ''}` : hint(T('從詩歌庫或手機選一首，錄影時會混進去。', 'Pick a song from the hymn library or your phone; it is mixed into recordings.'))}
      <button class="btn pri" style="width:100%;margin-top:8px" data-k="aim">${esc(T('🎼 用 AI 生成配樂（免費工具）', '🎼 Make music with AI (free tools)'))}</button>
      <div class="row" style="margin-top:8px"><button class="btn" data-k="hymn">${esc(T('🎵 從詩歌庫選', '🎵 Hymn library'))}</button>
        <button class="btn" data-k="bgmfile">${esc(bgmBlob ? T('換一首（從手機）', 'Change (from phone)') : T('從手機選音樂', 'Pick from phone'))}</button>
        ${bgmBlob ? `<button class="btn xs2 danger" data-k="nobgm">${esc(T('不要配樂', 'No music'))}</button>` : ''}</div>
      ${bgmBlob ? `<p class="gxlab">${esc(T('音量', 'Volume'))}</p>${chips([[0.12, T('小聲', 'Soft')], [0.22, T('適中', 'Medium')], [0.38, T('明顯', 'Strong')]], g.vol, 'vol')}` : ''}
      <p class="gxlab">🎙 ${esc(T('錄製', 'Record'))}</p>
      ${chips([['a', T('🎙 只有聲音', '🎙 Voice only')], ['c', T('🖼 卡片畫面', '🖼 Card video')], ['s', T('📷 自拍畫面', '📷 Selfie video')]], recMode, 'rmode')}
      <div id="gxsSelfWrap" style="${recMode === 's' ? '' : 'display:none'}"><div style="width:156px;height:156px;margin:8px auto;border-radius:50%;overflow:hidden;border:3px solid var(--brass);background:#000;-webkit-mask-image:-webkit-radial-gradient(white,black);isolation:isolate;position:relative"><video id="gxsSelf" muted playsinline autoplay style="position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;-webkit-transform:scaleX(-1);transform:scaleX(-1)"></video></div></div>
      <div class="gxrec"><span id="gxsRecSt">${on ? '<span class="recdot"></span>' + esc(recLabel) : esc(T('準備好了就按開始', 'Ready when you are'))}</span><b id="gxsRecTm">${mmss(recSec)}</b></div>
      <button class="btn ${on ? 'danger' : 'pri'}" style="width:100%" data-k="rec">${on ? esc(T('■ 停止並完成', '■ Stop and finish')) : esc(T('● 開始錄製', '● Start recording'))}</button>
      ${bgmBlob ? `<p class="gxlab">${esc(T('不錄音，只配音樂', 'Music only, no voice'))}</p>
      ${chips([[15, T('15 秒', '15 s')], [30, T('30 秒', '30 s')], [60, T('1 分鐘', '1 min')], [0, T('整首', 'Whole song')]], g.mc, 'mc')}
      <button class="btn" style="width:100%;margin-top:8px" data-k="mcrec">${on ? esc(T('■ 停止', '■ Stop')) : '🎵 ' + esc(T('製作音樂卡片', 'Make a music card'))}</button>` : ''}
      ${hint(T('有配樂時，結尾一律淡出 5 秒；淡出中再按一次「停止」就立即停。製作時請讓 App 留在前景、螢幕亮著。', 'With music, the ending always fades out over 5 seconds; tap stop again to end at once. Keep the app open with the screen on.'))}
      <button class="btn xs2" style="margin-top:8px" data-k="works">📂 ${esc(T('看我的作品', 'Open My works'))}</button>`;
  }
  function paint() {
    if (!EL || !item) return;
    const body = q1('#gxsBody', EL);
    if (body) {
      const fn = { look: tabLook, photo: tabPhoto, text: tabText, rec: tabRec }[tab];
      body.innerHTML = fn();
      qa('.gxtabs button', EL).forEach(b => b.classList.toggle('on', b.getAttribute('data-t') === tab));
      bindText();
      if (tab === 'photo') fillBuiltins();
      if (tab === 'rec' && recMode === 's' && selfieStream) attachSelfie();
    }
    attachDrag();
    renderCard();
  }
  function bindText() {
    const on = (id, fn, slow) => {
      const el = q1(id, EL); if (!el) return;
      let tm = null;
      el.oninput = () => { fn(el.value); clearTimeout(tm); tm = setTimeout(renderCard, slow ? 400 : 120); };
    };
    on('#gxsT', v => { item.t = v; });
    on('#gxsR', v => { item.ref = v; });
    on('#gxsTo', v => { st().to = v; keep(); }, 1);
    on('#gxsN', v => { note = v; }, 1);
    on('#gxsFB', v => { fullBless = v; }, 1);
    on('#gxsGreet', v => { st().greet = v; keep(); }, 1);
    on('#gxsTop', v => { st().top = v; keep(); }, 1);
    on('#gxsSign', v => { st().sign = v; keep(); }, 1);
    const own = q1('#gxsOwn', EL); if (own) own.oninput = () => { blessOwn = own.value; };
    const ci = q1('#gxInkC', EL);
    if (ci) { ci.oninput = () => { st().cardInk = ci.value; renderFast(); }; ci.onchange = () => { st().cardInk = ci.value; keep(); paint(); }; }
    const fs = q1('#fSz', EL);
    if (fs) {
      fs.oninput = () => { fullScale = fs.value / 100; const lb = q1('#fSzV', EL); if (lb) lb.textContent = fs.value + '%'; renderFast(); };
      fs.onchange = () => renderCard();
    }
  }
  /* 拖動文字時用半尺寸 JPEG 快速重畫預覽；放開手指再畫完整的 */
  let dragRaf = 0;
  function renderFast() {
    if (dragRaf) return;
    dragRaf = requestAnimationFrame(() => {
      dragRaf = 0;
      const d = dims(), cv = document.createElement('canvas');
      try { drawCard(cv, Math.round(d[0] / 2), Math.round(d[1] / 2)); } catch (e) { return; }
      const img = q1('#gxsPv'); if (img) img.src = cv.toDataURL('image/jpeg', .8);
    });
  }
  function origShift(dx, dy) {
    if (origSplit && origTarget === 'n' && photoMode !== 'full') { origNX += dx; origNY += dy; }
    else { origDX += dx; origDY += dy; if (!origSplit) { origNX = origDX; origNY = origDY; } }
  }
  function attachDrag() {
    const box = q1('.gxspv', EL); if (!box) return;
    const on = !!(photoImg && (photoMode === 'orig' || photoMode === 'full') && origMove);
    box.style.touchAction = on ? 'none' : '';
    box.style.outline = on ? '2px dashed var(--brass)' : '';
    if (!on) { box.onpointerdown = box.onpointermove = box.onpointerup = box.onpointercancel = null; return; }
    let sx = 0, sy = 0, b0 = [0, 0, 0, 0], act = false;
    const pts = new Map(); let d0 = 0, s0 = 1;
    const full = photoMode === 'full';
    const dist = () => { const a = Array.from(pts.values()); return Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1]) || 1; };
    box.onpointerdown = e => {
      const img = q1('img', box); if (!img) return;
      pts.set(e.pointerId, [e.clientX, e.clientY]);
      try { box.setPointerCapture(e.pointerId); } catch (_) {}
      e.preventDefault();
      if (full && pts.size === 2) { d0 = dist(); s0 = fullScale; act = false; return; }
      act = true; sx = e.clientX; sy = e.clientY; b0 = [origDX, origDY, origNX, origNY];
    };
    box.onpointermove = e => {
      if (pts.has(e.pointerId)) pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (full && pts.size >= 2) {
        fullScale = Math.max(.5, Math.min(2.5, s0 * dist() / d0));
        const sl = q1('#fSz', EL); if (sl) sl.value = Math.round(fullScale * 100);
        const lb = q1('#fSzV', EL); if (lb) lb.textContent = Math.round(fullScale * 100) + '%';
        renderFast(); return;
      }
      if (!act) return;
      const img = q1('img', box); if (!img) return;
      const r = img.getBoundingClientRect();
      origDX = b0[0]; origDY = b0[1]; origNX = b0[2]; origNY = b0[3];
      origShift((e.clientX - sx) / r.width, (e.clientY - sy) / r.height);
      renderFast();
    };
    const end = e => {
      const was = pts.size; pts.delete(e.pointerId);
      if (was >= 2) { act = false; renderCard(); return; }
      if (!act) return; act = false; renderCard();
    };
    box.onpointerup = end; box.onpointercancel = end;
  }
  function onClick(e) {
    let t = e.target;
    while (t && t !== EL && !(t.getAttribute && (t.getAttribute('data-k') || t.getAttribute('data-t')))) t = t.parentNode;
    if (!t || t === EL) { if (e.target === EL) close(); return; }
    const tb = t.getAttribute('data-t');
    if (tb) { tab = tb; paint(); return; }
    const k = t.getAttribute('data-k'), v = t.getAttribute('data-v'), g = st();
    if (k === 'x') return close();
    if (k === 'save') return saveImg();
    if (k === 'share') return shareImg();
    if (k === 'tpl' || k === 'size' || k === 'border') { g[k] = v; keep(); return paint(); }
    if (k === 'fs' || k === 'vol') { g[k] = +v; keep(); return paint(); }
    if (k === 'autofit') { const r = cardAutoFit(); keep(); paint(); return say(r); }
    if (k === 'mc') { if (recOn()) return; g.mc = +v; keep(); return paint(); }
    if (k === 'pmode') { photoMode = v; if (v !== 'orig' && v !== 'full') origMove = false; origDX = origDY = origNX = origNY = 0; if (v !== 'sticker') { g.photoMode = v; keep(); } return paint(); }
    if (k === 'fk') { fullKind = v; return paint(); }
    if (k === 'omTog') { origMove = !origMove; return paint(); }
    if (k === 'omReset') { origDX = origDY = origNX = origNY = 0; return renderCard(); }
    if (k === 'nudge') { const p = v.split(',').map(Number); origShift(p[0] * 0.025, p[1] * 0.025); return renderCard(); }
    if (k === 'oSz') { origScale = +v; origDX = origDY = origNX = origNY = 0; return paint(); }
    if (k === 'oLay') { origLay = v; origDX = origDY = origNX = origNY = 0; return paint(); }
    if (k === 'oSp') { origSplit = v === '1'; if (origSplit) { origNX = origDX; origNY = origDY; } return paint(); }
    if (k === 'oTg') { origTarget = v; return paint(); }
    if (k === 'sShape') { stkShape = v; if (stkShape === 'w' && stkSize < .38) stkSize = .46; return paint(); }
    if (k === 'sSize') { stkSize = +v; return paint(); }
    if (k === 'sPos') { stkPos = v; return paint(); }
    if (k === 'useBg') { stkImg = photoImg; stkBy = photoBy; photoImg = null; photoBy = ''; return paint(); }
    if (k === 'bgcat') { g.bgCat = v; keep(); return fillBuiltins(); }
    if (k === 'bgpick') { const it = bgList && bgList.list[+v]; if (it) setPhotoURL(SITE + it.f, ''); return; }
    if (k === 'aig') return openAiGen();
    if (k === 'aim') return openAiMusic();
    if (k === 'cfont') { g.cardFont = v; ['IBKai', 'IBYuan'].forEach(n => { if (IBF[n] && IBF[n] !== 'loading' && IBF[n] !== 'ok') delete IBF[n]; }); keep(); return paint(); }
    if (k === 'cink') { g.cardInk = v; keep(); return paint(); }
    if (k === 'gal') return openGallery();
    if (k === 'px') return openPexels();
    if (k === 'plib') return openPhotoLib();
    if (k === 'own') return pickOwn();
    if (k === 'nophoto') {
      if (photoMode === 'sticker') { stkImg = null; stkBy = ''; }
      else { photoImg = null; photoBy = ''; origMove = false; g.photoLast = ''; keep(); }
      return paint();
    }
    if (k === 'bless') return blessWrite();
    if (k === 'tw') { const c = q1('#gxsTw', EL); if (c) c.style.display = c.style.display === 'none' ? 'flex' : 'none'; return; }
    if (k === 'twp') return tweak(v);
    if (k === 'fbClr') { fullBless = ''; return paint(); }
    if (k === 'mine') { note = item.n0 || ''; return paint(); }
    if (k === 'nonote') { note = ''; return paint(); }
    if (k === 'hymn') return openHymns();
    if (k === 'bgmfile') return pickBgmFile();
    if (k === 'nobgm') { bgmBlob = null; bgmName = ''; bgmCredit = ''; return paint(); }
    if (k === 'rmode') return setRecMode(v);
    if (k === 'rec') return toggleRec();
    if (k === 'mcrec') return musicRec();
    if (k === 'works') { if (recOn()) return say(T('錄製中，先完成再去', 'Finish recording first')); close(); return go('me', 0, 'works'); }
  }
  async function saveImg() {
    const b = await cardBlob(); if (!b) { say(T('請長按圖片儲存', 'Press and hold the picture to save')); return; }
    const name = fileBase() + cardExt();
    if (isIOS()) {
      const f = new File([b], name, { type: cardMime });
      if (navigator.canShare && navigator.canShare({ files: [f] })) {
        say(T('在分享面板選「儲存影像」就會存進相簿', 'Choose “Save Image” to put it in Photos'));
        try { await navigator.share({ files: [f] }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
      }
      say(T('請長按上面的圖片儲存', 'Press and hold the picture above to save'));
      return;
    }
    const u = URL.createObjectURL(b), a = document.createElement('a');
    a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 4000);
    say(T('已儲存', 'Saved'));
  }
  async function shareImg() {
    const b = await cardBlob();
    if (!b) return saveImg();
    const f = new File([b], fileBase() + cardExt(), { type: cardMime });
    if (navigator.canShare && navigator.canShare({ files: [f] })) {
      try { await navigator.share({ files: [f], text: sc(verseText() + (item.ref ? '\n—— ' + item.ref : '')) }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    saveImg();
  }
  /* 找出這段經文在創世記哪一章哪一節（畫線問小智、整段畫線…出處沒有節號時用） */
  const PUN = /[\s，。、；：？！「」『』（）《》〈〉“”‘’—…·,.;:?!"'()\[\]\-–]/g;
  function normV(x) {
    let t = String(x || '');
    if (EN) return t.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (isSC() && typeof toSC === 'function') t = toSC(t);
    return t.replace(PUN, '');
  }
  function findRef(text, hint) {
    const q = normV(text);
    if (q.length < 4 || !D || !D.txt || D.noRef) return null;
    const head = q.slice(0, 30), tail = q.slice(-30);
    const order = [];
    const N = GX.NCH();
    if (hint >= 1 && hint <= N) order.push(hint);
    for (let c = 1; c <= N; c++) if (c !== hint) order.push(c);
    for (const c of order) {
      const vs = D.txt[c] || [];
      let joined = '', starts = [];
      vs.forEach(v => { starts.push(joined.length); joined += normV(v); });
      const i = joined.indexOf(head);
      if (i < 0) continue;
      let j = joined.indexOf(tail, i);
      if (j < 0) j = i + head.length - 1; else j = j + tail.length - 1;
      let a = 0, b = 0;
      for (let k = 0; k < starts.length; k++) { if (starts[k] <= i) a = k; if (starts[k] <= j) b = k; }
      return { ch: c, v: a + 1, v2: b + 1 };
    }
    return null;
  }
  const fmtRef = f => T(`${GX.BK.zh} ${f.ch}:${f.v}${f.v2 > f.v ? '-' + f.v2 : ''}`, `${GX.BK.en} ${f.ch}:${f.v}${f.v2 > f.v ? '–' + f.v2 : ''}`);
  function open(o) {
    o = o || {};
    const text = String(o.text || o.t || '').replace(/<[^>]+>/g, '').replace(/[ \t]+/g, ' ').trim();
    if (!text) { say(T('沒有可以做圖的內容', 'Nothing to make a card from')); return false; }
    stopTTS();
    let ref = o.ref || '';
    if (!o.plain && !/\d+\s*:\s*\d+/.test(ref)) {
      const m = String(ref).match(/(\d+)/);
      const f = findRef(text, m ? +m[1] : ((R && R.ch) || S.last || 0));
      if (f) ref = fmtRef(f);
    }
    item = { t: text, ref, n0: String(o.note || o.n || '').trim(), plain: !!o.plain };
    note = item.n0;
    fullBless = ''; blessOwn = '';
    photoMode = st().photoMode || 'full';
    if (!EL) {
      EL = document.createElement('div'); EL.id = 'gxs'; EL.className = 'gxsmask gxsmain';
      EL.addEventListener('click', onClick);
      GXA_root().appendChild(EL);
    }
    EL.innerHTML = `<div class="gxscard">
      <div class="gxshead"><b>🖼 ${esc(T('美圖工作室', 'Card studio'))}</b><button class="ico" data-k="x" aria-label="close">✕</button></div>
      <div class="gxspv"><img id="gxsPv" alt=""></div>
      <p class="xs muted" style="text-align:center;margin:4px 0 8px">${esc(T('長按圖片也可以直接儲存', 'You can also press and hold the picture to save'))}</p>
      <div class="gxacts"><button class="btn pri" data-k="share">↗ ${esc(T('分享', 'Share'))}</button><button class="btn" data-k="save">⬇ ${esc(T('存到手機', 'Save'))}</button></div>
      <div class="gxtabs">${TABS.map(x => `<button data-t="${x[0]}">${esc(T(x[1][0], x[1][1]))}</button>`).join('')}</div>
      <div id="gxsBody"></div></div>`;
    EL.classList.add('on');
    document.documentElement.setAttribute('data-gxs', '1');
    paint();
    plRestore().then(() => { if (photoImg) paint(); });
    return true;
  }
  function close() {
    if (recOn()) {
      if (!confirm(T('正在錄製，關掉會停止錄製。確定嗎？', 'Recording in progress — closing will stop it. Close?'))) return;
      recFading = true; try { mr.stop(); } catch (e) {}
    }
    hymnStop(); stopSelfie(); closeSub();
    if (EL) EL.classList.remove('on');
    document.documentElement.removeAttribute('data-gxs');
  }
  /* 小智回答做成美圖：從畫線來的提問帶著原句，就用原句當經文、回答摘要當內文；
     否則回答摘要當主文（不加引號、不冒充經文），出處寫「小智」。 */
  function excerpt(t, max) {
    const p = (typeof SAGE321 !== 'undefined' && SAGE321.plainOf) ? SAGE321.plainOf(t) : String(t || '');
    const s = p.replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    const re = EN ? /[^.!?]*[.!?]+["”’)]*\s*/g : /[^。！？]*[。！？]+[」』）]*/g;
    let out = '', m;
    while ((m = re.exec(s)) !== null) { if ((out + m[0]).length > max) break; out += m[0]; if (!m[0]) break; }
    return (out || s.slice(0, max)).trim() + (out ? '' : '…');
  }
  function quoteOf(text) {
    const m = String(text || '').match(/^\s*>\s?(.+)$/m);
    if (!m) return '';
    const x = m[1].replace(/\*\*/g, '').trim();
    const max = EN ? 320 : 150;
    return (x.length >= (EN ? 30 : 12) && x.length <= max + 60) ? x : '';
  }
  /* VPICK321：自己問的問題（不是從畫線帶原句來的），從回答裡找出最合適的經文放上美圖 */
  function fromAnswer(text, q) {
    if (window.VPICK321 && !(EN ? /[“"][^”"]{4,300}[”"]/ : /「[^」]{4,300}」/).test(String(q || ''))) {
      VPICK321.pick(text).then(function (r) { if (r) open({ text: r.t, ref: r.ref, note: '' }); else fromAnswer0(text, q); }, function () { fromAnswer0(text, q); });
      return;
    }
    return fromAnswer0(text, q);
  }
  function fromAnswer0(text, q) {
    const m = String(q || '').match(EN ? /[“"]([^”"]{4,300})[”"]/ : /「([^」]{4,300})」/);
    const n = (R && R.ch) || S.last || 1;
    const qt = quoteOf(text);
    if (m) return open({ text: m[1], ref: GX.chLabel(n), note: qt || excerpt(text, EN ? 320 : 140) });
    return open({ text: qt || excerpt(text, EN ? 300 : 120), ref: T('小智 · ', 'Xiaozhi · ') + GX.chLabel(n), plain: true });
  }

  const CSS = `
.gxsmask{position:fixed;inset:0;z-index:180;background:rgba(10,16,14,.5);display:flex;align-items:flex-end;justify-content:center}
.gxsmain{display:none}.gxsmain.on{display:flex}
#gxsSub,#gxsRv{z-index:190}
.gxscard{background:var(--card);color:var(--ink);width:100%;max-width:640px;max-height:92vh;overflow-y:auto;border-radius:20px 20px 0 0;padding:14px 16px calc(18px + env(safe-area-inset-bottom));-webkit-overflow-scrolling:touch}
.gxshead{display:flex;align-items:center;gap:8px;margin-bottom:8px}.gxshead b{flex:1;font-family:var(--serif);font-size:17px}
.gxspv{display:flex;justify-content:center;background:var(--paper);border-radius:14px;padding:10px}
.gxspv img{display:block;max-width:100%;max-height:46vh;width:auto;height:auto;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.14);-webkit-touch-callout:default}
.gxacts{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0}.gxacts .btn{flex:1 1 auto}
.gxtabs{display:flex;gap:4px;border-bottom:1px solid var(--line);margin:10px 0 8px;overflow-x:auto}
.gxtabs button{flex:1 0 auto;border:0;background:none;color:var(--dusk);font:inherit;font-size:14px;padding:8px 10px;border-bottom:2px solid transparent;cursor:pointer;white-space:nowrap}
.gxtabs button.on{color:var(--pine);border-bottom-color:var(--pine);font-weight:700}
.gxlab{font-size:12.5px;color:var(--dusk);margin:12px 0 6px;font-weight:600}
.gxchips{display:flex;flex-wrap:wrap;gap:6px}
.gxchips button{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:5px 12px;font:inherit;font-size:13px;cursor:pointer;white-space:nowrap}
.gxchips button.on{background:var(--pine);border-color:var(--pine);color:#fff}
.gxtpl{display:inline-flex;align-items:center;gap:6px}.gxtpl i{display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid}
.gxscard input,.gxscard textarea{width:100%;min-width:0;border:1px solid var(--line);border-radius:10px;padding:9px 11px;font:inherit;font-size:15px;background:var(--paper);color:var(--ink);box-sizing:border-box}
.gxscard textarea{resize:vertical;line-height:1.7}
.gxgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:8px;margin-top:10px}
.gxcell{border:1px solid var(--line);background:var(--paper);border-radius:10px;padding:0;overflow:hidden;cursor:pointer;color:var(--ink);font:inherit}
.gxcell img{display:block;width:100%;aspect-ratio:9/16;object-fit:cover;background:var(--line)}
.gxcell span{display:block;font-size:11px;padding:3px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gxbar{display:flex;gap:8px}.gxbar input{flex:1 1 0;width:0}.gxbar .btn{flex:0 0 auto;white-space:nowrap}
.gxhrow{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--line)}
.gxhp{width:38px;height:38px;border-radius:50%;border:1px solid var(--pine);background:var(--card);color:var(--pine);flex:0 0 auto;cursor:pointer;font-size:14px}
.gxhn{flex:1;min-width:0}.gxhn b{display:block;font-weight:600;font-size:15px}.gxhn small{display:block;color:var(--dusk);font-size:12px}
.gxrec{display:flex;justify-content:space-between;align-items:center;margin:10px 0 8px;font-size:14px;color:var(--dusk)}
.gxrec b{font-family:var(--mono);color:var(--ink)}
.recdot{display:inline-block;width:10px;height:10px;border-radius:50%;background:#D23B3B;margin-right:6px;animation:gxblink 1s infinite}
@keyframes gxblink{50%{opacity:.25}}
.gxwork video,.gxwork audio{margin-top:4px}
.gxstrip{display:flex;gap:8px;overflow-x:auto;padding:8px 0 4px;-webkit-overflow-scrolling:touch}
.gxstrip .gxcell{flex:0 0 76px}
.gxstrip .gxcell img{aspect-ratio:9/16}
.pxdel{position:absolute;right:4px;top:4px;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;text-align:center;line-height:24px;font-size:16px}
`;
  function css() {
    if (document.getElementById('gxscss')) return;
    const s = document.createElement('style'); s.id = 'gxscss'; s.textContent = CSS;
    document.head.appendChild(s);
  }
  css();
  GX.addRoute('me/works', vWorks);
  function after(k) { if (k === 'me/works') paintWorks(); }

  return {
    open, close, fromAnswer, after,
    workPlay, workShare, workDl, workDel,
    thumbErr: img => {
      const alt = String(img.getAttribute('data-alt') || '').split('|').filter(Boolean);
      if (!alt.length) { const c = img.closest('.gxcell'); if (c) c.remove(); return; }
      img.setAttribute('data-alt', alt.slice(1).join('|'));
      img.src = alt[0];
    },
    _findRef: (t, h) => findRef(t, h),
    isOpen: () => !!(EL && EL.classList.contains('on')),
    recording: recOn,
    _st: st, _draw: (w, h) => { const c = document.createElement('canvas'); drawCard(c, w, h); return c; },
    _item: () => item, _setPhoto: (im, by) => { setPhoto(im, by); paint(); }, _state: () => ({ photoMode, fullScale, fullKind, fullBless, origDX, origDY }), _note: () => note
  };
})();


/* ═══════════════════════════════════════════════════════════════════
   PRON321 · 真人朗讀發音修正（依技能 321-reading-pronunciation）
   只改「送去語音的文字」，畫面、分享、美圖的字一個都不動。
   · SHARED：兩版共用的指定讀音（繁、简兩種寫法都列）
   · TW：臺灣版（繁體介面）卻用了大陸口音語音（zh-CN）時才套
   · CN：大陸版（简体介面）卻用了臺灣口音語音（zh-TW）時才套
   規則一律帶上下文、長詞先；每條替代字只有一個讀音，套兩次也不會變（可重複套用）。
   ═══════════════════════════════════════════════════════════════════ */
var PRON321 = (function () {
  'use strict';
  var NUM = '[〇零一二三四五六七八九十百千萬万兩两幾几]+';
  var UNIT = '(?:肘|尺|丈|寸|虎口|竿|掌|里|步)';
  function R(s) { return new RegExp(s, 'g'); }
  /* [pattern, 替代] —— 繁、简各一條（同形的只寫一次） */
  var SHARED = [
    /* 重 chóng／zhòng */
    [R('重生'), '蟲生'], [R('重新'), '蟲新'], [R('重建'), '蟲建'],
    [R('重擔'), '眾擔'], [R('重担'), '众担'],
    /* 長 zhǎng：職稱、成長；長＋數字＋度量衡 cháng */
    [R('長(?=' + NUM + UNIT + ')'), '常'], [R('长(?=' + NUM + UNIT + ')'), '常'],
    [R('長(老|子|大|進|輩|執)'), '掌$1'],
    [R('长(老|子|大|进|辈|执)'), '掌$1'],
    [R('(成|生|年|家|族|官|兄|師|师|首|牧|夫|組|组|團|团|校|部|區|区|社)(長|长)(?![久遠远存期])'), '$1掌'],
    /* 差 chāi */
    [R('差(遣|派|役)'), '拆$1'],
    [R('([主神祂他我])差(?=[人你我他門门使])'), '$1拆'],
    /* 得著 dé zhuó */
    [R('得[著着](?![急涼凉迷火慌])'), '得酌'],
    /* 為 wèi：為主而活、為人禱告…（「成為」「以…為主」不在這些組合裡） */
    [R('(^|[^成作行認认稱称以視视])([為为])(?=(?:主|神|祂|基督|耶穌|耶稣)(?:而活|而死|作工|做工|擺上|摆上|受苦|犧牲|牺牲|捨命|舍命|捨己|舍己|發熱心|发热心))'), '$1衛'],
    [R('([為为])(?=(?:人|別人|别人|眾人|众人|你|你們|你们|我們|我们|他們|他们|弟兄姊妹)(?:禱告|祷告|代禱|代祷|代求|捨命|舍命))'), '衛'],
    /* 給 jǐ */
    [R('(供|補|补)[給给]'), '$1己'], [R('[給给]予'), '己予'],
    /* 應 yìng／yīng */
    [R('應許'), '映許'], [R('应许'), '映许'], [R('應驗'), '映驗'], [R('应验'), '映验'],
    [R('應當'), '英當'], [R('应当'), '英当'],
    /* 傳 chuán／zhuàn */
    [R('傳道'), '船道'], [R('传道'), '船道'],
    [R('(行|自)傳'), '$1賺'], [R('(行|自)传'), '$1赚'], [R('傳記'), '賺記'], [R('传记'), '赚记'],
    /* 專名與聖經特殊詞 */
    [R('沒藥'), '莫藥'], [R('没药'), '莫药'],
    [R('嗎哪'), '馬哪'], [R('吗哪'), '马哪'],
    [R('撒種'), '撒腫'], [R('撒种'), '撒肿'],
    [R('撒但'), '仨但'],
    [R('數一數'), '鼠一鼠'], [R('数一数'), '鼠一鼠'],
    [R('數(點|算)'), '鼠$1'], [R('数(点|算)'), '鼠$1'],
    [R('參孫'), '餐孫'], [R('参孙'), '餐孙'],
    [R('阿們'), '阿門'], [R('阿们'), '阿门'],
    [R('冠冕'), '官冕'],
    [R('朝(見|拜)'), '潮$1'], [R('朝(见|拜)'), '潮$1'],
    [R('背(起|負|负)'), '揹$1'],
    [R('看守'), '刊守'],
    [R('說客'), '稅客'], [R('说客'), '税客'],
    [R('年少'), '年紹'], [R('(^|[^多不減减缺很太至最])少年'), '$1紹年'],
    [R('盛(滿|满)'), '成$1'],
    [R('([一兩两三那這这])宿(?![舍])'), '$1朽'],
    [R('乾(?!坤)'), '甘'],
    [R('鴿'), '哥']
  ];
  /* 臺灣國語（繁體介面＋大陸口音語音） */
  var TW = [
    [R('[說说]服'), '稅服'], [R('[遊游][說说]'), '遊稅'],
    [R('期'), '奇'], [R('企'), '器'],
    [R('[危微]'), '圍'], [R('寂'), '疾'],
    [R('(^|[^人])[質质]'), '$1直'],
    [R('[暫暂]'), '站'], [R('[攜携]'), '西'], [R('曝'), '瀑'],
    [R('垃圾'), '樂色'], [R('[蝸蜗]'), '瓜'],
    [R('[結结]果子'), '節果子']
  ];
  /* 普通話（简体介面＋臺灣口音語音）——講義 App 在简体模式送出的可能仍是繁體原文，所以兩種字形都要認 */
  var CN = [
    [R('期'), '七'], [R('企'), '起'],
    [R('[危微]'), '威'], [R('寂'), '寄'],
    [R('(^|[^人])[质質]'), '$1至'],
    [R('[暂暫]'), '赞'], [R('[携攜]'), '鞋'], [R('曝光'), '爆光'],
    [R('垃圾'), '拉鸡'], [R('[蜗蝸]'), '窝']
  ];
  function run(list, s) {
    for (var i = 0; i < list.length; i++) s = s.replace(list[i][0], list[i][1]);
    return s;
  }
  /* 地 dì（名詞）／˙ㄉㄜ（副詞助詞）——晨讀等講義正文「誠實地、單純地」這類副詞極多，
     所以不採整字 dì，只在名詞語境送同音「帝」：地上萬民、在地上、全地、遍地、此地、大地…
     先保護副詞（疊字＋地、完全地、普遍地、如此地、實在地…），再換名詞，最後還原。 */
  var KEEP = R('(完全|安全|健全|周全|齊全|齐全|保全|成全|十全|偉大|伟大|廣大|广大|強大|强大|巨大|盛大|重大|莫大|極大|极大|寬大|宽大|遠大|远大|高大|浩大|龐大|庞大|普遍|如此|彼此|因此|從此|从此|就此|藉此|借此|由此|至此|為此|为此|自在|實在|实在|存在|所在|自然|公平|和平|太平|水平|神聖|神圣|幸福|永遠|永远|適當|适当|恰當|恰当|妥當|妥当|正當|正当|相當|相当|完美|優美|优美|甜美|格外|意外|額外|额外|另外|([㐀-鿿])\\2)地');
  var DI = [
    [R('地(?=理(?![解會会睬])|圖|图|點(?![出頭头燃亮])|点(?![出头燃亮])|址|球|極|极|獄|狱|震|勢|势|區(?![分別])|区(?![分别])|方(?![式法向])|位(?![於于])|步|面(?![對对前向])|域|帶(?![到領著來走給回進])|带(?![到领着来走给回进])|形(?![容])|基|殼|壳|層|层|質|质|貌|標|标)'), '帝'],
    [R('地(?=上(?:萬|万|眾|众|列|君|的|人|各|一切|所有|全|諸|诸|百姓|國|国))'), '帝'],
    [R('([在到於于從从落倒向降臨临滿满撒])地(?=[上下裡里中面])'), '$1帝'],
    [R('(全|遍|大|天|此|這|这|那|本|各|之|土|陸|陆|聖|圣|美|福|田|旱|荒|乾|干|死|餘|余|境|領|领|異|异|兩|两|當|当|空|平)地(?![方步位點点圖图理址區区])'), '$1帝']
  ];
  function di(s) {
    if (s.indexOf('地') < 0) return s;
    s = s.replace(KEEP, function (m) { return m.slice(0, -1) + '\u0001'; });
    s = run(DI, s);
    return s.replace(/\u0001/g, '地');
  }
  /* std：'tw'（臺灣國語）或 'cn'（普通話）；voice：語音名稱（zh-TW-… / zh-CN-…）或語系 */
  function fix(s, std, voice) {
    s = String(s == null ? '' : s);
    if (!/[㐀-鿿]/.test(s)) return s;            // 英文不動
    s = run(SHARED, s);
    s = di(s);
    var v = String(voice || '');
    var vTW = /zh[-_]TW|zh[-_]HK/i.test(v), vCN = /zh[-_]CN|cmn/i.test(v);
    if (std === 'tw' && vCN) s = run(TW, s);
    else if (std === 'cn' && vTW) s = run(CN, s);
    return s;
  }
  /* 裝置內建語音（speechSynthesis）也走同一套 */
  var stdNow = function () { return 'tw'; };
  function hookNative(getStd) {
    if (getStd) stdNow = getStd;
    try {
      var ss = window.speechSynthesis;
      if (!ss || ss.__pron) return;
      var sp = ss.speak.bind(ss);
      ss.speak = function (u) {
        try { if (u && u.text) u.text = fix(u.text, stdNow(), u.lang || ''); } catch (e) {}
        return sp(u);
      };
      ss.__pron = 1;
    } catch (e) {}
  }
  /* 只做兩岸差異那一段（給已經自己套過共用規則的引擎用，例如創世記的 TTS321） */
  function fixDiff(s, std, voice) {
    s = String(s == null ? '' : s);
    var v = String(voice || '');
    if (std === 'tw' && /zh[-_]CN|cmn/i.test(v)) return run(TW, s);
    if (std === 'cn' && /zh[-_]TW|zh[-_]HK/i.test(v)) return run(CN, s);
    return s;
  }
  return { di: di, fix: fix, fixDiff: fixDiff, hookNative: hookNative, SHARED: SHARED, TW: TW, CN: CN };
})();


/* ═══════════════════════════════════════════════════════════════════
   朗讀標示一句一句走（照《321互動聖經》）
   朗讀引擎一次把一整段（好幾句）標成 .spk-now，聲音也是整段連著唸；
   這裡只留「正在唸的那一句」亮著，依音檔播放進度（按字數比例）往下移。
   用裝置內建語音（沒有音檔）時，依語速估算。
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__spkStep) return; window.__spkStep = 1;
  let lastAudio = null;
  try {
    const P0 = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      if (this.tagName === 'AUDIO' || !this.videoWidth) lastAudio = this;
      return P0.apply(this, arguments);
    };
  } catch (e) {}
  let G = null;            // { els, w[], tot, cur, t0, a, src }
  let hold = 0;
  ['wheel', 'touchstart', 'touchmove', 'pointerdown'].forEach(ev =>
    window.addEventListener(ev, () => { hold = Date.now() + 6000; }, { passive: true }));
  const len = el => Math.max(1, String(el.textContent || '').replace(/\s+/g, '').length);
  function show(i) {
    if (!G) return;
    i = Math.max(0, Math.min(G.els.length - 1, i));
    if (i === G.cur) return;
    G.els.forEach((e, j) => { if (j !== i) e.classList.remove('spk-now'); });
    const el = G.els[i]; el.classList.add('spk-now'); G.cur = i;
    if (Date.now() < hold) return;
    try {
      const r = el.getBoundingClientRect();
      if (r.top < 70 || r.bottom > innerHeight - 150) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (e) {}
  }
  function frac() {
    const a = G.a;
    if (a && a.duration && isFinite(a.duration) && a.duration > 0 && (a.currentSrc || a.src) === G.src)
      return a.currentTime / a.duration;
    /* 裝置語音：依語速估算（中文約每秒 4.6 字，英文約每秒 14 個字母） */
    const ss = window.speechSynthesis;
    if (ss && ss.paused) { G.t0 += 250; return null; }
    const en = /[A-Za-z]{3}/.test(G.els[0].textContent || '');
    const cps = en ? 14 : 4.6;
    return ((Date.now() - G.t0) / 1000 * cps) / G.tot;
  }
  function tick() {
    if (document.hidden) return;
    const now = Array.prototype.slice.call(document.querySelectorAll('.spk-now'));
    if (G) {
      const mine = G.els[G.cur];
      /* 引擎換了下一段（或重繪）：舊的那一組結束 */
      const sameGroup = now.length === 1 && now[0] === mine;
      if (!sameGroup) G = null;
    }
    if (!G && now.length > 1) {
      const a = lastAudio && !lastAudio.paused ? lastAudio : null;
      const w = now.map(len);
      G = { els: now, w, tot: w.reduce((x, y) => x + y, 0), cur: -1, t0: Date.now(), a, src: a ? (a.currentSrc || a.src) : '' };
      if (!a && lastAudio && lastAudio.paused && lastAudio.currentTime > 0) { G.a = lastAudio; G.src = lastAudio.currentSrc || lastAudio.src; }
      show(0);
    }
    if (!G) return;
    if (!G.a && lastAudio && !lastAudio.paused) { G.a = lastAudio; G.src = lastAudio.currentSrc || lastAudio.src; }
    const f = frac();
    if (f == null) return;
    let acc = 0, i = 0;
    const target = Math.min(0.999, Math.max(0, f)) * G.tot;
    for (; i < G.w.length; i++) { acc += G.w[i]; if (acc > target) break; }
    if (i > G.cur) show(i);             // 只往前走，不倒退閃動
  }
  setInterval(tick, 200);
  /* 引擎一標上新的一段就立刻處理，不等下一次計時——不然換段那一瞬間會閃一下整段 */
  let queued = false;
  try {
    new MutationObserver(ms => {
      if (queued) return;
      for (const m of ms) if (m.attributeName === 'class' && m.target.classList && m.target.classList.contains('spk-now')) {
        queued = true; Promise.resolve().then(() => { queued = false; tick(); }); return;
      }
    }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  } catch (e) {}
})();

/* iPhone：輸入框字小於 16px，一點下去 Safari 會自動放大整頁而且不縮回來；
   放大時「固定在底部」的分頁列會跟著畫面跑到中間。
   ① iOS 上所有輸入框至少 16px（不會再自動放大）
   ② 鍵盤收起時把畫面輕推一下，固定的列回到原位
   ③ 已經被放大的，收鍵盤時恢復成原本大小 */
(function () {
  const iOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const st = document.createElement('style');
  st.textContent = '@supports (-webkit-touch-callout: none){input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=color]),textarea,select{font-size:max(16px,1em)!important}}';
  document.head.appendChild(st);
  if (!iOS) return;
  const meta = document.querySelector('meta[name=viewport]');
  const base = meta ? meta.getAttribute('content') : '';
  document.addEventListener('focusout', e => {
    const t = e.target;
    if (!t || !/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    setTimeout(() => {
      const a = document.activeElement;
      if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return;      // 只是換到下一個輸入框
      const vv = window.visualViewport;
      if (meta && vv && vv.scale > 1.01) {
        meta.setAttribute('content', base.replace(/,?\s*maximum-scale=[\d.]+/, '') + ',maximum-scale=1');
        setTimeout(() => meta.setAttribute('content', base), 400);
      }
      window.scrollTo(window.scrollX, window.scrollY);
    }, 80);
  }, true);
})();


/* ═══ GXHL · 畫線默想（和《321互動聖經》一模一樣）
   點一句 → 金色畫線；再點一下 → 「這一句」面板：八種顏色（點了立刻換）、範圍（－／幾句／＋／整節／整段）、
   寫下默想、儲存／問小智／從這裡開始朗讀、做成美圖／刪除畫線／關閉；默想會顯示在那一段下面。
   GXA.hl.attach(root, opt)：
     opt.sel   要拆句的區塊（自動切成一句一句）；或 opt.unit 主程式已經切好的句子元素
     opt.key   這一頁的鍵；opt.idOf(el) 句子的固定代號（用 unit 時）
     opt.refOf(el) 出處；opt.readFrom(el, text) 從這裡開始朗讀；opt.onChange() 存檔後通知
     opt.bind  false＝不要自己接點擊（主程式自己呼叫 GXA.hl.tap(el)）
   GXA.hl.sheet(o)：只借用同一個面板（給本來就有畫線資料的 App）
   ═══ */
const GXHL = (function () {
  const KEY = 'gxa_hl_' + (C().slug || 'app');
  let DB; try { DB = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { DB = {}; }
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} };
  const COLS = ['gold', 'green', 'blue', 'pink', 'purple', 'maroon', 'brown', 'charcoal'];
  const SW = { gold: '#D9B168', green: '#6FAE71', blue: '#6C93D1', pink: '#E58FA0', purple: '#A48AC9', maroon: '#8C4A4E', brown: '#8A6740', charcoal: '#54534E' };
  const OLD = { y: 'gold', g: 'green', b: 'blue', p: 'pink', r: 'pink' };
  const EN = () => LANG === 'en';
  const L = (zh, en) => toSC(T(zh, en));
  const SKIP = 'sup,label,button,textarea,input,select,.lbl,.gxhl-skip,.gxhl-note';
  const ROOTS = [];
  /* 舊格式（每句一筆、g＝a-b）轉成互動聖經格式（只記第一句、sp＝幾句） */
  (function migrate() {
    let ch = 0;
    Object.keys(DB).forEach(k => {
      const h = DB[k]; if (!h || typeof h !== 'object') return;
      if (h.c && OLD[h.c]) { h.c = OLD[h.c]; ch = 1; }
      if (h.g && !h.sp) {
        const g = h.g.split('-').map(Number), si = +k.split('|').pop();
        if (si === g[0]) { h.sp = g[1] - g[0] + 1; delete h.g; } else delete DB[k];
        ch = 1;
      }
    });
    if (ch) keep();
  })();
  function split(t) {
    const re = EN() ? /[^.!?;]+[.!?;]+["”’)]*\s*|[^.!?;]+$/g : /[^。！？；!?]+[。！？；!?]+[」』”’）)]*(?:\s*[（(][^（）()]{1,24}[）)])?|[^。！？；!?]+$/g;
    return String(t).match(re) || [t];
  }
  function wrapBox(box, bi) {
    if (box.getAttribute('data-gxb') != null) return;
    box.setAttribute('data-gxb', bi);
    const tw = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, null);
    const nodes = []; let n;
    while ((n = tw.nextNode())) {
      if (!n.nodeValue.trim()) continue;
      let p = n.parentNode, skip = false;
      while (p && p !== box) { if (p.matches && (p.matches(SKIP) || (box.__skip && p.matches(box.__skip)))) { skip = true; break; } p = p.parentNode; }
      if (!skip) nodes.push(n);
    }
    let si = 0;
    nodes.forEach(tn => {
      const f = document.createDocumentFragment();
      split(tn.nodeValue).forEach(part => {
        if (!part.trim()) { f.appendChild(document.createTextNode(part)); return; }
        const s = document.createElement('span'); s.className = 'gxs-s'; s.setAttribute('data-gxs', si++); s.textContent = part; f.appendChild(s);
      });
      tn.parentNode.replaceChild(f, tn);
    });
  }
  const optOf = root => root.__gxhl;
  function units(root) { const o = optOf(root); return Array.prototype.slice.call(root.querySelectorAll(o.unit || '.gxs-s')); }
  function idOf(root, el) { const o = optOf(root); if (o.idOf) return o.idOf(el); const b = el.closest('[data-gxb]'); return (b ? b.getAttribute('data-gxb') : 'x') + '|' + el.getAttribute('data-gxs'); }
  const rk = (o, id) => o.key + '|' + id;
  function paraOf(root, el) { const o = optOf(root); return o.unit ? (el.closest(o.para || 'p,li,blockquote,.scripture,.pcard,.note,div') || el.parentNode) : el.closest('[data-gxb]'); }
  function clean(el) { const c = el.cloneNode(true); Array.prototype.forEach.call(c.querySelectorAll('sup,.mk-flag,.gxhl-skip'), x => x.parentNode.removeChild(x)); return c.textContent; }
  function joinT(els) { return els.map(e => clean(e).trim()).reduce((acc, t) => !acc ? t : (/[A-Za-z0-9,.;:!?"”’)]$/.test(acc) && /^[A-Za-z0-9"“‘(]/.test(t) ? acc + ' ' + t : acc + t), ''); }
  /* 一頁的句子＋各句在第幾「段」（遇到標題就換段） */
  function scan(root) {
    const o = optOf(root), list = units(root), set = new Set(list), head = o.head || 'h1,h2,h3,h4,h5,h6,.mtitle,.sec-h,.deep-btn,.ttl,.dttl';
    let sec = 0;
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null); let n;
    while ((n = tw.nextNode())) { if (set.has(n)) n.__gxSec = sec; else if (n.matches && n.matches(head)) sec++; }
    return list;
  }
  function paint(root) {
    const o = optOf(root); if (!o) return;
    const list = scan(root), cover = new Array(list.length).fill(null);
    list.forEach((el, i) => {
      const h = DB[rk(o, idOf(root, el))]; if (!h) return;
      const n = Math.max(1, +h.sp || 1);
      for (let d = 0; d < n && i + d < list.length; d++) cover[i + d] = { h, head: d === 0, i0: i };
    });
    list.forEach((el, i) => {
      COLS.forEach(c => el.classList.remove('gxhl-' + c)); el.classList.remove('gxhl-on');
      const c = cover[i]; if (c) { el.classList.add('gxhl-on', 'gxhl-' + (c.h.c || 'gold')); }
    });
    root.__gxCover = cover; root.__gxList = list;
    Array.prototype.forEach.call(root.querySelectorAll('.gxhl-note'), x => x.parentNode.removeChild(x));
    let lastP = null, after = null;
    list.forEach((el, i) => {
      const c = cover[i]; if (!c || !c.head || !c.h.n) return;
      const p = paraOf(root, el); if (!p || !p.parentNode) return;
      if (p !== lastP) { lastP = p; after = p; }
      const d = document.createElement('div'); d.className = 'gxhl-note'; d.setAttribute('data-color', c.h.c || 'gold'); d.textContent = c.h.n;
      d.onclick = ev => { ev.stopPropagation(); open(root, el); };
      after.parentNode.insertBefore(d, after.nextSibling); after = d;
    });
  }
  function attach(root, opt) {
    if (!root || !opt) return;
    if (!opt.unit) { let bi = 0; root.querySelectorAll(opt.sel).forEach(b => { if (opt.skip) b.__skip = opt.skip; wrapBox(b, bi++); }); }
    root.__gxhl = opt;
    if (ROOTS.indexOf(root) < 0) ROOTS.push(root);
    if (opt.legacy) try { opt.legacy(units(root), id => DB[rk(opt, id)], (id, h) => { DB[rk(opt, id)] = h; }); keep(); } catch (e) {}
    paint(root);
    if (opt.bind !== false && !root.__gxhlOn) {
      root.__gxhlOn = 1;
      root.addEventListener('click', e => {
        const r = root.__gxhl; if (!r) return;
        const s = e.target.closest && e.target.closest(r.unit || '.gxs-s');
        if (!s || !root.contains(s)) return;
        try { const sel = window.getSelection && window.getSelection(); if (sel && String(sel).length > 1) return; } catch (x) {}
        tap(root, s);
      });
    }
  }
  function changed(root) { keep(); paint(root); try { const o = optOf(root); if (o.onChange) o.onChange(); } catch (e) {} }
  function refOf(root, el) { const o = optOf(root); try { return o.refOf ? o.refOf(el) : (o.ref || ''); } catch (e) { return o.ref || ''; } }
  /* 點一句：沒畫過 → 畫金色；畫過（或被別的畫線蓋到） → 打開面板 */
  function tap(root, el) {
    if (!root.__gxList || root.__gxList.indexOf(el) < 0) paint(root);
    const list = root.__gxList, i = list.indexOf(el); if (i < 0) return;
    const c = root.__gxCover[i];
    if (c) return open(root, list[c.i0]);
    const o = optOf(root);
    DB[rk(o, idOf(root, el))] = { c: 'gold', n: '', sp: 1, t: joinT([el]), ref: refOf(root, el), ts: Date.now() };
    changed(root);
  }
  function tapEl(el) {
    for (let j = ROOTS.length - 1; j >= 0; j--) { const r = ROOTS[j]; if (r.isConnected && r.contains(el)) return tap(r, el); }
  }
  function open(root, el) {
    paint(root);
    const o = optOf(root), list = root.__gxList, i = list.indexOf(el), k = rk(o, idOf(root, el)), h = DB[k];
    if (!h || i < 0) return;
    if (!h.sp) h.sp = 1;
    const setSp = n => {
      n = Math.max(1, Math.min(n, list.length - i));
      h.sp = n; h.t = joinT(list.slice(i, i + n)); h.ref = refOf(root, el);
      changed(root);
      return { t: h.t, sp: h.sp };
    };
    sheet({
      quote: h.t, sp: h.sp, c: h.c || 'gold', n: h.n || '',
      onColor: c => { h.c = c; changed(root); },
      onSpan: v => {
        if (v === 'v' || v === 'p') {
          let n = 1; const p0 = paraOf(root, el), s0 = el.__gxSec;
          while (i + n < list.length && (v === 'v' ? paraOf(root, list[i + n]) === p0 : list[i + n].__gxSec === s0)) n++;
          const was = h.sp || 1, r = setSp(n);
          r.msg = n === was ? (v === 'v' ? L('這一節已經整節畫起來了', 'The whole verse is already highlighted') : L('這一段已經整段畫起來了', 'The whole paragraph is already highlighted'))
            : (v === 'v' ? L('已畫整節，共 ' + n + ' 句', 'Whole verse — ' + n + ' sentence' + (n === 1 ? '' : 's')) : L('已畫整段，共 ' + n + ' 句', 'Whole paragraph — ' + n + ' sentence' + (n === 1 ? '' : 's')));
          return r;
        }
        return setSp((h.sp || 1) + (+v));
      },
      onSave: n => { h.n = n; changed(root); },
      onAsk: n => {
        h.n = n; changed(root);
        const ref = h.ref || refOf(root, el);
        const q = EN() ? 'Help me meditate on this: “' + h.t + '”' + (ref ? ' (' + ref + ')' : '') + (n ? '\nMy reflection: ' + n : '')
          : L('請就這句話幫助我默想：「', '請就這句話幫助我默想：「') + h.t + '」' + (ref ? '（' + ref + '）' : '') + (n ? L('\n我的默想：', '\n') + n : '');
        try { SAGE321.open(); SAGE321.send(q); } catch (e) {}
      },
      onRead: n => {
        h.n = n; changed(root);
        const rest = joinT(list.slice(i)).slice(0, 6000);
        try { if (o.readFrom) return o.readFrom(el, rest); } catch (e) {}
        try { const R = C().readFrom; if (R) return R(rest, el); } catch (e) {}
        try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(rest); u.lang = EN() ? 'en-US' : (LANG === 'zs' ? 'zh-CN' : 'zh-TW'); speechSynthesis.speak(u); } catch (e) {}
      },
      onCard: n => { h.n = n; changed(root); try { GXS.open({ text: h.t, ref: h.ref || refOf(root, el), note: n }); } catch (e) {} },
      onWord: n => { h.n = n; changed(root); wordSheet(h.t, h.ref || refOf(root, el)); },
      onDel: () => { delete DB[k]; changed(root); }
    });
  }
  /* ── v2.64.0 原文字義：選字（含中日韓字就逐字，否則依空白拆單字），點起點再點終點，可查選取／整句 ── */
  function wdTokens(txt) {
    const s = String(txt || ''), out = []; let i = 0;
    const cjk = /[\u3400-\u9fff\uf900-\ufaff]/, word = /[A-Za-z0-9\u00C0-\u024F]/;
    while (i < s.length) {
      const ch = s[i];
      if (cjk.test(ch)) { out.push({ t: ch, w: true }); i++; }
      else if (word.test(ch)) { let j = i; while (j < s.length && (word.test(s[j]) || (/['’-]/.test(s[j]) && j + 1 < s.length && word.test(s[j + 1])))) j++; out.push({ t: s.slice(i, j), w: true }); i = j; }
      else { let j = i + 1; while (j < s.length && !cjk.test(s[j]) && !word.test(s[j])) j++; out.push({ t: s.slice(i, j), w: false }); i = j; }
    }
    return out;
  }
  function wordQuestion(ref, whole, sel) {
    const r = ref ? (EN() ? ' (' + ref + ')' : '（' + ref + '）') : '';
    if (EN()) return 'Please study the original-language meaning and help me apply it. Passage' + r + ': “' + whole + '”. What I want to look up is (' + (sel === whole ? 'the whole sentence' : 'word or phrase') + '): “' + sel + '”.';
    return L('請查考原文字義並帶我應用。經文', '') + r + '：「' + whole + '」。' + L('我要查的是（' + (sel === whole ? '整句' : '字詞') + '）：「', '') + sel + '」。';
  }
  function wordSheet(text, ref) {
    close();
    const toks = wdTokens(text); let a = -1, b = -1;
    const m = document.createElement('div'); m.id = 'gxbs'; m.className = 'gxbs-mask';
    m.innerHTML = `<div class="gxbs-card">
      <div class="gxbs-title">🔍 ${esc0(L('原文字義', 'Original words'))}</div>
      <div class="gxbs-hint">${esc0(L('點一個字設起點，再點另一個字選到那裡；第三次點擊重新開始。小智會查考原文並帶你應用。', 'Tap a word to start, tap another to extend the selection; a third tap starts over. Xiaozhi will study the original language and help you apply it.'))}</div>
      <div class="wd-verse">${toks.map((k, i) => k.w ? `<span class="wdc" data-i="${i}">${esc0(k.t)}</span>` : esc0(k.t)).join('')}</div>
      <div class="wd-sel" style="font-size:13px;color:#6B6255;margin:6px 0 10px;min-height:1.6em"></div>
      <div class="gxbs-acts"><button class="gxbs-btn primary" data-w="sel" disabled>${esc0(L('查選取', 'Look up selection'))}</button><button class="gxbs-btn" data-w="sent">${esc0(L('查這一句', 'Look up sentence'))}</button><button class="gxbs-btn" data-w="x">${esc0(L('關閉', 'Close'))}</button></div></div>`;
    GXA_root().appendChild(m);
    m.addEventListener('click', e => { if (e.target === m) close(); });
    const cs = Array.from(m.querySelectorAll('.wdc')), sel = m.querySelector('.wd-sel'), go = m.querySelector('[data-w="sel"]');
    const selText = () => a < 0 ? '' : toks.slice(Math.min(a, b), Math.max(a, b) + 1).map(k => k.t).join('').replace(/^[^\w\u3400-\u9fff\u00C0-\u024F]+|[^\w\u3400-\u9fff\u00C0-\u024F]+$/g, '');
    const paintSel = () => { const lo = Math.min(a, b), hi = Math.max(a, b); cs.forEach(c => { const i = +c.getAttribute('data-i'); c.classList.toggle('on', a >= 0 && i >= lo && i <= hi); }); const t = selText(); sel.textContent = t ? '「' + t + '」' : ''; go.disabled = !t; };
    cs.forEach(c => c.onclick = () => { const i = +c.getAttribute('data-i'); if (a < 0 || a !== b) { a = b = i; } else { b = i; } paintSel(); });
    const send = t => { close(); try { SAGE321.open(); SAGE321.send(wordQuestion(ref, text, t)); } catch (e) {} };
    go.onclick = () => { const t = selText(); if (t) send(t); };
    m.querySelector('[data-w="sent"]').onclick = () => send(text);
    m.querySelector('[data-w="x"]').onclick = close;
  }
  /* ── 和互動聖經同一個面板 ── */
  function sheet(o) {
    close();
    const m = document.createElement('div'); m.id = 'gxbs'; m.className = 'gxbs-mask';
    const unit = n => L(n + ' 句', n + ' sentence' + (n === 1 ? '' : 's'));
    m.innerHTML = `<div class="gxbs-card">
      <div class="gxbs-title">${esc0(L('這一句', 'This sentence'))}</div>
      <span class="gxbs-quote">${esc0(o.quote || '')}</span>
      <div class="gxbs-row"><span class="gxbs-lab">${esc0(L('顏色', 'Colour'))}</span>
        <div class="gxbs-colors">${COLS.map(c => `<button class="gxbs-sw${o.c === c ? ' active' : ''}" data-c="${c}" style="background:${SW[c]}" aria-label="${c}"></button>`).join('')}</div></div>
      <div class="gxbs-row"><span class="gxbs-lab">${esc0(L('範圍', 'Range'))}</span>
        <div class="gxbs-span"><button class="gxbs-sb" data-sp="-1">－</button><span class="gxbs-num">${esc0(unit(o.sp || 1))}</span><button class="gxbs-sb" data-sp="1">＋</button>
        <button class="gxbs-sb wide" data-sp="v">${esc0(L('整節', 'Whole verse'))}</button><button class="gxbs-sb wide" data-sp="p">${esc0(L('整段', 'Whole paragraph'))}</button></div></div>
      <div class="gxbs-hint">${esc0(L('按 ＋ 往下多畫一句，畫線就不只一句，可以連成一整段。', 'Tap ＋ to take in the next sentence, so a highlight can cover a whole passage.'))}</div>
      <textarea class="gxbs-ta" placeholder="${esc0(L('寫下默想…', 'Write your reflection…'))}">${esc0(o.n || '')}</textarea>
      <div class="gxbs-acts"><button class="gxbs-btn primary" data-a="save">${esc0(L('儲存', 'Save'))}</button><button class="gxbs-btn" data-a="ask">${esc0(L('問小智', 'Ask Xiaozhi'))}</button><button class="gxbs-btn" data-a="read">${esc0(L('🔊 從這裡開始朗讀', '🔊 Read from here'))}</button></div>
      <div class="gxbs-acts2"><button class="gxbs-btn gold" data-a="card">🖼 ${esc0(L('做成美圖', 'Make a card'))}</button>${o.onWord ? `<button class="gxbs-btn" data-a="word">🔍 ${esc0(L('原文字義', 'Original words'))}</button>` : ''}<button class="gxbs-btn danger" data-a="del">${esc0(L('刪除畫線', 'Remove highlight'))}</button><button class="gxbs-btn" data-a="close">${esc0(L('關閉', 'Close'))}</button></div></div>`;
    GXA_root().appendChild(m);
    m.addEventListener('click', e => { if (e.target === m) close(); });
    const ta = m.querySelector('.gxbs-ta'), q = m.querySelector('.gxbs-quote'), num = m.querySelector('.gxbs-num');
    m.querySelectorAll('.gxbs-sw').forEach(b => b.onclick = () => {
      m.querySelectorAll('.gxbs-sw').forEach(x => x.classList.toggle('active', x === b));
      try { o.onColor(b.getAttribute('data-c')); } catch (e) {}
    });
    m.querySelectorAll('[data-sp]').forEach(b => b.onclick = () => {
      let r; try { r = o.onSpan(b.getAttribute('data-sp')); } catch (e) {}
      if (r) { if (r.t != null) q.textContent = r.t; if (r.sp) num.textContent = unit(r.sp); if (r.msg) toast(r.msg, 2400); }
    });
    m.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      const a = b.getAttribute('data-a'), n = ta.value.trim();
      close();
      try {
        if (a === 'save') o.onSave(n);
        else if (a === 'ask') o.onAsk(n);
        else if (a === 'read') o.onRead(n);
        else if (a === 'card') o.onCard(n);
        else if (a === 'word') o.onWord(n);
        else if (a === 'del') o.onDel();
        else if (a === 'close' && o.onClose) o.onClose(n);
      } catch (e) {}
    });
    return m;
  }
  function close() { const m = document.getElementById('gxbs'); if (m) m.parentNode.removeChild(m); }
  const CSS = `.wd-verse{font-size:19px;line-height:2.1;margin:4px 0;word-break:break-word}.wd-verse .wdc{cursor:pointer;border-radius:4px;padding:2px 1px}.wd-verse .wdc.on{background:#F0DDB0;color:#23211C;box-shadow:0 0 0 1px #A9762F}
.gxs-s{cursor:pointer;border-radius:2px}
.gxhl-on{background:linear-gradient(transparent 58%,#F0DDB0 58%)!important;border-radius:2px}
.gxhl-on.gxhl-green{background:linear-gradient(transparent 58%,#CFE6CC 58%)!important}.gxhl-on.gxhl-blue{background:linear-gradient(transparent 58%,#CADBF1 58%)!important}
.gxhl-on.gxhl-pink{background:linear-gradient(transparent 58%,#F6CCD6 58%)!important}.gxhl-on.gxhl-purple{background:linear-gradient(transparent 58%,#DCCDEE 58%)!important}
.gxhl-on.gxhl-maroon{background:linear-gradient(transparent 58%,#E6C7C7 58%)!important}.gxhl-on.gxhl-brown{background:linear-gradient(transparent 58%,#E4D3B8 58%)!important}
.gxhl-on.gxhl-charcoal{background:linear-gradient(transparent 58%,#D6D5D0 58%)!important}
.gxhl-note{margin:6px 0 14px;padding:8px 12px;background:#F2EEE3;border-left:3px solid #A9762F;border-radius:6px;font-size:.86em;color:#23211C;white-space:pre-wrap;cursor:pointer;line-height:1.6;text-align:left;text-indent:0}
.gxhl-note[data-color=green]{border-left-color:#6FAE71}.gxhl-note[data-color=blue]{border-left-color:#6C93D1}.gxhl-note[data-color=pink]{border-left-color:#E58FA0}.gxhl-note[data-color=purple]{border-left-color:#A48AC9}.gxhl-note[data-color=maroon]{border-left-color:#8C4A4E}.gxhl-note[data-color=brown]{border-left-color:#8A6740}.gxhl-note[data-color=charcoal]{border-left-color:#54534E}
.gxbs-mask{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2147482000;display:flex;align-items:flex-end;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC",sans-serif}
.gxbs-card{background:#fff;color:#23211C;width:100%;max-width:720px;max-height:86vh;overflow-y:auto;border-radius:18px 18px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom));box-shadow:0 -8px 30px rgba(0,0,0,.25);box-sizing:border-box;text-align:left}
.gxbs-title{font-size:16px;font-weight:800;margin-bottom:10px}
.gxbs-quote{display:block;background:#F5EBD9;border-radius:8px;padding:10px 12px;font-size:14px;line-height:1.8;margin-bottom:12px;font-family:"Noto Serif TC","Songti TC",serif;overflow-wrap:anywhere}
.gxbs-row{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.gxbs-lab{font-size:12.5px;color:#6B6255;white-space:nowrap}
.gxbs-colors{display:flex;gap:10px;flex-wrap:wrap}
.gxbs-sw{width:28px;height:28px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}
.gxbs-sw.active{border-color:#23211C}
.gxbs-span{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.gxbs-sb{min-width:36px;height:32px;border:1px solid #CFC7B2;border-radius:9px;background:#fff;color:#23211C;font-size:15px;cursor:pointer;padding:0 8px}
.gxbs-sb.wide{font-size:13px;padding:0 10px}
.gxbs-num{font-size:13px;color:#6B6255;min-width:42px;text-align:center}
.gxbs-hint{background:#F5EBD9;color:#A9762F;border-radius:8px;padding:9px 12px;font-size:12.5px;line-height:1.6;margin:-2px 0 10px}
.gxbs-ta{display:block;width:100%;box-sizing:border-box;border:1px solid #CFC7B2;border-radius:10px;padding:10px 12px;font-size:16px;font-family:inherit;resize:vertical;background:#F2EEE3;color:#23211C;min-height:76px;margin-bottom:10px}
.gxbs-acts{display:flex;gap:10px;margin-bottom:8px}.gxbs-acts .gxbs-btn{flex:1}
.gxbs-acts2{display:flex;gap:8px;flex-wrap:wrap}.gxbs-acts2 .gxbs-btn{flex:1 1 auto;padding:8px 10px;font-size:12.5px}
.gxbs-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:9px;border:1px solid #CFC7B2;background:#fff;color:#23211C;font-size:14px;font-weight:600;padding:10px 12px;cursor:pointer;line-height:1.3}
.gxbs-btn.primary{background:#1F3A8A;border-color:#1F3A8A;color:#fff}.gxbs-btn.gold{background:#A9762F;border-color:#A9762F;color:#fff}.gxbs-btn.danger{color:#B4432F;border-color:#B4432F}`;
  (function () { const old = document.getElementById('gxhlcss'); if (old) old.remove(); const st = document.createElement('style'); st.id = 'gxhlcss'; st.textContent = CSS; document.head.appendChild(st); })();
  /* 給本來就有畫線資料的 App：算出每一句在第幾段（遇到標題就換段） */
  function secs(root, list, head) {
    const set = new Map(); list.forEach((e, i) => set.set(e, i));
    const out = new Array(list.length).fill(0); let sec = 0;
    head = head || 'h1,h2,h3,h4,h5,h6,.sec-h,.ttl,.mtitle,.deep-btn';
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null); let n;
    while ((n = tw.nextNode())) { if (set.has(n)) out[set.get(n)] = sec; else if (n.matches && n.matches(head)) sec++; }
    return out;
  }
  return { attach, paint, tap: tapEl, sheet, close, secs, db: () => DB, roots: ROOTS };
})();


  /* ── 樣式：主程式樣式隔離，全部在 .gxroot 底下 ── */
  (function css() {
    if (document.getElementById('gxacss')) return;
    const st = document.createElement('style'); st.id = 'gxacss';
    st.textContent = ".gxroot{--ink:#12181B; --paper:#EEF0EB; --card:#FFFFFF; --line:#D6DAD2;\n  --pine:#1F4D3D; --pine2:#2E6B55; --brass:#9C6B18; --clay:#8C3A2E; --dusk:#54636B;\n  --fs:17px; --r:14px;\n  --hl-gold:rgba(156,107,24,.32);\n  --hl-green:#CFE6CC; --hl-blue:#CFDFF4; --hl-pink:#F7D3DC; --hl-purple:#E3D5F1;\n  --hl-maroon:#EBD0D0; --hl-brown:#E9D9BF; --hl-charcoal:#DBDAD4;\n  --hb-green:#5E9E63; --hb-blue:#5583C7; --hb-pink:#DB7A90; --hb-purple:#9377C0;\n  --hb-maroon:#8C4A4E; --hb-brown:#8A6740; --hb-charcoal:#54534E;\n  --hl-now:#FFE9A8;\n  --sans:\"Noto Sans TC\",\"PingFang TC\",\"Microsoft JhengHei\",system-ui,sans-serif;\n  --serif:\"Noto Serif TC\",\"Source Han Serif TC\",\"Songti TC\",serif;\n  --mono:\"SF Mono\",ui-monospace,Menlo,monospace;}\n.gxroot, .gxroot *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\n.gxroot,.gxroot{margin:0;padding:0}\n.gxroot{background:var(--paper); color:var(--ink);\n  font-family:var(--sans); font-size:var(--fs); line-height:1.85;\n  padding-bottom:calc(66px + env(safe-area-inset-bottom));\n  -webkit-font-smoothing:antialiased;}\n.gxroot .wrap{max-width:720px;margin:0 auto;padding:0 18px}\n.gxroot header.top{position:sticky;top:0;z-index:40;background:var(--paper);\n  border-bottom:1px solid var(--line);\n  padding-top:env(safe-area-inset-top);}\n.gxroot header .bar{display:flex;align-items:center;gap:8px;height:52px;max-width:720px;margin:0 auto;padding:0 12px}\n.gxroot header h1{font-family:var(--serif);font-size:17px;font-weight:700;margin:0;flex:1;letter-spacing:.01em;\n  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gxroot .ico{width:40px;height:40px;border:0;background:transparent;color:var(--ink);\n  font-size:17px;border-radius:10px;cursor:pointer;display:grid;place-items:center;flex:0 0 auto;}\n.gxroot .ico:active{background:var(--line)}\n.gxroot .ico.hide{display:none}\n.gxroot .ico.lang{font-family:var(--serif);font-size:16px;font-weight:700;letter-spacing:0}\n.gxroot .ico.lang.on{color:var(--pine)}\n.gxroot nav.tabs{position:fixed;left:0;right:0;bottom:0;z-index:50;display:flex;\n  background:var(--card);border-top:1px solid var(--line);\n  padding-bottom:env(safe-area-inset-bottom);}\n.gxroot nav.tabs button{flex:1;border:0;background:transparent;color:var(--dusk);\n  font-family:var(--sans);font-size:11px;padding:8px 0 7px;cursor:pointer;line-height:1.3;}\n.gxroot nav.tabs button b{display:block;font-family:var(--serif);font-size:17px;font-weight:600;margin-bottom:1px}\n.gxroot nav.tabs button.on{color:var(--pine)}\n.gxroot .eyebrow{font-size:11px;letter-spacing:.22em;color:var(--dusk);\n  margin:0 0 6px;text-transform:none;font-weight:600;}\n.gxroot h2.big{font-family:var(--serif);font-size:25px;line-height:1.5;margin:0 0 14px;font-weight:700}\n.gxroot h3.sec{font-family:var(--serif);font-size:19px;margin:26px 0 10px;font-weight:700;color:var(--pine)}\n.gxroot .sect{padding:20px 0}\n.gxroot .card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);\n  padding:16px;margin:12px 0;}\n.gxroot .muted{color:var(--dusk)}\n.gxroot .sm{font-size:calc(var(--fs) * .82)}\n.gxroot .xs{font-size:calc(var(--fs) * .74)}\n.gxroot .btn{display:inline-block;border:1px solid var(--line);background:var(--card);color:var(--ink);\n  padding:9px 14px;border-radius:10px;font:inherit;font-size:14px;cursor:pointer;}\n.gxroot .btn.pri{background:var(--pine);border-color:var(--pine);color:#fff}\n.gxroot .btn:active{transform:translateY(1px)}\n.gxroot .bigbtn{display:block;width:100%;text-align:left;background:var(--pine);color:#fff;\n  border:0;border-radius:var(--r);padding:16px 18px;cursor:pointer;font:inherit;}\n.gxroot .bigbtn small{display:block;font-size:12px;opacity:.82;letter-spacing:.1em}\n.gxroot .bigbtn b{display:block;font-family:var(--serif);font-size:19px;margin:5px 0 0;line-height:1.5}\n.gxroot .row{display:flex;gap:8px;flex-wrap:wrap}\n.gxroot .pill{border:1px solid var(--line);background:var(--card);color:var(--dusk);\n  border-radius:999px;padding:5px 12px;font-size:12.5px;cursor:pointer;font:inherit;}\n.gxroot .pill.on{background:var(--pine);border-color:var(--pine);color:#fff}\n.gxroot .terrain{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:12px 10px 6px;margin:6px 0 0}\n.gxroot .terrain svg{display:block;width:100%;height:auto}\n.gxroot .tlab{font-family:var(--mono);font-size:8.5px;fill:var(--dusk)}\n.gxroot .tlab.hi{fill:var(--brass);font-weight:700}\n.gxroot .tpath{fill:none;stroke:var(--pine);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.gxroot .tdot{fill:var(--brass)}\n.gxroot .tdot.low{fill:var(--clay)}\n.gxroot .tnow{fill:none;stroke:var(--ink);stroke-width:1.5}\n.gxroot .chrow{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;\n  background:var(--card);border:1px solid var(--line);border-radius:12px;\n  padding:13px 14px;margin:8px 0;cursor:pointer;font:inherit;color:inherit;}\n.gxroot .chn{font-family:var(--mono);font-size:12px;color:var(--dusk);\n  min-width:26px;padding-top:3px;letter-spacing:-.04em}\n.gxroot .chrow b{font-family:var(--serif);font-size:17px;display:block;line-height:1.45}\n.gxroot .chrow .s{font-size:13px;color:var(--dusk);display:block;margin-top:2px;line-height:1.6}\n.gxroot .chrow .done{color:var(--pine);font-size:12px}\n.gxroot .vs{display:flex;gap:9px;padding:7px 0 7px 10px;border-left:2px solid transparent;\n  cursor:pointer;align-items:flex-start;}\n.gxroot .vs:active{background:var(--card)}\n.gxroot .vs.has{border-left-color:var(--pine)}\n.gxroot .vs.star{border-left-color:var(--brass);border-left-width:3px}\n.gxroot .vs.warn{border-left-color:var(--clay);border-left-width:3px}\n.gxroot .vn{font-family:var(--mono);font-size:11.5px;color:var(--dusk);min-width:20px;padding-top:5px;text-align:right}\n.gxroot .vt{flex:1;line-height:1.95}\n.gxroot .vs .flag{font-size:11px;color:var(--clay);margin-left:4px}\n.gxroot .layer{border-top:1px solid var(--line);padding:12px 0}\n.gxroot .layer:first-child{border-top:0}\n.gxroot .lh{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12px;\n  letter-spacing:.14em;color:var(--dusk);font-weight:600;user-select:none}\n.gxroot .lh .n{font-family:var(--mono);color:var(--pine)}\n.gxroot .lh .caret{margin-left:auto;font-size:11px;opacity:.6}\n.gxroot .lb{margin-top:8px}\n.gxroot .lb.grk{font-family:var(--serif);font-size:16px;line-height:2.05;color:var(--pine)}\n.gxroot .lb.lit{font-family:var(--serif)}\n.gxroot .kw{display:inline-block;border:1px solid var(--line);border-radius:8px;\n  padding:3px 9px;margin:3px 5px 3px 0;font-size:13px;cursor:pointer;background:var(--card)}\n.gxroot .kw i{font-style:normal;font-family:var(--serif);color:var(--pine)}\n.gxroot table{width:100%;border-collapse:collapse;font-size:14px;margin:8px 0}\n.gxroot th,.gxroot td{border-bottom:1px solid var(--line);padding:7px 6px;text-align:left;vertical-align:top}\n.gxroot th{color:var(--dusk);font-weight:600;font-size:12.5px}\n.gxroot .track{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:15px;margin:10px 0}\n.gxroot .track .gk{font-family:var(--serif);font-size:22px;color:var(--pine)}\n.gxroot .stops{margin:12px 0 4px;padding-left:0;list-style:none}\n.gxroot .stop{display:flex;gap:10px;align-items:baseline;padding:5px 0}\n.gxroot .stop .r{font-family:var(--mono);font-size:12px;min-width:44px;color:var(--dusk)}\n.gxroot .stop .d{width:8px;height:8px;border-radius:50%;flex:0 0 auto;background:var(--dusk);margin-top:6px}\n.gxroot .stop.dark .d{background:var(--clay)}\n.gxroot .stop.light .d{background:var(--brass)}\n.gxroot .insight{border-left:3px solid var(--brass);padding:8px 0 8px 12px;margin:10px 0 0;font-family:var(--serif);font-size:16px}\n.gxroot .iss{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:15px;margin:10px 0}\n.gxroot .pos{border:1px solid var(--line);border-radius:10px;padding:11px;margin:8px 0;font-size:14px}\n.gxroot .pos b{color:var(--pine)}\n.gxroot .consensus{background:rgba(156,107,24,.09);border-radius:10px;padding:11px;margin:10px 0;font-size:14px}\n.gxroot .say{border-left:3px solid var(--pine);padding-left:12px;margin:10px 0;font-family:var(--serif)}\n.gxroot .lv{display:inline-block;font-size:11px;padding:2px 7px;border-radius:6px;font-weight:700;margin-right:6px}\n.gxroot .lv.g{background:rgba(31,77,61,.13);color:var(--pine)}\n.gxroot .lv.y{background:rgba(156,107,24,.16);color:var(--brass)}\n.gxroot .lv.r{background:rgba(140,58,46,.14);color:var(--clay)}\n.gxroot .chk{display:flex;gap:11px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--line);cursor:pointer}\n.gxroot .chk:last-child{border-bottom:0}\n.gxroot .box{width:21px;height:21px;border:1.5px solid var(--line);border-radius:6px;flex:0 0 auto;margin-top:3px;\n  display:grid;place-items:center;font-size:13px;color:#fff}\n.gxroot .chk.on .box{background:var(--pine);border-color:var(--pine)}\n.gxroot .chk.on .t{color:var(--dusk);text-decoration:line-through}\n.gxroot .chk .t{flex:1;font-size:15px;line-height:1.7}\n.gxroot .sheet{position:fixed;inset:0;z-index:90;background:rgba(10,16,14,.42);\n  display:none;align-items:flex-end;}\n.gxroot .sheet.on{display:flex}\n.gxroot .sheet .inner{background:var(--paper);width:100%;max-height:88vh;overflow:auto;\n  border-radius:20px 20px 0 0;padding:8px 18px calc(28px + env(safe-area-inset-bottom));\n  animation:up .22s ease;}\n@keyframes up{from{transform:translateY(24px);opacity:.5}}\n.gxroot .grab{width:38px;height:4px;border-radius:2px;background:var(--line);margin:6px auto 12px}\n.gxroot .sheet h4{font-family:var(--serif);font-size:20px;margin:4px 0 2px}\n.gxroot .toast{position:fixed;left:50%;bottom:88px;transform:translateX(-50%);\n  background:var(--ink);color:var(--paper);padding:9px 16px;border-radius:999px;\n  font-size:13.5px;z-index:120;opacity:0;transition:.2s;pointer-events:none;white-space:nowrap}\n.gxroot .toast.on{opacity:1}\n.gxroot .note{width:100%;border:1px solid var(--line);border-radius:10px;background:var(--card);\n  color:inherit;font:inherit;font-size:15px;padding:11px;min-height:88px;resize:vertical}\n.gxroot .q{font-family:var(--serif);font-size:var(--fs);line-height:1.75;margin:0 0 4px}\n.gxroot .tip{font-size:calc(var(--fs) * .8);color:var(--dusk);background:rgba(31,77,61,.07);border-radius:9px;padding:9px 11px;margin-top:8px}\n.gxroot .blank i{font-style:normal;color:var(--clay);letter-spacing:.05em}\n.gxroot .les p{font-family:var(--serif);font-size:var(--fs);line-height:1.95;margin:0 0 15px;text-align:justify}\n.gxroot .les h4{font-family:var(--serif);font-size:calc(var(--fs) * 1.18);font-weight:700;color:var(--pine);\n  margin:30px 0 12px;padding-top:14px;border-top:1px solid var(--line);scroll-margin-top:64px}\n.gxroot .les h4:first-child{margin-top:6px;padding-top:0;border-top:0}\n.gxroot .les p.dec{color:var(--pine);font-weight:600;margin-bottom:9px}\n.gxroot .les details.deeper{border:1px solid var(--line);border-radius:12px;background:var(--card);\n  padding:10px 13px;margin:0 0 16px}\n.gxroot .les details.deeper summary{font-family:var(--serif);font-size:calc(var(--fs) * .92);line-height:1.65;color:var(--pine);\n  font-weight:600;cursor:pointer;list-style:none}\n.gxroot .les details.deeper summary::-webkit-details-marker{display:none}\n.gxroot .les details.deeper summary::before{content:\"＋　\";opacity:.6}\n.gxroot .les details.deeper[open] summary::before{content:\"−　\"}\n.gxroot .les details.deeper[open] summary{margin-bottom:8px}\n.gxroot .les .deeper-a p{font-size:calc(var(--fs) * .95);line-height:1.9;margin:0;color:var(--dusk)}\n.gxroot .les p.t3s{font-family:var(--serif);font-size:calc(var(--fs) * 1.06);font-weight:700;color:var(--pine);\n  margin:26px 0 10px}\n.gxroot .les p.t3t{font-family:var(--serif);font-size:calc(var(--fs) * .95);font-weight:700;color:var(--brass);margin:16px 0 6px}\n.gxroot .les p.t3m{font-size:calc(var(--fs) * .85);line-height:1.8;color:var(--dusk);background:rgba(31,77,61,.07);\n  border-radius:11px;padding:10px 13px;margin:0 0 13px;text-align:left}\n.gxroot .les p.t3n{margin:0 0 12px}\n.gxroot .toc button{display:block;width:100%;text-align:left;border:0;background:transparent;color:inherit;\n  font-family:var(--serif);font-size:16px;line-height:1.6;padding:7px 0;cursor:pointer;\n  border-bottom:1px solid var(--line)}\n.gxroot .toc button:last-child{border-bottom:0}\n.gxroot .toc button:active{color:var(--pine)}\n.gxroot .hr{height:1px;background:var(--line);margin:22px 0}\n.gxroot .center{text-align:center}\n.gxroot a{color:var(--pine)}\n.gxroot .foot{padding:26px 0 8px;font-size:12px;color:var(--dusk);line-height:1.9}\n.gxroot .full{position:fixed;inset:0;z-index:200;background:var(--paper);display:none;flex-direction:column}\n.gxroot .full.on{display:flex}\n.gxroot .fbar{display:flex;align-items:center;gap:10px;padding:calc(8px + env(safe-area-inset-top)) 14px 8px;border-bottom:1px solid var(--line)}\n.gxroot .fbar .clock{font-family:var(--mono);font-size:15px;color:var(--dusk);letter-spacing:-.02em}\n.gxroot .fbar .clock.over{color:var(--clay)}\n.gxroot .fbar b{font-family:var(--serif);font-size:15px;flex:1;text-align:center}\n.gxroot .fbody{flex:1;overflow:auto;padding:22px 20px 30px;-webkit-overflow-scrolling:touch}\n.gxroot .ffoot{display:flex;gap:8px;padding:10px 14px calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--line)}\n.gxroot .rail{height:3px;background:var(--line)}\n.gxroot .rail i{display:block;height:3px;background:var(--brass);width:0;transition:width .3s}\n.gxroot .tele p{font-size:calc(var(--fs) * 1.45);line-height:2.05;margin:0 0 20px;font-weight:600}\n.gxroot .tele .qq{font-family:var(--serif);color:var(--brass);border-left:3px solid var(--brass);padding-left:14px}\n.gxroot .tele h5{font-family:var(--serif);color:var(--pine);font-size:calc(var(--fs) * 1.1);margin:34px 0 18px;letter-spacing:.04em}\n.gxroot .tele .pause{color:var(--dusk);font-family:var(--mono);font-size:13px;letter-spacing:.2em;margin:26px 0;text-align:center}\n.gxroot .tele .pause b{color:var(--brass)}\n.gxroot .live h5{font-family:var(--serif);font-size:15px;color:var(--pine);letter-spacing:.1em;margin:0 0 18px}\n.gxroot .live .qq{font-family:var(--serif);font-size:calc(var(--fs) * 1.5);line-height:1.85;margin:0 0 20px}\n.gxroot .live .tipbox{background:rgba(156,107,24,.12);border-radius:12px;padding:14px;font-size:15px;line-height:1.8}\n.gxroot .sbox{width:100%;border:1px solid var(--line);border-radius:12px;background:var(--card);color:inherit;font:inherit;font-size:16px;padding:12px 14px}\n.gxroot mark{background:rgba(156,107,24,.3);color:inherit;padding:0 2px;border-radius:3px}\n.gxroot .brand{width:26px;height:26px;border-radius:7px;flex:0 0 auto;display:block}\n.gxroot .brand.hide{display:none}\n.gxroot #splash{position:fixed;inset:0;z-index:300;background:#12305E;color:#fff;\n  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;\n  transition:opacity .45s ease;}\n.gxroot #splash.gone{opacity:0;pointer-events:none}\n.gxroot #splash img{width:132px;height:132px;border-radius:28px;box-shadow:0 12px 40px rgba(0,0,0,.4);margin-bottom:20px}\n.gxroot #splash h2{font-family:var(--serif);font-size:25px;margin:0;letter-spacing:.06em;font-weight:700}\n.gxroot #splash p{margin:4px 0 0;font-size:15px;opacity:.85;letter-spacing:.3em}\n.gxroot #splash small{margin-top:26px;font-size:11.5px;opacity:.55;letter-spacing:.16em}\n.gxroot .vs.hl .vt{background:linear-gradient(transparent 58%, rgba(156,107,24,.32) 58%)}\n.gxroot .mkw{margin:0 0 14px}\n.gxroot .mks{cursor:pointer;border-radius:5px;transition:background .12s;\n  -webkit-tap-highlight-color:transparent;box-decoration-break:clone;-webkit-box-decoration-break:clone}\n.gxroot .mks:active{background:var(--line)}\n.gxroot .mks.hl{background:linear-gradient(transparent 60%, var(--hl-gold) 60%)}\n.gxroot .mks.hl[data-c=\"green\"]{background:linear-gradient(transparent 60%, var(--hl-green) 60%)}\n.gxroot .mks.hl[data-c=\"blue\"]{background:linear-gradient(transparent 60%, var(--hl-blue) 60%)}\n.gxroot .mks.hl[data-c=\"pink\"]{background:linear-gradient(transparent 60%, var(--hl-pink) 60%)}\n.gxroot .mks.hl[data-c=\"purple\"]{background:linear-gradient(transparent 60%, var(--hl-purple) 60%)}\n.gxroot .mks.hl[data-c=\"maroon\"]{background:linear-gradient(transparent 60%, var(--hl-maroon) 60%)}\n.gxroot .mks.hl[data-c=\"brown\"]{background:linear-gradient(transparent 60%, var(--hl-brown) 60%)}\n.gxroot .mks.hl[data-c=\"charcoal\"]{background:linear-gradient(transparent 60%, var(--hl-charcoal) 60%)}\n.gxroot .spk-now{background:var(--hl-now)!important;border-radius:4px;\n  box-shadow:0 0 0 3px var(--hl-now);transition:background .2s}\n.gxroot .les h4 .spk-now,.gxroot .les details.deeper.spk-now{box-shadow:none}\n.gxroot .les details.deeper.spk-now{background:var(--hl-now)!important}\n.gxroot .mkp{cursor:pointer;border-radius:5px;transition:background .12s}\n.gxroot .mkp.hl{background:linear-gradient(transparent 62%, var(--hl-gold) 62%)}\n.gxroot .mkp.hl[data-c=\"green\"]{background:linear-gradient(transparent 62%, var(--hl-green) 62%)}\n.gxroot .mkp.hl[data-c=\"blue\"]{background:linear-gradient(transparent 62%, var(--hl-blue) 62%)}\n.gxroot .mkp.hl[data-c=\"pink\"]{background:linear-gradient(transparent 62%, var(--hl-pink) 62%)}\n.gxroot .mkp.hl[data-c=\"purple\"]{background:linear-gradient(transparent 62%, var(--hl-purple) 62%)}\n.gxroot .mkp.hl[data-c=\"maroon\"]{background:linear-gradient(transparent 62%, var(--hl-maroon) 62%)}\n.gxroot .mkp.hl[data-c=\"brown\"]{background:linear-gradient(transparent 62%, var(--hl-brown) 62%)}\n.gxroot .mkp.hl[data-c=\"charcoal\"]{background:linear-gradient(transparent 62%, var(--hl-charcoal) 62%)}\n.gxroot .mknote{display:block}\n.gxroot .mknote{border-left:3px solid var(--brass);background:rgba(156,107,24,.08);\n  border-radius:0 10px 10px 0;padding:10px 12px;margin:8px 0 12px;font-size:calc(var(--fs) * .85);line-height:1.8}\n.gxroot .mknote[data-c=\"green\"]{border-left-color:var(--hb-green)}\n.gxroot .mknote[data-c=\"blue\"]{border-left-color:var(--hb-blue)}\n.gxroot .mknote[data-c=\"pink\"]{border-left-color:var(--hb-pink)}\n.gxroot .mknote[data-c=\"purple\"]{border-left-color:var(--hb-purple)}\n.gxroot .mknote[data-c=\"maroon\"]{border-left-color:var(--hb-maroon)}\n.gxroot .mknote[data-c=\"brown\"]{border-left-color:var(--hb-brown)}\n.gxroot .mknote[data-c=\"charcoal\"]{border-left-color:var(--hb-charcoal)}\n.gxroot .mknote b{color:var(--brass);font-size:12px;letter-spacing:.1em}\n.gxroot .hlrow{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin:2px 0 12px}\n.gxroot .hlrow .lb{font-size:12.5px;color:var(--dusk);white-space:nowrap}\n.gxroot .hlsw{width:28px;height:28px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;\n  box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}\n.gxroot .hlsw.on{border-color:var(--ink)}\n.gxroot .mkask.del{color:var(--clay);border-color:var(--clay)}\n.gxroot .btn.danger{color:var(--clay);border-color:var(--clay)}\n.gxroot .mkask{display:inline-block;margin-left:8px;border:1px solid var(--line);background:var(--card);\n  color:var(--pine);border-radius:8px;padding:3px 9px;font:inherit;font-size:12.5px;cursor:pointer}\n.gxroot .mkq{font-family:var(--serif);font-size:calc(var(--fs) * .94);line-height:1.85;border-left:3px solid var(--brass);\n  padding:8px 0 8px 12px;margin:6px 0 12px;color:var(--dusk)}\n.gxroot .hlq{font-family:var(--serif);font-size:calc(var(--fs) * .92);line-height:1.8;margin:0;cursor:pointer}\n.gxroot .btn.xs2{font-size:12.5px;padding:6px 11px}\n.gxroot .mkhint{font-size:12.5px;color:var(--dusk);background:rgba(31,77,61,.07);\n  border-radius:9px;padding:9px 11px;margin:4px 0 12px;line-height:1.75}\n.gxroot .spkbar{position:fixed;left:50%;transform:translateX(-50%);\n  bottom:calc(74px + env(safe-area-inset-bottom));z-index:110;\n  display:flex;align-items:center;gap:9px;\n  background:var(--ink);color:var(--paper);border-radius:999px;\n  padding:8px 8px 8px 15px;font-size:13.5px;max-width:calc(100% - 32px);\n  box-shadow:0 6px 24px rgba(0,0,0,.22)}\n.gxroot .spkbar b{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40vw}\n.gxroot .spkbar .pv{font-size:12px;opacity:.7;white-space:nowrap}\n.gxroot .spkbar .dot{width:7px;height:7px;border-radius:50%;background:var(--brass);animation:pulse 1.4s infinite}\n@keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}\n.gxroot .spkbar button{border:0;background:rgba(255,255,255,.16);color:inherit;width:30px;height:30px;\n  border-radius:50%;font-size:13px;cursor:pointer;flex:0 0 auto}\n.gxroot .spkbar button.on{background:var(--brass);color:#fff}\n.gxroot .xzfab{position:fixed;right:16px;bottom:calc(78px + env(safe-area-inset-bottom));z-index:70;\n  border:0;cursor:pointer;border-radius:999px;padding:11px 17px 11px 14px;\n  background:var(--pine);color:#fff;font-family:var(--sans);\n  box-shadow:0 8px 26px rgba(31,77,61,.4);\n  display:flex;align-items:center;gap:7px;-webkit-tap-highlight-color:transparent}\n.gxroot .xzfab i{font-style:normal;font-size:17px;line-height:1}\n.gxroot .xzfab em{font-style:normal;font-size:15px;font-weight:600;letter-spacing:.04em;line-height:1;white-space:nowrap}\n.gxroot .gxz{position:fixed;inset:0;z-index:150;display:none}\n.gxroot .gxz.on{display:block}\n.gxroot .xzmask{position:absolute;inset:0;background:rgba(10,16,14,.44)}\n.gxroot .xzcard{position:absolute;left:0;right:0;bottom:0;max-height:86vh;\n  background:var(--paper);border-radius:20px 20px 0 0;display:flex;flex-direction:column;\n  animation:up .22s ease}\n.gxroot .xzh{display:flex;align-items:center;gap:8px;padding:14px 16px 10px;border-bottom:1px solid var(--line)}\n.gxroot .xzh button{flex:0 0 auto;white-space:nowrap}\n.gxroot .xzh .ico{width:auto;min-width:34px;padding:0 9px;font-size:13.5px}\n.gxroot .xzh b{font-family:var(--serif);font-size:17px}\n.gxroot .xzb{flex:1;overflow:auto;padding:14px 16px;-webkit-overflow-scrolling:touch}\n.gxroot .xzm{max-width:88%;padding:11px 14px;border-radius:15px;margin:0 0 11px;\n  font-size:15px;line-height:1.85;white-space:normal}\n.gxroot .xzm.user{background:var(--pine);color:#fff;margin-left:auto;border-bottom-right-radius:5px}\n.gxroot .xzm.assistant{background:var(--card);border:1px solid var(--line);border-bottom-left-radius:5px}\n.gxroot .xzm.xzwait{opacity:.6;font-style:italic}\n.gxroot .xzspk{display:block;margin-top:8px;border:1px solid var(--line);background:transparent;\n  color:var(--dusk);border-radius:8px;padding:3px 9px;font:inherit;font-size:12px;cursor:pointer}\n.gxroot .xzhi{background:var(--card);border:1px solid var(--line);border-radius:14px;\n  padding:14px;font-size:15px;line-height:1.85;margin-bottom:12px}\n.gxroot .xzq{display:flex;flex-direction:column;gap:7px}\n.gxroot .xzq button{text-align:left;border:1px solid var(--line);background:var(--card);color:var(--ink);\n  border-radius:11px;padding:11px 13px;font:inherit;font-size:14.5px;cursor:pointer;line-height:1.7}\n.gxroot .xzf{display:flex;gap:8px;padding:10px 14px calc(14px + env(safe-area-inset-bottom));\n  border-top:1px solid var(--line)}\n.gxroot .xzf input{flex:1;border:1px solid var(--line);border-radius:12px;background:var(--card);\n  color:inherit;font:inherit;font-size:16px;padding:11px 13px}\n.gxroot .vrow{display:flex;gap:8px}\n.gxroot .vpill{flex:1;border:1px solid var(--line);background:var(--card);color:var(--ink);\n  border-radius:13px;padding:11px 6px;font:inherit;cursor:pointer;text-align:center;\n  display:flex;flex-direction:column;gap:3px;transition:all .15s}\n.gxroot .vpill{text-decoration:none}\n.gxroot .vpill b{font-size:15px;font-weight:600}\n.gxroot .vpill span{font-size:11.5px;color:var(--dusk);line-height:1.4}\n.gxroot .vpill.on{background:var(--pine);border-color:var(--pine);color:#fff}\n.gxroot .vpill.on span{color:rgba(255,255,255,.75)}\n.gxroot .xzm.assistant{padding-bottom:8px}\n.gxroot .xzt.clip{display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;\n  overflow:hidden;position:relative}\n.gxroot .xzmore{display:block;margin:6px 0 0;border:0;background:transparent;padding:2px 0;\n  color:var(--pine);font:inherit;font-size:13px;font-weight:600;cursor:pointer}\n.gxroot .xzact{display:flex;gap:6px;margin-top:9px;padding-top:8px;border-top:1px solid var(--line)}\n.gxroot .xzact button{border:1px solid var(--line);background:transparent;color:var(--dusk);\n  border-radius:9px;padding:5px 10px;font:inherit;font-size:12.5px;cursor:pointer;\n  -webkit-tap-highlight-color:transparent}\n.gxroot .xzact button.on{border-color:var(--brass);color:var(--brass);font-weight:600}\n.gxroot .xzsv{font-size:15px;line-height:1.85;margin:0;white-space:normal}\n@media(prefers-reduced-motion:reduce){.gxroot, .gxroot *{animation:none!important;transition:none!important}}" + `
.gxroot{font-family:var(--sans);color:var(--ink);font-size:var(--fs);line-height:1.7;-webkit-text-size-adjust:100%}
html.gxa-lock,html.gxa-lock body{overflow:hidden}
#gxaov{position:fixed;inset:0;z-index:120;background:var(--paper);display:none;flex-direction:column}
#gxaov.on{display:flex}
#gxaov .gxa-bar{display:flex;align-items:center;gap:8px;padding:calc(10px + env(safe-area-inset-top)) 12px 10px;border-bottom:1px solid var(--line);background:var(--paper)}
#gxaov .gxa-bar b{flex:1;font-size:17px;font-family:var(--serif);text-align:center}
#gxaov .gxa-bar button{width:40px;height:40px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink);font-size:20px;line-height:1;cursor:pointer}
#gxaov .gxa-view{flex:1;overflow:auto;-webkit-overflow-scrolling:touch;padding:0 16px calc(28px + env(safe-area-inset-bottom));max-width:720px;width:100%;margin:0 auto;box-sizing:border-box}
.gxroot .gxa-toast{position:fixed;left:50%;bottom:calc(90px + env(safe-area-inset-bottom));transform:translateX(-50%) translateY(20px);background:#1F2A26;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;opacity:0;pointer-events:none;transition:.25s;z-index:400;max-width:86vw;text-align:center}
.gxroot .gxa-toast.on{opacity:1;transform:translateX(-50%) translateY(0)}
.gxroot .gxz{z-index:300}
.gxroot .xzm,.gxroot .xzhi,.gxroot .xzsv{font-size:calc(var(--fs,17px)*.94)}
.gxroot .xzin,.gxroot #gxxzin{font-size:max(16px,calc(var(--fs,17px)*.94))}
body:has(#gxaroot .gxz.on) .xz-fab,body:has(#gxaroot .gxz.on) #fab,body:has(#gxaov.on) .xz-fab,body:has(#gxaov.on) #fab,body:has(#gxaroot #gxs.on) .xz-fab,body:has(#gxaroot #gxs.on) #fab{display:none!important}.gxroot #gxs,.gxroot .gxsmask{z-index:310}#gxaroot #gxsSub,#gxaroot #gxsRv{z-index:330!important}
.gxroot .chn{flex:0 0 auto;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:var(--paper);font-size:17px}
.gxroot .chrow .s{display:block;font-size:calc(var(--fs)*.76);color:var(--dusk);margin-top:2px}
`;
    document.head.appendChild(st);
    /* 滿版小智頁（-xz1103）：整頁、頂部貼齊、輸入欄固定在畫面最底、回答全寬、A 字級鈕 */
    const st2 = document.createElement('style'); st2.id = 'xz2full';
    st2.textContent = ".gxz.on .xzmask{display:none}\n.gxz.on .xzcard{top:0;height:100%;max-height:none;border-radius:0;animation:none;background:var(--paper)}\n.gxz.on .xzh{padding-top:calc(12px + env(safe-area-inset-top,0px))}\n.gxz.on .xzctl{padding:8px 14px 10px;max-height:52vh;overflow:auto;-webkit-overflow-scrolling:touch;flex:0 0 auto;--xz2-fs:calc(var(--fs,17px)*.8);--xz2-acc:var(--pine)}\n.gxz.on .xzb{flex:1 1 auto;min-height:0;padding:12px 14px}\n.gxz.on .xzm.assistant,.gxz.on .xzhi{max-width:100%;width:100%}\n.gxz.on .xzm.user{max-width:90%}\n.gxz.on .xzf{padding:10px 14px calc(12px + env(safe-area-inset-bottom,0px));background:var(--paper)}\n.gxroot .gxz .xzm,.gxroot .gxz .xzhi,.gxroot .gxz .xzsv{font-size:calc(var(--fs,17px)*.94*var(--xzs,1))}\n.gxroot .gxz .xzh .ico.xzfs{min-width:34px;font-weight:700}\n.gxz .xz2s,.gxroot .xz2s{--xz2-fs:calc(var(--fs,17px)*.82);--xz2-acc:var(--pine)}\n.gxz .xzf .btn{width:auto!important;flex:0 0 auto}\n.gxz .xzf input{flex:1 1 auto;min-width:0;width:auto}\n.gxz .xzm{overflow-wrap:anywhere}\n.gxz.on .xzfab{display:none}";
    document.head.appendChild(st2);
  })();
  /* ── 對外 ── */
  window.NAR321 = NAR321; window.SAGE321 = SAGE321; window.GX = GX; window.GXS = GXS;
  try { window.PRON321 = PRON321; } catch (e) {}
  const GXA = {
    go, close: closeOv, render, S, save, toast, toSC, refreshD, root: ROOT, T, lang: LANG,
    hl: GXHL,
    hub: () => go('hub'),
    play: () => go('tools', 0, 'play'),
    works: () => go('me', 0, 'works'),
    meet: () => go('me', 0, 'meet'),
    studio: (o) => {
      closeOv();
      let it = o;
      if (!it) { try { it = C().quote && C().quote(); } catch (e) {} }
      it = it || {};
      GXS.open({ text: it.text || '', ref: it.ref || (C().name || ''), note: it.note || '' });
    },
    /* 小智（SAGE321）：對象、長度、追問、接續、排版、做成美圖 */
    sage: (o) => {
      o = o || {};
      const base = o.quicks || (() => []);
      const cfg = Object.assign({
        worker: SVC.xz, model: SVC.model, sendModel: !!SVC.sendModel, maxTokens: SVC.maxTokens || 1000,
        name: T('小智', 'Xiaozhi'), tagline: T('陪讀 · 解經 · 禱告', 'Read · Reflect · Pray'),
        sysExtra: () => GX.sysExtra(), followups: () => GX.followups(), controls: () => GX.ctl(),
        crisis: (q) => (/自殺|自杀|輕生|轻生|不想活|想死|結束生命|结束生命|了結自己|了结自己|活不下去|傷害自己|伤害自己|割腕|跳樓|跳楼|suicid|kill myself|end my life|want to die|self[- ]?harm|hurt myself/i.test(String(q || ''))) ? (LANG === 'en' ? '💛 **You are not alone.** I hear you, and I am glad you said it.\n\nIf you are thinking about hurting yourself or feel you cannot go on, please reach out to someone right now: your local emergency number or crisis line, and a pastor, family member or friend you trust.\n\nGod is with you and cares for you. I am here too — say whatever you need.' : (LANG === 'zs' ? '💛 **你现在不是一个人。** 我听见你了，谢谢你愿意说出来。\n\n如果你有伤害自己的念头，或觉得撑不下去，请现在就找一个人陪你：联系你所在地的紧急服务或心理援助热线，并打给身边信任的牧者、家人或朋友。\n\n神与你同在，祂看顾你。我也会在这里陪你，你想说什么都可以。' : '💛 **你現在不是一個人。** 我聽見你了，謝謝你願意說出來。\n\n如果你有傷害自己的念頭，或覺得撐不下去，請現在就找一個人陪你：\n\n- 緊急危險：**119**（救護）／**110**（警察）\n- 24 小時安心專線：**1925**（依舊愛我）\n- 生命線：**1995**\n- 張老師：**1980**\n- 身邊信任的牧者、家人或朋友，請現在就打給他\n\n神與你同在，祂看顧你。我也會在這裡陪你，你想說什麼都可以。')) : '',
        maxTokens: () => XZ2.maxTokens(), onSend: () => XZ2.collapse(),
        onCard: (t, q) => GXS.fromAnswer(t, q),
        onShare: (t, q) => GX.shareText(GX.sc((q ? q + '\n\n' : '') + SAGE321.plainOf(t) + '\n\n—— ' + GX.FELLOW + '\n' + GX.home())),
        toast: (m) => toast(m),
        store: { get: () => (Array.isArray(S.xzSaved) ? S.xzSaved : (S.xzSaved = [])), save },
        labels: LANG === 'en' ? {"hello": "Your reading companion.", "caveat": "I am not the Holy Spirit and I cannot replace your pastor — when in doubt, go back to the Bible and talk with a real spiritual companion.", "placeholder": "Ask Xiaozhi…", "send": "Send", "clear": "Clear", "close": "✕", "thinking": " is thinking…", "more": "Read more ▾", "less": "Collapse ▴", "speak": "🔊", "save": "☆ Save", "saved": "★ Saved", "del": "Delete", "share": "↗ Share", "card": "🖼 Card", "copied": "Copied — paste it anywhere", "foldAll": "Collapse", "foldedAll": "All long answers collapsed", "foldNone": "No long answers to collapse", "cont": "Xiaozhi is still writing…", "contAsk": "Please continue exactly where you stopped and finish. Do not repeat anything already written and do not add an opening line.", "fuT": "Ask more:", "didSave": "Saved", "didUnsave": "Removed from saved", "didDel": "Deleted", "offline": "You are offline, so Xiaozhi cannot help right now.", "slow": "Xiaozhi took too long — let’s pause.", "down": "Xiaozhi cannot connect right now. Please try again later.", "comfort": "Remember — your best companions are the Holy Spirit and the Word of God. You can pour out your heart to the Lord at any time.", "empty": "Xiaozhi could not find the right words, but God’s Word never fails. Try asking another way?", "iam": "I am Xiaozhi.", "exportTitle": "# Saved from Xiaozhi", "exportFile": "xiaozhi-saved.md"} : {}
      }, o);
      cfg.quicks = () => GX.quicks(base);
      SAGE321.init(cfg);
      return SAGE321;
    },
    setFs: (px) => { try { ROOT().style.setProperty('--fs', px + 'px'); } catch (e) {} }
  };
  window.GXA = GXA;
  try { GX.css(); } catch (e) {}
  ROOT();
  try { C().ready && C().ready(GXA); } catch (e) { try { console.error('GXA ready', e); } catch (_) {} }
  return GXA;
};
window.GXA_FACTORY();



/* VPICK321 v1（2026-10-23）：小智回答「做成美圖」時，從回答裡找出最合適的那一節經文
   ‧「>」引言裡帶章節的優先，其次是回答裡第一個帶章節的經文
   ‧ 經文用和合本原文（繁／简／英），資料讀互動聖經站的 toc.json 與 bible.{zh|zs|en}.*.json（GitHub Pages 有 CORS）
   ‧ VPICK321.pick(回答, 語言) → Promise<{t, ref, b, ch, v, v2} 或 null>；語言省略時自動判斷 */
(function () {
  if (window.VPICK321) return;
  var BASE = 'https://spch321-sudo.github.io/bible/';
  var TOC = null, BK = {}, SH = {}, RE = null, MAP = null;
  function getJ(u) { return fetch(u).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }); }
  function toc() {
    if (TOC) return Promise.resolve(TOC);
    return getJ(BASE + 'toc.json').then(function (t) { TOC = t; for (var i = 0; i < t.length; i++) BK[t[i].id] = t[i]; return t; });
  }
  /* 依回答本身的文字判斷語言：英文字多就是英文；简体专用字比繁體專用字多就是简体 */
  var SIMP = '们这说为门国时会对发来过还后话让见语长东车书学习认识问题简体经龙马鸟鱼爱华听读写应该样么个们开关头亲给让钱进运选远连农战线现实实际义乐兴约须带币帐盖净渐'.split('');
  var TRAD = '們這說為門國時會對發來過還後話讓見語長東車書學習認識問題簡體經龍馬鳥魚愛華聽讀寫應該樣麼個們開關頭親給讓錢進運選遠連農戰線現實實際義樂興約須帶幣帳蓋淨漸'.split('');
  function detect(md) {
    var t = String(md || ''), cjk = (t.match(/[\u4e00-\u9fff]/g) || []).length, lat = (t.match(/[A-Za-z]/g) || []).length;
    if (cjk < 10 && lat > 40) return 'en';
    var a = 0, b = 0, i;
    for (i = 0; i < SIMP.length; i++) if (t.indexOf(SIMP[i]) >= 0) a++;
    for (i = 0; i < TRAD.length; i++) if (t.indexOf(TRAD[i]) >= 0) b++;
    if (a > b) return 'zs';
    if (b > a) return 'zh';
    return lang();
  }
  function lang() {
    var l = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    if (/^en/.test(l)) return 'en';
    if (/hans|cn|sg/.test(l)) return 'zs';
    try { if (typeof S !== 'undefined' && S && S.set && S.set.sc) return 'zs'; } catch (e) { }
    try { var k = localStorage.getItem('k321_lang'); if (k === 'en') return 'en'; if (k === 'zh-Hans') return 'zs'; } catch (e) { }
    return 'zh';
  }
  function esc(n) { return n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s*').replace(/^(\d)(?=[A-Za-z])/, '$1\\s*'); }
  function regex() {
    if (RE) return RE;
    MAP = {}; var raw = [];
    function add(n, id) { n = String(n || '').trim(); var k = n.replace(/\s+/g, '').toLowerCase(); if (k && !MAP[k]) { MAP[k] = id; raw.push(n); } }
    for (var i = 0; i < TOC.length; i++) { var b = TOC[i]; add(b.zh, b.id); add(b.zs, b.id); add(b.en, b.id); add(b.azh, b.id); add(b.azs, b.id); add(b.aen, b.id); }
    add('Psalm', 'Psalms'); add('Song of Songs', 'SongofSolomon'); add('詩', 'Psalms'); add('诗', 'Psalms');
    raw.sort(function (a, b) { return b.length - a.length; });
    var names = []; for (var j = 0; j < raw.length; j++) names.push(esc(raw[j]));
    RE = new RegExp('(' + names.join('|') + ')\\s*(\\d{1,3})\\s*(?:[:：]|[章篇]\\s*(?:第\\s*)?)\\s*(\\d{1,3})\\s*[節节]?(?:\\s*[-–—~～至到]\\s*(\\d{1,3}))?', 'gi');
    return RE;
  }
  function refs(text) {
    var re = regex(), out = [], lines = String(text || '').split('\n');
    for (var li = 0; li < lines.length; li++) {
      var line = lines[li], m; re.lastIndex = 0;
      while ((m = re.exec(line))) {
        var id = MAP[m[1].replace(/\s+/g, '').toLowerCase()], b = id && BK[id];
        if (!b) continue;
        var ch = +m[2], v = +m[3], v2 = m[4] ? +m[4] : 0;
        if (!ch || ch > b.ch || !v) continue;
        out.push({ b: id, ch: ch, v: v, v2: (v2 > v && v2 - v <= 6) ? v2 : 0, q: /^\s*(&gt;|>)/.test(line) });
      }
    }
    return out;
  }
  function shard(lg, b) {
    var k = lg + '|' + b.shard;
    if (!SH[k]) SH[k] = getJ(BASE + 'bible.' + lg + '.' + b.shard + '.json').catch(function (e) { delete SH[k]; throw e; });
    return SH[k];
  }
  function clean(t) {
    var P = [['「', '」'], ['『', '』'], ['“', '”'], ['‘', '’']];
    for (var i = 0; i < P.length; i++) {
      var o = P[i][0], c = P[i][1], no = t.split(o).length - 1, nc = t.split(c).length - 1, k;
      if (no > nc) for (k = no - nc; k > 0 && t.indexOf(o) >= 0; k--) t = t.replace(o, '');
      else if (nc > no) for (k = nc - no; k > 0 && t.lastIndexOf(c) >= 0; k--) { var x = t.lastIndexOf(c); t = t.slice(0, x) + t.slice(x + 1); }
    }
    return t.trim();
  }
  function verse(lg, r) {
    var b = BK[r.b];
    return shard(lg, b).then(function (d) {
      var arr = d[r.b] && d[r.b][r.ch - 1]; if (!arr) return '';
      var hi = r.v2 || r.v, cur = 0, parts = [];
      for (var i = 0; i < arr.length; i++) {
        var seg = arr[i]; if (!seg || !seg.length) continue;
        for (var j = 1; j + 1 < seg.length; j += 2) {
          if (+seg[j] > 0) cur = +seg[j];
          if (cur >= r.v && cur <= hi && seg[j + 1]) parts.push(String(seg[j + 1]));
        }
      }
      return clean(parts.join(lg === 'en' ? ' ' : '').replace(/〔[^〕]*〕/g, '').replace(/\s+/g, ' ').trim());
    });
  }
  function label(lg, r) {
    var b = BK[r.b], nm = lg === 'en' ? (b.en || b.zh) : (lg === 'zs' ? b.zs : b.zh);
    return nm + ' ' + r.ch + ':' + r.v + (r.v2 ? '-' + r.v2 : '');
  }
  function pick(md, lg) {
    lg = lg || (/^en/i.test(document.documentElement.getAttribute('lang') || '') ? 'en' : detect(md));
    return toc().then(function () {
      var all = refs(md), order = [], i;
      for (i = 0; i < all.length; i++) if (all[i].q) order.push(all[i]);
      for (i = 0; i < all.length; i++) if (!all[i].q) order.push(all[i]);
      var k = 0;
      function next() {
        if (k >= order.length || k >= 6) return null;
        var r = order[k++];
        return verse(lg, r).then(function (t) {
          if (!t) return next();
          r.t = t; r.ref = label(lg, r); return r;
        }, function () { return next(); });
      }
      return next();
    });
  }
  /* 給各 App 的「做成美圖」用：找到經文就 open({t,ref,n:''})，找不到就 open(原本的內容) */
  function card(md, open, fallback) {
    pick(md).then(function (r) { if (r) open({ t: r.t, ref: r.ref, n: '' }); else open(fallback); }, function () { open(fallback); });
  }
  window.VPICK321 = { pick: pick, card: card, lang: lang, detect: detect, refs: function (t) { return toc().then(function () { return refs(t); }); } };
})();
