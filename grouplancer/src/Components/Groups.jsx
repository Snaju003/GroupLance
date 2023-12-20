import React, { useEffect, useState } from "react";

const Groups = () => {
  const [groupMembers, setGroupMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("Api");
        const data = await response.json();
        setGroupMembers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        Hello
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
          Members
        </h1>
      </div>
      <div className="container my-4" display="flex" alignItems="center">
        <div className="row">
          {groupMembers.map((member, index) => (
            <div className="col-sm-4" key={index}>
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
                    src={member.profileImageUrl}
                    alt="image"
                    className="imaging"
                  />
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
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
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="image"
                  className="imaging"
                />
                <h5 class="card-title">Name</h5>
                <p class="card-text">Description</p>
              </div>
            </div>
          </div>
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
                <img
                  style={{
                    height: "90px",
                    width: "220px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./invitesign.jpg"
                  alt="image"
                  className="imaging"
                />
                {/* <h4 className="text-center my-4">Invite</h4> */}
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
