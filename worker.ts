interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Forward registration to VPS
    if (url.pathname === "/api/register" && request.method === "POST") {
      return forwardToVPS(request, "https://ai.storeapp.us/api/landing/register");
    }

    // Forward contact form to VPS
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return forwardToVPS(request, "https://ai.storeapp.us/api/landing/contact");
    }

    // Serve static assets (index.html — user's custom landing)
    return env.ASSETS.fetch(request);
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
