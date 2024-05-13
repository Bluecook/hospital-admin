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
// import { onMounted, onUnmounted } from 'vue'
import LeftMenu from '../LeftMenu/menu.vue'
import HeaderTop from '@/components/HeaderTop/headerTop.vue';
import RightMenu from '@/views/RightMenu/Rmenu.vue'
import { menuStore } from '@/store/menu';
// const menu = menuStore()


// const resize = () => {
//     window.addEventListener('resize', (e: any) => {
//         console.log(e.target.innerWidth);
//         if (e.target.innerWidth < 700) {
//             menu.changeCollapsed()
//         }
//     })
// }
// onMounted(() => {
//     // 函数体
//     resize()
// })
// onUnmounted(() => {
//     window.removeEventListener('resize', () => {
//         console.log("取消");
//     })
// })


</script>

<style lang='less' scoped>
.main::-webkit-scrollbar {
    display: none;
}
</style>