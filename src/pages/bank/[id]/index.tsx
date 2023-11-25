import Headline from "@/components/common/Headline/Headline";
import {DUMMY_BANKS} from "@/data/__dummy__/banks";
import {useRouter} from "next/router";
import styles from './Index.module.scss';

function BankPage () {
  const router = useRouter();
  const bankId = router.query.id as string;
  const bank = DUMMY_BANKS.find(bank => bank.id.toString() === bankId);

  if (!bank) {
    return null;
  }

  return (
    <div>
      <img src={bank.logo} alt={bank.name} className={styles.logo} />
      <Headline level={1}>
        {bank.name}
      </Headline>
    </div>
  );
}

export default BankPage;
