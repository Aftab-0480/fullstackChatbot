import React, { useState } from "react";

const InputBox = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={handleSend} style={{ padding: "8px" }}>
        Send
      </button>
    </div>
  );
};

export default InputBox;