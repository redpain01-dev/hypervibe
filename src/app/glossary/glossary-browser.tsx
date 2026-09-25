"use client";

import { useMemo, useState } from "react";
import {
  glossary,
  glossaryCategories,
  type GlossaryCategory,
} from "@/data/glossary";

export function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GlossaryCategory | "전체">("전체");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return glossary.filter((entry) => {
      if (category !== "전체" && entry.category !== category) return false;
      if (!q) return true;

      return [entry.term, entry.korean, entry.analogy, entry.meaning].some(
        (field) => field.toLowerCase().includes(q),
      );
    });
  }, [query, category]);

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-6 bg-white/90 px-6 py-4 backdrop-blur-md">
        <label className="block">
          <span className="sr-only">용어 검색</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="찾는 단어를 입력하세요 — 예: 배포, commit, 에러"
            className="w-full rounded-full border border-line bg-white px-6 py-4 text-base outline-none focus:border-teal"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {(["전체", ...glossaryCategories] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === item
                  ? "bg-ink text-white"
                  : "bg-soft text-muted hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-muted">{results.length}개 용어</p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-card border border-line bg-soft p-12 text-center">
          <p className="font-semibold">찾는 용어가 아직 없습니다</p>
          <p className="mt-2 text-sm text-muted">
            다른 검색어로 찾아보시거나, 필요한 용어를 알려주시면 추가하겠습니다.
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 lg:grid-cols-2">
          {results.map((entry) => (
            <li
              key={entry.term}
              className="rounded-card border border-line bg-white p-7"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-mono text-lg font-bold">{entry.term}</h2>
                <span className="text-sm text-muted">{entry.korean}</span>
                <span className="ml-auto rounded-full bg-soft px-3 py-1 text-xs text-muted">
                  {entry.category}
                </span>
              </div>

              <p className="mt-5 rounded-panel bg-teal/5 px-4 py-3 text-sm font-semibold text-teal-dark">
                비유하자면 — {entry.analogy}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {entry.meaning}
              </p>

              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">언제 마주치나 </span>
                {entry.encounter}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
