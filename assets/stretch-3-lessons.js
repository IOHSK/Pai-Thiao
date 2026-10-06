// 셋째 구간 수업 내용. 형식은 stretch-1-lessons.js 맨 위 설명과 같다.
window.PT_LESSONS = window.PT_LESSONS || {};
PT_LESSONS[3] = {
1: {
  guide: 'chang',
  units: [
    { th: 'ท่าเรืออยู่ที่ไหน{Q}', r: 'thâa-ruea yùu thîi-nǎi {q}', k: '타르아 유 티나이 {k}', m: ['Where is the pier?', '선착장이 어디예요?'], n: ['thâa is a landing or pier; ruea is a boat.', 'thâa는 나루, ruea는 배예요.'] },
    { th: 'เรือข้ามฟาก', r: 'ruea khâam-fâak', k: '르아 캄팍', m: ['cross-river ferry', '강 건너는 배'], n: ['khâam is to cross; fâak is the far bank.', 'khâam은 건너다, fâak은 건너편 강가예요.'] },
    { th: 'เรือด่วน', r: 'ruea dùan', k: '르아 두안', m: ['express boat', '수상 버스(급행 배)'] },
    { th: 'ไปท่าช้าง{P}', r: 'pai thâa-cháang {p}', k: '빠이 타창 {k}', m: ['To Tha Chang pier, please', '타창 선착장으로 가요'] },
    { th: 'ลงท่าไหน{Q}', r: 'long thâa nǎi {q}', k: '롱 타 나이 {k}', m: ['Which pier do I get off at?', '어느 선착장에서 내려요?'], n: ['nǎi means which. thîi-nǎi, where, is "which place".', 'nǎi는 "어느"예요. thîi-nǎi(어디)는 "어느 곳"이에요.'] },
    { th: 'ค่าเรือเท่าไหร่{Q}', r: 'khâa ruea thâo-rài {q}', k: '카 르아 타오라이 {k}', m: ['How much is the boat fare?', '뱃삯이 얼마예요?'] }
  ],
  intro: ['Welcome to the old town. The Chao Phraya River is Bangkok\'s oldest highway, and boats are still the best way to move between the temples. Tap to hear each phrase.',
          '옛 도심에 온 걸 환영해요. 짜오프라야강은 방콕에서 가장 오래된 길이고, 지금도 사원 사이를 오가기에는 배가 제일이에요. 눌러서 들어 보세요.'],
  tip: ['Two kinds of boat matter here. The ruea dùan runs up and down the river, stopping at numbered piers. The ruea khâam-fâak just crosses to the other side. thâa, pier, has a falling tone, and the fare word khâa sounds close to it, so listen carefully.',
        '여기서는 배가 두 종류예요. ruea dùan은 번호가 붙은 선착장에 서면서 강을 오르내리고, ruea khâam-fâak은 강 건너편으로만 오가요. thâa(선착장)는 떨어지는 성조이고, 요금을 뜻하는 khâa와 소리가 비슷하니 잘 들어 보세요.'],
  choose: [
    { type: 'mean', say: 'เรือข้ามฟาก', opts: [['cross-river ferry', '강 건너는 배'], ['express boat', '수상 버스(급행 배)'], ['pier', '선착장']], a: 0, why: ['khâam-fâak: crossing to the other bank.', 'khâam-fâak, 건너편으로 건너가요.'] },
    { type: 'hear', say: 'ท่าเรืออยู่ที่ไหน{Q}', opts: ['thâa-ruea yùu thîi-nǎi {q}', 'hâwng-náam yùu thîi-nǎi {q}', 'long thâa nǎi {q}'], a: 0, why: ['thâa-ruea, the pier.', 'thâa-ruea, 선착장이에요.'] },
    { type: 'mean', say: 'ลงท่าไหน{Q}', opts: [['Which pier do I get off at?', '어느 선착장에서 내려요?'], ['Where is the pier?', '선착장이 어디예요?'], ["I'll get off here", '여기서 내릴게요']], a: 0, why: ['long is get off; thâa nǎi is which pier.', 'long은 내리다, thâa nǎi는 어느 선착장이에요.'] },
    { type: 'mean', say: 'ค่าเรือเท่าไหร่{Q}', opts: [['How much is the boat fare?', '뱃삯이 얼마예요?'], ['How much per person?', '한 사람에 얼마예요?'], ['What time does the boat leave?', '배는 몇 시에 출발해요?']], a: 0, why: ['khâa is a fee, the same as khâa khâo, entrance fee.', 'khâa는 요금이에요. 입장료 khâa khâo의 그 khâa예요.'] },
    { type: 'hear', say: 'เรือด่วน', opts: ['ruea dùan', 'ruea khâam-fâak', 'rót-fai'], a: 0, why: ['dùan means express or urgent.', 'dùan은 급행, 급하다예요.'] },
    { type: 'hear', say: 'ไปท่าช้าง{P}', opts: ['pai thâa-cháang {p}', 'pai wát phoo {p}', 'pai sà-yǎam {p}'], a: 0, why: ['thâa-cháang, the elephant pier. Chang would approve.', 'thâa-cháang, "코끼리 선착장"이에요. 창이 좋아하겠네요.'] }
  ],
  speak: [0, 4, 5],
  fill: [
    { say: 'เรือข้ามฟาก', parts: ['ruea', '_'], a: ['khâam-fâak'], opts: ['khâam-fâak', 'dùan', 'thâa'] },
    { say: 'ลงท่าไหน{Q}', parts: ['long', 'thâa', '_', '{q}'], a: ['nǎi'], opts: ['nǎi', 'níi', 'mǎi'] },
    { say: 'ค่าเรือเท่าไหร่{Q}', parts: ['_', 'ruea', 'thâo-rài', '{q}'], a: ['khâa'], opts: ['khâa', 'thâa', 'khâo'] },
    { say: 'ท่าเรืออยู่ที่ไหน{Q}', parts: ['thâa-ruea', '_', 'thîi-nǎi', '{q}'], a: ['yùu'], opts: ['yùu', 'pai', 'long'] }
  ],
  note: ['Tha Tien pier sits right behind Wat Pho. From here a cross-river ferry takes you to Wat Arun in a few minutes for a few baht. The express boats with an orange flag stop at most piers and are the cheapest way up and down the river.',
         '타띠안 선착장은 왓포 바로 뒤에 있어요. 여기서 강 건너는 배를 타면 몇 분, 몇 밧이면 왓아룬에 닿아요. 주황색 깃발을 단 급행 배는 대부분의 선착장에 서고, 강을 오르내리는 가장 싼 방법이에요.'],
  today: [0, 1, 4]
},
2: {
  guide: 'mali',
  units: [
    { th: 'ขอตั๋วสองใบ{P}', r: 'khǎw tǔa sǎwng bai {p}', k: '커 뚜아 썽 바이 {k}', m: ['Two tickets, please', '표 두 장 주세요'], n: ['bai is the counter for tickets, sheets, and fruit.', 'bai는 표, 종이, 과일을 셀 때 쓰는 단위예요.'] },
    { th: 'วันนี้เปิดไหม{Q}', r: 'wan-níi pòet mǎi {q}', k: '완니 뻣 마이 {k}', m: ['Is it open today?', '오늘 열어요?'] },
    { th: 'ใส่กางเกงขาสั้นได้ไหม{Q}', r: 'sài kaang-keeng khǎa-sân dâi mǎi {q}', k: '싸이 깡껭 카싼 다이 마이 {k}', m: ['Can I wear shorts?', '반바지 입어도 돼요?'], n: ['sài is to wear, the same word as "put in" from the cilantro lesson.', 'sài는 입다예요. 고수 과에서 배운 "넣다"와 같은 말이에요.'] },
    { th: 'ต้องใส่เสื้อแขนยาว', r: 'tâwng sài sûea khǎen-yaao', k: '떵 싸이 쓰아 캔야우', m: ['You must wear long sleeves', '긴소매를 입어야 해요'], n: ['tâwng means must.', 'tâwng은 "~해야 한다"예요.'] },
    { th: 'ถอดรองเท้า', r: 'thàwt rawng-tháao', k: '텃 렁타오', m: ['Take off your shoes', '신발을 벗으세요'] }
  ],
  intro: ['The Grand Palace and the Temple of the Emerald Buddha are the most sacred site in Bangkok. Tickets first, then the dress code.',
          '왕궁과 에메랄드 사원은 방콕에서 가장 신성한 곳이에요. 먼저 표를 사고, 복장 규정을 알아봐요.'],
  tip: ['You will mostly hear these phrases from guards rather than say them: tâwng sài sûea khǎen-yaao, thàwt rawng-tháao. Knowing them means you understand at once. If you are wearing shorts, sarongs and cover-ups are usually available near the entrance.',
        '이 표현들은 내가 말하기보다 경비원에게 듣게 될 때가 많아요. tâwng sài sûea khǎen-yaao, thàwt rawng-tháao. 알아 두면 바로 알아들을 수 있어요. 반바지 차림이라면 입구 근처에서 몸을 가릴 천을 대개 구할 수 있어요.'],
  choose: [
    { type: 'mean', say: 'ถอดรองเท้า', opts: [['Take off your shoes', '신발을 벗으세요'], ['You must wear long sleeves', '긴소매를 입어야 해요'], ['Is it open today?', '오늘 열어요?']], a: 0, why: ['thàwt is to take off; rawng-tháao is shoes.', 'thàwt은 벗다, rawng-tháao는 신발이에요.'] },
    { type: 'hear', say: 'ขอตั๋วสองใบ{P}', opts: ['khǎw tǔa sǎwng bai {p}', 'khǎw tǔa sǎam bai {p}', 'ao sǎwng an {p}'], a: 0, why: ['sǎwng bai, two tickets.', 'sǎwng bai, 표 두 장이에요.'] },
    { type: 'mean', say: 'ใส่กางเกงขาสั้นได้ไหม{Q}', opts: [['Can I wear shorts?', '반바지 입어도 돼요?'], ['Can I take a photo?', '사진 찍어도 돼요?'], ['Can I leave my bag here?', '가방 맡길 수 있어요?']], a: 0, why: ['kaang-keeng khǎa-sân: trousers with short legs, shorts.', 'kaang-keeng khǎa-sân, 다리가 짧은 바지, 반바지예요.'] },
    { type: 'mean', say: 'ต้องใส่เสื้อแขนยาว', opts: [['You must wear long sleeves', '긴소매를 입어야 해요'], ['Take off your shoes', '신발을 벗으세요'], ['Can I wear shorts?', '반바지 입어도 돼요?']], a: 0, why: ['sûea is a shirt; khǎen-yaao is long sleeves.', 'sûea는 윗옷, khǎen-yaao는 긴소매예요.'] },
    { type: 'mean', say: 'วันนี้เปิดไหม{Q}', opts: [['Is it open today?', '오늘 열어요?'], ['What time does it close?', '몇 시에 닫아요?'], ['Is it near?', '가까워요?']], a: 0, why: ['wan-níi, today; pòet, open.', 'wan-níi는 오늘, pòet은 열다예요.'] }
  ],
  speak: [0, 1, 2],
  fill: [
    { say: 'ขอตั๋วสองใบ{P}', parts: ['khǎw', 'tǔa', 'sǎwng', '_', '{p}'], a: ['bai'], opts: ['bai', 'an', 'jaan'] },
    { say: 'ถอดรองเท้า', parts: ['_', 'rawng-tháao'], a: ['thàwt'], opts: ['thàwt', 'sài', 'tâwng'] },
    { say: 'ต้องใส่เสื้อแขนยาว', parts: ['_', 'sài', 'sûea', 'khǎen-yaao'], a: ['tâwng'], opts: ['tâwng', 'thàwt', 'dâi'] },
    { say: 'วันนี้เปิดไหม{Q}', parts: ['wan-níi', '_', 'mǎi', '{q}'], a: ['pòet'], opts: ['pòet', 'pìt', 'pai'] }
  ],
  note: ['A well known trick near the Grand Palace: a friendly stranger tells you it is closed today and offers a cheap tuk-tuk tour instead. The palace is open almost every day, so check at the real entrance yourself. A polite mâi pen rai {p} and walking on is all you need.',
         '왕궁 근처에서 잘 알려진 수법이 있어요. 친절한 낯선 사람이 오늘은 문을 닫았다며 싼 뚝뚝 투어를 권하는 거예요. 왕궁은 거의 매일 여니, 진짜 입구에서 직접 확인하세요. 공손하게 mâi pen rai {p}라고 하고 지나가면 돼요.'],
  today: [0, 2, 4]
},
3: {
  guide: 'chang',
  chooseTitle: ['Pick the time', '시간 고르기'],
  units: [
    { th: 'เจ็ดโมงเช้า', r: 'jèt mohng cháo', k: '쩻 몽 차오', m: ['7 in the morning', '아침 7시'], n: ['Morning hours: number + mohng cháo.', '아침 시간: 숫자 + mohng cháo'] },
    { th: 'เที่ยง', r: 'thîang', k: '티앙', m: ['noon', '정오'] },
    { th: 'บ่ายสองโมง', r: 'bàai sǎwng mohng', k: '바이 썽 몽', m: ['2 in the afternoon', '오후 2시'], n: ['Afternoon hours: bàai + number + mohng.', '오후 시간: bàai + 숫자 + mohng'] },
    { th: 'ห้าโมงเย็น', r: 'hâa mohng yen', k: '하 몽 옌', m: ['5 in the evening', '저녁 5시'], n: ['Late afternoon, 4 to 6: number + mohng yen.', '4시에서 6시: 숫자 + mohng yen'] },
    { th: 'สองทุ่ม', r: 'sǎwng thûm', k: '썽 툼', m: ['8 at night', '밤 8시'], n: ['Night hours count again from 7 pm: nùeng thûm is 7, sǎwng thûm is 8.', '밤 시간은 저녁 7시부터 다시 세요. nùeng thûm이 7시, sǎwng thûm이 8시예요.'] },
    { th: 'ตอนนี้กี่โมง{Q}', r: 'tawn-níi kìi mohng {q}', k: '떤니 끼 몽 {k}', m: ['What time is it now?', '지금 몇 시예요?'] }
  ],
  intro: ['Thai everyday time is counted in parts of the day, a bit like Korean 아침, 오후, 저녁, 밤. It looks strange at first, and then it clicks. Tap to hear each time.',
          '태국의 일상 시간은 하루를 몇 토막으로 나눠 세요. 한국어의 아침, 오후, 저녁, 밤과 조금 비슷해요. 처음엔 낯설지만 금방 익숙해져요. 눌러서 들어 보세요.'],
  tip: ['The map: 6 to 11 am is mohng cháo, noon is thîang, 1 to 3 pm is bàai ... mohng, 4 to 6 pm is mohng yen, and 7 to 11 pm is thûm, counted from one again. Officially Thailand also uses a 24-hour clock, so tickets and timetables read like 14.00 and are easier.',
        '정리하면 이래요. 오전 6시에서 11시는 mohng cháo, 정오는 thîang, 오후 1시에서 3시는 bàai ... mohng, 4시에서 6시는 mohng yen, 밤 7시에서 11시는 다시 1부터 세는 thûm이에요. 공식적으로는 24시간제도 써서 표나 시간표에는 14.00처럼 적혀 있어 더 쉬워요.'],
  choose: [
    { type: 'mean', say: 'บ่ายสองโมง', opts: [['2 pm', '오후 2시'], ['8 pm', '밤 8시'], ['2 am', '새벽 2시']], a: 0, why: ['bàai in front: afternoon.', '앞에 bàai가 있으니 오후예요.'] },
    { type: 'mean', say: 'สองทุ่ม', opts: [['8 pm', '밤 8시'], ['2 pm', '오후 2시'], ['noon', '정오']], a: 0, why: ['thûm hours: one thûm is 7 pm, so two is 8 pm.', 'thûm은 저녁 7시가 1이라서, 2는 밤 8시예요.'] },
    { type: 'mean', say: 'ห้าโมงเย็น', opts: [['5 pm', '저녁 5시'], ['5 am', '새벽 5시'], ['11 am', '오전 11시']], a: 0, why: ['yen, evening: 5 pm.', 'yen이 붙으면 저녁이에요. 5시예요.'] },
    { type: 'hear', say: 'เที่ยง', opts: ['thîang', 'thûm', 'cháo'], a: 0, why: ['thîang, noon.', 'thîang, 정오예요.'] },
    { type: 'mean', say: 'เจ็ดโมงเช้า', opts: [['7 am', '아침 7시'], ['7 pm', '저녁 7시'], ['1 pm', '오후 1시']], a: 0, why: ['cháo, morning.', 'cháo가 붙으면 아침이에요.'] },
    { type: 'hear', say: 'ตอนนี้กี่โมง{Q}', opts: ['tawn-níi kìi mohng {q}', 'pòet kìi mohng {q}', 'kìi chûa-mohng {q}'], a: 0, why: ['tawn-níi, now.', 'tawn-níi, 지금이에요.'] }
  ],
  speak: [1, 2, 4, 5],
  fillTitle: ['Build the time', '시간 만들기'],
  fill: [
    { say: 'บ่ายสามโมง', parts: ['_', 'sǎam', 'mohng'], a: ['bàai'], opts: ['bàai', 'cháo', 'yen'], m: ['3 pm', '오후 3시'] },
    { say: 'แปดโมงเช้า', parts: ['pàet', 'mohng', '_'], a: ['cháo'], opts: ['cháo', 'yen', 'thûm'], m: ['8 am', '아침 8시'] },
    { say: 'สามทุ่ม', parts: ['sǎam', '_'], a: ['thûm'], opts: ['thûm', 'mohng', 'bàai'], m: ['9 pm', '밤 9시'] },
    { say: 'หกโมงเย็น', parts: ['_', 'mohng', 'yen'], a: ['hòk'], opts: ['hòk', 'hâa', 'sìi'], m: ['6 pm', '저녁 6시'] }
  ],
  note: ['Sanam Luang, the big oval field north of the Grand Palace, is where royal ceremonies are held. Its name means "royal field". Early morning here, around hòk mohng cháo, is cool and quiet, with joggers and kite fliers.',
         '왕궁 북쪽의 넓은 타원형 광장 사남 루앙은 왕실 의식이 열리는 곳이에요. 이름이 "왕의 들판"이라는 뜻이에요. hòk mohng cháo(아침 6시) 무렵에는 선선하고 조용해서 달리는 사람과 연 날리는 사람이 보여요.'],
  today: [2, 4, 5]
},
4: {
  guide: 'mali',
  units: [
    { th: 'อันนี้คืออะไร{Q}', r: 'an-níi khue a-rai {q}', k: '안니 크 아라이 {k}', m: ['What is this?', '이건 뭐예요?'] },
    { th: 'พระเครื่อง', r: 'phrá-khrûeang', k: '프라크르앙', m: ['Buddhist amulet', '부적(불교 메달)'] },
    { th: 'เก่า', r: 'kào', k: '까오', m: ['old', '오래된'], n: ['Low tone. Compare kâo, nine, which falls.', '낮은 성조예요. 떨어지는 kâo(아홉)와 비교해 보세요.'] },
    { th: 'ของแท้ไหม{Q}', r: 'khǎwng tháe mǎi {q}', k: '컹 태 마이 {k}', m: ['Is it genuine?', '진품이에요?'] },
    { th: 'ห่อให้หน่อย{P}', r: 'hàw hâi nòi {p}', k: '허 하이 너이 {k}', m: ['Could you wrap it?', '포장해 주세요'], n: ['hâi nòi asks someone to do something for you.', 'hâi nòi는 "나를 위해 ~해 주세요"예요.'] }
  ],
  intro: ['Tha Prachan, by the river near Thammasat University, has lanes of small stalls selling amulets and old things. A good place to ask the most useful question there is: What is this?',
          '탐마삿 대학 근처 강가의 타프라짠에는 부적과 오래된 물건을 파는 작은 가게가 골목마다 있어요. 여기서는 가장 쓸모 있는 질문을 배워요. 이건 뭐예요?'],
  tip: ['an-níi khue a-rai {q} works anywhere: menus, fruit, street signs. Listen for kào (old, low tone) versus kâo (nine, falling) versus mài (new). You already know mài from the tone lesson.',
        'an-níi khue a-rai {q}는 메뉴, 과일, 표지판 어디서나 써요. kào(오래된, 낮은 성조), kâo(아홉, 떨어지는 성조), mài(새로운)를 구별해서 들어 보세요. mài는 성조 과에서 이미 배웠어요.'],
  choose: [
    { type: 'mean', say: 'อันนี้คืออะไร{Q}', opts: [['What is this?', '이건 뭐예요?'], ['How much is this?', '이거 얼마예요?'], ["I'll have this one", '이걸로 할게요']], a: 0, why: ['khue a-rai: is what?', 'khue a-rai, 무엇이에요?'] },
    { type: 'hear', say: 'เก่า', opts: ['kào', 'kâo', 'mài'], a: 0, why: ['Low and level: kào, old.', '낮게 머물렀어요. kào, 오래된이에요.'] },
    { type: 'hear', say: 'เก้า', opts: ['kâo', 'kào'], a: 0, why: ['It fell: kâo, nine.', '떨어졌어요. kâo, 아홉이에요.'] },
    { type: 'mean', say: 'ของแท้ไหม{Q}', opts: [['Is it genuine?', '진품이에요?'], ['Is it old?', '오래됐어요?'], ['Is it spicy?', '매워요?']], a: 0, why: ['tháe is real or genuine.', 'tháe는 진짜예요.'] },
    { type: 'mean', say: 'ห่อให้หน่อย{P}', opts: [['Could you wrap it?', '포장해 주세요'], ['May I take a look?', '좀 봐도 될까요?'], ["No thanks, I'll pass", '괜찮아요, 안 살게요']], a: 0, why: ['hàw is to wrap.', 'hàw는 싸다, 포장하다예요.'] }
  ],
  speak: [0, 3, 4],
  fill: [
    { say: 'อันนี้คืออะไร{Q}', parts: ['an-níi', 'khue', '_', '{q}'], a: ['a-rai'], opts: ['a-rai', 'thâo-rài', 'thîi-nǎi'] },
    { say: 'ของเก่า', parts: ['khǎwng', '_'], a: ['kào'], opts: ['kào', 'kâo', 'mài'], m: ['old things, antiques', '오래된 물건, 골동품'] },
    { say: 'ห่อให้หน่อย{P}', parts: ['_', 'hâi', 'nòi', '{p}'], a: ['hàw'], opts: ['hàw', 'duu', 'chim'] }
  ],
  note: ['Many Thais wear an amulet of a revered monk or Buddha image for protection, and collectors study them through magnifying glasses. If you buy one as a souvenir, it is kind to keep it in a clean, high place rather than in a back pocket.',
         '많은 태국 사람이 존경받는 스님이나 불상을 새긴 부적을 몸에 지니고, 수집가들은 돋보기로 꼼꼼히 살펴봐요. 기념품으로 산다면 뒷주머니보다는 깨끗하고 높은 곳에 두는 게 예의예요.'],
  today: [0, 2, 4]
},
5: {
  guide: 'mali',
  units: [
    { th: 'ดอกไม้', r: 'dàwk-máai', k: '덕마이', m: ['flowers', '꽃'] },
    { th: 'สีอะไร{Q}', r: 'sǐi a-rai {q}', k: '씨 아라이 {k}', m: ['What color?', '무슨 색이에요?'], n: ['sǐi is color. Put it in front of any color word.', 'sǐi는 색이에요. 색 이름 앞에 붙여요.'] },
    { th: 'สีแดง', r: 'sǐi daeng', k: '씨 댕', m: ['red', '빨간색'] },
    { th: 'สีเหลือง', r: 'sǐi lǔeang', k: '씨 르앙', m: ['yellow', '노란색'] },
    { th: 'สีขาว', r: 'sǐi khǎao', k: '씨 카우', m: ['white', '흰색'] },
    { th: 'พวงมาลัย', r: 'phuang-maa-lai', k: '푸앙말라이', m: ['flower garland', '꽃 목걸이(화환)'] }
  ],
  intro: ['Pak Khlong Talat is Bangkok\'s flower market, busy all day and all night. A perfect place to learn colors.',
          '빡끌렁 딸랏은 밤낮없이 북적이는 방콕의 꽃 시장이에요. 색깔을 배우기에 딱 좋은 곳이에요.'],
  tip: ['sǐi plus a color, and then the thing: dàwk-máai sǐi lǔeang, yellow flowers. The thing comes first and the color follows, just like grilled fish in the seafood lesson. Note sǐi, color, rises, unlike sìi, four.',
        'sǐi와 색 이름을 이어 말해요. 꾸미는 말은 뒤에 와서 dàwk-máai sǐi lǔeang은 노란 꽃이에요. sǐi(색)는 올라가는 성조라서 sìi(넷)와 달라요.'],
  choose: [
    { type: 'mean', say: 'สีเหลือง', opts: [['yellow', '노란색'], ['red', '빨간색'], ['white', '흰색']], a: 0, why: ['lǔeang, yellow.', 'lǔeang, 노란색이에요.'] },
    { type: 'mean', say: 'สีแดง', opts: [['red', '빨간색'], ['yellow', '노란색'], ['white', '흰색']], a: 0, why: ['daeng, red, like the red trucks of Chiang Mai.', 'daeng, 빨간색이에요. 치앙마이 빨간 트럭의 그 daeng이에요.'] },
    { type: 'hear', say: 'สีอะไร{Q}', opts: ['sǐi a-rai {q}', 'sìi a-rai {q}', 'khue a-rai {q}'], a: 0, why: ['Rising sǐi, color. Falling-low sìi would be four.', '올라가는 sǐi(색)예요. sìi라면 넷이에요.'] },
    { type: 'mean', say: 'พวงมาลัย', opts: [['flower garland', '꽃 목걸이(화환)'], ['flowers', '꽃'], ['Buddhist amulet', '부적(불교 메달)']], a: 0, why: ['phuang-maa-lai, a garland.', 'phuang-maa-lai, 화환이에요.'] },
    { type: 'mean', say: 'ดอกไม้สีขาว', opts: [['white flowers', '흰 꽃'], ['red flowers', '빨간 꽃'], ['yellow flowers', '노란 꽃']], a: 0, why: ['khǎao, white.', 'khǎao, 흰색이에요.'] }
  ],
  speak: [0, 1, 3, 5],
  fill: [
    { say: 'ดอกไม้สีแดง', parts: ['dàwk-máai', 'sǐi', '_'], a: ['daeng'], opts: ['daeng', 'lǔeang', 'khǎao'], m: ['red flowers', '빨간 꽃'] },
    { say: 'สีอะไร{Q}', parts: ['_', 'a-rai', '{q}'], a: ['sǐi'], opts: ['sǐi', 'sìi', 'khue'] },
    { say: 'ดอกไม้สีเหลือง', parts: ['_', 'sǐi', 'lǔeang'], a: ['dàwk-máai'], opts: ['dàwk-máai', 'phuang-maa-lai', 'phrá-khrûeang'], m: ['yellow flowers', '노란 꽃'] }
  ],
  note: ['Most garlands here are made of jasmine, mà-lí, the flower Mali is named after. Thais offer them at shrines and spirit houses and hang them in taxis for luck. Each day of the week also has its own color in Thailand: Monday is yellow, so you will see a lot of yellow on Mondays.',
         '이곳 화환은 대부분 재스민, 즉 말리 이름의 바로 그 mà-lí로 만들어요. 태국 사람들은 사당이나 집 앞 작은 신당에 바치고, 행운을 빌며 택시 안에 걸기도 해요. 태국에는 요일마다 색이 있어서 월요일은 노란색이고, 월요일에는 노란 옷이 많이 보여요.'],
  today: [1, 3, 5]
},
6: {
  guide: 'chang',
  units: [
    { th: 'วันนี้', r: 'wan-níi', k: '완니', m: ['today', '오늘'] },
    { th: 'พรุ่งนี้', r: 'phrûng-níi', k: '프룽니', m: ['tomorrow', '내일'] },
    { th: 'เมื่อวาน', r: 'mûea-waan', k: '므아완', m: ['yesterday', '어제'] },
    { th: 'ทุกวัน', r: 'thúk wan', k: '툭 완', m: ['every day', '매일'] },
    { th: 'เปิดทุกวันไหม{Q}', r: 'pòet thúk wan mǎi {q}', k: '뻣 툭 완 마이 {k}', m: ['Is it open every day?', '매일 열어요?'] },
    { th: 'พรุ่งนี้มาใหม่{P}', r: 'phrûng-níi maa mài {p}', k: '프룽니 마 마이 {k}', m: ["I'll come back tomorrow", '내일 다시 올게요'], n: ['maa mài: come again. A friendly way to leave a shop.', 'maa mài, 다시 와요. 가게를 나설 때 쓰기 좋은 말이에요.'] }
  ],
  intro: ['Tha Maharaj, a riverside spot near the old temples, is a pleasant place to sit down and plan the next few days. Here are the words for when.',
          '옛 사원 근처 강가의 타마하랏은 앉아서 며칠 일정을 짜기 좋은 곳이에요. "언제"를 나타내는 말을 배워요.'],
  tip: ['Thai has no past or future verb forms, so these time words do the work: mûea-waan maa (came yesterday), phrûng-níi maa (come tomorrow). Put the time word at the start, and the verb stays the same.',
        '태국어 동사에는 과거형, 미래형이 없어서 시간 낱말이 그 일을 해요. mûea-waan maa(어제 왔어요), phrûng-níi maa(내일 와요). 시간 낱말을 앞에 두면 동사는 그대로예요.'],
  choose: [
    { type: 'mean', say: 'พรุ่งนี้', opts: [['tomorrow', '내일'], ['yesterday', '어제'], ['today', '오늘']], a: 0, why: ['phrûng-níi, tomorrow.', 'phrûng-níi, 내일이에요.'] },
    { type: 'mean', say: 'เมื่อวาน', opts: [['yesterday', '어제'], ['tomorrow', '내일'], ['every day', '매일']], a: 0, why: ['mûea-waan, yesterday.', 'mûea-waan, 어제예요.'] },
    { type: 'hear', say: 'เปิดทุกวันไหม{Q}', opts: ['pòet thúk wan mǎi {q}', 'wan-níi pòet mǎi {q}', 'pìt kìi mohng {q}'], a: 0, why: ['thúk wan, every day.', 'thúk wan, 매일이에요.'] },
    { type: 'mean', say: 'พรุ่งนี้มาใหม่{P}', opts: [["I'll come back tomorrow", '내일 다시 올게요'], ['I came yesterday', '어제 왔어요'], ['Is it open tomorrow?', '내일 열어요?']], a: 0, why: ['phrûng-níi maa mài: tomorrow, come again.', 'phrûng-níi maa mài, 내일 다시 와요.'] },
    { type: 'hear', say: 'วันนี้', opts: ['wan-níi', 'phrûng-níi', 'thúk wan'], a: 0, why: ['wan-níi, today: "this day".', 'wan-níi, 오늘이에요. 말 그대로 "이 날"이에요.'] }
  ],
  speak: [1, 4, 5],
  fill: [
    { say: 'เปิดทุกวันไหม{Q}', parts: ['pòet', '_', 'wan', 'mǎi', '{q}'], a: ['thúk'], opts: ['thúk', 'kìi', 'níi'] },
    { say: 'พรุ่งนี้มาใหม่{P}', parts: ['_', 'maa', 'mài', '{p}'], a: ['phrûng-níi'], opts: ['phrûng-níi', 'mûea-waan', 'wan-níi'] },
    { say: 'เมื่อวานมา', parts: ['_', 'maa'], a: ['mûea-waan'], opts: ['mûea-waan', 'phrûng-níi', 'thúk wan'], m: ['came yesterday', '어제 왔어요'] }
  ],
  note: ['Opening days matter in the old town. Many Bangkok museums close on one or two weekdays, very often Monday, while temples are open daily. Ask pòet thúk wan mǎi {q} before you plan a long trip across the city.',
         '옛 도심에서는 여는 요일을 꼭 확인해요. 방콕 박물관은 평일 하루 이틀, 특히 월요일에 쉬는 곳이 많고, 사원은 매일 열어요. 도시 반대편까지 가기 전에 pòet thúk wan mǎi {q}라고 물어보세요.'],
  today: [0, 1, 5]
},
7: {
  guide: 'mali',
  units: [
    { th: 'ถ่ายรูปให้หน่อยได้ไหม{Q}', r: 'thàai rûup hâi nòi dâi mǎi {q}', k: '타이 룹 하이 너이 다이 마이 {k}', m: ['Could you take a photo for me?', '사진 좀 찍어 주실 수 있어요?'], n: ['hâi nòi from the wrapping lesson: do it for me.', '포장 과에서 배운 hâi nòi예요. "나를 위해 해 주세요".'] },
    { th: 'กดตรงนี้', r: 'kòt trong níi', k: '꼿 뜨롱 니', m: ['Press here', '여기 누르세요'] },
    { th: 'อีกรูป{P}', r: 'ìik rûup {p}', k: '익 룹 {k}', m: ['One more photo, please', '한 장 더요'], n: ['ìik means more or another.', 'ìik은 "더, 하나 더"예요.'] },
    { th: 'ยิ้ม', r: 'yím', k: '임', m: ['Smile!', '웃어요!'] },
    { th: 'สวยมากเลย', r: 'sǔai mâak loei', k: '쑤아이 막 러이', m: ['It came out really nice', '정말 잘 나왔어요'], n: ['loei adds warmth and emphasis at the end.', '끝의 loei는 감탄과 강조를 더해요.'] }
  ],
  intro: ['Across the river, Wang Lang market is full of snacks and students, and the riverbank has a great view back toward the Grand Palace. Time to ask someone to take your photo.',
          '강 건너 왕랑 시장은 간식과 학생들로 북적이고, 강둑에서는 왕궁 쪽 풍경이 멋지게 보여요. 누군가에게 사진을 부탁해 볼 시간이에요.'],
  tip: ['Hand over your phone, say thàai rûup hâi nòi dâi mǎi {q}, point and say kòt trong níi. Afterward, ìik rûup {p} if you want another, and always finish with khàwp-khun {p}. Thais are usually happy to help.',
        '휴대전화를 건네며 thàai rûup hâi nòi dâi mǎi {q}라고 하고, 버튼을 가리키며 kòt trong níi. 한 장 더 원하면 ìik rûup {p}, 마지막은 언제나 khàwp-khun {p}. 태국 사람들은 대개 기꺼이 도와줘요.'],
  choose: [
    { type: 'mean', say: 'กดตรงนี้', opts: [['Press here', '여기 누르세요'], ['Stop here', '여기 세워 주세요'], ["It's over there", '저기 있어요']], a: 0, why: ['kòt is to press.', 'kòt은 누르다예요.'] },
    { type: 'mean', say: 'อีกรูป{P}', opts: [['One more photo, please', '한 장 더요'], ['May I take a photo?', '사진 찍어도 돼요?'], ['Two tickets, please', '표 두 장 주세요']], a: 0, why: ['ìik rûup: another picture.', 'ìik rûup, 사진 한 장 더예요.'] },
    { type: 'hear', say: 'ถ่ายรูปให้หน่อยได้ไหม{Q}', opts: ['thàai rûup hâi nòi dâi mǎi {q}', 'thàai rûup dâi mǎi {q}', 'hàw hâi nòi {p}'], a: 0, why: ['With hâi nòi: take it for me, not "may I take one".', 'hâi nòi가 있으니 "찍어 주세요"예요. "찍어도 돼요?"와 달라요.'] },
    { type: 'hear', say: 'ยิ้ม', opts: ['yím', 'yaa', 'yen'], a: 0, why: ['yím, smile.', 'yím, 웃어요.'] },
    { type: 'mean', say: 'สวยมากเลย', opts: [['It came out really nice', '정말 잘 나왔어요'], ['Very delicious', '정말 맛있어요'], ['Too expensive', '너무 비싸요']], a: 0, why: ['sǔai mâak with a warm loei.', '다정한 loei가 붙은 sǔai mâak이에요.'] }
  ],
  speak: [0, 2, 4],
  fill: [
    { say: 'ถ่ายรูปให้หน่อยได้ไหม{Q}', parts: ['thàai', 'rûup', '_', 'nòi', 'dâi', 'mǎi', '{q}'], a: ['hâi'], opts: ['hâi', 'ìik', 'kòt'] },
    { say: 'อีกรูป{P}', parts: ['_', 'rûup', '{p}'], a: ['ìik'], opts: ['ìik', 'thàai', 'yím'] },
    { say: 'กดตรงนี้', parts: ['_', 'trong', 'níi'], a: ['kòt'], opts: ['kòt', 'jàwt', 'long'] }
  ],
  note: ['Wang Lang market sits next to Siriraj, Thailand\'s oldest hospital, and the market is busy with students and staff at lunchtime. Grab a snack and take the short ferry back across the river.',
         '왕랑 시장은 태국에서 가장 오래된 병원인 시리랏 병원 옆에 있어서, 점심때면 학생과 직원들로 붐벼요. 간식을 하나 사 들고 짧은 배를 타고 강을 다시 건너요.'],
  today: [0, 2, 4]
},
8: {
  guide: 'chang',
  final: true,
  chooseTitle: ['Pick what you heard', '들은 말 고르기'],
  units: [
    { th: 'สูงมาก', r: 'sǔung mâak', k: '쑹 막', m: ['Very tall', '정말 높아요'] },
    { th: 'ขึ้นได้ไหม{Q}', r: 'khûen dâi mǎi {q}', k: '큰 다이 마이 {k}', m: ['Can I go up?', '올라가도 돼요?'], n: ['khûen is go up; long, from the red trucks, is go down.', 'khûen은 올라가다, 빨간 트럭 과의 long은 내려가다예요.'] },
    { th: 'ระวัง', r: 'rá-wang', k: '라왕', m: ['Careful!', '조심하세요!'] },
    { th: 'ชันมาก', r: 'chan mâak', k: '찬 막', m: ['Very steep', '정말 가팔라요'] },
    { th: 'สวยที่สุด', r: 'sǔai thîi-sùt', k: '쑤아이 티쑷', m: ['The most beautiful', '가장 아름다워요'], n: ['thîi-sùt after a describing word means "the most".', '형용사 뒤의 thîi-sùt은 "가장"이에요.'] },
    { th: 'ไปท่าเตียน{P}', r: 'pai thâa-tian {p}', k: '빠이 타띠안 {k}', m: ['To Tha Tien pier, please', '타띠안 선착장으로 가요'], n: ['Lesson 1, back across the river.', '1과 표현으로 강을 다시 건너요.'] }
  ],
  intro: ['Wat Arun, the Temple of Dawn, rises right on the riverbank. Last stop of the old town: a few new words for climbing, and a review of the whole stretch.',
          '새벽 사원 왓아룬이 강가에 높이 솟아 있어요. 옛 도심의 마지막 정거장이에요. 올라갈 때 쓰는 말 몇 개를 배우고, 이번 구간 전체를 복습해요.'],
  tip: ['The steps of the central tower are steep, so you will hear rá-wang a lot. thîi-sùt works with anything: a-ròi thîi-sùt, the most delicious; sǔai thîi-sùt, the most beautiful.',
        '가운데 탑의 계단이 가팔라서 rá-wang(조심하세요)을 자주 듣게 돼요. thîi-sùt은 어디에나 붙어요. a-ròi thîi-sùt은 가장 맛있다, sǔai thîi-sùt은 가장 아름답다예요.'],
  choose: [
    { type: 'mean', say: 'ระวัง', opts: [['Careful!', '조심하세요!'], ['Help!', '도와주세요!'], ['Smile!', '웃어요!']], a: 0, why: ['rá-wang, be careful.', 'rá-wang, 조심하세요예요.'] },
    { type: 'mean', say: 'สวยที่สุด', opts: [['The most beautiful', '가장 아름다워요'], ['Very beautiful', '정말 아름다워요'], ['Very tall', '정말 높아요']], a: 0, why: ['thîi-sùt, the most.', 'thîi-sùt, 가장이에요.'] },
    { type: 'mean', say: 'บ่ายสี่โมง', opts: [['4 pm', '오후 4시'], ['4 am', '새벽 4시'], ['10 pm', '밤 10시']], a: 0, why: ['bàai ... mohng, afternoon. Lesson 3.', 'bàai ... mohng, 오후예요. 3과.'] },
    { type: 'hear', say: 'เรือข้ามฟาก', opts: ['ruea khâam-fâak', 'ruea dùan', 'thâa-ruea'], a: 0, why: ['The ferry across. Lesson 1.', '강 건너는 배예요. 1과.'] },
    { type: 'mean', say: 'ถอดรองเท้า', opts: [['Take off your shoes', '신발을 벗으세요'], ['Two tickets, please', '표 두 장 주세요'], ['Press here', '여기 누르세요']], a: 0, why: ['thàwt rawng-tháao. Lesson 2.', 'thàwt rawng-tháao. 2과.'] },
    { type: 'hear', say: 'สีเหลือง', opts: ['sǐi lǔeang', 'sǐi daeng', 'sìi'], a: 0, why: ['Yellow. Lesson 5.', '노란색이에요. 5과.'] },
    { type: 'mean', say: 'พรุ่งนี้', opts: [['tomorrow', '내일'], ['yesterday', '어제'], ['today', '오늘']], a: 0, why: ['phrûng-níi. Lesson 6.', 'phrûng-níi. 6과.'] }
  ],
  speak: [1, 2, 4, 5],
  fill: [
    { say: 'ขึ้นได้ไหม{Q}', parts: ['_', 'dâi', 'mǎi', '{q}'], a: ['khûen'], opts: ['khûen', 'long', 'kòt'] },
    { say: 'สวยที่สุด', parts: ['sǔai', '_'], a: ['thîi-sùt'], opts: ['thîi-sùt', 'mâak', 'loei'] },
    { say: 'อันนี้คืออะไร{Q}', parts: ['an-níi', '_', 'a-rai', '{q}'], a: ['khue'], opts: ['khue', 'thâo', 'yùu'] },
    { say: 'สองทุ่ม', parts: ['_', 'thûm'], a: ['sǎwng'], opts: ['sǎwng', 'sǎam', 'sìi'], m: ['8 pm', '밤 8시'] },
    { say: 'ขอตั๋วสองใบ{P}', parts: ['khǎw', '_', 'sǎwng', 'bai', '{p}'], a: ['tǔa'], opts: ['tǔa', 'rûup', 'ruea'] }
  ],
  note: ['Up close, Wat Arun\'s tower is covered in pieces of colored porcelain arranged as flowers. Despite its name, the best view comes at sunset, from the riverside on the Tha Tien side. You have finished the third stretch. Next, the malls and markets of Pratunam.',
         '가까이서 보면 왓아룬의 탑은 꽃 모양으로 붙인 색색의 도자기 조각으로 덮여 있어요. 이름은 "새벽 사원"이지만 가장 멋진 풍경은 해 질 녘 타띠안 쪽 강가에서 볼 수 있어요. 셋째 구간을 모두 마쳤어요. 다음은 쁘라뚜남의 쇼핑몰과 시장이에요.'],
  today: [1, 2, 4]
}
};
