import React from "react";
import { Title } from "../../../../components/Title";
import { GenderType } from "../../../../types/global";
import { useCharacter } from "../../context/CharacterConext";
import styles from './styles.module.scss';

export function GenderSelector() {
  const { character, setCharacter } = useCharacter();
  const value = character?.gender;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as GenderType;
    setCharacter({
      gender: value,
    })
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
  )
}