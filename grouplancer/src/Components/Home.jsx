import React from "react";
import About from "./About";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Home = (props) => {
  const { bgcolor } = props;
  const cardcolor = "#dfdffb";
  const { currentUser } = useUser();
  let navigate = useNavigate();
  const handleClick = () => {
    console.log(currentUser);
    if (!currentUser) {
      navigate("/login");
    }
    else {
      navigate("/livegroups");
    }
  }

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
        <button type="submit" className="community" onChange={handleClick}>
          Join the community
        </button>
      </div>
      <div id="cards">
        <br></br>
        <About cardcolor={cardcolor} />
        <br></br>
      </div>
      <div class="row">
        <div class="col-sm-4" style={{paddingLeft:"250px",alignItems:"center"}}>
          <div class="card" style={{backgroundImage: "linear-gradient(to right , #b2d3c2, #b0fc38", width:"300px",height:"400px",borerRadius:"20px",backgroundColor:"white",borderColor:"green",boxShadow:"0 0 5px 5px"}}>
            <h3 style={{paddingLeft:"118px"}}>Free</h3>
            <ui style={{marginBottom:"150px",marginTop:"30px"}} >
              <li style={{}}>Ad free</li>
              <li>Create only one group</li>
              <li>Create groups of only specified size</li>
             
            </ui>
          <button type="button" class="btn btn-outline-primary"  style={{color:"white",backgroundColor:"green",width:"140px",height:"50px",borderRadius:"10px",marginTop:"15px",marginLeft:"70px"}}>free</button>
          </div>
          <div class="card-body">
            
          </div>
        </div>
        <div class="col-sm-4" style={{paddingLeft:"120px",alignItems:"center"}}>
          <div class="card" style={{backgroundImage: "linear-gradient(to right , #63c5da, #ffff", width:"300px",height:"400px",borerRadius:"20px",boxShadow:"0 0 5px 5px"}}>
            <h3 style={{paddingLeft:"85px"}}>Premium</h3>
            <ui style={{marginBottom:"150px",marginTop:"30px"}} >
              <li style={{listStyle:"inherit"}}>Ad free</li>
              <li>Create multiple groups</li>
              <li>Create groups of any size</li>
              
            </ui>
          <button type="button"  class="btn btn-outline-primary"  style={{color:"white",backgroundColor:bgcolor,width:"140px",height:"50px",borderRadius:"10px",marginTop:"45px",marginLeft:"70px"}}>premiun</button>
          </div>
          <div class="card-body">
            
          </div>
        </div>
        <div class="col-sm-4" style={{paddingRight:"250px",alignItems:"center"}}>
          <div class="card" style={{  backgroundImage: "linear-gradient(to right , #9a4eae,#ffff",width:"300px",height:"400px",borerRadius:"20px",boxShadow:"0 0 5px 5px"}}>
            <h3 style={{paddingLeft:"98px"}}>Deluxe</h3>
            <ui style={{marginBottom:"150px",marginTop:"30px"}} >
              <li style={{listStyle:"inherit"}}>Ad free</li>
              <li>Create multiple groups</li>
              <li>Create groups of any size</li>
              <li>Invite top users to your group</li>
              <li>Send requests to top users</li>
            </ui>
          <button type="button" class="btn btn-outline-primary" style={{color:"white",backgroundColor:"purple",width:"140px",height:"50px",borderRadius:"10px",marginTop:"0px",marginLeft:"70px",justifyContent:"center"}}>deluxe</button>
          </div>
          <div class="card-body">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
