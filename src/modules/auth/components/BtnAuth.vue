<template>
  <q-btn
    no-caps
    class="text-bold button-menu"
    :label="buttonLabel"
    @click="buttonAction"
  />
</template>

<script>
import { call, get, sync } from 'vuex-pathify';

const LABEL = { AUTH: 'Register or Login', LOGOUT: 'Logout' };

export default {
  name: 'BtnAuth',
  computed: {
    ...sync('auth', ['showModal']),
    isAuth: get('auth/token'),
    buttonLabel() {
      return !this.isAuth ? LABEL.AUTH : LABEL.LOGOUT;
    },
  },
  methods: {
    ...call('auth', ['logout']),
    onLogout() {
      this.logout();
      this.$router.push({ name: 'home' });
    },
    buttonAction() {
      if (this.isAuth) {
        this.onLogout();
      } else {
        this.showModal = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .button-menu {
    background: #BD3C4B;
    color: white
  }
</style>
