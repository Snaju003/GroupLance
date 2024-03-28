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
const Groups = ({ grpName, grpLeader, projName, grpDesc, gMembers, groupId, goal, domains }) => {
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

  const ratingUser = async (e, _id) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/user/rate-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ rate: rating == 0 ? 1 : rating, userId: _id }),
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
            invitationLink: "http://localhost:3000/sidebar",
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
      console.log(data)
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
    navigate("/")
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
        {(grpLeader !== currentUser?._id) && (
          <button
            className="btn btn-primary"
            type="submit"
            onClick={()=>removeMember(currentUser._id)}
            style={{
              color: "white",
              padding: "10px",
              marginRight: "1rem",
              backgroundColor: "#cc0000"
            }}
          >
            Leave Group
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
            boxShadow: "0 0 10px 5px",
          }}
        >
          <p style={{ fontSize: "25px",padding:"10px" }}>Name: {projName} </p>
          <p style={{ fontSize: "25px" ,padding:"10px"}}>Description: {grpDesc}</p>
          <p style={{ fontSize: "25px" ,padding:"10px"}}>Goal: {goal}</p>
          <p style={{ fontSize: "25px" ,padding:"10px"}}>Domains: {domains}</p>
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
              Edit details
            </button>)}
          </div>
        </div>
      </div>
      <div style={{ alignItems: "center" }}>
        <h1
          style={{
            color: "#ffff",
            marginTop: "2rem",
            marginBottom: "2rem",
            marginLeft:"48rem",
          }}
        >
          {" "}
          Members
        </h1>
      </div>
      <div style={{ display: "flex",gap:"0.5rem" }}>
        
        <div class="col-sm-4">
        
          {(grpLeader === currentUser?._id) && (<div
            class="card"
            style={{
              marginTop: "1%",
              flexDirection: "column",
              boxShadow: "0 0 10px 5px",
              borderRadius: "20px",
              display: "flex",
              width: "25vw",
              height: "20vh",
              margin:"0rem 2rem 10rem 1rem",
            }}
          >
            <h2 style={{fontweight:"bold",color:"black",padding:"0.5rem 2rem 0.5rem 2rem"}}>Add members</h2>
            <div
              class="card-body"
              style={{ backgroundColor: "white", borderRadius: "20px" }}
            >
              <img src="https://tse4.mm.bing.net/th?id=OIP.JCwjYrZogNHv50VtbileUgHaEK&pid=Api&P=0&h=180" style={{width:"22vw",height:"150px",borderRadius:"20px",margin:"1px 5px 1px 1px"}}></img>
              <h4 className="text-center my-4">Invite a member</h4>
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
              <button style={{transform:"translateX(70%)"}}className="btn btn-primary" onSubmit={inviteMember}>
                Send Invitation
              </button>
              
            </div>
            
          </div>)}
          {(grpLeader !== currentUser?._id) && (
          <div >
            <img style={{width:"25vw",height:"50vh",margin:"0rem 2rem 0rem 1rem",borderRadius:"2rem 2rem 0rem 0rem"}} src="https://assets-global.website-files.com/5b69a01ba2e409501de055d1/654397e57d1b4f0a5d9c1bc0_Social%20loafing.png" alt="filler"></img>
            <img style={{width:"25vw",height:"50vh",margin:"0rem 2rem 2rem 1rem",borderRadius:"0rem 0rem 2rem 2rem"}} src="https://imind.com/wp-content/uploads/2023/01/18.jpg" alt="filler"></img>
            
          </div>)}
          
        </div>
        
        <div style={{ display: "flex",gap:"5rem",background:"rgba(255, 255, 255, 0.2)",backdropFilter: "blur(5px)",borderRadius:"20px" }}>
          <div className="container my-4" display="flex" alignItems="center">
            <div className="row">
              {gMembers?.map(({ _id, name, email }) => (
                <div className="col-sm-6" key={_id} style={{padding:"50px"}}>
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
                              ratingUser(e, _id);
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
            </div>
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
