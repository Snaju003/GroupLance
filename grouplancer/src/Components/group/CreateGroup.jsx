import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { names } from "../constant/skills";
import { Domains } from "./Domains/Domains";


const CreateGroup = () => {
  const [credentials, setCredentials] = useState({ leader: "", gName: "", gDesc: "", projName: "", goal: "", domains: "", groupType: "", whoCanJoin: "", groupMembers: "" });
  const { currentUser } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    // if (!currentUser) {
    //   navigate('/login');
    // }
  }, [currentUser, navigate])
  names.sort();
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
      toast.success("Group Created Successfully !");
    
      setCredentials({});
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Failed to Create Group");
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

            <Col className="form" size={12} md={6} style={{ display: "flex", gap: "150px", marginLeft: "100px" }}>
              <form onSubmit={handleSubmit} >
                <Col className="column" style={{ width: "31.25vw" }}>
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
                        {Domains.map((Domain)=>(
                           <option value={Domain} style={{ color: "black" }}>{Domain}</option>
                        ))}
                    
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
                  <Col size={12} className="px-1" style={{ marginLeft: "160px" }}>
                    <button className="button-48" style={{ borderRadius: "20px", marginRight: "8rem" }} type="submit"><span>Create Group</span></button>
                  </Col>
                </Col>
              </form>
              <div className="boximage" style={{ gap: "6rem" }}>
                <img src="https://i.postimg.cc/8zSTtt9s/creategrp.jpg" alt="group" style={{ borderRadius: "30px 30px 0px 0px", height: "400px", width: "450px" }} />
                <img src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg" alt="group" style={{ borderRadius: "0px 0px 30px 30px", height: "400px", width: "450px" }} />
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
