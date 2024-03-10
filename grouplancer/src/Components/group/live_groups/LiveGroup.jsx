import React from 'react';

const LiveGroup = ({color,title,mainGoal,id,projName,canJoin}) => {
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
        
            <div className="card" style={{ backgroundColor: color, height:'26vh'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{projName}</p>
                    <p className="card-text">{mainGoal}</p>
                    <a href="/" className="button-48" onClick={liveGroup}><span>Join Group</span></a>
                </div>
            </div>
        </>
    )
}

export default LiveGroup