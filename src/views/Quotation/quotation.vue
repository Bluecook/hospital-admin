
<template>
    <div class="quotation h-screen pt-5 pb-14 mt-5 ml-5 mr-5 bg-skin-main-color">
        <div class="w-full h-1/5" v-for="(item, index) in order" :key="item.num">
            <div class="box pl-5 m-2.5 relative flex items-center w-1/2 h-full rounded-bl-xl rounded-tl-xl"
                :style="{ backgroundColor: bgColor[index] }">
                <div class="plat">
                    <span style="writing-mode: vertical-lr;background-color: yellow;padding: 5px 0;">FLAT</span>
                    <span style="font-weight: 600;font-size: 24px;">{{ item.num }}%</span>
                    <span style="font-weight: 600;font-size: 18px;">OFF</span>
                </div>
                <div class="medicine pl-2">
                    <p class="mb-0 ">{{ item.recycle }}</p>
                    <p class="mb-0 text-xs text-[#48868c]">订单对所有药物有效</p>
                    <a-button type="primary" shape="round">Download App</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs } from 'vue'
const bgColor = ref(['#FFE4CB', '#8EF4FF', '#FFEBA6', '#86FFE5', '#8EF4FF'])

const order = ref([
    { num: 25, recycle: '' },
    { num: 15, recycle: '+收回10%的健康现金' },
    { num: 25, recycle: '' },
    { num: 15, recycle: '+收回10%的健康现金' },
    { num: 25, recycle: '' },
])
</script>

<style lang='less' scoped>
// .box {
//     background: radial-gradient(circle at right, tranf, white, skyblue 100%);
// }

/* .quotation {
    .box {

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: calc(100% - 109px);
            width: 220px;
            height: 100%;
            background-color: #fff;
            clip-path: path('M 200 122 A 5,5 0 1 1 108,0 ')
        }
    }

} */
</style>