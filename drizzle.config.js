import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url : 'postgresql://neondb_owner:npg_19BPjsUDymbG@ep-wild-violet-a81dtpll-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
  }
});
