import { axios } from 'boot/axios';

export default {
  namespaced: true,
  state() {
    return {
      courses: [],
    };
  },
  getters: {
  },
  mutations: {
    setCourses(state, value) {
      state.courses = value;
    },
  },
  actions: {
    async getCourses({ commit }) {
      try {
        const { data } = await axios.get('/courses-available');
        commit('setCourses', data.data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};
