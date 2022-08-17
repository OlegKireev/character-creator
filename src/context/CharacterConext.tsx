import React, { useMemo, useState } from 'react';
import { GenderType } from '../types/global';


export type CharacterContextType = {
  gender: GenderType
};

const CharacterContext = React.createContext<CharacterContextType | undefined>(
  undefined,
);

export const CharacterContextProvider = ({
  gender,
  children,
}: {
  gender: GenderType,
  children: React.ReactNode;
}) => {

  const value = useMemo(() => {
    return {
      gender,
    };
  }, [gender]);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export function useCharacter() {
  const defaultValue = React.useContext(CharacterContext);
  const [value, setValue] = useState(defaultValue);

  const setCharacter = (updatedFields: { [key in keyof CharacterContextType]: any}) => {
    setValue((prev) => ({
      ...prev,
      ...updatedFields,
    }))
  };

  if (defaultValue === undefined) {
    throw new Error('useEvent must be used within a CharacterContext');
  }
  return {
    character: value,
    setCharacter,
  };
}
