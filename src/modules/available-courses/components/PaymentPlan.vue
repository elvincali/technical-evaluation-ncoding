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
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="col-md-6 col-xs-12"
      >
        <plan
          :id="plan.id"
          :title="plan.title"
          :price="plan.price"
          :offer="plan.offer"
          :details="plan.details"
          :active="plan.id === planSelected.id"
          @click="selectPlan"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Plan from 'src/modules/available-courses/components/Plan';
import { data } from 'src/@fake-db/data/enroll';

export default {
  name: 'PaymentPlan',
  components: {
    Plan,
  },
  data() {
    return {
      planSelected: data.plans[0],
      plans: data.plans,
    };
  },
  methods: {
    selectPlan(id) {
      this.planSelected = this.plans.find((plan) => plan.id === id);
    },
    validate() {
      return true;
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
