import type { Metadata } from "next";
import {
  ButtonLink,
  Callout,
  Container,
  Heading,
  Section,
  SectionLabel,
} from "@/components/ui";
import { risks } from "@/data/safety";

export const metadata: Metadata = {
  title: "의료인을 위한 주의사항",
  description:
    "환자정보, 데이터 저장, 의료기기 규제, 의료광고 심의까지 의사가 도구를 만들 때 확인해야 할 경계선.",
};

export default function SafetyPage() {
  return (
    <>
      <section className="border-b border-line bg-navy text-white">
        <Container className="py-20 sm:py-24">
          <SectionLabel tone="light">Safety</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            만들 수 있다는 것과
            <br />
            만들어도 된다는 것은 다릅니다
          </Heading>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            AI는 요청하면 거의 무엇이든 만들어 줍니다. 문제는 만들어지느냐가
            아니라 책임질 수 있느냐입니다. 일반적인 코딩 안내서에는 나오지 않지만
            의사에게는 반드시 필요한 여섯 가지를 정리했습니다.
          </p>
        </Container>
      </section>

      <Section tone="soft">
        <div className="rounded-card border border-line bg-white p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            판단이 서지 않을 때의 기준
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            만들려는 도구가 <strong>환자를 식별</strong>하거나,{" "}
            <strong>정보를 어딘가에 보관</strong>하거나,{" "}
            <strong>임상 판단에 영향</strong>을 준다면 멈추고 확인하세요. 이 세
            가지 중 어느 것에도 해당하지 않는다면 대부분 안전한 범위입니다.
          </p>
        </div>
      </Section>

      <Section>
        <ol className="grid gap-16">
          {risks.map((risk) => (
            <li key={risk.index} className="scroll-mt-24" id={`risk-${risk.index}`}>
              <SectionLabel index={risk.index}>{risk.reference}</SectionLabel>
              <Heading as="h2">{risk.title}</Heading>
              <p className="mt-4 text-lg font-semibold text-muted">
                {risk.summary}
              </p>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                {risk.detail}
              </p>

              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                <div className="rounded-card border border-teal/25 bg-teal/5 p-7">
                  <p className="text-sm font-bold text-teal-dark">
                    이건 괜찮습니다
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {risk.safe.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed"
                      >
                        <span className="text-teal">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-card border border-amber-300/60 bg-amber-50 p-7">
                  <p className="text-sm font-bold text-amber-800">
                    이건 위험합니다
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {risk.risky.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed"
                      >
                        <span className="text-amber-700">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <Callout kind="note" title="이 페이지는 법률 자문이 아닙니다">
          실무에서 자주 문제가 되는 지점을 정리한 학습 자료입니다. 규정은
          개정되고 개별 사안마다 판단이 달라집니다. 실제로 공개하거나 도입하기
          전에는 보건복지부, 식품의약품안전처, 개인정보보호위원회, 대한의사협회
          의료광고심의위원회 등 관계기관의 최신 자료를 직접 확인하시고, 필요한
          경우 전문가의 검토를 받으시기 바랍니다.
        </Callout>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/build/">안전한 첫 과제로 시작하기 →</ButtonLink>
          <ButtonLink href="/prompts/" variant="secondary">
            안전하게 요청하는 문장 보기
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
