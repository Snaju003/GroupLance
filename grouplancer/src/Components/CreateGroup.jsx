import React from "react";

const CreateGroup = () => {
  return (
    <>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Group Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <hr />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Project Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
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
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Select Domain:{" "}
            </label>
            <select id="domain" name="domain">
              <option value="volvo">Web Developement</option>
              <option value="saab">App Developement</option>
              <option value="fiat">CyberSecurity</option>
              <option value="audi">IOT</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Group Description
              <textarea
                className="form-control"
                id=""
                cols="173"
                rows="5"
              ></textarea>
            </label>
            <label htmlFor="text" className="form-label">
              Group Members
            </label>
            <div class="slider">
              <input
                type="range"
                min="0"
                max="200"
                value="100"
                oninput="rangeValue.innerText = this.value"
              />
              <p id="rangeValue">100</p>
            </div>
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Group Type:{" "}
            </label>
            <select id="cars" name="cars">
              <option value="volvo">Public</option>
              <option value="saab">Private</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Who can join:{" "}
            </label>
            <select id="cars" name="cars">
              <option value="volvo">Anyone can join</option>
              <option value="saab">Join with invite</option>
            </select>
          </div>
          {/* <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              required
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
