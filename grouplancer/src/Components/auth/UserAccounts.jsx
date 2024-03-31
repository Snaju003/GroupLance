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
import NavBar from "../general/Navbar";
import Footer from "../general/footer/Footer";

const dummyEdu = [
 {
  institution: "Dummy University",
  
  startDate: "September 2016",
  endDate: "May 2020",
  degree: "Bachelor of Science",
  major: "Computer Science",
}
];

// console.log(education);


const UserAccounts = () => {
  const { currentUser } = useUser();
  //console.log(currentUser);
  const [editName, setEditName] = useState("");
  useEffect(() => {
    const name = currentUser?.name;
    setEditName(name);
  }, [currentUser]);
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

  const [userData, setUserData] = useState({ name: "", email: ""});
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


  const [skillsList, setSkillsList] = useState(userData.skills);
  const [newSkill, setNewSkill] = useState("");
  const handleAddSkills = () => {
    if (newSkill !== "") {
      setSkillsList([...skillsList, newSkill]);
      setNewSkill("");
    }
    handleSkillClose();
  };

  const updateUserName = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ name: editName }),
      });
      const json = await response.json();
      console.log(json);
      navigate("/userAccount");
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserEducation = async () => {
    try {
      const updEducation = [...userData.education, ...educationList];
      console.log("Education:", updEducation)
      const response = await fetch(`http://localhost:8080/api/user/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ education: updEducation }),
      });
      const json = await response.json();
      console.log(json);
      navigate("/userAccount");
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserSkills = async () => {
    try {
      const updSkills = [...userData.skills, ...skillsList];
      const response = await fetch(`http://localhost:8080/api/user/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ skills: updSkills }),
      });
      const json = await response.json();
      console.log(json);
      navigate("/userAccount");
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserWork = async () => {
    try {
      const updWork = [...userData.workExperience, ...WorkExp];
      const response = await fetch(`http://localhost:8080/api/user/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ workExperience: updWork }),
      });
      const json = await response.json();
      console.log(json);
      navigate("/userAccount");
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <>
    <NavBar />
    <div style={{ height: "200vh" }}>
      <div style={{ padding: "2rem" }}>
        <Box>
          <Typography variant="h2" component="div" className="text-center" color="white" style={{ marginBottom: "1rem" }}>
            Your Profile
          </Typography>
        </Box>
        <Box justifyContent="center" alignItems="center" height="80vh" >
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={2} >
            <Card sx={{ height: "55vh", borderRadius: "1rem", backdropFilter: "blur(50px)" }}>
              <CardContent>
                <div style={{ backgroundImage: "linear-gradient(#241571,#9867c5,#57a0d3)", borderRadius: "1rem", height: "15vh" }}>
                  <img src="https://cdn-icons-png.flaticon.com/256/4021/4021443.png" style={{ width: "8vw", height: "18vh", margin: " 3rem 7rem 0.2rem 7rem", bottom: "5px" }}></img>
                </div>
                <Typography variant="h6" component="div" textAlign="center" marginTop="5rem">
                  UserName
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  {currentUser?.name}
                </Typography>
                <Typography variant="h6" component="div" textAlign="center">
                  Email
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  {currentUser?.email}
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
                    updateUserName();
                  }} style={{ margin: "auto" }}>Submit</Button>
                </Box>
              </Modal>
            </Card>
            <Card sx={{ height: "55vh", borderRadius: "1rem", width: "20vw", paddingTop: "5rem" }}>
              <CardContent>
                <Typography variant="h5" textAlign="center" component="div" gutterBottom>
                  Personal Ranking
                </Typography>
                <Typography variant="body1" textAlign="center" color="text.secondary">
                  userdata.ranking
                </Typography>
                <Typography variant="h5" textAlign="center" component="div" gutterBottom>
                  Group Rankings
                </Typography>
                <Typography variant="body1" textAlign="center" color="text.secondary">
                  Highest Group Rank
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ margin: "auto" }}>Check All Rankings</Button>
              </CardActions>
            </Card>
          </Box>
          <Box display="flex" flexDirection="column" gap={2} marginTop="1rem" alignItems="center">
            <Card sx={{ width: "60vw", borderRadius: "1rem" }}>
              <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" component="div" gutterBottom style={{ width: "fit-content" }}>
                  Skills
                </Typography>
                <List>
                  <ListItem>
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
                          updateUserSkills();
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
            <Card sx={{ width: "60vw", borderRadius: "1rem" }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Education
                </Typography>
                <Button onClick={handleOpen}>See Details</Button>
                <List>
                  <ListItem>
                    {/* <Button variant="contained" onClick={handleeduOpen}>
                      Add <AddIcon />
                    </Button> */}
                    {/* <Modal open={eduopen} onClose={handleeduClose}>
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
                          updateUserEducation();
                        }} style={{ marginTop: "1rem" }}>Submit</Button>
                      </Box>
                    </Modal> */}
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{display:"flex", justifyContent:"center"}}>
            Education
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {dummyEdu.map((edu, index) => (
                        <ListItem key={index} style={{display:"flex", flexDirection:"column"}}>
                          <ListItemText primary={`Institution : ${edu.institution}`} />
                          <ListItemText primary={`Start Date : ${edu.startDate}`} />
                          <ListItemText primary={`End Date : ${edu.endDate}`} />
                        </ListItem>
                      ))}
          </Typography>
        
        </Box>
      </Modal>

                   
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card sx={{ width: "60vw", borderRadius: "1rem" }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Work Experience
                </Typography>
                <List>
                  <ListItem>

                    {/* <Button variant="contained" onClick={handleworkOpen}>
                      Add <AddIcon />
                    </Button> */}
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
                          updateUserWork();
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
            <Button style={{position:"absolute", right:"10rem",top:"110vh"}} variant="contained" onClick={()=>{navigate('/create')}}>
                      Add <AddIcon />
                    </Button>
          </Box>
        </Box>
      </div>
    </div>
  
    </>
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
