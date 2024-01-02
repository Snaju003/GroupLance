import React, { useState } from "react";
import MyGroups from "./group/my_groups/Mygroups";
import JoinedGroups from "./group/joined_groups/JoinedGroups";
import CreateGroup from "./group/CreateGroup";
import GroupsInvite from "./group/group_invite/groupsinvite";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("myGroups");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
        </div>
        </>
    );
};

export default Sidebar;
