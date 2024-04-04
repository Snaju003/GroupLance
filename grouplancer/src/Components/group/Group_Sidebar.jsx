import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Groups from "./Groups";
import Livepost from "../Posts/my-posts/Livepost";
import Layout from "../Layout/Layout";
import Project from "../group/Projects";

const GroupTab = () => {
    const [groupDetails, setGroupDetails] = useState({});
    const [members, setMembers] = useState([]);
    const [domains, setDomains] = useState([]);
    const navigate = useNavigate();
    const { currentUser } = useUser();
    const { id } = useParams();
    const [posts, setPosts] = useState()
    const color = "#dfdffb";
    const groupImage = "/creategrp.jpg";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem("auth-token");
                const response = await fetch(
                    `http://localhost:8080/api/group/get-group-details/${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": authToken,
                        },
                    }
                );
                const data = await response.json();
                //console.log(data.group);
                setGroupDetails(data.group);
                setMembers(data.group.members);
                setDomains(data.group.domains)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [currentUser, navigate, id]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const authToken = localStorage.getItem("auth-token");
                const response = await fetch(
                    `http://localhost:8080/api/tweet/get-posts/${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "auth-token": authToken,
                        },
                    }
                );
                const data = await response.json();
               // console.log(data.tweets)
                setPosts(data.tweets)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts()
    }
        , [id])


    return (
        <>
        <Layout>
            <section className="tab">
                <Container>
                    <Row>
                        <Col size={12}>
                            <Tab.Container id="tabs-group" defaultActiveKey="first">
                                <Nav fill variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Group Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tasks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Posts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Groups grpName={groupDetails?.gName} grpLeader={groupDetails?.leader} projName={groupDetails?.projName} grpDesc={groupDetails?.gDesc} goal={groupDetails?.goal} domains={domains} gMembers={members} groupId={id} rate={groupDetails?.rate} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="container">
                                            <div className="container row" style={{ flexDirection: "column", display: "flex", }}>
                                                {
                                                    posts?.map(({ groupId, content }) => {
                                                        return (
                                                            <div class="col-md-3 mb-3" style={{ width: "100%", height: "100%" }} >
                                                                <Livepost groupName={groupId.gName} postdesc={content} color={color} groupImage={groupImage} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                                <Project groupId={id} gMembers={members} gLeader={groupDetails?.leader}/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </Col>
                    </Row>
                </Container>
            </section>
            </Layout>
        </>
    );
};

export default GroupTab;
