import React, { useState } from 'react';
import './Post_css.css';

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
        <div className="post-container">
            <div style={{ display: "flex" }}>
                <div>
                    <img src='./aboutUs.jpg' alt='posts' style={{
                        marginRight: "20px",
                        marginLeft: "20px",
                        height: "200px",
                        width: "200px",
                        marginTop: "10px",
                    }} />
                    <button className="like-button" onClick={handleLike}>
                        Like ({likes})
                    </button>
                </div>
                <div className="comment-section" style={{ borderLeft: "3px solid white"}}>
                    <div style={{display: "flex"}}>
                        <input
                            type="text"
                            placeholder="Add a comment"
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            className="comment-input"
                        />
                        <button className="comment-button" onClick={handleComment}>
                            Comment
                        </button>
                    </div>
                    <div>
                        <h4 style={{ marginTop: "10px", color: "white", marginLeft: "2vh", }}>Comments:</h4>
                        <ul className="comments-list">
                            {comments.map((comment, index) => (
                                <li key={index} className="comment-item" style={{ color: "white" }}>
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
