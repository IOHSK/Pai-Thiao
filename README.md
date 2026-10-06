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
- `phrasebook/` 회화 수첩. 열린 과의 표현을 모두 모아 검색하고 듣는다
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

## 녹음 파일 추가
`assets/audio/manifest.js`를 만들고 `window.PT_AUDIO = { "ขอบคุณครับ": "../assets/audio/khop-khun-khrap.mp3" };` 형태로 적은 뒤, 각 HTML에서 common.js 앞에 불러오면 해당 문장은 녹음 파일로 재생된다. 키는 어미까지 붙은 완성된 태국어 문장이다(남성, 여성 따로).

## 캐릭터 그림 바꾸기
`assets/chars/`의 mali.svg(샴고양이), chang.svg(코끼리), tukkae.svg(도마뱀). 새 그림(webp 등)을 넣고 `assets/common.js` 맨 위의 `CHARS`와 `index.html`의 그림 경로만 바꾸면 된다. 정사각형, 원형으로 잘려도 괜찮은 구도가 좋다.

## GitHub Pages
저장소 루트에 이 폴더 내용을 올리고 Settings > Pages에서 main 브랜치를 선택.
