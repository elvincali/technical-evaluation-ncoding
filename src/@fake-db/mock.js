import { axios } from 'boot/axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

export default mock;
