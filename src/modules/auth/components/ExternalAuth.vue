<template>
  <div class="q-gutter-y-md">
    <q-btn
      v-for="option in options"
      :key="option.logo"
      no-caps
      unelevated
      class="full-width"
      style="background: rgba(29, 29, 31, 0.05); height: 44px"
    >
      <div class="col-2">
        <q-icon :name="`svguse:icons.svg#${option.logo}`" />
      </div>
      <div class="col">
        <span class="text-black text-center">
          {{ option.name }}
        </span>
      </div>
    </q-btn>
    <div id="terms" class="text-center">
      Protected by reCAPTCHA and Google's <a href="#">Privacy</a>
      and <a href="#">Terms</a>.
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExternalAuth',
  data() {
    return {
      options: [
        { logo: 'linkedin-logo', name: 'Continue with Linkedin' },
        { logo: 'facebook-logo', name: 'Continue with Facebook' },
        { logo: 'instagram-logo', name: 'Continue with Instagram' },
        { logo: 'google-logo', name: 'Continue with Google' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
 #terms {
   font-size: 0.6875rem;
   a {
     color: $primary;
   }
 }
</style>
