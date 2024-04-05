import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../../../context/UserContext";
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
import { names } from "../../constant/skills";
import NavBar from "../../general/Navbar";
import Footer from "../../general/footer/Footer";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
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
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

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
  const [eduopen, setEduOpen] = useState(false);
  const [workopen, setworkOpen] = useState(false);
  const [skillModal, setSkillModal] = useState(false)


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSkillOpen = () => setskillOpen(true);
  const handleSkillClose = () => setskillOpen(false);
  const handleeduOpen = () => setEduOpen(true);
  const handleeduClose = () => setEduOpen(false);
  const handleworkOpen = () => setworkOpen(true);
  const handleworkClose = () => setworkOpen(false);
  const handleEduOpen = () => setEduOpen(true);
  const handleEduClose = () => setEduOpen(false);
  const handleSkillModal = () => setSkillModal(true);
  const handleSkillModalClose = () => setSkillModal(false)

  const [userData, setUserData] = useState({ name: "", email: "" });
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


  const [formData, setFormData] = useState({
    media: null
  });
  const [postImage, setPostImage] = useState("");
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
    if (!postImage) {
      e.target.value = null;
      return;
    }
    try {
      e.preventDefault();
      const authToken = localStorage.getItem('auth-token');
      const response = await fetch("http://localhost:8080/api/file/upload-user-pic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ file: postImage })
      });
      const data = await response.json();
      console.log(data);
      setFormData({ media: base64 });
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e) => {
    if (e.target.name === "media") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('auth-token');
        const response = await fetch("http://localhost:8080/api/file/get-user-pic", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        });
        const data = await response.json();
        // console.log(data.existsImage.image);
        setFormData({ ...formData, media: data.existsImage.image });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const inputRef = useRef(null);
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
                  <div style={{ backgroundImage: "linear-gradient(#241571,#9867c5,#57a0d3)", borderRadius: "1rem", height: "15vh", position: "relative" }}>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleChange(e);
                        handleFileUpload(e);
                      }}
                      name="media"
                      accept="image/*, video/*"
                      style={{ display: "none" }}
                      ref={inputRef}
                    />
                    <img
                      src={userData.profile_pic?.image ? userData.profile_pic?.image : "https://cdn-icons-png.flaticon.com/256/4021/4021443.png"}
                      alt="Profile Picture"
                      style={{ width: "8vw", height: "18vh", margin: " 3rem 7rem 0.2rem 7rem", bottom: "5px", cursor: "pointer" }}
                    />
                    <IconButton onClick={() => inputRef.current.click()} style={{ position: "absolute", top: "11rem", right: "9.5rem" }}>
                      <AddAPhotoIcon />
                    </IconButton>
                  </div>

                  <Typography variant="h6" component="div" textAlign="center" marginTop="6rem">
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
                <CardContent style={{ display: "flex", justifyContent: "space-between",flexDirection:"column",alignItems:"flex-start" }}>
                <Typography variant="h5" component="div" gutterBottom>
                    Skills
                  </Typography>
                 
                      {/* <Modal open={skillopen} onClose={handleSkillClose}>
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

                          }} style={{ margin: "auto" }}>Submit</Button>
                        </Box>
                      </Modal> */}
                      {/* <List style={{ marginLeft: "2rem", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                        {userData.skills && userData.skills.map((skill, index) => (
                          <ListItem key={index} style={{ backgroundColor: "#dedad9", border: "2px solid white", borderRadius: "1rem", backdropFilter: "blur(10px)", display: "block", width: "fit-content" }}>
                            <ListItemText primary={skill} />
                          </ListItem>
                        ))}
                      </List> */}
                      <Button onClick={handleSkillModal}>See Details</Button>
                         <Modal
        open={skillModal}
        onClose={handleSkillModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Skills
          </Typography>
           <List style={{ marginLeft: "2rem", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                        {userData.skills && userData.skills.map((skill, index) => (
                          <ListItem key={index} style={{ backgroundColor: "#dedad9", border: "2px solid white", borderRadius: "1rem", backdropFilter: "blur(10px)", display: "block", width: "fit-content" }}>
                            <ListItemText primary={skill} />
                          </ListItem>
                        ))}
                      </List>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
                  
                </CardContent>
              </Card>
              <Card sx={{ width: "60vw", borderRadius: "1rem" }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    Education
                  </Typography>
                  <Button onClick={handleEduOpen}>See Details</Button>
                  <List>
                    <ListItem>

                      <Modal
                        open={eduopen}
                        onClose={handleEduClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: "flex", justifyContent: "center" }}>
                            Education
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {userData && userData.education?.map((edu, index) => (
                              <ListItem key={index} style={{ display: "flex", flexDirection: "column" }}>
                                <ListItemText primary={`Institution : ${edu.institutionName}`} />
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
                  <Button onClick={handleworkOpen}>See Details</Button>
                  <List>
                    <ListItem>

                      {/* <Button variant="contained" onClick={handleworkOpen}>
                      Add <AddIcon />
                    </Button> */}
                      <Modal open={workopen} onClose={handleworkClose} aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: "flex", justifyContent: "center" }}>
                            Work Experience
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {userData && userData.workExperience?.map((edu, index) => (
                              <ListItem key={index} style={{ display: "flex", flexDirection: "column" }}>
                                <ListItemText primary={`Institution : ${edu.institutionName}`} />
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
              <Button style={{ position: "absolute", right: "10rem", top: "110vh" }} variant="contained" onClick={() => { navigate('/create') }}>
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
