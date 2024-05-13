<!---->
<template>
    <div class="p-5 flex flex-wrap">
        <div class="md:w-[30%] sm:w-1/2 sm:pl-5 mb-2 md:ml-5" v-for="item in citys" :key="item.id">
            <a-card :hoverable="true" :border="false">
                <a-card-grid :hoverable="false">
                    <img alt="example" v-imglazy="'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'" />
                </a-card-grid>
                <a-card-grid style="width: 70%;box-shadow: none;" :hoverable="false" :bordered="false">
                    <p>{{ item.city }}</p>
                    <p>14 Rushcroft Rd,Brixton</p>
                    <a-button type="primary" shape="round">VISIT NOW</a-button>
                </a-card-grid>
            </a-card>
        </div>
    </div>
</template>

<script lang='ts' setup>
import http from '@/util/http';
import { reactive, ref, onMounted } from 'vue'

const citys = ref([] as Array<{ id: number, city: string }>)

onMounted(() => {
    http.get('/city').then((res) => {
        citys.value = res.data.data
    })
})
</script>

<style lang='less' scoped>
.ant-card {

    .ant-card-grid {
        &:first-child {
            width: 30%;
            text-align: center;
            box-shadow: none;
            padding: 10px;
        }

        img {
            width: 100%;
        }

        .ant-list-item {
            span {
                color: #A9B7CD;
            }
        }
    }
}
</style>