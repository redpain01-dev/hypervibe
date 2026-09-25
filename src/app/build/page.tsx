import type { Metadata } from "next";
import {
  ButtonLink,
  Callout,
  Card,
  Container,
  Heading,
  Lead,
  Section,
  SectionLabel,
} from "@/components/ui";
import { CopyBlock } from "@/components/copy-block";
import { basePrompt, checklist } from "@/data/build";
import { BuildTabs } from "./build-tabs";

export const metadata: Metadata = {
  title: "실습 — 우리 의원 안내 페이지 만들기",
  description:
    "같은 과제를 대화형·웹 빌더형·에디터형 세 가지 방식으로 만들어보며 차이를 체감합니다.",
};

const prepare = [
  {
    title: "의원 이름과 진료과목",
    body: "간판에 적힌 그대로가 가장 좋습니다.",
  },
  {
    title: "정확한 진료시간",
    body: "점심시간과 휴진일까지 적어두세요. 가장 많이 틀리는 부분입니다.",
  },
  {
    title: "주소와 전화번호",
    body: "환자에게 실제로 안내하는 내용과 같아야 합니다.",
  },
];

export default function BuildPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Build</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            첫 과제는
            <br />
            우리 의원 안내 페이지
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            이 과제를 고른 이유가 있습니다. 완성하면 실제로 쓸 데가 있고, 환자
            정보가 전혀 개입하지 않으며, 그대로 배포까지 이어집니다. 무엇보다
            결과물이 눈에 보여서 끝까지 가게 됩니다.
          </Lead>
        </Container>
      </section>

      <Section>
        <SectionLabel index="01">Prepare</SectionLabel>
        <Heading>먼저 손에 준비할 것</Heading>
        <Lead className="mt-6 max-w-2xl">
          도구를 열기 전에 내용을 먼저 정리하세요. 여기서 막히면 도구가
          문제인지 내용이 문제인지 구분이 안 됩니다.
        </Lead>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {prepare.map((item) => (
            <Card as="li" key={item.title}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Card>
          ))}
        </ul>

        <div className="mt-8">
          <Callout kind="warn" title="여기에 환자 정보는 들어가지 않습니다">
            이 과제에 필요한 것은 의원 자체의 공개 정보뿐입니다. 환자 이름,
            등록번호, 진료 내용은 어떤 형태로도 넣지 마세요.
          </Callout>
        </div>
      </Section>

      <Section tone="soft">
        <SectionLabel index="02">Request</SectionLabel>
        <Heading>이 요청문으로 시작하세요</Heading>
        <Lead className="mt-6 max-w-2xl">
          괄호 부분만 실제 정보로 바꾸면 됩니다. 마지막 조건 한 줄이 특히
          중요합니다. 알려주지 않은 내용을 지어내지 말라고 미리 못 박는
          역할입니다.
        </Lead>

        <div className="mt-10 max-w-3xl">
          <CopyBlock text={basePrompt} label="기본 요청문" />
        </div>
      </Section>

      <Section>
        <SectionLabel index="03">Three ways</SectionLabel>
        <Heading>같은 과제, 세 가지 방식</Heading>
        <Lead className="mt-6 max-w-2xl">
          하나만 고르셔도 됩니다. 다만 시간이 되신다면 두 가지를 해보세요. 툴
          소개를 백 번 읽는 것보다 직접 비교해보는 편이 훨씬 빠릅니다.
        </Lead>

        <div className="mt-12">
          <BuildTabs />
        </div>
      </Section>

      <Section tone="soft">
        <SectionLabel index="04">Check</SectionLabel>
        <Heading>공개 전 확인 목록</Heading>
        <Lead className="mt-6 max-w-2xl">
          다 만들었다고 바로 공유하지 마세요. 아래를 한 번씩 확인하는 데 5분이면
          충분합니다.
        </Lead>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {checklist.map((item, index) => (
            <li key={item} className="flex gap-4 bg-white p-6">
              <span className="text-sm font-bold text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/deploy/">이제 인터넷에 올리기 →</ButtonLink>
          <ButtonLink href="/safety/" variant="secondary">
            공개 전 주의사항 확인
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
