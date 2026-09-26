// brand/hypervibe-logo-3d.png(흰 배경 원본)에서 사이트용 로고 자산을 다시 만든다.
// 실행: node scripts/brand-assets.mjs
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const SOURCE = "brand/hypervibe-logo-3d.png";

/** 흰 배경을 알파로 바꾼다. 그림자는 반투명 회색으로 남는다. */
async function keyOutWhite(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const alpha = Math.min(1, ((255 - Math.min(r, g, b)) / 255) * 1.6);

    if (alpha < 0.03) {
      data[i + 3] = 0;
      continue;
    }

    const unmix = (c) =>
      Math.max(0, Math.min(255, Math.round((c - 255 * (1 - alpha)) / alpha)));
    data[i] = unmix(r);
    data[i + 1] = unmix(g);
    data[i + 2] = unmix(b);
    data[i + 3] = Math.round(alpha * 255);
  }

  return sharp(data, { raw: info }).png();
}

/** 여백을 잘라낸 뒤 정사각형 캔버스 중앙에 margin 비율만큼 띄워 배치한다. */
async function squareMark(keyed, size, margin, background) {
  const trimmed = await keyed.clone().trim({ threshold: 1 }).toBuffer();
  const inner = Math.round(size * (1 - margin * 2));
  const fitted = await sharp(trimmed)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: fitted, gravity: "center" }])
    .png();
}

/** PNG 한 장을 담은 ICO 파일. 최신 브라우저는 모두 PNG 내장 ICO를 읽는다. */
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(6 + 16, 12);

  return Buffer.concat([header, entry, png]);
}

function ogSvg() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#08263b"/>
      <stop offset="1" stop-color="#0b3b4a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.27" cy="0.5" r="0.45">
      <stop offset="0" stop-color="#5fe0c4" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#5fe0c4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g font-family="Malgun Gothic, Apple SD Gothic Neo, Noto Sans KR, sans-serif">
    <text x="600" y="232" fill="#9ff3e6" font-size="26" font-weight="700" letter-spacing="5">HYPERDOCTOR × VIBE CODING</text>
    <text x="596" y="330" fill="#ffffff" font-size="92" font-weight="800">HyperVibe</text>
    <text x="600" y="404" fill="#ffffff" fill-opacity="0.82" font-size="38" font-weight="700">의사를 위한 바이브 코딩 입문</text>
    <text x="600" y="462" fill="#ffffff" fill-opacity="0.55" font-size="26">coding.hyperdoctor.app</text>
  </g>
</svg>`;
}

async function main() {
  const keyed = await keyOutWhite(SOURCE);

  const mark = await (await squareMark(keyed, 512, 0.04)).toBuffer();
  await writeFile("public/brand/hypervibe-mark.png", mark);
  await writeFile("src/app/icon.png", mark);

  const apple = await (
    await squareMark(keyed, 180, 0.1, { r: 255, g: 255, b: 255, alpha: 1 })
  ).toBuffer();
  await writeFile("src/app/apple-icon.png", apple);

  const favicon = await sharp(mark).resize(48, 48).png().toBuffer();
  await writeFile("src/app/favicon.ico", pngToIco(favicon, 48));

  const ogMark = await sharp(mark).resize(420, 420).toBuffer();
  const og = await sharp(Buffer.from(ogSvg()))
    .composite([{ input: ogMark, left: 120, top: 105 }])
    .png()
    .toBuffer();
  await writeFile("src/app/opengraph-image.png", og);

  console.log("brand assets written");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
