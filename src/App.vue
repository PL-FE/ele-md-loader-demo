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
.page-component .content>table {
  color: red;
}
</style>
