// 부록: 방콕 밖 여행 수업 내용. 형식은 stretch-1-lessons.js 맨 위 설명과 같다.
window.PT_LESSONS = window.PT_LESSONS || {};
PT_LESSONS.ayutthaya = {
1: {
  guide: 'chang',
  units: [
    { th: 'ตั๋วไปอยุธยา{P}', r: 'tǔa pai a-yút-thá-yaa {p}', k: '뚜아 빠이 아윳타야 {k}', m: ['A ticket to Ayutthaya, please', '아유타야 가는 표 주세요'], n: ['tǔa is a ticket. Say where to, and hold up fingers for how many.', 'tǔa는 표예요. 목적지를 말하고 손가락으로 장수를 보여 줘요.'] },
    { th: 'เที่ยวเดียว', r: 'thîao diao', k: '티아우 디아우', m: ['One way', '편도'] },
    { th: 'ไปกลับ', r: 'pai klàp', k: '빠이 끌랍', m: ['Round trip', '왕복'], n: ['Literally "go, return".', '말 그대로 "가고 돌아오기"예요.'] },
    { th: 'รถไฟออกกี่โมง{Q}', r: 'rót-fai àwk kìi mohng {q}', k: '롯파이 억 끼 몽 {k}', m: ['What time does the train leave?', '기차는 몇 시에 출발해요?'] },
    { th: 'ชานชาลาที่เท่าไหร่{Q}', r: 'chaan-chaa-laa thîi thâo-rài {q}', k: '찬차라 티 타오라이 {k}', m: ['Which platform?', '몇 번 승강장이에요?'] }
  ],
  intro: ['Ayutthaya, the old royal capital, is an easy day trip north of Bangkok by train. Let us buy a ticket.',
          '옛 왕국의 수도 아유타야는 방콕에서 기차로 쉽게 다녀올 수 있는 곳이에요. 먼저 표를 사 봐요.'],
  tip: ['kìi mohng (what time) and thâo-rài (how much, how many) do most of the work at a station. àwk means to leave or depart; you will see it on signs as ออก.',
        '역에서는 kìi mohng(몇 시)과 thâo-rài(얼마, 몇)가 대부분의 일을 해요. àwk은 "나가다, 출발하다"로, 표지판에서 ออก이라는 글자로 보게 될 거예요.'],
  choose: [
    { type: 'mean', say: 'ไปกลับ', opts: [['Round trip', '왕복'], ['One way', '편도'], ['Which platform?', '몇 번 승강장이에요?']], a: 0, why: ['pai klàp: go and come back.', 'pai klàp, 가고 돌아오기예요.'] },
    { type: 'mean', say: 'เที่ยวเดียว', opts: [['One way', '편도'], ['Round trip', '왕복'], ["I'm here on vacation", '여행하러 왔어요']], a: 0, why: ['thîao diao: a single trip.', 'thîao diao, 한 번 가는 길이에요.'] },
    { type: 'hear', say: 'รถไฟออกกี่โมง{Q}', opts: ['rót-fai àwk kìi mohng {q}', 'chaan-chaa-laa thîi thâo-rài {q}', 'tǔa pai a-yút-thá-yaa {p}'], a: 0, why: ['rót-fai is the train.', 'rót-fai가 기차예요.'] },
    { type: 'mean', say: 'ชานชาลาที่เท่าไหร่{Q}', opts: [['Which platform?', '몇 번 승강장이에요?'], ['What time does the train leave?', '기차는 몇 시에 출발해요?'], ['How much is this?', '이거 얼마예요?']], a: 0, why: ['chaan-chaa-laa is a platform.', 'chaan-chaa-laa는 승강장이에요.'] },
    { type: 'hear', say: 'ตั๋วไปอยุธยา{P}', opts: ['tǔa pai a-yút-thá-yaa {p}', 'pai klàp', 'thîao diao'], a: 0, why: ['tǔa, ticket, has a rising tone.', 'tǔa(표)는 올라가는 성조예요.'] }
  ],
  speak: [0, 2, 3, 4],
  fill: [
    { say: 'ตั๋วไปอยุธยา{P}', parts: ['_', 'pai', 'a-yút-thá-yaa', '{p}'], a: ['tǔa'], opts: ['tǔa', 'rót-fai', 'klàp'] },
    { say: 'ไปกลับ', parts: ['pai', '_'], a: ['klàp'], opts: ['klàp', 'diao', 'àwk'] },
    { say: 'รถไฟออกกี่โมง{Q}', parts: ['rót-fai', '_', 'kìi', 'mohng', '{q}'], a: ['àwk'], opts: ['àwk', 'klàp', 'thîi'] }
  ],
  note: ['Trains to Ayutthaya leave from Krung Thep Aphiwat, Bangkok\'s big new central station, and some still from the old Hua Lamphong station. The ride takes about one and a half to two hours, and third class is cheap, cheerful, and has open windows.',
         '아유타야행 기차는 방콕의 새 중앙역인 끄룽텝 아피왓역에서 출발하고, 일부는 옛 후아람퐁역에서도 떠나요. 한 시간 반에서 두 시간 정도 걸리고, 3등칸은 싸고 창문이 열려 있어서 여행 기분이 나요.'],
  today: [0, 2, 3]
},
2: {
  guide: 'mali',
  units: [
    { th: 'เช่าจักรยาน{P}', r: 'châo jàk-krà-yaan {p}', k: '차오 짝끄라얀 {k}', m: ["I'd like to rent a bicycle", '자전거를 빌리고 싶어요'] },
    { th: 'วันละเท่าไหร่{Q}', r: 'wan lá thâo-rài {q}', k: '완 라 타오라이 {k}', m: ['How much per day?', '하루에 얼마예요?'], n: ['lá means "per": wan lá, per day; khon lá, per person.', 'lá는 "~당"이에요. wan lá는 하루당, khon lá는 한 사람당.'] },
    { th: 'ตุ๊กตุ๊ก', r: 'túk-túk', k: '뚝뚝', m: ['tuk-tuk', '뚝뚝(삼륜 택시)'] },
    { th: 'รอที่นี่ได้ไหม{Q}', r: 'raw thîi-nîi dâi mǎi {q}', k: '러 티니 다이 마이 {k}', m: ['Can you wait here?', '여기서 기다려 주실 수 있어요?'] },
    { th: 'กี่ชั่วโมง{Q}', r: 'kìi chûa-mohng {q}', k: '끼 추아몽 {k}', m: ['How many hours?', '몇 시간이요?'] }
  ],
  intro: ['The temple ruins are spread out across the island, so most visitors rent a bicycle or hire a tuk-tuk for a few hours.',
          '옛 사원 터가 섬 곳곳에 흩어져 있어서, 대부분 자전거를 빌리거나 뚝뚝을 몇 시간 빌려 돌아봐요.'],
  tip: ['For a tuk-tuk, agree on the price and the hours before you set off: kìi chûa-mohng? thâo-rài? Then at each temple, raw thîi-nîi dâi mǎi {q} keeps your driver waiting for you.',
        '뚝뚝은 출발 전에 시간과 가격을 먼저 정해요. kìi chûa-mohng? thâo-rài? 그리고 사원마다 raw thîi-nîi dâi mǎi {q}라고 하면 기사님이 기다려 줘요.'],
  choose: [
    { type: 'mean', say: 'วันละเท่าไหร่{Q}', opts: [['How much per day?', '하루에 얼마예요?'], ['How many hours?', '몇 시간이요?'], ['How much is this?', '이거 얼마예요?']], a: 0, why: ['wan lá: per day.', 'wan lá, 하루당이에요.'] },
    { type: 'hear', say: 'เช่าจักรยาน{P}', opts: ['châo jàk-krà-yaan {p}', 'túk-túk', 'raw thîi-nîi dâi mǎi {q}'], a: 0, why: ['châo is to rent.', 'châo가 빌리다예요.'] },
    { type: 'mean', say: 'รอที่นี่ได้ไหม{Q}', opts: [['Can you wait here?', '여기서 기다려 주실 수 있어요?'], ['Stop here, please', '여기 세워 주세요'], ['Can I leave my bag here?', '가방 맡길 수 있어요?']], a: 0, why: ['raw is wait; thîi-nîi is here.', 'raw는 기다리다, thîi-nîi는 여기예요.'] },
    { type: 'mean', say: 'กี่ชั่วโมง{Q}', opts: [['How many hours?', '몇 시간이요?'], ['What time?', '몇 시예요?'], ['How much per day?', '하루에 얼마예요?']], a: 0, why: ['chûa-mohng is an hour of time; mohng alone is a clock time.', 'chûa-mohng은 시간의 길이, mohng만 쓰면 시각이에요.'] },
    { type: 'hear', say: 'ตุ๊กตุ๊ก', opts: ['túk-túk', 'tǔa', 'thá-lee'], a: 0, why: ['Named after the sound of its engine.', '엔진 소리에서 온 이름이에요.'] }
  ],
  speak: [0, 1, 3],
  fill: [
    { say: 'วันละเท่าไหร่{Q}', parts: ['wan', '_', 'thâo-rài', '{q}'], a: ['lá'], opts: ['lá', 'kìi', 'nîi'] },
    { say: 'รอที่นี่ได้ไหม{Q}', parts: ['_', 'thîi-nîi', 'dâi', 'mǎi', '{q}'], a: ['raw'], opts: ['raw', 'châo', 'pai'] },
    { say: 'กี่ชั่วโมง{Q}', parts: ['kìi', '_', '{q}'], a: ['chûa-mohng'], opts: ['chûa-mohng', 'mohng', 'wan'] }
  ],
  note: ['At Wat Mahathat, look for the stone Buddha head held in the roots of a fig tree, one of the most photographed sights in Thailand. Remember to crouch or kneel so your head is lower than the Buddha\'s when you take your picture.',
         '왓 마하탓에서는 보리수 뿌리에 감싸인 돌 불두를 찾아보세요. 태국에서 가장 많이 사진에 찍히는 장면 중 하나예요. 사진을 찍을 때는 몸을 낮춰서 내 머리가 불두보다 높지 않게 해요.'],
  today: [0, 1, 3]
},
3: {
  guide: 'chang',
  final: true,
  units: [
    { th: 'เปิดกี่โมง{Q}', r: 'pòet kìi mohng {q}', k: '뻣 끼 몽 {k}', m: ['What time does it open?', '몇 시에 열어요?'], n: ['pòet is open, the same word as turning on the meter.', 'pòet은 "열다", 미터기를 켤 때와 같은 말이에요.'] },
    { th: 'ปิดกี่โมง{Q}', r: 'pìt kìi mohng {q}', k: '삣 끼 몽 {k}', m: ['What time does it close?', '몇 시에 닫아요?'] },
    { th: 'ค่าเข้าเท่าไหร่{Q}', r: 'khâa khâo thâo-rài {q}', k: '카 카오 타오라이 {k}', m: ['How much is the entrance fee?', '입장료가 얼마예요?'] },
    { th: 'ร้อนมาก', r: 'ráwn mâak', k: '런 막', m: ["It's really hot", '정말 더워요'] },
    { th: 'ขอน้ำแข็ง{P}', r: 'khǎw náam-khǎeng {p}', k: '커 남캥 {k}', m: ['Some ice, please', '얼음 좀 주세요'], n: ['náam-khǎeng is literally "hard water".', 'náam-khǎeng은 말 그대로 "딱딱한 물"이에요.'] }
  ],
  intro: ['The last stop of the day: opening hours, entrance fees, and staying cool. Ayutthaya at midday is seriously hot.',
          '오늘의 마지막 정거장이에요. 관람 시간, 입장료, 그리고 더위 피하기. 한낮의 아유타야는 정말 더워요.'],
  tip: ['pòet and pìt sound alike, but listen: pòet (open) has a longer, rounder vowel, pìt (close) is short and sharp. Ice in drinks from busy shops is made in factories and is generally safe.',
        'pòet과 pìt은 비슷하게 들리지만, pòet(열다)은 모음이 길고 둥글고, pìt(닫다)은 짧고 날카로워요. 손님 많은 가게의 얼음은 공장에서 만든 것이라 대체로 안심해도 돼요.'],
  choose: [
    { type: 'hear', say: 'เปิดกี่โมง{Q}', opts: ['pòet kìi mohng {q}', 'pìt kìi mohng {q}'], a: 0, why: ['A longer, rounder vowel: pòet, open.', '모음이 길고 둥글었어요. pòet, 열다예요.'] },
    { type: 'hear', say: 'ปิดกี่โมง{Q}', opts: ['pìt kìi mohng {q}', 'pòet kìi mohng {q}'], a: 0, why: ['Short and sharp: pìt, close.', '짧고 날카로웠어요. pìt, 닫다예요.'] },
    { type: 'mean', say: 'ค่าเข้าเท่าไหร่{Q}', opts: [['How much is the entrance fee?', '입장료가 얼마예요?'], ['How much per day?', '하루에 얼마예요?'], ['Which platform?', '몇 번 승강장이에요?']], a: 0, why: ['khâa is a fee; khâo is to enter.', 'khâa는 요금, khâo는 들어가다예요.'] },
    { type: 'mean', say: 'ร้อนมาก', opts: [["It's really hot", '정말 더워요'], ['Very delicious', '정말 맛있어요'], ['Too expensive', '너무 비싸요']], a: 0, why: ['ráwn is hot.', 'ráwn은 덥다예요.'] },
    { type: 'mean', say: 'ขอน้ำแข็ง{P}', opts: [['Some ice, please', '얼음 좀 주세요'], ['Some water, please', '물 좀 주세요'], ['The bill, please', '계산서 주세요']], a: 0, why: ['náam-khǎeng, ice.', 'náam-khǎeng, 얼음이에요.'] }
  ],
  speak: [0, 2, 3, 4],
  fill: [
    { say: 'ปิดกี่โมง{Q}', parts: ['_', 'kìi', 'mohng', '{q}'], a: ['pìt'], opts: ['pìt', 'pòet', 'àwk'] },
    { say: 'ร้อนมาก', parts: ['_', 'mâak'], a: ['ráwn'], opts: ['ráwn', 'a-ròi', 'phaeng'] },
    { say: 'ขอน้ำแข็ง{P}', parts: ['khǎw', '_', '{p}'], a: ['náam-khǎeng'], opts: ['náam-khǎeng', 'náam-plào', 'mee-nuu'] }
  ],
  note: ['Ayutthaya was the capital of Siam for over four hundred years, until 1767, and its ruins are now a UNESCO World Heritage Site. Before the train back, try roti sai mai, thin crepes wrapped around strands of candy floss, the town\'s famous sweet.',
         '아유타야는 1767년까지 400년 넘게 시암의 수도였고, 지금 그 유적은 유네스코 세계유산이에요. 돌아가는 기차를 타기 전에 이 도시의 명물 간식 로띠 사이 마이를 맛보세요. 얇은 전병에 솜사탕 실을 말아 먹어요.'],
  today: [0, 2, 4]
}
};
PT_LESSONS.chiangmai = {
1: {
  guide: 'chang',
  units: [
    { th: 'รถแดง', r: 'rót daeng', k: '롯 댕', m: ['red truck (shared taxi)', '빨간 트럭(합승 택시)'], n: ['daeng is red. These pickup trucks with benches are Chiang Mai\'s buses.', 'daeng은 빨간색이에요. 의자 달린 이 트럭이 치앙마이의 버스예요.'] },
    { th: 'ไปประตูท่าแพ{P}', r: 'pai prà-tuu thâa-phae {p}', k: '빠이 쁘라뚜 타패 {k}', m: ['To Tha Phae Gate, please', '타패 문으로 가 주세요'] },
    { th: 'คนละเท่าไหร่{Q}', r: 'khon lá thâo-rài {q}', k: '콘 라 타오라이 {k}', m: ['How much per person?', '한 사람에 얼마예요?'] },
    { th: 'ลงตรงนี้{P}', r: 'long trong níi {p}', k: '롱 뜨롱 니 {k}', m: ["I'll get off here", '여기서 내릴게요'] },
    { th: 'ไปดอยสุเทพ{P}', r: 'pai doi sù-thêep {p}', k: '빠이 도이 수텝 {k}', m: ['To Doi Suthep, please', '도이 수텝으로 가 주세요'] }
  ],
  intro: ['Welcome to the north. In Chiang Mai, you flag down a red truck, tell the driver where you are going, and hop in the back.',
          '북부에 온 걸 환영해요. 치앙마이에서는 빨간 트럭을 손짓해 세우고, 기사님께 목적지를 말한 뒤 뒤칸에 올라타요.'],
  tip: ['The red truck is a shared ride, so always ask the price per person first: khon lá thâo-rài {q}. To get off, press the buzzer or call out long trong níi {p}.',
        '빨간 트럭은 합승이라서 먼저 한 사람당 요금을 물어요. khon lá thâo-rài {q}. 내릴 때는 벨을 누르거나 long trong níi {p}라고 외쳐요.'],
  choose: [
    { type: 'mean', say: 'คนละเท่าไหร่{Q}', opts: [['How much per person?', '한 사람에 얼마예요?'], ['How much per day?', '하루에 얼마예요?'], ['How many hours?', '몇 시간이요?']], a: 0, why: ['khon lá: per person.', 'khon lá, 한 사람당이에요.'] },
    { type: 'hear', say: 'รถแดง', opts: ['rót daeng', 'rót-fai', 'túk-túk'], a: 0, why: ['rót is a vehicle; daeng is red.', 'rót은 차, daeng은 빨간색이에요.'] },
    { type: 'mean', say: 'ลงตรงนี้{P}', opts: [["I'll get off here", '여기서 내릴게요'], ['Go straight', '직진해 주세요'], ['Can you wait here?', '여기서 기다려 주실 수 있어요?']], a: 0, why: ['long means to get down or off.', 'long은 내리다예요.'] },
    { type: 'hear', say: 'ไปดอยสุเทพ{P}', opts: ['pai doi sù-thêep {p}', 'pai prà-tuu thâa-phae {p}', 'pai sà-yǎam {p}'], a: 0, why: ['doi means mountain in the north.', '북부에서 doi는 산이에요.'] },
    { type: 'mean', say: 'ไปประตูท่าแพ{P}', opts: [['To Tha Phae Gate, please', '타패 문으로 가 주세요'], ['To this hotel, please', '이 호텔로 가 주세요'], ['To Doi Suthep, please', '도이 수텝으로 가 주세요']], a: 0, why: ['prà-tuu is a gate or door.', 'prà-tuu는 문이에요.'] }
  ],
  speak: [1, 2, 3],
  fill: [
    { say: 'คนละเท่าไหร่{Q}', parts: ['_', 'lá', 'thâo-rài', '{q}'], a: ['khon'], opts: ['khon', 'wan', 'rót'] },
    { say: 'ลงตรงนี้{P}', parts: ['_', 'trong', 'níi', '{p}'], a: ['long'], opts: ['long', 'jàwt', 'raw'] },
    { say: 'รถแดง', parts: ['rót', '_'], a: ['daeng'], opts: ['daeng', 'fai', 'túk'] }
  ],
  note: ['Tha Phae Gate is the best known gate of Chiang Mai\'s old walled city, which is still ringed by a square moat. On Sunday evenings, the street leading from the gate turns into a huge walking market.',
         '타패 문은 치앙마이 옛 성곽 도시에서 가장 유명한 문으로, 성 둘레에는 지금도 네모난 해자가 남아 있어요. 일요일 저녁이면 이 문에서 이어지는 거리가 커다란 걷는 시장으로 바뀌어요.'],
  today: [0, 2, 3]
},
2: {
  guide: 'mali',
  units: [
    { th: 'ข้าวซอย', r: 'khâo-soi', k: '카오쏘이', m: ['khao soi (curry noodles)', '카오쏘이(카레 국수)'], n: ['Egg noodles in coconut curry, topped with crispy noodles. The dish of the north.', '코코넛 카레에 달걀면을 넣고 바삭한 면을 올려요. 북부를 대표하는 음식이에요.'] },
    { th: 'ไส้อั่ว', r: 'sâi-ùa', k: '싸이우아', m: ['northern herb sausage', '북부식 허브 소시지'] },
    { th: 'ขอชิมได้ไหม{Q}', r: 'khǎw chim dâi mǎi {q}', k: '커 침 다이 마이 {k}', m: ['May I taste it?', '맛봐도 돼요?'] },
    { th: 'เอาสองอัน{P}', r: 'ao sǎwng an {p}', k: '아오 썽 안 {k}', m: ["I'll take two", '두 개 주세요'], n: ['an is the all-purpose counter for things.', 'an은 물건을 셀 때 두루 쓰는 단위예요.'] },
    { th: 'อร่อยจัง', r: 'a-ròi jang', k: '아러이 짱', m: ['So tasty!', '진짜 맛있다!'], n: ['jang is a warmer, more excited "very".', 'jang은 mâak보다 들뜬 느낌의 "정말"이에요.'] }
  ],
  intro: ['Northern food is its own world: milder than the south, full of herbs, and best eaten at a night market. Tap to hear the dishes.',
          '북부 음식은 따로 하나의 세계예요. 남부보다 덜 맵고, 허브가 가득하고, 야시장에서 먹어야 제맛이에요. 눌러서 음식 이름을 들어 보세요.'],
  tip: ['At market stalls, khǎw chim dâi mǎi {q} is welcome, and vendors often hand you a free bite. Then point and say ao sǎwng an {p}. And when it is good, a-ròi jang will make the cook smile.',
        '시장 가게에서 khǎw chim dâi mǎi {q}라고 하면 대개 반겨 주고, 한 조각 맛보게 해 줘요. 그다음 가리키며 ao sǎwng an {p}. 맛있으면 a-ròi jang이라고 해 보세요. 요리한 분이 활짝 웃을 거예요.'],
  choose: [
    { type: 'mean', say: 'ขอชิมได้ไหม{Q}', opts: [['May I taste it?', '맛봐도 돼요?'], ['May I take a look?', '좀 봐도 될까요?'], ['May I take a photo?', '사진 찍어도 돼요?']], a: 0, why: ['chim is to taste.', 'chim은 맛보다예요.'] },
    { type: 'hear', say: 'ข้าวซอย', opts: ['khâo-soi', 'sâi-ùa', 'phàt-thai'], a: 0, why: ['khâo-soi, the northern curry noodles.', 'khâo-soi, 북부 카레 국수예요.'] },
    { type: 'mean', say: 'เอาสองอัน{P}', opts: [["I'll take two", '두 개 주세요'], ["I'll have this one", '이걸로 할게요'], ['Two plates, please', '두 접시 주세요']], a: 0, why: ['sǎwng an: two pieces.', 'sǎwng an, 두 개예요.'] },
    { type: 'mean', say: 'อร่อยจัง', opts: [['So tasty!', '진짜 맛있다!'], ['Too spicy', '너무 매워요'], ["It's really hot", '정말 더워요']], a: 0, why: ['a-ròi with an excited jang.', '들뜬 jang이 붙은 a-ròi예요.'] },
    { type: 'hear', say: 'ไส้อั่ว', opts: ['sâi-ùa', 'khâo-soi', 'sǎwng an'], a: 0, why: ['sâi-ùa, herb sausage.', 'sâi-ùa, 허브 소시지예요.'] }
  ],
  speak: [0, 2, 3, 4],
  fill: [
    { say: 'ขอชิมได้ไหม{Q}', parts: ['khǎw', '_', 'dâi', 'mǎi', '{q}'], a: ['chim'], opts: ['chim', 'duu', 'kin'] },
    { say: 'เอาสองอัน{P}', parts: ['ao', '_', 'an', '{p}'], a: ['sǎwng'], opts: ['sǎwng', 'sǎam', 'sìi'] },
    { say: 'อร่อยจัง', parts: ['a-ròi', '_'], a: ['jang'], opts: ['jang', 'mâak', 'nòi'] }
  ],
  note: ['The Chiang Mai Night Bazaar runs every evening along Chang Khlan Road, a short walk east of the old city. Northern people also have their own dialect, kham mueang; a friendly "jâo" instead of "khâ" or "khráp" is a fun thing to listen for.',
         '치앙마이 나이트 바자는 옛 도심에서 동쪽으로 조금 걸어가면 나오는 창클란 거리에서 매일 저녁 열려요. 북부 사람들은 깜므앙이라는 사투리를 쓰는데, "카"나 "크랍" 대신 다정하게 "짜오"라고 하는 소리를 들어 보는 것도 재미있어요.'],
  today: [0, 2, 4]
},
3: {
  guide: 'mali',
  final: true,
  units: [
    { th: 'หนาว', r: 'nǎao', k: '나우', m: ["It's cold", '추워요'], n: ['Rare in Bangkok, but December nights in the hills can be chilly.', '방콕에서는 드문 말이지만, 12월 산간의 밤은 쌀쌀해요.'] },
    { th: 'สวยมาก', r: 'sǔai mâak', k: '쑤아이 막', m: ['Very beautiful', '정말 아름다워요'] },
    { th: 'เหนื่อย', r: 'nùeai', k: '느아이', m: ["I'm tired", '피곤해요'] },
    { th: 'สนุกมาก', r: 'sà-nùk mâak', k: '싸눅 막', m: ['So much fun', '정말 재미있어요'], n: ['sà-nùk, having fun, is a core Thai value.', 'sà-nùk(즐거움)은 태국 사람들이 아주 소중히 여기는 가치예요.'] },
    { th: 'ชอบมาก{P}', r: 'châwp mâak {p}', k: '첩 막 {k}', m: ['I really like it', '정말 좋아요'] }
  ],
  intro: ['Up on Doi Suthep, with the whole city below you, it is a good moment to say how you feel. Tap to hear each feeling.',
          '도시가 한눈에 내려다보이는 도이 수텝 위에서 내 기분을 말해 보기 좋은 순간이에요. 눌러서 들어 보세요.'],
  tip: ['Feelings and descriptions work just like verbs in Thai: no "I am" needed. nùeai on its own means "I am tired". Add mâak for "very", and mâi in front for "not": mâi nǎao, not cold.',
        '태국어에서 기분이나 상태를 나타내는 말은 동사처럼 써서 "나는 ~이다"가 필요 없어요. nùeai 하나로 "피곤해요"가 돼요. mâak을 붙이면 "아주", 앞에 mâi를 붙이면 "안": mâi nǎao, 안 추워요.'],
  choose: [
    { type: 'mean', say: 'สวยมาก', opts: [['Very beautiful', '정말 아름다워요'], ['So much fun', '정말 재미있어요'], ['Very delicious', '정말 맛있어요']], a: 0, why: ['sǔai is beautiful.', 'sǔai는 아름답다예요.'] },
    { type: 'hear', say: 'หนาว', opts: ['nǎao', 'ráwn', 'nùeai'], a: 0, why: ['nǎao, cold, rises.', 'nǎao(춥다)는 올라가는 성조예요.'] },
    { type: 'mean', say: 'เหนื่อย', opts: [["I'm tired", '피곤해요'], ["It's cold", '추워요'], ['I feel sick', '몸이 안 좋아요']], a: 0, why: ['nùeai, tired.', 'nùeai, 피곤해요.'] },
    { type: 'mean', say: 'สนุกมาก', opts: [['So much fun', '정말 재미있어요'], ['Very beautiful', '정말 아름다워요'], ['I really like it', '정말 좋아요']], a: 0, why: ['sà-nùk is fun.', 'sà-nùk은 재미있다예요.'] },
    { type: 'hear', say: 'ชอบมาก{P}', opts: ['châwp mâak {p}', 'sǔai mâak', 'sà-nùk mâak'], a: 0, why: ['châwp is to like.', 'châwp은 좋아하다예요.'] }
  ],
  speak: [1, 3, 4],
  fill: [
    { say: 'สวยมาก', parts: ['_', 'mâak'], a: ['sǔai'], opts: ['sǔai', 'nǎao', 'ráwn'] },
    { say: 'ไม่หนาว', parts: ['mâi', '_'], a: ['nǎao'], opts: ['nǎao', 'nùeai', 'sǔai'], m: ["It's not cold", '안 추워요'] },
    { say: 'ชอบมาก{P}', parts: ['_', 'mâak', '{p}'], a: ['châwp'], opts: ['châwp', 'sà-nùk', 'nùeai'] }
  ],
  note: ['Wat Phra That Doi Suthep sits on the mountain west of the city, reached by a staircase of over three hundred steps lined with mythical serpents. Locals say you have not really been to Chiang Mai until you have climbed it.',
         '왓 프라탓 도이 수텝은 도시 서쪽 산 위에 있고, 전설 속 뱀 나가가 양옆을 지키는 300개가 넘는 계단을 올라가야 해요. 현지 사람들은 이 계단을 오르지 않으면 치앙마이에 다녀온 게 아니라고 말해요.'],
  today: [1, 3, 4]
}
};
PT_LESSONS.phuket = {
1: {
  guide: 'mali',
  units: [
    { th: 'ทะเล', r: 'thá-lee', k: '탈레', m: ['the sea', '바다'] },
    { th: 'ชายหาด', r: 'chaai-hàat', k: '차이핫', m: ['beach', '해변'] },
    { th: 'เช่าร่มได้ไหม{Q}', r: 'châo rôm dâi mǎi {q}', k: '차오 롬 다이 마이 {k}', m: ['Can I rent an umbrella?', '파라솔 빌릴 수 있어요?'], n: ['châo, rent, from the Ayutthaya bicycles.', 'châo(빌리다)는 아유타야 자전거 과에서 배웠어요.'] },
    { th: 'ว่ายน้ำได้ไหม{Q}', r: 'wâai-náam dâi mǎi {q}', k: '와이남 다이 마이 {k}', m: ['Is it OK to swim?', '수영해도 돼요?'] },
    { th: 'คลื่นแรง', r: 'khlûen raeng', k: '클른 랭', m: ['The waves are strong', '파도가 세요'], n: ['If you hear this, stay out of the water.', '이 말을 들으면 물에 들어가지 마세요.'] }
  ],
  intro: ['From Bangkok, Phuket is a short flight south. Here is the language of the beach.',
          '방콕에서 남쪽으로 비행기를 조금만 타면 푸껫이에요. 해변에서 쓰는 말을 배워요.'],
  tip: ['Before swimming, look for flags on the beach. A red flag means no swimming, and lifeguards may call out khlûen raeng. When in doubt, ask wâai-náam dâi mǎi {q}.',
        '수영하기 전에 해변의 깃발을 보세요. 빨간 깃발은 수영 금지이고, 안전 요원이 khlûen raeng이라고 외칠 수도 있어요. 잘 모르겠으면 wâai-náam dâi mǎi {q}라고 물어요.'],
  choose: [
    { type: 'mean', say: 'คลื่นแรง', opts: [['The waves are strong', '파도가 세요'], ['The sea is beautiful', '바다가 예뻐요'], ["It's really hot", '정말 더워요']], a: 0, why: ['khlûen is a wave; raeng is strong.', 'khlûen은 파도, raeng은 세다예요.'] },
    { type: 'hear', say: 'ทะเล', opts: ['thá-lee', 'chaai-hàat', 'ruea'], a: 0, why: ['thá-lee, the sea.', 'thá-lee, 바다예요.'] },
    { type: 'mean', say: 'ว่ายน้ำได้ไหม{Q}', opts: [['Is it OK to swim?', '수영해도 돼요?'], ['Can I rent an umbrella?', '파라솔 빌릴 수 있어요?'], ['May I take a photo?', '사진 찍어도 돼요?']], a: 0, why: ['wâai-náam is to swim.', 'wâai-náam은 수영하다예요.'] },
    { type: 'hear', say: 'ชายหาด', opts: ['chaai-hàat', 'thá-lee', 'khlûen raeng'], a: 0, why: ['chaai-hàat, beach.', 'chaai-hàat, 해변이에요.'] },
    { type: 'mean', say: 'เช่าร่มได้ไหม{Q}', opts: [['Can I rent an umbrella?', '파라솔 빌릴 수 있어요?'], ["I'd like to rent a bicycle", '자전거를 빌리고 싶어요'], ['Can I pay by card?', '카드로 계산돼요?']], a: 0, why: ['rôm is an umbrella.', 'rôm은 우산, 파라솔이에요.'] }
  ],
  speak: [2, 3, 4],
  fill: [
    { say: 'ว่ายน้ำได้ไหม{Q}', parts: ['_', 'dâi', 'mǎi', '{q}'], a: ['wâai-náam'], opts: ['wâai-náam', 'thá-lee', 'châo'] },
    { say: 'คลื่นแรง', parts: ['khlûen', '_'], a: ['raeng'], opts: ['raeng', 'mâak', 'sǔai'] },
    { say: 'เช่าร่มได้ไหม{Q}', parts: ['châo', '_', 'dâi', 'mǎi', '{q}'], a: ['rôm'], opts: ['rôm', 'ruea', 'rót'] }
  ],
  note: ['Phuket\'s west coast beaches are calm from about November to April. From May to October the southwest monsoon brings big waves, and red flags are common, so check before you swim.',
         '푸껫 서쪽 해변은 대략 11월부터 4월까지 잔잔해요. 5월부터 10월까지는 남서 계절풍 때문에 파도가 높고 빨간 깃발이 자주 걸리니, 수영 전에 꼭 확인하세요.'],
  today: [0, 3, 4]
},
2: {
  guide: 'chang',
  units: [
    { th: 'เรือ', r: 'ruea', k: '르아', m: ['boat', '배'] },
    { th: 'ไปเกาะพีพี{P}', r: 'pai kàw phii-phii {p}', k: '빠이 꺼 피피 {k}', m: ['To Phi Phi Island, please', '피피섬에 가요'], n: ['kàw means island.', 'kàw는 섬이에요.'] },
    { th: 'เรือออกกี่โมง{Q}', r: 'ruea àwk kìi mohng {q}', k: '르아 억 끼 몽 {k}', m: ['What time does the boat leave?', '배는 몇 시에 출발해요?'] },
    { th: 'กลับกี่โมง{Q}', r: 'klàp kìi mohng {q}', k: '끌랍 끼 몽 {k}', m: ['What time do we come back?', '몇 시에 돌아와요?'] },
    { th: 'เมาเรือ{P}', r: 'mao ruea {p}', k: '마오 르아 {k}', m: ["I'm seasick", '배멀미가 나요'], n: ['mao means drunk or dizzy, so this is "boat-drunk".', 'mao는 취하다라서, 말 그대로 "배에 취했다"예요.'] }
  ],
  intro: ['Island hopping is the highlight of a trip south. Let us catch a boat.',
          '섬 투어는 남부 여행의 하이라이트예요. 배를 타러 가요.'],
  tip: ['You know àwk (depart) and klàp (return) from the Ayutthaya train. They work for boats, buses, and tours too. If the sea gets rough, mao ruea {p} will get you a seat in the middle of the boat, the steadiest spot.',
        'àwk(출발하다)과 klàp(돌아가다)은 아유타야 기차 과에서 배웠어요. 배, 버스, 투어에도 똑같이 써요. 바다가 거칠어지면 mao ruea {p}라고 해 보세요. 가장 덜 흔들리는 배 가운데 자리로 안내해 줄 거예요.'],
  choose: [
    { type: 'mean', say: 'เมาเรือ{P}', opts: [["I'm seasick", '배멀미가 나요'], ["I'm tired", '피곤해요'], ['I feel sick', '몸이 안 좋아요']], a: 0, why: ['mao ruea, boat-drunk: seasick.', 'mao ruea, 배멀미예요.'] },
    { type: 'hear', say: 'เรือออกกี่โมง{Q}', opts: ['ruea àwk kìi mohng {q}', 'klàp kìi mohng {q}', 'rót-fai àwk kìi mohng {q}'], a: 0, why: ['ruea, boat, not rót-fai, train.', 'rót-fai(기차)가 아니라 ruea(배)였어요.'] },
    { type: 'mean', say: 'กลับกี่โมง{Q}', opts: [['What time do we come back?', '몇 시에 돌아와요?'], ['What time does it open?', '몇 시에 열어요?'], ['What time does the boat leave?', '배는 몇 시에 출발해요?']], a: 0, why: ['klàp is to return.', 'klàp은 돌아오다예요.'] },
    { type: 'hear', say: 'ไปเกาะพีพี{P}', opts: ['pai kàw phii-phii {p}', 'pai wát phoo {p}', 'pai sà-yǎam {p}'], a: 0, why: ['kàw phii-phii, Phi Phi Island.', 'kàw phii-phii, 피피섬이에요.'] },
    { type: 'hear', say: 'เรือ', opts: ['ruea', 'rót', 'rôm'], a: 0, why: ['ruea, boat.', 'ruea, 배예요.'] }
  ],
  speak: [1, 2, 3, 4],
  fill: [
    { say: 'เรือออกกี่โมง{Q}', parts: ['_', 'àwk', 'kìi', 'mohng', '{q}'], a: ['ruea'], opts: ['ruea', 'rót-fai', 'rôm'] },
    { say: 'กลับกี่โมง{Q}', parts: ['_', 'kìi', 'mohng', '{q}'], a: ['klàp'], opts: ['klàp', 'àwk', 'pòet'] },
    { say: 'ไปเกาะพีพี{P}', parts: ['pai', '_', 'phii-phii', '{p}'], a: ['kàw'], opts: ['kàw', 'wát', 'rót'] }
  ],
  note: ['Ferries to the Phi Phi islands leave from Rassada Pier on Phuket\'s east side, and the crossing takes about two hours. Speedboat tours are faster but bumpier, so sit near the back if you get seasick.',
         '피피섬행 페리는 푸껫 동쪽의 랏사다 부두에서 떠나고, 두 시간쯤 걸려요. 스피드보트 투어는 빠르지만 더 많이 흔들리니, 멀미가 나면 뒤쪽에 앉으세요.'],
  today: [1, 2, 4]
},
3: {
  guide: 'mali',
  final: true,
  units: [
    { th: 'อาหารทะเล', r: 'aa-hǎan thá-lee', k: '아한 탈레', m: ['seafood', '해산물'], n: ['Literally "sea food", just like English.', '영어처럼 말 그대로 "바다 음식"이에요.'] },
    { th: 'กุ้ง', r: 'kûng', k: '꿍', m: ['shrimp', '새우'] },
    { th: 'ปู', r: 'puu', k: '뿌', m: ['crab', '게'] },
    { th: 'ปลา', r: 'plaa', k: '쁠라', m: ['fish', '생선'] },
    { th: 'กิโลละเท่าไหร่{Q}', r: 'kì-loo lá thâo-rài {q}', k: '끼로 라 타오라이 {k}', m: ['How much per kilo?', '1킬로에 얼마예요?'] },
    { th: 'ย่าง', r: 'yâang', k: '양', m: ['grilled', '구이'], n: ['Say the seafood, then how to cook it: kûng yâang, grilled shrimp.', '해산물 다음에 조리법을 붙여요. kûng yâang, 새우구이.'] }
  ],
  intro: ['At a seafood market, you pick your seafood, pay by the kilo, and a restaurant next door cooks it for you. Here is how to order.',
          '해산물 시장에서는 해산물을 골라 킬로로 값을 치르면, 바로 옆 식당에서 요리해 줘요. 주문하는 법을 배워요.'],
  tip: ['Remember lá from wan lá and khon lá? kì-loo lá means per kilo. Thai word order puts the main thing first and the description after: plaa yâang is grilled fish, kûng mâi phèt is shrimp, not spicy.',
        'wan lá, khon lá에서 배운 lá 기억나요? kì-loo lá는 킬로당이에요. 태국어는 중심 낱말을 먼저 말하고 꾸미는 말을 뒤에 붙여요. plaa yâang은 생선구이, kûng mâi phèt은 안 맵게 한 새우예요.'],
  choose: [
    { type: 'hear', say: 'กุ้ง', opts: ['kûng', 'puu', 'plaa'], a: 0, why: ['kûng, shrimp, with an unaspirated k like ㄲ.', 'kûng(새우)은 ㄲ 같은 된소리 k예요.'] },
    { type: 'mean', say: 'ปู', opts: [['crab', '게'], ['fish', '생선'], ['shrimp', '새우']], a: 0, why: ['puu, crab.', 'puu, 게예요.'] },
    { type: 'mean', say: 'กิโลละเท่าไหร่{Q}', opts: [['How much per kilo?', '1킬로에 얼마예요?'], ['How much per person?', '한 사람에 얼마예요?'], ['How much per day?', '하루에 얼마예요?']], a: 0, why: ['kì-loo lá: per kilo.', 'kì-loo lá, 킬로당이에요.'] },
    { type: 'mean', say: 'ปลาย่าง', opts: [['grilled fish', '생선구이'], ['grilled shrimp', '새우구이'], ['seafood', '해산물']], a: 0, why: ['plaa yâang: fish, grilled.', 'plaa yâang, 생선을 구운 것이에요.'] },
    { type: 'hear', say: 'อาหารทะเล', opts: ['aa-hǎan thá-lee', 'aa-hǎan cháo', 'chaai-hàat'], a: 0, why: ['aa-hǎan is food; thá-lee is the sea.', 'aa-hǎan은 음식, thá-lee는 바다예요.'] }
  ],
  speak: [1, 4, 5],
  fill: [
    { say: 'กุ้งย่าง', parts: ['kûng', '_'], a: ['yâang'], opts: ['yâang', 'mâak', 'raeng'], m: ['grilled shrimp', '새우구이'] },
    { say: 'กิโลละเท่าไหร่{Q}', parts: ['kì-loo', '_', 'thâo-rài', '{q}'], a: ['lá'], opts: ['lá', 'kìi', 'khon'] },
    { say: 'ปลาไม่เผ็ด', parts: ['_', 'mâi', 'phèt'], a: ['plaa'], opts: ['plaa', 'puu', 'kûng'], m: ['fish, not spicy', '안 맵게 한 생선'] }
  ],
  note: ['Rawai, at the southern tip of Phuket, has a small seafood market by the pier where you buy from the fishing families and have it cooked across the street. Afterwards, Promthep Cape nearby is the island\'s favorite sunset spot.',
         '푸껫 남쪽 끝 라와이에는 부두 옆 작은 해산물 시장이 있어서, 어부 가족에게 산 해산물을 길 건너 식당에서 요리해 먹을 수 있어요. 식사 후에는 근처 프롬텝 곶에서 섬에서 가장 사랑받는 노을을 보세요.'],
  today: [1, 4, 5]
}
};
