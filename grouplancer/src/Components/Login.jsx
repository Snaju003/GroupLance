import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  //On submit of form
  const handlesubmit = async (e) => {
    e.preventDefault();
    //API call 
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    if (json.authtoken) {
      localStorage.setItem('token', json.authtoken);
      navigate('/');
    }
    else {
      // alert("Invalid Credentials!!");
    }
  }

  //On change function
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container my-3" style={{ width: "800px" }}>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              onChange={onchange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
