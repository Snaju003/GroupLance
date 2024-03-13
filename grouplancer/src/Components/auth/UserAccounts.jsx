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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { names } from "../constant/skills";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserAccounts = () => {
  const { currentUser, logout } = useUser();
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [WorkExp, setWorkExp] = useState("");
  const [WorkExpList, setWorkExpList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

  const handleAddWorkExp = () => {
    if (WorkExp.trim() !== "") {
      setWorkExpList([...WorkExpList, WorkExp]);
      setWorkExp("");
    }
  };
  const [education, setEducation] = useState("");
  const [educationList, setEducationList] = useState([]);
  const handleAddEducation = () => {
    if (education.trim() !== "") {
      setEducationList([...educationList, education]);
      setEducation("");
    }
  };


  const updateUser = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:8080/api/user/update-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ education: educationList, workExp: WorkExpList, skills: skillsList }),
      });
      const json = await response.json();
      console.log(json)
      navigate("/userAccount")
    } catch (error) {
      console.error(error)
    }
  }

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
        setUserData(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [currentUser, navigate]);


  return (
    <>
      <div className="row" style={{ margin: "10vh 8vw" }}>
        <div className="col-sm-6">
          <div
            className="card"
            style={{
              backdropFilter: "blur(5px)",
              width: "600px",
              height: "700px",
              borderRadius: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="./default-user.jpg"
                alt="profile_image"
                style={{
                  marginRight: "20px",
                  marginLeft: "220px",
                  height: "190px",
                  width: "190px",
                  margin: "7px 20px 80px 20px",
                }}
              />

              <div style={{ marginTop: "30px" }}>
                <p style={{ fontSize: "20px" }}>{userData.name}</p>
                <p style={{ fontSize: "15px" }}> {userData.email}</p>
                <Button onClick={handleOpen}>Edit</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div
                      style={{
                        justifyContent: "space-between",
                        padding: "1vh",
                      }}
                    >
                      <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={names}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        onChange={(event, newValue) =>
                          setSkillsList(newValue)
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Skills"
                            placeholder="Add"
                          />
                        )}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1vh",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        label="Education"
                        variant="standard"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        sx={{ width: "100%" }}
                      />
                      <Fab
                        color="primary"
                        aria-label="add"
                        onClick={handleAddEducation}
                      >
                        <AddIcon />
                      </Fab>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1vh",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        label="Work Experience"
                        variant="standard"
                        value={WorkExp}
                        onChange={(e) => setWorkExp(e.target.value)}
                        sx={{ width: "100%" }}
                      />
                      <Fab
                        color="primary"
                        aria-label="add"
                        onClick={handleAddWorkExp}
                      >
                        <AddIcon />
                      </Fab>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
            <ul
              style={{
                marginLeft: "20px",
                justifyContent: "right",
                listStyle: "none",
              }}
            >
              <li>
                <h4>Rankings:</h4>
                <ul>

                </ul>
              </li>
              <li>
                <h4>Skills:</h4>
                <ul>
                  {skillsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h4>Education:</h4>
                <ul>
                  {educationList.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h4>Work Experience:</h4>
                <ul>
                  {WorkExpList.map((work, index) => (
                    <li key={index}>{work}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccounts;
