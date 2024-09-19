import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthorized: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuthorized: false,
  user: null,
  token: null,
  refreshToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{user: {id: string, name: string, email: string}, token: string, refreshToken: string}>) => {
      state.isAuthorized = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken; 
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.user = null;
      state.token = null;
      state.refreshToken = null;
    }
  }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;