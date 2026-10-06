// 오늘의 다섯 마디: 마친 과의 표현을 듣고 뜻을 고른다. 틀린 표현은 다음 날 먼저 나온다.
(() => {
const L = PT.L, R = PT.R, T = p => R(L(p[0], p[1]));
const app = document.getElementById('app');
const KEY = 'paithiao:review';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const dayBefore = s => { const d = new Date(s + 'T12:00:00'); d.setDate(d.getDate() - 1); return d.toISOString().slice(0, 10); };
const load = () => { try { return Object.assign({ missed: [], days: [] }, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { return { missed: [], days: [] }; } };
const save = d => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} };
const friend = (who, html) => `<div class="say"><div class="avatar">${PT.charImg(who, '../')}</div><p>${R(html)}</p></div>`;
const playBtn = (text, label) => `<button class="btn small play" data-say="${esc(text)}">${PT.playIcon}${label || L('Listen', '듣기')}</button>`;

// 마친 과의 표현을 모은다. 같은 태국어는 한 번만, 숫자 하나짜리 성조 연습 낱말도 포함한다.
function pool() {
  const out = [], seen = new Set();
  PT_STRETCHES.concat(PT_SIDE).filter(s => s.open).forEach(s => s.lessons.forEach(e => {
    if (!PT.getStamp(s.n + '-' + e.n)) return;
    const les = (PT_LESSONS[s.n] || {})[e.n]; if (!les) return;
    les.units.forEach(u => { if (!seen.has(u.th)) { seen.add(u.th); out.push(Object.assign({ id: u.th, from: L(e.name, e.ko) }, u)); } });
  }));
  return out;
}
function streak(days) {
  let n = 0, d = days.includes(today()) ? today() : dayBefore(today());
  while (days.includes(d)) { n++; d = dayBefore(d); }
  return n;
}
function pickSet(all, st) {
  const byId = new Map(all.map(u => [u.id, u]));
  const first = st.missed.filter(id => byId.has(id)).slice(0, 5).map(id => byId.get(id));
  const rest = shuffle(all.filter(u => !first.includes(u))).slice(0, 5 - first.length);
  return shuffle(first.concat(rest));
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b && !PT.speak(b.dataset.say)) alert(L('This browser cannot play sound. Try Chrome or open the page on your phone.', '이 브라우저에서는 소리를 낼 수 없어요. 크롬이나 휴대전화로 열어 보세요.'));
  if (e.target.closest('#slow')) { PT.setSlow(!PT.isSlow()); paintSlow(); }
});
function paintSlow() {
  const b = document.getElementById('slow'); if (!b) return;
  b.setAttribute('aria-pressed', PT.isSlow());
  b.textContent = PT.isSlow() ? L('Slow voice: on', '천천히 듣기: 켜짐') : L('Slow voice: off', '천천히 듣기: 꺼짐');
}
function chrome() {
  document.title = L("Today's five - Pai Thiao", '오늘의 다섯 마디 - Pai Thiao');
  document.getElementById('navS').textContent = L('Stretches', '구간');
  document.getElementById('navC').textContent = L('My passport', '나의 여권');
}
function head(sub) {
  return `<p class="crumb"><a href="../">${L('Home', '처음 화면')}</a></p>
    <h2 class="lesson-title">${L("Today's five", '오늘의 다섯 마디')}</h2><p class="lead" style="margin:0 0 1.2rem">${sub}</p>`;
}

let set = [], i = 0, right = [], wrong = [];
function start() {
  const all = pool(), st = load();
  if (all.length < 4) {
    app.innerHTML = head(L('Five phrases a day from lessons you have finished.', '마친 과에서 하루 다섯 마디씩 복습해요.')) +
      `<div class="panel">${friend('chang', L('Finish your first lesson, and its phrases will start appearing here. I will keep the ones you miss and bring them back the next day.', '첫 과를 마치면 그 과의 표현이 여기에 나오기 시작해요. 틀린 표현은 내가 잘 챙겨 뒀다가 다음 날 다시 꺼내 줄게요.'))}
      <div class="nav-bottom"><span></span><a class="btn go" href="../stretch-1/?lesson=1">${L('Start lesson 1', '1과 시작하기')}</a></div></div>`;
    return;
  }
  set = pickSet(all, st); i = 0; right = []; wrong = [];
  const back = st.missed.filter(id => set.some(u => u.id === id)).length;
  const s = streak(st.days);
  app.innerHTML = head(L(`${all.length} phrases from your finished lessons are in the pool.`, `마친 과의 표현 ${all.length}개 중에서 골라요.`)) +
    `<div class="panel"><div class="panel-tools"><button class="btn small" id="slow" type="button" aria-pressed="false"></button></div>
     <h2>${L('Ready?', '준비됐나요?')}</h2>
     ${friend('chang', (back ? L(back === 1 ? "One of today's five is a phrase you missed last time. Let us get it right today." : `${back} of today's five are phrases you missed last time. Let us get them right today.`, `오늘의 다섯 마디 중 ${back}개는 지난번에 틀린 표현이에요. 오늘은 꼭 맞혀 봐요.`) : L('Listen to each phrase and pick what it means. Any you miss will come back tomorrow.', '표현을 듣고 뜻을 골라요. 틀린 표현은 내일 다시 나와요.')) +
       (s ? ' ' + L(`You are on a ${s}-day streak.`, `${s}일 연속으로 복습하고 있어요.`) : ''))}
     <div class="nav-bottom"><span></span><button class="btn go" id="go">${L('Start', '시작하기')}</button></div></div>`;
  paintSlow();
  document.getElementById('go').onclick = ask;
}
function ask() {
  const all = pool(), q = set[i];
  const wrongs = shuffle(all.filter(u => u.id !== q.id && T(u.m) !== T(q.m))).slice(0, 3);
  const opts = shuffle([q].concat(wrongs));
  let tried = false;
  app.innerHTML = head(L('Listen, then pick what it means.', '듣고 뜻을 골라요.')) +
    `<ol class="steps">${set.map((_, k) => `<li class="${k === i ? 'now' : k < i ? 'done' : ''}">${k + 1}</li>`).join('')}</ol>
    <div class="panel"><div class="panel-tools"><button class="btn small" id="slow" type="button" aria-pressed="false"></button></div>
      <h2>${i + 1} / ${set.length}</h2>
      ${playBtn(q.th, L('Listen again', '다시 듣기'))}
      <div class="choices">${opts.map(o => `<button class="choice meanopt" data-id="${esc(o.id)}">${T(o.m)}</button>`).join('')}</div>
      <div class="feedback" id="fb" aria-live="polite"></div><div id="reveal"></div>
      <div class="nav-bottom"><span></span><button class="btn go" id="next" hidden>${i + 1 < set.length ? L('Next', '다음') : L('See results', '결과 보기')}</button></div></div>`;
  paintSlow();
  setTimeout(() => PT.speak(q.th), 300);
  app.querySelectorAll('.choice').forEach(b => b.onclick = () => {
    const fb = document.getElementById('fb');
    if (b.dataset.id === q.id) {
      b.classList.add('right'); app.querySelectorAll('.choice').forEach(x => x.disabled = true);
      fb.className = 'feedback ok'; fb.textContent = L('That is right.', '맞았어요.');
      (tried ? wrong : right).push(q);
      document.getElementById('reveal').innerHTML = `<p><span class="th" style="font-size:1.6rem;color:var(--jade)">${R(q.th)}</span><br><span class="rom">${R(q.r)}</span>${PT.getLang() === 'ko' && q.k ? ` <span class="kpron" style="display:inline">${R(q.k)}</span>` : ''}<br><small class="muted">${L('From', '출처')}: ${q.from}</small></p>`;
      document.getElementById('next').hidden = false;
    } else {
      tried = true; b.classList.add('wrong'); b.disabled = true;
      fb.className = 'feedback no'; fb.textContent = L('Not that one. Listen once more.', '그건 아니에요. 한 번 더 들어 봐요.');
      PT.speak(q.th, 0.6);
    }
  });
  document.getElementById('next').onclick = () => { i++; i < set.length ? ask() : finish(); };
}
function finish() {
  const st = load();
  const missed = new Set(st.missed);
  right.forEach(u => missed.delete(u.id));
  wrong.forEach(u => missed.add(u.id));
  st.missed = [...missed];
  if (!st.days.includes(today())) st.days.push(today());
  st.days = st.days.slice(-60);
  save(st);
  const s = streak(st.days);
  const row = u => `<li><span class="th">${R(u.th)}</span> <span class="rom">${R(u.r)}</span> <span class="muted">${T(u.m)}</span> ${playBtn(u.th)}</li>`;
  app.innerHTML = head(L('Done for today.', '오늘 복습을 마쳤어요.')) +
    `<div class="panel"><h2>${L(`${right.length} of ${set.length} on the first try`, `${set.length}개 중 ${right.length}개를 한 번에 맞혔어요`)}</h2>
     ${friend(right.length === set.length ? 'mali' : 'chang', right.length === set.length
        ? L('All five, first try. Your ears are getting sharp. ', '다섯 개 모두 한 번에 맞혔어요. 귀가 점점 밝아지고 있어요. ')
        : L(wrong.length === 1 ? 'I have kept the one you missed. It will come first tomorrow. ' : `I have kept the ${wrong.length} you missed. They will come first tomorrow. `, `틀린 ${wrong.length}개는 내가 챙겨 뒀어요. 내일 먼저 나올 거예요. `))
       + (s > 1 ? L(`That makes ${s} days in a row.`, `벌써 ${s}일 연속이에요.`) : '')}
     ${wrong.length ? `<h3 class="h3">${L('Coming back tomorrow', '내일 다시 나올 표현')}</h3><ul class="words">${wrong.map(row).join('')}</ul>` : ''}
     ${right.length ? `<h3 class="h3">${L('Got it', '맞힌 표현')}</h3><ul class="words">${right.map(row).join('')}</ul>` : ''}
     <div class="nav-bottom"><a class="btn" href="../">${L('Back home', '처음 화면으로')}</a><button class="btn go" id="more">${L('Five more', '다섯 마디 더')}</button></div></div>`;
  document.getElementById('more').onclick = start;
}
chrome();
PT.mountToggles(() => { chrome(); start(); });
start();
})();
