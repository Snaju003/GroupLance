import React from 'react';
import {useState} from 'react';

  const ContactList = () => {
    // Sample contacts
    const contacts = [
      { id: 1, name: 'Group1' },
      { id: 2, name: 'Group2' },
      { id: 3, name: 'Group3' },
      { id: 4, name: 'Group4' },
      { id: 5, name: 'Group5' },
    ];

  const [SearchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);}

   
  
    return (
      <>
        <div style={{display:"flex",border:"solid blue",backgroundColor:"white",borderRadius:"10px"}}>
        <img src="./profile.jpg" alt="picture" style={{marginLeft:"10px",marginRight:"10px"}}/>
        <h3>My Group</h3>
        </div>
        <h3 className="text-center my-4" style={{ color: '#ffff' }}>
          My connections
        </h3>
        <input
            type="text"
            onChange={handleChange}
            placeholder="Search group name"
            value="searchInput"
            style={{height:"50px",width:"320px",borderRadius:"10px"}}
          />
        <ul className="list-group" style={{opacity:"0.7",borderRadius:"10px"}}>
          {contacts.map((contact) => (
            <li key={contact.id} className="list-group-item" style={{paddingLeft:"10px"}}>
              <img src="./profile.jpg" alt="picture" style={{marginLeft:"10px",marginRight:"20px"}} />
              <strong>{contact.name}</strong>
              <br />
              
            </li>
          ))}
        </ul>
      </>
  )
}

export default ContactList;
