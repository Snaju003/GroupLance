import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [otpState, setOtpState] = useState({
    sent: false,
    otp: "",
  });

  const [buttonText, setButtonText] = useState("Send OTP");

  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpState({ ...otpState, sent: true });
    setButtonText("Verify OTP");
    setShowModal(true);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
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
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onOtpChange = (e) => {
    setOtpState({ ...otpState, otp: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ width: "800px", color: "white" }}
      >
        <form onSubmit={otpState.sent ? handlesubmit : handleOtpSubmit}>
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
          {/* {otpState.sent ? (
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                Verify OTP
              </label>
              <input
                type="text"
                className="form-control"
                id="otp"
                onChange={onOtpChange}
                required
                name="otp"
              />
            </div>
          ) : null} */}

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
          <div className="modal" style={{ display: "block",padding:500}}>
            <div
              className="modal-content"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20%",
                padding: "20px",
                position:"fixed",
              }}
            >
              <span
                onClick={closeModal}
                style={{ cursor: "pointer", float: "right",color: "black" }}
              >
                &times;
              </span>
              <h2 style={{ color: "black" }}>Enter OTP</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                style={{margin:7}}
                  type="text"
                  className="form-control"
                  id="otpBox1"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="otp"
                />
                <input
                style={{margin:7}}
                  type="text"
                  className="form-control"
                  id="otpBox2"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="otp"
                />
                <input
                style={{margin:7}}
                  type="text"
                  className="form-control"
                  id="otpBox3"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="otp"
                />
                <input
                style={{margin:7}}
                  type="text"
                  className="form-control"
                  id="otpBox4"
                  placeholder=""
                  maxLength="1"
                  onChange={onOtpChange}
                  required
                  name="otp"
                />
              </div>
              <button className="btn btn-primary mt-3" onClick={closeModal}>
                Verify OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
