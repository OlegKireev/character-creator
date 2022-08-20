import { configureStore } from '@reduxjs/toolkit';
import characterCreation from 'features/character-creation/store';

export const store = configureStore({
  reducer: {
    characterCreation,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
