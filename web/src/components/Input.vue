<template>
  <div class="message-input">
    <b-form
      class="container"
      @submit.prevent="handleInput"
    >
      <b-row>
        <b-col
          xs="6"
          sm="8"
          md="9"
        >
          <b-form-input
            autocomplete="off"
            v-model="message"
            type="text"
            class="message-input__field"
            placeholder="Введите вопрос"
          />
        </b-col>
        <b-col
          xs="6"
          sm="4"
          md="3"
        >
          <b-button
            :disabled="message === ''"
            type="submit"
            variant="primary"
            class="message-input__btn"
          >
            Отправить
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'MessageInput',
    data () {
      return {message: ''}
    },
    methods: {
      handleInput () {
        this.$emit('inputMessage', this.message);
        this.message = '';
      }
    }
  }
</script>

<style lang="scss">
  .message-input {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 1em;
    padding-bottom: 1em;

    &__field,
    &__btn {
      margin-bottom: 1em;
      width: 100%;
    }
  }
</style>
