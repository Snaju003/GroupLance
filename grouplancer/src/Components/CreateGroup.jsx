import React from "react";

const CreateGroup = () => {

  return (
    <>
      <h1 className='text-center my-4' style={{ color: '#ffff' }}>Create Group</h1>
      <div className="container mt-3" style={{ width: "800px", color: "white" }}>
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
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Domain</button>
            <ul class="dropdown-menu">
              <option class="dropdown-item" value="general">General</option>
              <option class="dropdown-item" value="webdev">Web Developement</option>
              <option class="dropdown-item" value="appdev">App Developement</option>
              <option class="dropdown-item" value="cybersec">CyberSecurity</option>
              <option class="dropdown-item" value="iot">IOT</option>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
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
            <label for="customRange2" class="form-label">Example range</label>
            <input type="range" class="form-range" min="0" max="5" id="customRange2"></input>
          </div>
          <br />
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Group Type</button>
            <ul class="dropdown-menu">
              <option class="dropdown-item" value="public">Public</option>
              <option class="dropdown-item" value="private">Private</option>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Who can join</button>
            <ul class="dropdown-menu">
              <option class="dropdown-item" value="all">Anyone can join</option>
              <option class="dropdown-item" value="invited">Join with invite</option>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
