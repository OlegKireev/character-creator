import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClassType, GenderType, RaceType } from 'types/global';

type CharacterStateType = {
  gender: GenderType,
  race: RaceType,
  className: ClassType,
  characterName: string,
};

const initialState: CharacterStateType = {
  gender: '0',
  race: 'human',
  className: 'warrior',
  characterName: '',
};

const slice = createSlice({
  name: 'features/characterCreation',
  initialState,
  reducers: {
    updateCharacterCreation: (state, action: PayloadAction<Partial<CharacterStateType>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const characterCreationActions = slice.actions;
export const characterCreationReducer = slice.reducer;
