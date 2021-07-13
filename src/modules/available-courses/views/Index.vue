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
        <course>
          <template #action>
            <q-btn
              label="Enroll"
              color="black"
              no-caps
              rounded
              class="q-px-lg"
              @click="showEnrollModal = true"
            />
          </template>
        </course>
      </div>
    </div>
    <enroll-modal v-model="showEnrollModal" />
  </div>
</template>

<script>
import Course from 'src/modules/common/components/Course/Course';
import EnrollModal from 'src/modules/available-courses/components/EnrollModal';

export default {
  name: 'Index',
  components: {
    Course,
    EnrollModal,
  },
  data() {
    return {
      showEnrollModal: false,
    };
  },
};
</script>

<style scoped>

</style>
