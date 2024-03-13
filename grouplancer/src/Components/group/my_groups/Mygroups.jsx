import React, { useEffect, useState } from 'react'
import MyGroup from './Mygroup';
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const MyGroups = () => {
    const color = "#dfdffb";
    const [myGroups, setMyGroups] = useState([]);
    const navigate = useNavigate()
    const { currentUser } = useUser();

    useEffect(() => {
        // if (currentUser)
        //     navigate("/login")
        // else {
            const fetchData = async () => {
                try {
                    const authToken = localStorage.getItem('auth-token');
                    const response = await fetch("http://localhost:8080/api/user/owned-groups", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": authToken,
                        },
                    });
                    const data = await response.json();
                    console.log(data.ownedGroups);
                    setMyGroups(data.ownedGroups);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        }
    //}
    , [currentUser,navigate])


    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>My Groups</h1>
            <div className="container">
                <div className="container row">
                    {
                        myGroups.map((groupData) => {
                            return (
                                <div className="col-md-3 mb-3" key={groupData._id}>
                                    <MyGroup data={groupData} color={color} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <div className="card" style={{ backgroundColor: color, width:"20rem" }}>
                <div className="card-body"style={{}}>
                    <p className="card-text" style={{fontWeight:"500px",fontSize:"2rem",marginLeft:"1rem"}}>Create a group</p>
                    <button className='button-48' style={{translate:"4rem",margin:"1rem"}}>
                    <Link to='/creategroup' style={{textDecoration :"none", color: "white", fontWeight: "700"}} >
                        <span style={{margin:"auto"}}>Create</span>
                        
                        </Link>
                    </button>
                    
                </div>
            </div > */}
        </>
    )
}

export default MyGroups;