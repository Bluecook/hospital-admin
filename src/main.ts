import { createApp } from 'vue'
import App from './App.vue'

import 'ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import './theme/css/tailwind.css'
import router from './router'

import './util/mock/mock'

import IconFontPlugin from './plugins/iconfont'
import pinia from './store'
import Particles from "vue3-particles";
import { setupDirectives } from './views/directives'


const app = createApp(App)
setupDirectives(app)
// app.use(Antd)
app.use(router)
app.use(pinia)
app.use(Particles)
app.use(IconFontPlugin, { url: '//at.alicdn.com/t/c/font_3960292_ror1lcu4gpi.js' })

app.mount('#app')
