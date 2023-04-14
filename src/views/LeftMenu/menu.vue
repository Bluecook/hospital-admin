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
            <span>{{ item.name }}</span>
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

const route = useRoute()
const menuList = [
    {
        key: 'index',
        icon: 'icon-yibiaopan',
        name: '仪表盘'
    },
    {
        key: 'appointment',
        icon: 'icon-yyjl',
        name: '预约'
    },
    {
        key: 'doctor',
        icon: 'icon-yisheng1',
        name: '医生'
    },
    {
        key: 'schedule',
        icon: 'icon-chayuericheng',
        name: '日程'
    },
    {
        key: 'outclinic',
        icon: 'icon-ico_jiankangmenzhen_zonghemenzhen',
        name: '门诊'
    },
    {
        key: 'pack',
        icon: 'icon-wuliubaozhuangzhihe',
        name: '包装'
    },
    {
        key: 'quotation',
        icon: 'icon-tubiao-baojia',
        name: '报价'
    },
    {
        key: 'location',
        icon: 'icon-weizhi',
        name: '我们的位置'
    },
    {
        key: 'login',
        icon: 'icon-sinandengluyonghu',
        name: '登录/注册'
    },
    {
        key: 'help',
        icon: 'icon-bangzhu',
        name: '帮助中心'
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

