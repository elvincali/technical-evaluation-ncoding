const BASE_NAME = 'my-courses';
const BASE_PATH = `/${BASE_NAME}`;

export default [
  {
    path: BASE_PATH,
    name: BASE_NAME,
    component: () => import('../views/Index.vue'),
    meta: {
      forAuth: true,
    },
  },
];
