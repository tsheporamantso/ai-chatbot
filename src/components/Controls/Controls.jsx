import { useState } from "react";
import styles from "./Controls.module.css";
import TextareaAutosize from "react-textarea-autosize";

const Controls = ({ onSend }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <TextareaAutosize
          placeholder="Message AI Chatbot"
          className={styles.TextArea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          minRows={1}
          maxRows={4}
        />
      </div>
      <button className={styles.Button} type="submit">
        <SendIcon />
      </button>
    </form>
  );
};

const SendIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
    </svg>
  );
};
export default Controls;
