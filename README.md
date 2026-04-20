# StoreApp Landing

**URL:** [storeapp.us](https://storeapp.us)
**Stack:** Vanilla HTML/CSS/JS + Cloudflare Workers (Assets binding) — Next.js байхгүй, build step байхгүй.

---

## 📁 Repo бүтэц (5 файл бүрэн)

```
storeapp-landing/
├── public/           ← Landing-ийн бүх файл энд (index.html, styles.css, зураг г.м.)
│   └── index.html   ← (таны шинэ дизайн энд оруулна)
├── worker.ts         ← Cloudflare Worker — public/ serve + /api/* forward
├── wrangler.toml     ← Cloudflare Workers config
├── tsconfig.json     ← TypeScript config (worker.ts-ыг зориулж)
├── package.json      ← npm scripts + wrangler dep
└── README.md         ← энэ файл
```

Бусад өөр файл **НЭГЭЭХЭН ч байх ёсгүй.** Энэ бол санамсаргүй `npm run build`-аас сэргийлэх хамгийн энгийн бүтэц.

---

## 🎨 Шинэ landing page нэмэх

### Алхам 1 — Таны HTML-ийг public/ дотор оруулна

```
public/
├── index.html       ← гол landing файл (нэр заавал index.html)
├── styles.css       ← (хэрэв гаднаас холбосон CSS хэрэглэж байвал)
├── robot.png        ← (хэрэв зураг хэрэглэж байвал)
└── favicon.ico      ← (хэрэв favicon-тай бол)
```

HTML дотор resource-ууд `/styles.css`, `/robot.png` гэх мэт **root path** (`/`)-аар заагдсан байх ёстой. Бас inline style-г ашиглах бүрэн боломжтой — CSP restriction байхгүй.

### Алхам 2 — Deploy хийх

```bash
npx wrangler deploy
```

10 секундэд live. Ямар ч `npm run build` хэрэггүй — wrangler нь public/-ийг шууд upload хийнэ.

---

## 🔒 Cache цэвэрлэх

Worker автомат `Cache-Control: no-store` илгээдэг тул **Cloudflare edge cache асуудал гарахгүй**. Deploy хийсний 5-30 секундэд шинэ content харагдана.

Хэрэв browser hard refresh шаардлагатай бол: `Ctrl + Shift + R`

---

## 📡 API хүсэлтүүд (VPS руу forward хийдэг)

Worker нь POST хүсэлтүүдийг `ai.storeapp.us`-руу CORS-гүйгээр forward хийнэ:

| URL | Forward target |
|---|---|
| `POST /api/register` | `https://ai.storeapp.us/api/landing/register` |
| `POST /api/contact`  | `https://ai.storeapp.us/api/landing/contact` |

Landing HTML-ийн form `<form action="/api/register" method="POST">` энгийн POST хийхэд бүрэн ажиллана.

---

## 🚀 Local dev

Cloudflare Worker-ыг local-д ажиллуулах:

```bash
npm install
npm run dev          # http://localhost:8787
```

Wrangler dev mode нь public/-тэй тэр даруй auto-reload ажиллана.

---

## 🛑 ХЭЗЭЭ Ч БҮҮ

- ❌ `npm run build` — build step байхгүй, энэ script байхгүй
- ❌ Next.js, React, framer-motion суулгах
- ❌ `src/`, `out/` фолдер үүсгэх
- ❌ `index.html` root-д хадгалах — заавал `public/` дотор
- ❌ `worker.ts`-ыг засах — статик файлуудыг `public/`-д бичиж болно, worker кодыг бол зөвхөн API endpoint нэмэхэд гар хүрнэ

---

## 🌍 Production URL-ууд

| Orchin | URL |
|---|---|
| Primary | https://storeapp.us |
| Workers default | https://storeapp-landing.baljinnyam-s999.workers.dev |

Custom domain `storeapp.us` нь Cloudflare Dashboard → Workers → storeapp-landing → Triggers → Custom Domain дотор тохируулагдсан.

---

## 🐛 Асуудал шийдвэрлэх

**"wrangler: command not found"** — `npm install` ажиллуулаагүй.

**"No updated asset files to upload"** — public/ дотор өөрчлөлт байхгүй. `public/index.html`-ыг засаад дахин `npx wrangler deploy`.

**Шинэ content харагдахгүй** — Worker нь `no-store` header тавьдаг тул edge cache асуудал биш. Browser-аа hard refresh (`Ctrl+Shift+R`).

**Deploy алдаа "Not authenticated"** — `npx wrangler login` ажиллуулж Cloudflare аккаунтаа холбох.
