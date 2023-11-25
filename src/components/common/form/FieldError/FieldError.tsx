import styles from './FieldError.module.scss';

interface FieldErrorProps {
  error: string;
}

function FieldError({ error }: FieldErrorProps) {
  return (
    <div className={styles.error}>
      {error}
    </div>
  );
}

export default FieldError;
