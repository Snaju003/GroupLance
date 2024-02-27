// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useUser } from "../../context/UserContext";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { HashLink } from 'react-router-hash-link';
// import {
//     BrowserRouter as Router
// } from "react-router-dom";

// const NavBar = () => {
//     const { currentUser } = useUser();
//     const [activeLink, setActiveLink] = useState('home');
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         }

//         window.addEventListener("scroll", onScroll);

//         return () => window.removeEventListener("scroll", onScroll);
//     }, [])

//     const onUpdateActiveLink = (value) => {
//         setActiveLink(value);
//     }

//     return (
//         <>


//             <Router>
//                 <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//                     <Container>
//                         <Navbar.Brand href="/">
//                             <img src="./grouplan.png" alt="Logo" style={{ width: "300px", height: "200px", justifyContent: "space-between", marginBottom: "-50px", marginTop: "-50px" }} />
//                         </Navbar.Brand>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav">
//                             <span className="navbar-toggler-icon"></span>
//                         </Navbar.Toggle>
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="ms-auto">
//                                 <Link to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
//                                 <Link to="sidebar" className={activeLink === 'groups' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('groups')}>Groups</Link>
//                                 <Link to="liveside" className={activeLink === 'categories' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('categories')}>Categories</Link>
//                                 <Link to="sidebar_ranking" className={activeLink === 'rankings' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('rankings')}>Rankings</Link>
//                                 <Link to="chatbox" className={activeLink === 'chatbox' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chatbox')}>ChatBox</Link>
//                                 <Link to="aboutus" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Us</Link>
//                             </Nav>
//                             <span className="navbar-text">
//                                 <div className="social-icon">
//                                     <a href="#"><img src={navIcon1} alt="" /></a>
//                                     <a href="#"><img src={navIcon2} alt="" /></a>
//                                     <a href="#"><img src={navIcon3} alt="" /></a>
//                                 </div>
//                                 {
//                                     currentUser ?

//                                             <Nav.Link className="profile" href="userAccount"><button className="vvd"><span>Profile</span></button></Nav.Link>
//                                              : <HashLink to='#connect'>
//                                             <button className="vvd"><span>Sign Up/Sign In</span></button>
//                                         </HashLink>
//                                 }
//                             </span>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </Router>


//         </>
//     )
// }

// export default NavBar
import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "@mui/material";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="./grouplan.png" alt="Logo" style={{ width: "300px", height: "200px", justifyContent: "space-between", marginBottom: "-50px", marginTop: "-50px", marginLeft: "0px" }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link to="/sidebar" style={{ color: "black", textDecoration: "none" }}>My Portfolios</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/sidebar" style={{ color: "black", textDecoration: "none" }}>Chat</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/createport" style={{ color: "black", textDecoration: "none" }}>Build your Site</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/createport" style={{ color: "black", textDecoration: "none" }}>Build your Site</Link>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/sidebar" style={{ color: "white", textDecoration: "none" }}>Groups</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/liveside" style={{ color: "white", textDecoration: "none" }}>Categories</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/sidebar_ranking" style={{ color: "white", textDecoration: "none" }}>Rankings</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/chatbox" style={{ color: "white", textDecoration: "none" }}>ChatBox</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/aboutus" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href="/posts" style={{ color: "white", textDecoration: "none" }}>Posts</Link>
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;