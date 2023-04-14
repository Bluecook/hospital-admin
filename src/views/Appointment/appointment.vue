<!---->
<template>
    <div class="appoint p-4">
        <div class="formTop mb-5 p-5">
            <CommonTop title="预约表单" :show="true"></CommonTop>
            <div class="bg-skin-bg">
                <a-form ref="formRef" :model="formState" name="appointForm" @finish="handleFinish"
                    @finishFailed="handleFinishFailed" :labelCol="{ span: 24 }" :rules="rules">
                    <a-row :gutter="20">
                        <a-col :span="8">
                            <a-form-item name="userName" label="姓名">
                                <a-input v-model:value="formState.userName" placeholder="Your Name"> </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="电话" name="telephone">
                                <a-input :min="0" :max-length="11" :controls="false" v-model:value="formState.telephone"
                                    placeholder="Your Phone" width="100%" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="日期" name="date">
                                <a-date-picker v-model:value="formState['date']" value-format="YYYY-MM-DD" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="时间" name="time">
                                <a-time-picker v-model:value="formState['time']" format="HH:mm:ss"
                                    value-format="HH:mm:ss" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="选择预约" name="fail">
                                <a-select v-model:value="formState.fail" show-search placeholder="Cardiology"
                                    :options="options" :filter-option="filterOption"></a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="选择医生" name="doctor">
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
        <appointTable :tables="addapoint"></appointTable>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, provide, defineAsyncComponent } from 'vue'
import type { Rule } from 'ant-design-vue/es/form';
import CommonTop from '@/components/CommonTop/index.vue'
import type { FormProps, SelectProps, FormInstance } from 'ant-design-vue';
import { tableInfo } from '@/module/home_inter';
import http from '@/util/http';
const formRef = ref({} as FormInstance);

provide('title', '预约')

interface FormState {
    userName: string,
    telephone: number,
    'date': string;
    'time': string;
    fail: string,
    doctor: string
}
const appointTable = defineAsyncComponent(() => import('./appointTable.vue'))

const formState = reactive({} as FormState);

const options = ref<SelectProps['options']>([
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'tom', label: 'Tom' },
]);


const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const addapoint = ref<Array<tableInfo>>()

const handleFinish = (values: any) => {
    // console.log(values, formState);
    http.post('/addappoint', formState).then((res) => {
        // console.log(res);
        addapoint.value = res.data.data

    })
    formRef.value.resetFields()
};
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
    console.log(errors);
};
let validateTel = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请输入电话号码');
    } else {
        const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (!reg.test(value)) {
            return Promise.reject('请输入正确的电话号码');
        } else {
            return Promise.resolve();
        }
    }
}
const rules: Record<string, Rule[]> = {
    userName: [{ type: 'string', required: true, message: '请输入名字' }],
    telephone: [{ required: true, validator: validateTel, trigger: 'change' }],
    date: [{ required: true, message: '请选择预约日期' }],
    time: [{ required: true, message: '请选择预约时间' }],
    fail: [{ required: true, message: '请选择预约科室' }],
    doctor: [{ required: true, message: '请选择预约医生' }]
}
</script>
