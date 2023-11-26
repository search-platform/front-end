import { Bank } from "@/data/banks";
import styles from './BankCard.module.scss';
import Link from "next/link";
import Headline from "@/components/common/Headline/Headline";

interface BankCardProps {
  item: Bank;
}

function BankCard ({ item }: BankCardProps) {
  return (
    <Link href={`/bank/${item.orgId}/`} className={styles.card}>
      <img src={item.orgFavicon} alt={item.orgName} className={styles.logo} />
      <Headline level={5} className={styles.name}>
        {item.orgName}
      </Headline>
      <span className={styles.country}>({item.countryName})</span>
    </Link>
  );
}

export default BankCard;
