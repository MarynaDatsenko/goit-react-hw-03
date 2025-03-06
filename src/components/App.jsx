import initialContacts from "../contacts.json";
import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(({ id }) => id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}
