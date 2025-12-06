import { projectsDataSchema } from "./schema";
import { projectsContent } from "./content";

// Log the raw content for debugging
console.log('Raw projects content:', JSON.stringify(projectsContent, null, 2));

const parsedData = projectsDataSchema.safeParse({
  title: projectsContent.title,
  description: projectsContent.description,
  projects: projectsContent.projects,
});

if (!parsedData.success) {
  console.error('Error parsing projects data:', parsedData.error);
  throw parsedData.error;
}

export const projectsData = parsedData.data;
console.log('Successfully parsed projects data');

export type { ProjectsData, Project, MediaItem, ContentBlock } from "./schema";