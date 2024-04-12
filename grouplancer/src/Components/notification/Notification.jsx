import React, { useEffect, useState } from "react";
import Invite from "./invite";
import Layout from "../Layout/Layout";

const Notification = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    const [invite, setInvite] = useState([])

    useEffect(() => {
        const fetchInvite = async () => {
            try {
                const authToken = localStorage.getItem('auth-token');
                const response = await fetch("http://localhost:8080/api/invite/get-all-invites", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": authToken,
                    },
                });
                const data = await response.json();
                console.log(data.invites);
                setInvite(data.invites)
            } catch (error) {
                console.log(error);
            }
        }
        fetchInvite();
    }
        , [])

    return (
        <>
            <Layout>
                <h1 className='text-center my-4' style={{ color: '#ffff' }}>Notifications</h1>
                <div className="container">
                    <div className="container row" style={{ flexDirection: "column" }}>
                        {invite && invite.map(() => {
                            return (
                                <div class="col-md-3 mb-3">
                                    <Invite title={title} description={description} color={color} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Notification;