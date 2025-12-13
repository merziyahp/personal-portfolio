
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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="hero">
        <NewHero />
      </section>

      <section id="profile">
        <ProfileSection />
      </section>

      <section id="about">
        <About
          description={portfolioData.about.description}
          principles={portfolioData.about.principles}
        />
      </section>

      <section id="career-highlights">
        <CareerHighlights items={portfolioData.highlights.items} />
      </section>

      <section id="skills">
        <Skills categories={portfolioData.skills.categories} />
      </section>

      <section id="case-studies">
        <CaseStudies studies={portfolioData.caseStudies.studies} />
      </section>

      <section id="writing">
        <Writing
          title={writingData.title}
          description={writingData.description}
          substackUrl={writingData.substackUrl}
          featured={writingData.featured}
        />
      </section>
      
      <section id="side-projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Side Projects</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Personal experiments in product, AI, and rapid prototyping
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="personal-interests">
        <PersonalInterests items={portfolioData.interests.items} />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}
