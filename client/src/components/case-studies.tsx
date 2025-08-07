import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface CaseStudy {
  title: string;
  description: string;
  achievements: string[];
  tags: string[];
}

interface CaseStudiesProps {
  studies: CaseStudy[];
}

export function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Case Studies</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Case study image */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={`/case-study-${index + 1}.png`}
                  alt={`${study.title} - Case Study Visual.`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to a generic image if specific case study image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = '/case-study-default.jpg';
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="space-y-2 mb-4">
                  {study.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-orange-500 mr-2 h-4 w-4" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-orange-500/10 text-orange-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
