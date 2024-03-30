import React, { useState } from "react";
import MyGroups from "./group/my_groups/Mygroups";
import JoinedGroups from "./group/joined_groups/JoinedGroups";
import CreateGroup from "./group/CreateGroup";
import GroupsInvite from "./group/group_invite/groupsinvite";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Layout from "./Layout/Layout";

const Sidebar = () => {

    return (
        <>
        <Layout>
            <section className="tab">
                <Container>
                    <Row>
                        <Col size={12}>
                            <Tab.Container id="tabs-group" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">My Groups</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Joined Groups</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Create Group</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Group Invite</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <MyGroups />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <JoinedGroups />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <CreateGroup />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <GroupsInvite />
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

export default Sidebar;
