<!---->
<template>
    <div class="p-3 w-full flex justify-between items-center bg-skin-main-color">
        <span v-if="props.show">{{ props.title }}</span>
        <span>{{ msg }}</span>
        <div class="flex">
            <IconFont name="icon-xiazai"> </IconFont>
            <IconFont name="icon-more"> </IconFont>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { defineProps, inject } from 'vue'
import type { PropType } from '@vue/runtime-core';


const props = defineProps({
    title: String as PropType<string>,
    show: Boolean as PropType<boolean>
})

const msg = inject('title')

</script>