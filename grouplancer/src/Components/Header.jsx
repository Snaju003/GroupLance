import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container" style={{ display:"flex",justifyContent:"center"}}>
          <a className="navbar-brand" href="#">
            <img
              src="./grouplance-logo.png"
              alt="Bootstrap"
              width="200"
              height="150"
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
