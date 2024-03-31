import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Form } from "react-bootstrap";
import Layout from "../Layout/Layout";
import { names } from "../constant/skills";
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
const CreateAccount = () => {

  const { currentUser } = useUser();
  const navigate = useNavigate();
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
  const handleAddSkills = () => {
    if (newSkill !== "") {
      setSkillsList([...skillsList, newSkill]);
      setNewSkill("");
    }
    handleSkillClose();
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
    <Layout>
      <section className="create" >
        <Container >
          <Row className="align-items-center" >
            <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
              Add Details
            </h1>
            
            <Col className="form"size={12} md={6} style={{display:"flex",gap:"150px",marginLeft:"140px"}}>
              <form >
              <Col className="column" style={{width:"31.25vw"}}>
                 
                  <Row size={12} sm={6} className="px-1">
                  <Button className="button-48" style={{width:"100%",borderRadius:"20px",marginRight:"8rem"}} onClick={handleworkOpen}>
                     <span> Add Work Experience <AddIcon /></span>
                    </Button>
                  </Row>
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
                          <Row size={12} sm={6} className="px-1">
                          <Button className="button-48" style={{width:"100%",borderRadius:"20px",marginRight:"8rem"}} onClick={handleeduOpen}>
                     <span> Add Education <AddIcon /></span>
                    </Button>
                          </Row>
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
                          updateUserEducation();
                        }} style={{ marginTop: "1rem" }}>Submit</Button>
                      </Box>
                    </Modal>
                  <Row size={12} sm={6} className="px-1">
                  <Button className="button-48" style={{width:"100%",borderRadius:"20px",marginRight:"8rem"}} onClick={handleSkillOpen}>
                    <span>  Add Skills <AddIcon /></span>
                    </Button>
                    
                  </Row>
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
                  {/* <Col size={12} className="px-1" style={{marginLeft:"160px"}}>
                    <button className="button-48" style={{borderRadius:"20px",marginRight:"8rem"}} type="submit"><span>Add Details</span></button>
                  </Col> */}
                </Col>
              </form>
              <div className="boximage" style={{gap:"6rem"}}>
              <img src="./creategrp.jpg" alt="group" style={{ borderRadius:"30px 30px 30px 30px",height:"420px",width:"450px"}}/>
              {/* <img src="./creategrp3.avif" alt="group" style={{ borderRadius:"0px 0px 30px 30px",height:"400px",width:"450px"}}/> */}
              </div>
            </Col>
          </Row>
        </Container>
        <style>
        {`
     @media (max-width: 575.98px) { 
    
     }

    
     @media (max-width: 767.98px) { 
  
   
      }
     
   
     @media (max-width: 991.98px) { 
     
      .boximage{
        display: none;
       }
       .form{
        align-items: center;
       
       }
       h1{
        padding-left: 15vw;

       }
      }
     .button-48{
      margin-right: 100px;
     }

     @media (max-width: 1199.98px) { 
      .button-48{
        margin-right: 5000vw;
       }
  
    
     }
     
    
     @media (max-width: 1399.98px) { 
 
      }
        `}
      </style>
      </section >
      </Layout>
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
export default CreateAccount;
