// 회화 수첩: 열린 과의 표현을 모아 검색하고 듣는다. 복습 과에서 겹치는 표현은 한 번만 보인다.
(() => {
const L = PT.L, R = PT.R, T = p => R(L(p[0], p[1]));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fold = s => R(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const q = document.getElementById('q');
const groups = [];
const seen = new Set();
PT_STRETCHES.filter(s => s.open).forEach(s => s.lessons.forEach(e => {
  const les = (PT_LESSONS[s.n] || {})[e.n]; if (!les) return;
  const items = les.units.filter(u => !seen.has(u.th) && seen.add(u.th));
  if (items.length) groups.push({ s, e, items });
}));
function paintSlow() {
  const b = document.getElementById('slow');
  b.setAttribute('aria-pressed', PT.isSlow());
  b.textContent = PT.isSlow() ? L('Slow voice: on', '천천히 듣기: 켜짐') : L('Slow voice: off', '천천히 듣기: 꺼짐');
}
function render() {
  document.title = L('Pocket phrasebook - Pai Thiao', '회화 수첩 - Pai Thiao');
  document.getElementById('home').textContent = L('Home', '처음 화면');
  document.getElementById('navS').textContent = L('Stretches', '구간');
  document.getElementById('navC').textContent = L('My passport', '나의 여권');
  document.getElementById('pbH').textContent = L('Pocket phrasebook', '회화 수첩');
  document.getElementById('pbLead').textContent = L('Every phrase from the open lessons, grouped by stop. Tap a phrase to hear it, or show the Thai script to the person you are talking to.', '열린 과의 모든 표현을 정거장별로 모았어요. 눌러서 듣거나, 태국 글자를 상대에게 바로 보여 줘도 돼요.');
  q.placeholder = L('Search: water, how much, restroom, ขอบคุณ', '검색: 물, 얼마, 화장실, ขอบคุณ');
  paintSlow();
  const term = fold(q.value.trim());
  const html = groups.map(g => {
    const items = g.items.filter(u => !term || [u.th, u.r, u.m[0], u.m[1], u.k || ''].some(x => fold(x).includes(term)));
    if (!items.length) return '';
    return `<div class="pb-group"><h3>${g.s.n}-${g.e.n}. ${L(g.e.name, g.e.ko)} <span class="muted" style="font:400 .95rem var(--sans)">${T(g.e.t)}</span></h3>
      <ul class="pb-list">${items.map(u => `<li><span class="th">${R(u.th)}</span>
        <button class="btn small play" data-say="${esc(u.th)}" aria-label="${L('Listen', '듣기')}">${PT.playIcon}</button>
        <span class="rom">${R(u.r)}</span>${PT.getLang() === 'ko' && u.k ? `<span class="kpron">${R(u.k)}</span>` : ''}
        <span class="mean">${T(u.m)}</span></li>`).join('')}</ul></div>`;
  }).join('');
  document.getElementById('list').innerHTML = html || `<p class="lead">${L('Nothing matches yet. Try another word.', '아직 맞는 표현이 없어요. 다른 낱말로 찾아보세요.')}</p>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b && !PT.speak(b.dataset.say)) alert(L('This browser cannot play sound. Try Chrome or open the page on your phone.', '이 브라우저에서는 소리를 낼 수 없어요. 크롬이나 휴대전화로 열어 보세요.'));
  if (e.target.closest('#slow')) { PT.setSlow(!PT.isSlow()); paintSlow(); }
});
q.addEventListener('input', render);
PT.mountToggles(render);
render();
})();
