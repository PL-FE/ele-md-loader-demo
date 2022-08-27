<template>
  <div id="app">
    <Guide />
  </div>
</template>

<script>
import Guide from '@/components/.components/Guide.vue'
export default {
  name: 'App',
  components: {
    Guide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
