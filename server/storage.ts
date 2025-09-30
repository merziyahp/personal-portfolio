import { type Contact, type InsertContact, type PortfolioContent, type InsertPortfolioContent } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Portfolio content methods
  getPortfolioContent(section: string): Promise<PortfolioContent | undefined>;
  updatePortfolioContent(section: string, content: any): Promise<PortfolioContent>;
  getAllPortfolioContent(): Promise<PortfolioContent[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private portfolioContent: Map<string, PortfolioContent>;

  constructor() {
    this.contacts = new Map();
    this.portfolioContent = new Map();
    this.initializePortfolioContent();
  }

  private initializePortfolioContent() {
    // Initialize with default portfolio data
    const defaultContent = [
      {
        section: "hero",
        content: {
          name: "Merziyah Poonawala",
          title: "Senior Product Manager",
          bio: "10+ years of independently owning and delivering product initiatives across healthcare, fintech, and marketplaces. Experienced in transforming ambiguity into execution and operating in 0-to-1 solution spaces."
        }
      },
      {
        section: "about",
        content: {
          description: "I'm a product manager who thrives on untangling complex problems, finding clarity in ambiguity, and translating user insights into impactful products. With a focus on 0-1 product development, I have advised founders on the right user segments and the right problem, and delivered 6+ MVPs to validate product-market fit. I enjoy working with startups and growing teams, mapping complex user journeys, and connecting the dots between business and tech to get products to market. I care about outcomes and am not afraid to get in the weeds to make it happen.",
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
        }
      },
      {
        section: "highlights",
        content: {
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
        }
      },
      {
        section: "skills",
        content: {
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
        }
      },
      {
        section: "case-studies",
        content: {
          studies: [
            {
              title: "GameChanger: Building a Web Platform for Youth Sports",
              description: "Led development of a web platform for youth sports management, delivering the first version in 3 months during critical Spring recruitment season.",
              achievements: [
                "Web app usage doubled within the first year",
                "Support tickets reduced by 30%",
                "Foundation for video streaming capabilities"
              ],
              tags: ["User Research", "Cross-functional Leadership", "Agile Development"]
            },
            {
              title: "Vault Beauty: Beauty Professional Marketplace",
              description: "Designed and built the first version of a native iOS app connecting clients with trusted beauty professionals in a two-sided marketplace.",
              achievements: [
                "500+ sign-ups in initial launch phase",
                "2x-ed revenue per use by successfully pivoting to a professional market segment",
                "Defined activation and engagement KPIs for the product post-launch"
              ],
              tags: ["Market Research", "MVP Development", "Two-sided Marketplace"]
            }
          ]
        }
      },
      {
        section: "interests",
        content: {
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
      }
    ];

    defaultContent.forEach(item => {
      const content: PortfolioContent = {
        id: randomUUID(),
        section: item.section,
        content: item.content,
        updatedAt: new Date().toISOString()
      };
      this.portfolioContent.set(item.section, content);
    });
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getPortfolioContent(section: string): Promise<PortfolioContent | undefined> {
    return this.portfolioContent.get(section);
  }

  async updatePortfolioContent(section: string, content: any): Promise<PortfolioContent> {
    const existing = this.portfolioContent.get(section);
    const portfolioContent: PortfolioContent = {
      id: existing?.id || randomUUID(),
      section,
      content,
      updatedAt: new Date().toISOString()
    };
    this.portfolioContent.set(section, portfolioContent);
    return portfolioContent;
  }

  async getAllPortfolioContent(): Promise<PortfolioContent[]> {
    return Array.from(this.portfolioContent.values());
  }
}

export const storage = new MemStorage();
