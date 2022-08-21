import React from 'react';
import { Title } from 'components/Title';
import { GenderType } from 'types/global';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { useSelector } from 'react-redux';
import { useActions } from 'store/useActions';
import { Radio } from 'components/Radio';
import styles from './styles.module.scss';

export function GenderSelector() {
  const value = useSelector(selectCharacterCreation).gender;
  const { updateCharacterCreation } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as GenderType;
    updateCharacterCreation({
      gender: newValue,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Title size="md" variant="secondary">Gender</Title>
      <ul className={styles.list}>
        <li>
          <Radio
            name="gender-selector"
            label="M"
            id="gender-selecotor-male"
            value="0"
            isChecked={value === '0'}
            onChange={handleChange}
          />
        </li>
        <li>
          <Radio
            name="gender-selector"
            label="F"
            id="gender-selecotor-female"
            value="1"
            isChecked={value === '1'}
            onChange={handleChange}
          />
        </li>
      </ul>
    </div>
  );
}
