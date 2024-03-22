import React, { useState,useEffect } from 'react';
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
const ContactList = ({ onGroupClick }) => {
  // Sample contacts

  const [groupData, setGroupData] = useState([]);
  const navigate = useNavigate()
  const { currentUser } = useUser();
  useEffect(() => {
      // if (!currentUser)
      //     navigate("/login")
      // else {
          const fetchJoinedGroup = async () => {
              try {
                  const authToken = localStorage.getItem("auth-token");
                  const response = await fetch(
                      `http://localhost:8080/api/conversation/get-all-conversations`,
                      {
                          method: "GET",
                          headers: {
                              "Content-Type": "application/json",
                              "auth-token": authToken,
                          },
                      }
                  );
                  const data = await response.json();
                  console.log(data.conversations);
                  setGroupData(data.conversations)
              } catch (error) {
                  console.error(error);
              }
          }
          fetchJoinedGroup()
      }
  //}
  , [currentUser, navigate])
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <>
      {/* <div style={{ display: "flex", border: "solid blue", backgroundColor: "white", borderRadius: "10px" }}>
        <img src="./default-user.jpg" alt="picture" style={{ marginLeft: "10px", marginRight: "10px" }} />
        <h3 style={{padding:"20px"}}>My Group</h3>
      </div> */}
      <h3 className="text-center my-4" style={{ color: '#ffff' }}>
        My connections
      </h3>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search group name"
        value={searchInput}
        style={{ height: "50px", width: "320px", borderRadius: "10px" }}
      />
      <ul className="list-group" style={{ opacity: "0.7", borderRadius: "10px" }}>
        {groupData&&groupData.map((gdata) => (
          <li key={gdata._id} className="list-group-item" style={{ paddingLeft: "10px" }} onClick={() => onGroupClick(gdata)}>
            <img src="./default-user.jpg" alt="picture" style={{ marginLeft: "10px", marginRight: "20px" }} />
            <strong>{gdata.group.gName}</strong>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
