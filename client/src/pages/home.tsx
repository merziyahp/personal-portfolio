import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/navigation";
import { NewHero } from "@/components/new-hero";
import { Introduction } from "@/components/introduction";
import { ProfileSection } from "@/components/profile-section";
import { About } from "@/components/about";
import { CareerHighlights } from "@/components/career-highlights";
import { Skills } from "@/components/skills";
import { CaseStudies } from "@/components/case-studies";
import { Writing } from "@/components/writing";
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
      
      <Introduction />
      
      <ProfileSection />
      
      <About 
        description={aboutContent.description || ""}
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
      
      <Writing
        title="My Writing"
        description="Thoughts on product management, leadership, and building great products."
        substackUrl="https://yoursubstack.substack.com"
        featured={[
          {
            title: "Building Products in Uncertain Times",
            description: "How to navigate ambiguity and make decisive product decisions when the path isn't clear.",
            publishedAt: "2024-01-15",
            readTime: "5 min read",
            url: "https://yoursubstack.substack.com/p/building-products-uncertain-times",
            tags: ["Product Management", "Strategy", "Leadership"]
          },
          {
            title: "The MVP Mindset: Ship Early, Learn Fast",
            description: "Why launching imperfect products leads to better outcomes than waiting for perfection.",
            publishedAt: "2024-01-08",
            readTime: "4 min read",
            url: "https://yoursubstack.substack.com/p/mvp-mindset-ship-early",
            tags: ["MVP", "Product Development", "User Research"]
          },
          {
            title: "Cross-functional Leadership Without Authority",
            description: "Practical strategies for leading teams and driving outcomes when you don't manage everyone.",
            publishedAt: "2024-01-01",
            readTime: "6 min read",
            url: "https://yoursubstack.substack.com/p/cross-functional-leadership",
            tags: ["Leadership", "Team Management", "Product Management"]
          }
        ]}
      />
      
      <PersonalInterests 
        items={interestsContent.items || []}
      />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
