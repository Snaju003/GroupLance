import React from 'react';
import { Link } from 'react-router-dom';

const MyGroup = ({ color, data }) => {
    // const { currentUser } = useUser()
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:8080/api/group/join-group", {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "auth-token": localStorage.getItem('auth-token'),
    //         },
    //         body: JSON.stringify({ userId: currentUser, groupId: e.target.id }),
    //     });
    //     const json = await response.json();

    // }
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{data.gName}</h5>
                    <p className="card-text">{data.projName}</p>
                    <Link to={`/groups/${data._id}`} className="btn btn-primary">Join Group</Link>
                </div>
            </div>
        </>
    )
}

export default MyGroup