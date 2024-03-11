import React from 'react';
import { Link } from 'react-router-dom';

const MyGroup = ({ color, data }) => {
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{data.gName}</h5>
                    <p className="card-text">{data.projName}</p>
                    <Link to={`/groupTab/${data._id}`} className="btn btn-primary">View Group</Link>
                </div>
            </div>
        </>
    )
}

export default MyGroup