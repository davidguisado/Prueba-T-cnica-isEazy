<template>
  <div class="w-full">
    <div class="flex justify-around">
      <input type="text" v-model="textMessage" class="rounded-full w-10/12 border-2 bg-MessageReceived" @keyup.enter="sendMessage">
      <img src="../assets/sendMessage.svg" class="w-10 cursor-pointer" @click="sendMessage">
    </div>
    <div class="errorMessage text-red-600" v-if="errorMessage.length > 0">
      {{errorMessage}}
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {messagesStore} from "../stores/messagesStore.js";
export default {
  name: "Form",
  setup() {
    const textMessage = ref('');
    const errorMessage = ref('');
    const messages = messagesStore()
    function sendMessage() {
      if (textMessage.value.length > 0 ) {
        messages.addNewMessage({
          isSender: true,
          isFile: false,
          content: textMessage.value,
          dateTime: Math.floor(Date.now() / 1000),
          iconUser: 'https://www.un.org/sites/un2.un.org/files/2021/02/unwomen-5.png'
        });
        textMessage.value = '';
        errorMessage.value = '';
      } else {
        errorMessage.value = 'No se puede enviar un mensaje vacío.';
      }
    }
    return {sendMessage, textMessage, messages, errorMessage}
  }
}
</script>

<style scoped>

</style>