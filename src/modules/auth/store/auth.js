import { axios } from 'boot/axios';

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      user: null,
    };
  },
  getters: {
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    },
    setUser(state, value) {
      state.user = value;
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
