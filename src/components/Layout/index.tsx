import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode
} 

export function Layout({ children } : IProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        Left
      </div>
      <div className={styles.centerColumn}>
        {children}
      </div>
      <div className={styles.rightColumn}>
        Right
      </div>
    </div>
  )
};