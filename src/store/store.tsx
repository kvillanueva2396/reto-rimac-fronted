import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './features/appStore';

export const store = configureStore({
  reducer: {
    appStore: AppReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
