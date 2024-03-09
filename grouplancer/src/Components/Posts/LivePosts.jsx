import React from 'react'
import Livepost from './Livepost';

function LivePosts() {
    const title = "kalo Romit";
    const description = "he root layout is defined at the top level of the app directory and applies to all routes. This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.";
    const groupImage="/creategrp.jpg";
    const color = "#dfdffb";
    
    return (
        <>
            <h1 className='text-center my-4' style={{ color: '#ffff' ,fontWeight:"bold"}}>Trending Posts</h1>
            <div className="container">
                <div className="container row" style={{flexDirection:"column"}}>
                    <div class="col-md-3 mb-3" style={{width:"100%",height:"100%"}}>
                        <Livepost groupName={title} postdesc={description} groupImage={groupImage} color={color} />
                    </div>
                    <div class="col-md-3 mb-3" style={{width:"100%",height:"100%"}}>
                        <Livepost groupName={title} postdesc={description} groupImage={groupImage} color={color} />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default LivePosts;