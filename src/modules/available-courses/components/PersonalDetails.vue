<template>
  <div>
    <div class="row q-col-gutter-y-sm q-mb-md">
      <div class="col-12 text-center">
        <span class="title-step">
          Personal Details
        </span>
      </div>
      <div class="col-12 text-center">
        <span class="text-muted">
          Have questions about the application? Want some more info? Call us! 65170024
        </span>
      </div>
    </div>
    <validation-observer ref="form" slim>
      <form>
        <div class="row q-col-gutter-md">
          <div class="col-md-6 col-xs-12">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Date Of Birth"
              rules="required"
            >
              <q-input
                v-model="dateOfBirth"
                clearable
                outlined
                type="date"
                label="Date Of Birth"
                clear-icon="close"
                color="black"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-md-6 col-xs-12">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Gender"
              rules="required"
            >
              <q-input
                v-model="gender"
                clearable
                outlined
                label="Gender"
                clear-icon="close"
                color="black"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-12">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Address"
              rules="required"
            >
              <q-input
                v-model="address"
                clearable
                outlined
                label="Address"
                clear-icon="close"
                color="black"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-12">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Phone Number"
              rules="required"
            >
              <q-input
                v-model="phoneNumber"
                clearable
                outlined
                label="Phone Number"
                clear-icon="close"
                color="black"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-md-6 col-xs-12">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Preferred Language"
              rules="required"
            >
              <q-input
                v-model="preferredLanguage"
                clearable
                outlined
                label="Preferred Language"
                clear-icon="close"
                color="black"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-md-6 col-xs-12">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Education Level"
              rules="required"
            >
              <q-select
                v-model="educationLevel"
                outlined
                clearable
                :options="options"
                label="Education Level"
                option-label="name"
                color="black"
                dropdown-icon="expand_more"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { sync } from 'vuex-pathify';

// eslint-disable-next-line no-unused-vars
import { email, required } from 'src/@core/utils/validations/validations';

export default {
  name: 'PersonalDetails',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      options: [
        { id: 1, name: 'University' },
        { id: 2, name: 'Institute' },
        { id: 3, name: 'Other' },
      ],
    };
  },
  computed: {
    ...sync('enroll', ['dateOfBirth', 'gender', 'address', 'phoneNumber', 'preferredLanguage', 'educationLevel']),
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
  .title-step {
    font-size: 1rem;
  }
  .text-muted {
    font-size: 0.75rem;
    color: rgba(23, 29, 34, 0.5);
  }
</style>
