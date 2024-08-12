import { useState, useCallback } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from '@/utils/services/axiosInstance';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface APIState<T, P = unknown> {
  data: T | null;
  error: string | null;
  loading: boolean;
  setData: (data: T | null) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  request: (endpoint: string, method: HttpMethod, payload?: P, config?: AxiosRequestConfig) => Promise<void>;
};

const useApi = <T, P = unknown>(): APIState<T, P> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(
    async (endpoint: string, method: HttpMethod, payload?: P, config?: AxiosRequestConfig) => {
      setLoading(true);
      setError(null);

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
        };
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unxpected error occured');
        }
      } finally {
        setLoading(false);
      }
    }, []
  );

  return {
    data,
    error,
    loading,
    setData,
    setError,
    setLoading,
    request
  };
}

export default useApi;