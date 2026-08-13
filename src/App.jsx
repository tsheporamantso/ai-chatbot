import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { useState } from "react";
import Controls from "./components/Controls/Controls";

function App() {
  const [messages, setMessages] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chat-bot.png" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  );
}

const MESSAGES = [
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error harum atque deleniti, accusantium autem blanditiis eos aliquam eveniet natus dolores cumque possimus quasi aut voluptas! Quam similique ad odio?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error harum atque deleniti, accusantium autem blanditiis eos aliquam eveniet natus dolores cumque possimus quasi aut voluptas! Quam similique ad odio?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error harum atque deleniti, accusantium autem blanditiis eos aliquam eveniet natus dolores cumque possimus quasi aut voluptas! Quam similique ad odio?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error harum atque deleniti, accusantium autem blanditiis eos aliquam eveniet natus dolores cumque possimus quasi aut voluptas! Quam similique ad odio?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error harum atque deleniti, accusantium autem blanditiis eos aliquam eveniet natus dolores cumque possimus quasi aut voluptas! Quam similique ad odio?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error harum atque deleniti, accusantium autem blanditiis eos aliquam eveniet natus dolores cumque possimus quasi aut voluptas! Quam similique ad odio?",
  },
];

export default App;
