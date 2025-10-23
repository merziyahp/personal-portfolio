
import { portfolioDataSchema } from "./schema";
import { portfolioContent } from "./content";

export const portfolioData = portfolioDataSchema.parse(portfolioContent);

export type { PortfolioData, Principle, HighlightItem, SkillCategory, CaseStudy, Interest } from "./schema";
