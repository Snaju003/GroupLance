import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./signup.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });


  const [otpState, setOtpState] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  const [buttonText, setButtonText] = useState("Send OTP");

  const [showModal, setShowModal] = useState(false);
  const [activationToken, setActivationToken] = useState("");
  const { login } = useUser();
  let navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      window.alert("Enter correct password");
      return;
    }
    setButtonText("Sending...");
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      setActivationToken(json.activationToken);
    } catch (error) {
      console.log(error);
    }
    setOtpState({ ...otpState, sent: true });
    setShowModal(true);
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onOtpChange = (e) => {
    setOtpState({ ...otpState, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            activationToken: activationToken,
            activationCode:
              otpState.num1 + otpState.num2 + otpState.num3 + otpState.num4,
          }),
        }
      );
      const json = await response.json();
      localStorage.setItem("auth-token", json.authToken);
      localStorage.setItem("refresh-token", json.refreshToken);
      login(json.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const [isActive, setActive] = useState(false);

  const handleRegisterClick = () => {
    setActive(true);
    let btn = document.querySelector(".toggle");
    btn.style.backgroundColor = "#00b4d8";

  };

  const handleLoginClick = () => {
    setActive(false);
    let btn = document.querySelector(".toggle");
    btn.style.backgroundColor = "#0e065a";
  };

  // const [credentials, setCredentials] = useState({ email: "", password: "" });
  // const { login } = useUser();
  // let navigate = useNavigate();

  //On submit of form
  const handleLoginSubmit = async (e) => {
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
    login(json.getUser);
    // if (json.authtoken) {
    localStorage.setItem('auth-token', json.authToken);
    localStorage.setItem("refresh-token", json.refreshToken);
    navigate('/create');
    // setCredentials({ email: '', password: '' });
    // }
    // else {
    // alert("Invalid Credentials!!");
    // }
  }



  return (
    <>
      <div style={{ height: "90vh" }}>
        <div className={`container1 ${isActive ? "active" : ""}`} style={{ margin: "3rem auto" }}>
          <div className="form-container sign-up">
            <form onSubmit={handleSignUpSubmit}>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" onChange={onchange} name="username" />
              <input type="email" placeholder="Email" onChange={onchange} name="email" />
              <input type="password" placeholder="Password" onChange={onchange} name="password" />
              <input type="password" placeholder="Confirm Password" onChange={onchange} name="cpassword" />
              <button>{buttonText}</button>
            </form>
            <Modal
              open={showModal}
              onClose={closeModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ ...style }}>
                <Typography variant="h6" gutterBottom>
                  Enter OTP
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <TextField
                    style={{ margin: 7 }}
                    type="text"
                    id="otpBox1"
                    placeholder=""
                    maxLength={1}
                    onChange={onOtpChange}
                    required
                    name="num1"
                  />
                  <TextField
                    style={{ margin: 7 }}
                    type="text"
                    id="otpBox2"
                    placeholder=""
                    maxLength={1}
                    onChange={onOtpChange}
                    required
                    name="num2"
                  />
                  <TextField
                    style={{ margin: 7 }}
                    type="text"
                    id="otpBox3"
                    placeholder=""
                    maxLength={1}
                    onChange={onOtpChange}
                    required
                    name="num3"
                  />
                  <TextField
                    style={{ margin: 7 }}
                    type="text"
                    id="otpBox4"
                    placeholder=""
                    maxLength={1}
                    onChange={onOtpChange}
                    required
                    name="num4"
                  />
                </div>
                <Button variant="contained" onClick={sendOtp} style={{ marginTop: '1rem' }}>
                  Verify OTP
                </Button>
              </Box>
            </Modal>
          </div>
          <div className="form-container sign-in">
            <form onSubmit={handleLoginSubmit}>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" onChange={onchange} name="email" />
              <input type="password" placeholder="Password" onChange={onchange} name="password" />
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle" >
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button className="hidden" id="login" onClick={handleLoginClick} >
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Welcome, Friend!</h1>
                <p>Enter your personal details to use all site features</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={handleRegisterClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const style = {
  position: "absolute",
  gap: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default Signup;

