<!---->
<template>
    <div class="doctor p-5 md:flex">
        <div class="md:w-3/4 sm:w-full mr-3">
            <div class="download h-52 pt-2 pl-7 rounded-xl bg-[#1A0D68]">
                <p class="text-white text-lg">在线咨询</p>
                <p class="text-white text-lg">专业医生</p>
                <a-button type="primary" shape="round">下载App</a-button>
            </div>
            <div class="expert mt-5 pt-3 pb-7 bg-skin-main-color">
                <CommonTop title="专家医生" :show="true"></CommonTop>
                <div class="doctor-info pl-3 pr-3 flex flex-wrap">
                    <div class="md:w-[31%] sm:w-[45%] mt-4 ml-3 mb-4" v-for="item in doctorInfos" :key="item.id">
                        <a-card hoverable>
                            <template #cover>
                                <img alt="example" v-imglazy="item.imageUrl" />
                            </template>
                            <a-card-meta>
                                <template #description>
                                    <p>{{ item.name }}</p>
                                    <p>{{ item.department }}</p>
                                    <div class=" flex">
                                        <IconFont name="icon-QQ-circle-fill"></IconFont>
                                        <IconFont name="icon-wechat-fill"></IconFont>
                                        <IconFont name="icon-weibo-circle-fill"></IconFont>
                                    </div>
                                </template>

                            </a-card-meta>
                        </a-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:w-1/4 sm:w-full md:mt-0 sm:mt-4">
            <div class="appoint bg-skin-main-color p-3 mb-5">
                <a-form ref="formRef" name="custom-validation" :model="formState" :rules="rules" @finish="handleFinish"
                    @validate="handleValidate" @finishFailed="handleFinishFailed">
                    <a-form-item has-feedback name="userName">
                        <a-input v-model:value="formState.userName" autocomplete="off"
                            :placeholder="t('setmsg.appointForm.nameText')" />
                    </a-form-item>
                    <a-form-item has-feedback name="telephone">
                        <a-input v-model:value="formState.telephone" autocomplete="off"
                            :placeholder="t('setmsg.appointForm.phoneText')" />
                    </a-form-item>
                    <a-form-item has-feedback name="date">
                        <a-date-picker v-model:value="formState.date" :placeholder="t('setmsg.appointForm.dateText')" />
                    </a-form-item>
                    <a-form-item has-feedback name="time">
                        <!-- <a-input autocomplete="off" /> -->
                        <a-time-picker v-model:value="formState.time" format="HH:mm"
                            :placeholder="t('setmsg.appointForm.timeText')" />
                    </a-form-item>
                    <a-form-item has-feedback name="fail">
                        <a-select v-model:value="formState.fail" autocomplete="off"
                            :placeholder="t('setmsg.appointForm.selectAppointDepartmentText')"
                            :options="zdoctor.map(pro => ({ value: pro }))"></a-select>
                    </a-form-item>
                    <a-form-item has-feedback name="doctor">
                        <a-select v-model:value="formState.doctor" autocomplete="off"
                            :placeholder="t('setmsg.appointForm.selectAppointDoctorText')" :disabled="!formState.fail"
                            :options="doctors.map(city => ({ value: city }))"></a-select>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" shape="round">{{
                            t('setmsg.common.ObtainAnAppointmentText') }}</a-button>
                    </a-form-item>
                </a-form>
            </div>
            <New></New>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs, onMounted, provide, watch, computed } from 'vue'
import type { ComputedRef } from 'vue'
import New from '../Index/New.vue';
import CommonTop from '@/components/CommonTop/index.vue'
import http from '@/util/http';
import { doctorInfo } from '@/module/doctor_inter'
import type { Dayjs } from 'dayjs';
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';
import i18n from '@/i18n';
interface FormState {
    userName: string,
    telephone: number | string,
    'date': Dayjs;
    'time': string;
    fail: doctorType,
    doctor: string
}

const t = i18n.global.t
provide('title', '')

const doctorInfos = ref<Array<doctorInfo>>()
onMounted(() => {
    // 函数体
    http.get('/getDoctor').then((res) => {
        // console.log(res.data);
        doctorInfos.value = res.data.data
    })
})


const formRef = ref<FormInstance>();
const formState = reactive({} as FormState);

const zdoctor = ['脑科', '神经科']

const haveDoctor = {
    '脑科': ['张三', '李四', '王五'],
    '神经科': ['Tom', 'Jack']
}

type doctorType = keyof typeof haveDoctor

const selectDoctor = ref(zdoctor[0] as doctorType)

const doctors: ComputedRef<[]> = computed(() => {
    return haveDoctor[selectDoctor.value] as []
});

watch(
    () => formState.fail,
    val => {
        formState.doctor = haveDoctor[val][0];
    },
);


let validateName = async (_rule: Rule, value: string) => {
    console.log(value);
    if (value === undefined) {
        return Promise.reject('请输入姓名');
    } else {
        return Promise.resolve();
    }
};
let validateTel = async (_rule: Rule, value: string) => {
    if (value === undefined) {
        return Promise.reject('请输入电话号码');
    } else {
        return Promise.resolve();
    }
};

const rules: Record<string, Rule[]> = {
    userName: [{ required: true, validator: validateName, trigger: 'change' }],
    telephone: [{ required: true, validator: validateTel, trigger: 'change' }],
    date: [{ required: true, message: '选择预约日期', trigger: 'change' }],
    time: [{ required: true, message: '选择预约时间', trigger: 'change' }],
    fail: [{ required: true, message: '选择预约科室', trigger: 'change' }],
    doctor: [{ required: true, message: '选择预约医生', trigger: 'change' }]
};

const handleFinish = (values: FormState) => {
    console.log(values, formState);
};
const handleFinishFailed = (errors: any) => {
    console.log(errors);
};
const handleValidate = (...args: any[]) => {
    console.log(args);
};

</script>
