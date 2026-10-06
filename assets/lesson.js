// 구간 화면과 수업 진행. 구간 번호는 각 HTML의 window.PT_STRETCH 로 정한다.
(() => {
const L = PT.L, R = PT.R;
const T = pair => R(L(pair[0], pair[1]));
const app = document.getElementById('app');
const S = window.PT_STRETCH;
const STR = PT_STRETCHES.concat(typeof PT_SIDE !== 'undefined' ? PT_SIDE : []).find(s => s.n === S);
const ALL = (window.PT_LESSONS || {})[S] || {};
const params = new URLSearchParams(location.search);
const ln = parseInt(params.get('lesson'), 10);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const playBtn = (text, label) => `<button class="btn small play" data-say="${esc(text)}">${PT.playIcon}${label || L('Listen', '듣기')}</button>`;
const friend = (who, html) => `<div class="say"><div class="avatar">${PT.charImg(who, '../')}</div><p>${R(html)}</p></div>`;
const small = t => `<small class="count">${t}</small>`;
const koOnly = s => PT.getLang() === 'ko' && s ? `<span class="kpron">${R(s)}</span>` : '';
const stretchName = () => STR.side ? L('Beyond Bangkok', '방콕 밖으로') : L(STR.en, STR.ko);
const ordinal = n => typeof n === 'string' ? L('Side trip: ' + STR.en, '부록: ' + STR.ko) : L(['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'][n - 1] + ' stretch', ['첫째', '둘째', '셋째', '넷째', '다섯째', '여섯째', '일곱째'][n - 1] + ' 구간');

app.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b && !PT.speak(b.dataset.say)) alert(L('This browser cannot play sound. Try Chrome or open the page on your phone.', '이 브라우저에서는 소리를 낼 수 없어요. 크롬이나 휴대전화로 열어 보세요.'));
  const sl = e.target.closest('#slow');
  if (sl) { PT.setSlow(!PT.isSlow()); paintSlow(); }
});
function paintSlow() {
  const b = document.getElementById('slow'); if (!b) return;
  b.setAttribute('aria-pressed', PT.isSlow());
  b.textContent = PT.isSlow() ? L('Slow voice: on', '천천히 듣기: 켜짐') : L('Slow voice: off', '천천히 듣기: 꺼짐');
}
function chrome() {
  document.getElementById('navT').textContent = ordinal(S);
  document.getElementById('navC').textContent = L('My passport', '나의 여권');
  const pb = document.getElementById('navPb'); if (pb) pb.textContent = L('Phrasebook', '회화 수첩');
  document.title = `${STR.side ? ordinal(S) : ordinal(S) + ': ' + stretchName()} - Pai Thiao`;
}

/* 과 고르기 화면 */
function listPage() {
  app.innerHTML = `<p class="crumb"><a href="../#${STR.side ? 'side-trips' : 'stretches'}">${STR.side ? L('All side trips', '모든 부록 여행') : L('All stretches', '모든 구간')}</a></p>
    <h2>${STR.side ? ordinal(S) : ordinal(S) + ': ' + stretchName()}</h2>
    <p class="lead">${T(STR.what)}. ${L(STR.lessons.length + ' lessons, about ten minutes each.' + (STR.side ? ' Do them the week before you go.' : ' One a day is plenty.'), '모두 ' + STR.lessons.length + '과이고, 한 과에 10분 정도예요.' + (STR.side ? ' 떠나기 전 주에 해 두면 좋아요.' : ' 하루 한 과면 충분해요.'))}</p>
    <ol class="etapas">${STR.lessons.map(e => {
      const s = PT.getStamp(S + '-' + e.n);
      const ready = !!ALL[e.n];
      const status = s ? L(s + ' of 3 lotuses', '연꽃 ' + s + '개') : (ready ? L('Start', '시작하기') : L('Coming soon', '준비 중'));
      const inner = `<span><span class="nm">${e.n}. ${L(e.name, e.ko)}</span><br><span class="tp">${T(e.t)}</span></span><span class="tag ${s || ready ? 'open' : ''}">${status}</span>`;
      return `<li>${ready ? `<a href="?lesson=${e.n}">${inner}</a>` : `<div class="locked">${inner}</div>`}</li>`;
    }).join('')}</ol>`;
}
function closedPage() {
  app.innerHTML = `<div class="panel" style="margin-top:1.5rem"><h2>${L('This lesson is not open yet', '이 과는 아직 준비 중이에요')}</h2>
    <a class="btn go" href="?lesson=1">${L('Go to lesson 1', '1과로 가기')}</a> <a class="btn" href="./">${L('Choose a lesson', '과 고르기')}</a></div>`;
}
const info = STR.lessons.find(e => e.n === ln);
if (!ln || !info || !ALL[ln]) {
  const page = !ln ? listPage : closedPage;
  chrome(); page();
  PT.mountToggles(() => { chrome(); page(); });
  return;
}

/* 수업 진행 */
const LS = ALL[ln];
const G = LS.guide || 'mali';
const STEPS = [['Listen', '소리 듣기'], LS.chooseTitle || ['Pick what you heard', '듣고 고르기'], ['Say it', '따라 말하기'], LS.fillTitle || ['Complete the phrase', '빈칸 채우기'], ['Get your stamp', '도장 받기']];
const TOTAL = LS.choose.length + LS.fill.length;
let step = 0, score = 0, scoreAtStep = 0;

const warn = () => `<p class="feedback no voice-warn">${L('No Thai voice was found on this device. Add Thai in your system speech settings, or open the page on your phone.', '이 기기에서 태국어 음성을 찾지 못했어요. 시스템 설정의 음성 항목에서 태국어를 추가하거나 휴대전화로 열어 보세요.')}</p>`;
let noVoice = false;
setTimeout(() => {
  if (PT.hasVoice() || Object.keys(window.PT_AUDIO || {}).length) return;
  noVoice = true;
  const p = app.querySelector('.panel');
  if (p && !p.querySelector('.voice-warn')) p.insertAdjacentHTML('afterbegin', warn());
}, 1500);

function frame(inner) {
  app.innerHTML = `<p class="crumb"><a href="./">${ordinal(S)}</a></p>
    <h2 class="lesson-title">${info.n}. ${L(info.name, info.ko)}</h2>
    <p class="lead" style="margin:0">${T(info.t)}</p>
    <ol class="steps">${STEPS.map((s, i) => `<li class="${i === step ? 'now' : i < step ? 'done' : ''}">${i + 1}<span>. ${T(s)}</span></li>`).join('')}</ol>
    <div class="panel">${noVoice ? warn() : ''}<div class="panel-tools"><button class="btn small" id="slow" type="button" aria-pressed="false"></button></div>${inner}</div>`;
  paintSlow();
}
const go = n => { step = n; scoreAtStep = score; window.scrollTo(0, 0); [listenStep, chooseStep, speakStep, fillStep, stampStep][n](); };
const card = u => `<button class="card" data-say="${esc(u.th)}" aria-label="${esc(R(u.r))}, ${esc(T(u.m))}">
    <span class="th big">${R(u.th)}</span><span class="rom">${R(u.r)}</span>${koOnly(u.k)}
    <span class="mean">${T(u.m)}</span>${u.n ? `<span class="memo">${T(u.n)}</span>` : ''}</button>`;

/* 1. 소리 듣기 */
function listenStep() {
  frame(`<h2>${L('Listen', '소리 듣기')}</h2>
    ${friend(G, T(LS.intro))}
    <div class="cards">${LS.units.map(card).join('')}</div>
    ${friend(G, T(LS.tip))}
    <div class="nav-bottom"><span></span><button class="btn go" id="next">${L('On to the next step', '다음 단계로')}</button></div>`);
  document.getElementById('next').onclick = () => go(1);
}

/* 2. 듣고 고르기 */
function chooseStep() {
  let i = 0;
  const render = () => {
    const q = LS.choose[i]; let tried = false;
    const order = shuffle(q.opts.map((o, k) => k));
    const label = o => q.type === 'mean' ? T(o) : R(o);
    frame(`<h2>${T(STEPS[1])} ${small(`${i + 1} / ${LS.choose.length}`)}</h2>
      <p>${q.type === 'mean' ? L('Listen, then pick what it means.', '듣고 무슨 뜻인지 골라요.') : L('Listen, then pick what you heard.', '듣고 들은 말을 골라요.')}</p>
      ${playBtn(q.say, L('Listen again', '다시 듣기'))}
      <div class="choices">${order.map(k => `<button class="choice ${q.type === 'mean' ? 'meanopt' : 'rom'}" data-k="${k}">${label(q.opts[k])}</button>`).join('')}</div>
      <div class="feedback" id="fb" aria-live="polite"></div>
      <div id="why"></div>
      <div class="nav-bottom"><span></span><button class="btn go" id="next" hidden>${L('Next', '다음')}</button></div>`);
    setTimeout(() => PT.speak(q.say), 300);
    app.querySelectorAll('.choice').forEach(btn => btn.onclick = () => {
      const fb = document.getElementById('fb');
      if (+btn.dataset.k === q.a) {
        if (!tried) score++;
        btn.classList.add('right'); fb.className = 'feedback ok';
        fb.innerHTML = `${L('That is right.', '맞았어요.')} <span class="th">${R(q.say)}</span>`;
        app.querySelectorAll('.choice').forEach(b => b.disabled = true);
        if (!tried) document.getElementById('why').innerHTML = friend('chang', T(q.why));
        document.getElementById('next').hidden = false;
      } else {
        tried = true; btn.classList.add('wrong'); btn.disabled = true;
        fb.className = 'feedback no'; fb.textContent = L('Listen once more and try again.', '다시 들어 보고 골라요.');
        document.getElementById('why').innerHTML = friend('chang', T(q.why));
        PT.speak(q.say, 0.6);
      }
    });
    document.getElementById('next').onclick = () => { i++; i < LS.choose.length ? render() : go(2); };
  };
  render();
}

/* 3. 따라 말하기 */
function speakStep() {
  const can = PT.canListen();
  const items = LS.speak.map(k => LS.units[k]);
  frame(`<h2>${L('Say it', '따라 말하기')}</h2>
    ${friend('chang', can ? L('Listen first, then tap Speak and say it out loud. If the machine understands you, you pass. Machine ears are not perfect, especially with tones, so if it fails a few times, it is fine to move on.', '먼저 듣고, 말하기를 눌러 소리 내어 따라 해 보세요. 기계가 알아들으면 통과예요. 기계 귀는 완벽하지 않고 성조에는 더 서툴러서, 몇 번 안 되면 넘어가도 괜찮아요.')
      : L('This browser cannot check your speech. Listen, say it out loud, and compare on your own. Open the page in Chrome to use the checker.', '이 브라우저는 말한 소리를 확인하지 못해요. 듣고 소리 내어 따라 한 다음 스스로 비교해 보세요. 크롬에서 열면 확인 기능을 쓸 수 있어요.'))}
    ${items.map((u, k) => `<div class="speak-item"><span class="th">${R(u.th)}</span><span class="rom">${R(u.r)}</span>${koOnly(u.k)}<small>${T(u.m)}</small>
      <div class="row" style="margin-top:.5rem">${playBtn(u.th)}${can ? `<button class="btn small" data-mic="${k}">${L('Speak', '말하기')}</button>` : ''}</div>
      <div class="result" id="r${k}" aria-live="polite"></div></div>`).join('')}
    <div class="nav-bottom"><button class="btn" id="prev">${L('Back one step', '이전 단계로')}</button><button class="btn go" id="next">${L('On to the next step', '다음 단계로')}</button></div>`);
  app.querySelectorAll('[data-mic]').forEach(b => b.onclick = async () => {
    const k = +b.dataset.mic, out = document.getElementById('r' + k), target = items[k].th;
    out.textContent = L('Listening. Go ahead.', '듣고 있어요. 말해 보세요.'); out.className = 'result';
    try {
      const alts = await PT.listen();
      const hit = alts.find(a => PT.close(a, target));
      out.className = 'result feedback ' + (hit ? 'ok' : 'no');
      out.innerHTML = hit ? `${L('Heard you clearly:', '잘 들렸어요.')} <span class="th">${esc(hit)}</span>` :
        (alts.length ? `${L('That sounded like', '이렇게 들렸어요.')} <span class="th">${esc(alts[0])}</span>. ${L('Listen once more and try again.', '한 번 더 들어 보고 해 봐요.')}`
                     : L('Nothing came through clearly. Try once more.', '소리가 잘 들리지 않았어요. 한 번 더 해 봐요.'));
    } catch (err) {
      out.className = 'result feedback no';
      out.textContent = err === 'not-allowed'
        ? L('Allow microphone access to use the checker. You can turn it on from the settings next to the address bar.', '마이크 사용을 허용해야 확인할 수 있어요. 주소창 옆 설정에서 마이크를 허용해 주세요.')
        : L('Could not check that one. Try once more.', '소리를 확인하지 못했어요. 한 번 더 해 봐요.');
    }
  });
  document.getElementById('prev').onclick = () => go(1);
  document.getElementById('next').onclick = () => go(3);
}

/* 4. 빈칸 채우기 */
function fillStep() {
  let i = 0;
  const render = () => {
    const q = LS.fill[i]; let tried = false; let filled = [];
    const blanks = q.parts.filter(p => p === '_').length;
    const answer = q.a.map(R);
    const tiles = shuffle(q.opts.map(R));
    const unit = LS.units.find(u => u.th === q.say);
    const meaning = q.m || (unit && unit.m);
    const draw = () => {
      let b = 0;
      document.getElementById('word').innerHTML = q.parts.map(p => p === '_' ? `<span class="blank">${filled[b++] || '&nbsp;'}</span>` : `<span>${R(p)}</span>`).join(' ');
    };
    frame(`<h2>${T(STEPS[3])} ${small(`${i + 1} / ${LS.fill.length}`)}</h2>
      <p>${q.plain ? L('Listen, then tap the numbers in order.', '듣고 들은 숫자를 차례로 눌러요.') : L('Listen, then tap the missing words in order.', '듣고 빈칸에 들어갈 말을 차례로 눌러요.')}</p>
      ${playBtn(q.say, L('Listen again', '다시 듣기'))}
      <div class="fill" id="word" aria-live="polite"></div>
      <div class="row">${tiles.map(v => `<button class="choice tile" data-v="${esc(v)}">${v}</button>`).join('')}</div>
      <div class="row" style="margin-top:.8rem"><button class="btn small" id="clear">${L('Clear', '지우기')}</button><button class="btn small go" id="check">${L('Check', '확인')}</button></div>
      <div class="feedback" id="fb" aria-live="polite"></div><div id="why"></div>
      <div class="nav-bottom"><span></span><button class="btn go" id="next" hidden>${L('Next', '다음')}</button></div>`);
    draw(); setTimeout(() => PT.speak(q.say), 300);
    app.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { if (filled.length < blanks) { filled.push(b.dataset.v); draw(); } });
    document.getElementById('clear').onclick = () => { filled = []; draw(); };
    document.getElementById('check').onclick = () => {
      const fb = document.getElementById('fb');
      if (filled.length < blanks) { fb.className = 'feedback no'; fb.textContent = L(`There ${blanks > 1 ? 'are ' + blanks + ' blanks' : 'is 1 blank'}. Fill ${blanks > 1 ? 'them all' : 'it'}, then tap Check.`, `빈칸이 ${blanks}개예요. 모두 채운 다음 확인을 눌러요.`); return; }
      if (filled.join('|') === answer.join('|')) {
        if (!tried) score++;
        fb.className = 'feedback ok';
        fb.innerHTML = `${L('That is right.', '맞았어요.')} ${q.plain ? '' : `<span class="th">${R(q.say)}</span>`}${meaning ? ` <span class="muted">${T(meaning)}</span>` : ''}`;
        app.querySelectorAll('[data-v],#clear,#check').forEach(b => b.disabled = true);
        document.getElementById('why').innerHTML = '';
        document.getElementById('next').hidden = false;
      } else {
        tried = true; fb.className = 'feedback no'; fb.textContent = L('Not quite. Listen again, a little slower this time.', '조금 달라요. 이번에는 조금 천천히 다시 들어 봐요.');
        const at = filled.findIndex((v, k) => v !== answer[k]);
        const nth = L(['first', 'second', 'third', 'fourth'][at] || (at + 1) + 'th', (at + 1) + '번째');
        document.getElementById('why').innerHTML = friend('chang', q.why ? T(q.why)
          : (blanks > 1 ? L(`Check the ${nth} blank. Listen for its tone as well as its sound.`, `${nth} 빈칸을 다시 들어 봐요. 소리뿐 아니라 높낮이도 들어 보세요.`)
                        : L('Listen for the tone as well as the sound. Each tile has its own melody.', '소리뿐 아니라 높낮이도 들어 보세요. 낱말마다 가락이 달라요.')));
        filled = []; draw(); PT.speak(q.say, 0.55);
      }
    };
    document.getElementById('next').onclick = () => { i++; i < LS.fill.length ? render() : go(4); };
  };
  render();
}

/* 5. 도장 받기 */
function stampStep() {
  const stars = score >= TOTAL - 1 ? 3 : score >= TOTAL - 4 ? 2 : 1;
  PT.setStamp(S + '-' + info.n, stars);
  const nextInfo = STR.lessons.find(e => e.n === info.n + 1);
  const nextStr = STR.side ? null : PT_STRETCHES.find(s => s.n === S + 1);
  const nextBtn = nextInfo && ALL[nextInfo.n]
    ? `<a class="btn go" href="?lesson=${nextInfo.n}">${L('Next lesson: ' + nextInfo.name, '다음 과: ' + nextInfo.ko)}</a>`
    : (nextStr && nextStr.open ? `<a class="btn go" href="../stretch-${nextStr.n}/?lesson=1">${L('On to the ' + ordinal(nextStr.n).toLowerCase(), ordinal(nextStr.n) + '으로')}</a>`
                               : `<a class="btn go" href="../#passport">${L('See my passport', '나의 여권 보기')}</a>`);
  frame(`<h2>${L('Get your stamp', '도장 받기')}</h2>
    <div class="stamp-big">${PT.stampSVG(info.name, stars)}</div>
    <p style="text-align:center">${L(`You got ${score} of ${TOTAL} right on the first try and earned ${stars} of 3 lotuses.${stars < 3 ? ' Ride it again tomorrow to earn all three.' : ''}`,
      `${TOTAL}문제 중 ${score}문제를 한 번에 맞혀서 연꽃 ${stars}개를 받았어요.${stars < 3 ? ' 내일 다시 하면 세 개를 받을 수 있어요.' : ''}`)}</p>
    ${LS.final ? `<p class="feedback ok" style="text-align:center">${STR.side ? L('You have finished the side trip to ' + STR.en + '.', STR.ko + ' 부록 여행을 모두 마쳤어요.') : L('You have finished the ' + ordinal(S).toLowerCase() + ', ' + STR.en + '.', ordinal(S) + ', ' + STR.ko + '를 모두 마쳤어요.')}</p>` : ''}
    ${friend('tukkae', T(LS.note))}
    <h3 class="h3">${L('Phrases from today', '오늘 만난 말')}</h3>
    <ul class="words">${LS.today.map(k => LS.units[k]).map(u => `<li><span class="th">${R(u.th)}</span> <span class="rom">${R(u.r)}</span> <span class="muted">${T(u.m)}</span> ${playBtn(u.th)}</li>`).join('')}</ul>
    <div class="nav-bottom"><button class="btn" id="again">${L('Start over', '처음부터 다시')}</button>${nextBtn}</div>`);
  document.getElementById('again').onclick = () => { score = 0; go(0); };
}

chrome();
PT.mountToggles(() => { chrome(); score = scoreAtStep; go(step); });
go(0);
})();
