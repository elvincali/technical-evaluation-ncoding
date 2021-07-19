/* eslint-disable no-shadow */
import { make } from 'vuex-pathify';
import { axios } from 'boot/axios';

const state = () => ({
  courses: [],
});

const mutations = make.mutations(state);

const actions = {
  async getCourses({ commit }) {
    try {
      const { data } = await axios.get('/my-courses');
      commit('SET_COURSES', data.data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
