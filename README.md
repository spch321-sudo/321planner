# 321每日得勝（三語整合版）

同一個 App：繁體 tc.html／简体 sc.html／English en.html。
index.html 只負責導向：上次使用的語言 → 新使用者依手機語言 → 繁體。
也可用網址指定：/321planner/?lang=sc 或 ?lang=en

## 上傳（spch321-sudo/321planner）
把本資料夾全部檔案整批上傳覆蓋。321planner.html、slide.html 不受影響，保留即可。
版本號在 tc/sc/en.html 的 APP_VERSION、sw.js 的 VER、version.json 三處一致。

## 舊網址（建議）
321planner-sc、321planner-en 兩個 repo 各上傳對應資料夾裡的 index.html 與 sw.js，
舊網址就會記住語言並自動轉到 /321planner/。

## Google 日曆連結（一次性部署日曆轉接站）
Google 日曆的 .ics 網址不允許網頁直接讀取，所以要部署一支 Cloudflare Worker：
1. Cloudflare → Workers & Pages → Create → Worker，名稱填 ical-proxy → Deploy
2. Edit code，把 ical-proxy.js 整段貼上取代 → Deploy
3. 打開 https://ical-proxy.spch321.workers.dev/ 會看到 ok 就完成
部署前，「匯入 .ics 檔」仍可使用。
