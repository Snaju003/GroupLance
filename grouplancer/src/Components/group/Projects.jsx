import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import toast from 'react-hot-toast';

function Projects({ groupId, gMembers }) {
  const [getAllProject, setGetAllProject] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getAllProjectFunction = async () => {
      try {
        const q = query(
          collection(fireDB, "projects"),
          orderBy("time"),
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let projectArray = [];
          QuerySnapshot.forEach((doc) => {
            projectArray.push({ ...doc.data(), id: doc.id });
          });
          // setGetAllProject(projectArray);
          console.log(projectArray);
          const filteredProjects = projectArray.filter(
            (project) => project.groupid === groupId
          );
          setGetAllProject(filteredProjects);
        });
        return () => data;
      } catch (error) {
        console.log(error);
      }
    };
    getAllProjectFunction();
  }, [groupId]);
  return (
    <>

      <div className='container'>
        <div className="container row">
          {getAllProject.map((project) => (
            <Card key={project.id} sx={{ maxWidth: 345 }} style={{ margin: "1rem" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.projectname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.projectdesc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleShow}>Open Task</Button>
              </CardActions>
              <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <Typography id="modal-modal-title" variant="h4" component="h2" style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
                    Tasks
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ListItem style={{ display: "flex", flexDirection: "column" }}>
                      <ListItemText primary={project.projectname} />
                      <ListItemText primary={project.projectdesc} />
                    </ListItem>
                    <ListItem style={{ display: "flex", flexDirection: "column" }}>
                      {gMembers?.map(({ _id, name, email }) => (
                        <ListItem>
                          <ListItemText primary={name} />
                          <Button variant="outlined" startIcon={<AddIcon />}>
                            Add Task
                          </Button>
                        </ListItem>
                      ))}
                    </ListItem>
                  </Typography>
                </Box>
              </Modal>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
