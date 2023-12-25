import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from 'react-router-dom';

const Groups = () => {
  const [groupDetails, setGroupDetails] = useState({});
  const [members, setMembers] = useState([]);
  const navigate = useNavigate()
  const { currentUser } = useUser();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("auth-token");
        const response = await fetch(`http://localhost:8080/api/group/get-group-details/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        });
        const data = await response.json();
        console.log(data.group);
        setGroupDetails(data.group);
        setMembers(data.group.members);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentUser, navigate, id]);

  return (
    <>
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        {groupDetails.gName}
      </h1>
      <div style={{ alignItems: "center" }}>
        <h1
          style={{
            color: "#ffff",
            paddingRight: "70vw",
            textAlign: "center",
          }}
        >
          {" "}
          Groups Details
        </h1>
      </div>
      <div className="container my-4" display="flex" alignItems="center">
      <div
          style={{
            marginTop: "30px",
            backgroundColor: "white",
            width: "180vh",
            textAlign: "justify",
            borderRadius: "15px",
            paddingLeft: "20px",
            paddingTop: "10px",
          }}
        >
          <p style={{ fontSize: "25px" }}>Name:{groupDetails.projName} </p>
          <p style={{ fontSize: "25px" }}>Description: {groupDetails.gDesc}</p>
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
      <div style={{ alignItems: "center" }}>
        <h1
          style={{
            color: "#ffff",
            paddingRight: "70vw",
            textAlign: "center",
          }}
        >
          {" "}
          Members
        </h1>
      </div>
      <div className="container my-4" display="flex" alignItems="center">
        <div className="row">
          
          {
            members.map(({ _id, name, email }) => (
              <div className="col-sm-4" key={_id}>
                <div
                  className="card"
                  style={{
                    marginTop: "5%",
                    flexDirection: "column",
                    boxShadow: "0 0 10px 5px",
                    borderRadius: "50px",
                    display: "flex",
                    width: "300px",
                    height: "250px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{ backgroundColor: "white", borderRadius: "20px" }}
                  >
                    <img
                      style={{
                        height: "100px",
                        width: "200px",
                        paddingLeft: "100px",
                        paddingRight: "20px",
                      }}
                      // src={member.profileImageUrl}
                      alt="profile"
                      className="imaging"
                    />
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                  </div>
                </div>
              </div>
            ))
          }
          <div class="col-sm-4">
            <div
              class="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "20px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                class="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <h4 className="text-center my-4">Invite member</h4>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={onchange}
                    name="email"
                    required
                  />
                </div>
                <button className="btn btn-primary">Send Invite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
