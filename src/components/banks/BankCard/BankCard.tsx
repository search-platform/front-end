import { Bank } from "@/data/banks";
import styles from './BankCard.module.scss';
import Link from "next/link";
import Headline from "@/components/common/Headline/Headline";

interface BankCardProps {
  item: Bank;
}

function BankCard ({ item }: BankCardProps) {
  return (
    <Link href="/" className={styles.card}>
      <img src={item.logo} alt={item.name} className={styles.logo} />
      <Headline level={5} className={styles.name}>
        {item.name}
      </Headline>
    </Link>
  );
}

export default BankCard;
