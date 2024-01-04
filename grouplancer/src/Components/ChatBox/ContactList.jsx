import React from 'react'


  const ContactList = () => {
    // Sample contacts
    const contacts = [
      { id: 1, name: 'Group1' },
      { id: 2, name: 'Group2' },
      { id: 3, name: 'Group3' },
    ];
  
    return (
      <>
        <h1 className="text-center my-4" style={{ color: '#ffff' }}>
          Contacts
        </h1>
        <ul className="list-group">
          {contacts.map((contact) => (
            <li key={contact.id} className="list-group-item">
              <strong>{contact.name}</strong>
              <br />
              
            </li>
          ))}
        </ul>
      </>
  )
}

export default ContactList