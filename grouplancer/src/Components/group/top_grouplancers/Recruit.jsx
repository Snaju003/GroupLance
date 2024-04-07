
// import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



const Recruit = ({ id, name, email, rate, profilePic, color }) => {
    const theme = useTheme();

    // const inviteMember = async () => {
    //     try {
    //         const authToken = localStorage.getItem("auth-token");
    //         const response = await fetch(
    //             `http://localhost:8080/api/group/invite-members`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "auth-token": authToken,
    //                 },
    //                 body: JSON.stringify({
    //                     invitedUserMail: email,
    //                     invitationLink: "http://localhost:3000/sidebar",
    //                     group: {
    //                         id: id,
    //                         name: grpName,
    //                         desc: grpDesc,
    //                     },
    //                     inviterName: currentUser,
    //                 }),
    //             }
    //         );
    //         const data = await response.json();
    //         console.log(data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <>
            {/* <div className="card" style={{ backgroundColor: color, width: "50vw" }}>
                <div className="card-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: "linear-gradient( #6666ff, #1a1aff)", backdropFilter: "blur(50px)", boxShadow: "10px 5px 5px #a6a6a6", border: "4px solid white", borderRadius: "4px" }}>
                    <img
                        src={profilePic ? profilePic : "https://cdn-icons-png.flaticon.com/256/4021/4021443.png"}
                        alt="Profile Picture"
                        style={{ width: "8vw", height: "18vh", margin: " 3rem 7rem 0.2rem 7rem", bottom: "5px", cursor: "pointer" }}
                    />
                    <h5 style={{ marginLeft: "2px", color: "white", fontWeight: "700px" }} className="card-title">{name}</h5>
                    <p style={{ color: "white", fontWeight: "700px" }} className="card-text">{email}</p>
                    <Button style={{ backgroundColor: "#000066",color:"white",width:"10vw",height:"5vh"}} variant="contained" endIcon={<SendIcon />}>
                        Invite
                    </Button>
                </div>
            </div>  */}
            <Card style={{ width: '50vw', display: "flex", flexDirection: "row", borderRadius: "1rem", margin: "0rem 15rem 0rem 15rem", padding: "1rem", backgroundColor: "beige" }}>
                <Card.Img variant="top" src={profilePic ? profilePic : "https://cdn-icons-png.flaticon.com/256/4021/4021443.png"}
                    alt="Profile Picture"
                    style={{ width: "8vw", height: "18vh", margin: " 0.9rem 7rem 0.2rem 7rem", cursor: "pointer", borderRadius: "1rem", boxShadow: "5px 2px 8px 2px #151e3d" }} />
                <div>
                    
                    <ListGroup className="list-group-flush" style={{ borderRadius: "0.5rem", boxShadow: "5px 2px 3px 2px #59788e" }}>
                        <ListGroup.Item>NAME:  {name}</ListGroup.Item>
                        <ListGroup.Item>EMAIL: {email}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                        <Button style={{ backgroundColor: "#000066", color: "white", width: "10vw", height: "5vh", display: "block", margin: "0 auto" }} variant="contained" endIcon={<SendIcon />}>
                            Invite
                        </Button>
                        <Button style={{ backgroundColor: "#000066", color: "white", width: "10vw", height: "5vh", display: "block", margin: "0 auto" }} variant="contained" endIcon={<SendIcon />}>
                            View Profile
                        </Button>
                    </Card.Body>
                </div>

            </Card>


        </>
    )
}

export default Recruit