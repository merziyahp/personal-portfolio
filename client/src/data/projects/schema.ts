
import { z } from "zod";

export const mediaItemSchema = z.object({
  type: z.enum(["image", "video", "link"]),
  url: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

export const contentBlockSchema = z.object({
  type: z.enum(["heading", "paragraph", "list", "quote"]),
  level: z.number().optional(), // For headings: 1, 2, 3
  content: z.string().or(z.array(z.string())), // String for text, array for lists
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  tagline: z.string(),
  tags: z.array(z.string()),
  date: z.string().optional(), // ISO date or readable format
  hero: mediaItemSchema.optional(), // Main image/video
  media: z.array(mediaItemSchema).max(3), // Additional images/videos
  content: z.array(contentBlockSchema),
  demoUrl: z.string().optional(),
  codeUrl: z.string().optional(),
});

export const projectsDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  projects: z.array(projectSchema),
});

export type ProjectsData = z.infer<typeof projectsDataSchema>;
export type Project = z.infer<typeof projectSchema>;
export type MediaItem = z.infer<typeof mediaItemSchema>;
export type ContentBlock = z.infer<typeof contentBlockSchema>;
