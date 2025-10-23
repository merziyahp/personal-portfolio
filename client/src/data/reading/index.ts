
import { readingDataSchema } from "./schema";
import { readingContent } from "./content";

export const readingData = readingDataSchema.parse(readingContent);

export type { Book, ReadingSection } from "./schema";
