// 일곱 구간과 과 목록. 과를 열려면 open: true 로 바꾸고 해당 구간의 lessons 파일에 내용을 넣는다.
const PT_STRETCHES = [
  { n: 1, open: true, en: 'Suvarnabhumi to Phaya Thai', ko: '수완나품에서 파야타이까지',
    what: ['The basics on the Airport Rail Link: greetings, polite endings, yes and no, the five tones, numbers, introducing yourself', '공항철도에서 배우는 기초. 인사, 공손 어미, 예와 아니오, 다섯 성조, 숫자, 자기소개'],
    lessons: [
      { n: 1, name: 'Suvarnabhumi', ko: '수완나품', t: ['Hello and the polite ending', '인사와 공손 어미'] },
      { n: 2, name: 'Lat Krabang', ko: '랏끄라방', t: ['Thank you, sorry, no worries', '고마워요, 미안해요, 괜찮아요'] },
      { n: 3, name: 'Ban Thap Chang', ko: '반탑창', t: ['Yes, no, and "I don\'t understand"', '예, 아니오, 그리고 "못 알아들었어요"'] },
      { n: 4, name: 'Hua Mak', ko: '후아막', t: ['The five tones', '다섯 성조'] },
      { n: 5, name: 'Ramkhamhaeng', ko: '람캄행', t: ['Numbers 1 to 10', '숫자 1부터 10까지'] },
      { n: 6, name: 'Makkasan', ko: '막까산', t: ['Bigger numbers and baht', '큰 숫자와 밧'] },
      { n: 7, name: 'Ratchaprarop', ko: '랏차쁘라롭', t: ['Introducing yourself', '자기소개'] },
      { n: 8, name: 'Phaya Thai', ko: '파야타이', t: ['Review: your first conversation', '종합 복습: 첫 대화'] }
    ] },
  { n: 2, open: true, en: 'Phaya Thai to Wat Pho', ko: '파야타이에서 왓포까지',
    what: ['Around Bangkok: taxis, directions, street food, spice, shopping, the hotel, getting help', '방콕 곳곳에서. 택시, 길 묻기, 길거리 음식, 매운맛, 쇼핑, 호텔, 도움 요청'],
    lessons: [
      { n: 1, name: 'Siam', ko: '시암', t: ['Taxis and Grab', '택시와 그랩'] },
      { n: 2, name: 'Sukhumvit', ko: '수쿰윗', t: ['Where is it?', '어디에 있어요?'] },
      { n: 3, name: 'Yaowarat', ko: '야오와랏', t: ['Ordering street food', '길거리 음식 주문하기'] },
      { n: 4, name: 'Bang Rak', ko: '방락', t: ['Spicy or not', '맵게, 안 맵게'] },
      { n: 5, name: 'Chatuchak', ko: '짜뚜짝', t: ['Shopping and bargaining', '쇼핑과 흥정'] },
      { n: 6, name: 'Silom', ko: '실롬', t: ['At the hotel', '호텔에서'] },
      { n: 7, name: 'Khao San', ko: '카오산', t: ['Pharmacy and help', '약국과 도움 요청'] },
      { n: 8, name: 'Wat Pho', ko: '왓포', t: ['Review and temple manners', '종합 복습과 사원 예절'] }
    ] },
  { n: 3, open: false, en: 'Wat Pho to the conference hall', ko: '왓포에서 학회장까지',
    what: ['Conference days: presenting yourself, small talk with colleagues, thanking your hosts', '학회 기간. 발표자로 나를 소개하기, 동료와 가벼운 대화, 초청해 준 분께 감사 인사'] },
  { n: 4, open: false, en: 'The conference hall to Ayutthaya', ko: '학회장에서 아유타야까지',
    what: ['Day trip: time, days of the week, boats and buses, temple ruins', '당일치기 여행. 시간, 요일, 배와 버스, 옛 사원 터'] },
  { n: 5, open: false, en: 'Ayutthaya to Sukhothai', ko: '아유타야에서 수코타이까지',
    what: ['Train tickets, schedules, the weather, renting a bicycle', '기차표, 시간표, 날씨, 자전거 빌리기'] },
  { n: 6, open: false, en: 'Sukhothai to Chiang Mai', ko: '수코타이에서 치앙마이까지',
    what: ['Night markets, describing things, northern food, how you feel', '야시장, 물건 묘사하기, 북부 음식, 기분 말하기'] },
  { n: 7, open: false, en: 'Chiang Mai to Don Mueang', ko: '치앙마이에서 돈므앙까지',
    what: ['Farewells, gifts, keeping in touch, telling the story of your trip', '작별 인사, 선물, 연락 이어 가기, 나의 여행 이야기'] }
];
