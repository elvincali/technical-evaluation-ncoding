import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  data() {
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
  },
};
