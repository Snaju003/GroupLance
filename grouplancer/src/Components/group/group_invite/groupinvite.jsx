import React from "react";

const GroupInvite = ({ color, title, description, id, canJoin }) => {
  const liveGroup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/group/join-group", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ groupId: id }),
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <>
      <div className="card" style={{ backgroundColor: color }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div style={{ display: "flex" }}>
            <button className="button-48" style={{ width: "15vh" }}>
              <span>
                <a
                  href="/"
                  onClick={liveGroup}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Accept
                </a>
              </span>
            </button>
            <button
              className="button-48"
              style={{ width: "15vh", marginLeft: "1rem" }}
            >
              <span style={{ margin: "0px" }}>
                <a
                  href="/"
                  onClick={liveGroup}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Reject
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupInvite;
