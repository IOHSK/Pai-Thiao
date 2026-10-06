// 첫째 구간 수업 내용. 문장마다 [영어, 한국어] 순서.
// {P} 평서 어미, {Q} 의문 어미, {p}/{q} 로마자 어미, {k} 한글 어미, {I}/{i}/{ki} "나". 남성/여성 선택에 따라 바뀐다.
// units: 소리 듣기 카드. th 태국 글자, r 로마자, k 한글 발음, m 뜻, n 메모
// choose: type 'hear'는 로마자 고르기, 'mean'은 뜻 고르기. a는 정답 번호(보기는 화면에서 섞인다)
// speak, today: units 번호. fill: parts의 '_' 자리에 a를 순서대로 채운다
window.PT_LESSONS = window.PT_LESSONS || {};
PT_LESSONS[1] = {
1: {
  guide: 'mali',
  units: [
    { th: 'สวัสดี{P}', r: 'sà-wàt-dii {p}', k: '싸왓디 {k}', m: ['Hello / Goodbye', '안녕하세요 / 안녕히 가세요'], n: ['Works any time of day, for hello and for goodbye.', '하루 중 언제든, 만날 때와 헤어질 때 모두 써요.'] },
    { th: 'ครับ', r: 'khráp', k: '크랍', m: ['polite ending (men)', '남성 공손 어미'], n: ['High tone, and the final p is barely released. In fast speech it often sounds like "kháp".', '높은 성조이고 끝의 p는 입만 닫아요. 빠르게 말하면 "캅"처럼 들리기도 해요.'] },
    { th: 'ค่ะ', r: 'khâ', k: '카', m: ['polite ending (women)', '여성 공손 어미'], n: ['Falling tone, at the end of statements.', '떨어지는 성조로, 평서문 끝에 붙여요.'] },
    { th: 'คะ', r: 'khá', k: '카', m: ['polite question ending (women)', '여성 의문 어미'], n: ['High tone, at the end of questions.', '높은 성조로, 질문 끝에 붙여요.'] },
    { th: 'สบายดีไหม{Q}', r: 'sà-baai-dii mǎi {q}', k: '싸바이디 마이 {k}', m: ['How are you?', '잘 지내세요?'], n: ['mǎi at the end turns a sentence into a yes or no question.', '끝의 mǎi(마이)가 예, 아니오로 답하는 질문을 만들어요.'] },
    { th: 'สบายดี{P}', r: 'sà-baai-dii {p}', k: '싸바이디 {k}', m: ["I'm fine", '잘 지내요'], n: ['Drop mǎi from the question and you have the answer.', '질문에서 mǎi만 빼면 대답이 돼요.'] }
  ],
  intro: ['Sawatdee! I am Mali, named after the jasmine flower. My ears are sharp, so I look after pronunciation. Thai has tones, but you can start talking today. Tap a card to hear it; the small marks in the romanization show the tone.',
          '싸왓디! 나는 말리예요. 재스민 꽃에서 따온 이름이에요. 귀가 밝아서 발음을 맡고 있어요. 태국어에는 성조가 있지만 오늘부터 바로 말할 수 있어요. 카드를 눌러 들어 보세요. 로마자 위의 작은 표시가 성조를 알려 줘요.'],
  tip: ['Thai adds a polite ending to almost every sentence. Men say khráp; women say khâ, and khá in questions. Use the button at the top right to choose yours, and every lesson will follow it. Say sà-wàt-dii with a wai: palms together at your chest and a small bow of the head.',
        '태국어는 거의 모든 문장 끝에 공손 어미를 붙여요. 남성은 khráp(크랍), 여성은 khâ(카), 질문할 때는 khá(카)예요. 오른쪽 위 버튼으로 내 어미를 고르면 모든 과가 그에 맞춰 바뀌어요. sà-wàt-dii라고 할 때는 가슴 앞에 두 손을 모으고 고개를 살짝 숙이는 와이(wai)를 함께 해요.'],
  choose: [
    { type: 'hear', say: 'สวัสดี{P}', opts: ['sà-wàt-dii {p}', 'sà-baai-dii {p}', 'sà-baai-dii mǎi {q}'], a: 0, why: ['That was sà-wàt-dii, hello. Listen for wàt in the middle.', 'sà-wàt-dii, 인사말이었어요. 가운데 wàt(왓) 소리를 들어 보세요.'] },
    { type: 'mean', say: 'สบายดีไหม{Q}', opts: [['How are you?', '잘 지내세요?'], ['Hello', '안녕하세요'], ["I'm fine", '잘 지내요']], a: 0, why: ['mǎi at the end makes it a question: How are you?', '끝에 mǎi가 있으니 질문이에요. 잘 지내세요?'] },
    { type: 'hear', say: 'ครับ', opts: ['khráp', 'khâ', 'khá'], a: 0, why: ['khráp closes with a p. It is the ending men use.', 'khráp은 끝에서 입을 닫는 p가 있어요. 남성이 쓰는 어미예요.'] },
    { type: 'hear', say: 'ค่ะ', opts: ['khâ', 'khá', 'khráp'], a: 0, why: ['The voice fell from high to low: khâ, the statement ending women use.', '소리가 위에서 아래로 떨어졌어요. 여성이 평서문에 쓰는 khâ예요.'] },
    { type: 'hear', say: 'คะ', opts: ['khá', 'khâ'], a: 0, why: ['The voice stayed high: khá, used in questions.', '소리가 높게 머물렀어요. 질문에 쓰는 khá예요.'] },
    { type: 'mean', say: 'สบายดี{P}', opts: [["I'm fine", '잘 지내요'], ['How are you?', '잘 지내세요?'], ['Goodbye', '안녕히 가세요']], a: 0, why: ['No mǎi at the end, so it is the answer: I am fine.', '끝에 mǎi가 없으니 대답이에요. 잘 지내요.'] }
  ],
  speak: [0, 4, 5],
  fill: [
    { say: 'สวัสดี{P}', parts: ['sà-wàt-dii', '_'], a: ['{p}'], opts: ['{p}', 'mǎi', 'dii'] },
    { say: 'สบายดีไหม{Q}', parts: ['sà-baai-dii', '_', '{q}'], a: ['mǎi'], opts: ['mǎi', 'dii', 'wàt'] },
    { say: 'สบายดี{P}', parts: ['sà-baai', '_', '{p}'], a: ['dii'], opts: ['dii', 'mǎi', 'wàt'] },
    { say: 'สวัสดี{P}', parts: ['sà', '_', 'dii', '{p}'], a: ['wàt'], opts: ['wàt', 'baai', 'mǎi'] }
  ],
  note: ['Suvarnabhumi means "golden land", an old name for this region. Locals say it closer to "Su-wan-na-phum". Every sign in the airport shows Thai script next to English, so it is a fine place to start matching the two.',
         '수완나품은 "황금의 땅"이라는 뜻으로, 이 지역을 부르던 옛 이름이에요. 현지에서는 "쑤완나품"에 가깝게 발음해요. 공항 표지판마다 태국 글자와 영어가 나란히 적혀 있어서 둘을 맞춰 보기 좋은 곳이에요.'],
  today: [0, 1, 4]
},
2: {
  guide: 'mali',
  units: [
    { th: 'ขอบคุณ{P}', r: 'khàwp-khun {p}', k: '컵쿤 {k}', m: ['Thank you', '고마워요'], n: ['The most useful word of your trip.', '여행에서 가장 많이 쓰게 될 말이에요.'] },
    { th: 'ขอบคุณมาก{P}', r: 'khàwp-khun mâak {p}', k: '컵쿤 막 {k}', m: ['Thank you very much', '정말 고마워요'], n: ['mâak means very, or a lot.', 'mâak(막)은 "아주, 많이"라는 뜻이에요.'] },
    { th: 'ขอโทษ{P}', r: 'khǎw-thôot {p}', k: '커톳 {k}', m: ['Sorry / Excuse me', '미안해요 / 실례해요'], n: ["For apologizing, and for getting someone's attention.", '사과할 때도, 사람을 부를 때도 써요.'] },
    { th: 'ไม่เป็นไร{P}', r: 'mâi pen rai {p}', k: '마이 뻰 라이 {k}', m: ["It's okay / No worries", '괜찮아요'], n: ['The reply to both thank you and sorry.', '고맙다는 말에도, 미안하다는 말에도 이렇게 답해요.'] }
  ],
  intro: ['Two little phrases carry you a long way: thank you and sorry. Tap each card and listen to where the voice rises and falls.',
          '고마워요, 미안해요. 이 두 마디면 여행이 훨씬 수월해져요. 카드를 눌러 소리가 어디서 올라가고 내려가는지 들어 보세요.'],
  tip: ['khàwp-khun starts with a breathy kh, like Korean ㅋ, and khǎw-thôot rises on its first syllable. When someone thanks you, or bumps into you and apologizes, smile and say mâi pen rai.',
        'khàwp-khun은 한국어 ㅋ처럼 바람이 나오는 kh로 시작하고, khǎw-thôot은 첫 음절이 위로 올라가요. 누가 고맙다고 하거나 부딪히고 미안하다고 하면 웃으며 mâi pen rai라고 해요.'],
  choose: [
    { type: 'hear', say: 'ขอบคุณ{P}', opts: ['khàwp-khun {p}', 'khǎw-thôot {p}', 'mâi pen rai {p}'], a: 0, why: ['That was khàwp-khun, thank you.', 'khàwp-khun, 고맙다는 말이었어요.'] },
    { type: 'mean', say: 'ไม่เป็นไร{P}', opts: [['No worries', '괜찮아요'], ['Thank you', '고마워요'], ['Sorry', '미안해요']], a: 0, why: ['mâi pen rai: it is fine, no problem.', 'mâi pen rai는 괜찮다, 문제없다는 뜻이에요.'] },
    { type: 'hear', say: 'ขอโทษ{P}', opts: ['khǎw-thôot {p}', 'khàwp-khun {p}', 'khàwp-khun mâak {p}'], a: 0, why: ['khǎw-thôot, sorry or excuse me. The first syllable rises.', 'khǎw-thôot, 미안해요 또는 실례해요. 첫 음절이 올라가요.'] },
    { type: 'mean', say: 'ขอบคุณมาก{P}', opts: [['Thank you very much', '정말 고마워요'], ['Thank you', '고마워요'], ['Excuse me', '실례해요']], a: 0, why: ['mâak at the end adds "very much".', '끝의 mâak이 "아주 많이"를 더해요.'] },
    { type: 'mean', say: 'ขอโทษ{P}', opts: [['Sorry', '미안해요'], ['No worries', '괜찮아요'], ['Hello', '안녕하세요']], a: 0, why: ['khǎw-thôot is sorry, or excuse me.', 'khǎw-thôot은 미안해요, 또는 실례해요예요.'] },
    { type: 'hear', say: 'ไม่เป็นไร{P}', opts: ['mâi pen rai {p}', 'khàwp-khun mâak {p}', 'sà-baai-dii {p}'], a: 0, why: ['Three short beats: mâi pen rai.', '짧게 세 박자예요. mâi pen rai.'] }
  ],
  speak: [0, 1, 2, 3],
  fill: [
    { say: 'ขอบคุณมาก{P}', parts: ['khàwp-khun', '_', '{p}'], a: ['mâak'], opts: ['mâak', 'pen', 'rai'] },
    { say: 'ไม่เป็นไร{P}', parts: ['mâi', '_', 'rai', '{p}'], a: ['pen'], opts: ['pen', 'mâak', 'dii'] },
    { say: 'ขอโทษ{P}', parts: ['khǎw-thôot', '_'], a: ['{p}'], opts: ['{p}', 'mǎi', 'mâak'] },
    { say: 'ไม่เป็นไร{P}', parts: ['_', 'pen', 'rai', '{p}'], a: ['mâi'], opts: ['mâi', 'khun', 'dii'] }
  ],
  note: ['mâi pen rai is more than a phrase. It sums up a Thai way of meeting small troubles calmly: a late bus, a wrong order, a spilled drink. Said with a smile, it smooths almost anything.',
         'mâi pen rai는 단순한 말 이상이에요. 버스가 늦거나 주문이 잘못 나와도 너그럽게 넘기는 태국 사람들의 태도가 담겨 있어요. 웃으며 말하면 웬만한 일은 부드럽게 넘어가요.'],
  today: [0, 2, 3]
},
3: {
  guide: 'chang',
  units: [
    { th: 'ใช่', r: 'châi', k: '차이', m: ["Yes, that's right", '네, 맞아요'], n: ['Falling tone. It confirms that something is true.', '떨어지는 성조. 사실이 맞다고 할 때 써요.'] },
    { th: 'ไม่ใช่', r: 'mâi châi', k: '마이 차이', m: ["No, that's not it", '아니요, 그게 아니에요'], n: ['mâi in front makes anything negative.', '앞에 mâi를 붙이면 무엇이든 부정이 돼요.'] },
    { th: 'ได้', r: 'dâi', k: '다이', m: ['Can do / OK', '돼요 / 좋아요'], n: ['"That is possible", and often simply "OK".', '"할 수 있어요"라는 뜻이고, 그냥 "좋아요" 대신 쓰기도 해요.'] },
    { th: 'ไม่ได้', r: 'mâi dâi', k: '마이 다이', m: ["Can't / Not possible", '안 돼요'], n: ['You will hear this a lot, always with a friendly face.', '자주 듣게 될 말이에요. 대개 웃는 얼굴로요.'] },
    { th: 'ไม่เข้าใจ{P}', r: 'mâi khâo-jai {p}', k: '마이 카오짜이 {k}', m: ["I don't understand", '못 알아들었어요'], n: ['khâo-jai means understand, literally "enter the heart".', 'khâo-jai는 "이해하다"로, 말 그대로는 "마음에 들어가다"예요.'] },
    { th: 'พูดช้าๆ หน่อย{P}', r: 'phûut cháa-cháa nòi {p}', k: '풋 차차 너이 {k}', m: ['Please speak slowly', '천천히 말해 주세요'], n: ['nòi softens a request, a bit like "please" or "a little".', 'nòi(너이)는 부탁을 부드럽게 해 줘요. "좀"과 비슷해요.'] }
  ],
  intro: ['I am Chang the elephant. I never hurry, and when you miss something, I will tell you why. Today: yes, no, and the lifesaver, "I don\'t understand".',
          '나는 코끼리 창이에요. 절대 서두르지 않고, 틀리면 왜 틀렸는지 알려 줄게요. 오늘은 예, 아니오, 그리고 꼭 필요한 "못 알아들었어요"를 배워요.'],
  tip: ['Thai has no single word for yes. You answer with châi (that is right) or dâi (that is possible), and put mâi in front for no. If Thai comes at you too fast, phûut cháa-cháa nòi gets you a slower version, and the slow button in each lesson does the same for this site.',
        '태국어에는 딱 하나로 정해진 "예"가 없어요. 사실이 맞으면 châi, 가능하면 dâi로 답하고, 아니라면 앞에 mâi를 붙여요. 너무 빠르게 말하면 phûut cháa-cháa nòi라고 해요. 이 사이트에서는 수업마다 있는 천천히 버튼이 같은 일을 해 줘요.'],
  choose: [
    { type: 'hear', say: 'ใช่', opts: ['châi', 'mâi châi', 'dâi'], a: 0, why: ['Just one word: châi, that is right.', '한 낱말뿐이었어요. châi, 맞아요.'] },
    { type: 'hear', say: 'ไม่ได้', opts: ['mâi dâi', 'mâi châi', 'dâi'], a: 0, why: ['mâi dâi, not possible. Listen for the d sound, not ch.', 'mâi dâi, 안 돼요. ch가 아니라 d 소리를 들어 보세요.'] },
    { type: 'mean', say: 'ไม่เข้าใจ{P}', opts: [["I don't understand", '못 알아들었어요'], ['Please speak slowly', '천천히 말해 주세요'], ['No worries', '괜찮아요']], a: 0, why: ['mâi khâo-jai: I do not understand.', 'mâi khâo-jai, 못 알아들었어요.'] },
    { type: 'mean', say: 'พูดช้าๆ หน่อย{P}', opts: [['Please speak slowly', '천천히 말해 주세요'], ["I don't understand", '못 알아들었어요'], ['Thank you', '고마워요']], a: 0, why: ['cháa-cháa means slowly; nòi makes it a gentle request.', 'cháa-cháa는 "천천히", nòi가 부탁을 부드럽게 해요.'] },
    { type: 'mean', say: 'ได้', opts: [['OK, can do', '돼요'], ["That's not it", '그게 아니에요'], ["Can't", '안 돼요']], a: 0, why: ['dâi alone means yes, that works.', 'dâi 하나만 쓰면 "돼요"라는 뜻이에요.'] },
    { type: 'hear', say: 'ไม่ใช่', opts: ['mâi châi', 'châi', 'mâi dâi'], a: 0, why: ['Two words: mâi châi, that is not it.', '두 낱말이었어요. mâi châi, 그게 아니에요.'] }
  ],
  speak: [0, 1, 4, 5],
  fill: [
    { say: 'ไม่เข้าใจ{P}', parts: ['mâi', '_', '{p}'], a: ['khâo-jai'], opts: ['khâo-jai', 'châi', 'nòi'] },
    { say: 'พูดช้าๆ หน่อย{P}', parts: ['phûut', '_', 'nòi', '{p}'], a: ['cháa-cháa'], opts: ['cháa-cháa', 'mâi', 'dâi'] },
    { say: 'ไม่ใช่', parts: ['_', 'châi'], a: ['mâi'], opts: ['mâi', 'dâi', 'nòi'] },
    { say: 'ไม่ได้', parts: ['mâi', '_'], a: ['dâi'], opts: ['dâi', 'châi', 'pen'] }
  ],
  note: ['Ban Thap Chang means roughly "the village of the elephant camp". Many Bangkok place names are old descriptions like this: ban is a village, khlong a canal, wat a temple.',
         '반탑창은 대략 "코끼리 진영이 있던 마을"이라는 뜻이에요. 방콕 지명에는 이렇게 옛 모습을 담은 이름이 많아요. ban은 마을, khlong은 운하, wat은 사원이에요.'],
  today: [4, 5, 1]
},
4: {
  guide: 'mali',
  chooseTitle: ['Pick the tone', '성조 고르기'],
  units: [
    { th: 'มา', r: 'maa', k: '마 (평평하게)', m: ['come', '오다'], n: ['Mid tone: flat and level. No mark.', '가운데 성조: 높낮이 없이 평평하게. 표시 없음.'] },
    { th: 'ใหม่', r: 'mài', k: '마이 (낮게)', m: ['new', '새로운'], n: ['Low tone: start low and stay low. Mark à.', '낮은 성조: 낮게 시작해서 낮게. 표시 à'] },
    { th: 'ไม่', r: 'mâi', k: '마이 (떨어지게)', m: ['not', '아니다'], n: ['Falling tone: start high and drop, like a firm "no!". Mark â.', '떨어지는 성조: 높게 시작해 뚝 떨어져요. 단호한 "아니!"처럼. 표시 â'] },
    { th: 'ม้า', r: 'máa', k: '마 (높게)', m: ['horse', '말(동물)'], n: ['High tone: higher than normal, rising a little at the end. Mark á.', '높은 성조: 평소보다 높게, 끝에서 살짝 올라가요. 표시 á'] },
    { th: 'หมา', r: 'mǎa', k: '마 (올라가게)', m: ['dog', '개'], n: ['Rising tone: dip down, then rise, like a surprised "huh?". Mark ǎ.', '올라가는 성조: 살짝 내려갔다가 쭉 올라가요. 놀란 "응?"처럼. 표시 ǎ'] }
  ],
  intro: ['Thai has five tones, and the same sound can mean different things. Listen to maa, mài, mâi, máa, mǎa. In Korean letters they are all 마 or 마이, but to a Thai ear they are five different words.',
          '태국어에는 성조가 다섯 개 있어서 같은 소리라도 높낮이에 따라 뜻이 달라져요. maa, mài, mâi, máa, mǎa를 들어 보세요. 한글로 쓰면 모두 마, 마이지만 태국 사람 귀에는 서로 다른 다섯 낱말이에요.'],
  tip: ['You do not need perfect tones to be understood; context helps a lot. But the marks are your map: à low, â falling, á high, ǎ rising, and no mark for mid. One more gift for Korean speakers: k, p, t without h are unaspirated like ㄲ, ㅃ, ㄸ, while kh, ph, th are aspirated like ㅋ, ㅍ, ㅌ.',
        '성조가 완벽하지 않아도 문맥 덕분에 대부분 알아들어요. 그래도 표시가 길잡이가 돼요. à 낮게, â 떨어지게, á 높게, ǎ 올라가게, 표시가 없으면 평평하게. 한국어 화자에게 유리한 점도 있어요. h가 없는 k, p, t는 ㄲ, ㅃ, ㄸ 같은 된소리이고, kh, ph, th는 ㅋ, ㅍ, ㅌ 같은 거센소리예요.'],
  choose: [
    { type: 'hear', say: 'หมา', opts: ['mǎa', 'máa', 'maa'], a: 0, why: ['It dipped and then rose: mǎa, dog.', '내려갔다가 올라갔어요. mǎa, 개예요.'] },
    { type: 'hear', say: 'ม้า', opts: ['máa', 'mǎa', 'maa'], a: 0, why: ['Higher than normal all the way: máa, horse.', '처음부터 평소보다 높았어요. máa, 말이에요.'] },
    { type: 'hear', say: 'มา', opts: ['maa', 'máa', 'mǎa'], a: 0, why: ['Flat and level: maa, come.', '평평했어요. maa, 오다예요.'] },
    { type: 'hear', say: 'ไม่', opts: ['mâi', 'mài'], a: 0, why: ['It fell from high: mâi, not.', '높은 데서 떨어졌어요. mâi, 아니다예요.'] },
    { type: 'hear', say: 'ใหม่', opts: ['mài', 'mâi'], a: 0, why: ['It stayed low: mài, new.', '낮게 머물렀어요. mài, 새로운이에요.'] },
    { type: 'mean', say: 'หมา', opts: [['dog', '개'], ['horse', '말'], ['come', '오다']], a: 0, why: ['The rising one, mǎa, is the dog.', '올라가는 mǎa가 개예요.'] },
    { type: 'mean', say: 'ม้า', opts: [['horse', '말'], ['dog', '개'], ['new', '새로운']], a: 0, why: ['The high one, máa, is the horse.', '높은 máa가 말이에요.'] }
  ],
  speak: [0, 2, 3, 4],
  fillTitle: ['Pick the tone marks', '성조 표시 고르기'],
  fill: [
    { say: 'หมามา', parts: ['_', '_'], a: ['mǎa', 'maa'], opts: ['maa', 'máa', 'mǎa'], m: ['The dog is coming.', '개가 와요.'] },
    { say: 'ม้าใหม่', parts: ['_', '_'], a: ['máa', 'mài'], opts: ['máa', 'mǎa', 'mài', 'mâi'], m: ['a new horse', '새 말'] },
    { say: 'ไม่มา', parts: ['_', '_'], a: ['mâi', 'maa'], opts: ['mâi', 'mài', 'maa', 'mǎa'], m: ['not coming', '안 와요'] },
    { say: 'หมาใหม่', parts: ['_', '_'], a: ['mǎa', 'mài'], opts: ['mǎa', 'máa', 'mài', 'mâi'], m: ['a new dog', '새 강아지'] }
  ],
  note: ['Thais love tone play. A famous tongue twister is ไม้ใหม่ไม่ไหม้ใช่ไหม, máai mài mâi mâi châi mǎi: "New wood does not burn, right?" Try it with Thai friends and they will laugh along with you.',
         '태국 사람들은 성조 말놀이를 좋아해요. 유명한 잰말놀이로 ไม้ใหม่ไม่ไหม้ใช่ไหม(máai mài mâi mâi châi mǎi, "새 나무는 안 타지, 그렇지?")가 있어요. 태국 친구 앞에서 해 보면 다들 웃으며 함께해 줄 거예요.'],
  today: [2, 4, 3]
},
5: {
  guide: 'chang',
  chooseTitle: ['Pick the number', '숫자 고르기'],
  units: [
    { th: 'หนึ่ง', r: 'nùeng', k: '능', m: ['one (1)', '하나(1)'] },
    { th: 'สอง', r: 'sǎwng', k: '썽', m: ['two (2)', '둘(2)'] },
    { th: 'สาม', r: 'sǎam', k: '쌈', m: ['three (3)', '셋(3)'] },
    { th: 'สี่', r: 'sìi', k: '씨', m: ['four (4)', '넷(4)'] },
    { th: 'ห้า', r: 'hâa', k: '하', m: ['five (5)', '다섯(5)'] },
    { th: 'หก', r: 'hòk', k: '혹', m: ['six (6)', '여섯(6)'] },
    { th: 'เจ็ด', r: 'jèt', k: '쩻', m: ['seven (7)', '일곱(7)'] },
    { th: 'แปด', r: 'pàet', k: '뺏', m: ['eight (8)', '여덟(8)'] },
    { th: 'เก้า', r: 'kâo', k: '까오', m: ['nine (9)', '아홉(9)'] },
    { th: 'สิบ', r: 'sìp', k: '씹', m: ['ten (10)', '열(10)'] }
  ],
  intro: ['Numbers are everywhere on a trip: prices, rooms, platforms, phone numbers. Tap to hear one to ten.',
          '숫자는 여행 내내 나와요. 가격, 방 번호, 승강장, 전화번호까지요. 1부터 10까지 눌러 들어 보세요.'],
  tip: ['Korean speakers have a head start here. Listen to sǎam (3), sìi (4), and sìp (10): close to Korean 삼, 사, 십, because both languages share roots with old Chinese numbers. Watch the tones on sǎwng and sǎam: both rise.',
        '한국어 화자에게 반가운 부분이에요. sǎam(3), sìi(4), sìp(10)은 한국어 삼, 사, 십과 비슷하게 들려요. 두 언어 모두 옛 중국어 숫자와 뿌리가 닿아 있기 때문이에요. sǎwng(2)과 sǎam(3)은 둘 다 올라가는 성조예요.'],
  choose: [
    { type: 'hear', say: 'สาม', opts: ['sǎam', 'sìi', 'sìp'], a: 0, why: ['sǎam, three. A rising tone and a long aa.', 'sǎam, 셋이에요. 올라가는 성조에 긴 aa예요.'] },
    { type: 'hear', say: 'เจ็ด', opts: ['jèt', 'pàet', 'hòk'], a: 0, why: ['jèt, seven, with the ㅉ sound at the start.', 'jèt, 일곱이에요. 첫소리가 ㅉ이에요.'] },
    { type: 'hear', say: 'เก้า', opts: ['kâo', 'hâa', 'sìp'], a: 0, why: ['kâo, nine. The k is unaspirated, like ㄲ.', 'kâo, 아홉이에요. k는 ㄲ처럼 된소리예요.'] },
    { type: 'mean', say: 'แปด', opts: [['8', '8'], ['7', '7'], ['6', '6']], a: 0, why: ['pàet is eight.', 'pàet은 여덟이에요.'] },
    { type: 'mean', say: 'ห้า', opts: [['5', '5'], ['4', '4'], ['9', '9']], a: 0, why: ['hâa is five. Fun fact: Thais type 555 for "hahaha".', 'hâa는 다섯이에요. 그래서 태국 사람들은 "하하하"를 555로 써요.'] },
    { type: 'mean', say: 'สอง', opts: [['2', '2'], ['3', '3'], ['10', '10']], a: 0, why: ['sǎwng is two.', 'sǎwng은 둘이에요.'] }
  ],
  speak: [0, 2, 4, 9],
  fillTitle: ['Tap the numbers', '숫자 누르기'],
  fill: [
    { say: 'สาม ห้า เจ็ด', parts: ['_', '_', '_'], a: ['3', '5', '7'], opts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], plain: true },
    { say: 'หนึ่ง เก้า สอง', parts: ['_', '_', '_'], a: ['1', '9', '2'], opts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], plain: true },
    { say: 'แปด สี่ หก', parts: ['_', '_', '_'], a: ['8', '4', '6'], opts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], plain: true },
    { say: 'สิบ สาม', parts: ['_', '_'], a: ['10', '3'], opts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], plain: true }
  ],
  note: ['Ramkhamhaeng was a 13th century king of Sukhothai, remembered as the creator of Thai script. You will reach Sukhothai later on this route. Thailand also has its own digits, ๑ ๒ ๓, which you may spot on temple signs and banknotes.',
         '람캄행은 13세기 수코타이 왕국의 왕으로, 태국 문자를 만든 왕으로 기억돼요. 이 여정 뒤쪽에서 수코타이에 가게 돼요. 태국에는 ๑ ๒ ๓ 같은 고유 숫자도 있어서 사원 안내판이나 지폐에서 볼 수 있어요.'],
  today: [0, 2, 4]
},
6: {
  guide: 'chang',
  chooseTitle: ['Pick what you heard', '들은 말 고르기'],
  units: [
    { th: 'สิบเอ็ด', r: 'sìp-èt', k: '씹엣', m: ['eleven (11)', '십일(11)'], n: ['Not sìp-nùeng: 11, 21, 31 all end in èt.', 'sìp-nùeng이 아니에요. 11, 21, 31은 모두 èt으로 끝나요.'] },
    { th: 'ยี่สิบ', r: 'yîi-sìp', k: '이씹', m: ['twenty (20)', '이십(20)'], n: ['Not sǎwng-sìp: 20 has its own word, yîi.', 'sǎwng-sìp이 아니에요. 20에만 yîi라는 특별한 말을 써요.'] },
    { th: 'ร้อย', r: 'rói', k: '러이', m: ['hundred (100)', '백(100)'], n: ['100 is (nùeng) rói; 500 is hâa rói.', '100은 (nùeng) rói, 500은 hâa rói예요.'] },
    { th: 'พัน', r: 'phan', k: '판', m: ['thousand (1,000)', '천(1,000)'] },
    { th: 'บาท', r: 'bàat', k: '밧', m: ['baht', '밧(태국 돈)'] },
    { th: 'เท่าไหร่{Q}', r: 'thâo-rài {q}', k: '타오라이 {k}', m: ['How much?', '얼마예요?'], n: ['Your shopping word. Point at something and ask.', '쇼핑의 기본이에요. 물건을 가리키며 물어요.'] },
    { th: 'ห้าสิบบาท', r: 'hâa-sìp bàat', k: '하씹 밧', m: ['50 baht', '50밧'], n: ['Number first, then bàat.', '숫자를 먼저, 그다음 bàat을 붙여요.'] }
  ],
  intro: ['Now we build bigger numbers. Thai counts like Korean: hâa-sìp is five-ten, fifty. Only 11 and 20 have little surprises. Tap to hear them.',
          '이제 큰 숫자를 만들어요. 태국어도 한국어처럼 셈해요. hâa-sìp은 오십, 50이에요. 11과 20에만 작은 예외가 있어요. 눌러서 들어 보세요.'],
  tip: ['Build any price from the parts: sǎam rói hâa-sìp is 350, phan sǎwng rói is 1,200. Listen to rói carefully: it is a high tone, close to Korean 러이.',
        '어떤 가격이든 조각을 이어 만들어요. sǎam rói hâa-sìp은 350, phan sǎwng rói는 1,200이에요. rói는 높은 성조로, 한국어 "러이"에 가까워요.'],
  choose: [
    { type: 'mean', say: 'ห้าสิบบาท', opts: [['50 baht', '50밧'], ['15 baht', '15밧'], ['500 baht', '500밧']], a: 0, why: ['hâa-sìp: five tens, fifty.', 'hâa-sìp, 오십이에요.'] },
    { type: 'mean', say: 'ยี่สิบ', opts: [['20', '20'], ['12', '12'], ['2', '2']], a: 0, why: ['yîi-sìp is the special word for twenty.', 'yîi-sìp은 20을 뜻하는 특별한 말이에요.'] },
    { type: 'mean', say: 'สิบเอ็ด', opts: [['11', '11'], ['10', '10'], ['21', '21']], a: 0, why: ['sìp-èt: ten and the special one, èt.', 'sìp-èt, 십에 특별한 일 èt이 붙었어요.'] },
    { type: 'mean', say: 'หนึ่งร้อยบาท', opts: [['100 baht', '100밧'], ['1,000 baht', '1,000밧'], ['10 baht', '10밧']], a: 0, why: ['nùeng rói is one hundred. phan would be a thousand.', 'nùeng rói는 백이에요. 천이면 phan이에요.'] },
    { type: 'hear', say: 'เท่าไหร่{Q}', opts: ['thâo-rài {q}', 'bàat', 'phan'], a: 0, why: ['thâo-rài, how much?', 'thâo-rài, 얼마예요?'] },
    { type: 'mean', say: 'สามร้อยห้าสิบ', opts: [['350', '350'], ['530', '530'], ['305', '305']], a: 0, why: ['sǎam rói hâa-sìp: three hundred, fifty.', 'sǎam rói hâa-sìp, 삼백오십이에요.'] }
  ],
  speak: [5, 6, 1, 0],
  fillTitle: ['Complete the price', '가격 완성하기'],
  fill: [
    { say: 'ห้าสิบบาท', parts: ['_', 'sìp', 'bàat'], a: ['hâa'], opts: ['hâa', 'sǎam', 'yîi'], m: ['50 baht', '50밧'] },
    { say: 'ยี่สิบเอ็ด', parts: ['_', 'sìp', '_'], a: ['yîi', 'èt'], opts: ['yîi', 'èt', 'nùeng', 'sǎwng'], m: ['21', '21'] },
    { say: 'สามร้อยบาท', parts: ['sǎam', '_', 'bàat'], a: ['rói'], opts: ['rói', 'phan', 'sìp'], m: ['300 baht', '300밧'] },
    { say: 'เท่าไหร่{Q}', parts: ['_', '{q}'], a: ['thâo-rài'], opts: ['thâo-rài', 'bàat', 'rói'], m: ['How much?', '얼마예요?'] }
  ],
  note: ['Thai banknotes carry the portrait of the King, so treat money with care: never stop a rolling coin or note with your foot. At street stalls, 20 and 100 baht notes make life much easier than a 1,000.',
         '태국 지폐에는 국왕의 초상이 있어서 돈을 조심스럽게 다뤄요. 굴러가는 동전이나 지폐를 발로 밟아 멈추면 안 돼요. 노점에서는 1,000밧짜리보다 20밧, 100밧짜리가 훨씬 편해요.'],
  today: [5, 6, 2]
},
7: {
  guide: 'mali',
  units: [
    { th: '{I}ชื่อมิน{P}', r: '{i} chûe Min {p}', k: '{ki} 츠 민 {k}', m: ['My name is Min', '제 이름은 민이에요'], n: ['phǒm is "I" for men, chǎn for women. Put your own name where Min is.', 'phǒm(폼)은 남성의 "나", chǎn(찬)은 여성의 "나"예요. 민 자리에 내 이름을 넣어요.'] },
    { th: 'มาจากเกาหลี{P}', r: 'maa jàak kao-lǐi {p}', k: '마 짝 까올리 {k}', m: ["I'm from Korea", '한국에서 왔어요'], n: ['Thais often drop "I" when it is clear who is speaking.', '누가 말하는지 분명하면 "나"를 자주 생략해요.'] },
    { th: 'มาจากอเมริกา{P}', r: 'maa jàak a-mee-rí-kaa {p}', k: '마 짝 아메리까 {k}', m: ["I'm from America", '미국에서 왔어요'] },
    { th: 'เป็นอาจารย์{P}', r: 'pen aa-jaan {p}', k: '뻰 아짠 {k}', m: ["I'm a professor", '교수예요'], n: ['aa-jaan means teacher or professor, a title said with respect.', 'aa-jaan은 교수나 선생님으로, 존경을 담아 부르는 호칭이에요.'] },
    { th: 'มาประชุม{P}', r: 'maa prà-chum {p}', k: '마 쁘라춤 {k}', m: ['I came for a conference', '학회 때문에 왔어요'], n: ['prà-chum is a meeting or a conference.', 'prà-chum은 회의나 학회예요.'] },
    { th: 'ยินดีที่ได้รู้จัก{P}', r: 'yin-dii thîi dâi rúu-jàk {p}', k: '인디 티 다이 루짝 {k}', m: ['Nice to meet you', '만나서 반가워요'] }
  ],
  intro: ['At a conference or a guesthouse, people will ask where you are from and what brings you to Thailand. Tap to hear your answers.',
          '학회에서도 숙소에서도 어디서 왔는지, 무슨 일로 태국에 왔는지 묻곤 해요. 눌러서 대답을 들어 보세요.'],
  tip: ['Thai words never change form: maa (come) stays maa for I, you, yesterday, and tomorrow. The button at the top right switches both your polite ending and your word for I.',
        '태국어 낱말은 모양이 바뀌지 않아요. maa(오다)는 나든 너든, 어제든 내일이든 그대로 maa예요. 오른쪽 위 버튼을 누르면 공손 어미와 "나"가 함께 바뀌어요.'],
  choose: [
    { type: 'mean', say: 'ยินดีที่ได้รู้จัก{P}', opts: [['Nice to meet you', '만나서 반가워요'], ['My name is Min', '제 이름은 민이에요'], ['I came for a conference', '학회 때문에 왔어요']], a: 0, why: ['yin-dii thîi dâi rúu-jàk: glad to get to know you.', 'yin-dii thîi dâi rúu-jàk, 알게 되어 기뻐요.'] },
    { type: 'hear', say: 'มาจากเกาหลี{P}', opts: ['maa jàak kao-lǐi {p}', 'maa jàak a-mee-rí-kaa {p}', 'maa prà-chum {p}'], a: 0, why: ['kao-lǐi is Korea.', 'kao-lǐi가 한국이에요.'] },
    { type: 'mean', say: 'เป็นอาจารย์{P}', opts: [["I'm a professor", '교수예요'], ["I'm from Korea", '한국에서 왔어요'], ['Nice to meet you', '만나서 반가워요']], a: 0, why: ['pen means "to be", and aa-jaan is professor.', 'pen은 "이다", aa-jaan은 교수예요.'] },
    { type: 'hear', say: '{I}ชื่อมิน{P}', opts: ['{i} chûe Min {p}', 'maa prà-chum {p}', 'pen aa-jaan {p}'], a: 0, why: ['chûe means "to be named".', 'chûe는 "이름이 ~이다"예요.'] },
    { type: 'mean', say: 'มาประชุม{P}', opts: [['I came for a conference', '학회 때문에 왔어요'], ["I'm from America", '미국에서 왔어요'], ["I don't understand", '못 알아들었어요']], a: 0, why: ['maa prà-chum: came for a meeting.', 'maa prà-chum, 회의하러 왔어요.'] },
    { type: 'mean', say: 'มาจากอเมริกา{P}', opts: [["I'm from America", '미국에서 왔어요'], ["I'm from Korea", '한국에서 왔어요'], ["I'm a professor", '교수예요']], a: 0, why: ['a-mee-rí-kaa, America.', 'a-mee-rí-kaa, 미국이에요.'] }
  ],
  speak: [0, 1, 4, 5],
  fill: [
    { say: '{I}ชื่อมิน{P}', parts: ['{i}', '_', 'Min', '{p}'], a: ['chûe'], opts: ['chûe', 'maa', 'pen'] },
    { say: 'มาจากเกาหลี{P}', parts: ['maa', '_', 'kao-lǐi', '{p}'], a: ['jàak'], opts: ['jàak', 'pen', 'dii'] },
    { say: 'ยินดีที่ได้รู้จัก{P}', parts: ['yin-dii', 'thîi', 'dâi', '_', '{p}'], a: ['rúu-jàk'], opts: ['rúu-jàk', 'prà-chum', 'aa-jaan'] },
    { say: 'เป็นอาจารย์{P}', parts: ['_', 'aa-jaan', '{p}'], a: ['pen'], opts: ['pen', 'maa', 'chûe'] }
  ],
  note: ['Almost every Thai has a short nickname, like Nok (bird), Ploy (gem), or Bank. At a conference, colleagues may introduce themselves by nickname with Khun in front: Khun Ploy. You can do the same with your own first name.',
         '태국 사람은 거의 모두 녹(새), 쁠로이(보석), 뱅크 같은 짧은 별명이 있어요. 학회에서도 별명 앞에 쿤(Khun)을 붙여 쿤 쁠로이처럼 소개하곤 해요. 내 이름 앞에 쿤을 붙여 불러 달라고 해도 좋아요.'],
  today: [0, 1, 5]
},
8: {
  guide: 'chang',
  final: true,
  chooseTitle: ['Pick what you heard', '들은 말 고르기'],
  units: [
    { th: 'สวัสดี{P}', r: 'sà-wàt-dii {p}', k: '싸왓디 {k}', m: ['Hello', '안녕하세요'], n: ['Lesson 1', '1과'] },
    { th: 'ขอบคุณ{P}', r: 'khàwp-khun {p}', k: '컵쿤 {k}', m: ['Thank you', '고마워요'], n: ['Lesson 2', '2과'] },
    { th: 'ขอโทษ{P}', r: 'khǎw-thôot {p}', k: '커톳 {k}', m: ['Excuse me', '실례해요'], n: ['Lesson 2', '2과'] },
    { th: 'ไม่เข้าใจ{P}', r: 'mâi khâo-jai {p}', k: '마이 카오짜이 {k}', m: ["I don't understand", '못 알아들었어요'], n: ['Lesson 3', '3과'] },
    { th: 'เท่าไหร่{Q}', r: 'thâo-rài {q}', k: '타오라이 {k}', m: ['How much?', '얼마예요?'], n: ['Lesson 6', '6과'] },
    { th: 'ยินดีที่ได้รู้จัก{P}', r: 'yin-dii thîi dâi rúu-jàk {p}', k: '인디 티 다이 루짝 {k}', m: ['Nice to meet you', '만나서 반가워요'], n: ['Lesson 7', '7과'] }
  ],
  intro: ['Phaya Thai, the last stop of the Airport Rail Link. Before your stamp, let us put everything together into a first conversation. Tap each card to warm up.',
          '공항철도 종점 파야타이역이에요. 도장을 받기 전에 지금까지 배운 말을 모아 첫 대화를 해 봐요. 카드를 눌러 몸을 풀어요.'],
  tip: ['A whole first conversation: sà-wàt-dii, yin-dii thîi dâi rúu-jàk, maa jàak kao-lǐi. If you get lost: khǎw-thôot, mâi khâo-jai, phûut cháa-cháa nòi. And always finish with khàwp-khun {p}.',
        '첫 대화를 통째로 떠올려 봐요. sà-wàt-dii, yin-dii thîi dâi rúu-jàk, maa jàak kao-lǐi. 막히면 khǎw-thôot, mâi khâo-jai, phûut cháa-cháa nòi. 그리고 마무리는 언제나 khàwp-khun {p}.'],
  choose: [
    { type: 'mean', say: 'ขอบคุณมาก{P}', opts: [['Thank you very much', '정말 고마워요'], ['No worries', '괜찮아요'], ['Excuse me', '실례해요']], a: 0, why: ['khàwp-khun mâak. Lesson 2.', 'khàwp-khun mâak. 2과.'] },
    { type: 'mean', say: 'พูดช้าๆ หน่อย{P}', opts: [['Please speak slowly', '천천히 말해 주세요'], ["I don't understand", '못 알아들었어요'], ['How are you?', '잘 지내세요?']], a: 0, why: ['phûut cháa-cháa nòi. Lesson 3.', 'phûut cháa-cháa nòi. 3과.'] },
    { type: 'hear', say: 'ไม่เป็นไร{P}', opts: ['mâi pen rai {p}', 'mâi khâo-jai {p}', 'mâi châi'], a: 0, why: ['mâi pen rai, no worries. Lesson 2.', 'mâi pen rai, 괜찮아요. 2과.'] },
    { type: 'mean', say: 'ยี่สิบบาท', opts: [['20 baht', '20밧'], ['12 baht', '12밧'], ['200 baht', '200밧']], a: 0, why: ['yîi-sìp bàat. Lesson 6.', 'yîi-sìp bàat. 6과.'] },
    { type: 'hear', say: 'หมา', opts: ['mǎa', 'máa', 'maa'], a: 0, why: ['The rising tone: mǎa, dog. Lesson 4.', '올라가는 성조 mǎa, 개예요. 4과.'] },
    { type: 'mean', say: 'สบายดีไหม{Q}', opts: [['How are you?', '잘 지내세요?'], ['How much?', '얼마예요?'], ['Nice to meet you', '만나서 반가워요']], a: 0, why: ['sà-baai-dii mǎi. Lesson 1.', 'sà-baai-dii mǎi. 1과.'] },
    { type: 'hear', say: 'มาจากเกาหลี{P}', opts: ['maa jàak kao-lǐi {p}', 'maa prà-chum {p}', 'pen aa-jaan {p}'], a: 0, why: ['maa jàak kao-lǐi. Lesson 7.', 'maa jàak kao-lǐi. 7과.'] }
  ],
  speak: [0, 5, 3, 1],
  fill: [
    { say: 'ขอบคุณมาก{P}', parts: ['khàwp-khun', '_', '{p}'], a: ['mâak'], opts: ['mâak', 'mǎi', 'nòi'] },
    { say: 'ไม่เข้าใจ{P}', parts: ['mâi', '_', '{p}'], a: ['khâo-jai'], opts: ['khâo-jai', 'pen', 'châi'] },
    { say: 'มาจากเกาหลี{P}', parts: ['_', 'jàak', 'kao-lǐi', '{p}'], a: ['maa'], opts: ['maa', 'mǎa', 'máa'] },
    { say: 'สามร้อยบาท', parts: ['sǎam', '_', 'bàat'], a: ['rói'], opts: ['rói', 'sìp', 'phan'], m: ['300 baht', '300밧'] },
    { say: 'สบายดีไหม{Q}', parts: ['sà-baai-dii', '_', '{q}'], a: ['mǎi'], opts: ['mǎi', 'mâi', 'mài'] }
  ],
  note: ['Phaya Thai is where the Airport Rail Link meets the BTS Skytrain, and from here the whole city opens up. You have finished the first stretch. The next one takes you around Bangkok.',
         '파야타이역은 공항철도와 BTS 지상철이 만나는 곳으로, 여기서부터 방콕 시내가 펼쳐져요. 첫째 구간을 모두 마쳤어요. 다음 구간에서는 방콕 곳곳을 다녀요.'],
  today: [0, 3, 5]
}
};
