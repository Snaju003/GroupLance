import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from "../../context/UserContext";

const Navbar = () => {
    const { currentUser } = useUser();
    

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mx-2" data-bs-theme="dark" style={{ borderRadius: "20px", display: "flex", justifyContent: "space-between", backgroundColor: "blue" }}>
                <div className="container-fluid" style={{}}>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav" id="navbarSupportedContent" style={{display: "flex", justifyContent:"center", margin: "auto"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginRight: "0px"}}>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Groups
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/Mygroups">My Groups</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/joinedgroups">Joined Groups</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/groupinvite">Group Invite</Link>
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
                                    <li><Link className="dropdown-item" to="/livegroups">All Groups</Link></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Rankings
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/topgroups">Groups</Link></li>
                                    <li><Link className="dropdown-item" to="/recruit">Grouplancers</Link></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/chatbox">ChatBox</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        {
                            !currentUser
                                ? <>
                                    <Link to="/signup"><button className="btn btn-outline-success mx-2" type="submit">Signup</button></Link>
                                    <Link to="/login"><button className="btn btn-outline-success mx-2" type="submit">Login</button></Link>
                                </>
                                : null
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar