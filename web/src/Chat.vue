<template>
  <div class="app">
    <b-container>
      <div class="messages-list">
        <message
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
          b-container
        />
      </div>
    </b-container>

    <message-input @inputMessage="addedMessage"/>
  </div>
</template>

<script>
import axios from 'axios';
import Message from './components/Message';
import MessageInput from './components/Input';

export default {
  name: 'Chat',
  components: {
    Message,
    MessageInput
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

  }
</style>
