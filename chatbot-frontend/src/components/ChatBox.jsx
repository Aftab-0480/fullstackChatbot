import React from "react";
import Message from "./Message";

const ChatBox = ({ messages }) => {
  return (
    <div style={{ border: "1px solid #ccc", height: "300px", overflowY: "scroll", padding: "10px" }}>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatBox;