import React from 'react'

const Invite = (props) => {
    let { title, description, color } = props;

    // const addMember = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:8080/api/group/add-member", {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem('auth-token'),
    //         },
    //         body: JSON.stringify({ userId: , groupId: groupId }),
    //     });
    //     const json = await response.json();
    //     console.log(json)
    // }

    return (
        <>
            <div className="card" style={{ backgroundColor: color, width: "80vw" }}>

                <div className="card-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div atyle={{ display: "flex", juatifyContent: "space-between" }}>
                        <a href="/" target='__blank' className="btn btn-primary" style={{ marginRight: "1rem" }}>Accept</a>
                        <a href="/" target='__blank' className="btn btn-primary">Reject</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Invite;