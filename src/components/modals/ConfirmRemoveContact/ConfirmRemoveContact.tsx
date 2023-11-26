import Button from "@/components/common/Button/Button";
import {Modal, ModalContent} from "@/components/common/Modal/Modal";
import { BankContact } from "@/data/banks";
import {useContactDeleteMutation} from "@/data/contacts";
import {useRouter} from "next/router";
import {useState} from "react";

interface ConfirmRemoveContactProps {
  isOpen: boolean;
  onClose: () => void;
  contact: BankContact;
  organizationId: number;
}

function ConfirmRemoveContact ({ isOpen, onClose, contact, organizationId }: ConfirmRemoveContactProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const contactDeleteMutation = useContactDeleteMutation(organizationId, contact.id);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await contactDeleteMutation.mutateAsync();
      onClose();
      router.reload();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={isOpen}>
      <ModalContent
        title="Confirm action"
        text={<>Are you sure you want to delete <strong>{contact.value}</strong>?</>}
        onClose={onClose}
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
            color="red"
            isLoading={isLoading}
            onClick={handleConfirm}
          >Confirm</Button>,
        ]}
      >
      </ModalContent>
    </Modal>
  );
}

export default ConfirmRemoveContact;
