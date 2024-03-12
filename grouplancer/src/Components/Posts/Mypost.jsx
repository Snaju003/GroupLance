import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Post from "./Post";
import { Typography, IconButton, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Container, Row, Col, Form } from "react-bootstrap";
function Mypost(props) {
  const theme = useTheme();
  const { color, groupName, groupImage, postdesc, groupId, tweetId } = props;
  const [rating, setRating] = useState(0);
  const navigate = useNavigate()

  const deletePost = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/tweet/delete-post", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({ groupId: groupId, tweetId: tweetId }),
    });
    const json = await response.json();
    console.log(json)
    navigate("/")
  }

  // const ratingPost = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8080/api/user/rate-user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem('auth-token'),
  //     },
  //     body: JSON.stringify({ rate: rating == 0? 1 : rating }),
  //   });
  //   const json = await response.json();
  //   console.log(json)
  //   console.log(rating)
  // }

  const handleRating = (starCount) => {
    setRating(starCount);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const [showModal, setShowModal] = useState(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ display: "flex", maxWidth: "80%", borderRadius: "20px", marginLeft: "9rem" }}>
        {groupImage && groupImage.trim() !== "" && (
          <CardMedia
            component="img"
            sx={{
              margin: "5rem",
              width: "25%",
              height: "50%",
              borderRadius: "0",
            }}
            image={groupImage}
            alt="Group Image"
          />
        )}
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", marginTop: "2rem" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {groupName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {postdesc}
            </Typography>
          </CardContent>
          <Box display="flex" alignItems="center" marginBottom={5}>

            {[1, 2, 3, 4, 5].map((star) => (
              <IconButton
                key={star}
                onClick={(e) => {
                  handleRating(star);
                }}
                color={star <= rating ? "warning" : "inherit"}
              >
                <StarIcon />
              </IconButton>
            ))}
            <Typography variant="body1" style={{ color: "black" }} >
              Rated: {rating} stars
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginBottom={10} >
            <Stack direction="row" spacing={2} >
              <Button
                variant="outlined"
                onClick={handleCommentClick}
                startIcon={<AddCommentIcon />}
              >
                Comment
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Share
              </Button>
              <Button variant="outlined" color="error" onClick={deletePost}>
                Delete
              </Button>
              <Button style={{ display: "flex", width: "7rem" }} variant="contained" disableElevation
                onClick={handleOpen}
              >
                Edit
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: "1rem" }}>
                    Edit
                  </Typography>

                  <TextField id="outlined-basic" label="Change Description" variant="outlined" style={{ marginBottom: "2rem", fontFamily: "Arial" }} />
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: "1rem" }}>
                    Add image
                  </Typography>
                  <Row className="px-1" >
                    <Form.Group as={Col}>
                      <Form.Control
                        type="file"
                        placeholder="Upload Media"
                        // onChange={handleChange}
                        name="media"
                        accept="image/*, video/*"
                        required
                        style={{ fontFamily: "Arial" }}
                      />
                    </Form.Group>
                  </Row>
                  <Button variant="outlined" color="error" style={{ translate: "17rem 1.5rem" }}
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </Modal>
            </Stack>
          </Box>
        </Box>
      </Card>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>{groupName}</DialogTitle>
        <DialogContent>
          <Post groupName={groupName} postDescription={postdesc} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Mypost;
