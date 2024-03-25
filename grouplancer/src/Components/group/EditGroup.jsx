import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const EditGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [mainGoal, setMainGoal] = useState('');
  const [domain, setDomain] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [groupType, setGroupType] = useState('');
  const [whoCanJoin, setWhoCanJoin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log({
      groupName,
      projectName,
      mainGoal,
      domain,
      groupDescription,
      groupType,
      whoCanJoin
    });
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
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
        >
          <MenuItem value="Type 1">Anyone can Join</MenuItem>
          <MenuItem value="Type 2">By Request</MenuItem>
          
        </Select>
      </FormControl>
      <Button variant="contained" type="submit" style={{margin:"auto"}}>Create Group</Button>
    </form>
  );
};

export default EditGroup;
