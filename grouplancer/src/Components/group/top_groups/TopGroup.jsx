import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'




const TopGroup = ({color,title,description,id,canJoin,proj,goal}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {

    setOpen(true);

  };
  const handleClose = () => setOpen(false);
    const topGroup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/group/join-group", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('auth-token'),
          },
          body: JSON.stringify({ groupId: id }),
        });
        const json = await response.json();
        console.log(json)
    }

    const pvtGroup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/group/join-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('auth-token'),
          },
          body: JSON.stringify({ groupId: id, invitationLink: "http://localhost:3000/notify" }),
        });
        const json = await response.json();
        console.log(json)
    }

    return (
        <>
        
        <div className="card" onClick={handleOpen} style={{backgroundImage:"linear-gradient( #6666ff, #82caff)",borderRadius:"10px",padding:"1.5rem",boxShadow:"2px 2px 2px 2px black"}}>
                <div className="card-body" style={{color:"#fff"}}>
                    <h5 style={{fontWeight:"bold",textAlign:"center"}} className="card-title">{title}</h5>
                    <p className="card-text" style={{textAlign:"center"}}>{description}</p>
                    <a href="/" style={{backgroundColor: "#000066",display:"block",margin:"0 auto",width:"10vw"}} className="btn btn-primary" onClick={canJoin? topGroup: pvtGroup}>Join Group</a>
                </div>
            </div>
            <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

        >
          <Box sx={style} style={{ }}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              
            </Typography>
            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
             <span style={{textDecoration:"underline"}}>Group name:</span>:  {title}
            </Typography>
            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
             <span style={{textDecoration:"underline"}}>Project Name</span>:  {proj}
            </Typography>
            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
             <span  style={{textDecoration:"underline"}}>Goal</span> : {goal}
            </Typography>
            
             <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
              <span style={{textDecoration:"underline"}}>Group Description</span> : {description}
            </Typography>
            <Button variant="contained" onClick={handleClose} style={{marginTop:"2rem", backgroundColor:"#05023b"}}>
              Close
            </Button>
          </Box>
        
        </Modal>
        </>
    )
}
const style = {
  overflowWrap: "break-word",
  position: 'absolute',
  color:"white",
   borderRadius:"2rem",
  border:"2px solid white",
  top: '50%',
  left: '50%',
   minWidth:'800px',
  transform: 'translate(-50%, -50%)',
  width: "400px",
  backgroundImage: "linear-gradient(#3048c3,#0492c2)",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default TopGroup