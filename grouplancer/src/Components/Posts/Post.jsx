import React, { useState } from "react";
import "./Post_css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Post = ({ groupName, postDescription }) => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleRating = (starCount) => {
    setRating(starCount);
  };

  const handleComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div
      className="post-container"
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* <h2 style={{ color: "white" }}>{groupName}</h2> */}
        <p style={{ color: "black" }}>{postDescription}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <img
            src="./creategrp.jpg"
            alt="posts"
            style={{
              marginRight: "20px",
              marginLeft: "60px",
              height: "300px",
              width: "300px",
              marginTop: "10px",
              borderRadius: "0px",
            }}
          />

          <div
            className="comment-section"
            style={{ display: "flex", flexDirection: "row", alignItems: "center" ,justifyContent: "center"}}
          >
            <div style={{ display: "flex", marginRight: "1rem" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  style={{
                    color: star <= rating ? "yellow" : "grey",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                  onClick={() => handleRating(star)}
                />
              ))}
              <span style={{ marginLeft: "1rem", color: "white" }}>
                Rated: {rating} stars
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <input
          className="input comment-input"
          type="text"
          placeholder="Add a comment"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          className="comment-button"
          onClick={handleComment}
          style={{ marginLeft: "1rem" }}
        >
          Comment
        </button>
        <button className="comment-button" style={{ marginLeft: "1rem" }}>
          Share
        </button>
      </div>
      
      <ul className="comments-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item" style={{ color: "black" }}>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
