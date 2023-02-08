<script setup>
import { defineProps, computed } from 'vue'
import DateMessage from "./DateMessage.vue";
const props = defineProps({
  message: Object
})
</script>
<template>
  <div class="wrapperMessage border-2 shadow-lg p-4">
    <div class="text-left font-bold"><p>{{message.title}}</p></div>
    <div class="flex items-center justify-between"><a href="#" class="text-blue-700">{{message.titleFile}}</a> <img src="../assets/downloadFile.svg"  class="w-10" /> </div>
    <div class="text-left"><DateMessage :message="message" /></div>
  </div>
</template>

<style scoped>

</style>