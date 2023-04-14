<!---->
<template>
    <div class="link pt-5 flex flex-col w-4/5 items-center h-[400px] bg-[#005FFF] m-auto">
        <img v-imglazy="getImageUrl('pink_logo')" :width="45" :height="45" class="mb-3" />
        <p>新技术</p>
        <p>介绍</p>
        <a-button type="primary" shape="round">联系医生</a-button>
    </div>
</template>

<script lang='ts' setup>
import { getImageUrl } from '@/util/getfile';
</script>

<style lang='less' scoped>
p {
    @apply text-white text-2xl;
}
</style>