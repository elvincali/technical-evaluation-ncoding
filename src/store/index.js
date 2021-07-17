import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
// import example from './module-example'
import login from 'src/modules/auth/store/login';
import auth from 'src/modules/auth/store/auth';
import signup from 'src/modules/auth/store/signup';
import availableCourses from 'src/modules/available-courses/store/availableCourses';
import enroll from 'src/modules/available-courses/store/enroll';
import myCourses from 'src/modules/my-courses/store/myCourses';

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      login,
      auth,
      signup,
      availableCourses,
      enroll,
      myCourses,
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
    plugins: [
      createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
      }),
    ],
  });

  return Store;
}
