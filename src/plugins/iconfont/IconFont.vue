<script lang="ts" setup>
defineProps<{ name: string, width?: string, height?: string }>();
</script>
<template>
  <span role="img" style="line-height: 1">
    <svg fill="currentColor" style="vertical-align: top" :width="`${width ? width : 1}em`"
      :height="`${width ? width : 1}em`" aria-hidden="true">
      <use :xlink:href="`#${name}`"></use>
    </svg>
  </span>
</template>
