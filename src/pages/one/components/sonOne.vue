<template>
  <h1>sonOne</h1>
  <h3>{{ count }}</h3>
  <button @click="btnClick">btnClick</button>
  <sonTwo v-bind="$attrs"></sonTwo>
</template>

<script>
  import sonTwo from './sonTwo.vue'
  export default {
    components: {
      sonTwo,
    },
    data() {
      return {
        count: 0,
      }
    },
    methods: {
      btnClick() {
        this.count++
      },
    },
  }
</script>
