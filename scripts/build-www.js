// 웹앱 파일을 www 폴더로 복사 (안드로이드 앱 안에 들어갈 화면)
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, ".."), out = path.join(root, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const f of ["index.html", "xlsx.full.min.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable.png", "apple-touch-icon.png"]) {
  fs.copyFileSync(path.join(root, f), path.join(out, f));
}
console.log("www 준비 완료");
