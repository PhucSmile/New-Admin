import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios';
import queryString from 'query-string';
import { handleError } from 'helpers/errorUtils';

const axiosParams: CreateAxiosDefaults = {
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  paramsSerializer: {
    serialize: (params) =>
      queryString.stringify(params, {
        skipNull: true,
        skipEmptyString: true,
      }),
  },
};

export const axiosInstance = axios.create(axiosParams);

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(STORAGE_KEY.TOKEN);

//     if (token) {
//       // eslint-disable-next-line no-param-reassign
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.config?.responseType === 'blob') {
      return response.data;
    }

    return response.data?.data;
  },
  function (error) {
    const formattedError = handleError(error);

    return Promise.reject(formattedError);
  },
);

export default axiosInstance;
