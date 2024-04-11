import React, { useEffect, useState, useRef } from "react";
import { TextField, Button, Paper } from "@mui/material";
import "./Chat.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { pusherClient } from "../../context/Pusher";
import { find } from 'lodash';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import Dropdown from 'react-bootstrap/Dropdown';

const Chat = ({ groupName, chatid, groupId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { currentUser } = useUser();
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

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

  // useEffect(() => {
  //   socket.current.emit("join", chatid, {
  //     name: currentUser.name,
  //     _id: currentUser._id
  //   });
  // }, [chatid, currentUser, socket]);

  // useEffect(() => {
  //   socket.current.on("get:message", (msg) => {
  //     console.log(msg);
  //     // TODO: Here Message should be concate
  //     // setMessages((prevMessages) => [...prevMessages, msg]);
  //     setMessages([...messages, { message: msg.msg, senderId: msg.user }]);
  //   });
  // }, [socket]);

  useEffect(() => {
    pusherClient.subscribe(chatid);
    scrollToBottom();
    const messageHandler = (message) => {
      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }
        return [...current, message];
      });
      scrollToBottom();
    }

    pusherClient.bind("message:new", messageHandler);
    return () => {
      pusherClient.unsubscribe(chatid);
      pusherClient.unbind("message:new", messageHandler);

    }
  }, [chatid])


  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;
    // const updatedMessages = [...messages, { message: newMessage, senderId: currentUser }];
    // setMessages(updatedMessages);

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
      // const json = await response.json();
      // socket.current.emit("send:message", chatid, socket.current.id, newMessage);
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

  const goToVideoCall = () => {
    console.log(groupId, currentUser.name)
    const name = currentUser.name
    try {
      sessionStorage.setItem("grpId", groupId);
      sessionStorage.setItem("userId", name);
    } catch (error) {
      console.error("Error storing data in sessionStorage:", error);
    }
    navigate("/videoCall")
  }

  return (
    <>
      <div className="chat-container" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#ffff", border: "1px solid #ffff", borderRadius: "10px", padding: "1rem", marginTop: "1rem", marginBottom: "1rem", fontWeight: "900", fontSize: "20px", width: "99%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {groupName}
          </div>
          <Button onClick={goToVideoCall} variant="contained" style={{ height: "7vh", lineHeight: "0em", borderRadius: "20px" }}>
            <VideoChatIcon />
          </Button>
        </div>

        <Paper elevation={3} className="message-container" style={{ borderRadius: "20px", background: "transparent", border: "1px solid #ffff" }}>
          {messages.map((message, index) => (
            <div
              style={{ display: "flex", position: "relative" }}
              key={index}
              className={`message ${message.senderId?._id === currentUser._id ? "user-message" : "other-message"}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <strong>{message.senderId?.name}:</strong> {message.message}
              {hovered === index && currentUser._id === message.senderId?._id && (
                <Dropdown
                  style={{
                    position: "absolute",
                    top: "0%",
                    right: 0,
                    zIndex: 1
                  }}
                >
                  <Dropdown.Toggle
                    split
                    variant="success"
                    id={`dropdown-split-basic-${index}`}
                    style={{
                      background: "none",
                      border: "none"
                    }}
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          ))}


          <div ref={messagesEndRef} />
        </Paper>
        <div className="input-container" style={{ outline: "none" }}>
          <TextField
            type="text"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value)
            }}
            onKeyUp={handleKeyPress}
            placeholder="Type your message..."
            className="input-field"
            style={{ borderRadius: "20px", outline: "none", border: "none", marginRight: "0.5rem", height: "7.5vh" }}
          />
          <Button onClick={handleSendMessage} variant="contained" style={{ height: "7.5vh", lineHeight: "0em", borderRadius: "20px", marginRight: "0.5rem" }}>
            <span>Send</span>
          </Button>

        </div>
      </div>
    </>
  );
};

export default Chat;
