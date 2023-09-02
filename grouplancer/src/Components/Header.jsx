import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="container" style={{ display: "flex" }}>
          <img
            src="./grouplan.png"
            alt="Logo"
            height="50"
            style={{width: "300px", height: "200px", justifyContent: "space-between", marginBottom: "-50px", marginTop: "-50px"}}
          />
          <button style={{marginLeft: "1100px", height: "50px", marginTop: "30px", borderRadius: "10px", maxWidth: "1000px", textAlign: "center", paddingLeft: "20px", paddingRight: "20px"}}>
            Profile
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
