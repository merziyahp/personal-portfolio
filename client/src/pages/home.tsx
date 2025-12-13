
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

      {/* ...rest of your sections exactly as you have them ... */}

      <Footer />
    </div>
  );
}
