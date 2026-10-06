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
  { n: 3, open: true, en: 'Wat Pho to Wat Arun', ko: '왓포에서 왓아룬까지',
    what: ['The old town and the river: river boats, the Grand Palace, telling time, markets, colors, days, photos', '옛 도심과 강. 강배, 왕궁, 시간 말하기, 시장, 색깔, 요일, 사진 부탁'],
    lessons: [
      { n: 1, name: 'Tha Tien', ko: '타띠안', t: ['River boats', '강을 오가는 배'] },
      { n: 2, name: 'Grand Palace', ko: '왕궁', t: ['Tickets and the dress code', '입장권과 복장 규정'] },
      { n: 3, name: 'Sanam Luang', ko: '사남 루앙', t: ['Telling time', '시간 말하기'] },
      { n: 4, name: 'Tha Prachan', ko: '타프라짠', t: ['"What is this?"', '"이건 뭐예요?"'] },
      { n: 5, name: 'Pak Khlong Talat', ko: '빡끌렁 딸랏', t: ['Flowers and colors', '꽃과 색깔'] },
      { n: 6, name: 'Tha Maharaj', ko: '타마하랏', t: ['Today, tomorrow, every day', '오늘, 내일, 매일'] },
      { n: 7, name: 'Wang Lang', ko: '왕랑', t: ['Asking for a photo', '사진 부탁하기'] },
      { n: 8, name: 'Wat Arun', ko: '왓아룬', t: ['Review and climbing the tower', '종합 복습과 탑 오르기'] }
    ] },
  { n: 4, open: true, en: 'Wat Arun to Pratunam', ko: '왓아룬에서 쁘라뚜남까지',
    what: ['Malls and markets: colors, sizes, trying things on, returning and exchanging', '쇼핑몰과 시장. 색깔, 크기, 입어 보기, 교환과 환불'],
    lessons: [
      { n: 1, name: 'Iconsiam', ko: '아이콘시암', t: ['Floors and directions', '층과 방향'] },
      { n: 2, name: 'Siam Paragon', ko: '시암 파라곤', t: ['Sizes', '사이즈'] },
      { n: 3, name: 'MBK Center', ko: 'MBK 센터', t: ['Trying things on', '입어 보기'] },
      { n: 4, name: 'Siam Square', ko: '시암 스퀘어', t: ['More colors, "Do you have it?"', '색깔 더 배우기, "있어요?"'] },
      { n: 5, name: 'Platinum', ko: '플래티넘', t: ['Buying several, wholesale prices', '여러 개 사기, 도매가'] },
      { n: 6, name: 'Pratunam Market', ko: '쁘라뚜남 시장', t: ['Exchanges and refunds', '교환과 환불'] },
      { n: 7, name: 'Central World', ko: '센트럴 월드', t: ['At the counter', '계산대에서'] },
      { n: 8, name: 'Pratunam', ko: '쁘라뚜남', t: ['Review: a whole shopping trip', '종합 복습: 쇼핑 한 바퀴'] }
    ] },
  { n: 5, open: true, en: 'Pratunam to Asiatique', ko: '쁘라뚜남에서 아시아티크까지',
    what: ['Bangkok nights: night markets, drinks, rooftop views, describing taste', '방콕의 밤. 야시장, 음료, 루프탑 전망, 맛 표현하기'],
    lessons: [
      { n: 1, name: 'Baiyoke Sky', ko: '바이욕 스카이', t: ['The view from the top', '꼭대기에서 본 전망'] },
      { n: 2, name: 'Night Market', ko: '야시장', t: ['Drinks, less sweet', '음료, 덜 달게'] },
      { n: 3, name: 'Huai Khwang', ko: '후아이꽝', t: ['Describing taste', '맛 표현하기'] },
      { n: 4, name: 'Thonglor', ko: '텅러', t: ['Ordering a drink, or not', '술 주문하기, 또는 사양하기'] },
      { n: 5, name: 'Ekkamai', ko: '엑까마이', t: ['Meeting friends', '친구 만나기'] },
      { n: 6, name: 'Saphan Taksin', ko: '사판 탁신', t: ['Queues and crowds', '줄과 인파'] },
      { n: 7, name: 'Asiatique Sky', ko: '아시아티크 스카이', t: ['Excited or scared', '신나거나 무섭거나'] },
      { n: 8, name: 'Asiatique', ko: '아시아티크', t: ['Review: a night out', '종합 복습: 밤 나들이'] }
    ] },
  { n: 6, open: true, en: 'Asiatique to Lumphini', ko: '아시아티크에서 룸피니까지',
    what: ['Slow days: Thai massage, a cooking class, Lumphini Park, Muay Thai, how you feel', '느긋한 하루. 타이 마사지, 요리 교실, 룸피니 공원, 무에타이, 기분 말하기'],
    lessons: [
      { n: 1, name: 'Sala Daeng', ko: '살라댕', t: ['Thai massage', '타이 마사지'] },
      { n: 2, name: 'Cooking School', ko: '요리 교실', t: ['Cooking words', '요리 낱말'] },
      { n: 3, name: 'Lumphini Park', ko: '룸피니 공원', t: ['A walk in the park', '공원 산책'] },
      { n: 4, name: 'Benjakitti Park', ko: '벤짜끼띠 공원', t: ['Rain and sun', '비와 햇볕'] },
      { n: 5, name: 'Rajadamnern', ko: '랏차담넌', t: ['A night at the Muay Thai', '무에타이 관람'] },
      { n: 6, name: 'Samyan', ko: '삼얀', t: ['Hungry, full, sleepy', '배고파요, 배불러요, 졸려요'] },
      { n: 7, name: 'Wat Pathum Wanaram', ko: '왓 빠툼 와나람', t: ['A quiet temple, making merit', '조용한 사원, 공덕 쌓기'] },
      { n: 8, name: 'Lumphini', ko: '룸피니', t: ['Review: a slow day', '종합 복습: 느긋한 하루'] }
    ] },
  { n: 7, open: true, en: 'Lumphini to Departures', ko: '룸피니에서 출국장까지',
    what: ['Farewell to Bangkok: souvenirs, keeping in touch, check-in and the airport', '방콕과 작별. 기념품, 연락 이어 가기, 공항 체크인'],
    lessons: [
      { n: 1, name: 'Terminal 21', ko: '터미널 21', t: ['Souvenirs and gifts', '기념품과 선물'] },
      { n: 2, name: 'Ari', ko: '아리', t: ['Keeping in touch', '연락 이어 가기'] },
      { n: 3, name: 'Victory Monument', ko: '전승기념탑', t: ['Saying goodbye', '작별 인사'] },
      { n: 4, name: 'Asok', ko: '아속', t: ['Checking out, a taxi to the airport', '체크아웃, 공항 가는 택시'] },
      { n: 5, name: 'Makkasan', ko: '막까산', t: ['Traffic and time', '교통과 시간'] },
      { n: 6, name: 'Check-in', ko: '체크인', t: ['At the airport counter', '공항 카운터에서'] },
      { n: 7, name: 'Food Court', ko: '푸드 코트', t: ['The last meal', '마지막 식사'] },
      { n: 8, name: 'Departures', ko: '출국장', t: ['Review: laa-kàwn, Bangkok', '종합 복습: 라껀, 방콕'] }
    ] }
];

// 부록: 방콕 밖 여행. 도시마다 세 과짜리 꾸러미. 폴더 이름은 trip-<id>/
const PT_SIDE = [
  { n: 'ayutthaya', side: true, open: true, en: 'Ayutthaya', ko: '아유타야',
    what: ['A day trip to the old capital: train tickets, renting a bicycle, opening hours and the heat', '옛 수도로 당일치기. 기차표, 자전거 빌리기, 관람 시간과 더위'],
    lessons: [
      { n: 1, name: 'Krung Thep Aphiwat', ko: '끄룽텝 아피왓', t: ['Train tickets', '기차표 사기'] },
      { n: 2, name: 'Wat Mahathat', ko: '왓 마하탓', t: ['Bicycles and tuk-tuks', '자전거와 뚝뚝'] },
      { n: 3, name: 'Chao Phrom Market', ko: '짜오프롬 시장', t: ['Opening hours and the heat', '관람 시간과 더위'] }
    ] },
  { n: 'chiangmai', side: true, open: true, en: 'Chiang Mai', ko: '치앙마이',
    what: ['The north: red trucks, the night bazaar, northern food, cool evenings and how you feel', '북부 여행. 빨간 트럭, 야시장, 북부 음식, 선선한 저녁과 기분'],
    lessons: [
      { n: 1, name: 'Tha Phae Gate', ko: '타패 문', t: ['Riding the red trucks', '빨간 트럭 타기'] },
      { n: 2, name: 'Night Bazaar', ko: '나이트 바자', t: ['Northern food', '북부 음식'] },
      { n: 3, name: 'Doi Suthep', ko: '도이 수텝', t: ['Weather and feelings', '날씨와 기분'] }
    ] },
  { n: 'phuket', side: true, open: true, en: 'Phuket and the islands', ko: '푸껫과 섬들',
    what: ['The sea: beaches, boats to the islands, seasickness, and seafood by the kilo', '바다 여행. 해변, 섬으로 가는 배, 뱃멀미, 킬로로 사는 해산물'],
    lessons: [
      { n: 1, name: 'Patong Beach', ko: '빠통 해변', t: ['At the beach', '해변에서'] },
      { n: 2, name: 'Rassada Pier', ko: '랏사다 부두', t: ['Boats and islands', '배와 섬'] },
      { n: 3, name: 'Rawai', ko: '라와이', t: ['Seafood', '해산물'] }
    ] }
];
