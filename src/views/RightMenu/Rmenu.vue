<!---->
<template>
    <div class="flex flex-col w-full h-screen rounded-tl-2xl rounded-bl-2xl justify-between items-center md:items-center">
        <div class="w-1/2 h-1/2 flex-col justify-between items-center">
            <div v-for="item in 4" :key="icons[item]"
                class="w-8 h-8 bg-white rounded-full m-3 flex justify-center items-center cursor-pointer">
                <IconFont :name="icons[item - 1]"></IconFont>
            </div>

        </div>
        <div class="w-8 h-8 rounded-full mb-5 flex flex-col justify-center items-center cursor-pointer bg-white">
            <IconFont name="icon-tuichu" @click="handleLogout"></IconFont>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import 'ant-design-vue/es/message/style/css';

const router = useRouter()

const icons = ref([
    'icon-sinandengluyonghu', 'icon-tongzhi', 'icon-email', 'icon-settings'
])

const handleLogout = () => {
    localStorage.removeItem('token')
    message.success('退出登录，期待你的下次登录')
    router.push('/userlogin')
}
</script>
