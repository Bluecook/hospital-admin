import { defineStore } from "pinia";
import { theme, type DerivativeFunc } from "ant-design-vue";

/*
 * 全局主题设置参数
 * 持久化存储在localStorage中
 * 修改唯一 id 和 存储空间 的时候，需要注意i18n或其他地方直接引用了localStorage某些变量
 **/
export const useThemeStore = defineStore("themeConfig", {
  state: () => {
    return {
      // 默认初始语言，可选值"<zh-cn|en>"，默认 zh-cn
      globalI18n: "zh-cn",
      themeType: theme.darkAlgorithm,
    };
  },
  getters: {}, // 数据加工处理
  actions: {
    // 修改主题
    changeTheme() {
      this.themeType = theme.defaultAlgorithm;
    },
  },
  persist: {
    storage: window.localStorage,
  }, // 数据持久化
});
