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

    // Edge cache бат тогтохгүйн тулд no-store header нэмнэ.
    // Ингэснээр deploy хийсний дараа шинэ content шууд харагдана.
    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "no-store, must-revalidate");
    headers.set("CDN-Cache-Control", "no-store");
    return new Response(response.body, { status: response.status, headers });
  },
} satisfies ExportedHandler<Env>;

async function forwardToVPS(request: Request, targetUrl: string): Promise<Response> {
  const body = await request.text();
  const res = await fetch(targetUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
  const data = await res.text();
  return new Response(data, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
