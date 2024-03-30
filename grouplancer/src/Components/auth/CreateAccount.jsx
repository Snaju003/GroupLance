import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Form } from "react-bootstrap";
import Layout from "../Layout/Layout";
import { names } from "../constant/skills";

const CreateAccount = () => {
  const [credentials, setCredentials] = useState({ leader: "", gName: "", gDesc: "", projName: "", goal: "", domains: [], groupType: "", whoCanJoin: "", groupMembers: "" });
  const { currentUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!currentUser) {
    //   navigate('/login');
    // }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch("http://localhost:8080/api/group/create-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        body: JSON.stringify({
          leader: currentUser._id,
          gName: credentials.gName,
          gDesc: credentials.gDesc,
          projName: credentials.projName,
          goal: credentials.goal,
          domains: credentials.domains,
          publicGroup: credentials.groupType === "Public",
          anyoneCanJoin: credentials.whoCanJoin === "Anyone can join"
        }),
      });
      const json = await response.json();
      console.log(json);
      setCredentials({});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setCredentials({ ...credentials, [name]: selectedOptions });
  };

  return (
    <>
      <Layout>
        <section className="create">
          <Container>
            <Row className="align-items-center">
              <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
                Create Group
              </h1>
              <Col className="form" size={12} md={6} style={{ display: "flex", gap: "150px", marginLeft: "140px" }}>
                <form onSubmit={handleSubmit}>
                  <Col className="column" style={{ width: "31.25vw" }}>
                    <Row size={12} sm={6} className="px-1">
                      <input type="text" placeholder="work Experience" onChange={e => setCredentials({ ...credentials, projName: e.target.value })} name="projName" required />
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Education" onChange={e => setCredentials({ ...credentials, goal: e.target.value })} name="goal" required />
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <Form.Select className="domainForm" onChange={handleChange} name="domains" style={{ maxHeight: '200px', overflowY: "scroll" }} multiple required>
                        {names.map((name, index) => (
                          <option style={{ color: "black" }} key={index} value={name}>{name}</option>
                        ))}
                      </Form.Select>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <textarea rows="4" placeholder="Group Description" onChange={e => setCredentials({ ...credentials, gDesc: e.target.value })} name="gDesc" required></textarea>
                    </Row>
                    <Col size={12} className="px-1" style={{ marginLeft: "160px" }}>
                      <button className="button-48" style={{ borderRadius: "20px", marginRight: "8rem" }} type="submit"><span>Add Details</span></button>
                    </Col>
                  </Col>
                </form>
                <div className="boximage" style={{ gap: "6rem" }}>
                  <img src="./creategrp.jpg" alt="group" style={{ borderRadius: "30px 30px 30px 30px", height: "420px", width: "450px" }} />
                </div>
              </Col>
            </Row>
          </Container>
          <style>
            {`
             @media (max-width: 991.98px) { 
               .boximage {
                 display: none;
               }
               .form {
                 align-items: center;
               }
               h1 {
                 padding-left: 15vw;
               }
             }
             .button-48 {
               margin-right: 100px;
             }
             @media (max-width: 1199.98px) { 
               .button-48 {
                 margin-right: 5000vw;
               }
             }
            `}
          </style>
        </section>
      </Layout>
    </>
  );
};

export default CreateAccount;
