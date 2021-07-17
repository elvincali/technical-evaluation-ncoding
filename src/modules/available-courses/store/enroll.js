import { axios } from 'boot/axios';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state() {
    return {
      dateOfBirth: '1980-01-01',
      gender: '',
      address: '',
      phoneNumber: '',
      preferredLanguage: '',
      educationLevel: null,
      plan: null,
    };
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    setDateOfBirth(state, value) { state.dateOfBirth = value; },
    setGender(state, value) { state.gender = value; },
    setAddress(state, value) { state.address = value; },
    setPhoneNumber(state, value) { state.phoneNumber = value; },
    setPreferredLanguage(state, value) { state.preferredLanguage = value; },
    setEducationLevel(state, value) { state.educationLevel = value; },
    setPlan(state, value) { state.plan = value; },
  },
  actions: {
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
      commit('setDateOfBirth', '1980-01-01');
      commit('setGender', '');
      commit('setAddress', '');
      commit('setPhoneNumber', '');
      commit('setPreferredLanguage', '');
      commit('setEducationLevel', null);
      commit('setPlan', null);
    },
  },
};
