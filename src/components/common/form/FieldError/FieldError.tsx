import cx from 'classnames';
import styles from './FieldError.module.scss';

interface FieldErrorProps {
  error: string;
  className?: string;
}

function FieldError({ error, className }: FieldErrorProps) {
  return (
    <div className={cx(styles.error, className)}>
      {error}
    </div>
  );
}

export default FieldError;
