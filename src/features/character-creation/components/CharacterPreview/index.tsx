import { useSelector } from 'react-redux';
import { selectCharacterCreation } from 'features/character-creation/store/selectors';
import { Title } from 'components/Title';
import styles from './styles.module.scss';

export function CharacterPreview() {
  const {
    characterName, gender, race, className,
  } = useSelector(selectCharacterCreation);
  return (
    <div className={styles.wrapper}>
      <Title size="md" variant="secondary">Result:</Title>
      <p>
        <span className={styles.row}>
          Name:
          {' '}
          {characterName}
        </span>
        <span className={styles.row}>
          Race:
          {' '}
          {race}
        </span>
        <span className={styles.row}>
          Class:
          {' '}
          {className}
        </span>
        <span className={styles.row}>
          Gender:
          {' '}
          {gender}
        </span>
      </p>
    </div>
  );
}
