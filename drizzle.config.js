import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url : 'postgresql://neondb_owner:VcLD1yEXz0YH@ep-round-sea-a5wjdkjj.us-east-2.aws.neon.tech/neondb?sslmode=require'
  }
});
