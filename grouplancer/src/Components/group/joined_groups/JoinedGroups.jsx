import React, { useState, useEffect } from 'react'
import JoinedGroup from './JoinedGroup';
import { useUser } from "../../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const JoinedGroups = () => {
    const color = "#dfdffb";
    const [groupData, setGroupData] = useState([]);
    const navigate = useNavigate()
    const { currentUser } = useUser();
    useEffect(() => {
        // if (!currentUser)
        //     navigate("/login")
        // else {
            const fetchJoinedGroup = async () => {
                try {
                    const authToken = localStorage.getItem("auth-token");
                    const response = await fetch(
                        `http://localhost:8080/api/user/get-joined-groups`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "auth-token": authToken,
                            },
                        }
                    );
                    const data = await response.json();
                    console.log(data.joinedGroups);
                    setGroupData(data.joinedGroups)
                } catch (error) {
                    console.error(error);
                }
            }
            fetchJoinedGroup()
        }
    //}
    , [currentUser, navigate])
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Joined Groups</h1>
            <div className="container">
                <div className="container row">

                    {
                        groupData.map(({ _id, gName, gDesc,projName}) => {
                            return (
                                <div className="col-md-3 mb-3" key={_id}>
                                    <JoinedGroup id={_id} name={gName} desc={gDesc} color={color} />
                                </div>)
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default JoinedGroups;