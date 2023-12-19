import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProfileButton = () => {
  return (
    <button style={{ marginLeft: "1120px", height: "50px", marginTop: "30px", borderRadius: "10px", maxWidth: "1000px", textAlign: "center", paddingLeft: "20px", paddingRight: "20px" }}>
      <Link className="profile" to="/userAccount" style={{ textDecoration: "none" }}>Profile</Link>
    </button>
  )
}
const Header = (props) => {
  const { currentUser } = useUser();
  return (
    <>
      <header>
        <div className="container" style={{ display: "flex" }}>
          <img
            src="./grouplan.png"
            alt="Logo"
            height="50"
            style={{ width: "300px", height: "200px", justifyContent: "space-between", marginBottom: "-50px", marginTop: "-50px" }}
          />
          {currentUser && <ProfileButton />}
        </div>
      </header>
    </>
  );
};

export default Header;
