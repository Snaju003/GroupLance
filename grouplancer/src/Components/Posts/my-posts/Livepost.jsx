import React, { useEffect, useState } from "react";
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
import Post from "../Post";
import { Typography, IconButton, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useUser } from "../../../context/UserContext";

function Livepost(props) {
  const theme = useTheme();
  const { color, groupName, groupImage, postdesc, groupId, tweetId } = props;
  const [rating, setRating] = useState(0);
  const { currentUser } = useUser();

  const ratingPost = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:8080/api/tweet/rate-post/${tweetId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ rate: rating == 0 ? 1 : rating, userId: currentUser }),
      });
      const json = await response.json();
      console.log(json)
      console.log(rating)
    } catch (error) {
      console.error(error)
    }
  }

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
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" marginTop={5} style={{}}>
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
          <Box display="flex" alignItems="center" marginBottom={3}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IconButton
                key={star}
                onClick={(e) => {
                  handleRating(star);
                  ratingPost(e);
                }}
                color={star <= rating ? "warning" : "inherit"}
              >
                <StarIcon />
              </IconButton>
            ))}
            <Typography variant="body1" style={{ color: "black" }}>
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

export default Livepost;
