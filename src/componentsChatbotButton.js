**/src/components/ChatbotButton.js**
import React from "react";
import { motion } from "framer-motion";

const openSergeyChat = () => {
  if (window.chatbase && typeof window.chatbase.openChat === "function") {
    window.chatbase.openChat();
  } else {
    alert(
      "Здравствуйте! Я прораб Сергей. Чат-бот загружается, подождите секунду..."
    );
  }
};

const ChatbotButton = () => (
  <motion.button
    className="glass-card ripple-btn"
    onClick={openSergeyChat}
    whileHover={{ scale: 1.1 }}
    style={{
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      border: "none",
      borderRadius: "50%",
      padding: 0,
      width: "64px",
      height: "64px",
      cursor: "pointer",
      background: "var(--glass-bg)",
      backdropFilter: "blur(12px)",
    }}
  >
    <img
      src="https://i.postimg.cc/hvY26zsT/photo-5210884521325623754-y.jpg"
      alt="chat bot"
      style={{ width: "100%", height: "100%", borderRadius: "50%" }}
    />
  </motion.button>
);

export default ChatbotButton;
