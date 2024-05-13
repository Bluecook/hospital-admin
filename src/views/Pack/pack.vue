<!---->
<template>
    <div class="pack m-5 bg-skin-main-color">
        <h3 class="ml-10 pt-2 pb-2">我们的定价计划</h3>
        <div class="flex justify-around mt-3 sm:flex-wrap">
            <div class="md:w-1/4 sm:w-7/12 sm:mb-3" v-for="items in 3" :key="items">
                <a-card :hoverable="true" style="background-color: #D6DFEB;border-radius: 10px">
                    <template #title>
                        <p class="text-center text-white text-2xl">{{ items == 1 ? '$29' : items == 2 ? '$59' : '$79' }}</p>
                        <p class="text-xs text-center text-white">{{ items == 1 ? '基本软件包' : items == 2 ? '高级软件包' : '高级套餐' }}
                        </p>
                    </template>
                    <a-list size="small" :data-source="data" :split="false" :bordered="false">
                        <template #renderItem="{ item }">
                            <a-list-item>
                                <span class="text-primary text-xs">{{ item.detail }}</span>
                                <span class="text-primary text-xs"> {{ item.price }}</span>
                            </a-list-item>
                        </template>
                    </a-list>
                    <a-button type="primary" block shape="round">订阅计划</a-button>
                </a-card>
            </div>
        </div>
        <div class="flex justify-around mt-5 mb-2.5 ml-5 mr-5 flex-wrap">
            <div class="md:w-[30%] sm:w-[48%] h-60 sm:mb-12" v-for="items in 6" :key="items">
                <a-card :hoverable="true" :border="false">
                    <a-card-grid style="width: 50%; box-shadow: none;" :hoverable="false">
                        <img alt="example" v-imglazy="getImageUrl('Bg')" />
                    </a-card-grid>
                    <a-card-grid
                        style="width: 50%;padding: 0 10px;height: 100%; box-shadow: none;background-color: #E9F1FF;"
                        :hoverable="false" :bordered="false">
                        <p class="font-semibold mb-2.5">年轻多健康</p>
                        <p class="font-semibold mb-2.5">检查</p>
                        <p style="color: #A6AEBA;">95 Test Include</p>
                        <p><span>$180.50</span>&nbsp;<span class="text-del"><del>$195.99</del></span></p>
                        <p class="text-green">+ Get10% Healthcash back</p>
                        <a-button type="primary" block shape="round" style="margin-bottom: 7px ;">Book Now</a-button>
                    </a-card-grid>
                </a-card>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs } from 'vue'
import { getImageUrl } from '@/util/getfile';
const data = ref([
    { detail: '支气管镜检查', price: '$250' },
    { detail: '甲状腺扫描', price: '$220' },
    { detail: '矫正学', price: '$49' },
    { detail: '卡托普利肾造影', price: '$117' },
    { detail: '傻瓜血液计数', price: '$34' },
    { detail: '头部CT', price: '$220' },
] as Array<{ detail: string, price: string }>);
</script>

<style lang='less' scoped>
.pack {
    :deep(.ant-card-head) {
        background-color: #1A0D68;
        border-radius: 10px;
    }
}
</style>