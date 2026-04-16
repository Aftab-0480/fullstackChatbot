import React from "react";

const Message = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
  {text}
</div>
  );
};

export default Message;