<template>
  <h1>sonTwo</h1>
  <h3>{{ pageTitle }}</h3>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
        default: 'Index',
      },
    },
  }
</script>
