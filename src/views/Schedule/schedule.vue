<!---->
<template>
    <div class="schedule pt-5 pl-5 pr-5 h-full">
        <CommonTop title="安排你的访问" :show="true"></CommonTop>
        <div class="bg-[#1a0d67] pt-2.5 pb-2.5 flex">
            <div class="w-[12.5%]"></div>
            <div class="w-[12.5%]" v-for="(item, index) in weeks" :key="index">
                <a-button shape="round">{{ item.day }} {{ item.week }} </a-button>
            </div>
        </div>
        <a-row style="height: calc(100% - 94px);" class="m-auto">
            <div class="bg-skin-main-color h-[100% - 94px] flex">
                <div class="w-[12.5%] flex flex-col pl-2 ">
                    <span class="h-20 inline-block m-2.5" v-for="item in aTime" :key="item">{{ item }}</span>
                </div>
                <div class="w-[12.5%] ml-2 mr-2" v-for="item in totalData" :key="item[0].id">
                    <a-card :style="`background-color:${items.bgColor}`" v-for="items in item" :key="items.id"
                        :bordered="false" :hoverable="items.id < 1 ? false : true">
                        <p>{{ items.department }}</p>
                        <p>{{ items.name }}</p>
                    </a-card>
                </div>
            </div>
        </a-row>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs, provide, onMounted } from 'vue'
import CommonTop from '@/components/CommonTop/index.vue'
import { getWek } from '@/util/fortmat'
import http from '@/util/http';
import { scheduleType } from '@/module/doctor_inter'

import scheduleApply from '@/util/random'

interface MW {
    day: string,
    week: string
}

const weeks = ref<Array<MW>>();
const totalAply = ref([] as Array<scheduleType>)


const totalData = ref([] as Array<Array<scheduleType>>)
const aTime = ['10:00AM', '12:30PM', "01:15PM", "03:15PM", "04:30PM"]

provide('title', '')

onMounted(async () => {
    // 函数体
    weeks.value = getWek()
    await http.get('/schedule').then((res) => {
        totalAply.value = res.data.data
        for (let i = 0; i < 7; i++) {
            totalData.value.push(scheduleApply(totalAply.value))
        }
    })

})


</script>

<style lang='less' scoped>
:deep(.ant-card) {
    width: 100%;
    height: 86px;
    margin: 5px;

    p {
        color: #fff;
        margin-bottom: 5px;
    }
}
</style>