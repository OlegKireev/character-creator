import React from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'components/Input';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { useActions } from 'store/useActions';

export function NameInput() {
  const { characterName } = useSelector(selectCharacterCreation);
  const { updateCharacterCreation } = useActions();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCharacterCreation({
      characterName: e.target.value,
    });
  };

  return (
    <Input
      label="Name"
      id="character-creation-name"
      value={characterName}
      onChange={handleChange}
    />
  );
}
