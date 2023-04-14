<!---->
<template>
    <div class="appoint p-4">
        <div class="formTop mb-5 p-5">
            <CommonTop title="预约表单" :show="true"></CommonTop>
            <div class="bg-skin-bg">
                <a-form :model="formState" name="appointForm" @finish="handleFinish" @finishFailed="handleFinishFailed"
                    :labelCol="{ span: 24 }">
                    <a-row :gutter="20">
                        <a-col :span="8">
                            <a-form-item name="userName" label="姓名" v-bind="configName">
                                <a-input v-model:value="formState.userName" placeholder="Your Name"> </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="电话" name="telephone"
                                :rules="[{ required: true, message: '请输入电话号码！', type: 'string' }]">
                                <a-input v-model:value="formState.telephone" placeholder="Your Phone">

                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="日期" :rules="[{ required: true, message: '请选择预约日期' }]" name="date">
                                <a-date-picker v-model:value="formState['date']" value-format="YYYY-MM-DD" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="时间" :rules="[{ required: true, message: '请选择预约时间' }]" name="time">
                                <a-time-picker v-model:value="formState['time']" format="HH:mm:ss"
                                    value-format="HH:mm:ss" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="选择预约" :rules="[{ required: true, message: '请选择预约科室' }]" name="fail">
                                <a-select v-model:value="formState.fail" show-search placeholder="Cardiology"
                                    :options="options" :filter-option="filterOption"></a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="选择医生" :rules="[{ required: true, message: '请选择预约医生' }]" name="doctor">

                                <a-select v-model:value="formState.doctor" show-search placeholder="Dr.Peterson"
                                    :options="options" :filter-option="filterOption"></a-select>
                            </a-form-item>

                        </a-col>
                        <a-col :span="24">
                            <a-form-item>
                                <a-button type="primary" html-type="submit" block shape="round">
                                    获取预约
                                </a-button>
                            </a-form-item>
                        </a-col>
                    </a-row>

                </a-form>
            </div>
        </div>
        <appointTable></appointTable>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, provide, defineAsyncComponent } from 'vue'
// import appointTable from './appointTable.vue';
import CommonTop from '@/components/CommonTop/index.vue'
import type { FormProps, SelectProps } from 'ant-design-vue';

provide('title', '预约')

interface FormState {
    userName: string,
    telephone: number | string,
    'date': string;
    'time': string;
    fail: string,
    doctor: string
}
const appointTable = defineAsyncComponent(() => import('./appointTable.vue'))
const configName = {
    rules: [{ type: 'string', required: true, message: '请输入名字' }],
};
const formState = reactive({} as FormState);

const options = ref<SelectProps['options']>([
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'tom', label: 'Tom' },
]);


const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};



const handleFinish = (values: any) => {
    console.log(values, formState);
};
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
    console.log(errors);
};

</script>

