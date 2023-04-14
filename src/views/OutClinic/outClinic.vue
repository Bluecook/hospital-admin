<!---->
<template>
    <div class="clinic p-5">
        <div class="flex flex-wrap flex-auto">
            <div class="w-[48%] mb-5 ml-4" v-for="(item, index) in department" :key="item">
                <a-card :title="item" :hoverable="true" :border="false">
                    <a-card-grid style="width: 50%; text-align: center;box-shadow: none;" :hoverable="false">
                        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </a-card-grid>
                    <a-card-grid style="width: 50%; text-align: center;box-shadow: none;background-color: #E9F1FF;"
                        :hoverable="false" :bordered="false">
                        <a-list size="small" :data-source="data" :split="false" :bordered="false">
                            <template #renderItem="{ item }">
                                <a-list-item>
                                    <span class="text-primary">{{ item.detail }}</span>
                                    <span class="text-primary"> {{ item.price }}</span>
                                </a-list-item>
                            </template>
                        </a-list>
                    </a-card-grid>
                </a-card>
            </div>

        </div>

    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs, provide } from 'vue'
const data = ref([
    { detail: '支气管镜检查', price: '$250' },
    { detail: '甲状腺扫描', price: '$220' },
    { detail: '矫正学', price: '$49' },
    { detail: '卡托普利肾造影', price: '$117' },
    { detail: '傻瓜血液计数', price: '$34' },
    { detail: '头部CT', price: '$220' },
] as Array<{ detail: string, price: string }>);

const department = ref(['物理治疗室', '牙医', '皮肤病医生', '耳鼻喉', '儿科医生', '妇科医生'])
</script>
