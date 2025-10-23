
// Portfolio data structure and content
export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    bio: string;
  };
  about: {
    description: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
  highlights: {
    items: Array<{
      value: string;
      title: string;
      description: string;
    }>;
  };
  skills: {
    categories: Array<{
      title: string;
      skills: string[];
    }>;
  };
  caseStudies: {
    studies: Array<{
      title: string;
      description: string;
      achievements: string[];
      tags: string[];
    }>;
  };
  interests: {
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

// Actual portfolio content
export const portfolioData: PortfolioData = {
  hero: {
    name: "Merziyah Poonawala",
    title: "Senior Product Manager",
    bio: "10+ years of independently owning and delivering product initiatives across healthcare, fintech, and marketplaces. Experienced in transforming ambiguity into execution and operating in 0-to-1 solution spaces."
  },
  about: {
    description: "Merziyah is a 0-1 product manager who thrives on untangling complex problems, finding clarity in ambiguity, and translating user insights into impactful products. Partnering with business leaders and technical teams she has led early-stage and mid sized companies hone in on key user problems, define lean roadmaps, and excuted on those roadmaps to deliver 6+ MVPs in tight timelines across healthcare, government, youth sports, and marketplaces. \n\nShe is particularly passionate about working with startups and growing teams to map complex user journeys, define lean solutions, and bridge business and tech teams to get products to market. She cares about outcomes and is not afraid to get in the weeds to make it happen.",
    principles: [
      {
        title: "Get clear on the why",
        description: "Every project starts with understanding the problem we're solving, who we are solving it for, and its business impact."
      },
      {
        title: "Validate the problem and the user",
        description: "I prioritize research to ensure we're solving the right problem for the right audience."
      },
      {
        title: "Build lean and ship early",
        description: "Incremental releases drive user feedback and product refinement."
      },
      {
        title: "Be kind. Be transparent. Communicate",
        description: "Collaboration is key; I foster trust and teamwork through empathy and clarity on team goals."
      }
    ]
  },
  highlights: {
    items: [
      {
        value: "$85M",
        title: "Funding Secured",
        description: "Enabled $85M in funding for startups through user insights and strategic product decisions"
      },
      {
        value: "6+",
        title: "MVPs Launched",
        description: "Delivered MVPs within 3-6 month timeframes for apps with TAM of $12M-$600M/year"
      },
      {
        value: "10+",
        title: "Teams Mentored",
        description: "Guided product teams in agile execution, user research, and roadmap strategy"
      }
    ]
  },
  skills: {
    categories: [
      {
        title: "Product Management",
        skills: [
          "Cross-functional Leadership",
          "Product Vision & Strategy",
          "Product Discovery",
          "Strategic Roadmaps",
          "Stakeholder Management",
          "Agile Methodologies",
          "User Research & Testing",
          "Customer Journey Mapping",
          "Data Analysis"
        ]
      },
      {
        title: "Technologies & Tools",
        skills: [
          "Jira",
          "Looker",
          "Miro",
          "Figma",
          "Google Analytics",
          "HubSpot",
          "Python",
          "SQL"
        ]
      }
    ]
  },
  caseStudies: {
    studies: [
      {
        title: "GameChanger: Solving user churn by prioritizing key user pain points",
        description: "Led web platform development for a mobile-first youth sports management app, with a sharp focus on solving mobile pain points of data entry while ensuring a seamless experience between web and mobile apps.",
        achievements: [
          "Web app usage doubled within the first year",
          "Support tickets reduced by 30%",
          "Laid the foundation for video streaming capabilities for paying customers"
        ],
        tags: ["User Research", "Cross-functional Leadership", "Agile Development"]
      },
      {
        title: "VaultBeauty: A marketplace for beautician services",
        description: "Defined the roadmap and delivered the first version of a native iOS app connecting clients with trusted beauty professionals in a two-sided marketplace.",
        achievements: [
          "500+ sign-ups in initial launch phase",
          "2x-ed revenue per user by successfully pivoting to an upmarket segment",
          "Defined activation and engagement KPIs for the product post-launch"
        ],
        tags: ["Market Research", "MVP Development", "Two-sided Marketplace"]
      },
      {
        title: "TwentyEight Health: A telehealth platform making healthcare accessible for women",
        description: "Through lean prioritization, delivered MVP in 3 months, incorporating patient onboarding, payment, and scheduling, to improve patient outcomes.",
        achievements: [
          "Secured $10M+ in funding",
          "Developed a minimum viable product (MVP) that validated the market need",
          "Strong project management, engineering collaboration, and stakeholder communication to ensure on-time delivery"
        ],
        tags: ["Lean Prioritization", "Market Validation", "Healthcare"]
      }
    ]
  },
  interests: {
    items: [
      {
        title: "Reading",
        description: "Fictional and Non-Fictional reads on the shelf",
        icon: "book"
      },
      {
        title: "Adventures",
        description: "Recent adventures on New Jersey's beautiful trail systems",
        icon: "mountain"
      },
      {
        title: "Side Projects",
        description: "Passion projects to strengthen PM prowess and experiment with AI tools",
        icon: "dumbbell"
      },
      {
        title: "Learning",
        description: "Recently completed AI and prompt engineering certifications",
        icon: "graduation-cap"
      }
    ]
  }
};
