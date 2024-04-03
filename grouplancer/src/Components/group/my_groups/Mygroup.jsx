import React from 'react';
import { Link } from 'react-router-dom';

const MyGroup = ({ color, data }) => {
    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{data.gName}</h5>
                    <p className="card-text">{data.projName}</p>
                    
                    <Link to={`/groupTab/${data._id}`}><button className='button-48'style={{textDecoration :"none", color: "white", fontWeight: "700"}}><span>View Group</span></button></Link>
                </div>
            </div>
            
        </>
    )
}

export default MyGroup