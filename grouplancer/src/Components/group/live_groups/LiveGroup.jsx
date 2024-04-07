import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const LiveGroup = ({ color, title, mainGoal, id, projName, canJoin,gDesc }) => {
  const liveGroup = async (e) => {
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {

    setOpen(true);

  };
  const handleClose = () => setOpen(false);
  return (
    <>

      <div onClick={handleOpen} className="card" style={{ backgroundImage: "linear-gradient(#3048c3,#0492c2)", height: '26vh', boxShadow: "2px 2px 1px 1px #ffff", border: "solid 5px white", borderRadius: "2rem", display: "flex", flexDirection: "row", gap: "2rem" }}>

        <div className="card-body" style={{ color: "white", fontWeight: "bold" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{projName}</p>
          <p className="card-text">{mainGoal.slice(0,50)}...</p>
          <a href="/" className="button-48" style={{ height: "2.5rem", width: "10rem", padding: "15px", margin: "0 auto", display: "block", color: "white", fontWeight: "bold" }} onClick={liveGroup}><span>Join Group</span></a>
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
              {title}
            </Typography>
            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
             <span style={{textDecoration:"underline"}}>Project Name</span>:  {projName}
            </Typography>
            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
             <span  style={{textDecoration:"underline"}}>Goal</span> : {mainGoal}
            </Typography>
            
             <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
              <span style={{textDecoration:"underline"}}>Group Description</span> : {gDesc}
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
export default LiveGroup