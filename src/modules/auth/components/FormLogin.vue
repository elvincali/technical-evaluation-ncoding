<template>
  <div class="q-gutter-y-lg full-width">
    <q-input
      v-model="email"
      clearable
      outlined
      label="Username (Email Address)"
      placeholder="Enter your Email"
      clear-icon="close"
      color="black"
    />
    <q-input
      v-model="password"
      clearable
      outlined
      label="Your Password"
      placeholder="Enter your Password"
      clear-icon="close"
      color="black"
      type="password"
      bottom-slots
    >
      <template #hint>
        <div class="text-right">
          Forgot password?
        </div>
      </template>
    </q-input>
    <q-btn
      no-caps
      rounded
      color="black"
      label="Continue"
      class="full-width q-py-sm"
    />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'FormLogin',
  data() {
    return {
      fullName: '',
    };
  },
  computed: {
    ...mapFields('login', ['email', 'password']),
  },
};
</script>

<style scoped>

</style>
