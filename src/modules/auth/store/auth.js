import { getField, updateField } from 'vuex-map-fields';
import { axios } from 'boot/axios';

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      user: null,
      showModal: false,
    };
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    setToken(state, value) {
      state.token = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setShowModal(state, value) {
      state.showModal = value;
    },
  },
  actions: {
    setToken({ commit }, { token, user }) {
      commit('setToken', token);
      commit('setUser', user);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    logout({ commit }) {
      commit('setToken', null);
      commit('setUser', null);
    },
  },
};
