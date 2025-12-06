
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/data/projects";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-16 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {projectsData.title}
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {projectsData.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  {project.media && project.media.length > 0 && project.media[0].type === "image" && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                      <img 
                        src={project.media[0].url} 
                        alt={project.media[0].alt || project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-orange-100 text-sm">{project.tagline}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-orange-600 font-semibold">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
