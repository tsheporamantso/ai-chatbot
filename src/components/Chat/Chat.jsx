import styles from "./Chat.module.css";

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
            {content}
          </div>
        );
      })}
    </div>
  );
};
