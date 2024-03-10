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
function Mypost(props) {
  const theme = useTheme();
  const { color, groupName, groupImage, postdesc } = props;
  const [rating, setRating] = useState(0);

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
      <Card sx={{ display: "flex", maxWidth: "100%" }}>
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
          <Button style={{width:"7rem",translate:"35rem 2rem"}} variant="contained" disableElevation>
            Edit
          </Button>
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
          <Box display="flex" alignItems="center" marginBottom={15}>

            {[1, 2, 3, 4, 5].map((star) => (
              <IconButton
                key={star}
                onClick={() => handleRating(star)}
                color={star <= rating ? "warning" : "inherit"}
              >
                <StarIcon />
              </IconButton>
            ))}
            <Typography variant="body1" style={{ color: "black" }}>
              Rated: {rating} stars
            </Typography>

            <Stack direction="row" spacing={2} style={{ margin: 'auto' }}>
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
              <Button variant="outlined" color="error">
                Delete
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

export default Mypost;
