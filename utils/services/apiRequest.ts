import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

const apiRequest = async <T, P = unknown>(
  endpoint: string,
  method: HttpMethod,
  payload?: P,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  let data: T | null = null;
  let error: string | null = null;

  try {
    let response: AxiosResponse<T>;

    switch (method) {
    case 'get':
      response = await axiosInstance.get<T>(endpoint, config);
      break;
    case 'post':
      response = await axiosInstance.post<T>(endpoint, payload, config);
      break;
    case 'put':
      response = await axiosInstance.put<T>(endpoint, payload, config);
      break;
    case 'patch':
      response = await axiosInstance.patch<T>(endpoint, payload, config);
      break;
    case 'delete':
      response = await axiosInstance.delete<T>(endpoint, config);
      break;
    default:
      throw new Error('Unsupported method');
    }
    data = response.data;
  } catch (err) {
    error = err instanceof Error ? err.message : 'An unexpected error occurred';
  }

  return { data, error };
};

export default apiRequest;
