import React, { useEffect, useState } from "react";
import "./Chat.css"; // Import your CSS file
import io from "socket.io-client";
const socket = io.connect("http://localhost:9000");

const Chat = ({ groupName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {

    socket.emit("send_message", { message: "Hello" });

    return () => {
    }
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const updatedMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <>
      <div className="chat-container">
        <div className="message-container" style={{ borderRadius: "20px", backgroundImage: "url(./chat.jpg)" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user-message" : "other-message"}`}
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="input-field"
            style={{ borderRadius: "20px" }}
          />
          <button onClick={handleSendMessage} className="button-48" style={{ height: "5vh", lineHeight: "0em" }}>
            <span>Send</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;




