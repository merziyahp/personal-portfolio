
import { z } from "zod";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  isbn: z.string().optional(),
  description: z.string().optional(),
});

export const readingSectionSchema = z.object({
  title: z.string(),
  books: z.array(bookSchema),
});

export const readingDataSchema = z.array(readingSectionSchema);

export type Book = z.infer<typeof bookSchema>;
export type ReadingSection = z.infer<typeof readingSectionSchema>;
