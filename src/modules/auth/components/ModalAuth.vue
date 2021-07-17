<template>
  <div>
    <q-btn
      v-if="!$store.state.auth.token"
      no-caps
      class="text-bold button-menu"
      label="Register or Login"
      @click="showModal = true"
    />
    <q-btn
      v-else
      no-caps
      class="text-bold button-menu"
      label="Logout"
      @click="onLogout"
    />
    <q-dialog
      v-model="showModal"
      transition-show="slide-down"
      transition-hide="slide-up"
      position="top"
      content-class="my-dialog"
    >
      <q-card class="my-card">
        <q-toolbar
          class="bg-white q-toolbar--bordered justify-between"
          style="height: 60px"
        >
          <q-btn
            flat
            dense
            round
            icon="close"
            class="text-grey-8"
            @click="showModal = false"
          />
          <div class="text-black text-h6">
            Log in or sign up
          </div>
          <div></div>
        </q-toolbar>
        <div class="q-px-md-lg q-px-xs-md q-pt-sm q-pb-xl">
          <div class="text-h5 text-weight-bold text-center q-px-md q-py-sm">
            {{ title }}
          </div>
          <div class="row q-py-md q-px-md">
            <div class="col-md-6 col-xs-12">
              <btn-action
                label="Login"
                :active="currentAction === loginActionName"
                @click="currentAction = loginActionName"
              />
            </div>
            <div class="col-md-6 col-xs-12">
              <btn-action
                label="Sign Up"
                :active="currentAction === signupActionName"
                @click="currentAction = signupActionName"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md col-xs-12 q-pa-md">
              <div class="row content-center full-height">
                <component :is="currentActionComponent" @submitSuccess="submitSuccess" />
              </div>
            </div>
            <div class="col-md-auto col-xs-12 q-pa-md">
              <div class="column-md row-xs justify-center full-height">
                <div class="col row-md column-xs justify-center">
                  <div style="border: 1px solid #E7ECF8;"></div>
                </div>
                <div class="col-auto q-py-md-sm q-px-xs-sm">Or</div>
                <div class="col row-md column-xs justify-center">
                  <div style="border: 1px solid #E7ECF8;"></div>
                </div>
              </div>
            </div>
            <div class="col-md col-xs-12 q-pa-md">
              <div class="row content-center full-height">
                <external-auth />
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import FormRegister from 'src/modules/auth/components/FormRegister';
import FormLogin from 'src/modules/auth/components/FormLogin';
import ExternalAuth from 'src/modules/auth/components/ExternalAuth';
import BtnAction from 'src/modules/auth/components/BtnAction';
import { mapActions } from 'vuex';

const ACTION = { SIGNUP: 'signup', LOGIN: 'login' };

export default {
  name: 'ModalAuth',
  components: {
    FormRegister,
    FormLogin,
    ExternalAuth,
    BtnAction,
  },
  data() {
    return {
      showModal: false,
      currentAction: ACTION.SIGNUP,
    };
  },
  computed: {
    currentActionComponent() {
      return this.currentAction === ACTION.SIGNUP ? FormRegister : FormLogin;
    },
    title() {
      return this.currentAction === ACTION.SIGNUP ? 'Register as a new student' : 'Are you an existing student?';
    },
    signupActionName() {
      return ACTION.SIGNUP;
    },
    loginActionName() {
      return ACTION.LOGIN;
    },
  },
  methods: {
    ...mapActions('auth', ['logout']),
    onLogout() {
      this.logout();
      this.$router.push({ name: 'home' });
    },
    submitSuccess() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .button-menu {
    background: #BD3C4B;
    color: white
  }

  .my-card {
    margin-top: 42px;
    border-radius: 12px !important;
    width: 844px;
    max-width: 1366px;
  }
  .my-dialog {
    padding: 16px 0 68px;
  }

  .q-toolbar--bordered {
    border-bottom: 1px solid rgba(0, 20, 50, 0.1);
  }
</style>
