/* eslint-disable no-shadow */
import { make } from 'vuex-pathify';
import { axios } from 'boot/axios';

const state = () => ({
  email: '',
  password: '',
});

const mutations = make.mutations(state);

const actions = {
  async login({ state, dispatch }) {
    try {
      const params = {
        username: state.email,
        password: state.password,
      };
      const { data } = await axios.post('/login', params);
      dispatch('auth/setToken', { user: data.data.userData, token: data.data.accessToken }, { root: true });
      dispatch('reset');
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  reset({ commit }) {
    commit('SET_EMAIL', '');
    commit('SET_PASSWORD', '');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
