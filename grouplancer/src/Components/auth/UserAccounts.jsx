import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Post from "../Posts/Post";
import { Button, Box, Typography, Modal } from "@mui/material";
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
  const handleLogout = async () => {
    const authToken = localStorage.getItem("auth-token");
    await fetch("http://localhost:8080/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    logout();
    localStorage.setItem("auth-token", "");
    localStorage.setItem("refresh-token", "");
    navigate("/");
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
        setUserData(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [currentUser, navigate]);

  const deactivateUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/auth/deactivate-user",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    logout();
    navigate("/");
  };

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
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
          <ul
            style={{
              marginLeft: "20px",
              justifyContent: "right",
              listStyle: "none",
            }}
          >
            <li></li>
          </ul>
        </div>
      </div>
      <div
        className="col-sm-6"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3 className="text-center">My Group's Post</h3>
        <div>
          <Post />
        </div>
      </div>
    </>
  );
};

export default UserAccounts;
