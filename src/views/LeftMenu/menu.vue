<!---->
<template>
    <div class="flex h-16 w-full justify-center items-center text-center pt-3 pl-2">
        <img :width="40" :height="40" v-imglazy="getImageUrl('logo')" />
        <div class="font-bold pl-2">weal</div>
    </div>
    <a-menu :inline-collapsed="menu.collapsed" mode="inline">

        <a-menu-item v-for="item in menuList" :key="item.key" @click="handleChange(item.key, item.name)"
            :class="{ 'ant-menu-item-selected': (route.path).replace('/', '') == item.key }">
            <template #icon>
                <IconFont :name="item.icon"></IconFont>
            </template>
            <span>{{ t(`setmsg.${item.name}`) }}</span>
        </a-menu-item>
    </a-menu>
    <div class="flex justify-center w-full">
        <img v-imglazy="getImageUrl('Ad')" :width="64" />
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs } from 'vue'
import { getImageUrl } from '@/util/getfile'
import { useRouter, useRoute } from 'vue-router'
import { menuStore } from '@/store/menu';
import i18n from '@/i18n';

const t = i18n.global.t

const route = useRoute()
const menuList = [
    {
        key: 'index',
        icon: 'icon-yibiaopan',
        name: 'menubar.DashboardText'
    },
    {
        key: 'appointment',
        icon: 'icon-yyjl',
        name: 'menubar.appointmentText'
    },
    {
        key: 'doctor',
        icon: 'icon-yisheng1',
        name: 'menubar.doctorText'
    },
    {
        key: 'schedule',
        icon: 'icon-chayuericheng',
        name: 'menubar.scheduleText'
    },
    {
        key: 'outclinic',
        icon: 'icon-ico_jiankangmenzhen_zonghemenzhen',
        name: 'menubar.OutpatientServiceText'
    },
    {
        key: 'pack',
        icon: 'icon-wuliubaozhuangzhihe',
        name: 'menubar.packText'
    },
    {
        key: 'quotation',
        icon: 'icon-tubiao-baojia',
        name: 'menubar.quotationText'
    },
    {
        key: 'location',
        icon: 'icon-weizhi',
        name: 'menubar.locationText'
    },
    {
        key: 'login',
        icon: 'icon-sinandengluyonghu',
        name: 'menubar.loregisterText'
    },
    {
        key: 'help',
        icon: 'icon-bangzhu',
        name: 'menubar.HelpCenterText'
    }
]

const menu = menuStore()

const router = useRouter()

const handleChange = (path: string, Menuname: string) => {
    // 函数体
    router.push({ name: `${path}` })
}
</script>
<style lang="less" scoped>
:deep(.ant-menu-item) {

    display: flex !important;
    align-items: center !important;
}
</style>

