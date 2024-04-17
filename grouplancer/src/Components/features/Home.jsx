import React, { useEffect } from "react";
import About from "./About";
import { useUser } from "../../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import Layout from "../Layout/Layout";


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

  const onSubscribe = async (plan) => {
    console.log('Plan:', plan);
    try {
      const authToken = localStorage.getItem('auth-token');
      const response = await fetch("http://localhost:8080/api/subscription/get-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        mode: "cors",
        body: JSON.stringify({ plan: plan })
      });

      const data = await response.json();
      console.log(data);
      window.location.href = data.url;

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])

  return (
    <Layout>
      <div>
        <div style={{ display: "flex", marginBottom: "0rem" }}>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "0rem", backgroundSize: "cover" }}>
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
              <Link to="/Liveside"><button type="submit" className="community" onChange={handleClick} style={{ margin: "2rem 0rem 1rem 1rem", borderRadius: "20px", fontWeight: "750", width: "400px" }}>
                Explore Groups
              </button></Link>
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


          <div data-aos="zoom-in-down" className="first" style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <video src="./ezgif-6-71cbf8c057.mp4" autoPlay loop muted style={{ borderRadius: " 5rem 5rem 40rem 40rem", width: "50vw", height: "60vh", margin: "0rem 0rem 0rem 4rem" }} alt="gif"></video>
              <div data-aos="fade-up" style={{ color: "white", margin: "1.5rem 2rem 0rem 1rem", height: "70vh", textAlign: "center" }}>
                <h1 style={{ fontSize: "3.6rem", fontWeight: "bold" }}>Divide
                  <br />the Tasks
                  <br />and
                  <br />Multiply
                  <br />the Success</h1>
              </div>

            </div>
            <div className="second" style={{ width: "100%" }}>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>

                <div style={{ color: "white", margin: "0rem 4rem 0rem 10rem", height: "70vh", textAlign: "center" }}>
                  <h1 style={{ fontSize: "3.6rem", fontWeight: "bold" }}>Together

                    <br />We are
                    <br />Stronger
                  </h1>
                </div>
                <video src="./motion.mp4" autoPlay loop muted style={{ borderRadius: "200rem 5rem 5rem 200rem", width: "35vw", height: "60vh", margin: "0rem 0rem 0rem 0rem" }} alt="gif"></video>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="third" style={{ width: "100%" }}>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <video src="./motion2.mp4" autoPlay loop muted style={{ borderRadius: "5rem 200rem 200rem 5rem", width: "30vw", height: "50vh" }} alt="gif"></video>
                <div style={{ color: "white", margin: "1rem 6rem 1rem 2rem", height: "70vh", textAlign: "center" }}>
                  <h1 style={{ fontSize: "3.6rem", fontWeight: "bold" }}>Collaboration
                    <br />is the
                    <br />Key
                    <br />to Success
                  </h1>
                </div>
              </div>
            </div>
            <div className="subs">
              <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}> Check out our subscription plans </h1>
              < div className="sub" style={{ display: "flex", justifyContent: "center", backgroundSize: "cover" }}>
                <div className="subscription" style={{ display: "flex" }}>
                  <div className="card-active" style={{ borderRadius: "10px" }}>
                    <div className="space" style={{ display: "flex" }}>
                      <img className="payment" src="https://i.postimg.cc/2yVLyxhF/free.webp" alt="icon" style={{ transform: "translateX(150%)", marginTop: "20px", width: "100px", height: "100px", boxShadow: " 5px black" }} />
                      {/* <button type="button" className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                        <span className="text">Subscribe</span>
                      </button> */}

                    </div>
                    <h6 style={{ opacity: "0.7", margin: "30px 40px 10px 30px", color: "white" }}>Try grouplancing for free</h6>
                    <div className="card-content">

                      <h4 style={{ color: "white",  lineHeight: "1em",textAlign:"center" }}>FREE</h4>
                      <ul style={{ marginBottom: "30px", marginTop: "20px", marginLeft: "20px", color: "white", position: "sticky" }} >
                        
                        <li>Create two groups with a maximum of 6 members</li>
                        <li>Join multiple groups</li>
                        <li>Create group with maximum 6 members</li>

                      </ul>

                    </div>
                    <div className="backdrop"></div>
                  </div>
                </div>
                <div className="subscription">
                  <div className="card-active" style={{ borderRadius: "10px" }}>
                    <div className="space" style={{ display: "flex" }}>
                      <img className="payment" src="https://i.postimg.cc/x10g5XDr/deluxe2.jpg" alt="icon" style={{ transform: "translateX(150%)", marginTop: "20px", width: "100px", height: "100px", boxShadow: " 5px black" }} />
                      <button
                        onClick={() => onSubscribe("PREMIUM")}
                        type="button"
                        className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center", alignItems: "center", padding: "10px" }}
                      >
                        <span className="text">Subscribe</span>
                      </button>

                    </div>
                    <h6 style={{ opacity: "0.7", margin: "30px 30px 10px 30px", color: "white" }}>Enjoy premium features just at Rs.49 per month </h6>
                    <div className="card-content">

                      <h4 style={{ color: "white",textAlign:"center", lineHeight: "1em" }}>MONTHLY SUBSCRIPTION </h4>
                      <ul style={{ marginBottom: "30px", marginTop: "20px", marginLeft: "20px", color: "white", position: "sticky" }} >
                        <li style={{ listStyle: "inherit" }}>Ad free</li>
                        <li>Create multiple groups</li>
                        <li>Join multiple groups</li>
                        <li>Create groups with 8 members</li>

                      </ul>

                    </div>
                    <div className="backdrop"></div>
                  </div>
                </div>
                <div className="subscription">
                  <div className="card-active" style={{ borderRadius: "10px" }}>
                    <div className="space" style={{ display: "flex" }}>
                      <img className="payment" src="https://i.postimg.cc/hjFDWW0B/deluxe-gold-label-vector-2274967.jpg" alt="icon" style={{ transform: "translateX(150%)", marginTop: "20px", width: "100px", height: "100px", boxShadow: " 5px black" }} />
                      <button
                        onClick={() => onSubscribe("deluxe")}
                        type="button"
                        className="button-48" style={{ color: "white", width: "140px", height: "40px", borderRadius: "20px", marginTop: "30px", marginLeft: "180px", justifyContent: "center", alignItems: "center", padding: "10px" }}
                      >
                        <span className="text">Subscribe</span>
                      </button>

                    </div>
                    <h6 style={{ opacity: "0.7", margin: "30px 40px 10px 30px", color: "white" }}>Enjoy deluxe features just at Rs.399 per annum </h6>
                    <div className="card-content">

                      <h4 style={{ color: "white",textAlign:"center", lineHeight: "1em" }}>YEARLY SUBSCRIPTION </h4>
                      <ul style={{ marginBottom: "30px", marginTop: "20px", marginLeft: "20px", color: "white", position: "sticky" }} >
                        <li style={{ listStyle: "inherit" }}>Ad free</li>
                        <li>Create multiple groups</li>
                        <li>Create groups of 10 members</li>
                        <li>Invite top users to your group</li>
                        <li>Join top groups </li>
                      </ul>

                    </div>
                    <div className="backdrop"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Home;
