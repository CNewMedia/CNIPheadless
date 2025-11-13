export default async function Debug() {
  const t = process.env.STORYBLOK_TOKEN;
  if (!t) return <pre>No STORYBLOK_TOKEN</pre>;
  const u = `https://api.storyblok.com/v2/cdn/stories/home?token=${t}&version=draft`;
  const r = await fetch(u, { cache: "no-store" });
  const s = await r.text();
  return <pre style={{whiteSpace:"pre-wrap"}}>{r.status} {r.ok ? "OK" : "ERR"}{`\n`}{s.slice(0,400)}</pre>;
}
