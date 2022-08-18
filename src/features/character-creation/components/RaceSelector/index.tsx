import { Title } from 'components/Title';
import { useCharacterCreation } from 'features/character-creation/context/CharacterCreationConext';
import React from 'react';
import { RaceType } from 'types/global';
import styles from './styles.module.scss';

export function RaceSelector() {
  const { character, setCharacter } = useCharacterCreation();
  const { race: value } = character;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter({
      race: e.target.value as RaceType,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Title size="xs">Race</Title>
      <ul className={styles.list}>
        <li>
          <input
            className={styles.radio}
            type="radio"
            id="race-selector-human"
            name="race-selector"
            value="human"
            checked={value === 'human'}
            onChange={handleChange}
          />
          <label
            className={styles.icon}
            htmlFor="race-selector-human"
          >
            Human
          </label>
        </li>
        <li>
          <input
            className={styles.radio}
            type="radio"
            id="race-selector-orc"
            name="race-selector"
            value="orc"
            checked={value === 'orc'}
            onChange={handleChange}
          />
          <label
            className={styles.icon}
            htmlFor="race-selector-orc"
          >
            Orc
          </label>
        </li>
      </ul>
    </div>
  );
}
