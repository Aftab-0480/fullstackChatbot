import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    if (!text) return;

    // add user message
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);

    try {
      const res = await fetch("http://localhost:5071/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      // add bot reply
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.bot },
      ]);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chatbot</h2>
      <ChatBox messages={messages} />
      <InputBox onSend={sendMessage} />
    </div>
  );
}

export default App;