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
      target: 'http:/192.168.6.254:25555/api',
      changeOrigin: true,
      pathRewrite:{"^/api":''}
    },
    '/gold':{
      target: 'http://192.168.6.254:25555/gold',
      changeOrigin: true,
      pathRewrite:{"^/gold":''}
    }
  },
  npmClient: 'pnpm',
  title: 'Pigeon Source',
});
