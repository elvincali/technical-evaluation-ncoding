<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    hello() {
      console.log('hello');
    },
  },
};
</script>
<style lang = “scss”>
  /*body {
    font-family: Mulish, sans-serif
  }*/
</style>
