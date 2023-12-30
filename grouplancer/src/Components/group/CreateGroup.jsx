import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
  const [domain, setDomain] = useState("General");
  const [gType, setGType] = useState("Public");
  const [whoCanJoin, setWhoCanJoin] = useState("Anyone can join");
  const [credentials, setCredentials] = useState({ leader: "", gName: "", gDesc: "", projName: "", goal: "", domains: domain, groupType: gType, whoCanJoin: whoCanJoin, groupMembers: "" });
  const { currentUser } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch("http://localhost:8080/api/group/create-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        body: JSON.stringify({ leader: currentUser._id, gName: credentials.gName, gDesc: credentials.gDesc, projName: credentials.projName, goal: credentials.goal, domains: [credentials.domains], publicGroup: credentials.groupType === "Public" ? true : false, anyoneCanJoin: credentials.whoCanJoin === "Anyone can join" ? true : false }),
      });
      const json = await response.json();
      console.log(json);
      setCredentials({});
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        Create Group
      </h1>
      <div
        className="container mt-3"
        style={{ width: "800px", color: "white" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="gname" className="form-label">
              Group Name
            </label>
            <input
              type="text"
              className="form-control"
              id="gname"
              aria-describedby="emailHelp"
              required
              onChange={onchange}
              name="gName"
            />
            <hr />
            <label htmlFor="pname" className="form-label">
              Project Name
            </label>
            <input
              type="text"
              className="form-control"
              id="pname"
              aria-describedby="emailHelp"
              required
              onChange={onchange}
              name="projName"
            />
            <br />
            <label htmlFor="text" className="form-label">
              Main Goal
            </label>
            <input
              type="text"
              className="form-control"
              maxLength="75"
              id="text"
              aria-describedby="emailHelp"
              onChange={onchange}
              name="goal"
            />
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Domain
            </button>
            <ul className="dropdown-menu" onChange={onchange}>
              <option
                className="dropdown-item"
                value="general"
                onClick={() => setDomain("General")}
              >
                General
              </option>
              
              <option
                className="dropdown-item"
                value="appdev"
                onClick={() => setDomain("App Developement")}
              >
                App Developement
              </option>
              <option
                className="dropdown-item"
                value="cybersec"
                onClick={() => setDomain("CyberSecurity")}
              >
                CyberSecurity
              </option>
              <option
                className="dropdown-item"
                value="iot"
                onClick={() => setDomain("IOT")}
              >
                IOT
              </option>
              <option
                className="dropdown-item"
                value="pdev"
                onClick={() => setDomain("Programming and Development")}
              >
              Programming and Development
              </option>
              <option
                className="dropdown-item"
                value="dsa"
                onClick={() => setDomain("Data science and analytics")}
              >
                Data science and analytics
              </option>
              <option
                className="dropdown-item"
                value="mobdev"
                onClick={() => setDomain("Mobile Development")}
              >
                Mobile Development
              </option>
              <option
                className="dropdown-item"
                value="frontend"
                onClick={() => setDomain("Frontend Development")}
              >
                Frontend Development
              </option>
              <option
                className="dropdown-item"
                value="backend"
                onClick={() => setDomain("Backend Development")}
              >
               Backtend Development
              </option>
              <option
                className="dropdown-item"
                value="cloud"
                onClick={() => setDomain("Cloud Computing")}
              >
                Cloud Computing
              </option>
              <option
                className="dropdown-item"
                value="gamedev"
                onClick={() => setDomain("Game Development")}
              >
                Game Development
              </option>
              <option
                className="dropdown-item"
                value="Blockcurrency"
                onClick={() => setDomain("Blockchain and Cryptocurrency")}
              >
                Blockchain and Cryptocurrency
              </option>
              <option
                className="dropdown-item"
                value="ai"
                onClick={() => setDomain("Artificial Intelligence")}
                >
                Artificial Intelligence
              </option>
              <option
                className="dropdown-item"
                value="design"
                onClick={() => setDomain("UI/UX Design")}
              >
               UI/UX Design
              </option>
              <option
                className="dropdown-item"
                value="net"
                onClick={() => setDomain("Networking")}
              >
                Networking
              </option>
              <option
                className="dropdown-item"
                value="os"
                onClick={() => setDomain("Operating System")}
              >
                Operating System
              </option>
              <option
                className="dropdown-item"
                value="var"
                onClick={() => setDomain("Virtual Reality and Augmented Reality")}
              >
                Virtual Reality and Augmented Reality
              </option>
              <option
                className="dropdown-item"
                value="softtesting"
                onClick={() => setDomain("Software Testing")}
              >
                Software Testing
              </option>
              <option
                className="dropdown-item"
                value="servers"
                onClick={() => setDomain("Web Servers")}
              >
                Web Servers
              </option>
              <option
                className="dropdown-item"
                value="database"
                onClick={() => setDomain("Databases")}
              >
                Databases
              </option>
              <option
                className="dropdown-item"
                value="tech"
                onClick={() => setDomain("Tech Entrepreneurship")}
              >
                Tech Entrepreneurship
              </option>
              <option
                className="dropdown-item"
                value="do"
                onClick={() => setDomain("DevOps")}
              >
                DevOps
              </option>
            </ul>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              value={domain}
              onChange={onchange}
              name="domains"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Group Description
              <textarea
                className="form-control"
                id="description"
                cols="173"
                rows="5"
                onChange={onchange}
                name="gDesc"
                required
              />
            </label>
          </div>
          <br />
          <div className="d-flex">
            <div className="input-group mb-3 mx-3">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Group Type
              </button>
              <ul className="dropdown-menu">
                <option
                  className="dropdown-item"
                  value="public"
                  onClick={() => setGType("Public")}
                >
                  Public
                </option>
                <option
                  className="dropdown-item"
                  value="private"
                  onClick={() => setGType("Private")}
                >
                  Private
                </option>
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                value={gType}
                onChange={onchange}
                name="groupType"
              />
            </div>
            <div className="input-group mb-3 mx-3">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Who can join
              </button>
              <ul className="dropdown-menu">
                <option
                  className="dropdown-item"
                  value="all"
                  onClick={() => setWhoCanJoin("Anyone can join")}
                >
                  Anyone can join
                </option>
                <option
                  className="dropdown-item"
                  value="invited"
                  onClick={() => setWhoCanJoin("Join with invite")}
                >
                  Join with invite
                </option>
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                value={whoCanJoin}
                onChange={onchange}
                name="whoCanJoin"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
          >
            <button type="submit" className="button-48" style={{borderRadius:"20px"}}>
              <span className="text">Create Group</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
