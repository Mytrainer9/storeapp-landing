/**
 * StoreApp Landing — Cloudflare Worker
 *
 * Статик файлуудыг public/*-оос serve хийнэ.
 * Тэмдэглэлтэй API хүсэлтийг ai.storeapp.us VPS руу forward хийнэ.
 *
 * Forward endpoints:
 *   POST /api/register  → https://ai.storeapp.us/api/landing/register
 *   POST /api/contact   → https://ai.storeapp.us/api/landing/contact
 */

interface Env {
  ASSETS: Fetcher;
}

const VPS_BASE = "https://ai.storeapp.us";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API POST хүсэлтүүдийг VPS руу дамжуулна
    if (request.method === "POST") {
      if (url.pathname === "/api/register") {
        return forwardToVPS(request, `${VPS_BASE}/api/landing/register`);
      }
      if (url.pathname === "/api/contact") {
        return forwardToVPS(request, `${VPS_BASE}/api/landing/contact`);
      }
    }

    // Бусад бүх хүсэлт: public/ дотроос static файл serve хийнэ.
    const response = await env.ASSETS.fetch(request);

    // Cache strategy:
    // - HTML (no extension эсвэл .html): revalidate бүр request-д (ETag).
    //   Deploy хийсний дараа шинэ content шууд харагдана.
    // - Static assets (CSS/JS/JSON/img/font): browser-д 1 цаг cache.
    //   Repeated visits хурдан + bandwidth хэмнэгдэнэ. Deploy үед URL
    //   нь өөрчлөгддөггүй ч 1 цаг хүлээгдэх trade-off acceptable.
    const headers = new Headers(response.headers);
    headers.set("Cache-Control", cacheHeaderFor(url.pathname));
    return new Response(response.body, { status: response.status, headers });
  },
} satisfies ExportedHandler<Env>;

const ASSET_EXT_RE = /\.(css|js|json|png|jpg|jpeg|svg|webp|ico|gif|woff|woff2|ttf|eot)$/i;

function cacheHeaderFor(pathname: string): string {
  if (ASSET_EXT_RE.test(pathname)) {
    // Static assets — 1 hour browser + CDN cache, must-revalidate after expiry.
    return "public, max-age=3600, must-revalidate";
  }
  // HTML / unknown — always revalidate (cheap with ETag), CDN may briefly cache.
  return "public, max-age=0, must-revalidate";
}

async function forwardToVPS(request: Request, targetUrl: string): Promise<Response> {
  const body = await request.text();
  // Forward the real client IP so the backend's rate limiter / Turnstile verify
  // / morgan access logs see the upstream visitor instead of a Cloudflare
  // colocation address.
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) headers["CF-Connecting-IP"] = cfIp;
  const res = await fetch(targetUrl, { method: "POST", headers, body });
  const data = await res.text();
  return new Response(data, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
