import React from "react";

const Header = () => {
  const externalImage = "./grouplancer/public/frontpage_image.jpg";
  return (
    <>
      <header>
        <div className="container" style={{
          display: "flex", justifyContent: "center",
          // backgroundImage: `url(${MyBackgroundImage})`,
          backgroundImage: `url(${externalImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
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
