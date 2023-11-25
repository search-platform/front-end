import {Contact} from '@/data/contacts';
import styles from './ContactCard.module.scss';
import Button from '@/components/common/Button/Button';
import IconEmail from '@/components/common/icons/IconEmail';
import IconPhone from '@/components/common/icons/IconPhone';
import IconClose from '@/components/common/icons/IconClose';

interface ContactCardProps {
  contact: Contact;
}

function ContactCard ({contact}: ContactCardProps) {
  const handleEdit = () => {
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.value}>
          {
            contact.type === 'email' ? (
              <IconEmail className={styles.icon} />
            ) : (
              <IconPhone className={styles.icon} />
            )
          }
          <a href={contact.type === 'email' ? `mailto:${contact.value}` : `tel:${contact.value}`} className={styles.link}>
            {contact.value}
          </a>
        </div>
        <p className={styles.description}>{contact.description}</p>
      </div>
      <div className={styles.actions}>
        <Button color="purple" size="small" onClick={handleEdit}>Edit</Button>
        <Button color="red" size="small" onClick={handleEdit} isIconButton>
          <IconClose />
        </Button>
      </div>
    </div>
  );
}

export default ContactCard;
