import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="container" style={{ display: "table" }}>
          {/* <img
            src="./grouplance-logo-fotor-bg-remover-20230829212146.png"
            alt="Logo"
            height="50"
          /> */}
          <p style={{ fontSize: "40px", color: "white", textAlign: "center", verticalAlign: "middle", display: "table-cell", fontFamily: "engravers mt", padding: "10px" }}>GROUPLANCE</p>
          <p style={{ color: "white" }}>hello</p>
        </div>
      </header>
    </>
  );
};

export default Header;
