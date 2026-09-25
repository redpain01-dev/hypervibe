"use client";

import Link from "next/link";
import { useState } from "react";
import { walkthroughs } from "@/data/build";
import { getTrack } from "@/data/tools";

export function BuildTabs() {
  const [active, setActive] = useState(walkthroughs[0].track);
  const current = walkthroughs.find((item) => item.track === active)!;
  const track = getTrack(current.track);

  return (
    <div>
      <div
        role="tablist"
        aria-label="툴별 진행 방법"
        className="flex flex-wrap gap-2"
      >
        {walkthroughs.map((item) => (
          <button
            key={item.track}
            type="button"
            role="tab"
            aria-selected={active === item.track}
            onClick={() => setActive(item.track)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
              active === item.track
                ? "bg-ink text-white"
                : "bg-soft text-muted hover:text-ink"
            }`}
          >
            {item.label}
            <span className="ml-2 font-normal opacity-70">{item.time}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-card border border-line bg-white p-8 sm:p-10">
        <p className="text-sm text-muted">{track.kind}</p>

        <ol className="mt-6 grid gap-4">
          {current.steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-soft text-xs font-bold text-teal">
                {index + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 rounded-panel bg-teal/5 px-5 py-4 text-sm leading-relaxed text-teal-dark">
          <span className="font-semibold">짚고 갈 점 </span>
          {current.watchOut}
        </p>

        <Link
          href={track.href}
          className="mt-6 inline-block text-sm font-semibold text-teal-dark hover:underline"
        >
          {track.name} 상세 안내 보기 →
        </Link>
      </div>
    </div>
  );
}
