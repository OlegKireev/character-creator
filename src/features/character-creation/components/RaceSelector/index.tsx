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

  const allianceRaces: RaceType[] = ['human', 'dwarf', 'gnome', 'night-elf', 'draenei'];
  const hordeRaces: RaceType[] = ['orc', 'troll', 'undead', 'tauren', 'blood-elf'];

  return (
    <div className={styles.wrapper}>
      <Title size="xs">Race</Title>
      <div className={styles.raceLists}>
        <ul className={styles.list}>
          {allianceRaces.map((race) => (
            <li>
              <input
                className={styles.radio}
                type="radio"
                id={`race-selector-${race}`}
                name="race-selector"
                value={race}
                checked={value === race}
                onChange={handleChange}
              />
              <label
                className={styles.icon}
                htmlFor={`race-selector-${race}`}
              >
                {race}
              </label>
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {hordeRaces.map((race) => (
            <li>
              <input
                className={styles.radio}
                type="radio"
                id={`race-selector-${race}`}
                name="race-selector"
                value={race}
                checked={value === race}
                onChange={handleChange}
              />
              <label
                className={styles.icon}
                htmlFor={`race-selector-${race}`}
              >
                {race}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
