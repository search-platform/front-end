import {Bank} from '@/data/banks';
import styles from './SearchList.module.scss';
import BankCard from '../../banks/BankCard/BankCard';

interface SearchListProps {
  items: Bank[];
}

function SearchList ({ items }: SearchListProps) {
  return (
    <ul className={styles.list}>
      {items.map((bank) => (
        <BankCard key={bank.orgId} item={bank} />
      ))}
    </ul>
  );
}

export default SearchList;
