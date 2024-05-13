import { defineStore } from 'pinia'
import pinia from './index'

export const useLocalStore = defineStore('locales', {
    state: () => {
        // 函数体
        return {
            currentLocale: {
                lang: 'zh-cn'
            },
            // 多语言
            localeMap: [
                {
                    lang: 'zhcn',
                    name: '简体中文'
                },
                {
                    lang: 'en',
                    name: 'English'
                }
            ]
        }
    },
    getters: {
        getCurrentLocale(): { lang: string } {
            return this.currentLocale
        }
    },
    actions: {
        setCurrentLocale() {
            if (this.currentLocale.lang === 'zh-cn') {
                this.currentLocale.lang = 'en'
            } else {
                this.currentLocale.lang = 'zh-cn'
            }
        }
    },
    persist: true

})
export const useLocaleStoreWithOut = () => {
    return useLocalStore(pinia)
}