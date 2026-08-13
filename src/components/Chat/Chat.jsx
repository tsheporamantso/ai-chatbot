import styles from "./Chat.module.css";

export const Chat = ({ messages }) => {
  return (
    <div className={styles.Chat}>
      {messages.map(({ role, content }, index) => {
        return (
          <div key={index} data-role={role} className={styles.Message}>
            {content}
          </div>
        );
      })}
    </div>
  );
};
