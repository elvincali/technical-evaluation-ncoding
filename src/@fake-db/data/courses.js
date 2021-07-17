import mock from '../mock';

const data = {
  courses: [
    {
      id: 1,
      category: 'Java',
      title: 'Java Advanced',
      enrolled: false,
    },
    {
      id: 2,
      category: 'JavaScript',
      title: 'JavaScript Basic',
      enrolled: true,
    },
    {
      id: 3,
      category: 'Python',
      title: 'Python',
      enrolled: false,
    },
    {
      id: 4,
      category: 'UI/UX',
      title: 'UI/UX Design',
      enrolled: false,
    },
    {
      id: 5,
      category: 'Spring Boot',
      title: 'Spring Boot',
      enrolled: false,
    },
    {
      id: 6,
      category: 'Vue.js',
      title: 'Vue.js Advanced',
      enrolled: true,
    },
  ],
};

mock.onGet('/courses-available').reply(() => {
  const courses = data.courses.filter((course) => !course.enrolled);
  return [200, { data: courses }];
});

mock.onGet('/my-courses').reply(() => {
  const courses = data.courses.filter((course) => course.enrolled);
  return [200, { data: courses }];
});

mock.onPost('/course/enroll').reply((request) => {
  const { courseId } = JSON.parse(request.data);
  const course = data.courses.find((c) => c.id === Number(courseId));
  course.enrolled = true;

  return [200, { message: 'Enrolled in the course!' }];
});
