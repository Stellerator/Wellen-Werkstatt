/* Wellen-Werkstatt · Service Worker: macht die App offline nutzbar.
   Strategie: Netz zuerst (damit Updates sofort ankommen), bei Funkloch oder Zeitüberschreitung die gespeicherte Kopie.
   Der Lernstand liegt im localStorage und wird hier nie angefasst. */
const CACHE = "ww-cache-v1";
const CORE = ["./", "index.html", "version.js", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png"];
const key = u => { const x = new URL(u, self.location.href); return x.origin + x.pathname; };

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(p =>
    fetch(new Request(p, {cache: "reload"})).then(r => { if (r.ok) return c.put(key(p), r); }).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("ww-cache-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url); if (u.origin !== self.location.origin) return;
  /* Wer ausdrücklich frisch vom Server lesen will (Update-Prüfung, Knopf „Aktualisieren“), bekommt nie die gespeicherte Kopie. */
  if (r.mode !== "navigate" && (r.cache === "reload" || r.cache === "no-store")) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const k = key(r.url);
    const fromNet = fetch(r).then(res => { if (res && res.ok) cache.put(k, res.clone()); return res; });
    const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 4000));
    try { return await Promise.race([fromNet, timeout]); }
    catch (err) {
      const hit = await cache.match(k) || (r.mode === "navigate" ? await cache.match(key("index.html")) : null);
      if (hit) return hit;
      return fromNet.catch(() => new Response("", {status: 504}));
    }
  })());
});
