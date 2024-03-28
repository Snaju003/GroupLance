import React from "react";
import Layout from "../Layout/Layout";
// const responsive ={
//   @media (min-width: 576px) { }

//   // Medium devices (tablets, 768px and up)
//   @media (min-width: 768px) {  }

//   // Large devices (desktops, 992px and up)
//   @media (min-width: 992px) {  }

//   // X-Large devices (large desktops, 1200px and up)
//   @media (min-width: 1200px) { }

//   // XX-Large devices (larger desktops, 1400px and up)
//   @media (min-width: 1400px) { }
// };
const AboutUs = (props) => {
  const { bgcolor } = props;
  return (
    <>
    <Layout>
      <h1 className="text-center my-4" style={{ color: "#ffff", paddingTop: "5rem", fontWeight: "bold" }}>
        Welcome To Grouplancer!!!!
      </h1>

      <div className="container my-4" display="flex" alignitems="center">
        <div className="row">
          <h2 className="heading"
            style={{
              color: "#ffff",
              textAlign: "center",
            }}
          >
            {" "}

          </h2>
          <div className="hero-image" style={{ display: "flex", gap: "3rem", marginBottom: "20px" }}>

            <div style={{ paddingLeft: "3rem", width: "50rem" }}>


              <p className="des"
                style={{
                  color: "black",
                  width: "100%", height: "640px",
                  paddingTop: "50px",
                  padding: "20px",
                  textAlign: "justify"
                  , background: "linear-gradient(#0492c2 ,#fec5e5)",
                  borderRadius: "20px", fontWeight: "bold"
                }}
              >
                Welcome to GroupLancer, your go-to platform for connecting skilled freelancers with businesses and organizations seeking top-notch talent for group projects.

                At GroupLancer, we understand the importance of collaboration and synergy in achieving outstanding results. That's why we've created a space where freelancers can come together, pool their expertise, and tackle projects of all sizes with efficiency and precision.


                Our mission at GroupLancer is to empower freelancers and businesses alike by providing a dynamic platform where collaboration thrives. We strive to foster a community where individuals can leverage their diverse skills and experiences to deliver exceptional outcomes for our clients.
                work in groups and enhance your knowledge.so why wait....</p>
            </div>
            <video src="./ezgif-6-0fa881e524.mp4" autoPlay loop muted style={{ width: "800px", height: "600px", borderRadius: "30px", marginTop: "20px" }} alt="video" />
          </div>
        </div>
        <div style={{ justifyItems: "center", display: "flex", gap: "3rem", marginTop: "3rem", marginBottom: "3rem" }}>
          <img src="./aboutUs.jpg" style={{ width: "40rem", height: "40rem", borderRadius: "20px", marginLeft: "1rem", marginTop: "6rem" }} alt="image" />
          <div style={{ padding: "20px 40px 20px 20px", height: "50rem", marginBottom: "8rem" }}> <p
            style={{
              color: "black",
              width: "100%",

              padding: "20px 40px 20px 20px",
              textAlign: "justify"
              , background: "linear-gradient(#0492c2 ,#fec5e5)",
              borderRadius: "20px"
            }}
          >



            <h3 style={{ fontWeight: "bold", marginTop: "15px", marginLeft: "30px" }}> Why Choose GroupLancer?</h3>
            <ul style={{ marginTop: "25px" }}>
              <li><p style={{ fontWeight: "bold" }}>Efficiency:</p> Save time and resources by tapping into a network of pre-vetted freelancers ready to collaborate on your project.</li>

              <li><p style={{ fontWeight: "bold" }}>Diverse Talent:</p> Access a vast pool of freelancers with diverse skills and backgrounds, ensuring that your project receives comprehensive expertise.</li>

              <li><p style={{ fontWeight: "bold" }}>Cost-Effective Solutions:</p> Our platform enables businesses to find cost-effective solutions by leveraging the collective talents of freelance teams.</li>

              <li><p style={{ fontWeight: "bold" }}>Transparent Communication:</p> We prioritize transparent communication throughout the project lifecycle, fostering trust and accountability among team members.</li>


              <p> Whether you're a freelancer looking to expand your network or a business in need of specialized talent, GroupLancer is your solution. Join our vibrant community today and experience the power of collaborative freelancing. Together, we can turn your projects into success stories.</p>
            </ul>
          </p>
          </div>
        </div>
        {/*<div className="accordion" id="accordionExample" style={{ backgroundColor: bgcolor }}>
          <div className="accordion-item" style={{ backgroundColor: bgcolor }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={{
                  backgroundColor: "#cfe2ff",
                  marginBottom: "2px",
                  height: "50px",
                  borderRadius: "5px",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: bgcolor,
                  color: "#ffff",
                  height: "100px",
                }}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={{ backgroundColor: bgcolor }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: "#cfe2ff",
                  marginBottom: "2px",
                  height: "50px",
                  borderRadius: "5px",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: bgcolor,
                  color: "#ffff",
                  height: "100px",
                }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
              </div>
        <div className="row" style={{ width: "100%", display: "flex", gap: "2rem", flexWrap: "wrap", marginLeft: "3.5rem" }}>

          <div className="col-sm-4" style={{ width: "30%" }}>
            <div
              className="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "50px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ width: "30%" }} >
            <div
              className="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "50px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ width: "30%" }}>
            <div
              className="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "50px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ width: "30%" }}>
            <div
              className="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "50px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ width: "30%" }}>
            <div
              className="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "50px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ width: "30%" }}>
            <div
              className="card"
              style={{
                marginTop: "5%",
                flexDirection: "column",
                boxShadow: "0 0 10px 5px",
                borderRadius: "50px",
                display: "flex",
                width: "300px",
                height: "250px",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "200px",
                    paddingLeft: "100px",
                    paddingRight: "20px",
                  }}
                  src="./profile.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="rows" style={{display:"flex"}}>
            <div className="card">
                <div className="imagebox">
                    <img src="./profile.jpg" alt="profile pic"/>
                </div>
                <div className="content">
                    <div className="details">
                        <h4 style={{marginTop:"280px",marginLeft:"110px",marginRight:"100px",fontWeight:"500",color:"white"}}>  NAME <br/><span style={{marginTop:"3px",fontWeight:"300",marginLeft:"-50px",marginRight:"-30px"}}>description</span></h4>
                        <div className="lines">
                            
                            <p style={{margin:"0px 30px 30px 30px",color:"white"}}>short message from my side to all the grouplancers here....Thank you for joining us</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>*/}
        <div style={{ display: "flex", gap: "100px", margin: "80px 90px 50px 90px" }}>
          <div class="card" style={{ width: "18rem",borderRadius:"20px" }}>
            <img class="card-img-top" style={{ width: "18rem", marginLeft: "0px", marginRight: "0px", height: "20rem", borderRadius: "20px", padding: "10px" }} src="./aboutUs.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Dibakar Banerjee</h5>
              <a href="#" class="btn btn-primary">Follow me</a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem",borderRadius:"20px" }}>
            <img class="card-img-top" style={{ width: "18rem", marginLeft: "0px", marginRight: "0px", height: "20rem", borderRadius: "20px", padding: "10px" }} src="./creategrp.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Subhadeep Dhar</h5>
              <a href="#" class="btn btn-primary">Follow me</a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem",borderRadius:"20px" }}>
            <img class="card-img-top" style={{ width: "18rem", marginLeft: "0px", marginRight: "0px", height: "20rem", borderRadius: "20px", padding: "10px" }} src="./creategrp.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Pratyush Pal</h5>
              <a href="#" class="btn btn-primary">Follow me</a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "100px", margin: "40px 90px 40px 90px" }}>
          <div class="card" style={{ width: "18rem",borderRadius:"20px" }}>
            <img class="card-img-top" style={{ width: "18rem", marginLeft: "0px", marginRight: "0px", height: "20rem", borderRadius: "20px", padding: "10px" }} src="./aboutUs.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Soumyaraj Sarkar</h5>
              <a href="#" class="btn btn-primary">Follow me</a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem",borderRadius:"20px" }}>
            <img class="card-img-top" style={{ width: "18rem", marginLeft: "0px", marginRight: "0px", height: "20rem", borderRadius: "20px", padding: "10px" }} src="./creategrp.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Romit Guha</h5>
              <a href="#" class="btn btn-primary">Follow me</a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem",borderRadius:"20px" }}>
            <img class="card-img-top" style={{ width: "18rem", marginLeft: "0px", marginRight: "0px", height: "20rem", borderRadius: "20px", padding: "10px" }} src="./creategrp.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Shreedatri Saha</h5>
              <a href="#" class="btn btn-primary">Follow me</a>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
     @media (max-width: 575.98px) { 
    
     }

    
     @media (max-width: 767.98px) { 
      .row{
        flex-direction: column;
      }
     
      }
     
   
     @media (max-width: 991.98px) { 
      .heading{
        font-size: 1.7rem;
      }
      .des{
        font-size: 0.8rem;
        width: 100%;
      }
      .hero-image{
        height: 200px;
      }
   
      }
     

     @media (max-width: 1199.98px) { 
      .hero-image{
        height: 30vh;
        
      }
      .row{
        flex-direction: column;
        justify-content: center;
      }
    
     }
     
    
     @media (max-width: 1399.98px) { 
      .hero-image{
        background-repeat: no-repeat;
        border-radius: 20px 20px;
      }
      }
        `}
      </style>
      </Layout>
    </>
  );
};

export default AboutUs;
