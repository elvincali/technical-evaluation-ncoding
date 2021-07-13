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

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default {
  name: 'MainLayout',
  components: {
    Navbar,
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>

<style type="scss" scoped>
  .q-toolbar--bordered {
    border-bottom: 1px solid rgba(0, 20, 50, 0.1);
  }
</style>
