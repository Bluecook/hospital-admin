import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置Mock
import { viteMockServe } from "vite-plugin-mock"
// 自动导入ant-design-vue
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 打包后将文件进行压缩
import viteCompression from 'vite-plugin-compression';
import path from 'path'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  // 配置Mockjs
  viteMockServe({
    mockPath: "./src/util/mock",
    supportTs: true    //如果使用 js发开，则需要配置 supportTs 为 false
  }),
  viteCompression(),
  // 按需自动导入
  AutoImport({
    resolvers: [AntDesignVueResolver({ importStyle: 'less' })]
  }),
  Components({
    // 引入ant-design-vue样式
    resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })]
  }),
  themePreprocessorPlugin({
    less: {
      // 是否启用任意主题色模式，这里不启用
      arbitraryMode: false,
      multipleScopeVars: [
        {
          scopeName: 'theme-default',
          path: path.resolve('src/theme/default.less')
        },
        {
          scopeName: 'theme-dark',
          path: path.resolve('src/theme/dark.less')
        }
      ],
    }
  })
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
      '@': '/src/'
    }
  },
  // 打包
  build: {
    outDir: './docs'
  },
  base: './'
})
