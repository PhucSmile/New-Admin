import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALE } from 'constants/common';
import { RootState } from '../index';

interface AppState {
  currentLocale: string;
}

const initialState: AppState = {
  currentLocale: LOCALE.VIETNAMESE,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    doSwitchLocale(state, action: PayloadAction<string>) {
      state.currentLocale = action.payload;
    },
  },
});

export const { doSwitchLocale } = appSlice.actions;

export const selectCurrentLocale = (state: RootState) =>
  state.app.currentLocale;

export default appSlice.reducer;
