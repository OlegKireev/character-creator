import { RaceSelector } from '../RaceSelector';
import { GenderSelector } from '../GenderSelector';
import { NameInput } from '../NameInput';
import styles from './styles.module.scss';
import { ClassSelector } from '../ClassSelector';
import { CreateButton } from '../CreateButton';

interface IProps {
  children: React.ReactNode
} 

export function Layout({ children } : IProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <GenderSelector />
        <RaceSelector />
      </div>
      <div className={styles.center}>
        <h1 className={styles.title}>
          {children}
        </h1>
        <div className={styles.centerFooter}>
          <NameInput />
          <CreateButton />
        </div>
      </div>
      <div className={styles.right}>
        <ClassSelector />
      </div>
    </div>
  )
};