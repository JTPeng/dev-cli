<template>
  <div>
    <h1>other</h1>
    <sonOne></sonOne>
  </div>
</template>

<script>
  import sonOne from '../components/sonOne.vue'
  export default {
    components: {
      sonOne,
    },
    data() {
      return {
        pageTitle: 'other',
      }
    },
  }
</script>
