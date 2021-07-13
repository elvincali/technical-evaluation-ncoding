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
    <div class="row q-col-gutter-md">
      <div class="col-md-6 col-xs-12">
        <q-input
          v-model="fullName"
          clearable
          outlined
          type="date"
          label="dsadsd"
          clear-icon="close"
          color="black"
        />
      </div>
      <div class="col-md-6 col-xs-12">
        <q-input
          v-model="fullName"
          clearable
          outlined
          label="Gender"
          clear-icon="close"
          color="black"
        />
      </div>
      <div class="col-12">
        <q-input
          v-model="fullName"
          clearable
          outlined
          label="Address"
          clear-icon="close"
          color="black"
        />
      </div>
      <div class="col-12">
        <q-input
          v-model="fullName"
          clearable
          outlined
          label="Phone Number"
          clear-icon="close"
          color="black"
        />
      </div>
      <div class="col-md-6 col-xs-12">
        <q-input
          v-model="fullName"
          clearable
          outlined
          label="Preferred Language"
          clear-icon="close"
          color="black"
        />
      </div>
      <div class="col-md-6 col-xs-12">
        <q-select
          v-model="model"
          outlined
          clearable
          :options="options"
          label="Education Level"
          color="black"
          dropdown-icon="expand_more"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalDetails',
  data() {
    return {
      fullName: '',
      options: [],
      model: null,
    };
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
