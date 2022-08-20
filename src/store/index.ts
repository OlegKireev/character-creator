import { configureStore } from '@reduxjs/toolkit';
import { characterCreationReducer as characterCreation } from 'features/character-creation';

export const store = configureStore({
  reducer: {
    characterCreation,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
