import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

function Projects({ groupId }) {
  const [getAllProject, setGetAllProject] = useState([]);


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
      {getAllProject.map((project) => (
        <Card key={project.id} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.projectname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.projectdesc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Open Task</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default Projects;
