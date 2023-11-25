import { Contact } from "@/data/contacts";
import ContactCard from "../ContactCard/ContactCard";
import styles from './ContactsList.module.scss';

interface ContactsListProps {
  items: Contact[];
}

function ContactsList({ items }: ContactsListProps) {
  return (
    <ul className={styles.list}>
      {items.map((contact) => (
        <ContactCard key={`contact-item-${contact.id}`} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactsList;
