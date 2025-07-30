**/src/components/ContactForm.js**
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src="https://i.postimg.cc/s2Jwy0KV/photo-5211136734690145958-y.jpg"
          alt="sparkle"
          style={{ width: 160 }}
        />
        <h2>Спасибо! Я свяжусь с вами!</h2>
      </section>
    );
  }

  return (
    <section id="contact">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact</h2>
      <form
        action="https://getform.io/f/bmdmvjya"
        method="POST"
        className="glass-card"
        style={{
          maxWidth: 600,
          margin: "auto",
          padding: "2rem",
          display: "grid",
          gap: "1rem",
        }}
        onSubmit={() => setSent(true)}
      >
        <input name="name" type="text" required placeholder="Ваше имя" />
        <input name="email" type="email" required placeholder="E-mail" />
        <textarea name="message" required placeholder="Ваше сообщение" rows="4" />
        <label style={{ fontSize: "0.9rem" }}>
          <input type="checkbox" required /> Я согласен(а) с политикой
        </label>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="ripple-btn glass-card"
          style={{
            padding: "0.75rem 2rem",
            background:
              "linear-gradient(135deg,var(--primary) 0%,var(--secondary) 100%)",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Отправить
        </motion.button>
      </form>
    </section>
  );
};

export default ContactForm;
