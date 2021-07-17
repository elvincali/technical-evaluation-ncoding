<template>
  <div class="q-gutter-y-md">
    <div class="relative-position">
      <div class="img-default">
        <q-badge
          :label="category"
          text-color="black"
          class="q-badge--floating"
        />
      </div>
    </div>
    <div class="text-weight-bold">
      {{ title }}
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci aperiam asperiores consectetur dolorum,
      ducimus facilis fugiat ipsam magni modi mollitia nemo nihil
      omnis ratione reiciendis, sapiente vel vitae
      voluptatum. Velit.
    </p>
    <div class="q-gutter-x-xs">
      <q-icon
        name="start"
        color="black"
        style="font-size: 1.5em; display: inline-block"
      />
      <span class="text-weight-bold">4.5</span>
      <span class="text-grey-8">(422)</span>
    </div>
    <div class="q-gutter-x-xs">
      <q-icon
        name="access_time"
        color="black"
        style="font-size: 1.5em"
      />
      <span class="text-weight-bold">3:20hs</span>
    </div>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: 'Course',
  props: {
    category: {
      type: String,
      default: 'Java',
    },
    title: {
      type: String,
      default: 'Java Advanced',
    },
  },
};
</script>

<style lang="scss" scoped>
  .img-default {
    background: #F5F6F7;
    border-radius: 12px;
    height: 256px;
  }
  .q-badge--floating {
    position: absolute;
    top: 220px;
    left: 16px;
    right: auto;
    cursor: inherit;
    background: #DDE0E4;
    backdrop-filter: blur(40px);
    border-radius: 4px;
    padding: 4px 6px 6px;
  }
</style>
