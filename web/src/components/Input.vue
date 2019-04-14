<template>
  <div class="message-input">
    <b-form
      class="container"
      @submit.prevent="handleInput"
    >
      <b-row>
        <b-col
          cols="7"
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
          cols="5"
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
    box-shadow: 0 0 4px 0 #ccc;
    background-color: #fff;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 1em;

    &__field,
    &__btn {
      margin-bottom: 1em;
      width: 100%;
    }
  }
</style>
