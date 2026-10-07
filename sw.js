// Pai Thiao 오프라인 저장. 파일을 바꿔 올릴 때마다 VERSION 숫자를 올리면 휴대전화에 저장된 사이트가 새로 바뀐다.
const VERSION = 'pai-thiao-v6';
const FONTS = 'pai-thiao-fonts';
const FILES = [
  "./",
  "manifest.webmanifest",
  "favicon.svg",
  "phrasebook/",
  "practice/",
  "stretch-1/",
  "stretch-2/",
  "stretch-3/",
  "stretch-4/",
  "stretch-5/",
  "stretch-6/",
  "stretch-7/",
  "trip-ayutthaya/",
  "trip-chiangmai/",
  "trip-phuket/",
  "assets/audio/manifest.js",
  "assets/chars/chang.webp",
  "assets/chars/mali.webp",
  "assets/chars/tukkae.webp",
  "assets/common.js",
  "assets/data.js",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/maskable-512.png",
  "assets/lesson.js",
  "assets/phrasebook.js",
  "assets/practice.js",
  "assets/side-lessons.js",
  "assets/stretch-1-lessons.js",
  "assets/stretch-2-lessons.js",
  "assets/stretch-3-lessons.js",
  "assets/stretch-4-lessons.js",
  "assets/stretch-5-lessons.js",
  "assets/stretch-6-lessons.js",
  "assets/stretch-7-lessons.js",
  "assets/style.css"
];
const strip = url => { const u = new URL(url); u.search = ''; u.hash = ''; return u.href; };

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // 구글 폰트: 한 번 받으면 저장해 두고 계속 쓴다
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  // sw.js 자신과 녹음실은 저장하지 않고 늘 새로 받는다
  if (url.pathname.endsWith('/sw.js') || url.pathname.includes('/record/') || /assets\/(record\.|vendor\/)/.test(url.pathname)) return;
  // 녹음 목록(manifest.js)은 인터넷이 되면 늘 새것을, 안 되면 저장된 것을 쓴다
  if (url.pathname.endsWith('assets/audio/manifest.js')) {
    e.respondWith(caches.open(VERSION).then(c => {
      const key = strip(req.url);
      return fetch(req).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => c.match(key).then(hit => hit || Response.error()));
    }));
    return;
  }
  // 사이트 파일: 저장된 것을 바로 보여 주고, 인터넷이 되면 뒤에서 새것으로 바꿔 둔다
  e.respondWith(caches.open(VERSION).then(async c => {
    const key = strip(req.url);
    const hit = await c.match(key);
    const net = fetch(req).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') return (await c.match(new URL('./', self.registration.scope).href)) || Response.error();
    return Response.error();
  }));
});
