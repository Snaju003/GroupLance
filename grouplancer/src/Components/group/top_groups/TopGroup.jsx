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
    return (
        <>
            <div className="card" style={{ backgroundColor: color , }}>
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-primary" onClick={topGroup}>Join Group</a>
                </div>
            </div>
        </>
    )
}

export default TopGroup