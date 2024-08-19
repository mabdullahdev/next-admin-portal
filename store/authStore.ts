import { create } from 'zustand';

interface AuthState {
  isAuthorized: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
  refreshToken: string | null;
  login: (user: {id: string, name: string, email: string}, token: string, refreshToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: false,
  user: null,
  token: null,
  refreshToken: null,
  login: (user, token, refreshToken) => set({isAuthorized: true, user, token, refreshToken}),
  logout: () => set({isAuthorized: false, user: null, token: null, refreshToken: null})
})); 