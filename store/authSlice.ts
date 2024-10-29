import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthorized: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  isAuthorized: false,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{user: {id: string, name: string, email: string}}>) => {
      state.isAuthorized = true;
      state.user = action.payload.user; 
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.user = null;
    }
  }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;