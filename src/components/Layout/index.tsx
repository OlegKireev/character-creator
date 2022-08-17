import { CharacterCreation } from '../../features/character-creation';
import styles from './styles.module.scss';
interface IProps {
  children: React.ReactNode
} 

export function Layout({ children } : IProps) {
  return (
    <div className={styles.wrapper}>
      <CharacterCreation />
    </div>
  )
};