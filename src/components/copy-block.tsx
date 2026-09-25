"use client";

import { useState } from "react";

export function CopyBlock({
  text,
  label,
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-panel border border-line bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-soft px-5 py-3">
        <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          {label ?? "그대로 복사해서 쓰세요"}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-navy"
        >
          {copied ? "복사됨" : "복사"}
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 text-sm leading-relaxed whitespace-pre-wrap">
        {text}
      </pre>
    </div>
  );
}
