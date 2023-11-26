import {Modal, ModalContent} from "@/components/common/Modal/Modal";
import Button from "@/components/common/Button/Button";
import FormSelect from "@/components/form/FormSelect";
import {useForm} from "react-hook-form";
import {useCountries} from "@/data/countries";
import styles from './ConfirmAddBank.module.scss';

interface ConfirmAddBankModalProps {
  isOpen: boolean;
  bankName: string;
  onClose: () => void;
}

function ConfirmAddBankModal ({isOpen, bankName, onClose}: ConfirmAddBankModalProps) {
  const { data: countries } = useCountries();

  const { control, formState } = useForm({
    defaultValues: {
      country: '1',
    }
  });

  const handleConfirm = () => {
    try {
      // request here
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal open={isOpen}>
      <ModalContent
        title="Confirm action"
        text={<>Are you sure you want to add <strong>{bankName}</strong> bank and find contacts?</>}
        buttons={[
          <Button key="close" color="purple" isOutlined onClick={onClose}>Cancel</Button>,
          <Button key="confirm" color="purple" onClick={handleConfirm} isDisabled={countries && !formState.isValid}>Confirm</Button>,
        ]}
        onClose={onClose}
      >
        {countries && countries.length ? (
          <FormSelect label="Specify the Country" name="country" control={control} options={[]} />
        ) : null}
      </ModalContent>
    </Modal>
  );
}

export default ConfirmAddBankModal;
