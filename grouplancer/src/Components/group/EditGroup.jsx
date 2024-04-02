import React, { useEffect, useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import toast from "react-hot-toast";

const EditGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [mainGoal, setMainGoal] = useState('');
  const [domain, setDomain] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [groupType, setGroupType] = useState('');
  const [whoCanJoin, setWhoCanJoin] = useState('');
  const {id} =useParams();
  const [groupDetails, setGroupDetails] = useState({});

    const navigate = useNavigate();
    const { currentUser } = useUser();

  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem("auth-token");
                const response = await fetch(
                    `http://localhost:8080/api/group/get-group-details/${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": authToken,
                        },
                    }
                );
                const data = await response.json();
                //console.log(data.group);
                setGroupDetails(data.group);
                setGroupName(data.group.groupName);
                setProjectName(data.group.projName);
                setMainGoal(data.group.mainGoal);
                setDomain(data.group.domain);
                setGroupDescription(data.group.gDesc);
                setGroupType(data.group.publicGroup ? true : false);
                setWhoCanJoin(data.group.whoCanJoin === "Anyone can Join" ? "Type 1" : "Type 2");

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [currentUser, navigate, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        projName: projectName,
        publicGroup: groupType === "Public" ? true : false, 
        gDesc: groupDescription,
       groupName: groupName,
    };
    console.log(data);
    try {
      const response = await fetch('http://localhost:8080/api/group/edit-group-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify({groupId: id,data:data}) 
      });
      const json = await response.json();
      console.log(json);
      toast.success("Succesfully Edited")
      console.log('Group info updated successfully');
    } catch (error) {
      console.error( error);
      toast.error("Failed to edit")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Main Goal"
        value={mainGoal}
        onChange={(e) => setMainGoal(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Group Description"
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Domain Selection</InputLabel>
        <Select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <MenuItem value="General">General</MenuItem>
          <MenuItem value="App Development">App Development</MenuItem>
          <MenuItem value="CyberSecurity">CyberSecurity</MenuItem>
          <MenuItem value="IOT">IOT</MenuItem>
          <MenuItem value="Programming and Development">Programming and Development</MenuItem>
          <MenuItem value="Data science and analytics">Data science and analytics</MenuItem>
          <MenuItem value="Mobile Development">Mobile Development</MenuItem>
          <MenuItem value="Frontend Development">Frontend Development</MenuItem>
          <MenuItem value="Backend Development">Backend Development</MenuItem>
          <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
          <MenuItem value="Game Development">Game Development</MenuItem>
          <MenuItem value="Blockchain and Cryptocurrency">Blockchain and Cryptocurrency</MenuItem>
          <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
          <MenuItem value="Networking">Networking</MenuItem>
          <MenuItem value="Operating System">Operating System</MenuItem>
          <MenuItem value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</MenuItem>
          <MenuItem value="Software Testing">Software Testing</MenuItem>
          <MenuItem value="Web Servers">Web Servers</MenuItem>
          <MenuItem value="Databases">Databases</MenuItem>
          <MenuItem value="Tech Entrepreneurship">Tech Entrepreneurship</MenuItem>
          <MenuItem value="DevOps">DevOps</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Group Type</InputLabel>
        <Select
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
        >
          <MenuItem value="Type 1">Public</MenuItem>
          <MenuItem value="Type 2">Private</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Who can Join</InputLabel>
        <Select
          value={whoCanJoin}
          onChange={(e) => setWhoCanJoin(e.target.value)}
        >
          <MenuItem value="Type 1">Anyone can Join</MenuItem>
          <MenuItem value="Type 2">By Request</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type="submit" style={{ margin: "auto" }}>Update Group</Button>
    </form>
  );
};

export default EditGroup;
