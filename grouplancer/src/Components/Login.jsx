import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext";


const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useUser();
  let navigate = useNavigate();

  //On submit of form
  const handlesubmit = async (e) => {
    e.preventDefault();
    setCredentials({ email: '', password: '' });
    //API call 
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    login(json.getUser);
    // if (json.authtoken) {
    localStorage.setItem('auth-token', json.authToken);
    navigate('/');
    // }
    // else {
    // alert("Invalid Credentials!!");
    // }
  }

  //On change function
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container my-3" style={{ width: "800px", color: "white" }}>
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
              name="email"
            />
          </div>
          <div className="mb-3" >
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              onChange={onchange}
              name="password"
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
