import { getField, updateField } from 'vuex-map-fields';
import { axios } from 'boot/axios';

export default {
  namespaced: true,
  state() {
    return {
      fullName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      country: null,
    };
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    setFullName(state, value) {
      state.fullName = value;
    },
    setEmail(state, value) {
      state.email = value;
    },
    setPassword(state, value) {
      state.password = value;
    },
    setPasswordConfirm(state, value) {
      state.passwordConfirm = value;
    },
    setCountry(state, value) {
      state.country = value;
    },
  },
  actions: {
    async signup({ state, dispatch }) {
      try {
        const params = {
          fullName: state.fullName,
          username: state.email,
          password: state.password,
          countryId: state.country.id,
        };
        const { data } = await axios.post('/signup', params);
        dispatch('auth/setToken', { user: data.data.userData, token: data.data.accessToken }, { root: true });
        dispatch('reset');
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    reset({ commit }) {
      commit('setFullName', '');
      commit('setEmail', '');
      commit('setPassword', '');
      commit('setPasswordConfirm', '');
      commit('setCountry', null);
    },
  },
};
