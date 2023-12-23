import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


// const groupDesign = {
//   backgroundColor: "lightgray",
//   marginLeft: "20px",
//   padding: "15px",
//   borderRadius: "15px",
// };

const UserAccounts = () => {
  const { currentUser, logout } = useUser();

    const handleLogout = async () => {
        const authToken = localStorage.getItem("auth-token");
        await fetch("http://localhost:8080/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
        });
        logout();
        localStorage.setItem("auth-token", "");
        localStorage.setItem("refresh-token", "");
    }
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  // const { currentUser } = useUser();


  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
    else {

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
      fetchUserData();
    }
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
      <button className="btn btn-outline-success mx-2" type="submit" onClick={handleLogout}>Logout</button>
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
              <button href="#" className="btn btn-primary">
                Go to Rankings
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
              <button href="#" className="btn btn-primary">
                Add Skills
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
              <button href="#" className="btn btn-primary">
                Add Experience
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
              <button href="#" className="btn btn-primary">
                Add Education
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccounts;
