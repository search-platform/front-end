import Headline from "@/components/common/Headline/Headline";
import {DUMMY_BANKS} from "@/data/__dummy__/banks";
import {useRouter} from "next/router";
import styles from './Index.module.scss';
import ContactsList from "@/components/contacts/ContactsList/ContactsList";

function BankPage () {
  const router = useRouter();
  const bankId = router.query.id as string;
  const bank = DUMMY_BANKS.find(bank => bank.id.toString() === bankId);

  if (!bank) {
    return null;
  }

  return (
    <div>
      <div className={styles.bankInfo}>
        <img src={bank.logo} alt={bank.name} className={styles.logo} />
        <Headline level={1} className={styles.title}>
          {bank.name}
        </Headline>
        <address className={styles.address}>{bank.address}</address>
        <a href={bank.url} target="__blank" className={styles.url}>{bank.url}</a>
      </div>
      <ContactsList items={bank.contacts} />
    </div>
  );
}

export default BankPage;
