import React, { useState, useEffect } from "react";
import LiveGroup from "./LiveGroup";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const LiveGroups = () => {
  const color = "#dfdffb";
  const [liveGroupData, setLiveGroupData] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useUser();
  useEffect(() => {
    // if (currentUser) navigate("/login");
    // else {
      const getAllGroups = async () => {
        try {
          const authToken = localStorage.getItem("auth-token");
          const response = await fetch(
            `http://localhost:8080/api/group/get-all-groups`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token": authToken,
              },
            }
          );
          const data = await response.json();
          const filteredGroups = data.groups.filter(
            (group) => group.leader !== currentUser._id
          );
          console.log(filteredGroups);
          setLiveGroupData(filteredGroups);
        } catch (error) {
          console.error(error);
        }
      };
      getAllGroups();
    }
  //}
  , [currentUser, navigate]);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setTimeout(()=>{
      setOpen(true);
    },1000);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        Live Groups
      </h1> */}
      <h1 className=" my-4" style={{ color: "#ffff", marginLeft:"60px",fontWeight:"bold" }}>
        Live Groups
      </h1>
      <div className="container">
        <div className="container column" onMouseEnter={handleOpen}>
          {liveGroupData.map(
            ({ _id, gName, goal, projName, anyoneCanJoin }) => {
              return (
                <div className="col-md-3 mb-3" key={_id} style={{width:"90%"}}>
                  <LiveGroup
                  
                    id={_id}
                    title={gName}
                    projName={projName}
                    mainGoal={goal}
                    canJoin={anyoneCanJoin}
                    color={color}
                  />

                </div>
              );
            }
          )}
        </div>
      </div>
      {liveGroupData.map(
            ({ _id, gName, goal, projName, anyoneCanJoin }) => {
              return (
                <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  {gName}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    
                  </Typography>
                </Box>
              </Modal>
              );
            }
          )}
      
    </>
  );
};

export default LiveGroups;
