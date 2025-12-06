
import { Navigation } from "@/components/navigation";
import { NewHero } from "@/components/new-hero";
import { ProfileSection } from "@/components/profile-section";
import { About } from "@/components/about";
import { CareerHighlights } from "@/components/career-highlights";
import { Skills } from "@/components/skills";
import { CaseStudies } from "@/components/case-studies";
import { Writing } from "@/components/writing";
import { SideProjects } from "@/components/side-projects";
import { PersonalInterests } from "@/components/personal-interests";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio";
import { writingData } from "@/data/writing";
import { projectsData } from "@/data/projects";

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
      
      <SideProjects
        title={projectsData.title}
        description={projectsData.description}
        projects={projectsData.projects}
      />
      
      <PersonalInterests 
        items={portfolioData.interests.items}
      />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
