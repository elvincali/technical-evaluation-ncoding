const BASE_NAME = '';
const BASE_PATH = `/${BASE_NAME}`;

export default [
  {
    path: BASE_PATH,
    name: 'home',
    component: () => import('../views/Index.vue'),
    meta: {
    },
  },
];
