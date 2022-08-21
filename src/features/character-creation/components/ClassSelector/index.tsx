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
  const { races } = useRaces();

  const { className: value, race } = useSelector(selectCharacterCreation);
  const { updateCharacterCreation } = useActions();

  const avalilableRaces = races.find((raceItem) => raceItem.name === race)?.availableClasses;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCharacterCreation({
      className: e.target.value as ClassType,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Title size="md" variant="secondary">Class</Title>
      <ul className={styles.list}>
        {names.map((className) => {
          const q = races;
          return (
            <li key={className} className={styles.item}>
              <Radio
                id={`class-selecotor-${className}`}
                name="class-selector"
                label={className}
                value={className}
                isChecked={value === className}
                isDisabled={avalilableRaces?.includes(className)}
                onChange={handleChange}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
