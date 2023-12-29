import React from 'react';
import { Link } from 'react-router-dom';

const JoinedGroup = ({ color, id, name, desc }) => {


    return (
        <>
            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <button className='button-48'>
                    <Link to={`/groups/${id}`} style={{textDecoration :"none", color: "white", fontWeight: "700"}} >
                        <span> View Group</span>
                        
                        </Link>
                    </button>
                    
                </div>
            </div >
        </>
    )
}

export default JoinedGroup