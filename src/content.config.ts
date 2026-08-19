import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const titleSchema = z.string().max(60);

const baseSchema = z.object({
	title: titleSchema,
});

const post = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/posts" }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			pinned: z.boolean().default(false),
		}),
});

const project = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./content/projects" }),
	schema: baseSchema.extend({
		tech: z.array(z.string()).default([]),
		sourceUrl: z.string().url().optional(),
		order: z.number().default(0),
		draft: z.boolean().default(false),
	}),
});

const tag = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./content/tags" }),
	schema: z.object({
		title: titleSchema.optional(),
		description: z.string().optional(),
	}),
});

export const collections = { post, project, tag };
