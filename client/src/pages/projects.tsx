
import { SideProjects } from "@/components/side-projects";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return <SideProjects 
    title={projectsData.title}
    description={projectsData.description}
    projects={projectsData.projects}
  />;
}
