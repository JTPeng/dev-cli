<template>
  <button @click="btnClick">btnClick</button>
</template>

<script>
  import { toRef } from 'vue'

  export default {
    name: 'TotalButton',
    setup(props, { emit }) {
      const btnText = toRef(props, 'btnText').value
      const btnClick = () => {
        emit('handleClick')
      }
      return {
        btnText,
        btnClick,
      }
    },
  }
</script>
