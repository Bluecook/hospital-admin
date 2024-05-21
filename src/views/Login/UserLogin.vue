<!---->
<template>
  <div class="bg-skin-main-color absolute top-0 right-0 left-0">
    <headerTop :show="true"></headerTop>
  </div>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="options"
    class="w-full h-full -z-10 absolute"
  />
  <div
    class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8 bg-cyan-300 p-5 z-10">
      <a-form
        :model="loginState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item
          :label="t('setmsg.login.emailText')"
          name="email"
          :rules="[
            {
              required: true,
              message: `${t('setmsg.formRulesMsg.emailMsgText')}`,
            },
          ]"
        >
          <a-input v-model:value="loginState.email" placeholder="Your Email">
            <template #prefix>
              <IconFont name="icon-email"></IconFont>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          :label="t('setmsg.login.passwordText')"
          name="pwd"
          :rules="[
            {
              required: true,
              message: `${t('setmsg.formRulesMsg.passwordMsgText')}`,
            },
          ]"
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
        <a-form-item
          :label="t('setmsg.login.selectAccountText')"
          name="user"
          :rules="[
            {
              require: true,
              message: `${t('setmsg.formRulesMsg.accountMsgText')}`,
            },
          ]"
        >
          <a-radio-group v-model:value="account" @change="handleFill">
            <a-radio :value="0">{{ t("setmsg.login.adminText") }}</a-radio>
            <a-radio :value="1">{{ t("setmsg.login.userText") }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block shape="round">
            {{ t("setmsg.login.loginText") }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div>
      <a-modal
        v-model:visible="visible"
        title="人机验证"
        :closable="false"
        :footer="null"
      >
        <Slider ref="sliderImg"></Slider>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import { FormProps, message } from "ant-design-vue";
import { useRouter } from "vue-router";
// import 'ant-design-vue/es/message/style/css';
import http from "@/util/http";
import { loadFull } from "tsparticles";
import headerTop from "@/components/HeaderTop/headerTop.vue";
import Slider from "../Slider/Slider.vue";
import i18n from "@/i18n";
import { useStorage } from "@/util/hooks/useStorage";
const storage = useStorage();
const t = i18n.global.t;

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};

const sliderImg = ref();
const router = useRouter();

// 人机验证
const visible = ref<boolean>(false);

provide("isVisible", visible);

const showModal = () => {
  visible.value = true;
};

const handleOk = () => {
  visible.value = false;
  // 成功后重新生成验证图,当再次选择用户时需再次验证
  sliderImg.value.init();
  sliderImg.value.barLeft = 0;
};
provide("isOk", handleOk);
// 背景设置
const options = ref({
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
});

let loginState = ref({} as { email: string; pwd: string });

const account = ref<number>();

const handleFinish: FormProps["onFinish"] = (values) => {
  http.post("/login", values).then((res) => {
    const { code, msg, token, role } = res.data.data;
    if (code !== 200) {
      message.error(msg);
    } else {
      message.success(msg);
      storage.setItem("userrole", role, 60 * 60);
      storage.setItem("token", token, 60 * 60);
      // localStorage.setItem('userrole', role)
      // localStorage.setItem('token', token)
      router.push("/index");
    }
  });
};
const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  // console.log(errors);
  message.error("信息漏填");
};

const handleFill = (e: Event) => {
  const { value } = e.target as any;
  showModal();

  if (value == 0) {
    loginState.value = {
      email: "admin@163.com",
      pwd: "123456",
    };
  } else {
    loginState.value = {
      email: "user@163.com",
      pwd: "123456",
    };
  }
};
</script>
