<template>
  <div>
    <div class="text-h6 text-weight-bold q-mb-md">
      Available Courses
    </div>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-xl">
      <div
        v-for="course in courses"
        :key="course.id"
        class="col-xl-3 col-md-4 col-sm-6"
      >
        <course :category="course.category" :title="course.title">
          <template #action>
            <q-btn
              label="Enroll"
              color="black"
              no-caps
              rounded
              class="q-px-lg"
              @click="enrollModal(course)"
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
import { get, sync, call } from 'vuex-pathify';

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
  computed: {
    ...get('availableCourses', ['courses']),
    ...sync('availableCourses', ['courseForEnroll']),
  },
  created() {
    this.getCourses();
  },
  methods: {
    ...call('availableCourses', ['getCourses']),
    enrollModal(course) {
      this.courseForEnroll = course;
      this.showEnrollModal = true;
    },
  },
};
</script>

<style scoped>

</style>
