export type GlossaryCategory =
  | "기본 개념"
  | "만들기"
  | "기록과 버전"
  | "배포와 주소"
  | "문제 해결";

export type GlossaryEntry = {
  term: string;
  korean: string;
  category: GlossaryCategory;
  analogy: string;
  meaning: string;
  encounter: string;
};

export const glossaryCategories: GlossaryCategory[] = [
  "기본 개념",
  "만들기",
  "기록과 버전",
  "배포와 주소",
  "문제 해결",
];

export const glossary: GlossaryEntry[] = [
  {
    term: "repository (repo)",
    korean: "저장소",
    category: "기록과 버전",
    analogy: "환자 차트철",
    meaning:
      "하나의 프로젝트에 속한 모든 파일과 그 변경 이력이 통째로 담긴 묶음입니다. 프로젝트 하나에 차트철 하나라고 보면 됩니다.",
    encounter:
      "AI 툴이 만든 결과물을 GitHub에 올릴 때 가장 먼저 만들게 됩니다.",
  },
  {
    term: "commit",
    korean: "커밋",
    category: "기록과 버전",
    analogy: "경과 기록 (progress note)",
    meaning:
      "지금 이 시점의 상태를 이유와 함께 기록으로 남기는 일입니다. 남겨두면 나중에 언제든 그 시점으로 돌아갈 수 있습니다.",
    encounter:
      "무언가 잘 되던 순간에 반드시 남기세요. 이후에 망가뜨려도 되돌릴 수 있습니다.",
  },
  {
    term: "branch",
    korean: "브랜치",
    category: "기록과 버전",
    analogy: "시험적 치료 arm",
    meaning:
      "잘 돌아가는 본래 흐름은 그대로 둔 채, 옆에서 다른 방법을 시도해보는 갈래입니다. 실패해도 본진에는 영향이 없습니다.",
    encounter:
      "큰 변경을 시도하기 전에 만듭니다. 혼자 작업할 때는 없어도 무방합니다.",
  },
  {
    term: "merge",
    korean: "머지 / 병합",
    category: "기록과 버전",
    analogy: "협진 결과를 본 차트에 통합",
    meaning:
      "따로 진행하던 갈래에서 얻은 결과를 원래 흐름에 합치는 일입니다.",
    encounter: "브랜치에서 시도한 것이 성공했을 때 합칩니다.",
  },
  {
    term: "git",
    korean: "깃",
    category: "기록과 버전",
    analogy: "차트 이력 관리 시스템",
    meaning:
      "누가 언제 무엇을 바꿨는지 전부 남기고, 원하는 시점으로 되돌릴 수 있게 해주는 도구입니다.",
    encounter:
      "웹 기반 툴만 쓴다면 몰라도 됩니다. Cursor 같은 에디터를 쓰기 시작하면 만나게 됩니다.",
  },
  {
    term: "deploy",
    korean: "배포",
    category: "배포와 주소",
    analogy: "개원",
    meaning:
      "내 컴퓨터에서만 열리던 화면을 인터넷에 올려 누구나 주소로 접속할 수 있게 하는 일입니다.",
    encounter:
      "완성한 다음 마지막 단계입니다. 무료로 할 수 있고 대개 10분이면 끝납니다.",
  },
  {
    term: "localhost",
    korean: "로컬호스트",
    category: "배포와 주소",
    analogy: "원내 전용",
    meaning:
      "내 컴퓨터 안에서만 접속되는 주소입니다. 화면이 떠도 아직 세상에는 공개되지 않은 상태입니다.",
    encounter:
      "보통 http://localhost:3000 형태로 나타납니다. 남에게 이 주소를 보내면 열리지 않습니다.",
  },
  {
    term: "domain",
    korean: "도메인",
    category: "배포와 주소",
    analogy: "의원 간판과 주소",
    meaning:
      "hyperdoctor.app 처럼 사람이 읽을 수 있는 인터넷 주소입니다. 1년 단위로 빌려 씁니다.",
    encounter: "결과물에 내 주소를 붙이고 싶을 때 구입합니다.",
  },
  {
    term: "subdomain",
    korean: "서브도메인",
    category: "배포와 주소",
    analogy: "본원과 분원",
    meaning:
      "이미 가진 주소 앞에 이름을 붙여 만드는 별도 주소입니다. 추가 비용 없이 얼마든지 만들 수 있습니다.",
    encounter:
      "지금 보고 계신 coding.hyperdoctor.app 이 그 예입니다.",
  },
  {
    term: "hosting",
    korean: "호스팅",
    category: "배포와 주소",
    analogy: "건물 임차",
    meaning:
      "만든 결과물을 24시간 켜두고 방문자에게 보여주는 자리를 빌리는 일입니다.",
    encounter:
      "간단한 화면 정도는 무료 범위로 충분합니다. 처음부터 돈 낼 필요 없습니다.",
  },
  {
    term: "bug",
    korean: "버그",
    category: "문제 해결",
    analogy: "증상",
    meaning: "의도한 대로 동작하지 않는 상태입니다. 원인이 아니라 현상입니다.",
    encounter: "항상 생깁니다. 없는 게 이상한 겁니다.",
  },
  {
    term: "debugging",
    korean: "디버깅",
    category: "문제 해결",
    analogy: "감별진단",
    meaning:
      "증상에서 출발해 원인을 좁혀가는 과정입니다. 하나씩 배제하며 범위를 줄이는 방식이 똑같습니다.",
    encounter:
      "AI에게 맡길 수 있습니다. 단, 증상을 정확히 설명해야 정확히 좁혀집니다.",
  },
  {
    term: "error log",
    korean: "에러 로그",
    category: "문제 해결",
    analogy: "검사 결과지",
    meaning:
      "무엇이 어디서 잘못됐는지 기계가 남긴 기록입니다. 읽기 어렵게 생겼지만 그 안에 답이 들어 있습니다.",
    encounter:
      "빨간 글씨가 나오면 해석하려 애쓰지 말고 통째로 복사해 AI에 붙여넣으세요. 이게 가장 빠릅니다.",
  },
  {
    term: "console",
    korean: "콘솔",
    category: "문제 해결",
    analogy: "모니터링 화면",
    meaning:
      "프로그램이 실행되면서 내보내는 메시지가 흘러나오는 창입니다.",
    encounter:
      "브라우저에서 F12를 누르면 열립니다. 화면이 하얗게 뜰 때 여기부터 봅니다.",
  },
  {
    term: "dependency",
    korean: "의존성 / 패키지",
    category: "만들기",
    analogy: "병용 약제",
    meaning:
      "내 프로젝트가 가져다 쓰는 외부 코드 묶음입니다. 하나를 바꾸면 다른 것에 영향이 갈 수 있습니다.",
    encounter:
      "npm install 이라는 명령으로 설치됩니다. 무슨 뜻인지 몰라도 그대로 실행하면 됩니다.",
  },
  {
    term: "framework",
    korean: "프레임워크",
    category: "만들기",
    analogy: "표준 진료 프로토콜",
    meaning:
      "매번 처음부터 정하지 않도록 뼈대와 규칙을 미리 갖춰둔 틀입니다. React, Next.js 등이 여기 속합니다.",
    encounter:
      "AI가 알아서 고릅니다. 직접 선택할 일은 거의 없습니다.",
  },
  {
    term: "API",
    korean: "에이피아이",
    category: "만들기",
    analogy: "타과 의뢰 (consult)",
    meaning:
      "정해진 형식으로 요청하면 정해진 형식으로 답이 오는 창구입니다. 상대가 내부에서 어떻게 처리하는지는 몰라도 됩니다.",
    encounter:
      "지도를 넣거나 외부 데이터를 가져올 때 만납니다. 대개 키(비밀번호)를 발급받아야 합니다.",
  },
  {
    term: "frontend / backend",
    korean: "프론트엔드 / 백엔드",
    category: "만들기",
    analogy: "진료실 / 검사실",
    meaning:
      "사용자 눈에 보이는 화면이 프론트엔드, 뒤에서 데이터를 처리하고 보관하는 쪽이 백엔드입니다.",
    encounter:
      "바이브 코딩 입문 단계에서 만드는 것은 대부분 프론트엔드만으로 충분합니다.",
  },
  {
    term: "database",
    korean: "데이터베이스",
    category: "만들기",
    analogy: "EMR",
    meaning: "정보를 구조를 갖춰 쌓아두고 찾아쓰는 저장 공간입니다.",
    encounter:
      "환자 정보를 다룰 생각이라면 여기서부터는 혼자 하지 마세요. 보안 책임이 따라옵니다.",
  },
  {
    term: "refactoring",
    korean: "리팩터링",
    category: "만들기",
    analogy: "차트 정리",
    meaning:
      "동작은 그대로 두고 내부를 읽기 좋게 정리하는 일입니다. 겉으로는 아무 변화가 없습니다.",
    encounter:
      "AI에게 “동작은 바꾸지 말고 읽기 좋게 정리해줘”라고 요청하면 됩니다.",
  },
  {
    term: "responsive",
    korean: "반응형",
    category: "만들기",
    analogy: "체형에 맞춘 조절",
    meaning:
      "PC, 태블릿, 휴대폰 화면 크기에 맞춰 배치가 알아서 바뀌는 것입니다.",
    encounter:
      "환자는 대부분 휴대폰으로 봅니다. 만들 때 반드시 요청하세요.",
  },
  {
    term: "vibe coding",
    korean: "바이브 코딩",
    category: "기본 개념",
    analogy: "구술 지시로 진행하는 시술",
    meaning:
      "코드를 직접 타이핑하는 대신, 원하는 결과를 말로 설명하고 AI가 쓴 결과를 확인하며 고쳐가는 방식입니다.",
    encounter: "이 사이트가 다루는 전부입니다.",
  },
  {
    term: "prompt",
    korean: "프롬프트",
    category: "기본 개념",
    analogy: "의뢰서",
    meaning:
      "AI에게 보내는 요청 문장입니다. 의뢰서와 마찬가지로 배경과 원하는 바가 구체적일수록 결과가 좋습니다.",
    encounter: "매 순간 씁니다. 여기서 실력 차이가 가장 크게 납니다.",
  },
  {
    term: "context",
    korean: "컨텍스트",
    category: "기본 개념",
    analogy: "과거력과 현병력",
    meaning:
      "AI가 지금 참고하고 있는 정보의 범위입니다. 대화가 길어지면 앞의 내용을 잊습니다.",
    encounter:
      "결과가 갑자기 이상해지면 대화가 길어진 탓일 수 있습니다. 새 대화로 옮기고 상황을 다시 설명하세요.",
  },
  {
    term: "hallucination",
    korean: "환각",
    category: "기본 개념",
    analogy: "자신 있게 틀리는 것",
    meaning:
      "AI가 사실이 아닌 내용을 사실처럼 말하는 현상입니다. 문장이 자연스러워서 더 위험합니다.",
    encounter:
      "계산 로직과 의학 정보는 반드시 직접 검증하세요. 여기서만큼은 AI를 믿으면 안 됩니다.",
  },
  {
    term: "open source",
    korean: "오픈소스",
    category: "기본 개념",
    analogy: "공개된 임상 프로토콜",
    meaning:
      "누구나 가져다 쓸 수 있도록 공개된 코드입니다. 다만 조건(라이선스)이 붙습니다.",
    encounter:
      "대부분 자유롭게 쓸 수 있지만, 상업적 사용 조건은 확인이 필요합니다.",
  },
];
