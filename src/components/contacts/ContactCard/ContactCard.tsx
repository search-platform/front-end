import styles from './ContactCard.module.scss';
import Button from '@/components/common/Button/Button';
import IconEmail from '@/components/common/icons/IconEmail';
import IconPhone from '@/components/common/icons/IconPhone';
import IconClose from '@/components/common/icons/IconClose';
import {BankContact} from '@/data/banks';
import ConfirmRemoveContact from '@/components/modals/ConfirmRemoveContact/ConfirmRemoveContact';
import {useState} from 'react';
import ConfirmEditContact from '@/components/modals/EditContact/EditContact';

interface ContactCardProps {
  organizationId: number;
  contact: BankContact;
}

function ContactCard ({contact, organizationId}: ContactCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmRemoveOpen, setIsConfirmRemoveOpen] = useState(false);

  const handleEdit = () => {
    setIsEditOpen(true);
  }

  const handleDelete = () => {
    setIsConfirmRemoveOpen(true);
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.value}>
            {
              contact.type === 'EMAIL' ? (
                <IconEmail className={styles.icon} />
              ) : (
                <IconPhone className={styles.icon} />
              )
            }
            <a href={contact.type === 'EMAIL' ? `mailto:${contact.value}` : `tel:${contact.value}`} className={styles.link}>
              {contact.value}
            </a>
          </div>
          <p className={styles.description}>{contact.description}</p>
        </div>
        <div className={styles.actions}>
          <Button color="purple" size="small" onClick={handleEdit}>Edit</Button>
          <Button color="red" size="small" onClick={handleDelete} isIconButton>
            <IconClose />
          </Button>
        </div>
      </div>

      <ConfirmRemoveContact
        isOpen={isConfirmRemoveOpen}
        onClose={() => {setIsConfirmRemoveOpen(false);}}
        contact={contact}
        organizationId={1}
      />

      <ConfirmEditContact
        isOpen={isEditOpen}
        onClose={() => {setIsEditOpen(false);}}
        contact={contact}
        organizationId={1}
      />
    </>
  );
}

export default ContactCard;
