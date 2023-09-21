import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		thumbnail: z.string(),
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		categories: z.array(z.string()),
		project_bg_color: z.string(),
		project_fg_color: z.string(),
		heroImage: z.string().optional(),

	}),
});

export const collections = { projects };
