import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import "./Chat.css"; // Import your CSS file

const Chat = ({ groupName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <>
      <div className="chat-container">
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        {groupName}
      </h1>
        <Paper elevation={3} className="message-container" style={{ borderRadius: "20px", backgroundImage: "url(./chat.jpg)" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user-message" : "other-message"}`}
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </Paper>
        <div className="input-container">
          <TextField
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            variant="outlined"
            className="input-field"
            style={{ borderRadius: "20px" }}
          />
          <Button onClick={handleSendMessage} variant="contained" style={{ height: "5vh", lineHeight: "0em" }}>
            <span>Send</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chat;
