import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Get portfolio content by section
  app.get("/api/portfolio/:section", async (req, res) => {
    try {
      const { section } = req.params;
      const content = await storage.getPortfolioContent(section);
      if (!content) {
        res.status(404).json({ error: "Section not found" });
        return;
      }
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio content" });
    }
  });

  // Get all portfolio content
  app.get("/api/portfolio", async (req, res) => {
    try {
      const content = await storage.getAllPortfolioContent();
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio content" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
      try {
      const resumePath = path.join(__dirname, "../attached_assets/Merziyah Poonawala - Resume_1753731715293.pdf");
      res.download(resumePath, "Merziyah_Poonawala_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(404).json({ error: "Resume file not found" });
        }
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
