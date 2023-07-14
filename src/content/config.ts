import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
})

const actor = defineCollection({
  schema: z.object({
    name: z.string(),
    age: z.number(),
    hobbies: z.array(z.string()),
    height: z.number().optional(),
    mbti: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
})

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    imageUrl1: z.string().optional(),
    imageUrl2: z.string().optional(),
    imageUrl3: z.string().optional(),
  }),
})

export const collections = { blog, actor, project }
