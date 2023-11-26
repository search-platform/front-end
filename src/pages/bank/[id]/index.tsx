import Headline from "@/components/common/Headline/Headline";

import {useRouter} from "next/router";
import styles from './Index.module.scss';
import {useBankById} from "@/data/banks";
import ContactsList from "@/components/contacts/ContactsList/ContactsList";
import isClient from "../../../../utils/isClient";
import Cookies from 'js-cookie';
import axios from "axios";
import {useEffect, useState} from "react";

function BankPage () {
  const router = useRouter();
  const [logo, setLogo] = useState('');
  const bankId = router.query.id as string;
  const { data: bank } = useBankById(bankId ? parseInt(bankId) : 0);

  // useEffect(() => {
  //   if (bank) {
  //     axios
  //       .get(`/api/chat/get-bank-logo?name=${bank.name}&country=${bank.country.name}`)
  //       .then(({ data }) => {
  //         if (data.url) {
  //           setLogo(data.url);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // }, [bank])

  if (isClient && !Cookies.get('JWT')) {
    void router.push('/auth/sign-in');
  }

  if (!bank) {
    return null;
  }

  const image = bank.favicon;

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
      <ContactsList
        organizationId={bank.id}
        items={bank.orders}
      />
    </div>
  );
}

export default BankPage;
