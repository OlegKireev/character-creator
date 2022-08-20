import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GenderType, RaceType } from 'types/global';

export type CharacterStateType = {
  gender: GenderType,
  race: RaceType,
};

export const initialState: CharacterStateType = {
  gender: '0',
  race: 'human',
};

export const characterCreationSlice = createSlice({
  name: 'features/characterCreation',
  initialState,
  reducers: {
    updateCharacterCreation: (state, action: PayloadAction<Partial<CharacterStateType>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const characterCreationActions = characterCreationSlice.actions;
export default characterCreationSlice.reducer;
