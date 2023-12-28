import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
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
    }
  }, [currentUser, navigate]);

  const deactivateUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/deactivate-user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ userId: currentUser }),
    });
    const json = await response.json();
    console.log(json)
    navigate("/")
  }

  return (
    <>
      <button className="button-48" type="submit" style={{ color: "white", float: "right", marginRight: "150x", padding: "10px", marginTop: "15px", backgroundImage: "linear-gradient( to bottom , #191970 ,#add8e6" }} onClick={handleLogout}>
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
            <button style={{ backgroundImage: "linear-gradient( to bottom , #191970 ,#add8e6" }} type="submit" className="button-48">
              <span class="text">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="button-48"
        style={{ backgroundImage: "linear-gradient( to bottom , #191970 ,#add8e6 ", marginLeft: "300px" }}
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
              <button style={{ backgroundImage: "linear-gradient( to bottom ,#191970 ,#add8e6" }} href="#" className="button-48">
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
              <button style={{ backgroundImage: "linear-gradient( to bottom , #191970 ,#add8e6" }} href="#" className="button-48">
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
              <button style={{ backgroundImage: "linear-gradient( to bottom ,#191970 ,#add8e6" }} href="#" className="button-48">
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
              <button style={{ backgroundImage: "linear-gradient( to bottom , #191970 ,#add8e6" }} href="#" className="button-48">
                <span class="text">Add education</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ backgroundImage: "linear-gradient( to bottom ,#191970 ,#add8e6" }} type="submit" className="btn btn-primary" onClick={deactivateUser}>Deactivate User</button>
      </div>
    </>
  );
};

export default UserAccounts;
