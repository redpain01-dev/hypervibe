import Link from "next/link";
import { nav, site, toolboxNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="mx-auto grid w-full max-w-page gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold tracking-tight">HyperVibe</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <a
            href={site.parentUrl}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:underline"
          >
            {site.parent} 본체 사이트로 이동 ↗
          </a>
        </div>

        <nav aria-label="학습 순서">
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            학습 순서
          </p>
          <ul className="grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="참고 자료">
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            참고 자료
          </p>
          <ul className="grid gap-2 text-sm">
            {toolboxNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-page flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.parent}. 학습용 자료이며 법률·의학
            자문이 아닙니다.
          </p>
          <p>입력한 내용은 브라우저 안에서만 처리되며 서버에 저장하지 않습니다.</p>
        </div>
      </div>
    </footer>
  );
}
