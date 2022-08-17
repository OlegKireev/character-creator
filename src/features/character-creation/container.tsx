import { Title } from '../../components/Title';
import { ClassSelector } from './components/ClassSelector';
import { CreateButton } from './components/CreateButton';
import { GenderSelector } from './components/GenderSelector';
import { NameInput } from './components/NameInput';
import { RaceSelector } from './components/RaceSelector';
import { CharacterContextProvider, CharacterContextType } from './context/CharacterCreationConext';
import styles from './styles.module.scss';

const initialState: CharacterContextType = {
  gender: '0',
};

export function CharacterCreation() {
  return (
    <CharacterContextProvider {...initialState}>
      <div className={styles.left}>
        <GenderSelector />
        <RaceSelector />
      </div>
      <div className={styles.center}>
        <Title>Character creator app</Title>
        <div className={styles.centerFooter}>
          <NameInput />
          <CreateButton />
        </div>
      </div>
      <div className={styles.right}>
        <ClassSelector />
      </div>
    </CharacterContextProvider>
  );
}
