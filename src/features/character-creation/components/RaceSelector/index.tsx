import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { Radio } from 'components/Radio';
import { Title } from 'components/Title';
import { useRaces } from 'hooks/useRaces';
import { useActions } from 'store/useActions';
import { getRandomArrayItem } from 'utils/arrays';
import { RaceType } from 'types/global';
import styles from './styles.module.scss';

export function RaceSelector() {
  const { allianceRaceNames, hordeRaceNames, raceMap } = useRaces();
  const { race: selectedRace, className: selectedClass } = useSelector(selectCharacterCreation);
  const { updateCharacterCreation } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCharacterCreation({
      race: e.target.value as RaceType,
    });
  };

  useEffect(() => {
    const availableClasses = raceMap[selectedRace]?.availableClasses;

    if (!availableClasses?.includes(selectedClass) && availableClasses) {
      updateCharacterCreation({
        className: getRandomArrayItem(availableClasses),
      });
    }
  }, [selectedRace, selectedRace]);

  return (
    <div className={styles.wrapper}>
      <Title size="md" variant="secondary">Race</Title>
      <div className={styles.raceLists}>
        <ul className={cx(styles.list, styles.alliance)}>
          {allianceRaceNames.map((race) => (
            <li key={`race-${race}`}>
              <Radio
                name="race-selector"
                label={race}
                id={`race-selector-${race}`}
                value={race}
                isChecked={selectedRace === race}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
        <ul className={cx(styles.list, styles.horde)}>
          {hordeRaceNames.map((race) => (
            <li key={`race-${race}`}>
              <Radio
                name="race-selector"
                label={race}
                id={`race-selector-${race}`}
                value={race}
                isChecked={selectedRace === race}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
