import React, { useState,useEffect } from 'react';
import Livepost from './Livepost';


function Liveposts() {
    const title = "kalo Romit";
    const description = "he root layout is defined at the top level of the app directory and applies to all routes. This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.";
    const groupImage = "/creategrp.jpg";
    const color = "#dfdffb";
    const [posts, setPosts] = useState();
    
    useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/tweet/get-all-posts`,
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
    , [])

  return (
    <>
      <h1 className='text-center my-4' style={{ color: '#ffff', fontWeight: "bold" }}>Live Posts</h1>
      <div className="container">
        <div className="container row" style={{ flexDirection: "column" , display:"flex",}}>
        {
            posts && posts?.map(({ groupId, content }) => {
              return (
                <div class="col-md-3 mb-3" style={{ width: "100%", height: "100%" }} >
                  <Livepost groupName={groupId.gName} postdesc={content} groupImage={groupImage} color={color} />
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

export default Liveposts;
