import React from 'react'

const Invite = (props) => {
    let { title, description, color } = props;
    return (
        <>
            <div className="card" style={{ backgroundColor: color ,width: "80vw"}}>
            
                <div className="card-body" style={{display:"flex" , justifyContent:"space-between", alignItems:"center"}}>
                
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div atyle={{display:"flex", juatifyContent:"space-between"}}>
                    <a href="/" target='__blank' className="btn btn-primary" style={{marginRight:"1rem"}}>Accept</a>
                    <a href="/" target='__blank' className="btn btn-primary">Reject</a>
                    </div>
                 
                </div>
            </div>
        </>
    )
}

export default Invite;