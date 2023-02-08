
<script setup>
import Modal from "./components/Modal.vue"
import {messagesStore} from './stores/messagesStore.js';
import Message from "./components/Message.vue";
import FileMessage from "./components/FileMessage.vue";
import Form from "./components/Form.vue";
const messages = messagesStore()
</script>
<template>
  <Modal>
    <template v-slot:header>Comentarios</template>

    <template v-slot:body>
      <template v-for="message in messages.getOrderedMessages">
        <Message v-if="!message.isFile" :message="message"/>
        <FileMessage v-else :message="message" />
      </template>
    </template>

    <template v-slot:footer>
      <Form />
    </template>
  </Modal>
</template>

<style scoped>

</style>
