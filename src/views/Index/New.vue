<!---->
<template>
    <div
        class="link pt-5 flex flex-col w-4/5 justify-center items-center h-full bg-[#005FFF] m-auto rounded-md max-h-[400px]">
        <img v-imglazy="getImageUrl('pink_logo')" :width="45" :height="45" class="mb-3" />
        <p>{{ t('setmsg.new.NewTechnologyText') }}</p>
        <p>{{ t('setmsg.new.introduceText') }}</p>
        <a-button type="primary" shape="round">{{ t('setmsg.new.ContactTheDoctorText') }}</a-button>
    </div>
</template>

<script lang='ts' setup>
import { getImageUrl } from '@/util/getfile';
import i18n from '@/i18n';
const t = i18n.global.t
</script>

<style lang='less' scoped>
p {
    @apply text-white text-2xl;
}
</style>