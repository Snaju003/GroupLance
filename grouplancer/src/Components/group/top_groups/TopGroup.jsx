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
        
        <div className="card" style={{backgroundImage:"linear-gradient( #6666ff, #82caff)",borderRadius:"10px",padding:"1.5rem",boxShadow:"2px 2px 2px 2px black"}}>
                <div className="card-body" style={{color:"#fff"}}>
                    <h5 style={{fontWeight:"bold",textAlign:"center"}} className="card-title">{title}</h5>
                    <p className="card-text" style={{textAlign:"center"}}>{description}</p>
                    <a href="/" style={{backgroundColor: "#000066",display:"block",margin:"0 auto",width:"10vw"}} className="btn btn-primary" onClick={canJoin? topGroup: pvtGroup}>Join Group</a>
                </div>
            </div>
        
            
        </>
    )
}

export default TopGroup