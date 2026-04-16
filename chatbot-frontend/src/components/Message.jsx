import React from "react";

const Message = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div style={{ textAlign: isUser ? "right" : "left", margin: "5px" }}>
      <span
        style={{
          background: isUser ? "#4caf50" : "#eee",
          color: isUser ? "white" : "black",
          padding: "8px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Message;