import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/navigation";
import { NewHero } from "@/components/new-hero";
import { Introduction } from "@/components/introduction";
import { ProfileSection } from "@/components/profile-section";
import { About } from "@/components/about";
import { CareerHighlights } from "@/components/career-highlights";
import { Skills } from "@/components/skills";
import { CaseStudies } from "@/components/case-studies";
import { PersonalInterests } from "@/components/personal-interests";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const { data: portfolioData, isLoading, error } = useQuery({
    queryKey: ['/api/portfolio'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading portfolio content</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Extract content by section
  const getContentBySection = (section: string) => {
    if (!portfolioData || !Array.isArray(portfolioData)) return {};
    const item = portfolioData.find((item: any) => item.section === section);
    return item?.content || {};
  };

  const heroContent = getContentBySection('hero');
  const aboutContent = getContentBySection('about');
  const highlightsContent = getContentBySection('highlights');
  const skillsContent = getContentBySection('skills');
  const caseStudiesContent = getContentBySection('case-studies');
  const interestsContent = getContentBySection('interests');

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <NewHero />
      
      <ProfileSection />

      <Introduction
        principles={aboutContent.principles || []}
      />
      
      <CareerHighlights 
        items={highlightsContent.items || []}
      />
      
      <Skills 
        categories={skillsContent.categories || []}
      />
      
      <CaseStudies 
        studies={caseStudiesContent.studies || []}
      />
      
      <PersonalInterests 
        items={interestsContent.items || []}
      />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
