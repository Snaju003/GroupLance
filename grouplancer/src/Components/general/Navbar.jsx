import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";
import { useUser } from "../../context/UserContext";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { currentUser, logout } = useUser();
    const navigate = useNavigate();
    const [image, setImage] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem('auth-token');
                const response = await fetch("http://localhost:8080/api/file/get-user-pic", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": authToken,
                    },
                });
                const data = await response.json();
                // console.log(data.existsImage.image);
                setImage(data.existsImage.image);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const handleLogout = async () => {
        const authToken = localStorage.getItem("auth-token");
        await fetch("http://localhost:8080/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken,
            },
        });
        logout();
        localStorage.setItem("auth-token", "");
        localStorage.setItem("refresh-token", "");
    };

    const deactivateUser = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "http://localhost:8080/api/auth/deactivate-user",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
            }
        );
        const json = await response.json();
        console.log(json);
        logout();
    };

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <AppBar position="static" style={{ backgroundColor: "#253aa1", background: "transparent" }}>
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
                                    <Link to="/sidebar" style={{ color: "black", textDecoration: "none" }}>Groups</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/liveside" style={{ color: "black", textDecoration: "none" }}>Categories</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/sidebar_ranking" style={{ color: "black", textDecoration: "none" }}>Rankings</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/chatbox" style={{ color: "black", textDecoration: "none" }}>ChatBox</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/aboutus" style={{ color: "black", textDecoration: "none" }}>About Us</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link href="/postbar" style={{ color: "black", textDecoration: "none" }}>Posts</Link>
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
                            <Link href="/postbar" style={{ color: "white", textDecoration: "none" }}>Posts</Link>
                        </Button>



                    </Box>
                    <Link href="/notify">
                        <NotificationsIcon style={{ color: "white", marginRight: "1rem" }}>

                        </NotificationsIcon>

                    </Link>

                    <Search style={{ marginRight: "6rem" }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    {
                        currentUser ?
                            <Box sx={{ flexGrow: 0, marginLeft: "2rem" }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        {/* <img alt='default-user' src="./default-user.jpg" style={{ height: "10vh", width: "10vh" }} /> */}
                                        <img
                                            src={image ? image : "./default-user.jpg"}
                                            alt="default-user"
                                            style={{ height: "10vh", width: "10vh", cursor: "pointer" }}
                                        />
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
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Button href="/userAccount" style={{ color: "black", textDecoration: "none" }}>Profile</Button></Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Button href="/" style={{ color: "black", textDecoration: "none" }} onClick={handleLogout}>Logout</Button></Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Button style={{ color: "black", textDecoration: "none" }} onClick={handleOpen}>Delete User</Button></Typography>
                                    </MenuItem>
                                    <Modal open={open} onClose={handleClose}>
                                        <Box sx={{ ...style }}>
                                            <Typography variant="h6" gutterBottom>
                                                Are you sure you want to delete your account?
                                            </Typography>
                                            <Button href="/" variant="contained" color='error' onClick={deactivateUser} style={{ marginRight: '10px' }}>
                                                Yes, delete
                                            </Button>
                                            <Button variant="contained" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                        </Box>
                                    </Modal>
                                </Menu>
                            </Box> :
                            <Link href="/logsig">
                                <Button style={{ borderRadius: "10px", backgroundColor: "white", height: "8vh", width: "20vh", color: "black", marginLeft: "-2rem" }}>Sign Up/Sign In</Button>
                            </Link>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
const style = {
    position: "absolute",
    gap: 2,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};