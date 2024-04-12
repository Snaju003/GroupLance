import React, { useState } from 'react'
import { useUser } from "../../context/UserContext"

const Invite = (props) => {
    let { title, description, color } = props;
    const { currentUser } = useUser();

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

    // const acceptInvite = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:8080/api/group/join-group", {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem('auth-token'),
    //         },
    //         body: JSON.stringify({ groupId: id }),
    //     });
    //     const json = await response.json();
    //     console.log(json)
    // }

    const rejectInvite = async () => {
        try {
            const authToken = localStorage.getItem('auth-token');
            const response = await fetch(`http://localhost:8080/api/invite//reject-invite/${currentUser._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken,
                },
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="card" style={{ backgroundColor: color, width: "80vw" }}>

                <div className="card-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div atyle={{ display: "flex", juatifyContent: "space-between" }}>
                        <a href="/" target='__blank' className="btn btn-primary" style={{ marginRight: "1rem" }}>Accept</a>
                        <a href="/" target='__blank' className="btn btn-primary" onClick={rejectInvite}>Reject</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Invite;