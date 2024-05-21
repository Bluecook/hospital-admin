<!---->
<template>
  <div class="register m-5 p-3 bg-skin-main-color">
    <CommonTop title="注册" :show="true"></CommonTop>
    <a-row :gutter="20">
      <a-form
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-col :span="12">
          <a-form-item
            label="姓氏"
            name="fristName"
            :rules="[{ required: true, message: '请输入你的姓氏' }]"
          >
            <a-input
              v-model:value="formState.fristName"
              placeholder="First Name"
            >
              <template #prefix>
                <IconFont name="icon-user"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="名字"
            name="lastName"
            :rules="[{ required: true, message: '请输入你的名字' }]"
          >
            <a-input v-model:value="formState.lastName" placeholder="Last Name">
              <template #prefix>
                <IconFont name="icon-user"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="电话"
            name="telephone"
            :rules="[{ required: true, message: '请输入你的电话' }]"
          >
            <a-input
              v-model:value="formState.telephone"
              placeholder="Your Phone"
            >
              <template #prefix>
                <IconFont name="icon-phone"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="邮箱"
            name="email"
            :rules="[{ required: true, message: '请输入你的邮箱' }]"
          >
            <a-input v-model:value="formState.email" placeholder="Your Email">
              <template #prefix>
                <IconFont name="icon-email"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入你的密码' }]"
          >
            <a-input
              v-model:value="formState.password"
              placeholder="Your Password"
              type="password"
            >
              <template #prefix>
                <IconFont name="icon-3701mima"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="确认密码"
            name="rePassword"
            :rules="[{ required: true, message: '两次密码不一致' }]"
          >
            <a-input
              v-model:value="formState.rePassword"
              placeholder="Confim"
              type="password"
            >
              <template #prefix>
                <IconFont name="icon-3701mima"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item>
            <a-button type="primary" html-type="submit" block shape="round">
              立即注册
            </a-button>
          </a-form-item>
        </a-col>
      </a-form>
    </a-row>
  </div>
  <div class="login m-5 p-3 bg-skin-main-color">
    <CommonTop title="登录" :show="true"></CommonTop>
    <a-row :gutter="20">
      <a-form
        layout="inline"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-col :span="12">
          <a-form-item
            label="邮箱"
            name="lemail"
            :rules="[{ required: true, message: '请输入你的邮箱' }]"
          >
            <a-input v-model:value="loginState.lemail" placeholder="Your Email">
              <template #prefix>
                <IconFont name="icon-email"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="密码"
            name="pwd"
            :rules="[{ required: true, message: '请输入你的密码' }]"
          >
            <a-input
              v-model:value="loginState.pwd"
              placeholder="Your Password"
              type="password"
            >
              <template #prefix>
                <IconFont name="icon-3701mima"></IconFont>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item>
            <a-button type="primary" html-type="submit" block shape="round">
              登录
            </a-button>
          </a-form-item>
        </a-col>
      </a-form>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import CommonTop from "@/components/CommonTop/index.vue";
import { reactive, ref, provide } from "vue";

import { reInfo } from "@/module/home_inter";
import { FormProps, message } from "ant-design-vue";
// import 'ant-design-vue/es/message/style/css';

provide("title", "");

let formState = ref({} as reInfo);

let loginState = ref({} as { lemail: string; pwd: string });

const handleFinish: FormProps["onFinish"] = (values) => {
  console.log(values, formState);
};
const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  // console.log(errors);
  message.error("信息漏填");
};
</script>
<style lang="less" scoped>
.ant-col-12 {
  margin-bottom: 12px;
}
</style>
