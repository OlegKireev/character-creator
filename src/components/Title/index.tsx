import styles from './styles.module.scss';
import cx from 'classnames';

interface IProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} 

export function Title({children, size = 'md'}: IProps) {
  return (
    <h1 className={cx(styles.title, styles[size])} data-text={children}>
      {children}
    </h1>
  )
}