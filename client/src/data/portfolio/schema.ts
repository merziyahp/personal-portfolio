
import { z } from "zod";

export const principleSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const highlightItemSchema = z.object({
  value: z.string(),
  title: z.string(),
  description: z.string(),
});

export const skillCategorySchema = z.object({
  title: z.string(),
  skills: z.array(z.string()),
});

export const caseStudySchema = z.object({
  title: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
  tags: z.array(z.string()),
});

export const interestSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const portfolioDataSchema = z.object({
  hero: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
  }),
  about: z.object({
    description: z.string(),
    principles: z.array(principleSchema),
  }),
  highlights: z.object({
    items: z.array(highlightItemSchema),
  }),
  skills: z.object({
    categories: z.array(skillCategorySchema),
  }),
  caseStudies: z.object({
    studies: z.array(caseStudySchema),
  }),
  interests: z.object({
    items: z.array(interestSchema),
  }),
});

export type PortfolioData = z.infer<typeof portfolioDataSchema>;
export type Principle = z.infer<typeof principleSchema>;
export type HighlightItem = z.infer<typeof highlightItemSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type Interest = z.infer<typeof interestSchema>;
