<template>
  <div
    class="cursor-pointer"
    @mouseover="showMenu = true"
    @mouseout="showMenu = false"
  >
    <span :class="{ 'text-weight-bold': active }">
      {{ title }}
    </span>
    <q-icon
      :name="nameIconArrow"
      size="sm"
    />
    <q-menu
      v-model="showMenu"
      auto-close
    >
      <q-list
        dense
        style="min-width: 100px"
      >
        <q-item
          v-close-popup
          clickable
        >
          <q-item-section>Open...</q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
        >
          <q-item-section>New</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    nameIconArrow() {
      return this.showMenu ? 'arrow_drop_up' : 'arrow_drop_down';
    },
  },
};
</script>

<style scoped>

</style>
