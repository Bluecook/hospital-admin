import { createI18n } from 'vue-i18n'
import zhCNLocal from 'ant-design-vue/es/locale/zh_CN';
import ENLocal from 'ant-design-vue/es/locale/en_US'
import zhCn from './lang/zh-cn'
import en from './lang/en'
import { useLocaleStoreWithOut } from '@/store/local'
const localStore = useLocaleStoreWithOut()
const locale = localStore.getCurrentLocale.lang
const defaultLang = locale

const messages = {
    [zhCNLocal.locale]: {
        ...zhCNLocal,
        setmsg: { ...zhCn }
    },
    [ENLocal.locale]: {
        ...ENLocal,
        setmsg: { ...en }
    },

}

const i18n = createI18n({
    legacy: false,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    fallbackWarn: false,
    locale: defaultLang,
    fallbackLocale: zhCNLocal.locale,
    messages
})

export default i18n