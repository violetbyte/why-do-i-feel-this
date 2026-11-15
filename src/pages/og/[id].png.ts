import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { shareImage } from '../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const all = await getCollection('feelings');
  return [
    ...all.map((e) => ({ params: { id: e.id }, props: { title: e.data.title, short: e.data.short, theme: e.data.theme } })),
    { params: { id: 'home' }, props: { title: 'Oh, that’s why.', short: 'Plain, gentle explanations for the everyday feelings that are hard to name.' } },
    { params: { id: 'find' }, props: { title: 'Can’t name what you feel?', short: 'Answer two gentle questions and find the explanation that fits.', theme: 1, kicker: 'Find a feeling' } },
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const png = await shareImage(props as { title: string; short?: string; theme?: number; kicker?: string });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
