/* eslint-disable no-shadow */
import { make } from 'vuex-pathify';
import { axios } from 'boot/axios';

const state = () => ({
  dateOfBirth: '1980-01-01',
  gender: '',
  address: '',
  phoneNumber: '',
  preferredLanguage: '',
  educationLevel: null,
  plan: null,
});

const mutations = make.mutations(state);

const actions = {
  async enroll({ state, rootState, dispatch }) {
    try {
      const params = {
        dateOfBirth: state.dateOfBirth,
        gender: state.gender,
        address: state.address,
        phoneNumber: state.phoneNumber,
        preferredLanguage: state.preferredLanguage,
        educationLevelId: state.educationLevel.id,
        planId: state.plan,
        courseId: rootState.availableCourses.courseForEnroll.id,
      };
      const { data } = await axios.post('/course/enroll', params);
      dispatch('reset');
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  reset({ commit }) {
    commit('SET_DATE_OF_BIRTH', '1980-01-01');
    commit('SET_GENDER', '');
    commit('SET_ADDRESS', '');
    commit('SET_PHONE_NUMBER', '');
    commit('SET_PREFERRED_LANGUAGE', '');
    commit('SET_EDUCATION_LEVEL', null);
    commit('SET_PLAN', null);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
