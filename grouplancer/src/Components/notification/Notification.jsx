import React, { useEffect, useState } from "react";
import Invite from "./invite";
import Layout from "../Layout/Layout";
import { useUser } from "../../context/UserContext";

const Notification = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    const [invite, setInvite] = useState([]);
    const { currentUser } = useUser()

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
                // Filter unique groups based on group name
                const uniqueGroups = filterUniqueGroups(data.invites);
                setInvite(uniqueGroups);
            } catch (error) {
                console.log(error);
            }
        };
        fetchInvite();
    }, []);

    // Function to filter unique groups based on group name
    const filterUniqueGroups = (invites) => {
        const groupNames = new Set();
        const uniqueGroups = invites.filter(({ group }) => {
            if (!groupNames.has(group.gName)) {
                groupNames.add(group.gName);
                return true;
            }
            return false;
        });
        return uniqueGroups;
    };

    return (
        <>
            <Layout>
                <h1 className='text-center my-4' style={{ color: '#ffff' }}>Notifications</h1>
                <div className="container">
                    <div className="container row" style={{ flexDirection: "column" }}>
                        {invite && invite.map(({ group }) => {
                            if (!currentUser.groups.includes(group._id)) {
                                return (
                                    <div className="col-md-3 mb-3">
                                        <Invite id={group._id} title={group.gName} description={group.gDesc} color={color} />
                                    </div>
                                ); 
                            }
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Notification;
