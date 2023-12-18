import React, { useEffect } from "react";
import About from "./About";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const HandleSubmit = () => {
  const {currentUser} = useUser
  let navigate = useNavigate();
  useEffect(() => {
    if(!currentUser)
    {
      navigate("/signup")
    }
    else
    {
      navigate("/livegroups")
    }
  },[currentUser])
}

const Home = (props) => {
  const { bgcolor } = props;
  const cardcolor = "#dfdffb";

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <div id="frontimage">
        <p
          style={{
            width: "400px",
            color: "white",
            fontSize: "30px",
            marginLeft: "100px",
            paddingTop: "120px",
            marginBottom: "-180px",
            fontWeight: "bold",
          }}
        >
          Find and Connect with like-minded individuals and create or join groups effortlessly, online.
        </p>
        <p
          style={{
            color: "white",
            width: "400px",
            marginLeft: "100px",
            paddingTop: "200px",
            textAlign: "justify",
          }}
        >
          <ul>
            <li>Endless Group Possibilities, One Click Away</li>
            <li>Free Sign-Up, No Hidden Costs</li>
            <li>Pay For Premium Features </li>
            <li>Secure, Global Community Connections</li>
            <li>Chat And Connect With Others</li>
          </ul>
        </p>
        <button type="submit" id="community" onChange={HandleSubmit}>
          Join the community
        </button>
      </div>
      <div id="cards">
        <br></br>
        <About cardcolor={cardcolor} />
        <br></br>
      </div>
    </div>
  );
};

export default Home;
