import Button from "@/components/common/Button/Button";
import {Modal, ModalContent} from "@/components/common/Modal/Modal";
import Input from "@/components/common/form/Input/Input";
import { BankContact } from "@/data/banks";
import {useContactDeleteMutation, useContactUpdateMutation} from "@/data/contacts";
import {useRouter} from "next/router";
import {useState} from "react";

interface ConfirmEditContactProps {
  isOpen: boolean;
  onClose: () => void;
  contact: BankContact;
  organizationId: number;
}

function ConfirmEditContact ({ isOpen, onClose, contact, organizationId }: ConfirmEditContactProps) {
  const router = useRouter();
  const { query } = router;
  const queryId = Number(query.id);

  const [value, setValue] = useState(contact.value);
  const [isLoading, setIsLoading] = useState(false);
  const contactUpdateMutation = useContactUpdateMutation(queryId, contact);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await contactUpdateMutation.mutateAsync(value);
      onClose();
      router.reload();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <Modal open={isOpen}>
      <ModalContent
        onClose={onClose}
        title={contact.type === 'PHONE' ? 'Edit phone number' : 'Edit email'}
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
          >Confirm</Button>,
        ]}
      >
        <Input label="New value" name="value" value={value} onChange={handleChangeValue} />
      </ModalContent>
    </Modal>
  );
}

export default ConfirmEditContact;

