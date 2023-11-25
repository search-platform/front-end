import {ForwardedRef, InputHTMLAttributes, forwardRef, useCallback} from 'react';
import styles from './Input.module.scss';
import FieldLabel from '../FieldLabel/FieldLabel';
import FieldError from '../FieldError/FieldError';
import cx from 'classnames';

export interface InputProps {
  name: string;
  label?: string;
  errorMessage?: string;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  placeholder?: string;
  disabled?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

const Input = forwardRef(function Input({ name, errorMessage, value, label, placeholder, disabled, onChange, type, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    },
    [onChange],
  );

  return (
    <div className={styles.box}>
      {label ? <FieldLabel id={name}>{label}</FieldLabel> : null}
      <input
        className={cx(styles.input, { [styles.error]: errorMessage })}
        type={type}
        name={name}
        id={name}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
      {errorMessage ? <FieldError error={errorMessage} /> : null}
    </div>
  );
});

export default Input;
