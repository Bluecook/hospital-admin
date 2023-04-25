<!---->
<template>
    <div class="flex justify-between items-center p-5">
        <div class="w-1/6 text-top flex">
            <div @click="menu.changeCollapsed" class="cursor-pointer">
                <MenuUnfoldOutlined v-if="menu.collapsed" />
                <MenuFoldOutlined v-else />
            </div>
            <div class="ml-2">{{ route.meta.menuName }}</div>
        </div>
        <div class="w-5/12 flex justify-between items-center">
            <div class="ml-1 mr-1 cursor-pointer" @click="handleLang">
                <IconFont v-if="temp" width="2" height="2" name="icon-zhongyingwenqiehuan-zhongwen"></IconFont>
                <IconFont v-else width="2" height="2" name="icon-zhongyingwenqiehuan-yingwen"></IconFont>
            </div>
            <a-switch v-model:checked="checked" @change="handleSwitch">
                <template #checkedChildren>
                    <IconFont name="icon-Sun"></IconFont>
                </template>
                <template #unCheckedChildren>
                    <IconFont name="icon-moon"></IconFont>
                </template>
            </a-switch>
            <div class="ml-1 mr-1 cursor-pointer" @click="handlefullScreen">
                <IconFont v-if="fullScreen" name="icon-fullscreen"></IconFont>
                <IconFont v-else name="icon-fullscreen-exit"></IconFont>
            </div>
            <a-input v-model:value="keyWord" placeholder="搜索">
                <template #prefix>
                    <IconFont name="icon-search"></IconFont>
                </template>
            </a-input>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { menuStore } from '@/store/menu';
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import { useLocalStore } from '@/store/local'
import { useI18n } from 'vue-i18n'
import i18n from '../../i18n/index'
const route = useRoute()
const menu = menuStore()
const keyWord = ref('')
const checked = ref(true)
const fullScreen = ref(true)
const temp = ref(true)
const useLocal = useLocalStore()

const { locale } = useI18n()
const t = i18n.global.t
const handleLang = () => {
    useLocal.setCurrentLocale()
    locale.value = useLocal.getCurrentLocale.lang
    // console.log(useLocal.getCurrentLocale.lang);

    temp.value = !temp.value
}

const handleSwitch = (checked: boolean | string | number, event: Event) => {
    // const classList = document.documentElement.classList
    if (checked) {
        // classList.add('theme-dark')
        toggleTheme({
            scopeName: "theme-default",
        });
    } else {
        // classList.remove('theme-dark')
        toggleTheme({
            scopeName: "theme-dark",
        });
    }
}

const handlefullScreen = () => {
    if (document.fullscreenElement) {
        fullScreen.value = !fullScreen.value
        document.exitFullscreen()
    } else {
        fullScreen.value = !fullScreen.value
        document.documentElement.requestFullscreen()
    }
}

onMounted(() => {
    // 函数体
    const lang = localStorage.getItem('lang')
    if (lang) {
        lang === 'zh-cn' ? temp.value = true : temp.value = false
        return
    } else {
        localStorage.setItem('lang', 'zh-cn')
    }
})

</script>