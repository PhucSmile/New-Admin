import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './slices/appSlice';
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['app'],
  // blacklist: []
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
