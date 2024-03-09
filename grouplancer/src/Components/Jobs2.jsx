import React from "react";

const Jobs = () => {
  return (
    <>
      
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        Domains
      </h1>
      <div
        className="box"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginLeft: "1rem",
          marginRight: "1rem",
          flexDirection:"column",
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
            marginBottom: "1rem",
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
            {/* <a href="">Create a group for general purpose...</a> */}
          </div>
        </div>
        <div
          className="box2"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
          }}
        >
          <img
            src="./browsedomainicons/prog.jpg"
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
              Programming and Development
            </h5>
            {/* <a href="">
              Python, JavaScript, Java, C++, Ruby, Swift, PHP, TypeScript
            </a> */}
          </div>
        </div>{" "}
        <div
          className="box3"
          style={{
            color: "white",
            width: "30%",
            marginBottom: "1rem",
            height: "6.5rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
          }}
        >
          <img
            src="./browsedomainicons/data science.png"
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
              Data Science and Analytics
            </h5>
            {/* <a href="">
              Data Visualization, Machine Learning, Big Data, Data Engineering,
              Data Warehousing, Business Intelligence
            </a> */}
          </div>
        </div>{" "}
        <div
          className="box4"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/mobile.png"
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
              Mobile Development
            </h5>
            {/* <a href="">
              {" "}
              Android Development, iOS Development, Cross-Platform Development
            </a> */}
          </div>
        </div>{" "}
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/frontend.png"
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
              Frontend Development
            </h5>
            {/* <a href="">
              HTML/CSS, Responsive Design, UI/UX Design, Web Accessibility
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/backend.webp"
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
              Backend Development
            </h5>
            {/* <a href="">
              Server-side scripting, APIs and RESTful services, Database
              Management
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/cloud.png"
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
              Cloud Computing
            </h5>
            {/* <a href="">
              Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform
              (GCP)
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/devops.png"
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
              DevOps
            </h5>
            {/* <a href="">
              CI/CD,
              Containerization (Docker, Kubernetes), Infrastructure as Code
              (IaC)
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/game.png"
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
              Game Development
            </h5>
            {/* <a href="">Unity, Unreal Engine, Game Design</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/blockcain.png"
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
              Blockchain and Cryptocurrency
            </h5>
            {/* <a href="">Smart Contracts, Decentralized Finance (DeFi)</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/ai.webp"
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
              Artificial Intelligence
            </h5>
            {/* <a href="">
              Natural Language Processing (NLP), Computer Vision, Robotics
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/ui.png"
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
              UI/UX Design
            </h5>
            {/* <a href="">Design Thinking, Prototyping, User Research</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/networking.png"
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
              Networking
            </h5>
            {/* <a href="">TCP/IP, Network Security, Wireless Networking</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/os.jpg"
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
              Operating Systems
            </h5>
            {/* <a href="">Linux, Windows, MacOS</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
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
              Internet of Things (IoT)
            </h5>
            {/* <a href="">IoT Platforms, IoT Security, IoT Protocols</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
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
              Cybersecurity
            </h5>
            {/* <a href="">
              Ethical Hacking, Penetration Testing, Security Policies
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/virtual.jpg"
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
              Virtual Reality (VR) and Augmented Reality (AR)
            </h5>
            {/* <a href="">VR Development, AR Development, Mixed Reality</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/software testing.png"
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
              Software Testing
            </h5>
            {/* <a href="">
              Automated Testing, Manual Testing, Test-driven Development (TDD)
            </a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/database.png"
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
              Databases
            </h5>
            {/* <a href="">SQL, NoSQL, Database Administration</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/web servers.png"
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
              Web Servers
            </h5>
            {/* <a href="">Apache, Nginx, IIS</a> */}
          </div>
        </div>
        <div
          className="box5"
          style={{
            color: "white",
            width: "30%",
            height: "6.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src="./browsedomainicons/tech.avif"
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
              Tech Entrepreneurship
            </h5>
            {/* <a href="">
              Startup Development, Business Strategy, Funding and Investments
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;


