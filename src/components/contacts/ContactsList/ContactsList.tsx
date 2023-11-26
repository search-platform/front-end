import { Contact } from "@/data/contacts";
import ContactCard from "../ContactCard/ContactCard";
import styles from './ContactsList.module.scss';
import {BankContact} from "@/data/banks";

interface ContactsListProps {
  organizationId: number;
  items: BankContact[];
}

function ContactsList({ items, organizationId }: ContactsListProps) {
  return (
    <ul className={styles.list}>
      {items.map((contact) => (
        <ContactCard
          key={`contact-item-${contact.id}`}
          contact={contact}
          organizationId={organizationId}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
