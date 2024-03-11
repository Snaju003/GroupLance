import React, { useEffect, useState } from "react";
import Mypost from "./Mypost";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Post from "./Post";

function Myposts() {
  const title = "kalo Romit";
  const description =
    "he root layout is defined at the top level of the app directory and applies to all routes. This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.";
  const groupImage = "/creategrp.jpg";
  const color = "#dfdffb";
  const [posts, setPosts] = useState();
  const authToken = localStorage.getItem("auth-token");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/user/get-all-posts`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken,
            },
          }
        );
        const data = await response.json();
        setPosts(data.posts);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost()
  }
    , [authToken])

  return (
    <>
      <h1
        className="text-center my-4"
        style={{ color: "#ffff", fontWeight: "bold" }}
      >
        My Posts
      </h1>
      <div className="container">
        <div className="container row" style={{ flexDirection: "column-reverse", display: "flex", }}>
          {
            posts && posts.map(({ groupId, content,_id }) => {
              return (
                <div class="col-md-3 mb-3" style={{ width: "100%", height: "100%" }} >
                  <Mypost groupName={groupId.gName} groupId={groupId._id} tweetId={_id} postdesc={content} groupImage={groupImage} color={color} />
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Post groupName={title} postDescription={description} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}

export default Myposts;
