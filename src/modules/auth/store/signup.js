/* eslint-disable no-shadow */
import { make } from 'vuex-pathify';
import { axios } from 'boot/axios';

const state = () => ({
  fullName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  country: null,
});

const mutations = make.mutations(state);

const actions = {
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
    commit('SET_FULL_NAME', '');
    commit('SET_EMAIL', '');
    commit('SET_PASSWORD', '');
    commit('SET_PASSWORD_CONFIRM', '');
    commit('SET_COUNTRY', null);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
