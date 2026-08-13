import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { useState } from "react";
import Controls from "./components/Controls/Controls";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
const chat = ai.chats.create({
  model: "gemini-3.6-flash",
});

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessage) => [...prevMessage, message]);
  };

  const handleContentSend = async (content) => {
    addMessage({ content, role: "user" });

    try {
      const response = await chat.sendMessage({ message: content });
      addMessage({ content: response.text, role: "assistant" });
    } catch (error) {
      console.error(error);
      addMessage({
        content: "Sorry I couldn't process your request. Please try again!",
        role: "system",
      });
    }
  };
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chat-bot.png" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;
