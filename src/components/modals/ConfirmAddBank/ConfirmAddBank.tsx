import {Modal, ModalContent} from "@/components/common/Modal/Modal";
import Button from "@/components/common/Button/Button";
import {useCountries} from "@/data/countries";
import styles from './ConfirmAddBank.module.scss';
import Select from "@/components/common/form/Select/Select";
import {useState} from "react";
import {useRouter} from "next/router";
import {addBank} from "@/data/banks";

interface ConfirmAddBankModalProps {
  isOpen: boolean;
  bankName: string;
  onClose: () => void;
}

function ConfirmAddBankModal ({isOpen, bankName, onClose}: ConfirmAddBankModalProps) {
  const router = useRouter();

  const { data: countries } = useCountries();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countryId, setCountryId] = useState<string>("1");

  const handleConfirm = async () => {
    if (!countries) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await addBank({
        orgName: bankName,
        countryName: countries.find(country => country.id.toString() === countryId)?.name || '',
      });

      if (!response) {
        setError('Something went wrong');
        throw new Error('Something went wrong');
      }

      if (response.error) {
        setError('Bank wasn\'t found!');
        throw new Error('Bank wasn\'t found!');
      }

      if (response && response.name && response.id) {
        void router.push(`/bank/${response.id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleChangeCountry = (value: string) => {
    setCountryId(value);
  }

  const selectOptions = countries ? countries.map(country => ({
    value: country.id.toString(),
    label: country.name,
  })) : [];

  return (
    <Modal open={isOpen}>
      <ModalContent
        title="Confirm action"
        text={<>Are you sure you want to add <strong>{bankName}</strong> bank and find contacts?</>}
        buttons={[
          <Button
            key="close"
            color="purple"
            isOutlined
            onClick={onClose}
            isDisabled={isLoading}
          >Cancel</Button>,
          <Button
            key="confirm"
            color="purple"
            isLoading={isLoading}
            onClick={handleConfirm}
            isDisabled={!countries}
          >Confirm</Button>,
        ]}
        onClose={onClose}
      >
        {countries && countries.length ? (
          <Select
            errorMessage={error}
            value={countryId}
            label="Specify the Country"
            name="country"
            options={selectOptions}
            onChange={handleChangeCountry}
          />
        ) : null}
      </ModalContent>
    </Modal>
  );
}

export default ConfirmAddBankModal;
