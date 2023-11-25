import Button from '@/components/common/Button/Button';
import styles from './BankNotFound.module.scss';
import IconInfo from '@/components/common/icons/IconInfo';

function BankNotFound () {
  return (
    <div className={styles.box}>
      <IconInfo />
      <span className={styles.text}>Bank not found</span>
      <Button size="small" color="purple" onClick={() => {}} className={styles.button}>Search through ChatGPT</Button>
    </div>
  );
}

export default BankNotFound;
