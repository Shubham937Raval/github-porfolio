import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./app/api/database/schema.js",
  driver: "durable-sqlite",
  dialect: 'sqlite',
  dbCredentials: {
    url: ".app/api/database/db.sqlite",
  },
});
