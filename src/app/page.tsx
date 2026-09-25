import Link from "next/link";
import {
  ButtonLink,
  Card,
  Container,
  Heading,
  Lead,
  Pill,
  Section,
  SectionLabel,
} from "@/components/ui";

const proofs = [
  {
    title: "개원 일정 계산기",
    body: "개원 예정일을 넣으면 준비 업무의 권장 시작일이 나옵니다. 화면 하나, 계산 규칙 몇 줄이면 되는 구조입니다.",
    href: "https://hyperdoctor.app/apps/opening-schedule",
  },
  {
    title: "의원 손익분기점 계산기",
    body: "월 고정비와 공헌이익으로 필요한 진료 건수를 구합니다. 엑셀로 하던 계산을 웹으로 옮긴 것에 가깝습니다.",
    href: "https://hyperdoctor.app/apps/break-even",
  },
  {
    title: "개인정보 보호 점검표",
    body: "반복 점검 항목을 체크리스트로 만든 도구입니다. 입력값은 브라우저 안에서만 처리됩니다.",
    href: "https://hyperdoctor.app/apps/privacy-check",
  },
];

const paths = [
  {
    tag: "처음이에요",
    title: "코딩을 한 번도 안 해봤습니다",
    body: "먼저 무엇이 가능하고 무엇이 어려운지 경계를 잡습니다. 설치할 것도, 결제할 것도 없이 읽는 것부터 시작합니다.",
    href: "/concept/",
    cta: "개념부터 보기",
  },
  {
    tag: "만들고 싶어요",
    title: "만들고 싶은 게 이미 있습니다",
    body: "다섯 가지 질문에 답하면 지금 상황에 맞는 도구 하나를 골라드립니다. 그다음 바로 실습으로 넘어갑니다.",
    href: "/diagnosis/",
    cta: "툴 진단 시작",
  },
  {
    tag: "막혔어요",
    title: "설치까지 했다가 포기했습니다",
    body: "대부분 같은 지점에서 멈춥니다. 툴별로 자주 막히는 곳과, 에러 메시지를 그대로 활용하는 방법을 정리했습니다.",
    href: "/tools/",
    cta: "툴별 안내 보기",
  },
];

const curriculum = [
  {
    index: "01",
    title: "경계 이해하기",
    body: "바이브 코딩으로 만들 수 있는 것과, 전문가가 필요한 영역을 구분합니다.",
    href: "/concept/",
  },
  {
    index: "02",
    title: "내 도구 고르기",
    body: "병원 PC의 설치 제한, 예산, 만들려는 결과물에 따라 적합한 툴이 달라집니다.",
    href: "/diagnosis/",
  },
  {
    index: "03",
    title: "첫 30분 통과하기",
    body: "계정 생성부터 첫 화면이 뜨기까지를 툴별로 단계마다 안내합니다.",
    href: "/tools/",
  },
  {
    index: "04",
    title: "실제로 하나 만들기",
    body: "우리 의원 안내 페이지를 같은 조건으로 세 가지 툴에서 만들어 차이를 체감합니다.",
    href: "/build/",
  },
  {
    index: "05",
    title: "인터넷에 올리기",
    body: "내 컴퓨터에서만 열리던 화면에 주소를 붙입니다. 무료 경로로 충분합니다.",
    href: "/deploy/",
  },
  {
    index: "06",
    title: "안전하게 운영하기",
    body: "환자정보, 의료광고 심의, 의료기기 규제까지 의료인이 반드시 확인할 지점들.",
    href: "/safety/",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-soft">
        <Container className="py-24 sm:py-32">
          <SectionLabel>HyperDoctor × Vibe Coding</SectionLabel>
          <Heading as="h1" className="max-w-4xl">
            진료실에 필요한 도구,
            <br />
            직접 만들 수 있습니다.
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            개발자가 되라는 뜻이 아닙니다. 만들고 싶은 것을 말로 설명하면 AI가
            코드를 씁니다. 의사에게 필요한 것은 코딩 실력이 아니라 문제를 정확히
            정의하는 능력이고, 그건 이미 매일 하고 계신 일입니다.
          </Lead>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/diagnosis/">
              내게 맞는 툴 찾기 →
            </ButtonLink>
            <ButtonLink href="/concept/" variant="secondary">
              바이브 코딩이 뭔가요?
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            <Pill tone="teal">회원가입 없이</Pill>
            <Pill>무료 도구로 시작</Pill>
            <Pill>환자정보 입력 없이</Pill>
            <Pill>목표는 완주 — 내 주소 하나 갖기</Pill>
          </div>
        </Container>
      </section>

      <Section>
        <SectionLabel index="01">Proof</SectionLabel>
        <Heading>
          이미 이렇게 만들어진
          <br />
          도구들이 있습니다
        </Heading>
        <Lead className="mt-6 max-w-2xl">
          HyperDoctor에서 쓰이는 무료 도구들은 대단한 기술로 만들어지지
          않았습니다. 필요한 계산을 정확히 정의하고, 화면 하나에 담은 것입니다.
          지금 보시는 예시가 바로 첫 목표입니다.
        </Lead>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {proofs.map((item) => (
            <Card as="li" key={item.title} className="flex flex-col">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <a
                href={item.href}
                className="mt-6 text-sm font-semibold text-teal-dark hover:underline"
              >
                실제 도구 열어보기 ↗
              </a>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="soft">
        <SectionLabel index="02">Choose your path</SectionLabel>
        <Heading>지금 상황부터 고르세요</Heading>
        <Lead className="mt-6 max-w-2xl">
          처음부터 순서대로 읽지 않아도 됩니다. 지금 막힌 지점에서 시작하는 것이
          가장 빠릅니다.
        </Lead>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {paths.map((item) => (
            <Card as="li" key={item.href} className="flex flex-col">
              <Pill tone="teal">{item.tag}</Pill>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <Link
                href={item.href}
                className="mt-6 text-sm font-semibold text-teal-dark hover:underline"
              >
                {item.cta} →
              </Link>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionLabel index="03">Curriculum</SectionLabel>
        <Heading>
          여섯 단계면
          <br />
          첫 결과물이 인터넷에 올라갑니다
        </Heading>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((step) => (
            <li key={step.index} className="bg-white">
              <Link
                href={step.href}
                className="flex h-full flex-col p-8 transition-colors hover:bg-soft"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-teal">
                  {step.index}
                </span>
                <span className="mt-4 text-lg font-bold">{step.title}</span>
                <span className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy">
        <SectionLabel index="04" tone="light">
          Safety first
        </SectionLabel>
        <Heading className="max-w-3xl">
          환자 정보는
          <br />
          어떤 AI에도 입력하지 않습니다
        </Heading>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          프롬프트에 적은 순간 그 내용은 외부로 전송됩니다. 이름, 등록번호,
          생년월일뿐 아니라 조합하면 사람을 특정할 수 있는 정보 전부가
          해당됩니다. 여기에 더해 의료광고 심의, 의료기기 소프트웨어 규제까지 —
          의사가 만드는 도구에는 일반 개발자가 신경 쓰지 않는 경계선이
          있습니다.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="/safety/"
            className="bg-white text-navy hover:bg-white/90"
          >
            의료인을 위한 주의사항 읽기 →
          </ButtonLink>
        </div>
      </Section>

      <Section tone="soft">
        <SectionLabel index="05">Toolbox</SectionLabel>
        <Heading>막힐 때 열어보는 두 가지</Heading>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-xl font-bold">용어 사전</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              <code className="rounded bg-soft px-1.5 py-0.5 font-mono text-[13px]">
                repository
              </code>
              를 &ldquo;저장소&rdquo;라고 옮기면 아무것도 전달되지 않습니다.
              &ldquo;환자 차트철&rdquo;이라고 하면 바로 이해됩니다. 낯선 용어를
              이미 아는 언어로 옮겼습니다.
            </p>
            <Link
              href="/glossary/"
              className="mt-6 text-sm font-semibold text-teal-dark hover:underline"
            >
              용어 찾아보기 →
            </Link>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-xl font-bold">프롬프트 라이브러리</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              원하는 대로 안 나올 때, 에러가 났을 때, 보기 좋게 다듬고 싶을 때
              — 상황별로 그대로 복사해서 쓸 수 있는 요청 문장을 모았습니다.
            </p>
            <Link
              href="/prompts/"
              className="mt-6 text-sm font-semibold text-teal-dark hover:underline"
            >
              프롬프트 보기 →
            </Link>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-card border border-line bg-soft p-10 text-center sm:p-16">
          <Heading className="mx-auto max-w-2xl">
            오늘 안에 첫 화면 하나는 띄울 수 있습니다
          </Heading>
          <Lead className="mx-auto mt-6 max-w-xl">
            설치도 결제도 없이 시작하는 경로부터 안내합니다. 다섯 가지 질문으로
            시작해 보세요.
          </Lead>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/diagnosis/">툴 진단 시작하기 →</ButtonLink>
            <ButtonLink href="/build/" variant="secondary">
              실습 과제 먼저 보기
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
