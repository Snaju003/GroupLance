import React, { useState } from "react";
import MyGroups from "./group/my_groups/Mygroups";
import JoinedGroups from "./group/joined_groups/JoinedGroups";
import CreateGroup from "./group/CreateGroup";
import GroupsInvite from "./group/group_invite/groupsinvite";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("myGroups");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex" }}>
                    <button
                        className="button-48"
                        style={{
                            padding: "10px",
                            marginRight: "10px",
                            backgroundColor: activeTab === "myGroups" ? "#00b4d8" : "#ffffff",
                            color: activeTab === "myGroups" ? "#ffffff" : "#000000",
                        }}
                        onClick={() => handleTabChange("myGroups")}
                    ><span>
                            My groups</span>
                    </button>
                    <button
                        className="button-48"
                        style={{
                            padding: "10px",
                            marginRight: "10px",
                            backgroundColor: activeTab === "joinedGroups" ? "#00b4d8" : "#ffffff",
                            color: activeTab === "joinedGroups" ? "#ffffff" : "#000000",
                        }}
                        onClick={() => handleTabChange("joinedGroups")}
                    >
                        <span>  Joined groups</span>
                    </button>
                    <button
                        className="button-48"
                        style={{

                            padding: "10px",
                            marginRight: "10px",
                            backgroundColor: activeTab === "createGroup" ? "#00b4d8" : "#ffffff",
                            color: activeTab === "createGroup" ? "#ffffff" : "#000000",
                        }}
                        onClick={() => handleTabChange("createGroup")}
                    >
                        <span> Create Group</span>
                    </button>
                    <button
                        className="button-48"
                        style={{
                            padding: "10px",
                            backgroundColor: activeTab === "groupInvites" ? "#00b4d8" : "#ffffff",
                            color: activeTab === "groupInvites" ? "#ffffff" : "#000000",
                        }}
                        onClick={() => handleTabChange("groupInvites")}
                    >
                        <span> Group Invites</span>
                    </button>
                </div>
                {activeTab === "myGroups" && <MyGroups />}
                {activeTab === "joinedGroups" && <JoinedGroups />}
                {activeTab === "createGroup" && <CreateGroup />}
                {activeTab === "groupInvites" && <GroupsInvite />}
            </div> */}
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
        </>
    );
};

export default Sidebar;
