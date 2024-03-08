import React, { useState } from 'react';
import './Post_css.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        if (commentInput.trim() !== '') {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    return (
        <div className="post-container" style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
            <div style={{ display: "flex" }}>
                <div>
                    <img src='./creategrp.jpg' alt='posts' style={{
                        marginRight: "20px",
                        marginLeft: "60px",
                        height: "300px",
                        width: "300px",
                        marginTop: "10px",
                        borderRadius: "0px"

                    }} />


                    <div className="comment-section " style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button className="like-button" onClick={handleLike} style={{ marginTop: "15.008px", paddingRight: "2rem" }}>
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                                Like
                                ({likes})
                            </button>
                            <div style={{ display: "flex" }}>

                                <button className="comment-button" onClick={handleComment} style={{ marginLeft: "1.5rem" }}>
                                    Comment
                                </button>
                                <button className="comment-button" style={{ marginLeft: "1.5rem" }}>
                                    Share
                                </button>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <input class="input"
                type="text"
                placeholder="Add a comment"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                className="comment-input"
            />
            <h4 style={{ marginTop: "10px", color: "white", marginLeft: "2vh", }}>Comments:</h4>
            <ul className="comments-list">
                {comments.map((comment, index) => (
                    <li key={index} className="comment-item" style={{ color: "white" }}>
                        {comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Post;
