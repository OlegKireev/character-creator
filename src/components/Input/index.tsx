import { Title } from 'components/Title';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {
  value: string;
  label?: string;
  id: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export function Input({
  value,
  label,
  placeholder,
  id,
  onChange,
}: IProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          <Title
            size="md"
            variant="secondary"
            as="span"
            mb="0"
          >
            {label}
          </Title>
        </label>
      )}
      <input
        className={styles.input}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
