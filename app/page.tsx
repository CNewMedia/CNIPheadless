const PUBLIC_FALLBACK = "PLAATS_HIER_JE_PUBLIC_TOKEN"; // 1x test

async function getHome() {
  const token = process.env.STORYBLOK_TOKEN || PUBLIC_FALLBACK;
  const url = `https://api.storyblok.com/v2/cdn/stories/home?token=${token}&version=draft`;
  const res = await fetch(url, { cache: "no-store" });
  return res.ok ? res.json() : {};
}
