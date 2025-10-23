
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
import { portfolioData } from "@/data/portfolio-data";

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
        title="My Writing"
        description="Thoughts on product management, leadership, and building great products."
        substackUrl="https://substack.com/@merziyahpoonawala"
        featured={[
          {
            title: "I Hadn't Coded In a Decade. Then I Built an Agent",
            description: "How curiosity and ChatGPT got me through HuggingFace's AI Agent Course",
            publishedAt: "2025-08-19",
            url: "https://open.substack.com/pub/merziyahpoonawala/p/i-hadnt-coded-in-a-decade-then-i?r=5iuj7j&utm_campaign=post&utm_medium=web",
            tags: ["Product Management", "VibeCoding", "Playing with AI"],
            readTime: "5 min",
          }
        ]}
      />
      
      <PersonalInterests 
        items={portfolioData.interests.items}
      />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
