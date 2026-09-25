import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Heading, Lead, SectionLabel } from "@/components/ui";
import { DiagnosisQuiz } from "./diagnosis-quiz";

export const metadata: Metadata = {
  title: "내게 맞는 툴 찾기",
  description:
    "다섯 가지 질문에 답하면 지금 상황에 맞는 AI 코딩 도구를 추천합니다.",
};

export default function DiagnosisPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Diagnosis</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            다섯 가지 질문으로
            <br />
            시작점을 정합니다
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            어떤 도구가 &ldquo;가장 좋은가&rdquo;에는 답이 없지만, 지금 상황에서
            &ldquo;가장 빨리 결과가 나오는가&rdquo;에는 답이 있습니다. 병원 PC의
            설치 제한처럼 실제로 판단을 가르는 조건부터 확인합니다.
          </Lead>
          <p className="mt-6 text-sm text-muted">
            답변은 이 브라우저 안에서만 계산되며 어디에도 전송되지 않습니다.
          </p>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <Suspense
          fallback={
            <div className="rounded-card border border-dashed border-line p-16 text-center text-muted">
              질문을 불러오는 중입니다
            </div>
          }
        >
          <DiagnosisQuiz />
        </Suspense>
      </Container>
    </>
  );
}
