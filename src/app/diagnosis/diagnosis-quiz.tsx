"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { questions, resultCopy } from "@/data/diagnosis";
import { tracks, type TrackId } from "@/data/tools";

type Answers = (number | null)[];

const emptyAnswers = (): Answers => questions.map(() => null);

function encode(answers: Answers) {
  return answers.map((value) => (value === null ? "-" : String(value))).join("");
}

function decode(value: string | null): Answers {
  if (!value || value.length !== questions.length) return emptyAnswers();

  return questions.map((question, index) => {
    const char = value[index];
    const parsed = Number(char);
    if (Number.isNaN(parsed) || parsed < 0 || parsed >= question.choices.length)
      return null;
    return parsed;
  });
}

function rank(answers: Answers) {
  const scores: Record<TrackId, number> = { chat: 0, builder: 0, editor: 0 };

  answers.forEach((choiceIndex, questionIndex) => {
    if (choiceIndex === null) return;
    const choice = questions[questionIndex].choices[choiceIndex];
    for (const [track, value] of Object.entries(choice.scores)) {
      scores[track as TrackId] += value ?? 0;
    }
  });

  return (Object.keys(scores) as TrackId[]).sort(
    (a, b) => scores[b] - scores[a],
  );
}

export function DiagnosisQuiz() {
  // 공유받은 링크로 들어온 경우 답변을 복원한다. Suspense 경계 안에서만 렌더되므로
  // 초기값 계산은 항상 브라우저에서 실행된다.
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<Answers>(() =>
    decode(searchParams.get("a")),
  );
  const [copied, setCopied] = useState(false);

  const answeredCount = answers.filter((value) => value !== null).length;
  const complete = answeredCount === questions.length;

  useEffect(() => {
    const url = new URL(window.location.href);
    if (answeredCount === 0) url.searchParams.delete("a");
    else url.searchParams.set("a", encode(answers));
    window.history.replaceState(null, "", url);
  }, [answers, answeredCount]);

  const order = useMemo(() => rank(answers), [answers]);

  const select = useCallback((questionIndex: number, choiceIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = choiceIndex;
      return next;
    });
  }, []);

  const [best, runnerUp] = order;
  const bestTrack = tracks.find((track) => track.id === best)!;
  const runnerUpTrack = tracks.find((track) => track.id === runnerUp)!;

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-6 border-b border-line bg-white/90 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">
            {answeredCount} / {questions.length} 답변
          </span>
          {answeredCount > 0 ? (
            <button
              type="button"
              onClick={() => setAnswers(emptyAnswers())}
              className="text-muted hover:text-ink"
            >
              처음부터 다시
            </button>
          ) : null}
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-line">
          <div
            className="h-full bg-teal transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <ol className="mt-12 grid gap-12">
        {questions.map((question, questionIndex) => (
          <li key={question.id}>
            <p className="text-xs font-bold tracking-[0.18em] text-teal">
              Q{questionIndex + 1}
            </p>
            <h2 className="mt-3 text-xl font-bold sm:text-2xl">
              {question.title}
            </h2>
            {question.note ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {question.note}
              </p>
            ) : null}

            <div className="mt-6 grid gap-3">
              {question.choices.map((choice, choiceIndex) => {
                const selected = answers[questionIndex] === choiceIndex;
                return (
                  <button
                    key={choice.label}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => select(questionIndex, choiceIndex)}
                    className={`rounded-panel border p-5 text-left transition-colors ${
                      selected
                        ? "border-teal bg-teal/5"
                        : "border-line bg-white hover:border-teal/40"
                    }`}
                  >
                    <span className="block font-semibold">{choice.label}</span>
                    {choice.hint ? (
                      <span className="mt-1 block text-sm text-muted">
                        {choice.hint}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 scroll-mt-32" id="result">
        {complete ? (
          <div className="rounded-card border border-line bg-soft p-8 sm:p-12">
            <p className="text-xs font-bold tracking-[0.18em] text-teal uppercase">
              Result
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              {resultCopy[best].headline}
            </h2>
            <p className="mt-3 text-lg font-semibold text-muted">
              {bestTrack.name} · {bestTrack.kind}
            </p>

            <p className="mt-8 max-w-2xl leading-relaxed text-muted">
              {resultCopy[best].why}
            </p>

            <dl className="mt-8 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3">
              <div className="bg-white p-5">
                <dt className="text-xs text-muted">설치</dt>
                <dd className="mt-1 font-semibold">{bestTrack.install}</dd>
              </div>
              <div className="bg-white p-5">
                <dt className="text-xs text-muted">비용</dt>
                <dd className="mt-1 font-semibold">{bestTrack.cost}</dd>
              </div>
              <div className="bg-white p-5">
                <dt className="text-xs text-muted">첫 결과물까지</dt>
                <dd className="mt-1 font-semibold">{bestTrack.timeToFirst}</dd>
              </div>
            </dl>

            <p className="mt-8 rounded-panel bg-white px-5 py-4 text-sm leading-relaxed">
              <span className="font-semibold">첫 단계 </span>
              {resultCopy[best].firstStep}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={bestTrack.href}
                className="inline-flex items-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-dark"
              >
                {bestTrack.name} 안내로 이동 →
              </Link>
              <button
                type="button"
                onClick={async () => {
                  await navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold hover:border-teal/40"
              >
                {copied ? "주소가 복사됐습니다" : "결과 링크 복사"}
              </button>
            </div>

            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-ink">차선책 </span>
              {runnerUpTrack.name}({runnerUpTrack.kind})도 잘 맞습니다.{" "}
              {runnerUpTrack.oneLiner}{" "}
              <Link
                href={runnerUpTrack.href}
                className="font-semibold text-teal-dark hover:underline"
              >
                살펴보기 →
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-card border border-dashed border-line p-10 text-center">
            <p className="font-semibold">
              {questions.length - answeredCount}개 질문이 남았습니다
            </p>
            <p className="mt-2 text-sm text-muted">
              모두 답하시면 추천 결과가 여기에 나타납니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
