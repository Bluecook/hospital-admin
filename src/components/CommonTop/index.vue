<!---->
<template>
    <div class="p-3 w-full flex justify-between items-center bg-skin-main-color">
        <span v-if="props.show">{{ props.title }}</span>
        <span>{{ msg }}</span>
        <div class="flex cursor-pointer">
            <IconFont name="icon-xiazai" v-show="props.download ? props.download : false"> </IconFont>
            <IconFont name="icon-more"> </IconFont>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { inject } from 'vue'


const props = defineProps<{ show?: boolean, title?: string, download?: boolean }>()

const msg = inject('title')

</script>