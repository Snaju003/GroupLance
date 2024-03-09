import React, { useState } from "react";
import { TextField, Button, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Post = ({ groupName, postDescription }) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="post-container">
      <div className="comment-section">
        <div className="comment-input-container">
          <TextField
            className="input comment-input"
            variant="outlined"
            placeholder="Add a comment"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <Button
            className="comment-button"
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
          
        </div>
        <List className="comments-list">
          {comments.map((comment, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Avatar" />
              </ListItemAvatar>
              <ListItemText primary={comment} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Post;
