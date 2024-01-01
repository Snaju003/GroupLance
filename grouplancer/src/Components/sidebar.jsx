import React, { useState } from "react";
import MyGroups from "./group/my_groups/Mygroups";
import JoinedGroups from "./group/joined_groups/JoinedGroups";
import CreateGroup from "./group/CreateGroup";
import GroupsInvite from "./group/group_invite/groupsinvite";

const Sidebar = () => {
    return (
        <>
            <nav
                id="sidebarMenu"
                class="collapse d-lg-block sidebar collapse bg-white"
            >
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                            aria-current="true"
                        >
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i
                            ><span>My Groups</span>
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                        >
                            <i class="fas fa-chart-area fa-fw me-3"></i
                            ><span>Joined Groups</span>
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-lock fa-fw me-3"></i><span>Create Group</span></a
                        >
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-chart-line fa-fw me-3"></i
                        ><span>Group Invite</span></a
                        >
                    </div>
                </div>
            </nav>
            <MyGroups/>
            <JoinedGroups/>
            <CreateGroup/>
            <GroupsInvite/>
        </>
    )
}

export default Sidebar;