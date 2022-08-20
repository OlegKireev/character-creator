import React from 'react';
import { Title } from 'components/Title';
import { GenderType } from 'types/global';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { useSelector } from 'react-redux';
import { useActions } from 'store/useActions';
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
      <Title size="xs">Gender</Title>
      <ul className={styles.list}>
        <li>
          <input
            className={styles.radio}
            type="radio"
            id="gender-selecotor-male"
            name="gender-selecotor"
            value="0"
            checked={value === '0'}
            onChange={handleChange}
          />
          <label
            className={styles.icon}
            htmlFor="gender-selecotor-male"
          >
            M
          </label>
        </li>
        <li>
          <input
            className={styles.radio}
            type="radio"
            id="gender-selecotor-female"
            name="gender-selecotor"
            value="1"
            checked={value === '1'}
            onChange={handleChange}
          />
          <label
            className={styles.icon}
            htmlFor="gender-selecotor-female"
          >
            F
          </label>
        </li>
      </ul>
    </div>
  );
}
