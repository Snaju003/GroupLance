import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Groups from "./Groups";

const GroupTab = () => {
    const [credentials, setCredentials] = useState({ email: "" });
    const [groupDetails, setGroupDetails] = useState({});
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();
    const { currentUser } = useUser();
    const { id } = useParams();
    const [posts, setPosts] = useState()

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
                console.log(data.group);
                setGroupDetails(data.group);
                setMembers(data.group.members);
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
                console.log(data)
                setPosts(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts()
    }
        , [id])


    return (
        <>
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
                                        <Nav.Link eventKey="second">Posts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Groups grpName={groupDetails?.gName}  />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    </Tab.Pane>
                                    {/* <Tab.Pane eventKey="fourth">
                                        <GroupsInvite />
                                    </Tab.Pane> */}
                                </Tab.Content>
                            </Tab.Container>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default GroupTab;
