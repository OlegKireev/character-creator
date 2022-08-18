import React, { useMemo, useState } from 'react';
import { GenderType } from 'types/global';

export type CharacterContextType = {
  gender: GenderType
};

const CharacterContext = React.createContext<Partial<CharacterContextType> | undefined>(
  undefined,
);

export function CharacterContextProvider({
  gender,
  children,
}:
CharacterContextType & {
  children: React.ReactNode
}) {
  const value = useMemo(() => ({
    gender,
  }), [gender]);

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
