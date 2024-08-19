'use client';
import { useState, useEffect } from 'react';
import useApi from './useAPI';
import User from '@/utils/models/auth/_user';
import { useAuthStore } from '@/store/authStore';

interface LoginHook {
  email: string;
  password: string;
  error: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const useLogin = (): LoginHook => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { data, error, request } = useApi<User>();
  const { login } = useAuthStore();

  useEffect(() => {
    if (data?.user && data.token && data.refreshToken) {
      // Set cookies manually
      document.cookie = `accessToken=${data.token}; path=/; secure; samesite=strict`;
      document.cookie = `refreshToken=${data.refreshToken}; path=/; secure; samesite=strict`;
      
      login(data?.user, data?.token, data?.refreshToken);
    }
  }, [data, login]);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await request('/api/auth/login', 'post', {email, password});
  }

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLoginSubmit
  };
}

export default useLogin;