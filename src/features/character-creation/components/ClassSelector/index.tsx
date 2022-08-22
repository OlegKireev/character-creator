import React from 'react';
import { useSelector } from 'react-redux';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { useActions } from 'store/useActions';
import { useClasses } from 'hooks/useClasses';
import { useRaces } from 'hooks/useRaces';
import { Radio } from 'components/Radio';
import { Title } from 'components/Title';
import { ClassType } from 'types/global';
import styles from './styles.module.scss';

export function ClassSelector() {
  const { names } = useClasses();
  const { raceMap } = useRaces();

  const { className: selectedClass, race: selectedRace } = useSelector(selectCharacterCreation);
  const { updateCharacterCreation } = useActions();

  const availableClasses = raceMap[selectedRace]?.availableClasses;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCharacterCreation({
      className: e.target.value as ClassType,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Title size="md" variant="secondary">Class</Title>
      <ul className={styles.list}>
        {names.map((className) => (
          <li key={className}>
            <Radio
              id={`class-selecotor-${className}`}
              name="class-selector"
              label={(
                <div className={styles.itemLabel}>
                  <img src={`assets/img/icons/classes/${className}.jpg`} alt={className} />
                  <div className={styles.name}>
                    <Title size="sm" variant="secondary">{className}</Title>
                  </div>
                </div>
              )}
              value={className}
              isChecked={selectedClass === className}
              isDisabled={!availableClasses?.includes(className)}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
