import React from 'react'
import {useState} from 'react'


  const ContactList = () => {
    // Sample contacts
    const contacts = [
      { id: 1, name: 'Group1' },
      { id: 2, name: 'Group2' },
      { id: 3, name: 'Group3' },
      { id: 3, name: 'Group4' },
      { id: 3, name: 'Group5' },
      
    ];

    const [searchInput,setSearchInput]=useState("");
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
  
    return (
      <>
        <div style={{display:"flex",border:"solid blue",backgroundColor:"white",borderRadius:"10px",gap:"30px"}}>
          <img src="./profile.jpg" alt="profile pic" style={{marginLeft:"10px",width:"60px",height:"60px",padding:"7px"}}/>
          <h4 style={{paddingTop:"15px"}}>My Group</h4>
        </div>
        <h3 className="text-center my-4" style={{ color: '#ffff'}}>
          My Connections
        </h3>
        <div className="searchlist" >
          <input style={{width:"350px",height:"50px",borderRadius:"10px"}} type="text" placeholder="Search group name" onChange={handleChange} value={searchInput}/>
        </div>
        <ul className="list-group" style={{borderRadius:"10px",opacity:"0.8"}}>
          {contacts.map((contact) => (
            <li key={contact.id} className="list-group-item">
              <img src="./profile.jpg" alt="profile pic" style={{marginLeft:"10px",width:"60px",height:"60px"}}/>
              <strong style={{paddingLeft:"60px"}}>{contact.name}</strong>
              <br />
              
            </li>
          ))}
        </ul>
      </>
  )
}

export default ContactList