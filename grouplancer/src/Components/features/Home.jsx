import React from "react";
import About from "./About";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "../auth/Signup";

const Home = (props) => {
  // const { bgcolor } = props;
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
    <div>
      <div className="frontimage">
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
        <div
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
        </div>
        <button type="submit" className="community" onChange={handleClick} style={{ marginLeft: "100px", borderRadius: "20px", fontWeight: "750", width: "400px" }}>
          Join the community
        </button>
      </div>
      <div className="cards">
        <div>
          <About cardcolor={cardcolor} />
        </div>
        {/* <div className="row">
          <div className="col-sm-4" style={{ paddingLeft: "250px", alignItems: "center", borerRadius: "20px" }}>
            <div className="card" style={{ backgroundImage: "linear-gradient(to right , #b0fc38, #ffff", width: "300px", height: "400px", backgroundColor: "white", borderColor: "green", boxShadow: "0 0 5px 5px" }}>

              <img src="./free-tag-icon-business-bicolor-260nw-286152590.jpg" alt="icon" style={{ marginLeft: "85px", marginTop: "10px" }} />
              <h3 style={{ paddingLeft: "70px", paddingBottom: "5px", paddingTop: "10px" }}>Try for free</h3>
              <ul style={{ marginBottom: "40px", marginTop: "30px", marginLeft: "20px" }} >
                <li style={{}}>Ad free</li>
                <li>Create only one group</li>
                <li>Create groups of only specified size</li>

              </ul>
              <button type="button" className="btn btn-outline-primary" style={{ color: "white", backgroundColor: "green", width: "140px", height: "50px", borderRadius: "10px", marginBottom: "300px", marginLeft: "70px" }}>free</button>
            </div>
            <div className="card-body">

            </div>
          </div>
          <div className="col-sm-4" style={{ paddingLeft: "130px", alignItems: "center", borerRadius: "20px" }}>
            <div className="card" style={{ backgroundImage: "linear-gradient(to right , #dcb951, #ffff", width: "300px", height: "400px", borerRadius: "20px", boxShadow: "0 0 5px 5px" }}>

              <img src="./Premium-Icon-600x600-1.png" alt="icon" style={{ marginLeft: "85px", width: "120px", height: "120px", marginTop: "2px" }} />
              <h3 style={{ paddingLeft: "50px", paddingBottom: "5px", paddingTop: "10px" }}>Just for 700/-</h3>
              <ul style={{ marginBottom: "40px", marginTop: "20px", marginLeft: "20px" }} >
                <li style={{ listStyle: "inherit" }}>Ad free</li>
                <li>Create multiple groups</li>
                <li>Create groups of any size</li>

              </ul>
              <button type="button" className="btn btn-outline-primary" style={{ color: "white", backgroundColor: "brown", width: "140px", height: "50px", borderRadius: "10px", marginBottom: "300px", marginLeft: "70px" }}>premium</button>
            </div>
            <div className="card-body">

            </div>
          </div>
          <div className="col-sm-4" style={{ paddingRight: "250px", alignItems: "center", borerRadius: "20px" }}>
            <div className="card" style={{ backgroundImage: "linear-gradient(to right , #d3af37,#ffff", width: "300px", height: "400px", borerRadius: "20px", boxShadow: "0 0 5px 5px" }}>

              <img src="./deluxe-gold-label-vector-2274967.jpg" alt="icon" style={{ marginLeft: "90px", marginTop: "15px" }} />
              <h3 style={{ paddingLeft: "50px", paddingBottom: "5px", paddingTop: "10px" }}>Just for 1000/-</h3>
              <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px" }} >
                <li style={{ listStyle: "inherit" }}>Ad free</li>
                <li>Create multiple groups</li>
                <li>Create groups of any size</li>
                <li>Invite top users to your group</li>
                <li>Send requests to top users</li>
              </ul>
              <button type="button" className="button-48" style={{ color: "white", backgroundColor: "#3d300c", width: "140px", height: "40px", borderRadius: "10px", marginTop: "0px", marginLeft: "80px", justifyContent: "center" }}>deluxe</button>
            </div>
            <div className="card-body">

            </div>
          </div>
        </div> */}
        { !currentUser ? <div id="connect" style={{}}><Signup /></div> : null}

        < div className="sub" style={{ display: "flex", justifyContent: "center", backgroundImage: "url(./frontpage_image2.jpg)", backgroundSize: "cover" }}>
        <div className="subscription"style={{display:"flex"}} >
            <div className="card-active" style={{  borderRadius: "10px"}}>
              <div className="space" style={{display:"flex"}}>
            <img className="payment" src="./free.jpg" alt="icon" style={{transform:"translateX(150%)", marginTop:"20px",width: "100px", height: "100px",boxShadow:" 5px black"}}/>
            <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center" ,alignItems:"center",padding:"10px"}}>
              <span className="text">Subscribe</span>
              </button>
              
              </div>
              <h6 style={{opacity:"0.7",margin:"30px 40px 10px 30px",color:"white"}}>Try grouplancing for free</h6>
              <div className="card-content">
              
                <h4 style={{color:"white",padding:"10px 40px 40px 40px",position:"sticky",lineHeight:"1em"}}> NO SUBSCRIPTION </h4>
                <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px",color:"white",position:"sticky" }} >
                <li style={{ listStyle: "inherit" }}>Ad free</li>
                <li>Create only one group</li>
                <li>Create group of only specified size</li>
                
              </ul>
                
              </div>
              <div className="backdrop"></div>
            </div>
          </div>
          <div className="subscription"style={{display:"flex"}} >
            <div className="card-active" style={{  borderRadius: "10px"}}>
              <div className="space" style={{display:"flex"}}>
            <img className="payment" src="./prem.avif" alt="icon" style={{transform:"translateX(150%)", marginTop:"20px",width: "100px", height: "100px",boxShadow:" 5px black"}}/>
            <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center" ,alignItems:"center",padding:"10px"}}>
              <span className="text">Subscribe</span>
              </button>
              
              </div>
              <h6 style={{opacity:"0.7",margin:"30px 30px 10px 30px",color:"white"}}>Enjoy premium features just at Rs.800 </h6>
              <div className="card-content">
              
                <h4 style={{color:"white",padding:"10px 30px 30px 30px",position:"sticky",lineHeight:"1em"}}>PREMIUM SUBSCRIPTION </h4>
                <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px",color:"white",position:"sticky" }} >
                <li style={{ listStyle: "inherit" }}>Ad free</li>
                <li>Create multiple groups</li>
                <li>Create groups of any size</li>
                
              </ul>
                
              </div>
              <div className="backdrop"></div>
            </div>
          </div>
          <div className="subscription"style={{display:"flex"}} >
            <div className="card-active" style={{  borderRadius: "10px"}}>
              <div className="space" style={{display:"flex"}}>
            <img className="payment" src="./deluxe2.jpg" alt="icon" style={{transform:"translateX(150%)", marginTop:"20px",width: "100px", height: "100px",boxShadow:" 5px black"}}/>
            <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center" ,alignItems:"center",padding:"10px"}}>
              <span className="text">Subscribe</span>
              </button>
              
              </div>
              <h6 style={{opacity:"0.7",margin:"30px 40px 10px 30px",color:"white"}}>Enjoy deluxe features just at Rs.1500 </h6>
              <div className="card-content">
              
                <h4 style={{color:"white",padding:"10px 40px 40px 40px",position:"sticky",lineHeight:"1em"}}>DELUXE SUBSCRIPTION </h4>
                <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px",color:"white",position:"sticky" }} >
                <li style={{ listStyle: "inherit" }}>Ad free</li>
                <li>Create multiple groups</li>
                <li>Create groups of any size</li>
                <li>Invite top users to your group</li>
                <li>Send requests to top users</li>
              </ul>
                
              </div>
              <div className="backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
