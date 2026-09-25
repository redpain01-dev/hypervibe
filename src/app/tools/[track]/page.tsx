import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ButtonLink,
  Callout,
  Card,
  Container,
  Heading,
  Lead,
  Pill,
  Section,
  SectionLabel,
} from "@/components/ui";
import { tracks, type TrackId } from "@/data/tools";
import { trackContent } from "@/data/track-content";

export function generateStaticParams() {
  return tracks.map((track) => ({ track: track.id }));
}

function findTrack(id: string) {
  return tracks.find((track) => track.id === id);
}

export async function generateMetadata({
  params,
}: PageProps<"/tools/[track]">): Promise<Metadata> {
  const { track: id } = await params;
  const track = findTrack(id);
  if (!track) return {};

  return {
    title: `${track.name} — ${track.kind}`,
    description: track.oneLiner,
  };
}

export default async function TrackPage({
  params,
}: PageProps<"/tools/[track]">) {
  const { track: id } = await params;
  const track = findTrack(id);
  if (!track) notFound();

  const content = trackContent[track.id as TrackId];

  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <Link
            href="/tools/"
            className="text-sm font-semibold text-muted hover:text-ink"
          >
            ← 툴 배우기
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SectionLabel>{track.kind}</SectionLabel>
          </div>

          <Heading as="h1" className="max-w-3xl">
            {track.name}으로 시작하기
          </Heading>

          <Lead className="mt-8 max-w-2xl">{content.intro}</Lead>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pill tone="teal">{track.install}</Pill>
            <Pill>{track.cost}</Pill>
            <Pill>첫 결과물까지 약 {track.timeToFirst}</Pill>
          </div>
        </Container>
      </section>

      <Section>
        <SectionLabel index="01">Reality check</SectionLabel>
        <Heading>먼저 알아두실 것</Heading>
        <Lead className="mt-6 max-w-2xl">{content.reality}</Lead>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          <span className="font-semibold text-ink">어디까지 가능한가 </span>
          {track.ceiling}
        </p>
      </Section>

      <Section tone="soft">
        <SectionLabel index="02">First 30 minutes</SectionLabel>
        <Heading>첫 결과물까지의 순서</Heading>
        <Lead className="mt-6 max-w-2xl">
          아래 순서대로 따라오시면 됩니다. 중간에 막히면 그 단계의 참고 문장을
          그대로 쓰셔도 좋습니다.
        </Lead>

        <ol className="mt-12 grid gap-4">
          {content.steps.map((step, index) => (
            <Card as="li" key={step.title} className="sm:flex sm:gap-8">
              <span className="block text-2xl font-bold text-teal sm:w-16 sm:shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-3 sm:mt-0">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
                {step.tip ? (
                  <p className="mt-4 rounded-panel bg-soft px-5 py-4 text-sm leading-relaxed text-muted">
                    {step.tip}
                  </p>
                ) : null}
              </div>
            </Card>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionLabel index="03">Prompting</SectionLabel>
        <Heading>이 방식에서 통하는 요령</Heading>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {content.promptTips.map((tip) => (
            <Card as="li" key={tip.title}>
              <h3 className="text-lg font-bold">{tip.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {tip.body}
              </p>
            </Card>
          ))}
        </ul>

        <div className="mt-8">
          <ButtonLink href="/prompts/" variant="secondary">
            상황별 프롬프트 모음 보기
          </ButtonLink>
        </div>
      </Section>

      <Section tone="soft">
        <SectionLabel index="04">Troubleshooting</SectionLabel>
        <Heading>자주 막히는 지점</Heading>
        <Lead className="mt-6 max-w-2xl">
          거의 모든 분이 같은 곳에서 멈춥니다. 본인 잘못이 아니라 원래 그런
          지점입니다.
        </Lead>

        <ul className="mt-12 grid gap-4">
          {content.pitfalls.map((item) => (
            <Card as="li" key={item.symptom}>
              <h3 className="text-lg font-bold">{item.symptom}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_1.4fr]">
                <p className="text-sm leading-relaxed text-muted">
                  <span className="mb-1 block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    원인
                  </span>
                  {item.cause}
                </p>
                <p className="rounded-panel bg-teal/5 p-5 text-sm leading-relaxed text-teal-dark">
                  <span className="mb-1 block text-xs font-semibold tracking-[0.14em] uppercase">
                    해결
                  </span>
                  {item.fix}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          <Callout kind="reassure" title="다음 단계">
            {content.graduate}
          </Callout>
          <Callout kind="warn" title="공개하기 전에 반드시">
            환자 정보가 들어가지 않았는지, 지어낸 내용이 남아 있지 않은지
            확인하세요. 의료기관 관련 페이지는 의료광고 규정의 적용을 받을 수
            있습니다.{" "}
            <Link
              href="/safety/"
              className="font-semibold text-ink hover:underline"
            >
              주의사항 확인 →
            </Link>
          </Callout>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/build/">실습 과제 해보기 →</ButtonLink>
          <ButtonLink href="/deploy/" variant="secondary">
            인터넷에 올리는 법
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
