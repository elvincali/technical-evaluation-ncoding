<template>
  <div>
    <div class="row q-col-gutter-y-sm q-mb-md">
      <div class="col-12 text-center">
        <span class="title-step">
          Payment Plan
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
        <plan active />
      </div>
      <div class="col-md-6 col-xs-12">
        <plan />
      </div>
      <div class="col-md-6 col-xs-12">
        <plan />
      </div>
      <div class="col-md-6 col-xs-12">
        <plan />
      </div>
    </div>
  </div>
</template>

<script>
import Plan from 'src/modules/available-courses/components/Plan';

export default {
  name: 'PaymentPlan',
  components: {
    Plan,
  },
  data() {
    return {
      plans: [
        {},
      ],
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
