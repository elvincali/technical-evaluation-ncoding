import Vue from 'vue';
import _axios from 'axios';

const axios = _axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

Vue.prototype.$axios = axios;

export { axios };
