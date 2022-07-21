import { Title } from "../Title";
import styles from './styles.module.scss';

export function GenderSelector() {
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