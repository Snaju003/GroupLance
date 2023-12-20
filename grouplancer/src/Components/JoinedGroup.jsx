import React from 'react';
import { Link } from 'react-router-dom'
const JoinedGroup = (props) => {
    let { title, description, color } = props;
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to="/groups" className="btn btn-primary">View Group</Link>
                </div>
            </div>
        </>
    )
}

export default JoinedGroup