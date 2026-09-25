import type { Metadata } from "next";
import Link from "next/link";
import {
  ButtonLink,
  Callout,
  Container,
  Heading,
  Lead,
  Section,
  SectionLabel,
} from "@/components/ui";
import { tracks } from "@/data/tools";

export const metadata: Metadata = {
  title: "툴 배우기",
  description:
    "대화형, 웹 빌더형, 에디터형 세 갈래로 나눈 AI 코딩 도구 입문 안내입니다.",
};

export default function ToolsPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Tools</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            도구는 많지만
            <br />
            갈래는 셋뿐입니다
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            새 이름이 매달 나오지만 방식은 크게 셋으로 나뉩니다. 대화창에서
            그대로 하느냐, 화면을 만들어주는 서비스를 쓰느냐, 전문 작업 환경을
            직접 여느냐. 이 구분만 알면 새로운 도구가 나와도 어디에 속하는지 바로
            보입니다.
          </Lead>
          <div className="mt-10">
            <ButtonLink href="/diagnosis/">
              어디부터 할지 모르겠다면 진단부터 →
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section>
        <ul className="grid gap-5">
          {tracks.map((track, index) => (
            <li key={track.id}>
              <Link
                href={track.href}
                className="block rounded-card border border-line bg-white p-8 transition-colors hover:border-teal/40 hover:bg-soft sm:p-10"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="text-xs font-bold tracking-[0.18em] text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold">{track.name}</h2>
                  <span className="text-sm text-muted">{track.kind}</span>
                </div>

                <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                  {track.oneLiner}
                </p>

                <dl className="mt-8 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-4">
                  <div className="bg-white p-5">
                    <dt className="text-xs text-muted">이런 분께</dt>
                    <dd className="mt-1 text-sm font-semibold">
                      {track.bestFor}
                    </dd>
                  </div>
                  <div className="bg-white p-5">
                    <dt className="text-xs text-muted">설치</dt>
                    <dd className="mt-1 text-sm font-semibold">
                      {track.install}
                    </dd>
                  </div>
                  <div className="bg-white p-5">
                    <dt className="text-xs text-muted">비용</dt>
                    <dd className="mt-1 text-sm font-semibold">{track.cost}</dd>
                  </div>
                  <div className="bg-white p-5">
                    <dt className="text-xs text-muted">첫 결과물까지</dt>
                    <dd className="mt-1 text-sm font-semibold">
                      {track.timeToFirst}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm font-semibold text-teal-dark">
                  {track.name} 시작하기 →
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Callout kind="note" title="셋 중 하나를 골라 끝까지 가보세요">
            세 가지를 다 익힐 필요는 없습니다. 어느 쪽이든 한 번 완주하면 나머지
            둘은 며칠이면 따라옵니다. 방식이 다를 뿐 하는 일은 같기 때문입니다.
          </Callout>
        </div>
      </Section>
    </>
  );
}
