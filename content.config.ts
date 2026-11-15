import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const WHEN = ['people', 'quiet', 'comparing', 'work', 'endings', 'nowhere'] as const;
const FEEL = ['heavy', 'restless', 'empty', 'stung', 'longing', 'tense'] as const;

const feelings = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/feelings' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    theme: z.number().int().min(0).max(5),
    order: z.number(),
    reframe: z.string(),
    helps: z.array(z.string()).min(1),
    related: z.array(z.string()),
    when: z.array(z.enum(WHEN)).min(1),
    feel: z.array(z.enum(FEEL)).min(1),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { feelings };
