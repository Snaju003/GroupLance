import React from "react";
import { Nav } from "react-bootstrap";
import Jobs from "./Jobs";
import LiveGroups from "./group/live_groups/LiveGroups";

const LiveSide = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", minWidth: "25%" }}>
          <Jobs />
        </div>
        <div style={{ flex: "3", minWidth: "75%" }}>
          <LiveGroups />
        </div>
      </div>
    </>
  );
};

export default LiveSide;
