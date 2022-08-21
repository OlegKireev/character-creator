import styles from './styles.module.scss';

interface IProps {
  name: string;
  id: string;
  value: string | number;
  label: string | React.ReactElement;
  isChecked: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Radio({
  name,
  id,
  value,
  isChecked,
  label,
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
