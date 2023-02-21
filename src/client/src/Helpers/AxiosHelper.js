import axios from 'axios';

export const token = () => localStorage.getItem('jptoken');

export const setHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const response = () => {
  if (axios.interceptors.response.handlers.length !== 0) return;
  axios.interceptors.response.use((res) => {
      // console.log(JSON.stringify(res.data, null, 4));
      return Promise.resolve(res.data);
      }, (err) => {
          console.log(JSON.stringify(err));
          if(err.response) {
            if(typeof err.response.data != 'object') {
              err.response.data = {};
              }
              err.response.data.status = err.response.status;
           return Promise.reject(err.response.data);
          } else if(err.request) {
           return Promise.reject(err.request.data);
          } else {
          return  Promise.reject(err)
          };
      });
};

export const init = () => {
  const baseURL = 'http://localhost:8000/api';
  axios.defaults.baseURL = baseURL;
  setHeader(token());
  response();
};

// export all the functions
const AxiosHelper = {
  init,
  setHeader,
};

export default AxiosHelper;