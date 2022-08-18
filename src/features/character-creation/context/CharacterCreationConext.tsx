import React, { useMemo, useState } from 'react';
import { GenderType, RaceType } from 'types/global';

export type CharacterContextType = {
  gender: GenderType,
  race: RaceType,
};

export const initialState: CharacterContextType = {
  gender: '0',
  race: 'human',
};

const CharacterContext = React.createContext<Partial<CharacterContextType>>(initialState);

export function CharacterContextProvider({
  children,
  ...props
}:
CharacterContextType & {
  children: React.ReactNode
}) {
  const value = useMemo(() => ({
    ...props,
  }), [props]);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterCreation() {
  const defaultValue = React.useContext(CharacterContext);
  const [value, setValue] = useState(defaultValue);

  const setCharacter = (
    updatedFields: Partial<CharacterContextType>,
  ) => {
    setValue((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  if (defaultValue === undefined) {
    throw new Error('useCharacterCreation must be used within a CharacterContext');
  }

  return {
    character: value,
    setCharacter,
  };
}
