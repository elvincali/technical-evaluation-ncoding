<template>
  <div>
    <div class="text-h6 text-weight-bold q-mb-md">
      My Courses
    </div>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-xl">
      <div
        v-for="n in 3"
        :key="`none-${n}`"
        class="col-xl-3 col-md-4 col-sm-6"
      >
        <course>
          <template #action>
            <q-btn
              label="View Details"
              color="black"
              no-caps
              rounded
              class="q-px-sm"
            />
          </template>
        </course>
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
