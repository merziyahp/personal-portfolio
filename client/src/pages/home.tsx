
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
import { initSectionViewTracking } from "../analytics/sectionTracking";
import { useEffect } from "react";

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  useEffect(() => {
    const ids = [
      "hero",
      "profile",
      "about",
      "career-highlights",
      "skills",
      "case-studies",
      "writing",
      "side-projects",
      "personal-interests",
      "contact",
    ];

    let cleanup: void | (() => void);

    const t = window.setTimeout(() => {
      cleanup = initSectionViewTracking(ids);
    }, 0);

    return () => {
      window.clearTimeout(t);
      if (cleanup) cleanup();
    };
  }, []);

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
@@ -66,12 +74,14 @@ export default function Home() {
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
