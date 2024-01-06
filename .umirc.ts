import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "./home/index" },
    { path: "/jx3api/docs", component: "docs" },
    { path: "/jx3api/characterinfo", component: "./jx3api/CharacterInfo" },
  ],
  proxy:{
    '/api':{
      target: 'http://pigeon-server-developer:25555/api',
      changeOrigin: true,
      pathRewrite:{"^/api":''}
    }
  },
  npmClient: 'pnpm',
  title: 'Pigeon Source',
});
