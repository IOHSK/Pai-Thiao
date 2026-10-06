// 6번째 구간 수업 내용. build.py로 만들었다. 형식은 stretch-1-lessons.js 맨 위 설명과 같다.
window.PT_LESSONS = window.PT_LESSONS || {};
PT_LESSONS[6] = {
 "1": {
  "guide": "mali",
  "units": [
   {
    "th": "นวดไทย",
    "r": "nûat thai",
    "k": "누앗 타이",
    "m": [
     "Thai massage",
     "타이 마사지"
    ]
   },
   {
    "th": "นวดเท้า",
    "r": "nûat tháao",
    "k": "누앗 타오",
    "m": [
     "foot massage",
     "발 마사지"
    ],
    "n": [
     "tháao is foot. rawng-tháao, shoes, is \"foot cover\".",
     "tháao는 발이에요. 신발 rawng-tháao는 \"발 받침\"이에요."
    ]
   },
   {
    "th": "เบาๆ หน่อย{P}",
    "r": "bao-bao nòi {p}",
    "k": "바오바오 너이 {k}",
    "m": [
     "A bit gentler, please",
     "조금 살살 해 주세요"
    ]
   },
   {
    "th": "แรงหน่อย{P}",
    "r": "raeng nòi {p}",
    "k": "랭 너이 {k}",
    "m": [
     "A bit stronger, please",
     "조금 세게 해 주세요"
    ]
   },
   {
    "th": "เจ็บ",
    "r": "jèp",
    "k": "쩹",
    "m": [
     "It hurts",
     "아파요"
    ],
    "n": [
     "Say it right away. A good therapist will adjust.",
     "바로 말하세요. 좋은 마사지사는 바로 조절해 줘요."
    ]
   },
   {
    "th": "ชั่วโมงละเท่าไหร่{Q}",
    "r": "chûa-mohng lá thâo-rài {q}",
    "k": "추아몽 라 타오라이 {k}",
    "m": [
     "How much per hour?",
     "한 시간에 얼마예요?"
    ]
   }
  ],
  "intro": [
   "A slow day in the city. Around Sala Daeng there are massage shops on almost every corner. Here is what you need on the mat.",
   "도시에서 보내는 느긋한 하루예요. 살라댕 근처에는 거의 골목마다 마사지 가게가 있어요. 매트 위에서 필요한 말을 배워요."
  ],
  "tip": [
   "Thai massage can be strong. bao-bao nòi {p} and raeng nòi {p} let you set the pressure, and jèp gets an instant change. lá from wan lá returns: chûa-mohng lá, per hour.",
   "타이 마사지는 꽤 셀 수 있어요. bao-bao nòi {p}와 raeng nòi {p}로 세기를 맞추고, jèp이라고 하면 바로 바꿔 줘요. wan lá의 lá가 또 나와요. chûa-mohng lá, 한 시간당."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "นวดเท้า",
    "opts": [
     [
      "foot massage",
      "발 마사지"
     ],
     [
      "Thai massage",
      "타이 마사지"
     ],
     [
      "It hurts",
      "아파요"
     ]
    ],
    "a": 0,
    "why": [
     "tháao, foot.",
     "tháao, 발이에요."
    ]
   },
   {
    "type": "mean",
    "say": "เบาๆ หน่อย{P}",
    "opts": [
     [
      "A bit gentler, please",
      "조금 살살 해 주세요"
     ],
     [
      "A bit stronger, please",
      "조금 세게 해 주세요"
     ],
     [
      "It hurts",
      "아파요"
     ]
    ],
    "a": 0,
    "why": [
     "bao, light or gentle.",
     "bao, 가볍다, 살살이에요."
    ]
   },
   {
    "type": "mean",
    "say": "แรงหน่อย{P}",
    "opts": [
     [
      "A bit stronger, please",
      "조금 세게 해 주세요"
     ],
     [
      "A bit gentler, please",
      "조금 살살 해 주세요"
     ],
     [
      "It hurts",
      "아파요"
     ]
    ],
    "a": 0,
    "why": [
     "raeng, strong.",
     "raeng, 세다예요."
    ]
   },
   {
    "type": "hear",
    "say": "เจ็บ",
    "opts": [
     "jèp",
     "raeng nòi {p}",
     "nûat tháao"
    ],
    "a": 0,
    "why": [
     "jèp, it hurts.",
     "jèp, 아파요."
    ]
   },
   {
    "type": "mean",
    "say": "ชั่วโมงละเท่าไหร่{Q}",
    "opts": [
     [
      "How much per hour?",
      "한 시간에 얼마예요?"
     ],
     [
      "It hurts",
      "아파요"
     ],
     [
      "Thai massage",
      "타이 마사지"
     ]
    ],
    "a": 0,
    "why": [
     "chûa-mohng lá: per hour.",
     "chûa-mohng lá, 한 시간당이에요."
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
    "say": "เบาๆ หน่อย{P}",
    "parts": [
     "_",
     "nòi",
     "{p}"
    ],
    "a": [
     "bao-bao"
    ],
    "opts": [
     "bao-bao",
     "raeng",
     "cháa-cháa"
    ]
   },
   {
    "say": "นวดเท้า",
    "parts": [
     "nûat",
     "_"
    ],
    "a": [
     "tháao"
    ],
    "opts": [
     "tháao",
     "thai",
     "hǔa"
    ]
   },
   {
    "say": "ชั่วโมงละเท่าไหร่{Q}",
    "parts": [
     "chûa-mohng",
     "_",
     "thâo-rài",
     "{q}"
    ],
    "a": [
     "lá"
    ],
    "opts": [
     "lá",
     "nòi",
     "kìi"
    ]
   }
  ],
  "note": [
   "A tip of about 50 to 100 baht for a one-hour massage is common and appreciated, handed to the therapist directly. Shops often serve warm tea or a cool drink at the end.",
   "한 시간 마사지에 50에서 100밧 정도의 팁을 마사지사에게 직접 주는 경우가 많고, 고마워해요. 끝나면 따뜻한 차나 시원한 음료를 내주는 가게가 많아요."
  ],
  "today": [
   2,
   4,
   5
  ]
 },
 "2": {
  "guide": "chang",
  "units": [
   {
    "th": "ทำอาหาร",
    "r": "tham aa-hǎan",
    "k": "탐 아한",
    "m": [
     "to cook",
     "요리하다"
    ],
    "n": [
     "tham is to make or do.",
     "tham은 만들다, 하다예요."
    ]
   },
   {
    "th": "หั่น",
    "r": "hàn",
    "k": "한",
    "m": [
     "cut, slice",
     "썰다"
    ]
   },
   {
    "th": "ผัด",
    "r": "phàt",
    "k": "팟",
    "m": [
     "stir-fry",
     "볶다"
    ],
    "n": [
     "The phàt in phàt-thai.",
     "phàt-thai의 그 phàt이에요."
    ]
   },
   {
    "th": "ต้ม",
    "r": "tôm",
    "k": "똠",
    "m": [
     "boil",
     "끓이다"
    ],
    "n": [
     "The tôm in tôm yam.",
     "tôm yam(똠얌)의 그 tôm이에요."
    ]
   },
   {
    "th": "ใส่น้ำปลา",
    "r": "sài náam-plaa",
    "k": "싸이 남쁠라",
    "m": [
     "add fish sauce",
     "피시 소스를 넣어요"
    ]
   },
   {
    "th": "ชิมดู",
    "r": "chim duu",
    "k": "침 두",
    "m": [
     "taste it and see",
     "맛봐요"
    ],
    "n": [
     "duu after a verb: try it and see.",
     "동사 뒤의 duu는 \"해 보다\"예요."
    ]
   }
  ],
  "intro": [
   "A Thai cooking class usually starts at a fresh market and ends with lunch you made yourself. Here are the kitchen words.",
   "태국 요리 교실은 보통 재래시장에서 시작해서 내가 만든 점심으로 끝나요. 부엌에서 쓰는 말을 배워요."
  ],
  "tip": [
   "Many dish names are just recipes: phàt-thai is stir-fried Thai style, tôm yam is boiled and mixed, khâo phàt is fried rice. Learn the verbs and menus start to make sense.",
   "음식 이름 중에는 요리법 그 자체인 것이 많아요. phàt-thai는 태국식 볶음, tôm yam은 끓여서 버무린 것, khâo phàt은 볶음밥이에요. 동사를 알면 메뉴가 읽히기 시작해요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "หั่น",
    "opts": [
     [
      "cut, slice",
      "썰다"
     ],
     [
      "stir-fry",
      "볶다"
     ],
     [
      "boil",
      "끓이다"
     ]
    ],
    "a": 0,
    "why": [
     "hàn, slice.",
     "hàn, 썰다예요."
    ]
   },
   {
    "type": "mean",
    "say": "ผัด",
    "opts": [
     [
      "stir-fry",
      "볶다"
     ],
     [
      "boil",
      "끓이다"
     ],
     [
      "cut, slice",
      "썰다"
     ]
    ],
    "a": 0,
    "why": [
     "phàt, stir-fry.",
     "phàt, 볶다예요."
    ]
   },
   {
    "type": "mean",
    "say": "ต้ม",
    "opts": [
     [
      "boil",
      "끓이다"
     ],
     [
      "stir-fry",
      "볶다"
     ],
     [
      "cut, slice",
      "썰다"
     ]
    ],
    "a": 0,
    "why": [
     "tôm, boil.",
     "tôm, 끓이다예요."
    ]
   },
   {
    "type": "hear",
    "say": "ใส่น้ำปลา",
    "opts": [
     "sài náam-plaa",
     "chim duu",
     "tham aa-hǎan"
    ],
    "a": 0,
    "why": [
     "náam-plaa, fish sauce: fish water.",
     "náam-plaa, 피시 소스예요. 말 그대로 \"생선 물\"."
    ]
   },
   {
    "type": "mean",
    "say": "ชิมดู",
    "opts": [
     [
      "taste it and see",
      "맛봐요"
     ],
     [
      "to cook",
      "요리하다"
     ],
     [
      "cut, slice",
      "썰다"
     ]
    ],
    "a": 0,
    "why": [
     "chim duu: taste and see.",
     "chim duu, 맛보다예요."
    ]
   },
   {
    "type": "hear",
    "say": "ทำอาหาร",
    "opts": [
     "tham aa-hǎan",
     "hàn",
     "phàt"
    ],
    "a": 0,
    "why": [
     "tham aa-hǎan, cook.",
     "tham aa-hǎan, 요리하다예요."
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
    "say": "ข้าวผัด",
    "parts": [
     "khâo",
     "_"
    ],
    "a": [
     "phàt"
    ],
    "opts": [
     "phàt",
     "tôm",
     "hàn"
    ],
    "m": [
     "fried rice",
     "볶음밥"
    ]
   },
   {
    "say": "ใส่น้ำปลา",
    "parts": [
     "sài",
     "_"
    ],
    "a": [
     "náam-plaa"
    ],
    "opts": [
     "náam-plaa",
     "náam-plào",
     "náam-khǎeng"
    ]
   },
   {
    "say": "ชิมดู",
    "parts": [
     "_",
     "duu"
    ],
    "a": [
     "chim"
    ],
    "opts": [
     "chim",
     "kin",
     "lawng"
    ]
   }
  ],
  "note": [
   "Cooking schools often start with a walk through a morning market to buy lemongrass, galangal, and kaffir lime leaves, the three herbs at the heart of tôm yam. You will go home knowing how to make two or three dishes.",
   "요리 교실은 보통 아침 시장을 걸으며 레몬그라스, 갈랑갈, 카피르 라임 잎을 사는 것으로 시작해요. 똠얌의 핵심인 세 가지 허브예요. 끝날 때쯤엔 두세 가지 요리를 할 줄 알게 돼요."
  ],
  "today": [
   0,
   2,
   3
  ]
 },
 "3": {
  "guide": "mali",
  "units": [
   {
    "th": "สวนสาธารณะ",
    "r": "sǔan sǎa-thaa-rá-ná",
    "k": "쑤안 싸타라나",
    "m": [
     "public park",
     "공원"
    ]
   },
   {
    "th": "เดินเล่น",
    "r": "doen lên",
    "k": "던 렌",
    "m": [
     "take a walk",
     "산책하다"
    ],
    "n": [
     "lên means play, so this is \"walk for fun\".",
     "lên은 놀다라서, \"놀며 걷기\"예요."
    ]
   },
   {
    "th": "วิ่ง",
    "r": "wîng",
    "k": "윙",
    "m": [
     "run, jog",
     "달리다"
    ]
   },
   {
    "th": "ตัวเงินตัวทอง",
    "r": "tua-ngoen-tua-thawng",
    "k": "뚜아응언뚜아텅",
    "m": [
     "monitor lizard",
     "왕도마뱀"
    ],
    "n": [
     "A polite name: \"silver and gold\". Tukkae has opinions about these big cousins.",
     "\"은과 금\"이라는 공손한 이름이에요. 뚝깨는 이 큰 친척에 대해 할 말이 많아요."
    ]
   },
   {
    "th": "อากาศดี",
    "r": "aa-kàat dii",
    "k": "아깟 디",
    "m": [
     "The weather is nice",
     "날씨가 좋아요"
    ]
   }
  ],
  "intro": [
   "Lumphini Park is Bangkok's green heart, with a lake, joggers, and some very large lizards. Morning or evening is the best time to go.",
   "룸피니 공원은 호수, 달리는 사람들, 그리고 아주 큰 도마뱀이 있는 방콕의 초록 심장이에요. 아침이나 저녁에 가는 게 가장 좋아요."
  ],
  "tip": [
   "lên, play, turns many verbs into \"for fun\": doen lên, walk for fun; kin lên, snack. aa-kàat is weather and also air: aa-kàat dii, nice weather.",
   "lên(놀다)을 붙이면 \"재미로 하는 것\"이 돼요. doen lên은 산책, kin lên은 군것질이에요. aa-kàat은 날씨이자 공기예요. aa-kàat dii, 날씨가 좋아요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "เดินเล่น",
    "opts": [
     [
      "take a walk",
      "산책하다"
     ],
     [
      "run, jog",
      "달리다"
     ],
     [
      "monitor lizard",
      "왕도마뱀"
     ]
    ],
    "a": 0,
    "why": [
     "doen lên, stroll.",
     "doen lên, 산책이에요."
    ]
   },
   {
    "type": "hear",
    "say": "วิ่ง",
    "opts": [
     "wîng",
     "tua-ngoen-tua-thawng",
     "aa-kàat dii"
    ],
    "a": 0,
    "why": [
     "wîng, run.",
     "wîng, 달리다예요."
    ]
   },
   {
    "type": "mean",
    "say": "ตัวเงินตัวทอง",
    "opts": [
     [
      "monitor lizard",
      "왕도마뱀"
     ],
     [
      "The weather is nice",
      "날씨가 좋아요"
     ],
     [
      "public park",
      "공원"
     ]
    ],
    "a": 0,
    "why": [
     "tua-ngoen-tua-thawng, monitor lizard.",
     "tua-ngoen-tua-thawng, 왕도마뱀이에요."
    ]
   },
   {
    "type": "mean",
    "say": "อากาศดี",
    "opts": [
     [
      "The weather is nice",
      "날씨가 좋아요"
     ],
     [
      "public park",
      "공원"
     ],
     [
      "take a walk",
      "산책하다"
     ]
    ],
    "a": 0,
    "why": [
     "aa-kàat dii, nice weather.",
     "aa-kàat dii, 날씨가 좋아요."
    ]
   },
   {
    "type": "hear",
    "say": "สวนสาธารณะ",
    "opts": [
     "sǔan sǎa-thaa-rá-ná",
     "doen lên",
     "wîng"
    ],
    "a": 0,
    "why": [
     "sǔan, park or garden.",
     "sǔan, 공원, 정원이에요."
    ]
   }
  ],
  "speak": [
   1,
   2,
   4
  ],
  "fill": [
   {
    "say": "เดินเล่น",
    "parts": [
     "doen",
     "_"
    ],
    "a": [
     "lên"
    ],
    "opts": [
     "lên",
     "pai",
     "mâak"
    ]
   },
   {
    "say": "อากาศดี",
    "parts": [
     "aa-kàat",
     "_"
    ],
    "a": [
     "dii"
    ],
    "opts": [
     "dii",
     "mâak",
     "nòi"
    ]
   },
   {
    "say": "วิ่งตอนเช้า",
    "parts": [
     "_",
     "tawn",
     "cháo"
    ],
    "a": [
     "wîng"
    ],
    "opts": [
     "wîng",
     "doen",
     "nûat"
    ],
    "m": [
     "run in the morning",
     "아침에 달려요"
    ]
   }
  ],
  "note": [
   "At 6 in the evening, the national anthem plays over the park loudspeakers, and everyone stops where they are and stands still until it ends. Just do the same. The monitor lizards are shy and harmless if you leave them alone.",
   "저녁 6시가 되면 공원 스피커에서 국가가 나오고, 모두 그 자리에 멈춰 끝날 때까지 가만히 서 있어요. 똑같이 하면 돼요. 왕도마뱀은 겁이 많아서 건드리지 않으면 해가 없어요."
  ],
  "today": [
   1,
   3,
   4
  ]
 },
 "4": {
  "guide": "chang",
  "units": [
   {
    "th": "ฝนตก",
    "r": "fǒn tòk",
    "k": "폰 똑",
    "m": [
     "It's raining",
     "비가 와요"
    ],
    "n": [
     "tòk is to fall: rain falls.",
     "tòk은 떨어지다예요. 비가 떨어져요."
    ]
   },
   {
    "th": "ฝนจะตกไหม{Q}",
    "r": "fǒn jà tòk mǎi {q}",
    "k": "폰 짜 똑 마이 {k}",
    "m": [
     "Is it going to rain?",
     "비 올까요?"
    ],
    "n": [
     "jà marks the future: will.",
     "jà는 앞으로 일어날 일을 나타내요."
    ]
   },
   {
    "th": "แดดแรง",
    "r": "dàet raeng",
    "k": "댓 랭",
    "m": [
     "The sun is strong",
     "햇볕이 강해요"
    ]
   },
   {
    "th": "อากาศร้อน",
    "r": "aa-kàat ráwn",
    "k": "아깟 런",
    "m": [
     "The weather is hot",
     "날씨가 더워요"
    ]
   },
   {
    "th": "หลบฝน",
    "r": "lòp fǒn",
    "k": "롭 폰",
    "m": [
     "shelter from the rain",
     "비를 피하다"
    ]
   }
  ],
  "intro": [
   "Benjakitti Forest Park has a long raised walkway over wetlands, right in the middle of the city. Out in the open, the weather matters.",
   "벤짜끼띠 숲 공원에는 도시 한가운데 습지 위로 길게 이어진 공중 산책로가 있어요. 탁 트인 곳에서는 날씨가 중요해요."
  ],
  "tip": [
   "Thai has no future tense, but jà in front of a verb means \"will\": fǒn jà tòk, it will rain; jà pai, I will go. Listen for the rising fǒn, rain.",
   "태국어에는 미래형이 없지만, 동사 앞의 jà가 \"~할 거예요\"를 나타내요. fǒn jà tòk, 비가 올 거예요. jà pai, 갈 거예요. 올라가는 성조의 fǒn(비)을 잘 들어 보세요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "ฝนตก",
    "opts": [
     [
      "It's raining",
      "비가 와요"
     ],
     [
      "The sun is strong",
      "햇볕이 강해요"
     ],
     [
      "The weather is hot",
      "날씨가 더워요"
     ]
    ],
    "a": 0,
    "why": [
     "fǒn tòk, rain falls.",
     "fǒn tòk, 비가 와요."
    ]
   },
   {
    "type": "mean",
    "say": "ฝนจะตกไหม{Q}",
    "opts": [
     [
      "Is it going to rain?",
      "비 올까요?"
     ],
     [
      "It's raining",
      "비가 와요"
     ],
     [
      "shelter from the rain",
      "비를 피하다"
     ]
    ],
    "a": 0,
    "why": [
     "jà: will.",
     "jà, ~할 거예요."
    ]
   },
   {
    "type": "mean",
    "say": "แดดแรง",
    "opts": [
     [
      "The sun is strong",
      "햇볕이 강해요"
     ],
     [
      "The weather is hot",
      "날씨가 더워요"
     ],
     [
      "It's raining",
      "비가 와요"
     ]
    ],
    "a": 0,
    "why": [
     "dàet, sunshine.",
     "dàet, 햇볕이에요."
    ]
   },
   {
    "type": "hear",
    "say": "หลบฝน",
    "opts": [
     "lòp fǒn",
     "fǒn tòk",
     "fǒn jà tòk mǎi {q}"
    ],
    "a": 0,
    "why": [
     "lòp, to dodge or shelter.",
     "lòp, 피하다예요."
    ]
   },
   {
    "type": "hear",
    "say": "อากาศร้อน",
    "opts": [
     "aa-kàat ráwn",
     "lòp fǒn",
     "fǒn tòk"
    ],
    "a": 0,
    "why": [
     "ráwn, hot.",
     "ráwn, 덥다예요."
    ]
   }
  ],
  "speak": [
   0,
   1,
   2
  ],
  "fill": [
   {
    "say": "ฝนจะตกไหม{Q}",
    "parts": [
     "fǒn",
     "_",
     "tòk",
     "mǎi",
     "{q}"
    ],
    "a": [
     "jà"
    ],
    "opts": [
     "jà",
     "mâi",
     "láew"
    ]
   },
   {
    "say": "ฝนตก",
    "parts": [
     "_",
     "tòk"
    ],
    "a": [
     "fǒn"
    ],
    "opts": [
     "fǒn",
     "fai",
     "fâa"
    ]
   },
   {
    "say": "แดดแรง",
    "parts": [
     "dàet",
     "_"
    ],
    "a": [
     "raeng"
    ],
    "opts": [
     "raeng",
     "ráwn",
     "dii"
    ]
   }
  ],
  "note": [
   "From about May to October, Bangkok has heavy afternoon storms that can pour for an hour and then stop. Carry a small umbrella, and when it starts, do what everyone does: lòp fǒn under a shop awning and wait it out.",
   "대략 5월부터 10월까지 방콕에는 오후마다 한 시간쯤 쏟아붓고 그치는 소나기가 와요. 작은 우산을 챙기고, 비가 오기 시작하면 모두가 하듯 가게 차양 아래에서 lòp fǒn 하며 기다리세요."
  ],
  "today": [
   0,
   1,
   4
  ]
 },
 "5": {
  "guide": "mali",
  "units": [
   {
    "th": "มวยไทย",
    "r": "muai thai",
    "k": "무아이 타이",
    "m": [
     "Muay Thai, Thai boxing",
     "무에타이"
    ]
   },
   {
    "th": "สู้ๆ",
    "r": "sûu sûu",
    "k": "쑤쑤",
    "m": [
     "Fight! You can do it!",
     "힘내! 파이팅!"
    ],
    "n": [
     "Also said to friends before an exam or a hard day.",
     "시험이나 힘든 날을 앞둔 친구에게도 해요."
    ]
   },
   {
    "th": "ชนะ",
    "r": "chá-ná",
    "k": "차나",
    "m": [
     "win",
     "이기다"
    ]
   },
   {
    "th": "แพ้",
    "r": "pháe",
    "k": "패",
    "m": [
     "lose",
     "지다"
    ],
    "n": [
     "The same word as allergic, pháe thùa. Context tells you which.",
     "알레르기 pháe thùa의 그 pháe와 같은 말이에요. 문맥으로 구별해요."
    ]
   },
   {
    "th": "เก่งมาก",
    "r": "kèng mâak",
    "k": "껭 막",
    "m": [
     "Really skilled",
     "정말 잘해요"
    ],
    "n": [
     "kèng: good at something. A great compliment for your Thai, too.",
     "kèng은 잘한다는 뜻이에요. 태국어 칭찬으로도 자주 들을 거예요."
    ]
   }
  ],
  "intro": [
   "Rajadamnern Stadium is the oldest Muay Thai stadium in Bangkok. The crowd is loud, and you will want to join in.",
   "랏차담넌 경기장은 방콕에서 가장 오래된 무에타이 경기장이에요. 관중 소리가 대단해서 함께 외치고 싶어질 거예요."
  ],
  "tip": [
   "sûu sûu is the cheer you will hear, and you can shout it too. When a Thai friend hears you speak, you may also hear phûut thai kèng, you speak Thai well. Smile and say khàwp-khun {p}.",
   "sûu sûu는 경기장에서 듣게 될 응원이고, 함께 외쳐도 돼요. 태국 친구가 내 태국어를 들으면 phûut thai kèng(태국어 잘하네요)이라고 할 수도 있어요. 웃으며 khàwp-khun {p}이라고 해요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "ชนะ",
    "opts": [
     [
      "win",
      "이기다"
     ],
     [
      "lose",
      "지다"
     ],
     [
      "Really skilled",
      "정말 잘해요"
     ]
    ],
    "a": 0,
    "why": [
     "chá-ná, win.",
     "chá-ná, 이기다예요."
    ]
   },
   {
    "type": "mean",
    "say": "แพ้",
    "opts": [
     [
      "lose",
      "지다"
     ],
     [
      "win",
      "이기다"
     ],
     [
      "Really skilled",
      "정말 잘해요"
     ]
    ],
    "a": 0,
    "why": [
     "pháe, lose.",
     "pháe, 지다예요."
    ]
   },
   {
    "type": "mean",
    "say": "สู้ๆ",
    "opts": [
     [
      "Fight! You can do it!",
      "힘내! 파이팅!"
     ],
     [
      "win",
      "이기다"
     ],
     [
      "lose",
      "지다"
     ]
    ],
    "a": 0,
    "why": [
     "sûu, fight.",
     "sûu, 싸우다, 힘내다예요."
    ]
   },
   {
    "type": "hear",
    "say": "เก่งมาก",
    "opts": [
     "kèng mâak",
     "muai thai",
     "sûu sûu"
    ],
    "a": 0,
    "why": [
     "kèng, skilled.",
     "kèng, 잘하다예요."
    ]
   },
   {
    "type": "hear",
    "say": "มวยไทย",
    "opts": [
     "muai thai",
     "sûu sûu",
     "chá-ná"
    ],
    "a": 0,
    "why": [
     "muai thai, Thai boxing.",
     "muai thai, 무에타이예요."
    ]
   }
  ],
  "speak": [
   1,
   2,
   4
  ],
  "fill": [
   {
    "say": "เก่งมาก",
    "parts": [
     "_",
     "mâak"
    ],
    "a": [
     "kèng"
    ],
    "opts": [
     "kèng",
     "sûu",
     "dii"
    ]
   },
   {
    "say": "ชนะแล้ว",
    "parts": [
     "_",
     "láew"
    ],
    "a": [
     "chá-ná"
    ],
    "opts": [
     "chá-ná",
     "pháe",
     "thǔeng"
    ],
    "m": [
     "Won!",
     "이겼다!"
    ]
   },
   {
    "say": "พูดไทยเก่ง",
    "parts": [
     "phûut",
     "thai",
     "_"
    ],
    "a": [
     "kèng"
    ],
    "opts": [
     "kèng",
     "mâak",
     "cháa"
    ],
    "m": [
     "You speak Thai well",
     "태국어 잘하네요"
    ]
   }
  ],
  "note": [
   "Before each fight, the boxers perform the wai khru, a slow dance to honor their teachers, to music played live by a small band. The band speeds up as the fight heats up, so the music tells you how close it is.",
   "경기 전마다 선수들은 스승에게 경의를 표하는 느린 춤 와이 크루를 춰요. 작은 악단이 직접 연주하고, 경기가 뜨거워질수록 음악이 빨라져서 소리만 들어도 얼마나 팽팽한지 알 수 있어요."
  ],
  "today": [
   1,
   2,
   4
  ]
 },
 "6": {
  "guide": "chang",
  "units": [
   {
    "th": "หิว",
    "r": "hǐu",
    "k": "히우",
    "m": [
     "I'm hungry",
     "배고파요"
    ]
   },
   {
    "th": "หิวน้ำ",
    "r": "hǐu náam",
    "k": "히우 남",
    "m": [
     "I'm thirsty",
     "목말라요"
    ],
    "n": [
     "Literally \"hungry for water\".",
     "말 그대로 \"물이 고파요\"예요."
    ]
   },
   {
    "th": "อิ่มแล้ว{P}",
    "r": "ìm láew {p}",
    "k": "임 래우 {k}",
    "m": [
     "I'm full",
     "배불러요"
    ]
   },
   {
    "th": "ง่วง",
    "r": "ngûang",
    "k": "응우앙",
    "m": [
     "I'm sleepy",
     "졸려요"
    ]
   },
   {
    "th": "กินข้าวหรือยัง{Q}",
    "r": "kin khâo rǔe yang {q}",
    "k": "낀 카우 르 양 {k}",
    "m": [
     "Have you eaten yet?",
     "밥 먹었어요?"
    ],
    "n": [
     "A common Thai greeting, like asking how you are.",
     "\"잘 지내요?\"처럼 쓰는 흔한 인사예요."
    ]
   }
  ],
  "intro": [
   "Samyan, near Chulalongkorn University, has markets and food courts that stay open very late, popular with students. Let us talk about how your body feels.",
   "쭐랄롱꼰 대학 근처 삼얀에는 밤늦게까지 여는 시장과 푸드 코트가 있어서 학생들에게 인기가 많아요. 몸 상태를 말하는 법을 배워요."
  ],
  "tip": [
   "kin khâo rǔe yang {q}, have you eaten yet, is something Thais ask instead of hello. The answer: kin láew {p} (I have eaten) or yang {p} (not yet). Korean speakers will recognize the idea: 밥 먹었어?",
   "kin khâo rǔe yang {q}(밥 먹었어요?)은 태국 사람들이 인사 대신 묻는 말이에요. 대답은 kin láew {p}(먹었어요) 또는 yang {p}(아직이요). 한국어 화자에게는 익숙한 인사죠. \"밥 먹었어?\""
  ],
  "choose": [
   {
    "type": "mean",
    "say": "หิว",
    "opts": [
     [
      "I'm hungry",
      "배고파요"
     ],
     [
      "I'm thirsty",
      "목말라요"
     ],
     [
      "I'm sleepy",
      "졸려요"
     ]
    ],
    "a": 0,
    "why": [
     "hǐu, hungry.",
     "hǐu, 배고파요."
    ]
   },
   {
    "type": "mean",
    "say": "หิวน้ำ",
    "opts": [
     [
      "I'm thirsty",
      "목말라요"
     ],
     [
      "I'm hungry",
      "배고파요"
     ],
     [
      "I'm full",
      "배불러요"
     ]
    ],
    "a": 0,
    "why": [
     "hǐu náam, thirsty.",
     "hǐu náam, 목말라요."
    ]
   },
   {
    "type": "mean",
    "say": "อิ่มแล้ว{P}",
    "opts": [
     [
      "I'm full",
      "배불러요"
     ],
     [
      "I'm sleepy",
      "졸려요"
     ],
     [
      "Have you eaten yet?",
      "밥 먹었어요?"
     ]
    ],
    "a": 0,
    "why": [
     "ìm, full.",
     "ìm, 배불러요."
    ]
   },
   {
    "type": "hear",
    "say": "ง่วง",
    "opts": [
     "ngûang",
     "kin khâo rǔe yang {q}",
     "hǐu"
    ],
    "a": 0,
    "why": [
     "ngûang, sleepy.",
     "ngûang, 졸려요."
    ]
   },
   {
    "type": "mean",
    "say": "กินข้าวหรือยัง{Q}",
    "opts": [
     [
      "Have you eaten yet?",
      "밥 먹었어요?"
     ],
     [
      "I'm hungry",
      "배고파요"
     ],
     [
      "I'm thirsty",
      "목말라요"
     ]
    ],
    "a": 0,
    "why": [
     "rǔe yang: yet or not?",
     "rǔe yang, 했어요, 아직이에요?"
    ]
   }
  ],
  "speak": [
   0,
   2,
   4
  ],
  "fill": [
   {
    "say": "หิวน้ำ",
    "parts": [
     "_",
     "náam"
    ],
    "a": [
     "hǐu"
    ],
    "opts": [
     "hǐu",
     "ìm",
     "kin"
    ]
   },
   {
    "say": "อิ่มแล้ว{P}",
    "parts": [
     "_",
     "láew",
     "{p}"
    ],
    "a": [
     "ìm"
    ],
    "opts": [
     "ìm",
     "hǐu",
     "ngûang"
    ]
   },
   {
    "say": "กินข้าวหรือยัง{Q}",
    "parts": [
     "kin",
     "khâo",
     "rǔe",
     "_",
     "{q}"
    ],
    "a": [
     "yang"
    ],
    "opts": [
     "yang",
     "mǎi",
     "láew"
    ]
   }
  ],
  "note": [
   "khâo, rice, is so central that kin khâo, eat rice, simply means to have a meal. Even if you had noodles, you still kin khâo. Samyan Mitrtown is open around the clock, handy after a late night.",
   "khâo(밥)는 식사의 중심이라서 kin khâo(밥을 먹다)가 곧 \"식사하다\"예요. 국수를 먹었어도 kin khâo라고 해요. 삼얀 밋타운은 24시간 열어서 밤늦게 출출할 때 편해요."
  ],
  "today": [
   0,
   2,
   4
  ]
 },
 "7": {
  "guide": "mali",
  "units": [
   {
    "th": "เงียบ",
    "r": "ngîap",
    "k": "응이압",
    "m": [
     "quiet",
     "조용해요"
    ]
   },
   {
    "th": "ไหว้พระ",
    "r": "wâi phrá",
    "k": "와이 프라",
    "m": [
     "pay respects to the Buddha",
     "불상에 절하다"
    ],
    "n": [
     "The same wâi as your greeting.",
     "인사할 때의 그 wâi예요."
    ]
   },
   {
    "th": "ทำบุญ",
    "r": "tham bun",
    "k": "탐 분",
    "m": [
     "make merit",
     "공덕을 쌓다"
    ],
    "n": [
     "Giving to monks or temples, done to bring good things.",
     "스님이나 사원에 보시하며 복을 비는 일이에요."
    ]
   },
   {
    "th": "จุดธูป",
    "r": "jùt thûup",
    "k": "쭛 툽",
    "m": [
     "light incense",
     "향을 피우다"
    ]
   },
   {
    "th": "ขอให้โชคดี",
    "r": "khǎw hâi chôok dii",
    "k": "커 하이 촉 디",
    "m": [
     "Wishing you good luck",
     "행운을 빌어요"
    ]
   }
  ],
  "intro": [
   "Between the two busiest malls in Siam hides Wat Pathum Wanaram, a quiet temple with a lotus pond. A good place to slow down.",
   "시암에서 가장 붐비는 두 쇼핑몰 사이에 연못이 있는 조용한 사원 왓 빠툼 와나람이 숨어 있어요. 잠시 속도를 늦추기 좋은 곳이에요."
  ],
  "tip": [
   "tham bun, making merit, is part of daily life: a few flowers, three sticks of incense, a small donation. Visitors are welcome to join. Keep your voice down: the temple is ngîap.",
   "tham bun(공덕 쌓기)은 일상의 일부예요. 꽃 몇 송이, 향 세 개, 작은 시주면 돼요. 여행자도 함께해도 좋아요. 사원은 ngîap(조용)하니 목소리를 낮춰요."
  ],
  "choose": [
   {
    "type": "mean",
    "say": "เงียบ",
    "opts": [
     [
      "quiet",
      "조용해요"
     ],
     [
      "pay respects to the Buddha",
      "불상에 절하다"
     ],
     [
      "make merit",
      "공덕을 쌓다"
     ]
    ],
    "a": 0,
    "why": [
     "ngîap, quiet.",
     "ngîap, 조용해요."
    ]
   },
   {
    "type": "mean",
    "say": "ทำบุญ",
    "opts": [
     [
      "make merit",
      "공덕을 쌓다"
     ],
     [
      "light incense",
      "향을 피우다"
     ],
     [
      "Wishing you good luck",
      "행운을 빌어요"
     ]
    ],
    "a": 0,
    "why": [
     "tham bun, make merit.",
     "tham bun, 공덕을 쌓다예요."
    ]
   },
   {
    "type": "hear",
    "say": "ไหว้พระ",
    "opts": [
     "wâi phrá",
     "tham bun",
     "jùt thûup"
    ],
    "a": 0,
    "why": [
     "wâi phrá, pay respects.",
     "wâi phrá, 불상에 절하다예요."
    ]
   },
   {
    "type": "mean",
    "say": "จุดธูป",
    "opts": [
     [
      "light incense",
      "향을 피우다"
     ],
     [
      "Wishing you good luck",
      "행운을 빌어요"
     ],
     [
      "quiet",
      "조용해요"
     ]
    ],
    "a": 0,
    "why": [
     "thûup, incense.",
     "thûup, 향이에요."
    ]
   },
   {
    "type": "mean",
    "say": "ขอให้โชคดี",
    "opts": [
     [
      "Wishing you good luck",
      "행운을 빌어요"
     ],
     [
      "quiet",
      "조용해요"
     ],
     [
      "pay respects to the Buddha",
      "불상에 절하다"
     ]
    ],
    "a": 0,
    "why": [
     "chôok dii, good luck.",
     "chôok dii, 행운이에요."
    ]
   }
  ],
  "speak": [
   1,
   2,
   4
  ],
  "fill": [
   {
    "say": "ทำบุญ",
    "parts": [
     "_",
     "bun"
    ],
    "a": [
     "tham"
    ],
    "opts": [
     "tham",
     "wâi",
     "jùt"
    ]
   },
   {
    "say": "ไหว้พระ",
    "parts": [
     "wâi",
     "_"
    ],
    "a": [
     "phrá"
    ],
    "opts": [
     "phrá",
     "bun",
     "thûup"
    ]
   },
   {
    "say": "โชคดีนะ",
    "parts": [
     "chôok",
     "_",
     "ná"
    ],
    "a": [
     "dii"
    ],
    "opts": [
     "dii",
     "mâak",
     "nòi"
    ],
    "m": [
     "Good luck!",
     "행운을 빌어요!"
    ]
   }
  ],
  "note": [
   "In the morning, monks walk the streets with alms bowls, and people kneel to offer rice and food: this is sài bàat, one of the most common ways to make merit. If you join, stay lower than the monk and do not touch him; women should take extra care not to.",
   "아침이면 스님들이 발우를 들고 거리를 걷고, 사람들은 무릎을 꿇고 밥과 음식을 공양해요. 이것이 sài bàat(탁발 공양)으로, 공덕을 쌓는 가장 흔한 방법 중 하나예요. 함께한다면 스님보다 몸을 낮추고 스님 몸에 닿지 않도록 해요. 여성은 특히 더 조심해요."
  ],
  "today": [
   1,
   2,
   4
  ]
 },
 "8": {
  "guide": "chang",
  "units": [
   {
    "th": "เบาๆ หน่อย{P}",
    "r": "bao-bao nòi {p}",
    "k": "바오바오 너이 {k}",
    "m": [
     "A bit gentler, please",
     "조금 살살 해 주세요"
    ],
    "n": [
     "Lesson 1",
     "1과"
    ]
   },
   {
    "th": "ชิมดู",
    "r": "chim duu",
    "k": "침 두",
    "m": [
     "taste it and see",
     "맛봐요"
    ],
    "n": [
     "Lesson 2",
     "2과"
    ]
   },
   {
    "th": "เดินเล่น",
    "r": "doen lên",
    "k": "던 렌",
    "m": [
     "take a walk",
     "산책하다"
    ],
    "n": [
     "Lesson 3",
     "3과"
    ]
   },
   {
    "th": "ฝนจะตกไหม{Q}",
    "r": "fǒn jà tòk mǎi {q}",
    "k": "폰 짜 똑 마이 {k}",
    "m": [
     "Is it going to rain?",
     "비 올까요?"
    ],
    "n": [
     "Lesson 4",
     "4과"
    ]
   },
   {
    "th": "สู้ๆ",
    "r": "sûu sûu",
    "k": "쑤쑤",
    "m": [
     "Fight! You can do it!",
     "힘내! 파이팅!"
    ],
    "n": [
     "Lesson 5",
     "5과"
    ]
   },
   {
    "th": "กินข้าวหรือยัง{Q}",
    "r": "kin khâo rǔe yang {q}",
    "k": "낀 카우 르 양 {k}",
    "m": [
     "Have you eaten yet?",
     "밥 먹었어요?"
    ],
    "n": [
     "Lesson 6",
     "6과"
    ]
   }
  ],
  "intro": [
   "Back at Lumphini as the day cools down. Let us review the slow day.",
   "날이 선선해질 무렵 다시 룸피니예요. 느긋한 하루를 복습해요."
  ],
  "tip": [
   "A slow day in Thai: a massage, bao-bao nòi {p}. A cooking class: phàt, tôm, chim duu. A walk in the park, a storm, lòp fǒn. A fight night, sûu sûu. And at the end, kin khâo rǔe yang {q}?",
   "느긋한 하루를 태국어로 떠올려 봐요. 마사지는 bao-bao nòi {p}. 요리 교실에서 phàt, tôm, chim duu. 공원 산책, 소나기, lòp fǒn. 경기장에서 sûu sûu. 그리고 하루의 끝에 kin khâo rǔe yang {q}?"
  ],
  "choose": [
   {
    "type": "mean",
    "say": "เบาๆ หน่อย{P}",
    "opts": [
     [
      "A bit gentler, please",
      "조금 살살 해 주세요"
     ],
     [
      "taste it and see",
      "맛봐요"
     ],
     [
      "take a walk",
      "산책하다"
     ]
    ],
    "a": 0,
    "why": [
     "bao-bao nòi. Lesson 1.",
     "bao-bao nòi. 1과."
    ]
   },
   {
    "type": "hear",
    "say": "ชิมดู",
    "opts": [
     "chim duu",
     "doen lên",
     "fǒn jà tòk mǎi {q}"
    ],
    "a": 0,
    "why": [
     "chim duu. Lesson 2.",
     "chim duu. 2과."
    ]
   },
   {
    "type": "mean",
    "say": "เดินเล่น",
    "opts": [
     [
      "take a walk",
      "산책하다"
     ],
     [
      "Is it going to rain?",
      "비 올까요?"
     ],
     [
      "Fight! You can do it!",
      "힘내! 파이팅!"
     ]
    ],
    "a": 0,
    "why": [
     "doen lên. Lesson 3.",
     "doen lên. 3과."
    ]
   },
   {
    "type": "mean",
    "say": "ฝนจะตกไหม{Q}",
    "opts": [
     [
      "Is it going to rain?",
      "비 올까요?"
     ],
     [
      "Fight! You can do it!",
      "힘내! 파이팅!"
     ],
     [
      "Have you eaten yet?",
      "밥 먹었어요?"
     ]
    ],
    "a": 0,
    "why": [
     "fǒn jà tòk. Lesson 4.",
     "fǒn jà tòk. 4과."
    ]
   },
   {
    "type": "hear",
    "say": "สู้ๆ",
    "opts": [
     "sûu sûu",
     "kin khâo rǔe yang {q}",
     "bao-bao nòi {p}"
    ],
    "a": 0,
    "why": [
     "sûu sûu. Lesson 5.",
     "sûu sûu. 5과."
    ]
   },
   {
    "type": "mean",
    "say": "กินข้าวหรือยัง{Q}",
    "opts": [
     [
      "Have you eaten yet?",
      "밥 먹었어요?"
     ],
     [
      "A bit gentler, please",
      "조금 살살 해 주세요"
     ],
     [
      "taste it and see",
      "맛봐요"
     ]
    ],
    "a": 0,
    "why": [
     "kin khâo rǔe yang. Lesson 6.",
     "kin khâo rǔe yang. 6과."
    ]
   }
  ],
  "speak": [
   0,
   3,
   5
  ],
  "fill": [
   {
    "say": "ต้มยำ",
    "parts": [
     "_",
     "yam"
    ],
    "a": [
     "tôm"
    ],
    "opts": [
     "tôm",
     "phàt",
     "hàn"
    ],
    "m": [
     "tom yum",
     "똠얌"
    ]
   },
   {
    "say": "อากาศดี",
    "parts": [
     "_",
     "dii"
    ],
    "a": [
     "aa-kàat"
    ],
    "opts": [
     "aa-kàat",
     "dàet",
     "fǒn"
    ]
   },
   {
    "say": "อิ่มแล้ว{P}",
    "parts": [
     "ìm",
     "_",
     "{p}"
    ],
    "a": [
     "láew"
    ],
    "opts": [
     "láew",
     "yang",
     "mǎi"
    ]
   },
   {
    "say": "ทำบุญ",
    "parts": [
     "tham",
     "_"
    ],
    "a": [
     "bun"
    ],
    "opts": [
     "bun",
     "phrá",
     "aa-hǎan"
    ]
   }
  ],
  "note": [
   "Lumphini Park was given to the people by King Vajiravudh, Rama VI, almost a century ago, and named after the Buddha's birthplace in Nepal. You have finished the sixth stretch. One stretch left: saying goodbye to Bangkok.",
   "룸피니 공원은 약 100년 전 라마 6세 와치라웃 왕이 시민에게 내어 준 곳으로, 네팔에 있는 부처의 탄생지 룸비니에서 이름을 땄어요. 여섯째 구간을 모두 마쳤어요. 이제 방콕과 작별하는 마지막 구간만 남았어요."
  ],
  "today": [
   0,
   3,
   5
  ],
  "final": true,
  "chooseTitle": [
   "Pick what you heard",
   "들은 말 고르기"
  ]
 }
};
