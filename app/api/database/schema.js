import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const visitors = sqliteTable("visitors", {
  id: integer("id").primaryKey().notNull(),
  ip: text("ip").notNull(),
  userAgent: text("user_agent").notNull(),
  timestamp: text("timestamp").notNull(),
  duration: integer("duration").notNull(),
});
