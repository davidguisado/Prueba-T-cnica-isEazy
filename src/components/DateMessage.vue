<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  message: Object
})
const dateFormatted = computed(() => {
  const date = new Date(parseFloat(props.message.dateTime) * 1000);
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return date.getDate() + " " + date.toLocaleDateString('default', {month:'short'}) + " " + date.getFullYear() + " / " + date.getHours() + ":" + minutes;
})
</script>
<template>
  <span> {{message.infoFile}} {{dateFormatted}}</span>
</template>

<style scoped>

</style>