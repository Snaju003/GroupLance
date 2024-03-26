import React, { useEffect, useState, useRef } from "react";
import { TextField, Button, Paper } from "@mui/material";
import "./Chat.css";

import { useUser } from "../../context/UserContext";

const Chat = ({ groupName, chatid, socket }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { currentUser } = useUser();
  const messagesEndRef = useRef(null);
  // console.log(currentUser);
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
        setMessages(data.allMessages);
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [chatid]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.current.emit("join", chatid, {
      name: currentUser.name,
      _id: currentUser._id
    });
  }, [chatid, currentUser, socket]);

  useEffect(() => {
    socket.current.on("get:message", (msg) => {
      console.log(msg);
      // TODO: Here Message should be concate
      // setMessages((prevMessages) => [...prevMessages, msg]);
      setMessages([...messages, { message: msg.msg, senderId: msg.user }]);
    });
  }, [socket]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;
    const updatedMessages = [...messages, { message: newMessage, senderId: currentUser }];
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
      const userData = {};
      socket.current.emit("send:message", chatid, socket.current.id, newMessage);
      setNewMessage("");
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="chat-container">
        <h1 className="text-center my-4" style={{ color: "#ffff" }}>
          {groupName}
        </h1>
        <Paper elevation={3} className="message-container" style={{ borderRadius: "20px", background: "transparent" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.senderId?._id === currentUser._id ? "user-message" : "other-message"}`}
            >
              <strong>{message.senderId?.name}:</strong> {message.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </Paper>
        <div className="input-container" style={{ borderRadius: "0px", outline: "none" }}>
          <TextField
            type="text"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value)
            }}
            onKeyUp={handleKeyPress}
            placeholder="Type your mess age..."
            className="input-field"
            style={{ borderRadius: "0px", outline: "none", border: "none" }}
          />
          <Button onClick={handleSendMessage} variant="contained" style={{ height: "7.5vh", lineHeight: "0em", borderRadius: "none" }}>
            <span>Send</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chat;
