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
          {/* <p style={{ fontSize: "40px", color: "white", textAlign: "center", verticalAlign: "middle", display: "table-cell", fontFamily: "engravers mt", padding: "10px" }}>GROUPLANCE</p> */}
          {/* <p style={{ color: "white", textAlign: "right"}}>hello</p> */}
        </div>
      </header>
    </>
  );
};

export default Header;
