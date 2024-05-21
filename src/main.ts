import { createApp } from "vue";
import App from "./App.vue";

// import 'ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import "./theme/css/tailwind.css";
import router from "./router";

import "./util/mock/mock";

import IconFontPlugin from "./plugins/iconfont";
import pinia from "./store";
import Particles from "vue3-particles";
import { setupDirectives } from "./views/directives";

import "animate.css";
import i18n from "./i18n";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
setupDirectives(app);

app.use(router);
app.use(pinia);
app.use(i18n);
app.use(Particles);
// 阿里巴巴图标库
app.use(IconFontPlugin, {
  url: "//at.alicdn.com/t/c/font_3960292_8l8hf2i3p3e.js",
});

app.mount("#app");
