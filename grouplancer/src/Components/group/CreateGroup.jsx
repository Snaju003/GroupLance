import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Form } from "react-bootstrap";

const CreateGroup = () => {
  const [domain, setDomain] = useState("General");
  const [gType, setGType] = useState("Public");
  const [whoCanJoin, setWhoCanJoin] = useState("Anyone can join");
  const [credentials, setCredentials] = useState({ leader: "", gName: "", gDesc: "", projName: "", goal: "", domains: "", groupType: "", whoCanJoin: "", groupMembers: "" });
  const { currentUser } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    // if (!currentUser) {
    //   navigate('/login');
    // }
  }, [currentUser, navigate])

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
        body: JSON.stringify({ leader: currentUser._id, gName: credentials.gName, gDesc: credentials.gDesc, projName: credentials.projName, goal: credentials.goal, domains: [credentials.domains], publicGroup: credentials.groupType === "Public" ? true : false, anyoneCanJoin: credentials.whoCanJoin === "Anyone can join" ? true : false }),
      });
      const json = await response.json();
      console.log(json);
      setCredentials({});
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <section className="create" >
        <Container >
          <Row className="align-items-center" >
            <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
              Create Group
            </h1>
            
            <Col className="form"size={12} md={6} style={{display:"flex",gap:"150px",marginLeft:"100px"}}>
              <form onSubmit={handleSubmit} >
              <Col className="column" style={{width:"31.25vw"}}>
                  <Row size={12} sm={6} className="px-1" >
                    <input type="text" placeholder="Group Name" onChange={onchange}
                      name="gName" required />
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Project Name" onChange={onchange}
                      name="projName" required />
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Main Goal" onChange={onchange}
                      name="goal" required />
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <Form.Select className="domainForm" onChange={onchange}
                      name="domains" style={{ maxHeight: '200px', overflowY: "scroll" }} required>
                      <option style={{ color: "black" }}>Select Your Domain</option>
                      <option value="General" style={{ color: "black" }}>General</option>
                      <option value="App Development" style={{ color: "black" }}>App Development</option>
                      <option value="CyberSecurity" style={{ color: "black" }}>CyberSecurity</option>
                      <option value="IOT" style={{ color: "black" }}>IOT</option>
                      <option value="Programming and Development" style={{ color: "black" }}>Programming and Development</option>
                      <option value="Data science and analytics" style={{ color: "black" }}>Data science and analytics</option>
                      <option value="Mobile Development" style={{ color: "black" }}>Mobile Development</option>
                      <option value="Frontend Development" style={{ color: "black" }}>Frontend Development</option>
                      <option value="Backend Development" style={{ color: "black" }}>Backend Development</option>
                      <option value="Cloud Computing" style={{ color: "black" }}>Cloud Computing</option>
                      <option value="Game Development" style={{ color: "black" }}>Game Development</option>
                      <option value="Blockchain and Cryptocurrency" style={{ color: "black" }}>Blockchain and Cryptocurrency</option>
                      <option value="Artificial Intelligence" style={{ color: "black" }}>Artificial Intelligence</option>
                      <option value="Networking" style={{ color: "black" }}>Networking</option>
                      <option value="Operating System" style={{ color: "black" }}>Operating System</option>
                      <option value="Virtual Reality and Augmented Reality" style={{ color: "black" }}>Virtual Reality and Augmented Reality</option>
                      <option value="Software Testing" style={{ color: "black" }}>Software Testing</option>
                      <option value="Web Servers" style={{ color: "black" }}>Web Servers</option>
                      <option value="Databases" style={{ color: "black" }}>Databases</option>
                      <option value="Tech Entrepreneurship" style={{ color: "black" }}>Tech Entrepreneurship</option>
                      <option value="DevOps" style={{ color: "black" }}>DevOps</option>
                    </Form.Select>
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <textarea rows="6" placeholder="Group Description" onChange={onchange}
                      name="gDesc"
                      required></textarea>
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <Form.Select className="domainForm" onChange={onchange} name="groupType" required>
                      <option style={{ color: "black" }}>Group Type</option>
                      <option value="Public" style={{ color: "black" }}>Public</option>
                      <option value="Private" style={{ color: "black" }}>Private</option>
                    </Form.Select>
                  </Row>
                  <Row size={12} sm={6} className="px-1">
                    <Form.Select className="domainForm" onChange={onchange} name="whoCanJoin" required>
                      <option style={{ color: "black" }}>Who can join?</option>
                      <option value="Anyone can join" style={{ color: "black" }}>Anyone can join</option>
                      <option value="Join with invite" style={{ color: "black" }}>Join with invite</option>
                    </Form.Select>
                  </Row>
                  <Col size={12} className="px-1" style={{marginLeft:"160px"}}>
                    <button className="button-48" style={{borderRadius:"20px"}} type="submit"><span>Create Group</span></button>
                  </Col>
                </Col>
              </form>
              <div className="boximage" style={{gap:"50px"}}>
              <img src="./creategrp.jpg" alt="image" style={{ borderRadius:"30px 30px 0px 0px",height:"400px",width:"450px"}}/>
              <img src="./creategrp3.avif" alt="image" style={{ borderRadius:"0px 0px 30px 30px",height:"400px",width:"450px"}}/>
              </div>
            </Col>
          </Row>
        </Container>
        <style>
        {`
     @media (max-width: 575.98px) { 
    
     }

    
     @media (max-width: 767.98px) { 
  
   
      }
     
   
     @media (max-width: 991.98px) { 
     
      .boximage{
        display: none;
       }
       .form{
        align-items: center;
       
       }
       h1{
        padding-left: 15vw;

       }
      }
     .button-48{
      margin-right: 100px;
     }

     @media (max-width: 1199.98px) { 
      .button-48{
        margin-right: 5000vw;
       }
  
    
     }
     
    
     @media (max-width: 1399.98px) { 
 
      }
        `}
      </style>
      </section >
    </>
  );
};

export default CreateGroup;
