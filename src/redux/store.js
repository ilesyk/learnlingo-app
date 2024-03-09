import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { teachersReducer } from './teachersSlice';
import { favoritesReducer } from './favoritesSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
};
export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    filter: filterReducer,
    auth: persistReducer(persistConfig, authReducer),
    favorites: persistReducer(persistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
