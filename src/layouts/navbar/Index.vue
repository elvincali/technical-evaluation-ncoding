<template>
  <q-toolbar
    class="bg-white q-toolbar--bordered justify-between"
    style="height: 70px"
  >
    <q-btn
      v-if="$q.platform.is.mobile"
      flat
      dense
      round
      icon="menu"
      color="black"
      aria-label="Menu"
      @click="leftDrawerOpen = !leftDrawerOpen"
    />
    <q-drawer
      v-if="$q.platform.is.mobile"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-black text-weight-bold"
        >
          Menu
        </q-item-label>
        <q-item-label
          header
          class="text-grey-8"
          @click="$router.push({ name: 'home' })"
        >
          Inicio
        </q-item-label>
        <q-item-label
          header
          class="text-grey-8"
          @click="$router.push({ name: 'available-courses' })"
        >
          Available Courses
        </q-item-label>
        <q-item-label
          header
          class="text-grey-8"
          @click="$router.push({ name: 'my-courses' })"
        >
          My Courses
        </q-item-label>
      </q-list>
    </q-drawer>
    <div
      class="text-black text-h3 text-weight-bold cursor-pointer"
      @click="$router.push({ name: 'home' })"
    >
      Logo
    </div>
    <div class="desktop-only text-center text-black flex justify-center q-gutter-xl">
      <menu-item
        active
        title="Available Courses"
        @click.native="$router.push({ name: 'available-courses' })"
      />
      <menu-item
        title="Continuing Education"
      />
      <menu-item
        title="My Courses"
        @click.native="$router.push({ name: 'my-courses' })"
      />
      <menu-item
        title="Community"
      />
    </div>
    <modal-auth />
  </q-toolbar>
</template>

<script>
import ModalAuth from 'src/modules/auth/components/ModalAuth';
import MenuItem from './components/MenuItem.vue';

export default {
  name: '',
  components: {
    MenuItem,
    ModalAuth,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {},
};
</script>

<style type="scss" scoped>
  .q-toolbar--bordered {
    border-bottom: 1px solid rgba(0, 20, 50, 0.1);
  }
</style>
