# Pai Thiao (ไปเที่ยว)

수완나품 공항에 내려 방콕 곳곳을 다니다 다시 공항으로 돌아가기까지를 일곱 구간으로 나눠, 방콕 여행에서 쓰는 태국어를 배우는 사이트. 방콕 밖 여행(아유타야, 치앙마이, 푸껫)은 부록으로 둔다. Buen Camino와 같은 구조. 기본 언어는 영어, 오른쪽 위 버튼으로 한국어 전환. 노란 버튼으로 공손 어미(ครับ khráp / ค่ะ khâ)를 고르면 모든 표현과 "나"(ผม / ฉัน)가 함께 바뀐다. 선택은 브라우저에 저장.

## 구조
- `index.html` 첫 화면 (일곱 구간, 연습실, 여행 친구, 여권, 배우는 방법)
- `stretch-1/` 첫째 구간, 공항철도 여덟 역 (`?lesson=1` 처럼 과 번호로 바로 연결)
- `stretch-2/` 둘째 구간, 방콕 시내 여덟 곳
- `stretch-3/` 셋째 구간, 옛 도심과 짜오프라야강 여덟 곳
- `stretch-4/` 넷째 구간, 쇼핑몰과 시장
- `stretch-5/` 다섯째 구간, 방콕의 밤
- `stretch-6/` 여섯째 구간, 마사지, 요리, 공원, 무에타이, 사원
- `stretch-7/` 일곱째 구간, 작별과 공항
- `trip-ayutthaya/`, `trip-chiangmai/`, `trip-phuket/` 부록 여행. 도시마다 세 과
- `phrasebook/` 회화 수첩
- `practice/` 오늘의 다섯 마디(매일 복습). 열린 과의 표현을 모두 모아 검색하고 듣는다
- `assets/common.js` 언어와 공손 어미 전환, 진도 저장(localStorage), th-TH 음성, 음성 인식, 도장 그림
- `assets/data.js` 일곱 구간과 과 목록 (구간을 열려면 `open: true`와 `lessons` 목록을 넣는다)
- `assets/lesson.js` 수업 진행 (소리 듣기, 듣고 고르기, 따라 말하기, 빈칸 채우기, 도장 받기)
- `assets/stretch-N-lessons.js` 구간별 수업 내용. 파일 맨 위에 형식 설명이 있다
- `assets/side-lessons.js` 부록 여행 수업 내용. 목록은 `data.js`의 `PT_SIDE`

## 내용 고치기
넷째부터 일곱째 구간의 lessons 파일은 `gen/` 폴더의 파이썬 파일(s4.py 등)로 만들었다. js 파일을 직접 고쳐도 되고, 파이썬 파일을 고친 뒤 `python3 s4.py`로 다시 만들어도 된다.

## 새 구간 추가
1. `assets/stretch-3-lessons.js`를 만들고 `PT_LESSONS[3] = { 1: {...}, ... }` 형식으로 내용을 넣는다
2. `data.js`에서 셋째 구간을 `open: true`로 바꾸고 `lessons` 목록을 넣는다
3. `stretch-2/` 폴더를 복사해 `stretch-3/`으로 만들고, `PT_STRETCH = 3`과 불러오는 lessons 파일 이름을 바꾼다
4. `index.html`과 `phrasebook/index.html` 아래쪽에 새 lessons 파일을 불러오는 줄을 추가한다

## 새 부록 여행 추가
`data.js`의 `PT_SIDE`에 도시를 넣고(`n`이 폴더 이름 trip-<n>/이 된다), `side-lessons.js`에 `PT_LESSONS.<n> = {...}`를 넣은 뒤, `trip-phuket/` 폴더를 복사해 `PT_STRETCH` 값만 바꾼다.

## 자리 표시
문장 안의 `{P}`(평서 어미), `{Q}`(의문 어미), `{p}`/`{q}`(로마자 어미), `{k}`(한글 어미), `{I}`/`{i}`/`{ki}`("나")는 남성/여성 선택에 따라 바뀐다.

## 녹음실 (record/)
`record/` 페이지에서 사이트의 태국어 소리를 사람 목소리로 녹음하거나 Gemini AI 목소리로 채운다. 첫 화면에는 링크가 없고 주소로만 들어간다(검색에도 안 잡힌다). 공손 어미가 붙는 말은 남성(ครับ)과 여성(ค่ะ, คะ)으로 따로 나오고, 남성 말은 남성 목소리, 여성 말은 여성 목소리로 만든다. 녹음은 그 브라우저(IndexedDB)에 남는다.

다 만든 뒤 "zip 내려받기"를 누르고 zip을 저장소 맨 위에 풀어 올리면 된다. zip에는 `assets/audio/th/*.mp3`, `assets/audio/manifest.js`, 버전을 하나 올린 `sw.js`가 들어 있다. manifest의 키는 어미까지 붙은 완성된 태국어 문장, 값은 사이트 맨 위 기준 경로다(`"ขอบคุณครับ": "assets/audio/th/khop-khun-khrap-x1.mp3"`). 녹음이 있는 말은 녹음으로, 없는 말은 기기 음성으로 소리 나고, 천천히 듣기는 녹음을 0.75배로 늦춘다. 녹음실 파일(`record/`, `assets/record.*`, `assets/vendor/`)은 휴대전화 오프라인 저장에서 빠진다.

## 캐릭터 그림 바꾸기
`assets/chars/`의 mali.webp(샴고양이), chang.webp(코끼리), tukkae.webp(도마뱀). 새 그림(webp 등)을 넣고 `assets/common.js` 맨 위의 `CHARS`와 `index.html`의 그림 경로만 바꾸면 된다. 정사각형, 원형으로 잘려도 괜찮은 구도가 좋다.

## 오프라인 저장과 홈 화면 앱
`sw.js`가 사이트 전체를 휴대전화에 저장하고, `manifest.webmanifest`와 `assets/icons/`가 홈 화면 아이콘을 맡는다. 내용을 고쳐 다시 올릴 때는 `python3 gen/make_sw.py 5`처럼 숫자를 하나 올려 실행한다. 그래야 이미 저장해 둔 휴대전화에도 새 내용이 들어간다(사이트를 한 번 더 열면 바뀐다). 파일을 새로 추가했을 때도 같은 명령으로 저장 목록이 갱신된다.

## 오늘의 다섯 마디
`practice/`와 `assets/practice.js`. 도장을 받은 과의 표현에서 다섯 개를 골라 듣고 뜻을 맞힌다. 틀린 표현과 복습한 날짜는 브라우저(`paithiao:review`)에 저장되고, 틀린 표현은 다음 복습 때 먼저 나온다.

## GitHub Pages
저장소 루트에 이 폴더 내용을 올리고 Settings > Pages에서 main 브랜치를 선택.
