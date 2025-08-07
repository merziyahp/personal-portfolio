// This file contains the portfolio data structure for reference
// The actual data is managed through the storage interface

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

// Default portfolio data structure for reference
export const portfolioSchema: PortfolioData = {
  hero: {
    name: "Merziyah Poonawala",
    title: "Principal Product Manager",
    bio: "10+ years of independently owning and delivering product initiatives across healthcare, fintech, and marketplaces."
  },
  about: {
    description: "I'm a product manager who thrives on untangling complex problems...",
    principles: [
      {
        title: "Get clear on the why",
        description: "Every project starts with understanding the problem we're solving and its business impact."
      }
    ]
  },
  highlights: {
    items: [
      {
        value: "$85M",
        title: "Funding Secured",
        description: "Enabled startups to secure funding through user insights"
      }
    ]
  },
  skills: {
    categories: [
      {
        title: "Product Management",
        skills: ["Cross-functional Leadership", "Product Vision & Strategy"]
      }
    ]
  },
  caseStudies: {
    studies: [
      {
        title: "GameChanger: Building a Web Platform",
        description: "Led development of a web platform for youth sports management",
        achievements: ["Web app usage doubled within the first year"],
        tags: ["User Research", "Cross-functional Leadership"]
      }
    ]
  },
  interests: {
    items: [
      {
        title: "Reading",
        description: "Currently exploring AI fundamentals and business strategy books",
        icon: "book"
      }
    ]
  }
};
