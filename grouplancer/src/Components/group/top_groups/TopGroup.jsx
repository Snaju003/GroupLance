import React from 'react'
import { useUser } from "../../../context/UserContext";

const TopGroup = (props) => {
    let { title, description, color } = props;
    const { currentUser } = useUser()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/group/join-group", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('auth-token'),
            },
            body: JSON.stringify({ userId: currentUser, groupId: e.target.id }),
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <div className="card" style={{ backgroundColor: color , width:"80vw"}}>
                <div className="card-body" style={{display:"flex" , justifyContent:"space-between", alignItems:"center"}}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-primary" onClick={handleSubmit}>Join Group</a>
                </div>
            </div>
        </>
    )
}

export default TopGroup