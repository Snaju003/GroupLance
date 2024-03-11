import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import EditGroup from "./EditGroup";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
const Groups = ({grpName,grpLeader,projName,grpDesc,gMembers,groupId}) => {
  const [credentials, setCredentials] = useState({ email: "" });
  const navigate = useNavigate();
  const { currentUser } = useUser();
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  const handleRating = (starCount) => {
    setRating(starCount);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const ratingUser = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:8080/api/user/rate-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ rate: rating == 0? 1 : rating }),
      });
      const json = await response.json();
      console.log(json)
      console.log(rating)
    }

  const inviteMember = async () => {
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch(
        `http://localhost:8080/api/group/invite-members`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
          body: JSON.stringify({
            invitedUserMail: credentials.email,
            invitationLink: "http://localhost:3000/groupinvite",
            group: {
              id: id,
              name: grpName,
              desc: grpDesc,
            },
            inviterName: currentUser,
          }),
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGroup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/group/delete-group", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ groupId: groupId }),
    });
    const json = await response.json();
    console.log(json)
    navigate("/")
  }

  const removeMember = async (id) => {
    const response = await fetch("http://localhost:8080/api/group/remove-member", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ userId: id, groupId: groupId }),
    });
    const json = await response.json();
    console.log(json)
  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="text-center my-4" style={{ color: "#ffff", margin: "auto" }}>
          {grpName}
        </h1>
        {(grpLeader === currentUser?._id) && (
          <button
            className="btn btn-primary"
            type="submit"
            onClick={deleteGroup}
            style={{
              color: "white",
              padding: "10px",
              marginRight: "1rem",
              backgroundColor: "#cc0000"
            }}
          >
            Delete Group
          </button>
        )}
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
          <p style={{ fontSize: "25px" }}>Name:{projName} </p>
          <p style={{ fontSize: "25px" }}>Description: {grpDesc}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {(grpLeader === currentUser?._id) && (<button
              type="submit"
              className="btn btn-primary"
              style={{ marginBottom: "3vh" }}
              onClick={handleOpenModal}

            >
              Edit
            </button>)}
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
          {gMembers?.map(({ _id, name, email }) => (
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
                  {(_id !== currentUser?._id) && (<div style={{ display: "flex", marginRight: "1rem" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        style={{
                          color: star <= rating ? "yellow" : "grey",
                          cursor: "pointer",
                          marginRight: "5px",
                        }}
                        onClick={(e) => {
                          handleRating(star);
                          ratingUser(e);
                        }}
                      />
                    ))}
                    <span style={{ marginLeft: "1rem", color: "white" }}>
                      Rated: {rating} stars
                    </span>
                  </div>)}
                  {(grpLeader === currentUser?._id && _id !== currentUser?._id) && (<button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => removeMember(_id)}
                    style={{ marginTop: "3vh" }}
                  >
                    Remove
                  </button>)}
                </div>
              </div>
            </div>
          ))}
          <div class="col-sm-4">
            {(grpLeader === currentUser?._id) && (<div
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
                <button className="btn btn-primary" onSubmit={inviteMember}>
                  Send Invite
                </button>
              </div>
            </div>)}
          </div>
        </div>
      </div>
      <Dialog open={isModalOpen} onClose={handleCloseModal} >
        <DialogTitle>{projName}</DialogTitle>
        <DialogContent>
          <EditGroup />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Groups;
