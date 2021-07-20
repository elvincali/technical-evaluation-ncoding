<template>
  <q-layout view="lHh Lpr lff">
    <q-header>
      <navbar />
    </q-header>

    <q-page-container>
      <q-page class="q-px-xl q-py-xl">
        <router-view />
      </q-page>
      <div style="height: 10rem"></div>
    </q-page-container>
    <q-footer>
      <q-toolbar
        class="justify-center q-gutter-x-md q-ma-none"
        style="height: 70px; background: #333F48"
      >
        <span>© 2021 NCoding®</span>
        <span>Regulatory Information</span>
        <span>Terms of Use & Privacy Policy</span>
        <span>Careers</span>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import Navbar from './navbar/Index.vue';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style type="scss" scoped>
  .q-toolbar--bordered {
    border-bottom: 1px solid rgba(0, 20, 50, 0.1);
  }
</style>
