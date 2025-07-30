**/src/components/ChatbotButton.js**
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const openSergeyChat = () => {
  if (window.chatbase && typeof window.chatbase.openChat === "function") {
    window.chatbase.openChat();
  } else {
    alert("Здравствуйте! Я прораб Сергей. Чат-бот загружается, подождите секунду...");
  }
};

const ChatbotButton = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = setInterval(() => {
      if (
        typeof window.chatbase === "function" &&
        typeof window.chatbase.openChat === "function"
      ) {
        setReady(true);
        clearInterval(check);
      }
    }, 700);
    return () => clearInterval(check);
  }, []);

  if (!ready) return null;

  return (
    <motion.button
      className="glass-card ripple-btn"
      aria-label="Открыть чат-бот"
      onClick={openSergeyChat}
      whileHover={{ scale: 1.13 }}
      whileTap={{ scale: 0.92 }}
      style={{
        position: "fixed",
        bottom: "1.2rem",
        right: "1.2rem",
        zIndex: 1003,
        border: "none",
        borderRadius: "50%",
        padding: 0,
        width: "62px",
        height: "62px",
        cursor: "pointer",
        background: "var(--glass-bg)",
        boxShadow: "0 4px 16px #00e0ff66",
        backdropFilter: "blur(9px)",
      }}
    >
      <img
        src="https://i.postimg.cc/hvY26zsT/photo-5210884521325623754-y.jpg"
        alt="Чат-бот"
        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        loading="lazy"
      />
    </motion.button>
  );
};

export default ChatbotButton;
