import { configureStore } from '@reduxjs/toolkit';
import { eventSlice } from './event/eventSlice';

export const store = configureStore({
  reducer: {
   event: eventSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;