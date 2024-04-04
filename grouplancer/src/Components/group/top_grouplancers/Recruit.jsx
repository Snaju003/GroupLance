import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Recruit = ({ id, name, email, rate, profilePic, color }) => {

    // const inviteMember = async () => {
    //     try {
    //         const authToken = localStorage.getItem("auth-token");
    //         const response = await fetch(
    //             `http://localhost:8080/api/group/invite-members`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "auth-token": authToken,
    //                 },
    //                 body: JSON.stringify({
    //                     invitedUserMail: email,
    //                     invitationLink: "http://localhost:3000/sidebar",
    //                     group: {
    //                         id: id,
    //                         name: grpName,
    //                         desc: grpDesc,
    //                     },
    //                     inviterName: currentUser,
    //                 }),
    //             }
    //         );
    //         const data = await response.json();
    //         console.log(data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <>
            <div className="card" style={{ backgroundColor: color, width: "80vw" }}>
                <div className="card-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: "linear-gradient( #6666ff, #1a1aff)", backdropFilter: "blur(50px)", boxShadow: "10px 5px 5px #a6a6a6", border: "4px solid white", borderRadius: "4px" }}>
                    <img
                        src={profilePic ? profilePic : "https://cdn-icons-png.flaticon.com/256/4021/4021443.png"}
                        alt="Profile Picture"
                        style={{ width: "8vw", height: "18vh", margin: " 3rem 7rem 0.2rem 7rem", bottom: "5px", cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "2px", color: "white", fontWeight: "700px" }} className="card-title">{name}</h5>
                    <p style={{ color: "white", fontWeight: "700px" }} className="card-text">{email}</p>
                    <Button style={{ backgroundColor: "#000066" }} variant="contained" endIcon={<SendIcon />}>
                        Invite
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Recruit