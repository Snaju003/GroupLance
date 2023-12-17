import React, { useState } from "react";

const CreateGroup = () => {
  const [data, setData] = useState(2);
  const [domain, setDomain] = useState("General");
  const [gType, setGType] = useState("Public");
  const [whoCanJoin, setWhoCanJoin] = useState("Anyone can join");
  return (
    <>
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        Create Group
      </h1>
      <div
        className="container mt-3"
        style={{ width: "800px", color: "white" }}
      >
        <form>
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
              ></textarea>
            </label>
            <label htmlFor="text" className="form-label">
              Group Members
            </label>
            <input
              type="range"
              className="form-range"
              min="2"
              max="6"
              id="customRange2"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <h1 style={{ color: "white" }}>{data}</h1>
            <p>
              <span id="demo"></span>
            </p>
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
      
    </>
  );
};

export default CreateGroup;
