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
        <!-- <a-switch v-model:checked="checked" checked-children="light" un-checked-children="dark"
                        @change="handleSwitch" /> -->
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
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { menuStore } from '@/store/menu';
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
const route = useRoute()
const menu = menuStore()

const keyWord = ref('')
const checked = ref(true)
const fullScreen = ref(true)
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
</script>