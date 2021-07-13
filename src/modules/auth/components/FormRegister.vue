<template>
  <div class="q-gutter-y-md full-width">
    <q-input
      v-model="fullName"
      clearable
      outlined
      label="Full name"
      placeholder="Enter your full name"
      clear-icon="close"
      color="black"
    />
    <q-input
      v-model="fullName"
      clearable
      outlined
      label="Username (Email Address)"
      placeholder="Enter your Email"
      clear-icon="close"
      color="black"
    />
    <q-input
      v-model="fullName"
      clearable
      outlined
      label="Your Password"
      placeholder="Enter your Password"
      hint="Minimum 6 characters"
      clear-icon="close"
      color="black"
    />
    <q-input
      v-model="fullName"
      clearable
      outlined
      label="Confirm your Password"
      placeholder="Confirm your Password"
      clear-icon="close"
      color="black"
    />
    <q-select
      v-model="model"
      outlined
      clearable
      :options="options"
      label="Country"
      placeholder="Select your Country"
      color="black"
      dropdown-icon="expand_more"
    />
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
export default {
  name: 'FormRegister',
  data() {
    return {
      fullName: '',
      model: '',
      options: [],
    };
  },
};
</script>

<style scoped>

</style>
