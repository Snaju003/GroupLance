import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const CreateGroup = () => {
  const [domain, setDomain] = useState("General");
  const [gType, setGType] = useState("Public");
  const [whoCanJoin, setWhoCanJoin] = useState("Anyone can join");
  const [credentials, setCredentials] = useState({ leader: "", gName: "", gDesc: "", projName: "", goal: "", domains: [], groupType: "", whoCanJoin: "", groupMembers: "" });
  const { login,currentUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/group/create-group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ leader: currentUser, gName: credentials.gName, gDesc: credentials.gDesc, projName: credentials.projName, goal: credentials.goal, domains: credentials.domains, groupType: (credentials.groupType == "Public"?true:false), whoCanJoin: (credentials.whoCanJoin == "Anyone can join")?true:false}),
    });
    const json = await response.json();
    login(json.getUser);
    localStorage.setItem('auth-token', json.authToken);
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
            <ul className="dropdown-menu">
              <option
                className="dropdown-item"
                value="general"
                onClick={() => setDomain("General")}
              >
                General
              </option>
              <option
                className="dropdown-item"
                value="webdev"
                onClick={() => setDomain("Web Developement")}
              >
                Web Developement
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
                name="gDesc"
              ></textarea>
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
            <button type="submit" className="btn btn-primary">
              Create Group
            </button>
          </div>
        </form>
      </div>
      {/* <script>
        const slider = document.getElementById("customRange2");
        const output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function () {
          output.innerHTML = this.value
      }
      </script> */}
    </>
  );
};

export default CreateGroup;
