<!---->
<template>
    <div class="w-full" :style="{ height: chartHeight }" ref="chart"></div>
</template>

<script lang='ts' setup>
import { ref, onMounted, onBeforeUnmount, markRaw } from 'vue'
// echarts的按需导入
// import * as echarts from 'echarts/core';
// import { BarChart, PieChart, LineChart } from 'echarts/charts';
// import { UniversalTransition } from 'echarts/features';
// import { CanvasRenderer } from 'echarts/renderers';
// import {
//     TitleComponent, TooltipComponent, ToolboxComponent, LegendComponent, GridComponent,
//     VisualMapComponent,
//     MarkLineComponent
// } from 'echarts/components';

// echarts.use([
//     BarChart, PieChart, TitleComponent, TooltipComponent, ToolboxComponent, LegendComponent, GridComponent,
//     VisualMapComponent,
//     MarkLineComponent,
//     LineChart,
//     CanvasRenderer,
//     UniversalTransition, GridComponent,
//     VisualMapComponent,
//     MarkLineComponent,
//     LineChart,
//     CanvasRenderer,
//     UniversalTransition
// ])
// 全局引入echarts
import * as echarts from 'echarts';
const chart = ref<HTMLDivElement>()

const myChart = ref()
const props = defineProps(['option', 'chartHeight'])

onMounted(() => {
    myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement))

    myChart.value.setOption(props.option)

    window.addEventListener("resize", () => {
        myChart.value.resize()
    })
})

onBeforeUnmount(() => {
    window.removeEventListener("resize", () => {
        myChart.value.resize()
    })
})
</script>
