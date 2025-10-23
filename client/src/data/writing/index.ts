
import { writingDataSchema } from "./schema";
import { writingContent } from "./content";

export const writingData = writingDataSchema.parse(writingContent);

export type { WritingArticle, WritingData } from "./schema";
