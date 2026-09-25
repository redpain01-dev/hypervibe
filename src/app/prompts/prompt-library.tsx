"use client";

import { useState } from "react";
import { CopyBlock } from "@/components/copy-block";
import {
  prompts,
  promptCategories,
  type PromptCategory,
} from "@/data/prompts";

export function PromptLibrary() {
  const [category, setCategory] = useState<PromptCategory | "전체">("전체");

  const results =
    category === "전체"
      ? prompts
      : prompts.filter((item) => item.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["전체", ...promptCategories] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
              category === item
                ? "bg-ink text-white"
                : "bg-soft text-muted hover:text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="mt-12 grid gap-8">
        {results.map((entry) => (
          <li
            key={entry.id}
            className="rounded-card border border-line bg-white p-7 sm:p-9"
          >
            <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark">
              {entry.category}
            </span>
            <h2 className="mt-5 text-xl font-bold">{entry.situation}</h2>

            <div className="mt-6">
              <CopyBlock text={entry.prompt} />
            </div>

            {entry.tip ? (
              <p className="mt-5 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">요령 </span>
                {entry.tip}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
