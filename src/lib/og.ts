// Builds 1200×630 share images at build time (no paid service, no server).
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';
import { THEMES, ICONS } from './themes';

const font = (p: string) => fs.readFileSync(path.resolve('node_modules/@fontsource', p));
const fonts = [
  { name: 'Serif', data: font('instrument-serif/files/instrument-serif-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'Serif', data: font('instrument-serif/files/instrument-serif-latin-400-italic.woff'), weight: 400 as const, style: 'italic' as const },
  { name: 'Sans', data: font('plus-jakarta-sans/files/plus-jakarta-sans-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
];

type N = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]): N => ({
  type, props: { style: { display: 'flex', ...style }, children: children.length === 1 ? children[0] : children },
});
const icon = (name: string, color: string, size: number) =>
  ({ type: 'img', props: { width: size, height: size, src: `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`)}` } });

const INK = '#25222F';
const PAPER = '#FAF6F0';

export async function shareImage(opts: { title: string; short?: string; theme?: number; kicker?: string }) {
  const th = opts.theme != null ? THEMES[opts.theme] : null;
  const tint = th ? th.light.tint : '#E6E4F0';
  const accent = th ? th.light.accent : '#4A55A8';
  const titleSize = opts.title.length > 48 ? 64 : 74;

  const tree = h('div', { width: 1200, height: 630, background: PAPER, position: 'relative', fontFamily: 'Sans', color: INK },
    h('div', { position: 'absolute', width: 900, height: 620, left: -260, top: -330, borderRadius: 9999, background: tint, opacity: 0.9, filter: 'blur(10px)' }),
    h('div', { position: 'absolute', width: 760, height: 560, right: -300, top: -300, borderRadius: 9999, background: tint, opacity: 0.55, filter: 'blur(10px)' }),
    h('div', { position: 'absolute', inset: 0, padding: '64px 80px', flexDirection: 'column', justifyContent: 'space-between' },
      h('div', { alignItems: 'center', gap: 14, fontSize: 22, letterSpacing: 3, color: accent, textTransform: 'uppercase' },
        th ? icon(th.icon, accent, 34) : icon('spark', accent, 34),
        opts.kicker ?? (th ? th.name : 'Everyday feelings'),
      ),
      h('div', { flexDirection: 'column', gap: 26 },
        h('div', { fontFamily: 'Serif', fontSize: titleSize, lineHeight: 1.04, letterSpacing: -1, maxWidth: 1000 }, opts.title),
        opts.short
          ? h('div', { borderLeft: `5px solid ${accent}`, paddingLeft: 26, fontFamily: 'Serif', fontStyle: 'italic', fontSize: 38, lineHeight: 1.25, color: '#4A4657', maxWidth: 960 }, opts.short)
          : h('div', {}, ''),
      ),
      h('div', { justifyContent: 'space-between', alignItems: 'center', fontSize: 22, color: '#6E6A7B' },
        h('div', { alignItems: 'center', gap: 12 }, h('div', { width: 12, height: 12, borderRadius: 99, background: '#4A55A8' }), 'Why Do I Feel This'),
        h('div', { fontFamily: 'Serif', fontStyle: 'italic', fontSize: 30, color: INK }, 'Oh, that’s why.'),
      ),
    ),
  );
  const svgOut = await satori(tree as never, { width: 1200, height: 630, fonts });
  return new Resvg(svgOut, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
