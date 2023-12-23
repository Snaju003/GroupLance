import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from "../context/UserContext";

const Navbar = () => {

    const { currentUser, logout } = useUser();

    const handleLogout = async () => {
        const authToken = localStorage.getItem("auth-token");
        await fetch("http://localhost:8080/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
        });
        logout();
        localStorage.setItem("auth-token", "");
        localStorage.setItem("refresh-token", "");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mx-2" data-bs-theme="dark" style={{ borderRadius: "20px" }}>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Groups
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/livegroups">Live Groups</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/joinedgroups">Joined Groups</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="/creategroup">Create Group</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catagories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/findjob">Browse Domains</Link></li>
                                    <li><Link className="dropdown-item" to="/recruit">Invite a Grouplancer</Link></li>


                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/chatbox">ChatBox</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {
                            !currentUser
                                ? <>
                                    <Link to="/signup"><button className="btn btn-outline-success mx-2" type="submit">Signup</button></Link>
                                    <Link to="/login"><button className="btn btn-outline-success mx-2" type="submit">Login</button></Link>
                                </>
                                : <button className="btn btn-outline-success mx-2" type="submit" onClick={handleLogout}>Logout</button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar