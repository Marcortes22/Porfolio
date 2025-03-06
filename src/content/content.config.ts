import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string(),
    teclogies: z.array(z.string()),
  }),
});

export { projects };
