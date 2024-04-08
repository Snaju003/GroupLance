import React from 'react'




const TopGroup = ({color,title,description,id,canJoin}) => {
    const topGroup = async (e) => {
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

    const pvtGroup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/group/join-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('auth-token'),
          },
          body: JSON.stringify({ groupId: id, invitationLink: "http://localhost:3000/notify" }),
        });
        const json = await response.json();
        console.log(json)
    }

    return (
        <>
            <div className="card" style={{backgroundImage:"linear-gradient( #6666ff, #1a1aff)", backdropFilter:"blur(50px)",boxShadow:"10px 5px 5px #a6a6a6", border:"4px solid white",borderRadius:"4px" }}>
                <div className="card-body" style={{color:"#fff"}}>
                    <h5 style={{fontWeight:"700px"}} className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" style={{backgroundColor: "#000066"}} className="btn btn-primary" onClick={canJoin? topGroup: pvtGroup}>Join Group</a>
                </div>
            </div>
           
        </>
    )
}

export default TopGroup