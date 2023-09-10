import axios from 'axios';

const ApiManager = axios.create();

ApiManager.interceptors.request.use(
  async (request) => {
    request.baseURL = 'https://6389df1b4eccb986e89cf319.mockapi.io/';
    request.headers = {
      'Content-Type': 'application/json',
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

ApiManager.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default ApiManager;
