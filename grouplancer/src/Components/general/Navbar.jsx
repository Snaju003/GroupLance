import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from "../../context/UserContext";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
    const { currentUser } = useUser();
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ borderRadius: "20px", display: "flex", justifyContent: "space-between", backgroundImage: "linear-gradient(to top, #000066,   #4d4dff)", boxShadow: "7px 7px 7px rgba(0, 0, 0, 0.9)" }}>
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
            </nav> */}
            <Router>
                <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src="./grouplan.png" alt="Logo" style={{ width: "300px", height: "200px", justifyContent: "space-between", marginBottom: "-50px", marginTop: "-50px" }} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                                <Nav.Link href="sidebar" className={activeLink === 'groups' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('groups')}>Groups</Nav.Link>
                                <Nav.Link href="categories" className={activeLink === 'categories' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('categories')}>Catagories</Nav.Link>
                                <Nav.Link href="rankings" className={activeLink === 'rankings' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('rankings')}>Rankings</Nav.Link>
                                <Nav.Link href="chatbox" className={activeLink === 'chatbox' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chatbox')}>ChatBox</Nav.Link>
                                <Nav.Link href="aboutus" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Us</Nav.Link>
                            </Nav>
                            <span className="navbar-text">
                                {/* <div className="social-icon">
                                    <a href="#"><img src={navIcon1} alt="" /></a>
                                    <a href="#"><img src={navIcon2} alt="" /></a>
                                    <a href="#"><img src={navIcon3} alt="" /></a>
                                </div> */}
                                {
                                    currentUser ?
                                        <HashLink to='#connect'>
                                            <Link className="profile" to="/userAccount"><button className="vvd"><span>Profile</span></button></Link>
                                        </HashLink> : <HashLink to='#connect'>
                                            <button className="vvd"><span>Sign Up/Sign In</span></button>
                                        </HashLink>
                                }
                            </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Router>
        </>
    )
}

export default NavBar