import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "./home/index" },
    { path: "/jx3api/docs", component: "docs" },
    { path: "/jx3api/characterinfo", component: "./jx3api/CharacterInfo" },
    { path: "/jx3api/itemprice", component: "./jx3api/ItemPrice" },
  ],
  proxy:{
    '/api':{
      target: 'http:/api.muyz.xyz:25555/api',
      changeOrigin: true,
      pathRewrite:{"^/api":''}
    },
    '/gold':{
      target: 'http://api.muyz.xyz:25555/gold',
      changeOrigin: true,
      pathRewrite:{"^/gold":''}
    }
  },
  mfsu: {
    esbuild: true,
  },
  npmClient: 'pnpm',
  title: 'Pigeon Source',
});
