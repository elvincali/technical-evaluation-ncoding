<template>
  <validation-observer v-slot="{ handleSubmit }" slim>
    <form
      class="full-width"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <ValidationProvider
        v-slot="{ errors, invalid, validated }"
        name="Username"
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
        name="password"
        rules="required"
      >
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
          :error="invalid && validated"
          :error-message="errors[0]"
        >
          <template #hint>
            <div class="text-right">
              Forgot password?
            </div>
          </template>
        </q-input>
      </ValidationProvider>
      <q-btn
        no-caps
        rounded
        color="black"
        label="Continue"
        class="full-width q-py-sm q-mt-md"
        type="submit"
      />
    </form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { sync, call } from 'vuex-pathify';

// eslint-disable-next-line no-unused-vars
import { email, required } from 'src/@core/utils/validations/validations';

export default {
  name: 'FormLogin',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
    };
  },
  computed: {
    ...sync('login', ['email', 'password']),
  },
  methods: {
    ...call('login', ['login']),
    async onSubmit() {
      try {
        await this.login();
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
