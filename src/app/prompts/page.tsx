import type { Metadata } from "next";
import { Callout, Container, Heading, Lead, SectionLabel } from "@/components/ui";
import { PromptLibrary } from "./prompt-library";

export const metadata: Metadata = {
  title: "프롬프트 라이브러리",
  description:
    "시작할 때, 고칠 때, 에러가 났을 때 그대로 복사해서 쓸 수 있는 요청 문장 모음.",
};

export default function PromptsPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Prompts</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            막혔을 때
            <br />
            그대로 복사해서 쓰세요
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            결과의 질을 가르는 것은 코딩 실력이 아니라 요청하는 방식입니다.
            상황별로 실제로 통하는 문장을 모았습니다. 괄호 부분만 본인 상황으로
            바꾸면 됩니다.
          </Lead>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <PromptLibrary />

        <div className="mt-16">
          <Callout kind="reassure" title="좋은 요청에는 공통점이 있습니다">
            누가 쓰는지, 무엇을 얻고 싶은지, 무엇을 바꾸지 말아야 하는지. 이 세
            가지가 들어 있으면 대개 한 번에 원하는 결과가 나옵니다. 진료 의뢰서를
            쓰는 방식과 거의 같습니다.
          </Callout>
        </div>
      </Container>
    </>
  );
}
