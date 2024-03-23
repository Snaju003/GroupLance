import React, { useEffect, useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import "./Chat.css"; 

import { useUser } from "../../context/UserContext";

const Chat = ({ groupName, chatid }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { currentUser } = useUser();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const authToken = localStorage.getItem("auth-token");
        const response = await fetch(`http://localhost:8080/api/conversation/get-all-messages/${chatid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        });
        const data = await response.json();
        // const updatedMessages = [...messages, { text: data.lastmessage, sender: currentUser.name }];
        console.log("Data ",data)
        setMessages(data.allMessages); 
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [chatid]); 

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    const updatedMessages = [...messages, { text: newMessage, sender: currentUser.name }];
    setMessages(updatedMessages);
    
    try {
      const authToken = localStorage.getItem("auth-token");
      const response = await fetch("http://localhost:8080/api/conversation/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({
          chatId: chatid,
          message: newMessage,
          senderId: currentUser._id,
        }),
      });
      const json = await response.json();
      console.log(json);
      setNewMessage("");
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <h1 className="text-center my-4" style={{ color: "#ffff" }}>
        {groupName}
      </h1>
      <Paper elevation={3} className="message-container" style={{ borderRadius: "20px", background: "transparent" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === currentUser.name ? "user-message" : "other-message"}`}
          >
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </Paper>
      <div className="input-container" style={{ borderRadius: "0px", outline: "none" }}>
        <TextField
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="input-field"
          style={{ borderRadius: "0px", outline: "none", border: "none" }}
        />
        <Button onClick={handleSendMessage} variant="contained" style={{ height: "7.5vh", lineHeight: "0em", borderRadius: "none" }}>
          <span>Send</span>
        </Button>
      </div>
    </div>
  );
};

export default Chat;
