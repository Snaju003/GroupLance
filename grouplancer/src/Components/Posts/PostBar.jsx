import React, { useState } from "react";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Postbar = () => {

    return (
        <>
            <section className="tab">
                <Container>
                    <Row>
                        <Col size={12}>
                            <Tab.Container id="tabs-group" defaultActiveKey="first">
                                <Nav fill variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Live Posts</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">My Posts</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Create Post</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="fourth">Group Invite</Nav.Link>
                                    </Nav.Item> */}
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Post />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <CreatePost />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Post />
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

export default Postbar;
