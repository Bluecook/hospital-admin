<!---->
<template>
    <div class="mainbox w-full p-3">
        <div class="total flex justify-between">
            <div class="w-1/3 md:h-40 sm:h-56 mr-3 bg-skin-main-color last:mr-0" v-for="(item, index) in totalData"
                :key="index">
                <div class="flex md:flex-row sm:flex-col">
                    <div class="info w-1/4  flex md:flex-col sm:flex-row md:justify-center">
                        <span class="pl-3 md:pb-3 text-[#A9B7CD]">{{ t(`setmsg.${item.total}`) }}</span>
                        <span class="pl-3 md:pb-3 font-bold text-xl">{{ item.count }}</span>
                        <span class="pl-3 md:pb-3 text-[#FF0000]" v-if="index == 0">
                            <IconFont name="icon-youxiajiantou"></IconFont> {{ item.count
                            }}
                        </span>
                        <span class="pl-3 text-[#00B41D]" v-if="index != 0">
                            <IconFont name="icon-youshangjiao"></IconFont>
                            {{ item.count }}
                        </span>
                    </div>
                    <div class="w-3/4 animate__animated animate__lightSpeedInRight">
                        <!-- <Bar></Bar> -->
                        <Charts :option="BarOption" chartHeight="200px"></Charts>
                    </div>
                </div>
            </div>
        </div>
        <div class="statistics mt-5 flex flex-wrap w-full justify-between">
            <div class="lg:w-7/12 md:w-1/2 mr-3 sm:w-full bg-skin-main-color animate__animated animate__backInUp">
                <!-- <Line></Line> -->
                <Charts :option="LineOption" chartHeight="400px"></Charts>
            </div>
            <div
                class="lg:w-2/5 md:w-2/5 sm:w-full bg-skin-main-color md:mt-0 lg:mt-0 sm:mt-5 animate__animated animate__backInUp">
                <!-- <Pie></Pie> -->
                <Charts :option="PieOption" chartHeight="400px"></Charts>
            </div>
        </div>
        <div class="order mt-5">
            <div class="flex justify-between flex-wrap">
                <div class="md:w-3/4 sm:w-full">
                    <appointTable></appointTable>
                </div>
                <div class="md:w-1/4 sm:w-full">
                    <New></New>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref, provide, defineAsyncComponent } from 'vue'
import i18n from '@/i18n'
const t = i18n.global.t
interface label {
    percent: number,
    name: string,
    seriesName: string
}

const appointTable = defineAsyncComponent(() => import('../Appointment/appointTable.vue'))
const New = defineAsyncComponent(() => import('./New.vue'))
const Charts = defineAsyncComponent(() => import('../Charts/Charts.vue'))
provide('title', '预约')

const totalData = ref([
    { total: 'total.patientsText', count: '598K', num: '+25%' },
    { total: 'total.doctorsText', count: '352+', num: '+25%' },
    { total: 'total.appointmentsText', count: '159K', num: '+12%' },
])

const BarOption = ref({

    xAxis: {
        type: 'category',
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130, 160, 200, 210, 120, 80],
            type: 'bar',
            itemStyle: {
                color: '#ff9d1c',
                borderRadius: [10]
            }
        }
    ]

})

const PieOption = ref({
    title: {
        top: '2%',
        left: '5%',
        text: '部门'
    },
    tooltip: {
        trigger: 'item',
        valueFormatter: (value: number) => value + '%',
    },
    legend: {
        orient: 'vertical',
        top: '36%',
        right: 'right',
    },
    toolbox: {
        show: true,
        top: '2%',
        right: '5%',
        feature: {
            saveAsImage: {
                title: '下载图片'
            }
        }
    },
    series: [
        {
            name: '部门',
            type: 'pie',
            radius: ['20%', '50%'],
            color: ['#FFC700', '#FF77E9', '#704DFF', '#29F0A8',],
            avoidLabelOverlap: false,
            right: '20',
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: true,
                position: 'inside',
                color: '#fff',
                formatter: function (params: label) {
                    return params.percent + '%'
                }
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 10, name: '牙医', },
                { value: 20, name: '心脏病学' },
                { value: 20, name: '耳鼻喉' },
                { value: 50, name: '皮肤病医生' },
            ]
        }
    ]
})


const LineOption = ref({
    title: {
        top: '2%',
        left: '5%',
        text: "医院统计"
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        top: '2%',
        right: '5%',
        feature: {
            saveAsImage: {
                title: '下载图片'
            }
        }
    },
    legend: {
        top: '2%',
        lineStyle: {
            color: '#fff',
            type: 'dotted'
        },
        data: ['新患者', '老患者']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        backgroundColor: "#66FF63"
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            type: 'line',
            name: '新患者',
            symbol: 'none',
            smooth: 0.6,
            lineStyle: {
                color: '#66FF63',
                width: 3
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1000],
        },
        {
            type: 'line',
            name: '老患者',
            symbol: 'none',
            smooth: 0.6,
            lineStyle: {
                color: '#D257FE',
                width: 3
            },
            data: [400, 650, 560, 820, 320, 340, 720, 450],
        }
    ]
})
</script>

<style lang='less' scoped></style>