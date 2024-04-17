import React, { useState, useEffect } from "react";
import LiveGroup from "./LiveGroup";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { domainSkills } from "../../Domain_Skills/Domain_skills";

const LiveGroups = () => {
  const color = "#dfdffb";
  const [liveGroupData, setLiveGroupData] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useUser();
  useEffect(() => {
    // if (currentUser) navigate("/login");
    // else {
    console.log(currentUser);
    const getAllGroups = async () => {
      try {
        const authToken = localStorage.getItem("auth-token");
        const response = await fetch(
          `http://localhost:8080/api/group/get-all-groups`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken,
            },
          }
        );
        const data = await response.json();
        const filteredGroups = data.groups.filter(
          (group) => group.leader !== currentUser?._id
        );
        const sortedGroups = filteredGroups.sort((groupA, groupB) => {
          const domainA = groupA.domains[0];
          const domainB = groupB.domains[0];
          const skillsA = domainSkills[domainA];
          const skillsB = domainSkills[domainB];
          const matchingSkillsA = countMatchingSkills(skillsA, currentUser.skills);
          const matchingSkillsB = countMatchingSkills(skillsB, currentUser.skills);
          return matchingSkillsB - matchingSkillsA;
        });
        console.log(sortedGroups);
        setLiveGroupData(sortedGroups);
      } catch (error) {
        console.error(error);
      }
    };
    getAllGroups();
  }
    //}
    , [currentUser, navigate]);


  const countMatchingSkills = (groupSkills, currentUserSkills) => {
    return groupSkills.filter(skill => currentUserSkills.includes(skill)).length;
  };

  return (
    <>
      {/* <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        Live Groups
      </h1> */}
      <h1 className=" my-4" style={{ color: "#ffff", marginLeft: "60px", fontWeight: "bold" }}>
        Live Groups
      </h1>
      <div className="container">
        <div className="container column">
          {liveGroupData.map(
            ({ _id, gName, goal, projName, anyoneCanJoin, gDesc,domains }) => {
              return (
                <div className="col-md-3 mb-3" key={_id} style={{ width: "90%" }}>
                  <LiveGroup

                    id={_id}
                    title={gName}
                    projName={projName}
                    mainGoal={goal}
                    canJoin={anyoneCanJoin}
                    color={color}
                    gDesc={gDesc}
                    domain={domains[0]}
                  />

                </div>
              );
            }
          )}
        </div>
      </div>


    </>
  );
};

export default LiveGroups;
