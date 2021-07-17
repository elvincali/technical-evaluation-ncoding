import { getField, updateField } from 'vuex-map-fields';
import { axios } from 'boot/axios';

export default {
  namespaced: true,
  state() {
    return {
      email: '',
      password: '',
    };
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    setEmail(state, value) {
      state.email = value;
    },
    setPassword(state, value) {
      state.password = value;
    },
  },
  actions: {
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
      commit('setEmail', null);
      commit('setPassword', null);
    },
  },
};
