import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  Modal,
  TextField,
  Fab,
  Autocomplete,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { names } from "../constant/skills";

const UserAccounts = () => {
  const { currentUser, logout } = useUser();
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [skillopen, setskillOpen] = useState(false);
  const [eduopen, seteduOpen] = useState(false);
  const [workopen, setworkOpen] = useState(false);
  const [WorkExp, setWorkExp] = useState([]);
  const [institutionName, setInstitutionName] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [compduration, setcompDuration] = useState("");
  const [compstartDate, setcompStartDate] = useState("");
  const [compendDate, setcompEndDate] = useState("");
  const [educationList, setEducationList] = useState([]);
  console.log(userData.name)
  const [editName, setEditName] = useState(userData.name)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSkillOpen = () => setskillOpen(true);
  const handleSkillClose = () => setskillOpen(false);
  const handleeduOpen = () => seteduOpen(true);
  const handleeduClose = () => seteduOpen(false);
  const handleworkOpen = () => setworkOpen(true);
  const handleworkClose = () => setworkOpen(false);

  const handleAddEducation = () => {
    const newEducation = {
      institutionName,
      duration,
      startDate,
      endDate
    };
    setEducationList([...educationList, newEducation]);
    setInstitutionName("");
    setDuration("");
    setStartDate("");
    setEndDate("");
    handleeduClose();
  };
  const handleWorkEducation = () => {
    const newWork = {
      companyname,
      compduration,
      compstartDate,
      compendDate
    };
    setWorkExp([...WorkExp, newWork]);
    setcompanyname("");
    setcompDuration("");
    setcompStartDate("");
    setcompEndDate("");
    handleworkClose();
  };


  const [skillsList, setSkillsList] = useState(userData.skills);
  const [newSkill, setNewSkill] = useState("");
  const handleAddSkills = () => {
    if (newSkill !== "") {
      setSkillsList([...skillsList, newSkill]);
      setNewSkill("");
    }
    handleSkillClose();
  };

  const updateUser = async () => {
    try {
      const updSkills = [...userData.skills, ...skillsList];
      const updEducation = [...userData.education, ...educationList];
      const updWork = [...userData.workExperience, ...WorkExp];
      console.log("Inside Fetch:", updWork)
      const response = await fetch(`http://localhost:8080/api/user/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ name: editName, education: updEducation, workExperience: updWork, skills: updSkills }),
      });
      const json = await response.json();
      console.log(json);
      navigate("/userAccount");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem("auth-token");
        const response = await fetch(
          `http://localhost:8080/api/user/get-user-account`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken,
            },
          }
        );
        const data = await response.json();
        console.log(data)
        setUserData(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [currentUser, navigate]);

  return (
    <div>
      <div style={{ padding: "2rem" }}>
        <Box>
          <Typography variant="h2" component="div" className="text-center" color="white" style={{ marginBottom: "2rem" }}>
            Your Profile
          </Typography>
        </Box>
        <Box display="flex-wrap" justifyContent="center" alignItems="center" height="80vh" margin="auto" >
          <Box display="flex" flexDirection="row" gap={2}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Card sx={{ width: "40vw", height: "30vh", borderRadius: "1rem", marginLeft: "6rem" }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    UserName
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {userData.name}
                  </Typography>
                  <Typography variant="h5" component="div" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {userData.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={handleOpen} style={{ margin: "auto" }} startIcon={<EditIcon />}>Edit</Button>
                </CardActions>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={{ ...style, width: 400 }}>
                    <TextField label="Name" fullWidth onChange={(e) => setEditName(e.target.value)} />
                    <Button onClick={() => {
                      handleClose();
                      updateUser();
                    }} style={{ margin: "auto" }}>Submit</Button>
                  </Box>

                </Modal>
              </Card>
              <Card sx={{ width: "40vw", height: "30vh", borderRadius: "1rem", marginLeft: "6rem" }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Personal Ranking
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    userdata.ranking
                  </Typography>
                  <Typography variant="h5" component="div" gutterBottom>
                    Group Rankings
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Highest Group Rank
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{ margin: "auto" }}>Check All Rankings</Button>
                </CardActions>

              </Card>
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>

              <Card sx={{ width: "40vw", borderRadius: "1rem" }}>
                <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5" component="div" gutterBottom style={{ width: "fit-content" }}>
                    Skills
                  </Typography>
                  <List>
                    <ListItem>
                      <Button variant="contained" onClick={handleSkillOpen}>
                        Add <AddIcon />
                      </Button>
                      <Modal open={skillopen} onClose={handleSkillClose}>
                        <Box sx={{ ...style, width: 400 }}>
                          <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={names.sort()}
                            getOptionLabel={(option) => option}
                            filterSelectedOptions
                            value={skillsList}
                            onChange={(event, value) => setSkillsList(value)}
                            renderInput={(params) => (
                              <TextField {...params} label="Skills" placeholder="Add" />
                            )}
                          />

                          <Button onClick={() => {
                            handleAddSkills();
                            updateUser();
                          }} style={{ margin: "auto" }}>Submit</Button>
                        </Box>
                      </Modal>
                      <List style={{ marginLeft: "2rem", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                        {userData.skills && userData.skills.map((skill, index) => (
                          <ListItem key={index} style={{ backgroundColor: "#dedad9", border: "2px solid white", borderRadius: "1rem", backdropFilter: "blur(10px)", display: "block", width: "fit-content" }}>
                            <ListItemText primary={skill} />
                          </ListItem>
                        ))}
                      </List>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
              <Card sx={{ width: "40vw", borderRadius: "1rem" }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Education
                  </Typography>
                  <List>
                    <ListItem>
                      <Button variant="contained" onClick={handleeduOpen}>
                        Add <AddIcon />
                      </Button>
                      <Modal open={eduopen} onClose={handleeduClose}>
                        <Box sx={{ ...style, width: 400 }}>
                          <TextField
                            label="Institution Name"
                            fullWidth
                            required
                            value={institutionName}
                            onChange={(e) => setInstitutionName(e.target.value)}
                            style={{ marginBottom: "2vh" }}
                          />
                          <TextField
                            label="Duration"
                            fullWidth
                            required
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            style={{ marginBottom: "2vh" }}
                          />
                          <TextField
                            label="Start Date"
                            fullWidth
                            required
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            style={{ marginBottom: "2vh" }}
                          />
                          <TextField
                            label="End Date"
                            fullWidth
                            required
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                          <Button onClick={() => {
                            handleAddEducation();
                            updateUser();
                          }} style={{ marginTop: "1rem" }}>Submit</Button>
                        </Box>
                      </Modal>
                      <List style={{ marginLeft: "2rem", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                        {userData.education && userData.education.map((edu, index) => (
                          <ListItem key={index} style={{ backgroundColor: "#dedad9", border: "2px solid white", borderRadius: "1rem", backdropFilter: "blur(10px)", display: "block", width: "fit-content" }}>
                            <ListItemText primary={edu.institutionName} />
                          </ListItem>
                        ))}
                      </List>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Card sx={{ width: "40vw", borderRadius: "1rem" }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Work Experience
                  </Typography>
                  <List>
                    <ListItem>

                      <Button variant="contained" onClick={handleworkOpen}>
                        Add <AddIcon />
                      </Button>
                      <Modal open={workopen} onClose={handleworkClose}>
                        <Box sx={{ ...style, width: 400 }}>
                          <TextField
                            label="Company Name"
                            fullWidth
                            required
                            value={companyname}
                            onChange={(e) => setcompanyname(e.target.value)}
                            style={{ marginBottom: "2vh" }}
                          />
                          <TextField
                            label="Duration"
                            fullWidth
                            required
                            value={compduration}
                            onChange={(e) => setcompDuration(e.target.value)}
                            style={{ marginBottom: "2vh" }}
                          />
                          <TextField
                            label="Start Date"
                            fullWidth
                            required
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={compstartDate}
                            onChange={(e) => setcompStartDate(e.target.value)}
                            style={{ marginBottom: "2vh" }}
                          />
                          <TextField
                            label="End Date"
                            fullWidth
                            required
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={compendDate}
                            onChange={(e) => setcompEndDate(e.target.value)}
                          />
                          <Button onClick={() => {
                            handleWorkEducation();
                            updateUser();
                          }} style={{ marginTop: "1rem" }}>Submit</Button>
                        </Box>
                      </Modal>
                      <List style={{ marginLeft: "2rem", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                        {userData.workExperience && userData.workExperience.map((work, index) => (
                          <ListItem key={index} style={{ backgroundColor: "#dedad9", border: "2px solid white", borderRadius: "1rem", backdropFilter: "blur(10px)", display: "block", width: "fit-content" }}>
                            <ListItemText primary={work.companyname} />
                          </ListItem>
                        ))}
                      </List>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Box>

          </Box>
        </Box>
      </div>
    </div>
  );
};

const style = {
  position: "absolute",
  gap: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default UserAccounts;
