// 4번째 구간 수업 내용. build.py로 만들었다. 형식은 stretch-1-lessons.js 맨 위 설명과 같다.
window.PT_LESSONS = window.PT_LESSONS || {};
PT_LESSONS[4] = {
 "1": {
  "guide": "mali",
  "units": [
   {
    "th": "ชั้นไหน{Q}",
    "r": "chán nǎi {q}",
    "k": "찬 나이 {k}",
    "m": [
     "Which floor?",
     "몇 층이에요?"
    ],
    "n": [
     "chán is a floor or level; nǎi is which.",
     "chán은 층, nǎi는 어느예요."
    ]
   },
   {
    "th": "ชั้นสาม",
    "r": "chán sǎam",
    "k": "찬 쌈",
    "m": [
     "third floor",
     "3층"
    ],
    "n": [
     "Floor + number: chán sǎam.",
     "층 + 숫자 순서예요. chán sǎam."
    ]
   },
   {
    "th": "ลิฟต์อยู่ที่ไหน{Q}",
    "r": "líp yùu thîi-nǎi {q}",
    "k": "립 유 티나이 {k}",
    "m": [
     "Where is the elevator?",
     "엘리베이터가 어디예요?"
    ],
    "n": [
     "Thai says the English \"lift\" as líp.",
     "영어 lift를 태국식으로 líp이라고 해요."
    ]
   },
   {
    "th": "บันไดเลื่อน",
    "r": "ban-dai lûean",
    "k": "반다이 르안",
    "m": [
     "escalator",
     "에스컬레이터"
    ],
    "n": [
     "ban-dai is stairs; lûean is sliding.",
     "ban-dai는 계단, lûean은 미끄러지다예요."
    ]
   },
   {
    "th": "ข้างบน",
    "r": "khâang-bon",
    "k": "캉본",
    "m": [
     "upstairs",
     "위층"
    ]
   },
   {
    "th": "ข้างล่าง",
    "r": "khâang-lâang",
    "k": "캉랑",
    "m": [
     "downstairs",
     "아래층"
    ]
   }
  ],
  "intro": [
   "Across the river from Wat Arun stands Iconsiam, one of the biggest malls in Asia. Malls are a big part of Bangkok life, so let us start with floors and directions.",
   "왓아룬 맞은편 강가에는 아시아에서 손꼽히게 큰 쇼핑몰 아이콘시암이 있어요. 쇼핑몰은 방콕 생활의 큰 부분이라, 층과 방향부터 배워요."
  ],
  "tip": [
   "chán + number tells you the floor: chán sǎam. Then khâang-bon (up) and khâang-lâang (down) cover the rest. Listen to lûean in ban-dai lûean: it falls, like mâi.",
   "chán 뒤에 숫자를 붙이면 층이에요. chán sǎam. 나머지는 khâang-bon(위)과 khâang-lâang(아래)으로 해결해요. ban-dai lûean의 lûean은 mâi처럼 떨어지는 성조예요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "ชั้นไหน{Q}",
    "opts": [
     [
      "Which floor?",
      "몇 층이에요?"
     ],
     [
      "third floor",
      "3층"
     ],
     [
      "Where is the elevator?",
      "엘리베이터가 어디예요?"
     ]
    ],
    "a": 0,
    "why": [
     "chán nǎi: floor which?",
     "chán nǎi, 어느 층이에요?"
    ]
   },
   {
    "type": "hear",
    "say": "ลิฟต์อยู่ที่ไหน{Q}",
    "opts": [
     "líp yùu thîi-nǎi {q}",
     "ban-dai lûean",
     "khâang-bon"
    ],
    "a": 0,
    "why": [
     "líp, the lift.",
     "líp, 엘리베이터예요."
    ]
   },
   {
    "type": "mean",
    "say": "บันไดเลื่อน",
    "opts": [
     [
      "escalator",
      "에스컬레이터"
     ],
     [
      "upstairs",
      "위층"
     ],
     [
      "downstairs",
      "아래층"
     ]
    ],
    "a": 0,
    "why": [
     "ban-dai lûean, the sliding stairs.",
     "ban-dai lûean, 움직이는 계단이에요."
    ]
   },
   {
    "type": "mean",
    "say": "ข้างบน",
    "opts": [
     [
      "upstairs",
      "위층"
     ],
     [
      "downstairs",
      "아래층"
     ],
     [
      "third floor",
      "3층"
     ]
    ],
    "a": 0,
    "why": [
     "bon is up or on top.",
     "bon은 위예요."
    ]
   },
   {
    "type": "mean",
    "say": "ข้างล่าง",
    "opts": [
     [
      "downstairs",
      "아래층"
     ],
     [
      "upstairs",
      "위층"
     ],
     [
      "escalator",
      "에스컬레이터"
     ]
    ],
    "a": 0,
    "why": [
     "lâang is down or below.",
     "lâang은 아래예요."
    ]
   },
   {
    "type": "hear",
    "say": "ชั้นสาม",
    "opts": [
     "chán sǎam",
     "líp yùu thîi-nǎi {q}",
     "ban-dai lûean"
    ],
    "a": 0,
    "why": [
     "chán sǎam, third floor.",
     "chán sǎam, 3층이에요."
    ]
   }
  ],
  "speak": [
   0,
   2,
   4,
   5
  ],
  "fill": [
   {
    "say": "ชั้นไหน{Q}",
    "parts": [
     "chán",
     "_",
     "{q}"
    ],
    "a": [
     "nǎi"
    ],
    "opts": [
     "nǎi",
     "níi",
     "mǎi"
    ]
   },
   {
    "say": "ข้างล่าง",
    "parts": [
     "khâang",
     "_"
    ],
    "a": [
     "lâang"
    ],
    "opts": [
     "lâang",
     "bon",
     "nán"
    ]
   },
   {
    "say": "ชั้นห้า",
    "parts": [
     "_",
     "hâa"
    ],
    "a": [
     "chán"
    ],
    "opts": [
     "chán",
     "bai",
     "tua"
    ],
    "m": [
     "fifth floor",
     "5층"
    ]
   }
  ],
  "note": [
   "Iconsiam has an indoor floating market on its ground floor, with vendors selling food from boats, a fun way to see old Bangkok without the heat. Free shuttle boats run across the river from Sathorn pier.",
   "아이콘시암 1층에는 실내 수상 시장이 있어서, 배 위에서 음식을 파는 옛 방콕 풍경을 더위 없이 볼 수 있어요. 사톤 선착장에서 강을 건너는 무료 셔틀 배도 다녀요."
  ],
  "today": [
   0,
   2,
   3
  ]
 },
 "2": {
  "guide": "chang",
  "units": [
   {
    "th": "ใหญ่",
    "r": "yài",
    "k": "야이",
    "m": [
     "big",
     "커요"
    ],
    "n": [
     "Low tone.",
     "낮은 성조예요."
    ]
   },
   {
    "th": "เล็ก",
    "r": "lék",
    "k": "렉",
    "m": [
     "small",
     "작아요"
    ],
    "n": [
     "High tone.",
     "높은 성조예요."
    ]
   },
   {
    "th": "ใหญ่ไป",
    "r": "yài pai",
    "k": "야이 빠이",
    "m": [
     "Too big",
     "너무 커요"
    ],
    "n": [
     "pai after a describing word means \"too\", as in phaeng pai.",
     "형용사 뒤 pai는 \"너무\"예요. phaeng pai와 같아요."
    ]
   },
   {
    "th": "เล็กไป",
    "r": "lék pai",
    "k": "렉 빠이",
    "m": [
     "Too small",
     "너무 작아요"
    ]
   },
   {
    "th": "พอดี",
    "r": "phaw-dii",
    "k": "퍼디",
    "m": [
     "Just right",
     "딱 맞아요"
    ],
    "n": [
     "Also used for \"just in time\" or \"exactly\".",
     "\"딱 맞춰서\", \"마침\"이라는 뜻으로도 써요."
    ]
   },
   {
    "th": "มีไซซ์ใหญ่กว่านี้ไหม{Q}",
    "r": "mii sai yài kwàa níi mǎi {q}",
    "k": "미 싸이 야이 꽈 니 마이 {k}",
    "m": [
     "Do you have a bigger size?",
     "더 큰 사이즈 있어요?"
    ],
    "n": [
     "kwàa means \"more than\": yài kwàa níi, bigger than this.",
     "kwàa는 \"~보다\"예요. yài kwàa níi, 이것보다 큰."
    ]
   }
  ],
  "intro": [
   "Siam Paragon is the grand mall at the heart of Siam. Clothes and shoes often run small in Thailand, so sizes are the first thing to learn.",
   "시암 파라곤은 시암 한가운데 있는 대형 쇼핑몰이에요. 태국 옷과 신발은 대체로 작게 나와서, 사이즈 표현부터 배워요."
  ],
  "tip": [
   "mii ... mǎi {q} asks \"do you have ...?\". With kwàa you can compare anything: lék kwàa níi, smaller than this; thùuk kwàa níi, cheaper than this.",
   "mii ... mǎi {q}는 \"~ 있어요?\"예요. kwàa를 쓰면 무엇이든 비교할 수 있어요. lék kwàa níi는 이것보다 작은, thùuk kwàa níi는 이것보다 싼."
  ],
  "choose": [
   {
    "type": "hear",
    "say": "ใหญ่",
    "opts": [
     "yài",
     "lék",
     "phaw-dii"
    ],
    "a": 0,
    "why": [
     "Low tone: yài, big.",
     "낮은 성조 yài, 커요."
    ]
   },
   {
    "type": "hear",
    "say": "เล็ก",
    "opts": [
     "lék",
     "yài",
     "phaw-dii"
    ],
    "a": 0,
    "why": [
     "High tone: lék, small.",
     "높은 성조 lék, 작아요."
    ]
   },
   {
    "type": "mean",
    "say": "ใหญ่ไป",
    "opts": [
     [
      "Too big",
      "너무 커요"
     ],
     [
      "Too small",
      "너무 작아요"
     ],
     [
      "Just right",
      "딱 맞아요"
     ]
    ],
    "a": 0,
    "why": [
     "yài pai: too big.",
     "yài pai, 너무 커요."
    ]
   },
   {
    "type": "mean",
    "say": "พอดี",
    "opts": [
     [
      "Just right",
      "딱 맞아요"
     ],
     [
      "Too big",
      "너무 커요"
     ],
     [
      "Too small",
      "너무 작아요"
     ]
    ],
    "a": 0,
    "why": [
     "phaw-dii: just right.",
     "phaw-dii, 딱 맞아요."
    ]
   },
   {
    "type": "mean",
    "say": "มีไซซ์ใหญ่กว่านี้ไหม{Q}",
    "opts": [
     [
      "Do you have a bigger size?",
      "더 큰 사이즈 있어요?"
     ],
     [
      "Just right",
      "딱 맞아요"
     ],
     [
      "Too small",
      "너무 작아요"
     ]
    ],
    "a": 0,
    "why": [
     "mii means have.",
     "mii는 있다예요."
    ]
   }
  ],
  "speak": [
   2,
   3,
   4,
   5
  ],
  "fill": [
   {
    "say": "มีไซซ์ใหญ่กว่านี้ไหม{Q}",
    "parts": [
     "mii",
     "sai",
     "yài",
     "_",
     "níi",
     "mǎi",
     "{q}"
    ],
    "a": [
     "kwàa"
    ],
    "opts": [
     "kwàa",
     "pai",
     "dii"
    ]
   },
   {
    "say": "เล็กไป",
    "parts": [
     "_",
     "pai"
    ],
    "a": [
     "lék"
    ],
    "opts": [
     "lék",
     "yài",
     "dii"
    ]
   },
   {
    "say": "พอดี",
    "parts": [
     "phaw",
     "_"
    ],
    "a": [
     "dii"
    ],
    "opts": [
     "dii",
     "pai",
     "mǎi"
    ]
   }
  ],
  "note": [
   "Siam Paragon has an aquarium in its basement and a food hall where you can try dishes from all over Thailand. Siam station is also where the two BTS Skytrain lines cross.",
   "시암 파라곤 지하에는 아쿠아리움이 있고, 태국 곳곳의 음식을 맛볼 수 있는 푸드 홀도 있어요. 시암역은 BTS 지상철 두 노선이 만나는 곳이기도 해요."
  ],
  "today": [
   2,
   4,
   5
  ]
 },
 "3": {
  "guide": "mali",
  "units": [
   {
    "th": "ลองได้ไหม{Q}",
    "r": "lawng dâi mǎi {q}",
    "k": "렁 다이 마이 {k}",
    "m": [
     "Can I try it on?",
     "입어 봐도 돼요?"
    ],
    "n": [
     "lawng means try.",
     "lawng은 해 보다예요."
    ]
   },
   {
    "th": "ห้องลองอยู่ไหน{Q}",
    "r": "hâwng lawng yùu nǎi {q}",
    "k": "헝 렁 유 나이 {k}",
    "m": [
     "Where is the fitting room?",
     "탈의실이 어디예요?"
    ],
    "n": [
     "In speech, thîi-nǎi often shortens to nǎi.",
     "말할 때는 thîi-nǎi를 nǎi로 줄여 말하기도 해요."
    ]
   },
   {
    "th": "สวยไหม{Q}",
    "r": "sǔai mǎi {q}",
    "k": "쑤아이 마이 {k}",
    "m": [
     "Does it look good?",
     "예뻐요?"
    ]
   },
   {
    "th": "ใส่สบาย",
    "r": "sài sà-baai",
    "k": "싸이 싸바이",
    "m": [
     "It's comfortable",
     "입기 편해요"
    ],
    "n": [
     "sà-baai again: comfortable, well, at ease.",
     "다시 만난 sà-baai예요. 편하다, 잘 지내다."
    ]
   },
   {
    "th": "ไม่ค่อยชอบ{P}",
    "r": "mâi khôi châwp {p}",
    "k": "마이 커이 첩 {k}",
    "m": [
     "I don't really like it",
     "별로 마음에 안 들어요"
    ],
    "n": [
     "mâi khôi softens \"not\": not really.",
     "mâi khôi는 부정을 부드럽게 해요. \"별로 ~않아요\"."
    ]
   }
  ],
  "intro": [
   "MBK Center is eight floors of small shops: clothes, bags, phone cases, souvenirs. Let us try something on.",
   "MBK 센터는 옷, 가방, 휴대전화 케이스, 기념품을 파는 작은 가게가 8층까지 가득해요. 하나 입어 봐요."
  ],
  "tip": [
   "mâi khôi châwp is a gentle way to say no to the seller. It sounds much kinder than mâi châwp, which is a flat \"I don't like it\".",
   "mâi khôi châwp은 판매자에게 부드럽게 거절하는 말이에요. 딱 잘라 말하는 mâi châwp보다 훨씬 다정하게 들려요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "ลองได้ไหม{Q}",
    "opts": [
     [
      "Can I try it on?",
      "입어 봐도 돼요?"
     ],
     [
      "Where is the fitting room?",
      "탈의실이 어디예요?"
     ],
     [
      "Does it look good?",
      "예뻐요?"
     ]
    ],
    "a": 0,
    "why": [
     "lawng: try.",
     "lawng, 해 보다예요."
    ]
   },
   {
    "type": "hear",
    "say": "ห้องลองอยู่ไหน{Q}",
    "opts": [
     "hâwng lawng yùu nǎi {q}",
     "sǔai mǎi {q}",
     "sài sà-baai"
    ],
    "a": 0,
    "why": [
     "hâwng lawng, the trying room.",
     "hâwng lawng, 입어 보는 방이에요."
    ]
   },
   {
    "type": "mean",
    "say": "ไม่ค่อยชอบ{P}",
    "opts": [
     [
      "I don't really like it",
      "별로 마음에 안 들어요"
     ],
     [
      "Can I try it on?",
      "입어 봐도 돼요?"
     ],
     [
      "Where is the fitting room?",
      "탈의실이 어디예요?"
     ]
    ],
    "a": 0,
    "why": [
     "mâi khôi: not really.",
     "mâi khôi, 별로예요."
    ]
   },
   {
    "type": "mean",
    "say": "ใส่สบาย",
    "opts": [
     [
      "It's comfortable",
      "입기 편해요"
     ],
     [
      "I don't really like it",
      "별로 마음에 안 들어요"
     ],
     [
      "Can I try it on?",
      "입어 봐도 돼요?"
     ]
    ],
    "a": 0,
    "why": [
     "sài sà-baai: comfortable to wear.",
     "sài sà-baai, 입기 편해요."
    ]
   },
   {
    "type": "hear",
    "say": "สวยไหม{Q}",
    "opts": [
     "sǔai mǎi {q}",
     "sài sà-baai",
     "mâi khôi châwp {p}"
    ],
    "a": 0,
    "why": [
     "sǔai mǎi, is it pretty?",
     "sǔai mǎi, 예뻐요?"
    ]
   }
  ],
  "speak": [
   0,
   1,
   4
  ],
  "fill": [
   {
    "say": "ลองได้ไหม{Q}",
    "parts": [
     "_",
     "dâi",
     "mǎi",
     "{q}"
    ],
    "a": [
     "lawng"
    ],
    "opts": [
     "lawng",
     "sài",
     "duu"
    ]
   },
   {
    "say": "ไม่ค่อยชอบ{P}",
    "parts": [
     "mâi",
     "_",
     "châwp",
     "{p}"
    ],
    "a": [
     "khôi"
    ],
    "opts": [
     "khôi",
     "dâi",
     "mâak"
    ]
   },
   {
    "say": "ใส่สบาย",
    "parts": [
     "sài",
     "_"
    ],
    "a": [
     "sà-baai"
    ],
    "opts": [
     "sà-baai",
     "sǔai",
     "phaw-dii"
    ]
   }
  ],
  "note": [
   "MBK is famous for phones and gadgets on its upper floors and for souvenirs that cost less than in the fancier malls next door. Prices are usually fixed in the shops, but asking lót dâi mǎi {q} for two or more items often works.",
   "MBK는 위층의 휴대전화와 전자 제품, 그리고 옆 고급 쇼핑몰보다 싼 기념품으로 유명해요. 가게 가격은 대개 정해져 있지만, 두 개 이상 사면 lót dâi mǎi {q}가 통하는 경우가 많아요."
  ],
  "today": [
   0,
   1,
   4
  ]
 },
 "4": {
  "guide": "chang",
  "units": [
   {
    "th": "มีสีดำไหม{Q}",
    "r": "mii sǐi dam mǎi {q}",
    "k": "미 씨 담 마이 {k}",
    "m": [
     "Do you have it in black?",
     "검은색 있어요?"
    ]
   },
   {
    "th": "สีดำ",
    "r": "sǐi dam",
    "k": "씨 담",
    "m": [
     "black",
     "검은색"
    ]
   },
   {
    "th": "สีน้ำเงิน",
    "r": "sǐi náam-ngoen",
    "k": "씨 남응언",
    "m": [
     "blue",
     "파란색"
    ],
    "n": [
     "Literally \"the color of silver water\".",
     "말 그대로 \"은빛 물의 색\"이에요."
    ]
   },
   {
    "th": "สีเขียว",
    "r": "sǐi khǐao",
    "k": "씨 키아우",
    "m": [
     "green",
     "초록색"
    ]
   },
   {
    "th": "มี",
    "r": "mii",
    "k": "미",
    "m": [
     "Yes, we have it",
     "있어요"
    ],
    "n": [
     "To answer yes, repeat the verb: mii.",
     "\"네\"라고 할 때는 동사를 되풀이해요. mii."
    ]
   },
   {
    "th": "ไม่มี",
    "r": "mâi mii",
    "k": "마이 미",
    "m": [
     "No, we don't",
     "없어요"
    ]
   }
  ],
  "intro": [
   "Siam Square is a grid of small streets full of young Thai fashion, right next to a big university. More colors, and how to ask whether they have it.",
   "시암 스퀘어는 큰 대학 바로 옆, 젊은 태국 패션 가게가 바둑판처럼 늘어선 거리예요. 색깔을 더 배우고, 그 색이 있는지 물어봐요."
  ],
  "tip": [
   "You learned that Thai answers yes by repeating the verb. Here it is again: mii sǐi dam mǎi {q}? mii. Or mâi mii. The same pattern works with dâi, châi, and almost every question.",
   "태국어는 동사를 되풀이해서 \"네\"라고 답한다고 배웠죠. 여기서도 그래요. mii sǐi dam mǎi {q}? mii, 또는 mâi mii. dâi, châi를 비롯해 거의 모든 질문에 같은 틀이 통해요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "สีดำ",
    "opts": [
     [
      "black",
      "검은색"
     ],
     [
      "blue",
      "파란색"
     ],
     [
      "green",
      "초록색"
     ]
    ],
    "a": 0,
    "why": [
     "dam, black.",
     "dam, 검은색이에요."
    ]
   },
   {
    "type": "mean",
    "say": "สีน้ำเงิน",
    "opts": [
     [
      "blue",
      "파란색"
     ],
     [
      "green",
      "초록색"
     ],
     [
      "black",
      "검은색"
     ]
    ],
    "a": 0,
    "why": [
     "náam-ngoen, blue.",
     "náam-ngoen, 파란색이에요."
    ]
   },
   {
    "type": "hear",
    "say": "สีเขียว",
    "opts": [
     "sǐi khǐao",
     "sǐi dam",
     "sǐi náam-ngoen"
    ],
    "a": 0,
    "why": [
     "khǐao, green, rises.",
     "khǐao(초록)는 올라가는 성조예요."
    ]
   },
   {
    "type": "mean",
    "say": "ไม่มี",
    "opts": [
     [
      "No, we don't",
      "없어요"
     ],
     [
      "Yes, we have it",
      "있어요"
     ],
     [
      "black",
      "검은색"
     ]
    ],
    "a": 0,
    "why": [
     "mâi mii: do not have.",
     "mâi mii, 없어요."
    ]
   },
   {
    "type": "hear",
    "say": "มีสีดำไหม{Q}",
    "opts": [
     "mii sǐi dam mǎi {q}",
     "mâi mii",
     "mii"
    ],
    "a": 0,
    "why": [
     "mii sǐi dam mǎi, have black?",
     "mii sǐi dam mǎi, 검은색 있어요?"
    ]
   }
  ],
  "speak": [
   0,
   4,
   5
  ],
  "fill": [
   {
    "say": "มีสีดำไหม{Q}",
    "parts": [
     "_",
     "sǐi",
     "dam",
     "mǎi",
     "{q}"
    ],
    "a": [
     "mii"
    ],
    "opts": [
     "mii",
     "mâi",
     "sài"
    ]
   },
   {
    "say": "สีเขียว",
    "parts": [
     "sǐi",
     "_"
    ],
    "a": [
     "khǐao"
    ],
    "opts": [
     "khǐao",
     "dam",
     "daeng"
    ]
   },
   {
    "say": "ไม่มี",
    "parts": [
     "_",
     "mii"
    ],
    "a": [
     "mâi"
    ],
    "opts": [
     "mâi",
     "mài",
     "mǎi"
    ]
   }
  ],
  "note": [
   "Siam Square sits right beside Chulalongkorn University, Thailand's oldest university, so the cafes are full of students in their white shirts and dark skirts or trousers. Many Thai universities still have student uniforms.",
   "시암 스퀘어는 태국에서 가장 오래된 대학인 쭐랄롱꼰 대학 바로 옆이라, 카페마다 흰 셔츠에 짙은 치마나 바지를 입은 학생들이 가득해요. 태국 대학 중에는 지금도 교복이 있는 곳이 많아요."
  ],
  "today": [
   0,
   4,
   5
  ]
 },
 "5": {
  "guide": "mali",
  "units": [
   {
    "th": "ตัวละเท่าไหร่{Q}",
    "r": "tua lá thâo-rài {q}",
    "k": "뚜아 라 타오라이 {k}",
    "m": [
     "How much per piece?",
     "한 벌에 얼마예요?"
    ],
    "n": [
     "tua counts clothes, and also animals.",
     "tua는 옷을 셀 때 써요. 동물을 셀 때도요."
    ]
   },
   {
    "th": "ซื้อสามตัว{P}",
    "r": "súe sǎam tua {p}",
    "k": "쓰 쌈 뚜아 {k}",
    "m": [
     "I'll buy three",
     "세 벌 살게요"
    ],
    "n": [
     "súe means buy.",
     "súe는 사다예요."
    ]
   },
   {
    "th": "ราคาส่ง",
    "r": "raa-khaa sòng",
    "k": "라카 쏭",
    "m": [
     "wholesale price",
     "도매가"
    ],
    "n": [
     "raa-khaa is price; sòng is wholesale.",
     "raa-khaa는 가격, sòng은 도매예요."
    ]
   },
   {
    "th": "ถูก",
    "r": "thùuk",
    "k": "툭",
    "m": [
     "cheap",
     "싸요"
    ],
    "n": [
     "Low tone.",
     "낮은 성조예요."
    ]
   },
   {
    "th": "ถูกลงหน่อยได้ไหม{Q}",
    "r": "thùuk long nòi dâi mǎi {q}",
    "k": "툭 롱 너이 다이 마이 {k}",
    "m": [
     "Could it be a bit cheaper?",
     "조금 더 싸게 안 돼요?"
    ],
    "n": [
     "long, going down: cheaper.",
     "long은 내려가다예요. 값이 내려가는 거예요."
    ]
   }
  ],
  "intro": [
   "Platinum Fashion Mall is where shop owners come to buy clothes wholesale. Buy more than one and the price drops.",
   "플래티넘 패션 몰은 옷가게 주인들이 도매로 옷을 사러 오는 곳이에요. 여러 벌 사면 가격이 내려가요."
  ],
  "tip": [
   "Every Thai thing has a counter word: jaan for plates, bai for tickets, an for small things, and tua for clothes. Number first, then the counter: sǎam tua, three pieces.",
   "태국어는 물건마다 세는 단위가 있어요. 접시는 jaan, 표는 bai, 작은 물건은 an, 옷은 tua. 숫자 다음에 단위를 붙여요. sǎam tua, 세 벌."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "ตัวละเท่าไหร่{Q}",
    "opts": [
     [
      "How much per piece?",
      "한 벌에 얼마예요?"
     ],
     [
      "I'll buy three",
      "세 벌 살게요"
     ],
     [
      "wholesale price",
      "도매가"
     ]
    ],
    "a": 0,
    "why": [
     "tua lá: per piece of clothing.",
     "tua lá, 옷 한 벌당이에요."
    ]
   },
   {
    "type": "hear",
    "say": "ซื้อสามตัว{P}",
    "opts": [
     "súe sǎam tua {p}",
     "raa-khaa sòng",
     "thùuk"
    ],
    "a": 0,
    "why": [
     "súe, buy.",
     "súe, 사다예요."
    ]
   },
   {
    "type": "mean",
    "say": "ราคาส่ง",
    "opts": [
     [
      "wholesale price",
      "도매가"
     ],
     [
      "cheap",
      "싸요"
     ],
     [
      "Could it be a bit cheaper?",
      "조금 더 싸게 안 돼요?"
     ]
    ],
    "a": 0,
    "why": [
     "raa-khaa sòng, wholesale price.",
     "raa-khaa sòng, 도매가예요."
    ]
   },
   {
    "type": "mean",
    "say": "ถูกลงหน่อยได้ไหม{Q}",
    "opts": [
     [
      "Could it be a bit cheaper?",
      "조금 더 싸게 안 돼요?"
     ],
     [
      "How much per piece?",
      "한 벌에 얼마예요?"
     ],
     [
      "I'll buy three",
      "세 벌 살게요"
     ]
    ],
    "a": 0,
    "why": [
     "thùuk long: get cheaper.",
     "thùuk long, 더 싸지다예요."
    ]
   },
   {
    "type": "hear",
    "say": "ถูก",
    "opts": [
     "thùuk",
     "thùuk long nòi dâi mǎi {q}",
     "tua lá thâo-rài {q}"
    ],
    "a": 0,
    "why": [
     "thùuk, cheap, low tone.",
     "낮은 성조 thùuk, 싸요."
    ]
   }
  ],
  "speak": [
   0,
   1,
   4
  ],
  "fill": [
   {
    "say": "ซื้อสามตัว{P}",
    "parts": [
     "súe",
     "sǎam",
     "_",
     "{p}"
    ],
    "a": [
     "tua"
    ],
    "opts": [
     "tua",
     "bai",
     "jaan"
    ]
   },
   {
    "say": "ถูกลงหน่อยได้ไหม{Q}",
    "parts": [
     "thùuk",
     "_",
     "nòi",
     "dâi",
     "mǎi",
     "{q}"
    ],
    "a": [
     "long"
    ],
    "opts": [
     "long",
     "pai",
     "khûen"
    ]
   },
   {
    "say": "ราคาส่ง",
    "parts": [
     "_",
     "sòng"
    ],
    "a": [
     "raa-khaa"
    ],
    "opts": [
     "raa-khaa",
     "tua",
     "thùuk"
    ]
   }
  ],
  "note": [
   "Platinum opens early in the morning, when traders arrive, and many stalls give the wholesale price for three or more pieces of the same item. Bring cash and a big bag.",
   "플래티넘은 상인들이 오는 이른 아침에 문을 열고, 같은 물건을 세 개 이상 사면 도매가로 주는 가게가 많아요. 현금과 큰 가방을 챙겨 가세요."
  ],
  "today": [
   0,
   1,
   4
  ]
 },
 "6": {
  "guide": "chang",
  "units": [
   {
    "th": "เปลี่ยนได้ไหม{Q}",
    "r": "plìan dâi mǎi {q}",
    "k": "쁠리안 다이 마이 {k}",
    "m": [
     "Can I exchange it?",
     "교환할 수 있어요?"
    ]
   },
   {
    "th": "คืนเงินได้ไหม{Q}",
    "r": "khuen ngoen dâi mǎi {q}",
    "k": "큰 응언 다이 마이 {k}",
    "m": [
     "Can I get a refund?",
     "환불할 수 있어요?"
    ],
    "n": [
     "khuen is to give back; ngoen is money.",
     "khuen은 돌려주다, ngoen은 돈이에요."
    ]
   },
   {
    "th": "ใบเสร็จ",
    "r": "bai-sèt",
    "k": "바이쎗",
    "m": [
     "receipt",
     "영수증"
    ]
   },
   {
    "th": "ขาด",
    "r": "khàat",
    "k": "캇",
    "m": [
     "It's torn",
     "찢어졌어요"
    ]
   },
   {
    "th": "มีตำหนิ",
    "r": "mii tam-nì",
    "k": "미 땀니",
    "m": [
     "It has a flaw",
     "흠이 있어요"
    ]
   }
  ],
  "intro": [
   "Pratunam Market is a maze of clothing stalls. Mistakes happen, so here is what to say when something is wrong.",
   "쁘라뚜남 시장은 옷가게가 미로처럼 이어진 곳이에요. 실수는 생기기 마련이니, 뭔가 잘못됐을 때 쓰는 말을 배워요."
  ],
  "tip": [
   "ngoen, money, is the same word as silver. You saw it in náam-ngoen, blue. Show the problem, say khàat or mii tam-nì, then ask plìan dâi mǎi {q}.",
   "ngoen(돈)은 \"은\"과 같은 말이에요. 파란색 náam-ngoen에서 이미 봤어요. 문제를 보여 주며 khàat이나 mii tam-nì라고 하고, plìan dâi mǎi {q}라고 물어요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "เปลี่ยนได้ไหม{Q}",
    "opts": [
     [
      "Can I exchange it?",
      "교환할 수 있어요?"
     ],
     [
      "Can I get a refund?",
      "환불할 수 있어요?"
     ],
     [
      "receipt",
      "영수증"
     ]
    ],
    "a": 0,
    "why": [
     "plìan, change or exchange.",
     "plìan, 바꾸다예요."
    ]
   },
   {
    "type": "mean",
    "say": "คืนเงินได้ไหม{Q}",
    "opts": [
     [
      "Can I get a refund?",
      "환불할 수 있어요?"
     ],
     [
      "receipt",
      "영수증"
     ],
     [
      "It's torn",
      "찢어졌어요"
     ]
    ],
    "a": 0,
    "why": [
     "khuen ngoen: money back.",
     "khuen ngoen, 돈을 돌려받아요."
    ]
   },
   {
    "type": "hear",
    "say": "ใบเสร็จ",
    "opts": [
     "bai-sèt",
     "khàat",
     "mii tam-nì"
    ],
    "a": 0,
    "why": [
     "bai-sèt, receipt.",
     "bai-sèt, 영수증이에요."
    ]
   },
   {
    "type": "mean",
    "say": "ขาด",
    "opts": [
     [
      "It's torn",
      "찢어졌어요"
     ],
     [
      "It has a flaw",
      "흠이 있어요"
     ],
     [
      "Can I exchange it?",
      "교환할 수 있어요?"
     ]
    ],
    "a": 0,
    "why": [
     "khàat, torn.",
     "khàat, 찢어졌어요."
    ]
   },
   {
    "type": "mean",
    "say": "มีตำหนิ",
    "opts": [
     [
      "It has a flaw",
      "흠이 있어요"
     ],
     [
      "Can I exchange it?",
      "교환할 수 있어요?"
     ],
     [
      "Can I get a refund?",
      "환불할 수 있어요?"
     ]
    ],
    "a": 0,
    "why": [
     "tam-nì, a flaw.",
     "tam-nì, 흠이에요."
    ]
   }
  ],
  "speak": [
   0,
   1,
   3
  ],
  "fill": [
   {
    "say": "เปลี่ยนได้ไหม{Q}",
    "parts": [
     "_",
     "dâi",
     "mǎi",
     "{q}"
    ],
    "a": [
     "plìan"
    ],
    "opts": [
     "plìan",
     "lawng",
     "khuen"
    ]
   },
   {
    "say": "คืนเงินได้ไหม{Q}",
    "parts": [
     "khuen",
     "_",
     "dâi",
     "mǎi",
     "{q}"
    ],
    "a": [
     "ngoen"
    ],
    "opts": [
     "ngoen",
     "tua",
     "rûup"
    ]
   },
   {
    "say": "ขอใบเสร็จ{P}",
    "parts": [
     "khǎw",
     "_",
     "{p}"
    ],
    "a": [
     "bai-sèt"
    ],
    "opts": [
     "bai-sèt",
     "tǔa",
     "mee-nuu"
    ],
    "m": [
     "A receipt, please",
     "영수증 주세요"
    ]
   }
  ],
  "note": [
   "At street markets, refunds are rare, so check seams and zips before you pay. Malls usually allow an exchange within a few days if you keep the bai-sèt.",
   "길거리 시장에서는 환불이 드물어서, 돈을 내기 전에 바느질과 지퍼를 꼭 확인하세요. 쇼핑몰은 bai-sèt을 갖고 있으면 며칠 안에 교환해 주는 곳이 많아요."
  ],
  "today": [
   0,
   2,
   3
  ]
 },
 "7": {
  "guide": "mali",
  "units": [
   {
    "th": "รับถุงไหม{Q}",
    "r": "ráp thǔng mǎi {q}",
    "k": "랍 퉁 마이 {k}",
    "m": [
     "Would you like a bag?",
     "봉투 드릴까요?"
    ],
    "n": [
     "You will hear this one at the counter.",
     "계산대에서 듣게 될 말이에요."
    ]
   },
   {
    "th": "ไม่เอาถุง{P}",
    "r": "mâi ao thǔng {p}",
    "k": "마이 아오 퉁 {k}",
    "m": [
     "No bag, thanks",
     "봉투는 괜찮아요"
    ]
   },
   {
    "th": "จ่ายเงินสด{P}",
    "r": "jàai ngoen-sòt {p}",
    "k": "짜이 응언쏫 {k}",
    "m": [
     "I'll pay cash",
     "현금으로 낼게요"
    ],
    "n": [
     "ngoen-sòt: fresh money, cash.",
     "ngoen-sòt, 말 그대로 \"싱싱한 돈\", 현금이에요."
    ]
   },
   {
    "th": "สแกนจ่ายได้ไหม{Q}",
    "r": "sà-kaen jàai dâi mǎi {q}",
    "k": "싸깬 짜이 다이 마이 {k}",
    "m": [
     "Can I scan to pay?",
     "QR로 결제돼요?"
    ]
   },
   {
    "th": "เงินทอน",
    "r": "ngoen thawn",
    "k": "응언 턴",
    "m": [
     "change (money back)",
     "거스름돈"
    ]
   }
  ],
  "intro": [
   "Central World is one of the city's biggest malls, with a huge square out front for festivals. At the counter, it helps to understand the questions the cashier asks.",
   "센트럴 월드는 방콕에서 손꼽히게 큰 쇼핑몰로, 앞에 축제가 열리는 넓은 광장이 있어요. 계산대에서는 점원이 묻는 말을 알아듣는 게 도움이 돼요."
  ],
  "tip": [
   "ráp means to receive or accept, so ráp thǔng mǎi is \"will you take a bag?\". Answer ráp {p} for yes, or mâi ao thǔng {p}. Many shops now charge a little for bags, or skip them.",
   "ráp은 받다라서, ráp thǔng mǎi는 \"봉투 받으실래요?\"예요. 받으려면 ráp {p}, 아니면 mâi ao thǔng {p}이라고 해요. 요즘은 봉투값을 받거나 아예 주지 않는 가게가 많아요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "รับถุงไหม{Q}",
    "opts": [
     [
      "Would you like a bag?",
      "봉투 드릴까요?"
     ],
     [
      "No bag, thanks",
      "봉투는 괜찮아요"
     ],
     [
      "I'll pay cash",
      "현금으로 낼게요"
     ]
    ],
    "a": 0,
    "why": [
     "thǔng is a bag.",
     "thǔng은 봉투예요."
    ]
   },
   {
    "type": "hear",
    "say": "ไม่เอาถุง{P}",
    "opts": [
     "mâi ao thǔng {p}",
     "jàai ngoen-sòt {p}",
     "sà-kaen jàai dâi mǎi {q}"
    ],
    "a": 0,
    "why": [
     "mâi ao thǔng, no bag.",
     "mâi ao thǔng, 봉투는 괜찮아요."
    ]
   },
   {
    "type": "mean",
    "say": "จ่ายเงินสด{P}",
    "opts": [
     [
      "I'll pay cash",
      "현금으로 낼게요"
     ],
     [
      "Can I scan to pay?",
      "QR로 결제돼요?"
     ],
     [
      "change (money back)",
      "거스름돈"
     ]
    ],
    "a": 0,
    "why": [
     "ngoen-sòt, cash.",
     "ngoen-sòt, 현금이에요."
    ]
   },
   {
    "type": "mean",
    "say": "สแกนจ่ายได้ไหม{Q}",
    "opts": [
     [
      "Can I scan to pay?",
      "QR로 결제돼요?"
     ],
     [
      "change (money back)",
      "거스름돈"
     ],
     [
      "Would you like a bag?",
      "봉투 드릴까요?"
     ]
    ],
    "a": 0,
    "why": [
     "sà-kaen, scan.",
     "sà-kaen, 스캔이에요."
    ]
   },
   {
    "type": "mean",
    "say": "เงินทอน",
    "opts": [
     [
      "change (money back)",
      "거스름돈"
     ],
     [
      "Would you like a bag?",
      "봉투 드릴까요?"
     ],
     [
      "No bag, thanks",
      "봉투는 괜찮아요"
     ]
    ],
    "a": 0,
    "why": [
     "thawn, to give change.",
     "thawn, 거슬러 주다예요."
    ]
   }
  ],
  "speak": [
   1,
   2,
   3
  ],
  "fill": [
   {
    "say": "ไม่เอาถุง{P}",
    "parts": [
     "mâi",
     "ao",
     "_",
     "{p}"
    ],
    "a": [
     "thǔng"
    ],
    "opts": [
     "thǔng",
     "tua",
     "tǔa"
    ]
   },
   {
    "say": "จ่ายเงินสด{P}",
    "parts": [
     "_",
     "ngoen-sòt",
     "{p}"
    ],
    "a": [
     "jàai"
    ],
    "opts": [
     "jàai",
     "súe",
     "khuen"
    ]
   },
   {
    "say": "สแกนจ่ายได้ไหม{Q}",
    "parts": [
     "sà-kaen",
     "_",
     "dâi",
     "mǎi",
     "{q}"
    ],
    "a": [
     "jàai"
    ],
    "opts": [
     "jàai",
     "súe",
     "lawng"
    ]
   }
  ],
  "note": [
   "Visitors can claim back the value added tax on purchases at stores marked \"VAT Refund for Tourists\". Ask for the form at the counter on the day you buy, keep your bai-sèt, and get it stamped at the airport before check-in.",
   "\"VAT Refund for Tourists\" 표시가 있는 가게에서 산 물건은 부가세를 돌려받을 수 있어요. 산 날 계산대에서 서류를 받고 bai-sèt을 잘 보관했다가, 공항에서 체크인 전에 확인 도장을 받으세요."
  ],
  "today": [
   0,
   1,
   2
  ]
 },
 "8": {
  "guide": "chang",
  "units": [
   {
    "th": "ชั้นไหน{Q}",
    "r": "chán nǎi {q}",
    "k": "찬 나이 {k}",
    "m": [
     "Which floor?",
     "몇 층이에요?"
    ],
    "n": [
     "Lesson 1",
     "1과"
    ]
   },
   {
    "th": "พอดี",
    "r": "phaw-dii",
    "k": "퍼디",
    "m": [
     "Just right",
     "딱 맞아요"
    ],
    "n": [
     "Lesson 2",
     "2과"
    ]
   },
   {
    "th": "ลองได้ไหม{Q}",
    "r": "lawng dâi mǎi {q}",
    "k": "렁 다이 마이 {k}",
    "m": [
     "Can I try it on?",
     "입어 봐도 돼요?"
    ],
    "n": [
     "Lesson 3",
     "3과"
    ]
   },
   {
    "th": "มีสีดำไหม{Q}",
    "r": "mii sǐi dam mǎi {q}",
    "k": "미 씨 담 마이 {k}",
    "m": [
     "Do you have it in black?",
     "검은색 있어요?"
    ],
    "n": [
     "Lesson 4",
     "4과"
    ]
   },
   {
    "th": "ถูกลงหน่อยได้ไหม{Q}",
    "r": "thùuk long nòi dâi mǎi {q}",
    "k": "툭 롱 너이 다이 마이 {k}",
    "m": [
     "Could it be a bit cheaper?",
     "조금 더 싸게 안 돼요?"
    ],
    "n": [
     "Lesson 5",
     "5과"
    ]
   },
   {
    "th": "เปลี่ยนได้ไหม{Q}",
    "r": "plìan dâi mǎi {q}",
    "k": "쁠리안 다이 마이 {k}",
    "m": [
     "Can I exchange it?",
     "교환할 수 있어요?"
    ],
    "n": [
     "Lesson 6",
     "6과"
    ]
   }
  ],
  "intro": [
   "Back in Pratunam, at the end of the shopping stretch. Let us go over everything, from floors to refunds.",
   "쇼핑 구간의 끝, 다시 쁘라뚜남이에요. 층부터 환불까지 모두 복습해요."
  ],
  "tip": [
   "A full shopping conversation: mii sai yài kwàa níi mǎi {q}? lawng dâi mǎi {q}? phaw-dii. thùuk long nòi dâi mǎi {q}? jàai ngoen-sòt {p}. And to finish, khàwp-khun {p}.",
   "쇼핑 대화를 처음부터 끝까지 떠올려 봐요. mii sai yài kwàa níi mǎi {q}? lawng dâi mǎi {q}? phaw-dii. thùuk long nòi dâi mǎi {q}? jàai ngoen-sòt {p}. 그리고 마무리는 khàwp-khun {p}."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "พอดี",
    "opts": [
     [
      "Just right",
      "딱 맞아요"
     ],
     [
      "Can I try it on?",
      "입어 봐도 돼요?"
     ],
     [
      "Do you have it in black?",
      "검은색 있어요?"
     ]
    ],
    "a": 0,
    "why": [
     "phaw-dii. Lesson 2.",
     "phaw-dii. 2과."
    ]
   },
   {
    "type": "mean",
    "say": "ลองได้ไหม{Q}",
    "opts": [
     [
      "Can I try it on?",
      "입어 봐도 돼요?"
     ],
     [
      "Do you have it in black?",
      "검은색 있어요?"
     ],
     [
      "Could it be a bit cheaper?",
      "조금 더 싸게 안 돼요?"
     ]
    ],
    "a": 0,
    "why": [
     "lawng. Lesson 3.",
     "lawng. 3과."
    ]
   },
   {
    "type": "hear",
    "say": "มีสีดำไหม{Q}",
    "opts": [
     "mii sǐi dam mǎi {q}",
     "thùuk long nòi dâi mǎi {q}",
     "plìan dâi mǎi {q}"
    ],
    "a": 0,
    "why": [
     "sǐi dam, black. Lesson 4.",
     "sǐi dam, 검은색. 4과."
    ]
   },
   {
    "type": "mean",
    "say": "ถูกลงหน่อยได้ไหม{Q}",
    "opts": [
     [
      "Could it be a bit cheaper?",
      "조금 더 싸게 안 돼요?"
     ],
     [
      "Can I exchange it?",
      "교환할 수 있어요?"
     ],
     [
      "Which floor?",
      "몇 층이에요?"
     ]
    ],
    "a": 0,
    "why": [
     "thùuk long. Lesson 5.",
     "thùuk long. 5과."
    ]
   },
   {
    "type": "hear",
    "say": "เปลี่ยนได้ไหม{Q}",
    "opts": [
     "plìan dâi mǎi {q}",
     "chán nǎi {q}",
     "phaw-dii"
    ],
    "a": 0,
    "why": [
     "plìan. Lesson 6.",
     "plìan. 6과."
    ]
   },
   {
    "type": "hear",
    "say": "ชั้นไหน{Q}",
    "opts": [
     "chán nǎi {q}",
     "phaw-dii",
     "lawng dâi mǎi {q}"
    ],
    "a": 0,
    "why": [
     "chán nǎi. Lesson 1.",
     "chán nǎi. 1과."
    ]
   }
  ],
  "speak": [
   2,
   4,
   5
  ],
  "fill": [
   {
    "say": "ใหญ่ไป",
    "parts": [
     "yài",
     "_"
    ],
    "a": [
     "pai"
    ],
    "opts": [
     "pai",
     "kwàa",
     "dii"
    ],
    "m": [
     "Too big",
     "너무 커요"
    ]
   },
   {
    "say": "ซื้อสองตัว{P}",
    "parts": [
     "súe",
     "_",
     "tua",
     "{p}"
    ],
    "a": [
     "sǎwng"
    ],
    "opts": [
     "sǎwng",
     "sǎam",
     "sìi"
    ],
    "m": [
     "I'll buy two",
     "두 벌 살게요"
    ]
   },
   {
    "say": "ไม่มี",
    "parts": [
     "_",
     "mii"
    ],
    "a": [
     "mâi"
    ],
    "opts": [
     "mâi",
     "mài",
     "mǎi"
    ]
   },
   {
    "say": "ไม่เอาถุง{P}",
    "parts": [
     "mâi",
     "_",
     "thǔng",
     "{p}"
    ],
    "a": [
     "ao"
    ],
    "opts": [
     "ao",
     "mii",
     "lawng"
    ]
   }
  ],
  "note": [
   "Pratunam's skyline is ruled by Baiyoke Tower II, for years the tallest building in Thailand. That is where the next stretch begins, as Bangkok lights up at night. You have finished the fourth stretch.",
   "쁘라뚜남 하늘은 오랫동안 태국에서 가장 높은 건물이었던 바이욕 타워 2가 지키고 있어요. 다음 구간은 방콕에 불이 켜지는 밤, 바로 그곳에서 시작해요. 넷째 구간을 모두 마쳤어요."
  ],
  "today": [
   2,
   3,
   4
  ],
  "final": true,
  "chooseTitle": [
   "Pick what you heard",
   "들은 말 고르기"
  ]
 }
};
