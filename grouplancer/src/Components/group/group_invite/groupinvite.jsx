import React from 'react';

const GroupInvite = ({color,title,description,id,canJoin}) => {
    const liveGroup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/group/join-group", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('auth-token'),
          },
          body: JSON.stringify({ groupId: id }),
        });
        const json = await response.json();
        console.log(json)
    }
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <span><a href="/" className="btn btn-primary" onClick={liveGroup}>Accept</a></span>
                    <span style={{margin:"50px"}}><a href="/" className="btn btn-primary" onClick={liveGroup} >Reject</a></span>
                </div>
            </div>
        </>
    )
}

export default GroupInvite