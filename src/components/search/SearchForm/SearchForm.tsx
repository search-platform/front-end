import {useState} from "react";
import Button from "@/components/common/Button/Button";
import styles from "./SearchForm.module.scss";
import Input from "@/components/common/form/Input/Input";

type SearchFormType = 'banks' | 'phones' | 'emails' | 'all';

function SearchForm () {
  const [type, setType] = useState<SearchFormType>('banks');
  const placeholders = {
    banks: 'Search for a bank',
    phones: 'Search for a phone',
    emails: 'Search for an email',
    all: 'Search for a bank, phone or email',
  }

  return (
    <div className={styles.form}>
      <div className={styles.buttonGroup}>
        <Button
          isFullWidth={true}
          isOutlined={type !== 'banks'}
          onClick={() => setType('banks')}
          className={styles.button}
        >
          Banks
        </Button>
        <Button
          isFullWidth={true}
          isOutlined={type !== 'phones'}
          onClick={() => setType('phones')}
          className={styles.button}
        >
          Phones
        </Button>
        <Button
          isFullWidth={true}
          isOutlined={type !== 'emails'}
          onClick={() => setType('emails')}
          className={styles.button}
        >
          Emails
        </Button>
        <Button
          isFullWidth={true}
          isOutlined={type !== 'all'}
          onClick={() => setType('all')}
          className={styles.button}
        >
          All
        </Button>
      </div>

      <Input name="value" placeholder={placeholders[type]} />
    </div>
  );
}

export default SearchForm;
