import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { useState } from "react";
import Controls from "./components/Controls/Controls";
// import { Assistant } from "./components/assistants/googleai";
import { Assistant } from "./components/assistants/openai";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessage) => [...prevMessage, message]);
  };

  const handleContentSend = async (content) => {
    addMessage({ content, role: "user" });

    try {
      const responseText = await assistant.chat(content, messages);
      addMessage({ content: responseText, role: "assistant" });
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
