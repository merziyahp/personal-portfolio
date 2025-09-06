import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      
      // Send email notification
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'merziyahpoonawala@gmail.com',
          subject: `New Portfolio Contact: ${contactData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email sending fails
      }
            
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
const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const resumePath = path.join(__dirname, "../client/public/Merziyah Poonawala - Resume.pdf");
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Merziyah-Poonawala-Resume.pdf"');
    
    // Send the file
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error('Error sending resume file:', err);
        res.status(404).json({ 
          error: "Resume file not found", 
          message: "Please upload resume.pdf to the client/public folder" 
        });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
