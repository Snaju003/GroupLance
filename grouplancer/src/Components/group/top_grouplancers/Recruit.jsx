import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Recruit = (props) => {
    let { title, description, color } = props;
    return (
        <>
            <div className="card" style={{ backgroundColor: color ,width: "80vw"}}>
                
            
                <div className="card-body" style={{display:"flex" , justifyContent:"space-between", alignItems:"center", backgroundImage:"linear-gradient( #6666ff, #1a1aff)", backdropFilter:"blur(50px)",boxShadow:"10px 5px 5px #a6a6a6", border:"4px solid white",borderRadius:"4px"}}>
                <img src="aboutUs.jpg" alt="" style={{display:"block", marginLeft:"3px"}}/>
                    <h5 style={{marginLeft:"2px",color:"white", fontWeight:"700px"}} className="card-title">{title}</h5>
                    <p style={{color:"white", fontWeight:"700px"}}className="card-text">{description}</p>
                    {/* <a href="/" target='__blank' className="btn btn-primary" style={{}}>Invite</a> */}
                    <Button style={{backgroundColor:"#000066"}} variant="contained" endIcon={<SendIcon />}>
        Invite
      </Button>
                </div>
            </div>
        </>
    )
}

export default Recruit