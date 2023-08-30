import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="container" style={{ display: "table" }}>
          <img
            src="./grouplance-logo-fotor-bg-remover-20230829212146.png"
            alt="Logo"
            width="200"
            height="50"
          />
          <p style={{ fontSize: "40px", color: "white", textAlign: "center", verticalAlign: "middle", display: "table-cell" }}>GROUPLANCE</p>
          <p style={{ color: "white" }}>hello</p>
        </div>
      </header>
    </>
  );
};

export default Header;
