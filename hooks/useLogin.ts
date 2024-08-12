'use client';
import { useState, useEffect } from 'react';
import useApi from './useAPI';
import User from '@/utils/models/_user';

interface LoginHook {
  email: string;
  password: string;
  error: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const useLogin = (): LoginHook => {
  const [email, setEmail] = useState<string>('mabdullahkhan009@gmail.com');
  const [password, setPassword] = useState<string>('D00bert!');
  const { data, error, request } = useApi<User>();

  useEffect(() => {
    console.log(data);
  }, [data]);

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