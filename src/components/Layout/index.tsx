import { RaceSelector } from '../RaceSelector';
import { GenderSelector } from '../GenderSelector';
import { NameInput } from '../NameInput';
import styles from './styles.module.scss';
import { ClassSelector } from '../ClassSelector';
import { CreateButton } from '../CreateButton';
import { Title } from '../Title';
import { CharacterContextProvider } from '../../context/CharacterConext';

interface IProps {
  children: React.ReactNode
} 

export function Layout({ children } : IProps) {
  return (
    <div className={styles.wrapper}>
      <CharacterContextProvider gender="1">
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
    </div>
  )
};