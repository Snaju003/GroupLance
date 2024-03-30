import React from 'react';

const LiveGroup = ({ color, title, mainGoal, id, projName, canJoin }) => {
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

            <div className="card" style={{ backgroundImage: "linear-gradient(#3048c3,#0492c2)", height: '26vh',boxShadow:"2px 2px 1px 1px #ffff",border:"solid 5px white",borderRadius:"2rem",display:"flex",flexDirection:"row",gap:"2rem" }}>
            
                <div className="card-body" style={{color:"white",fontWeight:"bold"}}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{projName}</p>
                    <p className="card-text">{mainGoal}</p>
                    <a href="/" className="button-48" style={{ height: "2.5rem",width:"10rem", padding: "15px",margin:"0 auto",display:"block" }} onClick={liveGroup}><span>Join Group</span></a>
                </div>
               
            </div>
        </>
    )
}

export default LiveGroup