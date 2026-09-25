import type { TrackId } from "./tools";

export type Choice = {
  label: string;
  hint?: string;
  scores: Partial<Record<TrackId, number>>;
};

export type Question = {
  id: string;
  title: string;
  note?: string;
  choices: Choice[];
};

export const questions: Question[] = [
  {
    id: "goal",
    title: "무엇을 만들고 싶으신가요?",
    note: "아직 정하지 못했어도 괜찮습니다.",
    choices: [
      {
        label: "아직 모르겠고, 일단 되는지 보고 싶습니다",
        scores: { chat: 3, builder: 1 },
      },
      {
        label: "계산기나 안내문처럼 화면 하나면 되는 것",
        hint: "용량 환산, 손익 계산, 시술 전 주의사항 안내",
        scores: { chat: 3, builder: 2 },
      },
      {
        label: "화면이 여러 개인 제대로 된 도구",
        hint: "메뉴가 있고 여러 기능이 연결된 형태",
        scores: { builder: 3, editor: 2 },
      },
      {
        label: "반복되는 자료 정리나 업무 자동화",
        hint: "엑셀 정리, 문서 변환처럼 눈에 보이는 화면이 덜 중요한 일",
        scores: { editor: 3, chat: 1 },
      },
    ],
  },
  {
    id: "install",
    title: "지금 쓰는 컴퓨터에 새 프로그램을 설치할 수 있나요?",
    note: "병원 PC는 보안 정책으로 설치가 막힌 경우가 많습니다. 실제로 가장 큰 변수입니다.",
    choices: [
      {
        label: "자유롭게 설치할 수 있습니다",
        scores: { editor: 3, builder: 1, chat: 1 },
      },
      {
        label: "설치가 제한되어 있습니다",
        scores: { chat: 3, builder: 3, editor: -4 },
      },
      {
        label: "확인해보지 않았습니다",
        scores: { chat: 2, builder: 2 },
      },
    ],
  },
  {
    id: "budget",
    title: "월 2~3만 원 정도의 유료 결제는 어떠신가요?",
    choices: [
      {
        label: "가능하면 무료 범위에서만 쓰고 싶습니다",
        scores: { chat: 3, builder: 1 },
      },
      {
        label: "쓸 만하면 결제할 의향이 있습니다",
        scores: { builder: 2, editor: 2 },
      },
      {
        label: "ChatGPT나 Claude를 이미 결제해서 쓰고 있습니다",
        scores: { chat: 3, editor: 1 },
      },
    ],
  },
  {
    id: "audience",
    title: "만든 결과물을 누가 보게 되나요?",
    choices: [
      {
        label: "저 혼자 씁니다",
        scores: { chat: 3 },
      },
      {
        label: "직원들과 함께 씁니다",
        scores: { builder: 2, chat: 2 },
      },
      {
        label: "환자에게 공개합니다",
        hint: "이 경우 의료광고 심의 대상이 될 수 있어 별도 확인이 필요합니다.",
        scores: { builder: 3, editor: 2 },
      },
    ],
  },
  {
    id: "experience",
    title: "지금까지의 경험은 어느 쪽에 가깝나요?",
    choices: [
      {
        label: "코딩도 AI 도구도 처음입니다",
        scores: { chat: 3, builder: 2 },
      },
      {
        label: "ChatGPT나 Claude로 대화는 익숙합니다",
        scores: { chat: 2, builder: 3 },
      },
      {
        label: "개발 도구를 설치해봤다가 막혀서 포기했습니다",
        scores: { builder: 3, editor: 1 },
      },
    ],
  },
];

export const resultCopy: Record<
  TrackId,
  { headline: string; why: string; firstStep: string }
> = {
  chat: {
    headline: "대화형으로 시작하세요",
    why: "설치할 것도, 새로 배울 화면도 없습니다. 이미 쓰고 계신 대화창에서 그대로 시작할 수 있어 첫 결과물까지 가장 빠릅니다. 무엇이 가능한지 감을 잡는 목적이라면 여기가 정답입니다.",
    firstStep:
      "대화창을 열고 만들고 싶은 화면을 한 문단으로 설명하는 것부터 시작합니다.",
  },
  builder: {
    headline: "웹 빌더형으로 시작하세요",
    why: "설명을 적으면 보기 좋은 화면이 나오고, 그 자리에서 인터넷 주소까지 받습니다. 남에게 보여줄 결과물이 목표라면 완성도 대비 들이는 시간이 가장 적습니다.",
    firstStep:
      "계정을 만들고 첫 화면을 요청한 뒤, 나온 결과를 보며 고쳐나갑니다.",
  },
  editor: {
    headline: "에디터형으로 시작하세요",
    why: "초반 한 시간만 넘기면 갈 수 있는 범위에 사실상 제한이 없습니다. 한 번 만들고 끝낼 것이 아니라 계속 고쳐가며 쓸 생각이라면 결국 여기로 오게 됩니다.",
    firstStep:
      "프로그램을 설치하고, 빈 폴더를 연 다음 AI에게 첫 요청을 넣습니다.",
  },
};
