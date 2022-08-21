import { Title } from 'components/Title';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {
  value: string;
  label?: string;
  id?: string;
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
  const inputId = id || `${label}${placeholder}${Math.random()}`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label
          htmlFor={inputId}
          className={styles.label}
        >
          <Title size="md" variant="secondary" as="span">
            {label}
          </Title>
        </label>
      )}
      <input
        className={styles.input}
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
