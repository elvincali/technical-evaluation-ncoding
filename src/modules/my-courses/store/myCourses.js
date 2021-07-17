import { axios } from 'boot/axios';

export default {
  namespaced: true,
  state() {
    return {
      courses: [],
    };
  },
  mutations: {
    setCourses(state, value) {
      state.courses = value;
    },
  },
  actions: {
    async getCourses({ commit }) {
      try {
        const { data } = await axios.get('/my-courses');
        commit('setCourses', data.data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};
