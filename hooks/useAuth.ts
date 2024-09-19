'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';
import { login, logout } from '@/store/authSlice';
import useApi from './useAPI';
import User from '@/utils/models/auth/_user';

interface AuthHook {
  email: string;
  password: string;
  error: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleLogoutSubmit: () => Promise<void>;
}

const useAuth = (): AuthHook => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { data, error, request } = useApi<User>();
  const { isAuthorized } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.user && data.token && data.refreshToken) {
      dispatch(login({user: data?.user, token: data?.token, refreshToken: data?.refreshToken}));
    }
  }, [data, dispatch]);

  useEffect(() => {

  }, [error]);

  useEffect(() => {
    if (isAuthorized) {
      router.push('/dashboard');
    }
  }, [isAuthorized, router]);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await request('/api/auth/login', 'post', {email, password});
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  const handleLogoutSubmit = async (): Promise<void> => {
    try {
      await request('api/auth/logout', 'post');

      // Dispatch logout action
      dispatch(logout());
  
      // Navigate to login page after logout
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLoginSubmit,
    handleLogoutSubmit
  };
}

export default useAuth;