
import { projectsDataSchema } from "./schema";
import { projectsContent } from "./content";

export const projectsData = projectsDataSchema.parse(projectsContent);

export type { ProjectsData, Project, MediaItem, ContentBlock } from "./schema";
