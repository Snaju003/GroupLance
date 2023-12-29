import React from "react";

const Jobs = () => {
  return (
    <>
      <div
        class="nav-down"
        style={{
          borderRadius: "20px",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <h1
          style={{ color: "white", marginBottom: "1rem", marginLeft: "500px", marginTop:"1rem"}}
        >
          Browse by Category
        </h1>
        
      </div>
      <div
        className="box"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginLeft: "2rem",
          marginRight: "2rem",
          color: "white",
          // backgroundImage: "linear-gradient( to bottom , #012a4a,#080402 ",
          paddingTop: "20px",
          borderRadius: "20px",
        }}
      >
        <div
          className="box1"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src="./general.jpg"
            alt="icon"
            style={{ height: "80px", width: "80px", marginLeft: "50px" }}
          />

          <div
            className="box-container"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.5rem",
            }}
          >
            <h5
              style={{
                marginLeft: "1rem",
                display: "inline",
                marginLeft: "0px",
              }}
            >
              {" "}
              General
            </h5>
            <a href="">Create a group for general purpose...</a>
          </div>
        </div>
        <div
          className="box2"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
          }}
        >
          <img
            src="./web.png"
            alt="icon"
            style={{ height: "80px", width: "80px", marginLeft: "50px" }}
          />

          <div
            className="box-container"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.5rem",
            }}
          >
            <h5
              style={{
                marginLeft: "1rem",
                display: "inline",
                marginLeft: "0px",
              }}
            >
              {" "}
              Web Development
            </h5>
            <a href="">Let's make a website together...</a>
          </div>
        </div>{" "}
        <div
          className="box3"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
          }}
        >
          <img
            src="./app.png"
            alt="icon"
            style={{ height: "80px", width: "80px", marginLeft: "50px" }}
          />

          <div
            className="box-container"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.5rem",
            }}
          >
            <h5
              style={{
                marginLeft: "1rem",
                display: "inline",
                marginLeft: "0px",
              }}
            >
              App Development
            </h5>
            <a href="">Let's develop a mobile application together...</a>
          </div>
        </div>{" "}
        <div
          className="box4"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
          }}
        >
          <img
            src="./cyber.jpg"
            alt="icon"
            style={{ height: "80px", width: "80px", marginLeft: "50px" }}
          />

          <div
            className="box-container"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.5rem",
            }}
          >
            <h5
              style={{
                marginLeft: "1rem",
                display: "inline",
                marginLeft: "0px",
              }}
            >
              {" "}
              CyberSecurity
            </h5>
            <a href=""> CyberSecurity...</a>
          </div>
        </div>{" "}
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./iot.jpg"
            alt="icon"
            style={{ height: "80px", width: "80px", marginLeft: "50px" }}
          />

          <div
            className="box-container"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.5rem",
            }}
          >
            <h5
              style={{
                marginLeft: "1rem",
                display: "inline",
                marginLeft: "0px",
              }}
            >
              {" "}
              IOT
            </h5>
            <a href="">IOT....</a>
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          {/* <div className="icon" style={{ backgroundColor: "white", color: "black", paddingRight: "1rem" }}>Icon </div>

          <div className="box-container" style={{ display: "flex", flexDirection: "column", marginLeft: "1.5rem" }}>
            <h5 style={{ marginLeft: "1rem", display: "inline" }}> IOT</h5>
            <a href="">IOT....</a>
          </div> */}
        </div>
        {/* <div className="box2" style={{ border: "2px solid black", color: "white", width: "33%", marginLeft:"1.5rem"}}>box2</div>
        <div className="box3" style={{ border: "2px solid black", color: "white", width: "33%", marginLeft:"1.5rem"}}>box3</div> */}
      </div>
    </>
  );
};

export default Jobs;
