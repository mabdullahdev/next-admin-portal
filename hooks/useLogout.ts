import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import useApi from './useAPI'

interface LogoutHook {
  handleLogout: () => Promise<void>;
}

const useLogout = (): LogoutHook => {
  const { logout, refreshToken } = useAuthStore();
  const router = useRouter();
  const { request } = useApi();

  const handleLogout = async () => {
    try {
      await request('/api/auth/logout', 'post', { refreshToken });

      document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

      logout();

      router.push('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return {
    handleLogout,
  };
};

export default useLogout;
