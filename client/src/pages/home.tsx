
import { Navigation } from "@/components/navigation";
import { NewHero } from "@/components/new-hero";
import { ProfileSection } from "@/components/profile-section";
import { About } from "@/components/about";
import { CareerHighlights } from "@/components/career-highlights";
import { Skills } from "@/components/skills";
import { CaseStudies } from "@/components/case-studies";
import { Writing } from "@/components/writing";
import { PersonalInterests } from "@/components/personal-interests";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio";
import { writingData } from "@/data/writing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <NewHero />
      
      <ProfileSection />
      
      <About 
        description={portfolioData.about.description}
        principles={portfolioData.about.principles}
      />
      
      <CareerHighlights 
        items={portfolioData.highlights.items}
      />
      
      <Skills 
        categories={portfolioData.skills.categories}
      />
      
      <CaseStudies 
        studies={portfolioData.caseStudies.studies}
      />
      
      <Writing
        title={writingData.title}
        description={writingData.description}
        substackUrl={writingData.substackUrl}
        featured={writingData.featured}
      />
      
      <section id="side-projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Side Projects</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Personal experiments in product, AI, and rapid prototyping
          </p>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Explore My Project Case Studies
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Dive into detailed case studies of my side projects, from AI-powered MVPs to rapid prototypes.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <PersonalInterests 
        items={portfolioData.interests.items}
      />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
