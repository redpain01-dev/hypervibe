import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function cx(...values: (string | false | null | undefined)[]) {
  return values.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-page px-6", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "soft" | "navy";
}) {
  const tones = {
    white: "bg-white",
    soft: "bg-soft",
    navy: "bg-navy text-white",
  } as const;

  return (
    <section className={cx("py-20 sm:py-28", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** 본체 사이트의 `CORE SIGNAL 01` 라벨 패턴. */
export function SectionLabel({
  index,
  children,
  tone = "teal",
}: {
  index?: string;
  children: ReactNode;
  tone?: "teal" | "light";
}) {
  return (
    <p
      className={cx(
        "mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "teal" ? "text-teal" : "text-white/60",
      )}
    >
      {index ? (
        <span
          className={cx(
            "inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[11px] tracking-normal",
            tone === "teal" ? "bg-teal/10" : "bg-white/10",
          )}
        >
          {index}
        </span>
      ) : null}
      {children}
    </p>
  );
}

export function Heading({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const sizes = {
    h1: "text-4xl sm:text-5xl lg:text-6xl leading-[1.15]",
    h2: "text-3xl sm:text-4xl leading-[1.25]",
    h3: "text-xl sm:text-2xl leading-[1.35]",
  } as const;

  return (
    <Tag className={cx("font-bold tracking-tight", sizes[Tag], className)}>
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cx("text-lg leading-relaxed text-muted", className)}>
      {children}
    </p>
  );
}

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={cx(
        "rounded-card border border-line bg-white p-7 sm:p-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "teal" | "warn";
}) {
  const tones = {
    neutral: "border border-line bg-white text-muted",
    teal: "bg-teal/10 text-teal-dark",
    warn: "bg-amber-50 text-amber-800",
  } as const;

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-teal text-white hover:bg-teal-dark",
    secondary: "border border-line bg-white text-ink hover:border-teal/40",
    ghost: "text-ink hover:bg-soft",
  } as const;

  return (
    <Link
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

/** 초보자가 막히는 지점에서 불안을 낮추기 위한 고정 컴포넌트. */
export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "reassure" | "warn";
  title: string;
  children: ReactNode;
}) {
  const kinds = {
    note: "border-line bg-soft",
    reassure: "border-teal/25 bg-teal/5",
    warn: "border-amber-300/60 bg-amber-50",
  } as const;

  const labels = {
    note: "참고",
    reassure: "안심하세요",
    warn: "주의",
  } as const;

  return (
    <aside className={cx("rounded-panel border p-6", kinds[kind])}>
      <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        {labels[kind]}
      </p>
      <p className="mb-2 font-semibold">{title}</p>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </aside>
  );
}
