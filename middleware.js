export function middleware(req) {
  const ua = req.headers.get("user-agent") || "";
  const isTikTok = ua.includes("TikTok") || ua.includes("com.ss.android.ugc");

  if (!isTikTok) {
    return Response.redirect("https://t.me/+yOEXTSd298c3NTM0", 302);
  }

  return; // laisser TikTok charger la page
}

