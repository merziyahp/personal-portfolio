
import { z } from "zod";

export const writingArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.string(),
  url: z.string(),
  tags: z.array(z.string()),
  readTime: z.string(),
});

export const writingDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  substackUrl: z.string(),
  featured: z.array(writingArticleSchema),
});

export type WritingArticle = z.infer<typeof writingArticleSchema>;
export type WritingData = z.infer<typeof writingDataSchema>;
