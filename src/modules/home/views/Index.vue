<template>
  <div>
    <div class="text-h6 text-weight-bold q-mb-md">
      Available Courses
    </div>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-xl">
      <div
        v-for="n in 6"
        :key="`none-${n}`"
        class="col-xl-3 col-md-4 col-sm-6"
      >
        <course />
      </div>
    </div>
  </div>
</template>

<script>
import Course from 'src/modules/common/components/Course/Course';

export default {
  name: 'Index',
  components: {
    Course,
  },
};
</script>

<style scoped>

</style>
