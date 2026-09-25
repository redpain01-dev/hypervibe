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

export const metadata: Metadata = {
  title: "바이브 코딩이란",
  description:
    "바이브 코딩으로 의사가 만들 수 있는 것과 만들기 어려운 것의 경계를 먼저 정리합니다.",
};

const canDo = [
  {
    title: "계산기",
    body: "용량 환산, 위험도 점수, 손익 계산처럼 입력값을 넣으면 결과가 나오는 화면.",
  },
  {
    title: "체크리스트",
    body: "반복 점검 항목을 순서대로 확인하고 결과를 인쇄하거나 저장하는 도구.",
  },
  {
    title: "안내 페이지",
    body: "진료시간, 오시는 길, 준비사항처럼 환자에게 반복 설명하던 내용을 링크 하나로.",
  },
  {
    title: "설명 자료",
    body: "시술 전후 주의사항을 그림과 함께 보여주는 페이지. 종이 대신 QR로 전달.",
  },
  {
    title: "문진표",
    body: "환자가 답을 고르면 정리된 결과가 나오는 양식. 단, 결과를 서버에 저장하지 않는 형태로.",
  },
  {
    title: "내부 정리 도구",
    body: "당직표, 재고 확인표처럼 원내에서만 쓰는 작은 업무 도구.",
  },
];

const hardToDo = [
  {
    title: "EMR 연동",
    body: "전자의무기록과 데이터를 주고받는 일은 기술 문제 이전에 계약과 보안 승인의 문제입니다.",
    verdict: "업체와 상의",
  },
  {
    title: "환자 데이터 저장",
    body: "개인정보를 보관하는 순간 암호화, 접근통제, 유출 대응 의무가 따라옵니다. 혼자 감당할 영역이 아닙니다.",
    verdict: "전문가 필요",
  },
  {
    title: "결제 기능",
    body: "돈이 오가면 보안 요구 수준이 완전히 달라집니다. 기존 결제 서비스를 붙이는 것이 정답입니다.",
    verdict: "기성 서비스 사용",
  },
  {
    title: "로그인·회원 관리",
    body: "만들 수는 있지만 비밀번호를 안전하게 다루는 일은 어렵습니다. 처음 만드는 도구에는 넣지 마세요.",
    verdict: "가능하면 회피",
  },
  {
    title: "진단·치료 판단 보조",
    body: "결과가 임상 판단에 개입하면 의료기기 소프트웨어로 분류될 수 있습니다.",
    verdict: "규제 확인 필수",
  },
];

const strengths = [
  {
    index: "01",
    title: "문제를 정확히 정의합니다",
    body: "바이브 코딩에서 결과의 질을 결정하는 것은 코딩 실력이 아니라 요구사항의 명확성입니다. 무엇이 문제이고 어떤 상태가 정상인지 규정하는 일은 진료에서 매일 하시는 작업입니다.",
  },
  {
    index: "02",
    title: "프로토콜로 생각합니다",
    body: "조건에 따라 분기하고, 예외를 미리 정하고, 순서를 지키는 사고방식은 프로그램의 구조와 정확히 같습니다. 알고리즘이라는 말이 낯설 뿐 이미 쓰고 계십니다.",
  },
  {
    index: "03",
    title: "결과를 의심합니다",
    body: "AI는 자신 있게 틀립니다. 검사 결과를 임상과 대조해 확인하는 습관이 그대로 안전장치가 됩니다. 이 습관이 없는 사람이 오히려 위험합니다.",
  },
];

export default function ConceptPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Concept</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            코드를 쓰지 않고
            <br />
            코드를 만드는 방식
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            바이브 코딩은 만들고 싶은 것을 말로 설명하면 AI가 코드를 쓰고, 사람은
            결과를 보고 다시 고쳐달라고 말하는 방식입니다. 타이핑하는 사람이
            바뀌었을 뿐, 무엇을 만들지 결정하는 사람은 여전히 본인입니다.
          </Lead>
        </Container>
      </section>

      <Section>
        <SectionLabel index="01">Why doctors</SectionLabel>
        <Heading>의사가 특히 잘할 수 있는 이유</Heading>
        <Lead className="mt-6 max-w-2xl">
          겸손한 말이 아니라 구조적인 이유가 있습니다. 바이브 코딩에서 요구되는
          능력의 목록이 임상에서 훈련되는 능력과 상당 부분 겹칩니다.
        </Lead>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {strengths.map((item) => (
            <Card as="li" key={item.index}>
              <span className="text-xs font-bold tracking-[0.18em] text-teal">
                {item.index}
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="soft">
        <SectionLabel index="02">Scope</SectionLabel>
        <Heading>만들 수 있는 것</Heading>
        <Lead className="mt-6 max-w-2xl">
          공통점이 있습니다. 화면 한두 개로 끝나고, 정보를 보관하지 않으며,
          계산이나 안내가 목적입니다. 처음 만드는 것은 이 범위 안에서 고르세요.
        </Lead>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {canDo.map((item) => (
            <li key={item.title} className="bg-white p-8">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionLabel index="03">Boundary</SectionLabel>
        <Heading>혼자 만들면 안 되는 것</Heading>
        <Lead className="mt-6 max-w-2xl">
          AI는 이것들도 &ldquo;만들어&rdquo; 줍니다. 문제는 만들어지느냐가
          아니라 책임질 수 있느냐입니다. 아래 영역은 기술보다 규제와 보안이
          먼저입니다.
        </Lead>

        <ul className="mt-12 grid gap-4">
          {hardToDo.map((item) => (
            <Card as="li" key={item.title} className="sm:flex sm:gap-8">
              <div className="sm:w-48 sm:shrink-0">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold text-amber-700">
                  {item.verdict}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-0">
                {item.body}
              </p>
            </Card>
          ))}
        </ul>

        <div className="mt-10">
          <Callout kind="warn" title="판단이 서지 않을 때의 기준">
            만들려는 도구가 환자를 식별하거나, 환자의 정보를 어딘가에
            보관하거나, 임상적 판단에 영향을 준다면 멈추고 확인하세요. 이 세
            가지에 해당하지 않는다면 대부분 안전한 범위입니다.
          </Callout>
        </div>
      </Section>

      <Section tone="soft">
        <SectionLabel index="04">Expectation</SectionLabel>
        <Heading>한 번에 완성되지 않습니다</Heading>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold">정상적인 과정</h3>
            <ol className="mt-5 grid gap-4 text-sm leading-relaxed text-muted">
              <li>
                <span className="font-semibold text-ink">1. 요청</span> — 만들고
                싶은 것을 설명합니다. 이 단계에서 결과의 절반이 정해집니다.
              </li>
              <li>
                <span className="font-semibold text-ink">2. 확인</span> — 나온
                결과를 봅니다. 대개 절반쯤 마음에 듭니다.
              </li>
              <li>
                <span className="font-semibold text-ink">3. 수정 요청</span> —
                무엇이 어떻게 다른지 구체적으로 말합니다.
              </li>
              <li>
                <span className="font-semibold text-ink">4. 반복</span> — 3~5회
                왕복하면 쓸 만해집니다. 이게 실패가 아니라 정상입니다.
              </li>
            </ol>
          </Card>

          <Callout
            kind="reassure"
            title="첫 시도에서 이상한 결과가 나오는 것은 실력 문제가 아닙니다"
          >
            숙련된 사람도 똑같이 여러 번 고칩니다. 차이는 왕복 횟수가 아니라
            무엇이 잘못됐는지 설명하는 방식에 있습니다. 프롬프트 라이브러리에
            상황별 문장을 정리해 두었으니 그대로 쓰셔도 됩니다.
          </Callout>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/diagnosis/">내게 맞는 툴 찾기 →</ButtonLink>
          <ButtonLink href="/glossary/" variant="secondary">
            모르는 단어가 나왔다면
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
