import {useState} from "react";
import Button from "@/components/common/Button/Button";
import styles from "./SearchForm.module.scss";
import Input from "@/components/common/form/Input/Input";
import {getBanks} from "@/data/banks";
import BankNotFound from "@/components/banks/BankNotFound/BankNotFound";
import SearchList from "../SearchList/SearchList";
import {signOut} from "@/data/auth";
import {useRouter} from "next/router";

type SearchFormType = 'banks' | 'phones' | 'emails';

function SearchForm () {
  const router = useRouter();
  const [banks, setBanks] = useState([]);
  const [isNotFoundBlockVisible, setIsNotFoundBlockVisible] = useState(false);
  const [value, setValue] = useState('');
  const [type, setType] = useState<SearchFormType>('banks');
  const [isLoading, setIsLoading] = useState(false);

  const placeholders = {
    banks: 'Search for a bank',
    phones: 'Search for a phone',
    emails: 'Search for an email',
  }

  const handleChangeType = (type: SearchFormType) => () => {
    setType(type);
    setIsNotFoundBlockVisible(false);
    setBanks([]);
    setValue('');
  }

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const banks = await getBanks(value);
      if (banks.length === 0) {
        setBanks([]);
        setIsNotFoundBlockVisible(true);
        return;
      }
      setBanks(banks);
    } catch (error) {
      signOut();
      void router.push('/auth/sign-in')
    } finally {
      setIsLoading(false);
    }
  }

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsNotFoundBlockVisible(false);
  }

  return (
    <>
      <div className={styles.form}>
        <div className={styles.buttonGroup}>
          <Button
            isFullWidth={true}
            isOutlined={type !== 'banks'}
            onClick={handleChangeType('banks')}
            className={styles.button}
          >
            Banks
          </Button>
          <Button
            isFullWidth={true}
            isOutlined={type !== 'phones'}
            onClick={handleChangeType('phones')}
            className={styles.button}
          >
            Phones
          </Button>
          <Button
            isFullWidth={true}
            isOutlined={type !== 'emails'}
            onClick={handleChangeType('emails')}
            className={styles.button}
          >
            Emails
          </Button>
        </div>

        <div className={styles.inputGroup}>
          <Input name="value" placeholder={placeholders[type]} onChange={handleValueChange} />
          <Button color="purple" onClick={handleSearch} isLoading={isLoading}>Search</Button>
        </div>
      </div>

      {isNotFoundBlockVisible && type === 'banks' ? <BankNotFound bankName={value} /> : null}

      {banks.length > 0 ? (
        <SearchList items={banks} />
      ) : null}
    </>
  );
}

export default SearchForm;
