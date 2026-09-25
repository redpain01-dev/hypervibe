# HyperVibe

의사를 위한 바이브 코딩 입문 가이드. HyperDoctor의 서브도메인 앱으로 `coding.hyperdoctor.app` 에서 운영합니다.

코딩을 배운 적 없는 의사가 AI 도구로 진료 현장에 필요한 웹 도구를 직접 만들고 **배포까지 완주**하도록 돕는 것이 목표입니다.

기획 문서는 [`docs/PLAN.md`](docs/PLAN.md) 에 있습니다.

## 기술 스택

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- `output: "export"` 정적 생성 — 서버가 없습니다
- Cloudflare Pages 배포

## 원칙

HyperDoctor 본체의 브랜드 원칙을 그대로 승계합니다.

- **회원가입 없음** — 로그인 기능 자체가 없습니다
- **수집 없음** — 사용자 입력은 브라우저 안에서만 처리하고 서버로 보내지 않습니다
- **서버 없음** — 모든 페이지는 빌드 시점에 HTML로 생성됩니다

인터랙티브 기능(툴 진단, 용어 사전, 프롬프트 라이브러리)은 클라이언트 컴포넌트로만 동작하며, 진단 결과는 URL 쿼리 문자열에만 담깁니다.

디자인 토큰(`src/app/globals.css`)은 본체 `hyperdoctor.app` 의 CSS 변수와 같은 값을 씁니다. 본체가 바뀌면 함께 맞춰야 합니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 정적 파일이 out/ 에 생성됩니다
npm run lint
```

## 구조

```
src/
  app/
    page.tsx            랜딩
    concept/            바이브 코딩이란
    diagnosis/          툴 진단 (클라이언트)
    tools/              툴 트랙 허브
      [track]/          대화형 · 웹빌더형 · 에디터형
    build/              실습 — 우리 의원 안내 페이지
    deploy/             배포와 도메인 연결
    safety/             의료인을 위한 주의사항
    prompts/            프롬프트 라이브러리 (클라이언트)
    glossary/           용어 사전 (클라이언트)
  components/           공용 UI
  data/                 콘텐츠. 모든 본문은 여기에 있습니다
  lib/site.ts           사이트 메타데이터와 내비게이션
```

콘텐츠를 고칠 때는 `src/data/` 안의 파일만 보면 됩니다. 페이지 컴포넌트는 표현만 담당합니다.

## 배포

Cloudflare Pages에 GitHub 저장소를 연결합니다.

| 항목 | 값 |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 이상 |

이후 Pages 프로젝트의 **Custom domains** 에 `coding.hyperdoctor.app` 을 추가하고, `hyperdoctor.app` DNS에 안내받은 CNAME 레코드를 등록합니다.

## 콘텐츠 유지보수

AI 도구의 가격 정책과 화면은 자주 바뀝니다. `src/data/tools.ts` 와 `src/data/track-content.ts` 의 비용·한도 서술은 주기적으로 확인이 필요합니다.

`src/data/safety.ts` 의 규제 관련 서술은 법률 자문이 아니며, 개정 여부를 관계기관 자료로 확인해야 합니다.
