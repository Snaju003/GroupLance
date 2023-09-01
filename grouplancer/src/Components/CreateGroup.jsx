import React, { useState } from "react";

const CreateGroup = () => {
  const [data,setData] = useState(0);

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
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Domain</button>
            <ul className="dropdown-menu">
              <option className="dropdown-item" value="general">General</option>
              <option className="dropdown-item" value="webdev">Web Developement</option>
              <option className="dropdown-item" value="appdev">App Developement</option>
              <option className="dropdown-item" value="cybersec">CyberSecurity</option>
              <option className="dropdown-item" value="iot">IOT</option>
            </ul>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
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
            <label htmlFor="customRange2" className="form-label">Example range</label>
            <input type="range" className="form-range" min="1" max="4" id="customRange2" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1 style={{color: "white"}}>{data}</h1>
            <p><span id="demo"></span></p>
          </div>
          <br />
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Group Type</button>
            <ul className="dropdown-menu">
              <option className="dropdown-item" value="public">Public</option>
              <option className="dropdown-item" value="private">Private</option>
            </ul>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Who can join</button>
            <ul className="dropdown-menu">
              <option className="dropdown-item" value="all">Anyone can join</option>
              <option className="dropdown-item" value="invited">Join with invite</option>
            </ul>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Group
          </button>
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
