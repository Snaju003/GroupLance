import React, { useState, useEffect } from 'react'
import JoinedGroup from './JoinedGroup';
import { useUser } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

const JoinedGroups = () => {
    const color = "#dfdffb";
    const [groupData, setGroupData] = useState()
    const { currentUser } = useUser();
    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser)
            navigate("/login")
        else {
            const fetchJoinedGroup = async () => {
                try {
                    const response = await fetch(
                        `http://localhost:8080/api/user/get-joined-groups/${currentUser._id}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "auth-token": localStorage.getItem("auth-token"),
                            },
                        }
                    );
                    const data = await response.json();
                    setGroupData(data.joinedGroups)
                } catch (error) {
                    console.error(error);
                }
            }
            fetchJoinedGroup()
        }
    },[currentUser,navigate])
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Joined Groups</h1>
            <div className="container">
                <div className="container row">
                    <div class="col-md-3 mb-3">
                        <JoinedGroup data={groupData} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup data={groupData} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup data={groupData} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup data={groupData} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup data={groupData} color={color} />
                    </div>
                    <div class="col-md-3 mb-3">
                        <JoinedGroup data={groupData} color={color} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinedGroups;