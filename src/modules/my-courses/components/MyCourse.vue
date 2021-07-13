<template>
  <div class="q-gutter-y-md">
    <course />
    <q-btn
      label="View Details"
      color="black"
      no-caps
      rounded
      class="q-px-sm"
    />
  </div>
</template>
<script>
import Course from 'src/modules/common/components/Course/Course';

export default {
  name: 'MyCourse',
  components: {
    Course,
  },
};
</script>

<style scoped>

</style>
