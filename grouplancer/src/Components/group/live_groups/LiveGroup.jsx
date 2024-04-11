import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const LiveGroup = ({ color, title, mainGoal, id, projName, canJoin, gDesc }) => {
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

      <div onClick={handleOpen} className="card" style={{ backgroundImage: "radial-gradient(beige,#0492c2)", height: 'fit-content',boxShadow:"2px 2px 2px 2px #151e3d", borderRadius: "1rem", display: "flex", gap: "2rem" }}>

        <div className="card-body" style={{ color: "white", fontWeight: "bold",padding:"2rem" }}>
         
            <ListGroup variant="flush" style={{backgroundColor: "#0492c2",borderRadius:"1rem"}}>
              <ListGroup.Item>Group Name : {title}</ListGroup.Item>
              <ListGroup.Item>Project Name : {projName}</ListGroup.Item>
              <ListGroup.Item>Project Description : {mainGoal.slice(0, 50)}...</ListGroup.Item>
            </ListGroup>
          <a href="/" className="button-48" style={{ height: "2.5rem", width: "10rem", padding: "15px", margin: "0 auto", display: "block", color: "white", fontWeight: "bold" ,marginTop:"1rem"}} onClick={liveGroup}><span>Join Group</span></a>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} style={{}}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
            <span style={{ textDecoration: "underline" }}>Project Name</span>:  {projName}
          </Typography>
          <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
            <span style={{ textDecoration: "underline" }}>Goal</span> : {mainGoal}
          </Typography>

          <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
            <span style={{ textDecoration: "underline" }}>Group Description</span> : {gDesc}
          </Typography>
          <Button variant="contained" onClick={handleClose} style={{ marginTop: "2rem", backgroundColor: "#05023b" }}>
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
  color: "white",
  borderRadius: "2rem",
  border: "2px solid white",
  top: '50%',
  left: '50%',
  minWidth: '800px',
  transform: 'translate(-50%, -50%)',
  width: "400px",
  backgroundImage: "linear-gradient(#3048c3,#0492c2)",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default LiveGroup