import React, { useState, useEffect } from "react";

const groupDesign = {
    backgroundColor: "lightgray", marginLeft: "20px", padding: "15px", borderRadius: "15px"
}

const UserAccounts = ({ userId, authToken }) => {

    const [userData, setUserData] = useState({ name: "", email: "" });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/auth/getuser/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, [userId,authToken]);

    return (
        <>
            <div className="container" style={{ display: "flex", marginTop: "30px" }}>
                <img
                    src="./default-user.jpg"
                    alt="profile_image"
                    style={{ marginRight: "350px", marginLeft: "30px", height: "200px", width: "200px" }}
                />
                <div style={{ marginTop: "30px", backgroundColor: "white", width: "1500px", textAlign: "justify", borderRadius: "15px", paddingLeft: "15px", paddingTop: "10px" }}>
                    <p style={{ fontSize: "25px" }}>Name: {userData.name}</p>
                    <p style={{ fontSize: "25px" }}>Email: {userData.email}</p>
                    <p style={{ fontSize: "25px" }}>Joined Groups: </p>
                </div>
            </div>
            <div className="group-container" style={{ backgroundColor: "white", marginLeft: "120px", marginRight: "110px", marginTop: "40px", padding: "15px", borderRadius: "15px" }}>
                <p style={{ fontSize: "25px" }}>Group Information</p>
                <div className="sub-group-container" style={{ groupDesign }}>
                    <p>Group 1</p>
                </div>
                <div className="sub-group-container" style={{ groupDesign }}>
                    <p>Group 2</p>
                </div>
            </div>
        </>
    )
}

export default UserAccounts;