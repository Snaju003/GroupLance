import React, { useEffect, useState } from "react";
import Recruit from "./Recruit";
import { useUser } from "../../../context/UserContext";

const Recruits = () => {
    const title = "hello";
    const description = "world";
    const color = "#dfdffb";
    const { currentUser } = useUser();
    const [users, setUsers] = useState()

    useEffect(() => {
        const getAllGrouplancers = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/user/get-all-users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem("auth-token"),
                    },
                });
                const json = await response.json();
                setUsers(json.users)
                console.log(users)
            } catch (error) {
                console.error(error);
            }
        };
        getAllGrouplancers();
    }, [currentUser])

    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' }}>Top Grouplancers</h1>
            <div className="container">
                <div className="container row" style={{ flexDirection: "column" }}>
                    {users && users.map(({ _id, name, email, rate, profile_pic }) => {
                        return (
                            <div class="col-md-3 mb-3">
                                <Recruit id={_id} name={name} email={email} rate={rate} profilePic={profile_pic?.image} color={color} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Recruits;