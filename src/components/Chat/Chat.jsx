import styles from "./Chat.module.css";
import Markdown from "react-markdown";

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Hello!, how can I assist you?",
};

export const Chat = ({ messages }) => {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => {
        return (
          <div key={index} data-role={role} className={styles.Message}>
            <Markdown>{content}</Markdown>
          </div>
        );
      })}
    </div>
  );
};
