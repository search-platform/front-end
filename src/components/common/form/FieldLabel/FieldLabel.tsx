import { PropsWithChildren } from 'react';
import styles from './FieldLabel.module.scss';

interface FieldLabelProps {
  id: string;
}

function FieldLabel({ children, id }: PropsWithChildren<FieldLabelProps>) {
  return (
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  );
}

export default FieldLabel;
