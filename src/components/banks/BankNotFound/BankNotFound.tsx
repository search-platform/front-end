import Button from '@/components/common/Button/Button';
import styles from './BankNotFound.module.scss';
import IconInfo from '@/components/common/icons/IconInfo';
import {useState} from 'react';
import ConfirmAddBankModal from '@/components/modals/ConfirmAddBank/ConfirmAddBank';

interface BankNotFoundProps {
  bankName: string;
}

function BankNotFound ({ bankName }: BankNotFoundProps) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // const handleSearch = async () => {
  //   const contactPaths = [
  //     '/',
  //     '/about',
  //     '/contacts',
  //     '/contact-us',
  //   ];

  //   const bankUrlResponse = await axios.get('/api/chat/get-url?name=Raiffeisen&country=Serbia');
  //   let url = bankUrlResponse.data.url;

  //   if (!url) {
  //     return null;
  //   }

  //   if (url.endsWith('/')) {
  //     url = url.slice(0, -1);
  //   }

  //   const urls = contactPaths.map(path => `${url}${path}`);
  //   const parseInfoResponse = await axios.post('/api/chat/parse-website', { urls });

  // }
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = async () => {
    setIsConfirmModalOpen(true);
  }

  return (
    <div className={styles.box}>
      <IconInfo />
      <span className={styles.text}>Bank not found</span>
      <Button size="small" color="purple" onClick={handleSearch} className={styles.button}>Search through ChatGPT</Button>
      <ConfirmAddBankModal isOpen={isConfirmModalOpen} bankName={bankName} onClose={() => setIsConfirmModalOpen(false)} />
    </div>
  );
}

export default BankNotFound;
