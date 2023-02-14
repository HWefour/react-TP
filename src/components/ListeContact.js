import React, { useState } from 'react';
const Contact = ({ nom , tel }) => (
    <div>
      <p>Nom: {nom}</p>
      <p>tel: {tel}</p>
    </div>
  );
  const ContactList = () => {
    const [contacts, setContacts] = useState([
      { nom: 'John Wall', tel: '555-555-5555' },
      { nom: 'Ja morant', tel: '111-111-1111' },
    ]);
  
    const addContact = (nom, tel) => {
      setContacts([...contacts, { nom, tel }]);
    };
    return (<div>
        {contacts.map(contact => (
          <Contact key={contact.tel} {...contact} />
        ))}
        <button onClick={() => addContact('New Contact', '777-777-7777')}>
          Nouveau Contact
        </button>
      </div>
    );
  };
  
  export default ContactList;