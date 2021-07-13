import availableCoursesRoutes from 'src/modules/available-courses/routes/availableCoursesRoutes';
import myCoursesRoutes from 'src/modules/my-courses/routes/myCoursesRoutes';
import homeRoutes from 'src/modules/home/routes/homeRoutes';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...homeRoutes,
      ...availableCoursesRoutes,
      ...myCoursesRoutes,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
