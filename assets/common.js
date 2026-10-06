// Pai Thiao 공용 기능: 언어 전환, 공손 어미(남성/여성), 진도 저장, 태국어 음성, 음성 인식, 도장
const PT = (() => {
  // 캐릭터 그림: 같은 이름으로 덮어쓰거나 여기 파일 이름만 바꾸면 첫 화면과 수업 화면에 모두 반영된다
  const CHARS = { mali: 'mali.svg', chang: 'chang.svg', tukkae: 'tukkae.svg' };
  const charSrc = (who, base = '') => `${base}assets/chars/${CHARS[who]}?v=3`;
  const charImg = (who, base = '') => `<img src="${charSrc(who, base)}" alt="" width="120" height="120">`;

  const get = (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } };
  const put = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  // 화면 언어: 기본 영어, 한국어 전환
  const LKEY = 'paithiao:lang';
  const getLang = () => get(LKEY, 'en') === 'ko' ? 'ko' : 'en';
  const L = (en, ko) => getLang() === 'ko' ? ko : en;
  function applyI18n(dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      const k = el.dataset.i18n;
      el.innerHTML = getLang() === 'ko' && dict[k] !== undefined ? R(dict[k]) : R(el.dataset.en);
    });
  }

  // 공손 어미: m = ครับ khráp, f = ค่ะ/คะ khâ/khá
  const GKEY = 'paithiao:speaker';
  const getG = () => get(GKEY, 'm') === 'f' ? 'f' : 'm';
  const FORMS = {
    m: { '{P}': 'ครับ', '{Q}': 'ครับ', '{p}': 'khráp', '{q}': 'khráp', '{k}': '크랍', '{I}': 'ผม', '{i}': 'phǒm', '{ki}': '폼' },
    f: { '{P}': 'ค่ะ', '{Q}': 'คะ', '{p}': 'khâ', '{q}': 'khá', '{k}': '카', '{I}': 'ฉัน', '{i}': 'chǎn', '{ki}': '찬' }
  };
  const R = s => String(s).replace(/\{(P|Q|p|q|k|I|i|ki)\}/g, m => FORMS[getG()][m]);

  function mountToggles(onChange) {
    const b = document.getElementById('lang');
    const g = document.getElementById('speaker');
    const paint = () => {
      const ko = getLang() === 'ko';
      b.textContent = ko ? 'English' : '한국어';
      b.setAttribute('lang', ko ? 'en' : 'ko');
      b.setAttribute('aria-label', ko ? 'Switch to English' : '한국어로 보기');
      document.documentElement.lang = getLang();
      if (g) {
        const m = getG() === 'm';
        g.innerHTML = `<span class="th">${m ? 'ครับ' : 'ค่ะ'}</span> ${m ? 'khráp' : 'khâ'}`;
        g.setAttribute('aria-label', L(m ? 'Polite ending: khráp (men). Tap to switch to khâ (women).' : 'Polite ending: khâ (women). Tap to switch to khráp (men).',
                                       m ? '공손 어미: 크랍(남성). 누르면 카(여성)로 바뀌어요.' : '공손 어미: 카(여성). 누르면 크랍(남성)으로 바뀌어요.'));
        g.title = g.getAttribute('aria-label');
      }
    };
    paint();
    b.onclick = () => { put(LKEY, getLang() === 'ko' ? 'en' : 'ko'); paint(); onChange(); };
    if (g) g.onclick = () => { put(GKEY, getG() === 'm' ? 'f' : 'm'); paint(); onChange(); };
  }

  // 진도: 'stretch-lesson' 키에 받은 연꽃 수(1~3)
  const KEY = 'paithiao:v1';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || { stamps: {} }; } catch (e) { return { stamps: {} }; } };
  const save = d => put(KEY, JSON.stringify(d));
  const getStamp = id => load().stamps[id] || 0;
  const setStamp = (id, stars) => { const d = load(); d.stamps[id] = Math.max(d.stamps[id] || 0, stars); save(d); };

  // 천천히 듣기
  const SKEY = 'paithiao:slow';
  const isSlow = () => get(SKEY, '0') === '1';
  const setSlow = v => put(SKEY, v ? '1' : '0');

  // 태국어 음성. 녹음 파일은 assets/audio/manifest.js 에 PT_AUDIO = { "ขอบคุณครับ": "../assets/audio/khop-khun-khrap.mp3" } 형태로 추가
  let voice = null;
  const pickVoice = () => {
    if (!('speechSynthesis' in window)) return;
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v => v.lang === 'th-TH') || vs.find(v => /^th/i.test(v.lang)) || null;
  };
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    const t = R(text);
    const map = window.PT_AUDIO || {};
    if (map[t]) { new Audio(map[t]).play(); return true; }
    if (!('speechSynthesis' in window)) return false;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'th-TH'; if (voice) u.voice = voice;
    u.rate = rate || (isSlow() ? 0.55 : 0.8);
    speechSynthesis.speak(u);
    return true;
  }

  // 음성 인식
  const SRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const canListen = () => !!SRec;
  function listen() {
    return new Promise((resolve, reject) => {
      const r = new SRec();
      r.lang = 'th-TH'; r.interimResults = false; r.maxAlternatives = 5;
      r.onresult = e => resolve([...e.results[0]].map(a => a.transcript));
      r.onnomatch = () => resolve([]);
      r.onerror = e => reject(e.error);
      r.start();
    });
  }
  // 띄어쓰기, 문장부호, 반복 부호, 공손 어미를 빼고 비교한다
  const normTh = s => R(s).replace(/ครับ|ค่ะ|คะ|ค่า|ฮะ/g, '').replace(/[\sๆ.,!?'"]/g, '').toLowerCase();
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const close = (heard, target) => {
    const a = normTh(heard), b = normTh(target);
    if (!b) return false;
    if (a.includes(b)) return true;
    return 1 - lev(a, b) / Math.max(a.length, b.length) >= 0.7;
  };

  const playIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';

  // 비자 도장: 지붕 끝이 솟은 사원 모양, 이름, 받은 연꽃(1~3)
  function stampSVG(name, stars) {
    const c = '#A8323E';
    const fs = Math.min(9, 66 / (name.length * 0.62));
    const dots = [0, 1, 2].map(i => `<path transform="translate(${38 + i * 12} 70)" d="M0 -5 Q3.5 -1 0 3 Q-3.5 -1 0 -5 Z" fill="${i < stars ? c : 'none'}" stroke="${c}" stroke-width="1.3"/>`).join('');
    return `<svg viewBox="0 0 100 100" role="img" aria-label="${L(name + ' stamp, ' + stars + ' of 3 lotuses', name + ' 도장, 연꽃 ' + stars + '개')}" style="transform:rotate(-7deg)">
      <rect x="6" y="6" width="88" height="88" rx="16" fill="none" stroke="${c}" stroke-width="3"/>
      <rect x="12" y="12" width="76" height="76" rx="11" fill="none" stroke="${c}" stroke-width="1"/>
      <g transform="translate(50 34)" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-16 8 L-10 -2 L10 -2 L16 8 Z"/><path d="M-10 -2 L-6 -9 L6 -9 L10 -2"/><path d="M0 -9 L0 -15"/>
        <path d="M-16 8 Q-19 6 -19 3 M16 8 Q19 6 19 3"/>
      </g>
      <text x="50" y="58" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="${fs.toFixed(1)}" font-weight="700" fill="${c}">${name.toUpperCase()}</text>
      ${dots}</svg>`;
  }
  return { charSrc, charImg, getLang, L, R, getG, applyI18n, mountToggles, getStamp, setStamp, speak, isSlow, setSlow, canListen, listen, close, playIcon, stampSVG, hasVoice: () => !!voice };
})();
