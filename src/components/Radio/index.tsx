import styles from './styles.module.scss';

interface IProps {
  name: string;
  id: string;
  value: string | number;
  label: string | React.ReactElement;
  isChecked: boolean,
  isDisabled?: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Radio({
  name,
  id,
  value,
  label,
  isChecked,
  isDisabled = false,
  onChange,
}: IProps) {
  return (
    <>
      <input
        className={styles.radio}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label
        className={styles.icon}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
}
