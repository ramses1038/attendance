// 웹앱 파일을 www 폴더로 복사 (안드로이드 앱 안에 들어갈 화면)
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, ".."), out = path.join(root, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const f of ["index.html", "xlsx.full.min.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable.png", "apple-touch-icon.png"]) {
  fs.copyFileSync(path.join(root, f), path.join(out, f));
}
// 앱에서만 쓰는 연결 코드 (Capacitor 본체, 구글 로그인 플러그인)
fs.copyFileSync(path.join(root, "node_modules/@capacitor/core/dist/capacitor.js"), path.join(out, "capacitor-core.js"));
fs.copyFileSync(path.join(root, "node_modules/@capgo/capacitor-social-login/dist/plugin.js"), path.join(out, "social-login.js"));
console.log("www 준비 완료");
