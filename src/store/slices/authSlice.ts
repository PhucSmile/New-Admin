import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, ILoginData, IVerifyTokenData, IAuthUser } from 'api/authApi';
import { APP_STORAGE_KEY } from 'constants/app';
import { RootState } from '../index';

export interface AuthState {
  user: IAuthUser | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const doLogin = createAsyncThunk(
  'auth/login',
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const result = await authApi.login(data);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const doCheckAuth = createAsyncThunk(
  'auth/checkAuth',
  async (data: IVerifyTokenData, { rejectWithValue }) => {
    try {
      const result = await authApi.verifyToken(data);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    doLogout(state) {
      localStorage.removeItem(APP_STORAGE_KEY.TOKEN);

      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      localStorage.setItem(APP_STORAGE_KEY.TOKEN, action.payload.accessToken);

      state.isLoggedIn = true;
      state.user = action.payload.user;
    });
    builder.addCase(doCheckAuth.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    });
  },
});

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const { doLogout } = authSlice.actions;

export default authSlice.reducer;
