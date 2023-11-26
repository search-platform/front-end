import Headline from "@/components/common/Headline/Headline";

import {useRouter} from "next/router";
import styles from './Index.module.scss';
import {useBankById} from "@/data/banks";
import ContactsList from "@/components/contacts/ContactsList/ContactsList";
import isClient from "../../../../utils/isClient";
import Cookies from 'js-cookie';

function BankPage () {
  const router = useRouter();
  const bankId = router.query.id as string;
  const { data: bank } = useBankById(bankId ? parseInt(bankId) : 0);

  if (isClient && !Cookies.get('JWT')) {
    void router.push('/auth/sign-in');
  }

  if (!bank) {
    return null;
  }

  const image = bank.logoUrl ? bank.logoUrl : bank.favicon ? bank.favicon : '';

  return (
    <div>
      <div className={styles.bankInfo}>
        {image ? <img src={image} alt={bank.name} className={styles.logo} /> : null}
        <Headline level={1} className={styles.title}>
          {bank.name}
        </Headline>
        <address className={styles.address}>{bank.address}</address>
        <a href={bank.url} target="__blank" className={styles.url}>{bank.url}</a>
      </div>
      <ContactsList items={bank.orders} />
    </div>
  );
}

export default BankPage;
