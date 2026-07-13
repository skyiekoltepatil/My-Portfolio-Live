import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text().notNull(),
  message: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
