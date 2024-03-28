import React, { useState } from "react";
import Recruits from "./group/top_grouplancers/Recruits";
import TopGroups from "./group/top_groups/Topgroups";
import TopGroup from "./group/top_groups/TopGroup";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Layout from "./Layout/Layout";
const Sidebar_ranking = () => {
    
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
                                        <Nav.Link eventKey="first">Top Grouplancers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Top Groups</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="third">Create Post</Nav.Link>
                                    </Nav.Item> */}
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="fourth">Group Invite</Nav.Link>
                                    </Nav.Item> */}
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Recruits />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <TopGroups />
                                    </Tab.Pane>
                                    {/* <Tab.Pane eventKey="third">
                                        <Post />
                                    </Tab.Pane> */}
                                    {/* <Tab.Pane eventKey="fourth">
                                        <GroupsInvite />
                                    </Tab.Pane> */}
                                </Tab.Content>
                            </Tab.Container>

                        </Col>
                    </Row>
                </Container>
            </section></Layout>
        </>
    );
};

export default Sidebar_ranking;
