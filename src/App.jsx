import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { useState } from "react";
import Controls from "./components/Controls/Controls";
import { Assistant } from "./components/assistants/googleai";
// import { Assistant } from "./components/Assistants/openai";
import Loaders from "./components/Loader/Loaders";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (message) => {
    setMessages((prevMessage) => [...prevMessage, message]);
  };

  const handleContentSend = async (content) => {
    addMessage({ content, role: "user" });
    setIsLoading(true);

    try {
      const responseText = await assistant.chat(content);
      addMessage({ content: responseText, role: "assistant" });
    } catch (error) {
      console.error(error);
      addMessage({
        content: "Sorry I couldn't process your request. Please try again!",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.App}>
      {isLoading && <Loaders />}
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
