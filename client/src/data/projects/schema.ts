
import { z } from "zod";

export const mediaItemSchema = z.object({
  type: z.enum(["image", "video"]),
  url: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

export const contentBlockSchema = z.object({
  type: z.enum(["heading", "paragraph", "list", "quote", "image"]),
  level: z.number().optional(),
  content: z.union([z.string(), z.array(z.string())]).optional(),
  url: z.string().optional(),
  alt: z.string().optional(),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  tagline: z.string(),
  tags: z.array(z.string()),
  media: z.array(mediaItemSchema).optional(),
  content: z.array(contentBlockSchema),
  demoUrl: z.string().optional(),
  codeUrl: z.string().optional(),
});

export const projectsDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  projects: z.array(projectSchema),
});

export type MediaItem = z.infer<typeof mediaItemSchema>;
export type ContentBlock = z.infer<typeof contentBlockSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectsData = z.infer<typeof projectsDataSchema>;
