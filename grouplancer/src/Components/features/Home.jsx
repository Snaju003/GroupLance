import React from "react";
import About from "./About";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
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
      <div style={{ display: "flex" ,marginBottom:"0rem"}}>
        <div style={{ display: "flex", gap: "2.5rem", marginTop: "0rem", backgroundImage: "linear-gradient(#3048c3,#0492c2)", backgroundSize: "cover" }}>
          <div className="frontimage" style={{ marginLeft: "5rem" }}>
            <p
              style={{
                width: "400px",
                color: "white",
                fontSize: "30px",
                margin: "auto",
                marginTop: "2rem",
                fontWeight: "bold",
              }}
            >
              Find and Connect with like-minded individuals and create or join groups effortlessly, online.
            </p>
            <div
              style={{
                color: "white",
                width: "400px",
                margin: "auto",
                paddingTop: "1rem",
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
            <button type="submit" className="community" onChange={handleClick} style={{ margin: "2rem 0rem 1rem 1rem", borderRadius: "20px", fontWeight: "750", width: "400px" }}>
              Join the community
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <video src="./front.mp4" autoPlay loop muted style={{ width: "60vw", height: "90vh", borderRadius: "20rem", marginTop: "0rem", marginRight: "3.8rem" }} alt="gif"></video>
          </div>
        </div>
      </div>
      <div className="cards">
        <div>
          <About cardcolor={cardcolor} />
        </div>


        <div className="first" style={{ backgroundImage: "linear-gradient(#0492c2,#080234)", height: "90vh" }}>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            <video src="./ezgif-6-71cbf8c057.mp4" autoPlay loop muted style={{ borderRadius: " 10rem 10rem 40rem 40rem", width: "60vw", height: "80vh", margin: "7rem 0rem 7rem 1rem" }} alt="gif"></video>
            <div style={{ color: "white", margin: "10rem 2rem 5rem 1rem", height: "70vh", textAlign: "center" }}>
              <h1 style={{ fontSize: "4.6rem", fontWeight: "bold" }}>Divide
                <br />the Tasks
                <br />and
                <br />Multiply
                <br />the Success</h1>
            </div>
          </div>
        </div>
        <div className="second" style={{ backgroundImage: "linear-gradient(#080234,#41424c)" }}>
          <div style={{ display: "flex", gap: "0.01rem" }}>

            <div style={{ color: "white", margin: "14rem 8rem 5rem 7rem", height: "70vh", textAlign: "center" }}>
              <h1 style={{ fontSize: "4.6rem", fontWeight: "bold" }}>Together

                <br />We are
                <br />Stronger
              </h1>
            </div>
            <video src="./motion.mp4" autoPlay loop muted style={{ borderRadius: "100rem 5rem 5rem 100rem", width: "70vw", height: "80vh", margin: "7rem 15rem 7rem 5rem" }} alt="gif"></video>
          </div>
        </div>
        <div className="third" style={{ backgroundImage: "linear-gradient(#41424c,#3048c3)",marginTop:"0rem" }}>
          <div style={{ display: "flex", gap: "0.1rem" }}>
            <video src="./motion2.mp4" autoPlay loop muted style={{ borderRadius: "5rem 100rem 100rem 5rem", width: "70vw", height: "80vh", margin: "5rem 0.1rem 3rem 5rem" }} alt="gif"></video>
            <div style={{ color: "white", margin: "10rem 6rem 5rem 5rem", height: "70vh", textAlign: "center" }}>
              <h1 style={{ fontSize: "4.6rem", fontWeight: "bold" }}>Collaboration
                <br />is the
                <br />Key
                <br />to Success
              </h1>
            </div>
          </div>
        </div>
        {!currentUser ? <div id="connect" style={{}}><Signup /></div> : null}
        <div style={{ backgroundImage: "linear-gradient(#3048c3,#130950)" }}>
          <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}> Check out our subscription plans </h1>
          < div className="sub" style={{ display: "flex", justifyContent: "center", backgroundSize: "cover",}}>
            <div className="subscription" style={{ display: "flex" }} >
              <div className="card-active" style={{ borderRadius: "10px" }}>
                <div className="space" style={{ display: "flex" }}>
                  <img className="payment" src="./free.jpg" alt="icon" style={{ transform: "translateX(150%)", marginTop: "20px", width: "100px", height: "100px", boxShadow: " 5px black" }} />
                  <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                    <span className="text">Subscribe</span>
                  </button>

                </div>
                <h6 style={{ opacity: "0.7", margin: "30px 40px 10px 30px", color: "white" }}>Try grouplancing for free</h6>
                <div className="card-content">

                  <h4 style={{ color: "white", padding: "10px 40px 40px 40px", position: "sticky", lineHeight: "1em" }}> NO SUBSCRIPTION </h4>
                  <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px", color: "white", position: "sticky" }} >
                    <li style={{ listStyle: "inherit" }}>Ad free</li>
                    <li>Create only one group</li>
                    <li>Create group of only specified size</li>

                  </ul>

                </div>
                <div className="backdrop"></div>
              </div>
            </div>



            <div className="subscription" >
              <div className="card-active" style={{ borderRadius: "10px" }}>
                <div className="space" style={{ display: "flex" }}>
                  <img className="payment" src="./prem.avif" alt="icon" style={{ transform: "translateX(150%)", marginTop: "20px", width: "100px", height: "100px", boxShadow: " 5px black" }} />
                  <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                    <span className="text">Subscribe</span>
                  </button>

                </div>
                <h6 style={{ opacity: "0.7", margin: "30px 30px 10px 30px", color: "white" }}>Enjoy premium features just at Rs.800 </h6>
                <div className="card-content">

                  <h4 style={{ color: "white", padding: "10px 30px 30px 30px", position: "sticky", lineHeight: "1em" }}>PREMIUM SUBSCRIPTION </h4>
                  <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px", color: "white", position: "sticky" }} >
                    <li style={{ listStyle: "inherit" }}>Ad free</li>
                    <li>Create multiple groups</li>
                    <li>Create groups of any size</li>

                  </ul>

                </div>
                <div className="backdrop"></div>
              </div>
            </div>
            <div className="subscription">
              <div className="card-active" style={{ borderRadius: "10px" }}>
                <div className="space" style={{ display: "flex" }}>
                  <img className="payment" src="./deluxe2.jpg" alt="icon" style={{ transform: "translateX(150%)", marginTop: "20px", width: "100px", height: "100px", boxShadow: " 5px black" }} />
                  <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                    <span className="text">Subscribe</span>
                  </button>

                </div>
                <h6 style={{ opacity: "0.7", margin: "30px 40px 10px 30px", color: "white" }}>Enjoy deluxe features just at Rs.1500 </h6>
                <div className="card-content">

                  <h4 style={{ color: "white", padding: "10px 40px 40px 40px", position: "sticky", lineHeight: "1em" }}>DELUXE SUBSCRIPTION </h4>
                  <ul style={{ marginBottom: "30px", marginTop: "10px", marginLeft: "20px", color: "white", position: "sticky" }} >
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

    </div>

  );
};

export default Home;
