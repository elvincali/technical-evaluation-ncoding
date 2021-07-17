<template>
  <validation-observer v-slot="{ handleSubmit }" slim>
    <q-form
      class="full-width"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <ValidationProvider
        v-slot="{ errors, invalid, validated }"
        name="Full Name"
        rules="required"
      >
        <q-input
          v-model="fullName"
          clearable
          outlined
          label="Full name"
          placeholder="Enter your full name"
          clear-icon="close"
          color="black"
          :error="invalid && validated"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors, invalid, validated }"
        name="Email"
        rules="required|email"
      >
        <q-input
          v-model="email"
          clearable
          outlined
          label="Username (Email Address)"
          placeholder="Enter your Email"
          clear-icon="close"
          color="black"
          :error="invalid && validated"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors, invalid, validated }"
        name="Password"
        rules="required|min:6|confirmed:confirmation"
      >
        <q-input
          v-model="password"
          clearable
          outlined
          label="Your Password"
          placeholder="Enter your Password"
          hint="Minimum 6 characters"
          clear-icon="close"
          color="black"
          type="password"
          :error="invalid && validated"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors, invalid, validated }"
        name="Password"
        vid="confirmation"
      >
        <q-input
          v-model="passwordConfirm"
          clearable
          outlined
          label="Confirm your Password"
          placeholder="Confirm your Password"
          clear-icon="close"
          color="black"
          type="password"
          :error="invalid && validated"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors, invalid, validated }"
        name="Country"
        rules="required"
      >
        <q-select
          v-model="country"
          outlined
          clearable
          :options="options"
          label="Country"
          option-label="name"
          placeholder="Select your Country"
          color="black"
          dropdown-icon="expand_more"
          :error="invalid && validated"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <q-btn
        no-caps
        rounded
        color="black"
        label="Continue"
        class="full-width q-py-sm q-mt-md"
        type="submit"
      />
    </q-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';

import {
  // eslint-disable-next-line no-unused-vars
  email, required, confirmed, min,
} from 'src/@core/utils/validations/validations';

export default {
  name: 'FormRegister',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      options: [
        { id: 1, name: 'Lamentis' },
        { id: 2, name: 'Asgard' },
        { id: 3, name: 'United States' },
        { id: 4, name: 'Mexico' },
        { id: 5, name: 'Noruega' },
        { id: 5, name: 'Titan' },
      ],
    };
  },
  computed: {
    ...mapFields('signup', ['fullName', 'email', 'password', 'passwordConfirm', 'country']),
  },
  methods: {
    ...mapActions('signup', ['signup']),
    async onSubmit() {
      try {
        await this.signup();
        this.$emit('submitSuccess', true);
        await this.$router.push({ name: 'available-courses' });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>

</style>
