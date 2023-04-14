<!---->
<template>
    <CommonTop></CommonTop>
    <a-table :columns="columns" :dataSource="dataSource" style="color: #A9B7CD;"
        :row-class-name="() => (isHover ? 'active' : null)" :defaultPageSize="5">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
                <a-tag v-show="record.status.number == 0" color="#2db7f5">已完成</a-tag>
                <a-tag v-show="record.status.number == 1" color="#87d068">排队中</a-tag>
                <a-tag v-show="record.status.number == 2" color="#108ee9">已取消</a-tag>
            </template>

        </template>
    </a-table>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs, onMounted } from 'vue'
import { tableInfo } from '@/module/home_inter';
import http from '@/util/http'
import CommonTop from '@/components/CommonTop/index.vue'

const isHover = ref<Boolean>(false)
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '专家',
        dataIndex: 'experename',
        key: 'experename'
    },
    {
        title: '患者ID',
        dataIndex: 'patientId',
        key: 'patientId'
    },
    {
        title: '日期',
        dataIndex: "dateTime",
        key: 'dateTime'
    },
    {
        title: "时间",
        dataIndex: "time",
        key: 'time'
    },
    {
        title: "状态",
        dataIndex: "status",
        key: 'status'
    }
];

const dataSource = ref<Array<tableInfo>>()

onMounted(() => {
    // 函数体
    http.get('/getTable').then((res) => {
        // console.log(res.data);
        dataSource.value = res.data.data
    })
})
</script>