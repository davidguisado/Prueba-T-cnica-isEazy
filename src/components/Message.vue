<script setup>
import {computed} from "vue";
import DateMessage from "./DateMessage.vue";

const props = defineProps({
  message: Object
})
</script>
<template>
  <div class="wrapper flex text-left  " :class="message.isSender ? 'justify-end' : 'justify-start'">
    <div class="flex wrapperMessage flex items-center" :class="message.isSender ? 'justify-end' : 'justify-start'">
      <div class="wrapperIconuser" v-if="!message.isSender">
        <img class="rounded-full w-10" :src="message.iconUser">
      </div>
      <div class="wrapperContentMessage max-w-max min-w-fit p-5" :class="message.isSender ? 'bg-MessageSent text-white' : 'bg-MessageReceived'">
        <div class="flex items-center justify-between"><p>{{message.content}}</p></div>
        <div class="text-left"> <DateMessage :message="message" /></div>
      </div>
      <div class="wrapperIconuser" v-if="message.isSender">
        <img class="rounded-full w-10" :src="message.iconUser">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>