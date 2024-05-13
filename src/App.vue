
<template>
  <a-config-provider :locale="localeLang">
    <RouterView></RouterView>
  </a-config-provider>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/store/themeConfig'

// 全局变量
const { globalI18n } = toRefs(useThemeStore())
const { locale, messages }: any = useI18n()
const localeLang = ref(messages[globalI18n.value])

// 修改ant-design-vue 和 i18n 默认语言
const changeLanguage = () => {
  // console.log(locale.value);
  // console.log(messages.value[locale.value]);
  localeLang.value = messages.value[locale.value];
};

// 监听修改语言
watchEffect(changeLanguage);
</script>

