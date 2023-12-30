import React, { useState } from "react";

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
                            ><span>Main dashboard</span>
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                        >
                            <i class="fas fa-chart-area fa-fw me-3"></i
                            ><span>Webiste traffic</span>
                        </a>
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a
                        >
                        <a
                            href="#"
                            class="list-group-item list-group-item-action py-2 ripple"
                        ><i class="fas fa-chart-line fa-fw me-3"></i
                        ><span>Analytics</span></a
                        >
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;