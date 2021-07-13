<template>
  <q-btn
    :ripple="false"
    flat
    rounded
    no-caps
    color="white"
    text-color="black"
    :label="label"
    class="full-width btn-action"
    :class="{ 'btn-active': active }"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'BtnAction',
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn-active {
    border: 2px solid black;
  }
  .btn-action {
    background: #F5F6F7;
  }
</style>
