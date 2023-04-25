<!---->
<template>
    <div class="w-full h-screen flex bg-skin-left-side">
        <div class="h-screen">
            <LeftMenu></LeftMenu>
        </div>
        <div class="bg-skin-bg h-screen w-full ml-5 mr-5 overflow-auto main">
            <div class="sticky top-0 z-10 bg-skin-bg ">
                <HeaderTop></HeaderTop>
            </div>
            <div class="w-full animate__animated animate__backInRight">
                <RouterView></RouterView>
            </div>
        </div>
        <div class="bg-skin-right-side w-[10%]">
            <RightMenu></RightMenu>
        </div>
    </div>
</template>

<script lang='ts' setup>
import LeftMenu from '../LeftMenu/menu.vue'
import HeaderTop from '@/components/HeaderTop/headerTop.vue';
import RightMenu from '@/views/RightMenu/Rmenu.vue'
</script>

<style lang='less' scoped>
.main::-webkit-scrollbar {
    display: none;
}
</style>