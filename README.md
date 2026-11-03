# 321每日得勝（三語整合版）

同一個 App：繁體 tc.html／简体 sc.html／English en.html。
index.html 只負責導向：上次使用的語言 → 新使用者依手機語言 → 繁體。
也可用網址指定：/321planner/?lang=sc 或 ?lang=en

## v2026.1103.0840（自動更新確認與補強）
- 實測確認 tc／sc／en 三頁皆為自動更新版（version.json 輪詢＋SW 更新、空閒自動套用、防無限重整、設定頁有檢查更新／強制更新、快取只清 p4planner- 前綴）。
- 補強「忙碌」判斷：朗讀中（朗讀控制列／內建語音）、美圖工作室／小智／工具箱全螢幕、畫線面板、配樂／錄影預覽播放中時不自動重整，只顯示更新橫幅，結束後自動套用。
- 版本 `v2026.1103.0840` 四處一致：`version.json`、`sw.js`、tc／sc／en.html（APP_VERSION）、本 README。

## 上傳（spch321-sudo/321planner）
把本資料夾全部檔案整批上傳覆蓋。321planner.html、slide.html 不受影響，保留即可。
版本號在 tc/sc/en.html 的 APP_VERSION、sw.js 的 VER、version.json 三處一致。目前版本 v2026.1103.0930。

## 一起共讀（coread.js＋peerjs.min.js）
每個畫面頂端的 📡 可開共讀房間／輸入 6 位數碼加入；加入者跟著帶領者切到同一個畫面與捲動位置，只同步「在哪個畫面」，個人資料不傳送。
三語頁面共用房號前綴 pl321-，彼此互通。邀請連結 ?join=碼，投影螢幕 ?join=碼&screen=1。
同步畫面：規劃（日期、今日／優先／晚禱）、靈修、關係、週顧、時程（日期）、日曆（年月）、週視圖；
不同步：設定、記錄、日誌、統計、專案、事工、各種視窗與共讀面板。

## 舊網址（建議）
321planner-sc、321planner-en 兩個 repo 各上傳對應資料夾裡的 index.html 與 sw.js，
舊網址就會記住語言並自動轉到 /321planner/。

## Google 日曆連結（一次性部署日曆轉接站）
Google 日曆的 .ics 網址不允許網頁直接讀取，所以要部署一支 Cloudflare Worker：
1. Cloudflare → Workers & Pages → Create → Worker，名稱填 ical-proxy → Deploy
2. Edit code，把 ical-proxy.js 整段貼上取代 → Deploy
3. 打開 https://ical-proxy.spch321.workers.dev/ 會看到 ok 就完成
部署前，「匯入 .ics 檔」仍可使用。
