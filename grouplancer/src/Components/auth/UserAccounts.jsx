import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Post from "../Posts/Post";

const UserAccounts = () => {
  const { currentUser, logout } = useUser();
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleLogout = async () => {
    const authToken = localStorage.getItem("auth-token");
    await fetch("http://localhost:8080/api/auth/logout", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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
      {/*<div style={{  }}>
        <button className="button-48" type="submit" style={{ color: "white", float: "right", marginRight: "15vh", padding: "10px", marginTop: "5vh", backgroundColor: "#0077b6" }} onClick={handleLogout}>
          <span class="text">LogOut</span>
        </button>
        <div className="container" style={{ display: "flex", marginTop: "30px" }}>
          <img
            src="./default-user.jpg"
            alt="profile_image"
            style={{
              marginRight: "20px",
              marginLeft: "220px",
              height: "200px",
              width: "200px",
              marginTop: "30px",
            }}
          />

          <div
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              width: "1500px",
              textAlign: "justify",
              borderRadius: "15px",
              paddingLeft: "15px",
              paddingTop: "10px",
              marginRight: "180px",
            }}
          >

            <p style={{ fontSize: "25px" }}>Name: {userData.name}</p>
            <p style={{ fontSize: "25px" }}>Email: {userData.email}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button style={{ backgroundColor: "#077b6", color: "white" }} type="submit" className="button-48">
                <span class="text">Edit</span>
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="button-48"
          style={{ backgroundColor: "#077b6", marginLeft: "34vh", margginTop: "4rem", color: "white" }}
        >
          <span class="text">Add Your Image</span>
        </button>

        <div className="row" style={{ margin: "10vh 8vw" }}>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Rankings</h5>
                <p className="card-text">
                  Rank: 10
                </p>
                <p className="card-text">
                  Rating Score: 4.9⭐
                </p>
                <button style={{ backgroundColor: "#077b6", color: "white" }} href="#" className="button-48">
                  <span class="text">Go to rankings</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Skills</h5>
                <p className="card-text">
                  Html CSS
                </p>
                <p className="card-text">
                  <br />
                </p>
                <button style={{ backgroundColor: "#077b6", color: "white" }} href="#" className="button-48">
                  <span class="text">Add Skills</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "10vh 8vw" }}>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Work Experience</h5>
                <p className="card-text">
                  Add Experience
                </p>
                <p className="card-text">
                  <br />
                </p>
                <button style={{ backgroundColor: "#077b6", color: "white" }} href="#" className="button-48">
                  <span class="text">Add experience</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text">
                  RCC IIT
                </p>
                <p className="card-text">
                  <br />
                </p>
                <button style={{ backgroundColor: "#077b6", color: "white" }} href="#" className="button-48">
                  <span class="text">Add education</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ backgroundColor: "#077b6" }} type="submit" className="btn btn-primary" onClick={deactivateUser}>Deactivate User</button>
        </div>
      </div>*/}

      <div className="row" style={{ margin: "10vh 8vw" }}>
        <div className="col-sm-6" style={{}}>
          <div className="card" style={{ backdropFilter: "blur(5px)", width: "600px", height: "700px", borderRadius: "20px" }}>
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
                <button
                  style={{
                    backgroundColor: "#077b6",
                    margin: "0px 30px 30px 30px",
                    color: "white",
                    width: "100px",
                    height: "50px",
                  }}
                  type="submit"
                  className="button-48"
                >
                  <span class="text">Edit</span>
                </button>
              </div>
            </div>
            <ul style={{ marginLeft: "20px", justifyContent: "right" ,listStyle:"none"}}>
              <li>
                <div className="card-body" style={{ display: "flex",justifyContent:"space-between" }}>
                  <div>
                    <h5 className="card-title">
                      Rankings
                      <br />
                    </h5>
                    <p className="card-text">
                      Rank: 10
                      <br />
                      Rating Score: 4.9⭐
                    </p>
                  </div>
                  <button
                    style={{
                      gap: "50px",
                      backgroundColor: "#077b6",
                      color: "white",
                      
                    }}
                    href="#"
                    className="button-48"
                  >
                    <span class="text">Go to rankings</span>
                  </button>
                </div>{" "}
              </li>
              <li>
                <div className="card-body" style={{ display: "flex",justifyContent:"space-between" }}>
                  <h5 className="card-title">
                    Skills
                    <br />
                  </h5>
                  <p className="card-text">Html CSS</p>
                  <button
                    style={{
                      marginLeft: "70px",
                      backgroundColor: "#077b6",
                      color: "white",
                    }}
                    href="#"
                    className="button-48"
                  >
                    <span class="text">Add Skills</span>
                  </button>
                </div>{" "}
              </li>
              <li>
                <div className="card-body" style={{ display: "flex" ,justifyContent:"space-between"}}>
                  <h5 className="card-title">
                    Work Experience
                    <br />
                  </h5>
                  <p className="card-text">Add Experience</p>
                  <button
                    style={{
                      marginLeft: "20px",
                      backgroundColor: "#077b6",
                      color: "white",
                    }}
                    href="#"
                    className="button-48"
                  >
                    <span class="text">Add experience</span>
                  </button>
                </div>{" "}
              </li>
              <li>
                <div className="card-body" style={{ display: "flex",justifyContent:"space-between" }}>
                  <h5 className="card-title">
                    Education
                    <br />
                  </h5>
                  <p className="card-text">RCC IIT</p>
                  <button
                    style={{
                      marginLeft: "80px",
                      backgroundColor: "#077b6",
                      color: "white",
                    }}
                    href="#"
                    className="button-48"
                  >
                    <span class="text">Add Education</span>
                  </button>
                </div>{" "}
              </li>
            </ul>
          </div></div>
          <div className="col-sm-6" style={{display: "flex",flexDirection:"column"}}>
          <h3 className="text-center">My Group's Post</h3>
            
            
              
              <div><Post/></div>
            
            
            
          </div>
        
      </div>
    </>
  );
};

export default UserAccounts;
