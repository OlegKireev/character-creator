import cx from 'classnames';
import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Title({ children, size = 'md' }: IProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={cx(styles.title, styles[size])} data-text={children}>
        {children}
      </h1>
    </div>
  );
}
