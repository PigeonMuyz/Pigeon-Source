import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "./home/index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
