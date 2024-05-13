<!---->
<template>
    <div class=" m-5 bg-skin-main-color">
        <CommonTop title="还有问题" :show="true"></CommonTop>
        <a-list :bordered="false" :data-source="data">
            <template #renderItem="{ item }">
                <a-collapse v-model:activeKey="activeKey" accordion :bordered="false" ghost>
                    <a-collapse-panel :key="item.index" :header="item.title" :show-arrow="false">
                        <a-list-item>{{ item.content }}</a-list-item>
                    </a-collapse-panel>
                </a-collapse>
            </template>
        </a-list>
    </div>
</template>

<script lang='ts' setup>
import CommonTop from '@/components/CommonTop/index.vue'
import http from '@/util/http';
import { provide, ref, onMounted } from 'vue'

provide('title', '')
const activeKey = ref([]);
const data = ref([] as Array<{ id: number, index: number, title: string, content: string }>);

onMounted(() => {
    http.get('/help').then(res => {
        data.value = res.data.data
    })
})
</script>

<style lang='less' scoped>
.ant-collapse {
    margin: 5px;

    :deep(.ant-collapse-header) {
        @apply bg-skin-main-color rounded-lg;
    }
}
</style>

