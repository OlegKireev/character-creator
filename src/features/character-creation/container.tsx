import cx from 'classnames';
import { Title } from 'components/Title';
import { useSide } from 'hooks/useRace';
import { useSelector } from 'react-redux';
import { CharacterPreview } from './components/CharacterPreview';
import { ClassSelector } from './components/ClassSelector';
import { CreateButton } from './components/CreateButton';
import { GenderSelector } from './components/GenderSelector';
import { NameInput } from './components/NameInput';
import { RaceSelector } from './components/RaceSelector';
import { selectCharacterCreation } from './store/selectors';
import styles from './styles.module.scss';

export function CharacterCreation() {
  const { race } = useSelector(selectCharacterCreation);
  const side = useSide(race);

  return (
    <main className={cx(styles.wrapper, styles[side])}>
      <div className={styles.container}>
        <div className={styles.left}>
          <GenderSelector />
          <RaceSelector />
        </div>
        <div className={styles.center}>
          <Title>Character creator app</Title>
          <CharacterPreview />
          <div className={styles.centerFooter}>
            <NameInput />
          </div>
        </div>
        <div className={styles.right}>
          <ClassSelector />
          <CreateButton />
        </div>
      </div>
    </main>
  );
}
