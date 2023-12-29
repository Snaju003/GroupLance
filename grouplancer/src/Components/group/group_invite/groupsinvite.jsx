import React, { useState, useEffect } from 'react'
import GroupInvite from './groupinvite';
import { useUser } from "../../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const GroupsInvite = () => {
    const color = "#dfdffb";
    const [liveGroupData, setLiveGroupData] = useState([]);
    const navigate = useNavigate()
    const { currentUser } = useUser();
    useEffect(() => {
        if (!currentUser)
            navigate("/login")
        else {
            const getAllGroups = async () => {
                try {
                    const authToken = localStorage.getItem("auth-token");
                    const response = await fetch(
                        `http://localhost:8080/api/group/get-all-groups`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "auth-token": authToken,
                            },
                        }
                    );
                    const data = await response.json();
                    const filteredGroups = data.groups.filter(group => group.leader !== currentUser._id);
                    //console.log(filteredGroups)
                    setLiveGroupData(filteredGroups);
                } catch (error) {
                    console.error(error);
                }
            }
            getAllGroups()
        }
    }, [currentUser, navigate])
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Group Invite</h1>
            <div className="container">
                <div className="container row">
                    {
                        liveGroupData.map(({ _id, gName, gDesc, anyoneCanJoin }) => {
                            return (
                                <div className="col-md-3 mb-3" key={_id}>
                                    <GroupInvite id={_id} title={gName} description={gDesc} canJoin={anyoneCanJoin} color={color} />
                                </div>
                            )
                        }

                        )
                    }
                </div>
            </div>
        </>
    )
}

export default GroupsInvite;