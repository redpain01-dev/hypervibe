export const site = {
  name: "HyperVibe",
  parent: "HyperDoctor",
  parentUrl: "https://hyperdoctor.app",
  url: "https://coding.hyperdoctor.app",
  tagline: "의사를 위한 바이브 코딩 입문",
  description:
    "코딩을 배운 적 없는 의사가 AI 도구로 진료 현장에 필요한 웹 도구를 직접 만들고 배포까지 완주하도록 안내합니다.",
} as const;

export type NavItem = {
  href: string;
  label: string;
  summary: string;
};

export const nav: NavItem[] = [
  {
    href: "/concept/",
    label: "바이브 코딩이란",
    summary: "무엇을 만들 수 있고 무엇이 어려운지 경계부터 정리합니다.",
  },
  {
    href: "/diagnosis/",
    label: "툴 찾기",
    summary: "다섯 가지 질문으로 나에게 맞는 도구를 추천받습니다.",
  },
  {
    href: "/tools/",
    label: "툴 배우기",
    summary: "대화형·웹빌더형·에디터형 세 갈래의 첫 30분 안내.",
  },
  {
    href: "/build/",
    label: "실습",
    summary: "우리 의원 안내 페이지를 세 가지 툴로 만들어 비교합니다.",
  },
  {
    href: "/deploy/",
    label: "배포",
    summary: "만든 결과물을 인터넷에 올리고 도메인을 연결합니다.",
  },
  {
    href: "/safety/",
    label: "주의사항",
    summary: "환자정보, 의료광고, 의료기기 규제의 경계선.",
  },
];

export const toolboxNav: NavItem[] = [
  {
    href: "/glossary/",
    label: "용어 사전",
    summary: "개발 용어를 의학 비유로 옮긴 사전.",
  },
  {
    href: "/prompts/",
    label: "프롬프트",
    summary: "상황별로 복사해서 쓰는 요청 문장 모음.",
  },
];
