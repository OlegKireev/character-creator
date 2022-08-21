import cx from 'classnames';
import { Radio } from 'components/Radio';
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
              <Radio
                name="race-selector"
                label={race}
                id={`race-selector-${race}`}
                value={race}
                isChecked={value === race}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
        <ul className={cx(styles.list, styles.horde)}>
          {HORDE_RACE_NAMES.map((race) => (
            <li key={`race-${race}`}>
              <Radio
                name="race-selector"
                label={race}
                id={`race-selector-${race}`}
                value={race}
                isChecked={value === race}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
