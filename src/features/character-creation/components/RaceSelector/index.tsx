import cx from 'classnames';
import { Title } from 'components/Title';
import { ALLIANCE_RACE_NAMES, HORDE_RACE_NAMES } from 'constants/races';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from 'store/useActions';
import { RaceType } from 'types/global';
import styles from './styles.module.scss';

export function RaceSelector() {
  const value = useSelector(selectCharacterCreation).race;
  const { updateCharacterCreation } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCharacterCreation({
      race: e.target.value as RaceType,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Title size="md" variant="secondary">Race</Title>
      <div className={styles.raceLists}>
        <ul className={cx(styles.list, styles.alliance)}>
          {ALLIANCE_RACE_NAMES.map((race) => (
            <li key={`race-${race}`}>
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
        <ul className={cx(styles.list, styles.horde)}>
          {HORDE_RACE_NAMES.map((race) => (
            <li key={`race-${race}`}>
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
