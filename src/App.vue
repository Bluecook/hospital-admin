<template>
  <a-config-provider
    :locale="localeLang"
    :theme="{
      ...themeStyle,
    }"
  >
    <Watermark v-bind="model"> <RouterView></RouterView></Watermark>
  </a-config-provider>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, watchEffect, provide } from "vue";
import { useI18n } from "vue-i18n";
import { useThemeStore } from "@/store/themeConfig";
import { Watermark, theme } from "ant-design-vue";

// 全局变量
const { globalI18n, themeType } = toRefs(useThemeStore());
const { locale, messages }: any = useI18n();
const localeLang = ref(messages[globalI18n.value]);
const model = reactive({
  content: ["页面仅做展示效果", "不做任何数据处理", "业务逻辑"],
  font: {
    fontSize: 16,
    color: "rgba(255,0,0,.4)",
  },
  rotate: -22,
  gap: [50, 50] as [number, number],
  zIndex: 999,
});
// 修改ant-design-vue 和 i18n 默认语言
const changeLanguage = () => {
  // console.log(locale.value);
  // console.log(messages.value[locale.value]);
  localeLang.value = messages.value[locale.value];
};
// console.log(themeType.value == theme.darkAlgorithm);

const themeStyle = ref({
  algorithm: theme.defaultAlgorithm,
});
const changeTheme = (change: boolean) => {
  if (change) {
    themeStyle.value.algorithm = theme.defaultAlgorithm;
  } else {
    themeStyle.value.algorithm = theme.darkAlgorithm;
  }
};
provide("theme", {
  changeTheme,
});

// 监听修改语言
watchEffect(changeLanguage);
</script>
