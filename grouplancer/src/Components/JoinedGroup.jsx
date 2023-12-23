import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import { useUser } from "../context/UserContext";

const JoinedGroup = (props) => {
    let { title, description, color } = props;
    const [userData,setUserData]= useState({title: "", description: ""})
    const { currentUser } = useUser();
    const fetchJoinedGroup = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/api/user/get-joined-groups/${currentUser._id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
              },
            }
          );
          const data = await response.json();
          setUserData(data.user)
        } catch (error) {
          console.error(error);
        }
    }
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{userData.title}</h5>
                    <p className="card-text">{userData.description}</p>
                    <Link to="/groups" className="btn btn-primary">View Group</Link>
                </div>
            </div>
        </>
    )
}

export default JoinedGroup