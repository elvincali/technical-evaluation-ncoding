import Vue from 'vue';
import _axios from 'axios';
import { Notify } from 'quasar';

const axios = _axios.create();

axios.interceptors.response.use((response) => response,
  (error) => {
    if (error.response) {
      // Error validation
      if (error.response.status === 422) {
        Notify.create({
          message: error.response.data.message,
          type: 'negative',
        });
      }
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  });

Vue.prototype.$axios = axios;

export { axios };
