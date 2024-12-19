import { defineCollection, z } from 'astro:content';

const casas = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        description: z.string(),
    })
})

export const collections = { casas }