import axiosInstance from './axiosInstance'

export const refresh = async (): Promise<void> => {
  try {
    await axiosInstance.post('/api/auth/refresh');
  } catch (error) {
    console.error('Refresh token failed', error);
  }
}