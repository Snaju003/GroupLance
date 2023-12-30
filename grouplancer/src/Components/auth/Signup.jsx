import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import './signup.css';
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
    num4: ""

  });

  const [buttonText, setButtonText] = useState("Send OTP");

  const [showModal, setShowModal] = useState(false);
  const [activationToken, setActivationToken] = useState("")
  const { login } = useUser();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      window.alert("Enter correct password")
      return;
    }

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
    setButtonText("Verify OTP");
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
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8080/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activationToken: activationToken,
          activationCode: otpState.num1 + otpState.num2 + otpState.num3 + otpState.num4
        }),
      });
      const json = await response.json();
      localStorage.setItem("auth-token", json.authToken);
      localStorage.setItem("refresh-token", json.refreshToken);
      login(json.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const [isActive, setActive] = useState(false);

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };
  return (
    <>
      {/* <div
        className="container my-3"
        style={{ width: "800px", color: "white" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              onChange={onchange}
              name="username"
              required
            />
            <hr />
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={onchange}
              name="email"
              required
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
              onChange={onchange}
              required
              name="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={onchange}
              required
              name="cpassword"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button type="submit" className="btn btn-primary">
              {buttonText}
            </button>
          </div>
        </form>
        {showModal && (
          <div className="modal" style={{ display: "block", padding: 500 }}>
            <div
              className="modal-content"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20%",
                padding: "20px",
                position: "fixed",
              }}
            >
              <span
                onClick={closeModal}
                style={{ cursor: "pointer", float: "right", color: "black" }}
              >
                &times;
              </span>
              <h2 style={{ color: "black" }}>Enter OTP</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  style={{ margin: 7 }}
                  type="text"
                  className="form-control"
                  id="otpBox1"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="num1"
                />
                <input
                  style={{ margin: 7 }}
                  type="text"
                  className="form-control"
                  id="otpBox2"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="num2"
                />
                <input
                  style={{ margin: 7 }}
                  type="text"
                  className="form-control"
                  id="otpBox3"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="num3"
                />
                <input
                  style={{ margin: 7 }}
                  type="text"
                  className="form-control"
                  id="otpBox4"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="num4"
                />
              </div>
              <button className="btn btn-primary mt-3" onClick={sendOtp}>
                Verify OTP
              </button>
            </div>
          </div>
        )}
      </div> */}
      {/* <section className="signup">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img src="./signup_img.png" />
            </Col>
            <Col size={12} md={6}>
              <h2 style={{color: "white"}}>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <Col>
                  <Row size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Name"/>
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email"/>
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <input type="password" placeholder="Password"/>
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <input type="password" placeholder="Confirm Password"/>
                  </Row>
                  <Col size={12} className="px-1">
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                </Col>
              </form>
            </Col>
          </Row>
        </Container>
      </section > */}
      <div className={`container1 ${isActive ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
