import type { Metadata } from "next";
import { Container, Heading, Lead, SectionLabel } from "@/components/ui";
import { GlossaryBrowser } from "./glossary-browser";

export const metadata: Metadata = {
  title: "용어 사전",
  description:
    "개발 용어를 의학 비유로 옮긴 사전입니다. repository는 환자 차트철, debugging은 감별진단입니다.",
};

export default function GlossaryPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Glossary</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            아는 언어로 옮긴
            <br />
            개발 용어 사전
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            낯선 것은 개념이 아니라 단어입니다. repository를
            &ldquo;저장소&rdquo;라고 옮기면 아무것도 전달되지 않지만 &ldquo;환자
            차트철&rdquo;이라고 하면 바로 이해됩니다. 이미 알고 계신 것에
            빗대어 정리했습니다.
          </Lead>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <GlossaryBrowser />
      </Container>
    </>
  );
}
