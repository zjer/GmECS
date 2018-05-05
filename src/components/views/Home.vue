<template>
  <div class="content">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import Main from '@/components/views/Main'
  export default {
    name: "Home",
    components: {
      Header,
      Main
    }
  }
</script>

<style scoped>
  .main {}
</style>
