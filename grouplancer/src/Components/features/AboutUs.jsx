import React from "react";

const AboutUs = (props) => {
  const { bgcolor } = props;
  return (
    <>
      <h1 className="text-center my-4" style={{ color: "#ffff", paddingTop:"100px" }}>
        About Us
      </h1>

      <div className="container my-4" display="flex" alignitems="center">
        <div className="row">
          <div
            style={{
              backgroundImage: "url(/aboutUs.jpg)",
              backgroundSize: "90%",
              marginTop: "0%",
              width: " 1300px",
              height: "700px",
              paddingRight: "50px",
              padingLeft: "50px",
              marginBottom: "2px",
              borderRadius: "20px",
            }}
            alt="image not yet ready"
            srcSet=" "
          >
            <div style={{ alignitems: "center" }}>
              <h1
                style={{
                  color: "#ffff",
                  paddingRight: "700px",
                  textAlign: "center",
                }}
              >
                {" "}
                Welcome to grouplancer
              </h1>
              <p
                style={{
                  color: "#ffff",
                  paddingRight: "700px",
                  paddingBottom: "250px",
                  textAlign: "justify",
                }}
              >
                work in groups and enhance your knowledge.so why wait create
                your own group and start collaborating
              </p>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample" style={{backgroundColor:bgcolor}}>
          <div className="accordion-item"style={{backgroundColor:bgcolor}}>
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

          <div className="accordion-item" style={{backgroundColor:bgcolor}}>
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
        {/*<div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img
                  src="./default-user.jpg"
                  alt="profile"
                  className="imaging"
                />
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
       </div>*/}
       <div className="rows" style={{display:"flex"}}>
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
            </div></div>
            <div className="rows" style={{display:"flex"}}>
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
            </div>
      </div>
    </>
  );
};

export default AboutUs;
