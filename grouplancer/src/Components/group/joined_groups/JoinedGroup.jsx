import React from 'react';
import { Link } from 'react-router-dom';

const JoinedGroup = ({ color, id, name, desc }) => {


    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <Link to={`/groups/${id}`} className="btn btn-primary">View Group</Link>
                </div>
            </div >
        </>
    )
}

export default JoinedGroup