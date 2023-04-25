import { defineStore } from 'pinia';

/*
 * 全局主题设置参数
 * 持久化存储在localStorage中
 * 修改唯一 id 和 存储空间 的时候，需要注意i18n或其他地方直接引用了localStorage某些变量
 **/
export const useThemeStore = defineStore('themeConfig', {
    state: () => ({
        // 默认初始语言，可选值"<zh-cn|en>"，默认 zh-cn
        globalI18n: 'zh-cn',
    }),
    getters: {}, // 数据加工处理
    actions: {},
    persist: {
        storage: window.localStorage,
    }, // 数据持久化
});
