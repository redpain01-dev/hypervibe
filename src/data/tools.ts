export type TrackId = "chat" | "builder" | "editor";

export type Track = {
  id: TrackId;
  href: string;
  name: string;
  kind: string;
  tools: string[];
  oneLiner: string;
  bestFor: string;
  install: string;
  cost: string;
  timeToFirst: string;
  ceiling: string;
};

export const tracks: Track[] = [
  {
    id: "chat",
    href: "/tools/chat/",
    name: "대화형",
    kind: "ChatGPT · Claude",
    tools: ["ChatGPT", "Claude"],
    oneLiner:
      "이미 쓰고 계신 그 대화창에서 그대로 시작합니다. 새로 배울 도구가 없습니다.",
    bestFor: "처음이라 일단 되는지 확인하고 싶은 경우",
    install: "필요 없음 — 브라우저만",
    cost: "무료로 시작 가능",
    timeToFirst: "10분",
    ceiling:
      "화면 한두 개짜리 결과물까지. 파일이 여러 개로 늘어나면 관리가 어려워집니다.",
  },
  {
    id: "builder",
    href: "/tools/builder/",
    name: "웹 빌더형",
    kind: "Lovable · v0",
    tools: ["Lovable", "v0"],
    oneLiner:
      "설명을 적으면 완성된 화면이 나오고, 그 자리에서 인터넷 주소까지 받습니다.",
    bestFor: "보기 좋은 결과물을 빨리 만들어 공유하고 싶은 경우",
    install: "필요 없음 — 브라우저만",
    cost: "무료 한도 있음, 계속 쓰려면 월 결제",
    timeToFirst: "20분",
    ceiling:
      "화면 여러 개짜리 앱까지. 세밀한 수정은 답답할 수 있습니다.",
  },
  {
    id: "editor",
    href: "/tools/editor/",
    name: "에디터형",
    kind: "Cursor",
    tools: ["Cursor"],
    oneLiner:
      "전문 개발자가 쓰는 환경에 AI가 들어가 있습니다. 가장 멀리 갈 수 있습니다.",
    bestFor: "계속 만들 생각이고, 내 컴퓨터에 프로그램을 설치할 수 있는 경우",
    install: "필요함 — 프로그램 설치",
    cost: "무료 한도 있음, 본격 사용 시 월 결제",
    timeToFirst: "60분",
    ceiling: "사실상 제한 없음. 대신 초반 진입 부담이 가장 큽니다.",
  },
];

export function getTrack(id: TrackId): Track {
  const track = tracks.find((item) => item.id === id);
  if (!track) throw new Error(`Unknown track: ${id}`);
  return track;
}
