import { sql } from "drizzle-orm";
import { pgTable, text, varchar, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").default(sql`now()`),
});

export const portfolioContent = pgTable("portfolio_content", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  section: text("section").notNull(),
  content: json("content").notNull(),
  updatedAt: text("updated_at").default(sql`now()`),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  message: true,
});

export const insertPortfolioContentSchema = createInsertSchema(portfolioContent).pick({
  section: true,
  content: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertPortfolioContent = z.infer<typeof insertPortfolioContentSchema>;
export type PortfolioContent = typeof portfolioContent.$inferSelect;
