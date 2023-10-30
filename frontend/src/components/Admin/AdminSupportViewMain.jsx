import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Message = ({ sender, content, timestamp }) => (
  <div className="message">
    <div className="sender">{sender}</div>
    <div className="content">{content}</div>
    <div className="timestamp">{timestamp}</div>
  </div>
);

function AdminSupportViewMain() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      sender: "ADMIN",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="main">
      <h3 className="title">From Kasun Perera</h3>

      <div className="messageDetails" style={{ marginLeft: "55%",height:'25%' }}>
        <div className="sender">Kasun Perera</div>I have been encountering
        persistent difficulties while navigating your website over the past
        week. Specifically, when I try to access the "My Account" section and
        log in to my user profile, I am consistently met with an error message
        stating, "Error 500: Internal Server Error." This has prevented me from
        updating my account information and accessing my order history.
      </div>

      <div className="chat-ui">
        <div className="message-list">
          {messages.map((message, index) => (
            <Message
              key={index}
              sender={message.sender}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button varient='primary' onClick={handleSendMessage} style={{backgroundColor:'#6D004F'}}>Send</Button>
        </div>
      </div>
    </div>
  );
}

export default AdminSupportViewMain;
