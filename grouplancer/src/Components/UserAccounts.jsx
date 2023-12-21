import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const groupDesign = {
  backgroundColor: "lightgray",
  marginLeft: "20px",
  padding: "15px",
  borderRadius: "15px",
};

const UserAccounts = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { currentUser } = useUser();

  const fetchUserData = async () => {
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(
        `http://localhost:8080/api/user/getuser/${currentUser._id}`,
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
  useEffect(() => {
    if (!currentUser) navigate("/login");
    currentUser && fetchUserData();
  }, [currentUser, navigate]);

  return (
    <>
      <div className="container" style={{ display: "flex", marginTop: "30px" }}>
        <img
          src="./default-user.jpg"
          alt="profile_image"
          style={{
            marginRight: "350px",
            marginLeft: "30px",
            height: "200px",
            width: "200px",
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
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        style={{ marginLeft: "12.2vw" }}
      >
        Add image
      </button>

      <div class="row" style={{margin:"10vh 8vw"}}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rankings</h5>
              <p class="card-text">
                Rank: 10
              </p>
              <p class="card-text">
                Rating Score: 4.9⭐
              </p>
              <a href="#" class="btn btn-primary">
                Go to Rankings
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Skills</h5>
              <p class="card-text">
                Html CSS
              </p>
              <p class="card-text">
                <br/>
              </p>
              <a href="#" class="btn btn-primary">
                Add Skills
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style={{margin:"10vh 8vw"}}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Work Experience</h5>
              <p class="card-text">
                Add Experience
              </p>
              <p class="card-text">
                <br/>
              </p>
              <a href="#" class="btn btn-primary">
              Add Experience
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Education</h5>
              <p class="card-text">
                RCC IIT
              </p>
              <p class="card-text">
                <br/>
              </p>
              <a href="#" class="btn btn-primary">
                Add Education
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccounts;
