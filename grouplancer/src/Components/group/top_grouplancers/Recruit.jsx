import React from 'react'

const Recruit = (props) => {
    let { title, description, color } = props;
    return (
        <>
            <div className="card" style={{ backgroundColor: color ,width: "80vw"}}>
            
                <div className="card-body" style={{display:"flex" , justifyContent:"space-between", alignItems:"center"}}>
                
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" target='__blank' className="btn btn-primary">Invite</a>
                </div>
            </div>
        </>
    )
}

export default Recruit