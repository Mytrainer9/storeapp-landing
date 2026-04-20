# StoreApp Landing

[storeapp.us](https://storeapp.us) — StoreApp-ын маркетингийн хуудас.

## 🚨 ХАТУУ ДҮРЭМ — ҮРГЭЛЖ ДАГА

**`out/index.html` нь Next.js build-ийн output БИШ!** Энэ нь таны гарын custom HTML (root-ын `index.html`-ийн хуулбар). Тиймээс:

- ❌ **`npm run build`-ийг БҮҮ ажиллуул** — Next.js нь `out/index.html`-ыг violet theme-ээр дарж бичнэ
- ✅ Root-ын `index.html`-ыг засах → `cp index.html out/index.html` → `npx wrangler deploy`
- ✅ `src/app/*` болон `src/components/*` — өнөөдөр ашиглагдахгүй (Next.js өөр дизайнтай, тэр нь БҮҮ deploy)

2026-04-20-д энэ алдаа гарсан: `npm run build` run → out/index.html violet Next.js-ээр дарагдсан → deploy → жинхэнэ landing алга болсон. 2 цаг зарцуулж rollback хийсэн.

**Stack (одоогоор):** Vanilla HTML/CSS (inline) → Cloudflare Workers (Assets binding). Next.js project-д суурилсан боловч Next.js build ажиллуулдаггүй.

---

## 📋 Project бүтэц

```
src/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home — section components чуулах газар
│   ├── globals.css        # Tailwind + custom utilities (.text-gradient)
│   ├── login/             # /login/ хуудас
│   ├── register/          # /register/ хуудас
│   └── contact/           # /contact/ хуудас
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx           # Hero section (robot + tagline)
    ├── MarqueeStrip.tsx   # Гүйдэг текстийн зурвас
    ├── MeetSection.tsx    # 3 dadaалтат card (Telegram/FB/Viber...)
    ├── Dashboard.tsx      # Дашбоардын жишээ screenshot
    ├── Features.tsx       # 9 модулийн grid + CTA banner
    ├── HowItWorks.tsx     # 4 алхамт заавар
    ├── Testimonials.tsx   # Хэрэглэгчийн сэтгэгдэл
    ├── Pricing.tsx        # 1сар / 6сар / 1жил багц
    └── Footer.tsx

out/                       # Build output (`npm run build`-аас үүснэ, git tracked)
worker.ts                  # Cloudflare Worker — out/ assets serve хийдэг
wrangler.toml              # Cloudflare Workers тохиргоо
next.config.ts             # output:"export" → static HTML үүсгэх
```

---

## 🛠 Local хөгжүүлэлт

```bash
npm install
npm run dev
```

Дараа нь http://localhost:3000 нээнэ. Hot reload автомат.

---

## 🚀 Deploy — ХАТУУ дараалал

Cloudflare Workers-д оруулахын өмнө **ЗААВАЛ** шинэ build хийх хэрэгтэй. Энгийн `wrangler deploy` нь зөвхөн `out/` доторхи файлуудыг upload хийдэг — source code-ын өөрчлөлтийг автомат build хийхгүй.

### ✅ Зөв дараалал

```bash
# 1. Шинэ component/өөрчлөлтийг static HTML болгож build хий
npm run build

# 2. Cloudflare-д push хий
npx wrangler deploy
```

### ❌ Алдаатай дараалал

```bash
# Build-гүйгээр шууд deploy — шинэ өөрчлөлт Production-д гарахгүй
npx wrangler deploy   # `out/` хуучин хэвээрээ → "No updated asset files" warning
```

### Нэг мөрөөр

**Bash / Git Bash / WSL:**
```bash
npm run build && npx wrangler deploy
```

**PowerShell (Windows default):**
```powershell
npm run build; if ($?) { npx wrangler deploy }
```

`&&` нь Windows PowerShell v5-д ажиллахгүй — `The token '&&' is not a valid statement separator` алдаа өгнө. PowerShell 7+ (`pwsh`) дээр `&&` ажиллана. Эсвэл Git Bash терминал нээгээд Bash синтакс ашигла.

**Хамгийн энгийн — тусад нь хоёр команд:**
```powershell
npm run build
npx wrangler deploy
```
Build амжилтгүй бол алдааны лог гарна → deploy-г гараар бүү дахин ажиллуул, эхлээд build-ийг засаарай.

### "No updated asset files to upload" утга

Энэ warning нь **`out/` дотор шинэ файл байхгүй** гэсэн утгатай. Ихэвчлэн:
- `npm run build` ажиллуулаагүй байна
- Эсвэл шинэ component-ыг `page.tsx`-д import хийгээгүй (орхигдсон)

**Шалгах:**

```bash
# out/ ба source file-ын хугацаа харьцуулах
ls -la out/index.html
ls -la src/app/page.tsx

# Source илүү шинэ бол build хийгдээгүй — npm run build ажиллуул
```

---

## 🌐 Deploy URL-ууд

| Орчин | URL |
|---|---|
| Cloudflare Worker (default) | https://storeapp-landing.baljinnyam-s999.workers.dev |
| Production (custom domain) | https://storeapp.us |

Custom domain `storeapp.us`-г Cloudflare dashboard → Workers → Triggers → Custom Domain-аас Worker-т холбосон.

---

## 📝 Шинэ section нэмэх заавар

**1. Component үүсгэх** — `src/components/MySection.tsx`

```tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold">
          Гарчиг <span className="text-gradient">gradient хэсэг</span>
        </h2>
      </motion.div>
    </section>
  );
}
```

**2. `page.tsx`-д нэмэх:**

```tsx
import MySection from "@/components/MySection";

// <Hero /> <MarqueeStrip /> <MySection /> ...
```

**3. Local тест:** `npm run dev` → browser http://localhost:3000

**4. Build + deploy:** `npm run build && npx wrangler deploy`

---

## 🎨 Design систем

- **Үндсэн өнгө:** Violet (`violet-600` = `#7c3aed`, `violet-400` = `#a78bfa`)
- **Gradient utility:** `.text-gradient` (globals.css-д `from-violet-600 via-violet-400 to-fuchsia-400`)
- **Card pattern:** `rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg`
- **Анимэйшн:** framer-motion `{ opacity:0, y:24 } → { opacity:1, y:0 }`, `ease: [0.22, 1, 0.36, 1]`
- **Spacing:** section бүр `py-24 px-6`, container `max-w-5xl mx-auto` эсвэл `max-w-6xl`

---

## 🔗 Related project

- **ai-seller** (`c:/Users/baljk/Desktop/ai-seller`) — бодит SaaS систем, `ai.storeapp.us` дээр хостлогдсон
- Landing нь зөвхөн маркетингийн сайт — backend API, auth, dashboard бүгд ai-seller дээр
- `/login/`, `/register/` линк нь `ai.storeapp.us/seller/{login,register}.html`-руу дамжуулах ёстой

---

## 🐛 Асуудал шийдвэрлэх

**Build алдаа `Module not found`**

```bash
rm -rf .next out node_modules
npm install
npm run build
```

**Deploy-д "Your worker has no assets"**

`wrangler.toml`-д `[assets]` хэсэг зөв эсэхийг шалга. `directory = "./out"` байх ёстой. Бас `out/` фолдер бодитоор байгаа эсэхийг шалга (`npm run build` эхлээд).

**Custom domain-д өөрчлөлт харагдахгүй**

- Browser cache: `Ctrl+Shift+R` hard reload
- Cloudflare cache: Dashboard → Caching → Purge Everything
- Эсвэл URL-д `?v=1234` cache-bust query нэмж тест хий
