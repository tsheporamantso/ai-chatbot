import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { useState } from "react";
import Controls from "./components/Controls/Controls";

function App() {
  const [messages, setMessages] = useState([]);

  const handleContentSend = (content) => {
    setMessages((prevMessage) => [...prevMessage, { content, role: "user" }]);
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
