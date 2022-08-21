import cx from 'classnames';
import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  mb?: string;
}

export function Title({
  children,
  size = 'xl',
  variant = 'primary',
  as = 'h2',
  mb = '0.5em',
}: IProps) {
  const TitleTag = as;
  return (
    <div
      className={styles.wrapper}
      style={{
        marginBottom: mb,
      }}
    >
      <TitleTag
        className={cx(
          styles.title,
          styles[size],
          styles[variant],
        )}
        data-text={children}
      >
        {children}
      </TitleTag>
    </div>
  );
}
