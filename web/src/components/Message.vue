<template>
  <b-row>
    <b-col>
      <div
        class="message"
        :class="{'message--own': message.own}"
      >
        <div
          class="message__text"
          :class="{'message__text--own': message.own}"
        >
          {{ message.text }}
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      message: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .message {
    display: flex;
    margin-bottom: .5em;

    &--own {
      flex-direction: row-reverse;
    }

    &__text {
      display: inline-flex;
      background-color: #eee;
      border-radius: 0 1em 1em 1em;
      padding: .5em 2em;

      &--own {
        border-radius: 1em 0 1em 1em;
      }
    }
  }
</style>
