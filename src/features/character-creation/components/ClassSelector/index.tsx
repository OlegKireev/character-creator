import { useSelector } from 'react-redux';
import { Radio } from 'components/Radio';
import { Title } from 'components/Title';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { useClasses } from 'hooks/useClasses';
import React from 'react';
import { useActions } from 'store/useActions';
import { ClassType } from 'types/global';
import styles from './styles.module.scss';

export function ClassSelector() {
  const { names } = useClasses();

  const { className: value } = useSelector(selectCharacterCreation);
  const { updateCharacterCreation } = useActions();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCharacterCreation({
      className: e.target.value as ClassType,
    });
  };
  return (
    <div>
      <Title size="md" variant="secondary">Class</Title>
      <ul className={styles.list}>
        {names.map((race) => (
          <li key={race} className={styles.item}>
            <Radio
              id={`class-selecotor-${race}`}
              name="class-selector"
              label={race}
              value={race}
              isChecked={value === race}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
