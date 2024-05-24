import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 配置Mock
import { viteMockServe } from "vite-plugin-mock";
// 自动导入ant-design-vue
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// 打包后将文件进行压缩
import viteCompression from "vite-plugin-compression";
import path from "path";
import { themePreprocessorPlugin } from "@zougt/vite-plugin-theme-preprocessor";
import { Plugin as importToCDN, autoComplete } from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置Mockjs
    viteMockServe({
      mockPath: "./src/util/mock",
      supportTs: true, //如果使用 js发开，则需要配置 supportTs 为 false
    }),
    // viteCompression(),
    // 按需自动导入
    AutoImport({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
    Components({
      // 引入ant-design-vue样式
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
          resolveIcons: true, // 自动引入图标
        }),
      ],
      /* resolvers: [
        AntDesignVueResolver({ importStyle: "less", resolveIcons: true }),
      ], */
    }),
    /*  themePreprocessorPlugin({
      less: {
        // 是否启用任意主题色模式，这里不启用
        arbitraryMode: false,
        multipleScopeVars: [
          {
            scopeName: "theme-default",
            path: path.resolve("src/theme/default.less"),
          },
          {
            scopeName: "theme-dark",
            path: path.resolve("src/theme/dark.less"),
          },
        ],
        extract: false,
      },
    }), */
    importToCDN({
      modules: [
        // {
        //   name: 'vue',
        //   var: 'Vue',
        //   path: 'https://unpkg.com/vue@3/dist/vue.global.js'
        // },
        // {
        //   name: 'vue-demi',//安装vue-demi并导入 因为pinia中有用vue依赖中的vue-demi
        //   var: 'VueDemi',
        //   path: 'https://cdn.jsdelivr.net/npm/vue-demi@0.14.6/lib/index.iife.min.js'
        // },
        // {
        //   name: 'pinia',
        //   var: 'Pinia',
        //   path: 'https://cdn.jsdelivr.net/npm/pinia@2.1.6/dist/pinia.iife.min.js'
        // },
        // {
        //   name: 'vue-router',
        //   var: 'VueRouter',
        //   path: 'https://cdn.jsdelivr.net/npm/vue-router@4.2.5/dist/vue-router.global.min.js'
        // },
        // {
        //   name: 'vue-i18n',
        //   var: 'VueI18n',
        //   path: 'https://cdn.jsdelivr.net/npm/vue-i18n@9.5.0/dist/vue-i18n.global.min.js'
        // },
        // autoComplete('vue'),
        {
          name: "echarts",
          var: "echarts",
          path: "https://cdn.bootcdn.net/ajax/libs/echarts/5.5.0/echarts.min.js",
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // 路径别名
  resolve: {
    alias: {
      "@": "/src/",
      // 去除控制台警告
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
  // 打包
  build: {
    outDir: "./docs/",
  },
  base: "/hospital-admin/",
});
