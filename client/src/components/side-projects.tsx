import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project, ContentBlock, MediaItem } from "@/data/projects";

interface SideProjectsProps {
  title: string;
  description: string;
  projects: Project[];
}

function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        1: "text-3xl font-bold mt-8 mb-4",
        2: "text-2xl font-bold mt-6 mb-3",
        3: "text-xl font-semibold mt-4 mb-2",
      };
      return (
        <HeadingTag key={index} className={headingClasses[block.level as 1 | 2 | 3] || headingClasses[2]}>
          {block.content as string}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {block.content as string}
        </p>
      );

    case "list":
      return (
        <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-gray-700">
          {(block.content as string[]).map((item, i) => (
            <li key={i} className="ml-4">{item}</li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote key={index} className="border-l-4 border-orange-500 pl-4 py-2 mb-4 italic text-gray-600 bg-orange-50/30">
          {block.content as string}
        </blockquote>
      );

    default:
      return null;
  }
}

function renderMedia(media: MediaItem, index: number) {
  if (media.type === "image") {
    return (
      <div key={index} className="mb-4">
        <img 
          src={media.url} 
          alt={media.alt || "Project image"} 
          className="w-full rounded-lg shadow-md"
        />
        {media.caption && (
          <p className="text-sm text-gray-500 mt-2 text-center italic">{media.caption}</p>
        )}
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div key={index} className="mb-4">
        <video 
          src={media.url} 
          controls 
          className="w-full rounded-lg shadow-md"
        >
          Your browser does not support the video tag.
        </video>
        {media.caption && (
          <p className="text-sm text-gray-500 mt-2 text-center italic">{media.caption}</p>
        )}
      </div>
    );
  }

  return null;
}

export function SideProjects({ title, description, projects }: SideProjectsProps) {
  return (
    <section id="side-projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{description}</p>

        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-orange-100 mb-3">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Media Gallery */}
                  {project.media && project.media.length > 0 && (
                    <div className={`grid gap-4 mb-6 ${
                      project.media.length === 1 ? 'grid-cols-1' : 
                      project.media.length === 2 ? 'grid-cols-2' : 
                      'grid-cols-3'
                    }`}>
                      {project.media.map((media, index) => renderMedia(media, index))}
                    </div>
                  )}

                  {/* Content Blocks */}
                  <div className="prose prose-lg max-w-none">
                    {project.content.map((block, index) => renderContentBlock(block, index))}
                  </div>

                  {/* Action Buttons */}
                  {(project.demoUrl || project.codeUrl) && (
                    <div className="flex gap-4 mt-8 pt-6 border-t">
                      {project.demoUrl && (
                        <Button asChild variant="default" className="bg-orange-500 hover:bg-orange-600">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Demo
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button asChild variant="outline">
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}