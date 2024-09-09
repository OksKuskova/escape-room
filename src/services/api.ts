import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { ApiDefault } from './const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiDefault.ServerUrl as string,
    timeout: ApiDefault.RequestTimeout as number,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }
      return config;
    },
  );

  return api;
};
