<template>
  <div class="app">
    <chat-header/>

    <div class="messages-list">
      <b-container>
        <message
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
          b-container
        />
      </b-container>
    </div>

    <message-input @inputMessage="addedMessage"/>
  </div>
</template>

<script>
import axios from 'axios';
import Message from './components/Message';
import MessageInput from './components/Input';
import ChatHeader from './components/Header';

export default {
  name: 'Chat',
  components: {
    Message,
    MessageInput,
    ChatHeader
  },
  data () {
    return {
      messages: []
    }
  },
  methods: {
    addedMessage (msg) {
      this.messages.push({
        text: msg,
        own: true
      });

      const data = new FormData();
      data.append('q', msg);

      axios.post('/api/get-answer', data)
        .then(response => {
          if (response.data.ok) {
            this.messages.push({
              text: response.data.a,
              own: false
            });
          } else {
            this.messages.push({
              text: 'Произошла ошибка, повторите еще раз..',
              own: false
            });
          }

          window.scrollTo(0, document.body.scrollHeight);
        })
        .catch(() => {
          this.messages.push({
            text: 'Нет соединения, проверьте связь..',
            own: false
          });

          window.scrollTo(0, document.body.scrollHeight);
        });
    }
  }
}
</script>

<style lang="scss">
  .app {
    padding-bottom: 140px;
    overflow-y: auto;
  }
  .messages-list {
    padding-top: 2em;
  }
</style>
