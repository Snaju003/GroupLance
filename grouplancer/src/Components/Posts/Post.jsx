import React, { useState } from 'react';
import './Post_css.css';

const Post = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        if (commentInput.trim() !== '') {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="post-container">
            <img src='./aboutUs.jpg' alt='posts' style={{
                marginRight: "20px",
                marginLeft: "20px",
                height: "200px",
                width: "200px",
                marginTop: "10px",
            }} />
            <div className="comment-section">
                <button className="like-button" onClick={handleLike}>
                    Like ({likes})
                </button>
                <button className="comment-button" onClick={handleComment}>
                    Comment
                </button>
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className="comment-input"
                />
            </div>
            <div>
                <h4 style={{ marginTop: "10px", color: "white" }}>Comments:</h4>
                <ul className="comments-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item" style={{ color: "white" }}>
                            {comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Post;
