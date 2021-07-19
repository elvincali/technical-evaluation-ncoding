/* eslint-disable no-shadow */
import { make } from 'vuex-pathify';
import { axios } from 'boot/axios';

const state = () => ({
  token: null,
  user: null,
  showModal: false,
});

const mutations = make.mutations(state);

const actions = {
  setToken({ commit }, { token, user }) {
    commit('SET_TOKEN', token);
    commit('SET_USER', user);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  logout({ commit }) {
    commit('SET_TOKEN', null);
    commit('SET_USER', null);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
