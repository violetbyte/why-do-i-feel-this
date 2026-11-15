// Offline support. Generated at build time so every page is listed and old caches are cleared.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const pages = ['/', '/find/', ...(await getCollection('feelings')).map((e) => `/e/${e.id}/`)];
  const version = `wdft-${Date.now()}`;
  const js = `const C=${JSON.stringify(version)};const PAGES=${JSON.stringify(pages)};
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(PAGES)).catch(()=>{}));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin)return;
if(r.mode==="navigate"){e.respondWith(fetch(r).then(res=>{const k=res.clone();caches.open(C).then(c=>c.put(r,k));return res}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match("/"))));return}
e.respondWith(caches.match(r).then(m=>{const net=fetch(r).then(res=>{if(res.ok){const k=res.clone();caches.open(C).then(c=>c.put(r,k))}return res}).catch(()=>m);return m||net}))});`;
  return new Response(js, { headers: { 'Content-Type': 'text/javascript' } });
};
