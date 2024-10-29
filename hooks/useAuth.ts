import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useRouter } from 'next/navigation';
import { login, logout } from '@/store/authSlice';
import apiRequest from '@/utils/services/apiRequest';
import User from '@/utils/models/auth/_user';

interface AuthHook {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleLogoutSubmit: () => Promise<void>;
}

const useAuth = (): AuthHook => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const {data, error} = await apiRequest<User>('/api/auth/login', 'post', {email, password});

      if (data) {
        // Dispatch logout action
        dispatch(login({user: data}));

        // Navigate to dashboard page after login
        router.push('/dashboard');
      } else if (error) {
        console.error('Login failed:', error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  const handleLogoutSubmit = async (): Promise<void> => {
    try {
      await apiRequest('api/auth/logout', 'post');
      
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
    setEmail,
    setPassword,
    handleLoginSubmit,
    handleLogoutSubmit
  };
}

export default useAuth;