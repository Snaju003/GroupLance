import React, { useState } from "react";
import Recruits from "./group/top_grouplancers/Recruits";
import TopGroups from "./group/top_groups/Topgroups";
// import MyGroups from "./group/my_groups/Mygroups";
// import JoinedGroups from "./group/joined_groups/JoinedGroups";
// import CreateGroup from "./group/CreateGroup";
// import GroupsInvite from "./group/group_invite/groupsinvite";

const Sidebar_ranking = () => {
    const [activeTab, setActiveTab] = useState("top_grouplancers");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
        <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex" }}>
                <button
                className="button-48"
                    style={{
                        padding: "10px",
                        marginRight: "10px",
                        backgroundColor: activeTab === "top_groups" ? "#00b4d8" : "#ffffff",
                        color: activeTab === "top_groups" ? "#ffffff" : "#000000",
                    }}
                     onClick={() => handleTabChange("top_groups")}
                ><span>
                    Top Groups</span>
                </button>
                <button
                className="button-48"
                    style={{
                        padding: "10px",
                        marginRight: "10px",
                        backgroundColor: activeTab === "top_grouplancers" ? "#00b4d8" : "#ffffff",
                        color: activeTab === "top_grouplancers" ? "#ffffff" : "#000000",
                    }}
                    onClick={() => handleTabChange("top_grouplancers")}
                >
                  <span>  Top grouplancers</span>
                </button>
                
            </div>
            {activeTab === "top_grouplancers" && <Recruits />}
             {activeTab === "top_groups" && <TopGroups />}
            {/*{activeTab === "createGroup" && <CreateGroup />}
            {activeTab === "groupInvites" && <GroupsInvite />} */}
        </div>
        </>
    );
};

export default Sidebar_ranking;
