// 둘째 구간 수업 내용. 형식은 stretch-1-lessons.js 맨 위 설명과 같다.
window.PT_LESSONS = window.PT_LESSONS || {};
PT_LESSONS[2] = {
1: {
  guide: 'chang',
  units: [
    { th: 'ไปสยาม{P}', r: 'pai sà-yǎam {p}', k: '빠이 싸얌 {k}', m: ['To Siam, please', '시암으로 가 주세요'], n: ['pai means go. Say pai and the place, and you are on your way.', 'pai는 "가다"예요. pai 뒤에 장소만 붙이면 돼요.'] },
    { th: 'ไปโรงแรมนี้{P}', r: 'pai rohng-raem níi {p}', k: '빠이 롱램 니 {k}', m: ['To this hotel, please', '이 호텔로 가 주세요'], n: ['Show the address on your phone as you say níi, "this".', 'níi(이)라고 하면서 휴대전화의 주소를 보여 주세요.'] },
    { th: 'เปิดมิเตอร์ได้ไหม{Q}', r: 'pòet mí-tôe dâi mǎi {q}', k: '뻣 미떠 다이 마이 {k}', m: ['Could you turn on the meter?', '미터기 켜 주실 수 있어요?'] },
    { th: 'ตรงไป', r: 'trong pai', k: '뜨롱 빠이', m: ['Go straight', '직진해 주세요'] },
    { th: 'เลี้ยวซ้าย', r: 'líao sáai', k: '리아우 싸이', m: ['Turn left', '왼쪽으로 가 주세요'] },
    { th: 'เลี้ยวขวา', r: 'líao khwǎa', k: '리아우 콰', m: ['Turn right', '오른쪽으로 가 주세요'] },
    { th: 'จอดตรงนี้{P}', r: 'jàwt trong níi {p}', k: '쩟 뜨롱 니 {k}', m: ['Stop here, please', '여기 세워 주세요'] }
  ],
  intro: ['Welcome to the city. Time to leave the train and take a taxi or a Grab. A few short phrases are all you need to get where you are going.',
          '시내에 도착했어요. 이제 기차에서 내려 택시나 그랩을 탈 차례예요. 짧은 표현 몇 개면 원하는 곳까지 갈 수 있어요.'],
  tip: ['dâi mǎi at the end turns anything into a polite "could you?". You will use it all over Thailand. sáai (left) and khwǎa (right) differ in both sound and tone, so they are hard to mix up.',
        '문장 끝에 dâi mǎi(다이 마이)를 붙이면 "~해 주실 수 있어요?"라는 공손한 부탁이 돼요. 태국 어디서나 쓰게 될 거예요. sáai(왼쪽)와 khwǎa(오른쪽)는 소리도 성조도 달라서 헷갈릴 일이 적어요.'],
  choose: [
    { type: 'hear', say: 'เลี้ยวซ้าย', opts: ['líao sáai', 'líao khwǎa', 'trong pai'], a: 0, why: ['sáai, left, starts with an s.', 'sáai(왼쪽)는 s로 시작해요.'] },
    { type: 'hear', say: 'เลี้ยวขวา', opts: ['líao khwǎa', 'líao sáai', 'jàwt trong níi {p}'], a: 0, why: ['khwǎa, right, rises at the end.', 'khwǎa(오른쪽)는 끝이 올라가요.'] },
    { type: 'mean', say: 'จอดตรงนี้{P}', opts: [['Stop here, please', '여기 세워 주세요'], ['Go straight', '직진해 주세요'], ['To this hotel, please', '이 호텔로 가 주세요']], a: 0, why: ['jàwt is to park or stop; trong níi is right here.', 'jàwt은 "세우다", trong níi는 "바로 여기"예요.'] },
    { type: 'mean', say: 'เปิดมิเตอร์ได้ไหม{Q}', opts: [['Could you turn on the meter?', '미터기 켜 주실 수 있어요?'], ['Stop here, please', '여기 세워 주세요'], ['How much?', '얼마예요?']], a: 0, why: ['pòet is to open or switch on; mí-tôe is the meter.', 'pòet은 "켜다", mí-tôe는 미터기예요.'] },
    { type: 'mean', say: 'ตรงไป', opts: [['Go straight', '직진해 주세요'], ['Turn left', '왼쪽으로 가 주세요'], ['Turn right', '오른쪽으로 가 주세요']], a: 0, why: ['trong pai: go straight.', 'trong pai, 곧장 가요.'] },
    { type: 'hear', say: 'ไปสยาม{P}', opts: ['pai sà-yǎam {p}', 'pai rohng-raem níi {p}', 'jàwt trong níi {p}'], a: 0, why: ['pai sà-yǎam, to Siam.', 'pai sà-yǎam, 시암으로요.'] }
  ],
  speak: [0, 2, 4, 5, 6],
  fill: [
    { say: 'ไปสยาม{P}', parts: ['pai', '_', '{p}'], a: ['sà-yǎam'], opts: ['sà-yǎam', 'níi', 'sáai'] },
    { say: 'เลี้ยวขวา', parts: ['líao', '_'], a: ['khwǎa'], opts: ['khwǎa', 'sáai', 'pai'] },
    { say: 'เปิดมิเตอร์ได้ไหม{Q}', parts: ['pòet', 'mí-tôe', '_', 'mǎi', '{q}'], a: ['dâi'], opts: ['dâi', 'pai', 'níi'] },
    { say: 'จอดตรงนี้{P}', parts: ['jàwt', 'trong', '_', '{p}'], a: ['níi'], opts: ['níi', 'pai', 'khwǎa'] }
  ],
  note: ['Bangkok taxis come in pink, green, yellow, and orange, and they should run on the meter. If a driver offers a fixed price instead, a smile and mâi ao {p} (no thanks) is fine, and you can wait for the next one. Grab and Bolt show the fare before you ride.',
         '방콕 택시는 분홍, 초록, 노랑, 주황색이고 미터기로 가는 게 원칙이에요. 기사가 미터 대신 정해진 요금을 부르면 웃으며 mâi ao {p}(괜찮아요)라고 하고 다음 택시를 기다려도 돼요. 그랩과 볼트는 타기 전에 요금이 표시돼요.'],
  today: [0, 2, 6]
},
2: {
  guide: 'mali',
  units: [
    { th: 'ที่ไหน', r: 'thîi-nǎi', k: '티나이', m: ['where', '어디'] },
    { th: 'ห้องน้ำอยู่ที่ไหน{Q}', r: 'hâwng-náam yùu thîi-nǎi {q}', k: '헝남 유 티나이 {k}', m: ['Where is the restroom?', '화장실이 어디예요?'], n: ['hâwng-náam is literally "water room".', 'hâwng-náam은 말 그대로 "물 방"이에요.'] },
    { th: 'สถานีรถไฟฟ้าอยู่ที่ไหน{Q}', r: 'sà-thǎa-nii rót-fai-fáa yùu thîi-nǎi {q}', k: '싸타니 롯파이파 유 티나이 {k}', m: ['Where is the Skytrain station?', '지상철역이 어디예요?'] },
    { th: 'ใกล้ไหม{Q}', r: 'klâi mǎi {q}', k: '끌라이 마이 {k}', m: ['Is it near?', '가까워요?'], n: ['klâi, near, has a falling tone.', 'klâi(가깝다)는 떨어지는 성조예요.'] },
    { th: 'ไกล', r: 'klai', k: '끌라이', m: ["It's far", '멀어요'], n: ['klai, far, is flat. Only the tone separates near and far.', 'klai(멀다)는 평평해요. 가깝다와 멀다를 성조만으로 구별해요.'] },
    { th: 'อยู่ตรงนั้น', r: 'yùu trong nán', k: '유 뜨롱 난', m: ["It's over there", '저기 있어요'] }
  ],
  intro: ['Sukhumvit Road runs for miles, with Skytrain stations all along it. Today you learn to ask where things are, and to catch the answer.',
          '수쿰윗 거리는 끝없이 이어지고 그 위로 지상철역이 줄지어 있어요. 오늘은 무엇이 어디 있는지 묻고, 대답을 알아듣는 법을 배워요.'],
  tip: ['The pattern is simple: place + yùu thîi-nǎi? Put anything in front: the hotel, the restroom, the station. Then listen for trong níi (right here) or trong nán (over there), and watch where people point.',
        '틀은 간단해요. 장소 + yùu thîi-nǎi? 앞에 호텔, 화장실, 역 등 무엇이든 넣어요. 그리고 trong níi(바로 여기), trong nán(저기)을 듣고 손이 가리키는 쪽을 보세요.'],
  choose: [
    { type: 'hear', say: 'ใกล้', opts: ['klâi', 'klai'], a: 0, why: ['The voice fell: klâi, near.', '소리가 떨어졌어요. klâi, 가까워요.'] },
    { type: 'hear', say: 'ไกล', opts: ['klai', 'klâi'], a: 0, why: ['The voice stayed flat: klai, far.', '소리가 평평했어요. klai, 멀어요.'] },
    { type: 'mean', say: 'ห้องน้ำอยู่ที่ไหน{Q}', opts: [['Where is the restroom?', '화장실이 어디예요?'], ['Where is the station?', '역이 어디예요?'], ['Is it near?', '가까워요?']], a: 0, why: ['hâwng-náam, the water room: the restroom.', 'hâwng-náam, 물 방은 화장실이에요.'] },
    { type: 'mean', say: 'อยู่ตรงนั้น', opts: [["It's over there", '저기 있어요'], ['Stop here, please', '여기 세워 주세요'], ['Go straight', '직진해 주세요']], a: 0, why: ['trong nán, over there. trong níi would be right here.', 'trong nán은 저기, trong níi는 바로 여기예요.'] },
    { type: 'hear', say: 'ที่ไหน', opts: ['thîi-nǎi', 'trong nán', 'klai'], a: 0, why: ['thîi-nǎi, where.', 'thîi-nǎi, 어디예요.'] },
    { type: 'mean', say: 'สถานีรถไฟฟ้าอยู่ที่ไหน{Q}', opts: [['Where is the Skytrain station?', '지상철역이 어디예요?'], ['Where is the restroom?', '화장실이 어디예요?'], ['Is it far?', '멀어요?']], a: 0, why: ['sà-thǎa-nii is station; rót-fai-fáa is the Skytrain.', 'sà-thǎa-nii는 역, rót-fai-fáa는 지상철이에요.'] }
  ],
  speak: [1, 2, 3, 5],
  fill: [
    { say: 'ห้องน้ำอยู่ที่ไหน{Q}', parts: ['hâwng-náam', 'yùu', '_', '{q}'], a: ['thîi-nǎi'], opts: ['thîi-nǎi', 'trong', 'klai'] },
    { say: 'ใกล้ไหม{Q}', parts: ['_', 'mǎi', '{q}'], a: ['klâi'], opts: ['klâi', 'klai', 'nán'] },
    { say: 'อยู่ตรงนั้น', parts: ['yùu', 'trong', '_'], a: ['nán'], opts: ['nán', 'níi', 'pai'] },
    { say: 'สถานีรถไฟฟ้าอยู่ที่ไหน{Q}', parts: ['sà-thǎa-nii', '_', 'yùu', 'thîi-nǎi', '{q}'], a: ['rót-fai-fáa'], opts: ['rót-fai-fáa', 'hâwng-náam', 'rohng-raem'] }
  ],
  note: ['Bangkok has two kinds of city rail: the BTS Skytrain above the streets and the MRT subway below them. Thais call the Skytrain rót-fai-fáa, "electric train". Ticket machines have English, and on the MRT you can tap a contactless bank card at the gate.',
         '방콕 도시철도는 도로 위를 달리는 BTS 지상철과 땅속을 달리는 MRT 지하철로 나뉘어요. 태국 사람들은 지상철을 rót-fai-fáa(전기 기차)라고 불러요. 발권기는 영어를 지원하고, MRT는 개찰구에 비접촉식 카드를 대고 탈 수 있어요.'],
  today: [1, 3, 5]
},
3: {
  guide: 'mali',
  units: [
    { th: 'ขอเมนูหน่อย{P}', r: 'khǎw mee-nuu nòi {p}', k: '커 메누 너이 {k}', m: ['The menu, please', '메뉴판 좀 주세요'], n: ['khǎw ... nòi is the polite frame for asking for something.', 'khǎw ... nòi는 무언가를 달라고 할 때 쓰는 공손한 틀이에요.'] },
    { th: 'เอาอันนี้{P}', r: 'ao an-níi {p}', k: '아오 안니 {k}', m: ["I'll have this one", '이걸로 할게요'], n: ['Point at the picture as you say it.', '사진을 가리키며 말해요.'] },
    { th: 'ผัดไทยหนึ่งจาน', r: 'phàt-thai nùeng jaan', k: '팟타이 능 짠', m: ['One plate of pad thai', '팟타이 한 접시'] },
    { th: 'น้ำเปล่า', r: 'náam-plào', k: '남쁠라오', m: ['plain water', '생수'] },
    { th: 'อร่อยมาก', r: 'a-ròi mâak', k: '아러이 막', m: ['Very delicious', '정말 맛있어요'], n: ['The compliment every cook loves to hear.', '요리하는 사람이 가장 듣고 싶은 말이에요.'] },
    { th: 'เช็คบิลด้วย{P}', r: 'chék-bin dûai {p}', k: '첵빈 두아이 {k}', m: ['The bill, please', '계산서 주세요'] }
  ],
  intro: ["Yaowarat, Bangkok's Chinatown, turns into one long street food feast at night. Learn to order, and to say how good it was.",
          '방콕 차이나타운 야오와랏은 밤마다 길거리 음식 잔치가 열려요. 주문하는 법과 맛있다고 말하는 법을 배워요.'],
  tip: ['Order like this: food + number + counter. phàt-thai nùeng jaan is "pad thai, one, plate". jaan is a plate; for drinks, say khùat (bottle) or kâew (glass). And khǎw ... nòi works for anything: khǎw náam-plào nòi, some water please.',
        '주문 순서는 음식 + 숫자 + 단위예요. phàt-thai nùeng jaan은 "팟타이 하나 접시"예요. jaan은 접시, 음료는 khùat(병)이나 kâew(잔)를 써요. khǎw ... nòi는 무엇에나 쓸 수 있어요. khǎw náam-plào nòi, 물 좀 주세요.'],
  choose: [
    { type: 'mean', say: 'อร่อยมาก', opts: [['Very delicious', '정말 맛있어요'], ['Very expensive', '정말 비싸요'], ['Thank you very much', '정말 고마워요']], a: 0, why: ['a-ròi is delicious, mâak is very.', 'a-ròi는 맛있다, mâak은 아주예요.'] },
    { type: 'mean', say: 'เช็คบิลด้วย{P}', opts: [['The bill, please', '계산서 주세요'], ['The menu, please', '메뉴판 좀 주세요'], ["I'll have this one", '이걸로 할게요']], a: 0, why: ['chék-bin comes from English "check" and "bill".', 'chék-bin은 영어 check와 bill에서 왔어요.'] },
    { type: 'hear', say: 'เอาอันนี้{P}', opts: ['ao an-níi {p}', 'khǎw mee-nuu nòi {p}', 'a-ròi mâak'], a: 0, why: ['ao an-níi, I will take this one.', 'ao an-níi, 이걸로 할게요.'] },
    { type: 'mean', say: 'น้ำเปล่า', opts: [['plain water', '생수'], ['pad thai', '팟타이'], ['menu', '메뉴판']], a: 0, why: ['náam is water; plào means plain.', 'náam은 물, plào는 "아무것도 넣지 않은"이에요.'] },
    { type: 'mean', say: 'ผัดไทยสองจาน', opts: [['Two plates of pad thai', '팟타이 두 접시'], ['One plate of pad thai', '팟타이 한 접시'], ['Three plates of pad thai', '팟타이 세 접시']], a: 0, why: ['sǎwng jaan, two plates.', 'sǎwng jaan, 두 접시예요.'] },
    { type: 'mean', say: 'ขอเมนูหน่อย{P}', opts: [['The menu, please', '메뉴판 좀 주세요'], ['The bill, please', '계산서 주세요'], ['Some water, please', '물 좀 주세요']], a: 0, why: ['khǎw mee-nuu nòi, the menu please.', 'khǎw mee-nuu nòi, 메뉴판 좀 주세요.'] }
  ],
  speak: [0, 1, 4, 5],
  fill: [
    { say: 'ขอเมนูหน่อย{P}', parts: ['khǎw', '_', 'nòi', '{p}'], a: ['mee-nuu'], opts: ['mee-nuu', 'an-níi', 'jaan'] },
    { say: 'ผัดไทยสองจาน', parts: ['phàt-thai', '_', 'jaan'], a: ['sǎwng'], opts: ['sǎwng', 'sǎam', 'nùeng'], m: ['Two plates of pad thai', '팟타이 두 접시'] },
    { say: 'อร่อยมาก', parts: ['a-ròi', '_'], a: ['mâak'], opts: ['mâak', 'nòi', 'dûai'] },
    { say: 'เช็คบิลด้วย{P}', parts: ['chék-bin', '_', '{p}'], a: ['dûai'], opts: ['dûai', 'mâak', 'níi'] }
  ],
  note: ['On Yaowarat, look for the stalls with the longest lines of locals. Many vendors cook one dish only and have done so for decades. A good first night: kuai-tiao (noodle soup), then khâo-nǐao má-mûang, mango sticky rice, for dessert.',
         '야오와랏에서는 현지인 줄이 가장 긴 노점을 찾아보세요. 한 가지 음식만 수십 년째 만드는 가게가 많아요. 첫날 밤이라면 꾸어이띠아오(쌀국수)를 먹고, 디저트로 khâo-nǐao má-mûang(망고 찹쌀밥)을 먹어 보세요.'],
  today: [0, 4, 5]
},
4: {
  guide: 'chang',
  units: [
    { th: 'เผ็ดไหม{Q}', r: 'phèt mǎi {q}', k: '펫 마이 {k}', m: ['Is it spicy?', '매워요?'] },
    { th: 'ไม่เผ็ด{P}', r: 'mâi phèt {p}', k: '마이 펫 {k}', m: ['Not spicy, please', '안 맵게 해 주세요'] },
    { th: 'เผ็ดนิดหน่อย', r: 'phèt nít-nòi', k: '펫 닛너이', m: ['A little spicy', '조금만 맵게'] },
    { th: 'กินเผ็ดไม่ได้{P}', r: 'kin phèt mâi dâi {p}', k: '낀 펫 마이 다이 {k}', m: ["I can't eat spicy food", '매운 걸 못 먹어요'] },
    { th: 'ไม่ใส่ผักชี{P}', r: 'mâi sài phàk-chii {p}', k: '마이 싸이 팍치 {k}', m: ['No cilantro, please', '고수 빼 주세요'], n: ['mâi sài means "do not put in". Any ingredient can follow.', 'mâi sài는 "넣지 마세요"예요. 뒤에 어떤 재료든 넣을 수 있어요.'] },
    { th: 'แพ้ถั่ว{P}', r: 'pháe thùa {p}', k: '패 투아 {k}', m: ["I'm allergic to nuts", '견과류 알레르기가 있어요'], n: ['pháe means allergic. For a serious allergy, also show it written down.', 'pháe는 알레르기가 있다는 뜻이에요. 심한 알레르기라면 글로 써서 함께 보여 주세요.'] }
  ],
  intro: ['Thai food can be very spicy, and "a little spicy" in Thailand can still be a lot. These phrases help you eat on your own terms.',
          '태국 음식은 아주 매울 수 있고, 태국에서 말하는 "조금 매운 맛"도 꽤 매워요. 이 표현들로 내 입맛대로 먹어요.'],
  tip: ['phèt, spicy, has a low tone. Be careful with mâi phèt: if the mâi gets lost, you may get extra chilies. mâi sài works for anything you want left out: mâi sài phàk-chii (no cilantro), mâi sài náam-taan (no sugar).',
        'phèt(맵다)은 낮은 성조예요. mâi phèt에서 mâi가 빠지면 오히려 고추가 더 들어올 수 있어요. mâi sài는 빼고 싶은 무엇에나 써요. mâi sài phàk-chii(고수 빼고), mâi sài náam-taan(설탕 빼고).'],
  choose: [
    { type: 'mean', say: 'ไม่เผ็ด{P}', opts: [['Not spicy, please', '안 맵게 해 주세요'], ['Very spicy', '아주 맵게'], ['Is it spicy?', '매워요?']], a: 0, why: ['mâi in front: not spicy.', '앞에 mâi가 있으니 안 맵게예요.'] },
    { type: 'mean', say: 'เผ็ดไหม{Q}', opts: [['Is it spicy?', '매워요?'], ['Not spicy, please', '안 맵게 해 주세요'], ['A little spicy', '조금만 맵게']], a: 0, why: ['mǎi at the end makes the question.', '끝의 mǎi가 질문을 만들어요.'] },
    { type: 'hear', say: 'ไม่ใส่ผักชี{P}', opts: ['mâi sài phàk-chii {p}', 'mâi phèt {p}', 'pháe thùa {p}'], a: 0, why: ['phàk-chii is cilantro.', 'phàk-chii가 고수예요.'] },
    { type: 'mean', say: 'แพ้ถั่ว{P}', opts: [["I'm allergic to nuts", '견과류 알레르기가 있어요'], ['No cilantro, please', '고수 빼 주세요'], ["I can't eat spicy food", '매운 걸 못 먹어요']], a: 0, why: ['pháe is allergic; thùa is nuts or beans.', 'pháe는 알레르기, thùa는 견과류나 콩이에요.'] },
    { type: 'mean', say: 'เผ็ดนิดหน่อย', opts: [['A little spicy', '조금만 맵게'], ['Very spicy', '아주 맵게'], ['Not spicy', '안 맵게']], a: 0, why: ['nít-nòi is a little bit.', 'nít-nòi는 "조금"이에요.'] },
    { type: 'hear', say: 'กินเผ็ดไม่ได้{P}', opts: ['kin phèt mâi dâi {p}', 'phèt nít-nòi', 'mâi phèt {p}'], a: 0, why: ['kin is eat; mâi dâi at the end is cannot.', 'kin은 먹다, 끝의 mâi dâi는 "못 해요"예요.'] }
  ],
  speak: [0, 1, 3, 4, 5],
  fill: [
    { say: 'ไม่เผ็ด{P}', parts: ['_', 'phèt', '{p}'], a: ['mâi'], opts: ['mâi', 'nít', 'sài'] },
    { say: 'ไม่ใส่ผักชี{P}', parts: ['mâi', '_', 'phàk-chii', '{p}'], a: ['sài'], opts: ['sài', 'phèt', 'dâi'] },
    { say: 'เผ็ดนิดหน่อย', parts: ['phèt', '_'], a: ['nít-nòi'], opts: ['nít-nòi', 'mǎi', 'mâak'] },
    { say: 'แพ้ถั่ว{P}', parts: ['_', 'thùa', '{p}'], a: ['pháe'], opts: ['pháe', 'kin', 'sài'] }
  ],
  note: ['Bang Rak, along the Chao Phraya River, is one of the oldest foreign quarters in Bangkok, with old trading houses and famous roast duck shops. Most tables have a caddy of four condiments: dried chili, fish sauce, sugar, and vinegar with chilies, so you can tune any dish yourself.',
         '짜오프라야강을 따라 있는 방락은 방콕에서 가장 오래된 외국인 거리 중 하나로, 옛 무역상 건물과 이름난 오리구이 가게가 있어요. 식탁마다 마른 고추, 피시 소스, 설탕, 고추 식초 네 가지 양념통이 있어서 맛을 직접 조절할 수 있어요.'],
  today: [1, 3, 4]
},
5: {
  guide: 'mali',
  units: [
    { th: 'อันนี้เท่าไหร่{Q}', r: 'an-níi thâo-rài {q}', k: '안니 타오라이 {k}', m: ['How much is this?', '이거 얼마예요?'] },
    { th: 'ขอดูหน่อย{P}', r: 'khǎw duu nòi {p}', k: '커 두 너이 {k}', m: ['May I take a look?', '좀 봐도 될까요?'] },
    { th: 'แพงไป', r: 'phaeng pai', k: '팽 빠이', m: ['Too expensive', '너무 비싸요'], n: ['pai after a describing word means "too".', '형용사 뒤의 pai는 "너무"라는 뜻이에요.'] },
    { th: 'ลดได้ไหม{Q}', r: 'lót dâi mǎi {q}', k: '롯 다이 마이 {k}', m: ['Could you lower the price?', '깎아 주실 수 있어요?'] },
    { th: 'ไม่เอา{P}', r: 'mâi ao {p}', k: '마이 아오 {k}', m: ["No thanks, I'll pass", '괜찮아요, 안 살게요'] },
    { th: 'จ่ายด้วยบัตรได้ไหม{Q}', r: 'jàai dûai bàt dâi mǎi {q}', k: '짜이 두아이 밧 다이 마이 {k}', m: ['Can I pay by card?', '카드로 계산돼요?'] }
  ],
  intro: ['Chatuchak Weekend Market has thousands of stalls. Bargaining is normal at markets, as long as you keep it friendly.',
          '짜뚜짝 주말 시장에는 가게가 수천 곳이에요. 시장에서 흥정은 자연스러운 일이에요. 웃으며 기분 좋게만 하면 돼요.'],
  tip: ['A friendly bargain goes like this: an-níi thâo-rài? Then, smiling, phaeng pai, lót dâi mǎi? If the price still is not right, mâi ao {p} with a smile is a perfectly polite way to walk on. Shopping malls and convenience stores have fixed prices, so keep bargaining for markets.',
        '기분 좋은 흥정은 이렇게 해요. an-níi thâo-rài? 그리고 웃으며 phaeng pai, lót dâi mǎi? 그래도 가격이 안 맞으면 웃으며 mâi ao {p}라고 하고 지나가도 전혀 무례하지 않아요. 쇼핑몰과 편의점은 정가라서 흥정은 시장에서만 해요.'],
  choose: [
    { type: 'mean', say: 'แพงไป', opts: [['Too expensive', '너무 비싸요'], ['Very delicious', '정말 맛있어요'], ['Too far', '너무 멀어요']], a: 0, why: ['phaeng is expensive; pai adds "too".', 'phaeng은 비싸다, pai가 "너무"를 더해요.'] },
    { type: 'mean', say: 'ลดได้ไหม{Q}', opts: [['Could you lower the price?', '깎아 주실 수 있어요?'], ['Can I pay by card?', '카드로 계산돼요?'], ['May I take a look?', '좀 봐도 될까요?']], a: 0, why: ['lót means to reduce.', 'lót은 "줄이다, 깎다"예요.'] },
    { type: 'hear', say: 'อันนี้เท่าไหร่{Q}', opts: ['an-níi thâo-rài {q}', 'ao an-níi {p}', 'khǎw duu nòi {p}'], a: 0, why: ['an-níi thâo-rài, how much is this one?', 'an-níi thâo-rài, 이거 얼마예요?'] },
    { type: 'mean', say: 'ไม่เอา{P}', opts: [["No thanks, I'll pass", '괜찮아요, 안 살게요'], ["I'll have this one", '이걸로 할게요'], ['May I take a look?', '좀 봐도 될까요?']], a: 0, why: ['ao is to want or take; mâi ao is no thanks.', 'ao는 "원하다, 가지다", mâi ao는 "괜찮아요, 안 할게요"예요.'] },
    { type: 'mean', say: 'จ่ายด้วยบัตรได้ไหม{Q}', opts: [['Can I pay by card?', '카드로 계산돼요?'], ['Could you lower the price?', '깎아 주실 수 있어요?'], ['How much is this?', '이거 얼마예요?']], a: 0, why: ['jàai is pay, bàt is card.', 'jàai는 내다, bàt은 카드예요.'] },
    { type: 'mean', say: 'สองร้อยบาท', opts: [['200 baht', '200밧'], ['2,000 baht', '2,000밧'], ['20 baht', '20밧']], a: 0, why: ['sǎwng rói, two hundred.', 'sǎwng rói, 이백이에요.'] }
  ],
  speak: [0, 2, 3, 4],
  fill: [
    { say: 'อันนี้เท่าไหร่{Q}', parts: ['an-níi', '_', '{q}'], a: ['thâo-rài'], opts: ['thâo-rài', 'phaeng', 'duu'] },
    { say: 'แพงไป', parts: ['phaeng', '_'], a: ['pai'], opts: ['pai', 'mâak', 'nòi'] },
    { say: 'ลดได้ไหม{Q}', parts: ['_', 'dâi', 'mǎi', '{q}'], a: ['lót'], opts: ['lót', 'ao', 'duu'] },
    { say: 'ไม่เอา{P}', parts: ['mâi', '_', '{p}'], a: ['ao'], opts: ['ao', 'lót', 'pai'] }
  ],
  note: ['Chatuchak opens on weekends and gets hot by midday, so go early and carry water. Many stalls take QR payments from Thai banking apps, but cash is still the safest bet for small buys.',
         '짜뚜짝은 주말에 열고 한낮에는 무척 더우니 일찍 가서 물을 챙기세요. 태국 은행 앱 QR 결제를 받는 가게가 많지만, 작은 물건은 여전히 현금이 가장 확실해요.'],
  today: [0, 2, 3]
},
6: {
  guide: 'chang',
  units: [
    { th: 'จองไว้แล้ว{P}', r: 'jawng wái láew {p}', k: '쩡 와이 래우 {k}', m: ['I have a reservation', '예약했어요'], n: ['láew means already: "booked already".', 'láew는 "이미"라는 뜻이라 "이미 예약해 뒀어요"예요.'] },
    { th: 'รหัสไวไฟคืออะไร{Q}', r: 'rá-hàt wai-fai khue a-rai {q}', k: '라핫 와이파이 크 아라이 {k}', m: ["What's the Wi-Fi password?", '와이파이 비밀번호가 뭐예요?'] },
    { th: 'อาหารเช้ากี่โมง{Q}', r: 'aa-hǎan cháo kìi mohng {q}', k: '아한 차오 끼 몽 {k}', m: ['What time is breakfast?', '아침 식사는 몇 시예요?'] },
    { th: 'ฝากกระเป๋าได้ไหม{Q}', r: 'fàak krà-pǎo dâi mǎi {q}', k: '팍 끄라빠오 다이 마이 {k}', m: ['Can I leave my bag here?', '가방 맡길 수 있어요?'] },
    { th: 'แอร์เสีย{P}', r: 'ae sǐa {p}', k: '애 씨아 {k}', m: ['The air conditioner is broken', '에어컨이 고장 났어요'] },
    { th: 'เช็คเอาท์กี่โมง{Q}', r: 'chék-áo kìi mohng {q}', k: '첵아오 끼 몽 {k}', m: ['What time is check-out?', '체크아웃은 몇 시예요?'] }
  ],
  intro: ['Silom is a business district full of hotels, many close to conference venues. Here is what you need at the front desk.',
          '실롬은 호텔이 많은 업무 지구로, 학회장과 가까운 곳도 많아요. 프런트에서 필요한 말을 배워요.'],
  tip: ['kìi mohng means "what time", and a-rai means "what". Add dâi mǎi from the taxi lesson and you can ask most front desk questions. Many hotel words come from English: chék-in, chék-áo, wai-fai, and ae for the air conditioner.',
        'kìi mohng은 "몇 시", a-rai는 "무엇"이에요. 택시 과에서 배운 dâi mǎi까지 더하면 프런트에서 웬만한 질문은 다 할 수 있어요. 호텔 낱말은 영어에서 온 말이 많아요. chék-in, chék-áo, wai-fai, 그리고 에어컨은 ae예요.'],
  choose: [
    { type: 'mean', say: 'รหัสไวไฟคืออะไร{Q}', opts: [["What's the Wi-Fi password?", '와이파이 비밀번호가 뭐예요?'], ['What time is breakfast?', '아침 식사는 몇 시예요?'], ['I have a reservation', '예약했어요']], a: 0, why: ['rá-hàt is a code or password.', 'rá-hàt은 비밀번호예요.'] },
    { type: 'mean', say: 'จองไว้แล้ว{P}', opts: [['I have a reservation', '예약했어요'], ['The air conditioner is broken', '에어컨이 고장 났어요'], ['Can I leave my bag here?', '가방 맡길 수 있어요?']], a: 0, why: ['jawng is to book.', 'jawng은 예약하다예요.'] },
    { type: 'hear', say: 'อาหารเช้ากี่โมง{Q}', opts: ['aa-hǎan cháo kìi mohng {q}', 'chék-áo kìi mohng {q}', 'ae sǐa {p}'], a: 0, why: ['aa-hǎan cháo is breakfast, the morning meal.', 'aa-hǎan cháo는 아침 식사예요.'] },
    { type: 'mean', say: 'ฝากกระเป๋าได้ไหม{Q}', opts: [['Can I leave my bag here?', '가방 맡길 수 있어요?'], ['Can I pay by card?', '카드로 계산돼요?'], ['What time is check-out?', '체크아웃은 몇 시예요?']], a: 0, why: ['fàak is to leave something in someone\'s care; krà-pǎo is a bag.', 'fàak은 맡기다, krà-pǎo는 가방이에요.'] },
    { type: 'mean', say: 'แอร์เสีย{P}', opts: [['The air conditioner is broken', '에어컨이 고장 났어요'], ['Too expensive', '너무 비싸요'], ["What's the Wi-Fi password?", '와이파이 비밀번호가 뭐예요?']], a: 0, why: ['sǐa means broken.', 'sǐa는 고장 났다는 뜻이에요.'] },
    { type: 'hear', say: 'เช็คเอาท์กี่โมง{Q}', opts: ['chék-áo kìi mohng {q}', 'aa-hǎan cháo kìi mohng {q}', 'jawng wái láew {p}'], a: 0, why: ['chék-áo, check-out.', 'chék-áo, 체크아웃이에요.'] }
  ],
  speak: [0, 1, 3, 5],
  fill: [
    { say: 'จองไว้แล้ว{P}', parts: ['jawng', 'wái', '_', '{p}'], a: ['láew'], opts: ['láew', 'a-rai', 'mohng'] },
    { say: 'อาหารเช้ากี่โมง{Q}', parts: ['aa-hǎan', 'cháo', '_', 'mohng', '{q}'], a: ['kìi'], opts: ['kìi', 'láew', 'dâi'] },
    { say: 'รหัสไวไฟคืออะไร{Q}', parts: ['rá-hàt', 'wai-fai', 'khue', '_', '{q}'], a: ['a-rai'], opts: ['a-rai', 'kìi', 'sǐa'] },
    { say: 'แอร์เสีย{P}', parts: ['ae', '_', '{p}'], a: ['sǐa'], opts: ['sǐa', 'láew', 'dâi'] }
  ],
  note: ['Thai hotel staff are famously gracious. A smile and khàwp-khun {p} at the desk go a long way, and a small tip for whoever carries your bags, around 20 to 50 baht, is appreciated.',
         '태국 호텔 직원들은 친절하기로 유명해요. 프런트에서 웃으며 khàwp-khun {p}이라고 하면 좋고, 짐을 옮겨 준 직원에게 20에서 50밧 정도 팁을 주면 고마워해요.'],
  today: [0, 1, 3]
},
7: {
  guide: 'chang',
  units: [
    { th: 'ช่วยด้วย', r: 'chûai dûai', k: '추아이 두아이', m: ['Help!', '도와주세요!'] },
    { th: 'ไม่สบาย{P}', r: 'mâi sà-baai {p}', k: '마이 싸바이 {k}', m: ['I feel sick', '몸이 안 좋아요'], n: ['The opposite of sà-baai-dii from your first lesson.', '첫 과에서 배운 sà-baai-dii의 반대예요.'] },
    { th: 'ปวดหัว{P}', r: 'pùat hǔa {p}', k: '뿌앗 후아 {k}', m: ['I have a headache', '머리가 아파요'] },
    { th: 'ปวดท้อง{P}', r: 'pùat tháwng {p}', k: '뿌앗 텅 {k}', m: ['I have a stomachache', '배가 아파요'] },
    { th: 'ร้านขายยาอยู่ที่ไหน{Q}', r: 'ráan khǎai yaa yùu thîi-nǎi {q}', k: '란 카이 야 유 티나이 {k}', m: ['Where is a pharmacy?', '약국이 어디예요?'], n: ['Literally "shop that sells medicine".', '말 그대로 "약을 파는 가게"예요.'] },
    { th: 'ไปโรงพยาบาล{P}', r: 'pai rohng-phá-yaa-baan {p}', k: '빠이 롱파야반 {k}', m: ['To the hospital, please', '병원으로 가 주세요'] }
  ],
  intro: ['Nobody plans to get sick on a trip, but it helps to have these ready. Tap to hear each one.',
          '여행 중에 아플 계획은 없지만, 미리 알아 두면 든든해요. 하나씩 눌러 들어 보세요.'],
  tip: ['pùat means ache. Put the body part after it: pùat hǔa (head), pùat tháwng (stomach). Pharmacies are everywhere in Bangkok, and many pharmacists speak some English.',
        'pùat은 "아프다, 쑤시다"예요. 뒤에 몸 부위를 붙여요. pùat hǔa(머리), pùat tháwng(배). 방콕에는 약국이 아주 많고, 영어를 조금 하는 약사도 많아요.'],
  choose: [
    { type: 'mean', say: 'ช่วยด้วย', opts: [['Help!', '도와주세요!'], ['I feel sick', '몸이 안 좋아요'], ['Stop here, please', '여기 세워 주세요']], a: 0, why: ['chûai dûai, help!', 'chûai dûai, 도와주세요!'] },
    { type: 'mean', say: 'ปวดหัว{P}', opts: [['I have a headache', '머리가 아파요'], ['I have a stomachache', '배가 아파요'], ['I feel sick', '몸이 안 좋아요']], a: 0, why: ['hǔa is the head.', 'hǔa가 머리예요.'] },
    { type: 'hear', say: 'ปวดท้อง{P}', opts: ['pùat tháwng {p}', 'pùat hǔa {p}', 'mâi sà-baai {p}'], a: 0, why: ['tháwng is the stomach.', 'tháwng이 배예요.'] },
    { type: 'mean', say: 'ร้านขายยาอยู่ที่ไหน{Q}', opts: [['Where is a pharmacy?', '약국이 어디예요?'], ['Where is the restroom?', '화장실이 어디예요?'], ['To the hospital, please', '병원으로 가 주세요']], a: 0, why: ['ráan khǎai yaa, the shop that sells medicine.', 'ráan khǎai yaa, 약을 파는 가게예요.'] },
    { type: 'mean', say: 'ไปโรงพยาบาล{P}', opts: [['To the hospital, please', '병원으로 가 주세요'], ['To this hotel, please', '이 호텔로 가 주세요'], ['Where is a pharmacy?', '약국이 어디예요?']], a: 0, why: ['rohng-phá-yaa-baan is a hospital.', 'rohng-phá-yaa-baan은 병원이에요.'] },
    { type: 'hear', say: 'ไม่สบาย{P}', opts: ['mâi sà-baai {p}', 'sà-baai-dii {p}', 'mâi phèt {p}'], a: 0, why: ['mâi in front: not well.', '앞에 mâi가 있으니 몸이 안 좋다는 말이에요.'] }
  ],
  speak: [0, 1, 2, 4, 5],
  fill: [
    { say: 'ปวดหัว{P}', parts: ['pùat', '_', '{p}'], a: ['hǔa'], opts: ['hǔa', 'tháwng', 'yaa'] },
    { say: 'ไม่สบาย{P}', parts: ['mâi', '_', '{p}'], a: ['sà-baai'], opts: ['sà-baai', 'phèt', 'dâi'] },
    { say: 'ร้านขายยาอยู่ที่ไหน{Q}', parts: ['ráan', 'khǎai', '_', 'yùu', 'thîi-nǎi', '{q}'], a: ['yaa'], opts: ['yaa', 'hǔa', 'náam'] },
    { say: 'ช่วยด้วย', parts: ['chûai', '_'], a: ['dûai'], opts: ['dûai', 'pai', 'nòi'] }
  ],
  note: ['Save two numbers in your phone: 1155 for the Tourist Police, who speak English, and 1669 for an ambulance. Khao San Road, the backpacker street, is lively all night and a good place to practice: many vendors are happy to chat in Thai.',
         '휴대전화에 두 번호를 저장해 두세요. 영어가 통하는 관광 경찰 1155, 응급 구조 1669예요. 배낭여행자 거리인 카오산 로드는 밤새 북적여서 연습하기 좋아요. 태국어로 말을 걸면 반가워하는 상인이 많아요.'],
  today: [0, 2, 4]
},
8: {
  guide: 'mali',
  final: true,
  chooseTitle: ['Pick what you heard', '들은 말 고르기'],
  units: [
    { th: 'ไปวัดโพธิ์{P}', r: 'pai wát phoo {p}', k: '빠이 왓 포 {k}', m: ['To Wat Pho, please', '왓포로 가 주세요'], n: ['Lesson 1, with a new place.', '1과 표현에 새 장소를 넣었어요.'] },
    { th: 'ห้องน้ำอยู่ที่ไหน{Q}', r: 'hâwng-náam yùu thîi-nǎi {q}', k: '헝남 유 티나이 {k}', m: ['Where is the restroom?', '화장실이 어디예요?'], n: ['Lesson 2', '2과'] },
    { th: 'ไม่เผ็ด{P}', r: 'mâi phèt {p}', k: '마이 펫 {k}', m: ['Not spicy, please', '안 맵게 해 주세요'], n: ['Lesson 4', '4과'] },
    { th: 'ลดได้ไหม{Q}', r: 'lót dâi mǎi {q}', k: '롯 다이 마이 {k}', m: ['Could you lower the price?', '깎아 주실 수 있어요?'], n: ['Lesson 5', '5과'] },
    { th: 'ฝากกระเป๋าได้ไหม{Q}', r: 'fàak krà-pǎo dâi mǎi {q}', k: '팍 끄라빠오 다이 마이 {k}', m: ['Can I leave my bag here?', '가방 맡길 수 있어요?'], n: ['Lesson 6', '6과'] },
    { th: 'ช่วยด้วย', r: 'chûai dûai', k: '추아이 두아이', m: ['Help!', '도와주세요!'], n: ['Lesson 7', '7과'] },
    { th: 'ถ่ายรูปได้ไหม{Q}', r: 'thàai rûup dâi mǎi {q}', k: '타이 룹 다이 마이 {k}', m: ['May I take a photo?', '사진 찍어도 돼요?'], n: ['New: for temples, markets, and people.', '새 표현이에요. 사원, 시장, 사람을 찍기 전에 물어요.'] }
  ],
  intro: ['Wat Pho, home of the giant reclining Buddha, is the last stop of this stretch. Let us review everything from around Bangkok, plus one phrase for temples.',
          '거대한 와불로 유명한 왓포가 이번 구간의 마지막 정거장이에요. 방콕에서 배운 말을 모두 복습하고, 사원에서 쓸 표현도 하나 더 배워요.'],
  tip: ['At temples, cover your shoulders and knees, take off your shoes before entering a hall, and never point your feet toward a Buddha image. When in doubt, ask thàai rûup dâi mǎi {q} before taking a photo.',
        '사원에서는 어깨와 무릎을 가리고, 법당에 들어가기 전에 신발을 벗고, 불상 쪽으로 발을 향하지 않아요. 찍어도 될지 모르겠다면 먼저 thàai rûup dâi mǎi {q}라고 물어요.'],
  choose: [
    { type: 'mean', say: 'ถ่ายรูปได้ไหม{Q}', opts: [['May I take a photo?', '사진 찍어도 돼요?'], ['Can I pay by card?', '카드로 계산돼요?'], ['Can I leave my bag here?', '가방 맡길 수 있어요?']], a: 0, why: ['thàai rûup, take a picture.', 'thàai rûup, 사진을 찍다예요.'] },
    { type: 'hear', say: 'เลี้ยวซ้าย', opts: ['líao sáai', 'líao khwǎa', 'trong pai'], a: 0, why: ['Left, sáai. Lesson 1.', '왼쪽 sáai. 1과.'] },
    { type: 'hear', say: 'ใกล้', opts: ['klâi', 'klai'], a: 0, why: ['Falling tone: klâi, near. Lesson 2.', '떨어지는 성조 klâi, 가까워요. 2과.'] },
    { type: 'mean', say: 'เช็คบิลด้วย{P}', opts: [['The bill, please', '계산서 주세요'], ['The menu, please', '메뉴판 좀 주세요'], ['Too expensive', '너무 비싸요']], a: 0, why: ['chék-bin dûai. Lesson 3.', 'chék-bin dûai. 3과.'] },
    { type: 'mean', say: 'ไม่ใส่ผักชี{P}', opts: [['No cilantro, please', '고수 빼 주세요'], ['Not spicy, please', '안 맵게 해 주세요'], ["I'm allergic to nuts", '견과류 알레르기가 있어요']], a: 0, why: ['mâi sài phàk-chii. Lesson 4.', 'mâi sài phàk-chii. 4과.'] },
    { type: 'hear', say: 'แพงไป', opts: ['phaeng pai', 'trong pai', 'pai sà-yǎam {p}'], a: 0, why: ['phaeng pai, too expensive. Lesson 5.', 'phaeng pai, 너무 비싸요. 5과.'] },
    { type: 'mean', say: 'ปวดท้อง{P}', opts: [['I have a stomachache', '배가 아파요'], ['I have a headache', '머리가 아파요'], ['Help!', '도와주세요!']], a: 0, why: ['pùat tháwng. Lesson 7.', 'pùat tháwng. 7과.'] }
  ],
  speak: [0, 6, 2],
  fill: [
    { say: 'ไปวัดโพธิ์{P}', parts: ['pai', 'wát', '_', '{p}'], a: ['phoo'], opts: ['phoo', 'sà-yǎam', 'níi'] },
    { say: 'ถ่ายรูปได้ไหม{Q}', parts: ['thàai', 'rûup', '_', 'mǎi', '{q}'], a: ['dâi'], opts: ['dâi', 'pai', 'lót'] },
    { say: 'ไม่เผ็ด{P}', parts: ['mâi', '_', '{p}'], a: ['phèt'], opts: ['phèt', 'sài', 'ao'] },
    { say: 'ห้องน้ำอยู่ที่ไหน{Q}', parts: ['hâwng-náam', 'yùu', '_', '{q}'], a: ['thîi-nǎi'], opts: ['thîi-nǎi', 'trong nán', 'kìi mohng'] },
    { say: 'เผ็ดไหม{Q}', parts: ['phèt', '_', '{q}'], a: ['mǎi'], opts: ['mǎi', 'mâi', 'mài'] }
  ],
  note: ['Wat Pho is also the birthplace of traditional Thai massage, and its school still teaches today. After walking the temple grounds, a massage there is a fine reward. You have finished the second stretch. Next comes the conference.',
         '왓포는 태국 전통 마사지의 발상지로, 지금도 이곳 학교에서 마사지를 가르쳐요. 사원을 한참 걸은 뒤에 받는 마사지는 좋은 보상이 돼요. 둘째 구간을 모두 마쳤어요. 다음은 학회예요.'],
  today: [0, 6, 1]
}
};
