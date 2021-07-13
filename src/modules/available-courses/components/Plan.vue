<template>
  <div class="cursor-pointer" :class="active ? 'plan-container' : 'plan-container-inactive'">
    <div class="q-px-lg q-py-md" :class="{ 'plan-container-layer-two': active }">
      <div class="column justify-center items-center q-gutter-y-xs">
        <div class="text-h6">
          PIF (pay in Full)
        </div>
        <div class="text-muted">
          $6,795
        </div>
        <div class="title-step text-weight-bold">
          $4,795
        </div>
      </div>
      <div class="separator-plan q-my-md" />
      <div class="column justify-center items-center q-gutter-y-xs">
        <div>
          Save $1500 in tuition
        </div>
        <div class="">
          No processing fees
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  props: {
    active: {
      type: Boolean,
      default: false,
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
  .plan-container {
    border: 4px solid rgba(44, 165, 219, 0.15);
    border-radius: 12px;
  }
  .plan-container-layer-two {
    border: 2px solid #2CA5DB;
    box-sizing: border-box;
    border-radius: 12px;
  }
  .plan-container-inactive {
    border: 1px solid #DBE1E6;
    box-sizing: border-box;
    border-radius: 12px;
  }
  .separator-plan {
    border: 1px solid rgba(23, 29, 34, 0.08);
  }
</style>
