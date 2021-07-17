<template>
  <div>
    <div class="text-h6 text-weight-bold q-mb-md">
      My Courses
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Index',
  components: {
    Course,
  },
  computed: {
    ...mapState('myCourses', ['courses']),
  },
  created() {
    this.getCourses();
  },
  methods: {
    ...mapActions('myCourses', ['getCourses']),
  },
};
</script>

<style scoped>

</style>
