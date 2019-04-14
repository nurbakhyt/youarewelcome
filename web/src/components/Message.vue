<template>
  <b-row>
    <b-col :class="{'text-right': message.own}">
      {{ message.text }}
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

</style>
