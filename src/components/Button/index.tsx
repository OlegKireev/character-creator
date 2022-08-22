import { Title } from 'components/Title';
import styles from './styles.module.scss';

/* eslint-disable react/button-has-type */
interface IProps {
  children: React.ReactElement | string;
  type?: React.ComponentProps<'button'>['type'];
}

export function Button({
  children,
  type,
}: IProps) {
  return (
    <button
      className={styles.wrapper}
      type={type || 'button'}
    >
      <Title as="span" variant="secondary" mb="0" size="sm">
        {children}
      </Title>
    </button>
  );
}
