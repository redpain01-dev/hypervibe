import type { Metadata } from "next";
import {
  ButtonLink,
  Callout,
  Card,
  Container,
  Heading,
  Lead,
  Pill,
  Section,
  SectionLabel,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "인터넷에 올리기",
  description:
    "만든 결과물에 주소를 붙이는 방법. 무료 경로부터 내 도메인 연결까지 안내합니다.",
};

const routes = [
  {
    name: "만든 도구에서 바로 공개",
    who: "웹 빌더형으로 만든 경우",
    effort: "버튼 한 번",
    body: "Lovable이나 v0에는 공개 기능이 들어 있습니다. Publish를 누르면 주소가 나옵니다. 따로 할 일이 없습니다.",
    caveat: "주소에 서비스 이름이 섞여 나옵니다. 나중에 내 도메인으로 바꿀 수 있습니다.",
  },
  {
    name: "파일을 끌어다 올리기",
    who: "HTML 파일 하나를 만든 경우",
    effort: "5분",
    body: "Cloudflare Pages나 Netlify에 가입한 뒤 만든 파일이 든 폴더를 화면에 끌어다 놓으면 끝납니다. 명령어를 한 줄도 쓰지 않습니다.",
    caveat: "고칠 때마다 다시 올려야 합니다. 몇 번 하다 보면 번거로워집니다.",
  },
  {
    name: "GitHub에 올리고 자동 배포",
    who: "계속 고쳐가며 쓸 경우",
    effort: "30분 (처음 한 번만)",
    body: "코드를 GitHub에 올려두고 Cloudflare Pages와 연결하면, 이후로는 수정할 때마다 저절로 반영됩니다. HyperDoctor의 도구들이 이 방식으로 운영됩니다.",
    caveat: "처음 한 번은 설정이 필요합니다. 그 이후로는 가장 편합니다.",
  },
];

const domainSteps = [
  {
    title: "도메인을 구입합니다",
    body: "가비아 같은 국내 업체나 Cloudflare에서 살 수 있습니다. 연 2만 원 안팎이고, .com 이나 .kr 이 무난합니다.",
  },
  {
    title: "배포 서비스에 도메인을 등록합니다",
    body: "Cloudflare Pages의 설정에서 Custom domain 항목에 구입한 주소를 넣습니다.",
  },
  {
    title: "안내받은 값을 도메인 설정에 입력합니다",
    body: "복사해서 붙여넣으라는 값이 나옵니다. 의미를 이해할 필요 없이 그대로 옮기면 됩니다.",
  },
  {
    title: "잠시 기다립니다",
    body: "몇 분에서 길면 몇 시간이 걸립니다. 자물쇠 표시가 있는 https 주소도 자동으로 붙습니다.",
  },
];

export default function DeployPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <Container className="py-20 sm:py-24">
          <SectionLabel>Deploy</SectionLabel>
          <Heading as="h1" className="max-w-3xl">
            내 컴퓨터에서만 열리던 화면에
            <br />
            주소를 붙입니다
          </Heading>
          <Lead className="mt-8 max-w-2xl">
            배포는 개원에 해당합니다. 지금까지는 원내에서만 보던 것을 밖에서도
            찾아올 수 있게 만드는 일입니다. 다행히 개원과 달리 대부분 무료이고,
            빠르면 5분이면 끝납니다.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-2">
            <Pill tone="teal">대부분 무료</Pill>
            <Pill>명령어 없이도 가능</Pill>
            <Pill>https 자동 적용</Pill>
          </div>
        </Container>
      </section>

      <Section>
        <SectionLabel index="01">Routes</SectionLabel>
        <Heading>세 가지 경로</Heading>
        <Lead className="mt-6 max-w-2xl">
          어느 쪽이든 결과는 같습니다. 지금 손에 있는 것이 무엇이냐에 따라 고르면
          됩니다.
        </Lead>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {routes.map((route) => (
            <Card as="li" key={route.name} className="flex flex-col">
              <Pill tone="teal">{route.effort}</Pill>
              <h3 className="mt-5 text-lg font-bold">{route.name}</h3>
              <p className="mt-2 text-sm font-semibold text-muted">
                {route.who}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {route.body}
              </p>
              <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">감안할 점 </span>
                {route.caveat}
              </p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="soft">
        <SectionLabel index="02">Domain</SectionLabel>
        <Heading>내 주소 갖기</Heading>
        <Lead className="mt-6 max-w-2xl">
          기본으로 주어지는 주소는 길고 서비스 이름이 섞여 있습니다. 도메인을
          사서 연결하면 간판이 바뀝니다.
        </Lead>

        <ol className="mt-12 grid gap-4">
          {domainSteps.map((step, index) => (
            <Card as="li" key={step.title} className="sm:flex sm:gap-8">
              <span className="block text-2xl font-bold text-teal sm:w-16 sm:shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-3 sm:mt-0">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </div>
            </Card>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionLabel index="03">Subdomain</SectionLabel>
        <Heading>하나 사면 여러 개를 씁니다</Heading>
        <Lead className="mt-6 max-w-2xl">
          도메인을 하나 사두면 그 앞에 이름을 붙여 새 주소를 무제한으로 만들 수
          있습니다. 추가 비용이 들지 않습니다. 도구를 만들 때마다 새로 살 필요가
          없다는 뜻입니다.
        </Lead>

        <div className="mt-12 rounded-card border border-line bg-soft p-8 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            실제 사례
          </p>
          <p className="mt-4 leading-relaxed">
            HyperDoctor는 도메인 하나를 사두고 도구마다 앞에 이름을 붙여
            운영합니다. 지금 보고 계신 이 사이트도 그중 하나입니다.
          </p>
          <ul className="mt-6 grid gap-2 font-mono text-sm text-muted">
            <li>hyperdoctor.app — 본체</li>
            <li>finance.hyperdoctor.app — 개원 금융 플랜</li>
            <li>english.hyperdoctor.app — 의료 영어 연습</li>
            <li className="font-semibold text-teal-dark">
              coding.hyperdoctor.app — 지금 이 페이지
            </li>
          </ul>
        </div>
      </Section>

      <Section tone="soft">
        <SectionLabel index="04">After</SectionLabel>
        <Heading>올리고 나서 할 일</Heading>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold">휴대폰에서 직접 열어보기</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              PC에서 멀쩡하던 화면이 휴대폰에서 깨지는 일이 흔합니다. 주소를
              본인 휴대폰으로 보내 실제로 확인하세요. 직원 한 명에게 부탁해
              열어보게 하면 더 좋습니다.
            </p>
          </Card>

          <Callout kind="warn" title="공개 즉시 누구나 볼 수 있습니다">
            주소를 알려주지 않아도 검색으로 노출될 수 있습니다. 시험 삼아 넣어둔
            문구, 지어낸 정보, 정리되지 않은 내용이 남아 있지 않은지 반드시
            확인하세요.
          </Callout>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/safety/">의료인을 위한 주의사항 →</ButtonLink>
          <ButtonLink href="/glossary/" variant="secondary">
            모르는 용어가 나왔다면
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
