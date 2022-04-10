<template>
  <h1>sonThree</h1>
  <button @click="handleClick">handleClick</button>
</template>

<script>
  import { toRefs } from 'vue'

  export default {
    props: {
      pageTitle: String,
    },
    setup(props, ctx) {
      const { pageTitle } = toRefs(props)
      console.log('pageTitle', pageTitle.value)
      console.log('props', props)
      console.log('ctx', ctx)
      const handleClick = () => {
        ctx.emit('handleClick', 'handleClick')
      }
      return {
        handleClick,
      }
    },
  }
</script>
<!-- <script setup></script> -->
