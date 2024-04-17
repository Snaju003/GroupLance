import React, { useState, useEffect } from 'react'
import TopGroup from "./TopGroup";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const TopGroups = () => {
    const color = "#dfdffb";
    const [topGroupData, setTopGroupData] = useState([]);
    const navigate = useNavigate()
    const { currentUser } = useUser();
    useEffect(() => {
        if (1==0)
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
                    // const filteredGroups = data.groups.filter(group => group.leader !== currentUser._id);
                    // console.log(filteredGroups)
                    console.log(data.groups)
                    setTopGroupData(data.groups);
                } catch (error) {
                    console.error(error);
                }
            }
            getAllGroups()
        }
    }, [currentUser, navigate])
    return (
        <>
            {/* <h1 className='text-center my-4' style={{ color: '#ffff' }}>Top Groups</h1> */}
            <div className="container">
                <div className="container row">
                    {
                        topGroupData.map(({ _id, gName, gDesc, anyoneCanJoin, projName, goal }) => {
                            return (
                                <div className="col-md-3 mb-3" key={_id}>
                                    <TopGroup id={_id} title={gName} description={gDesc} canJoin={anyoneCanJoin} color={color} proj={projName} goal={goal} />
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

export default TopGroups;