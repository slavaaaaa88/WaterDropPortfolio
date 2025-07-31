import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://getform.io/f/bmdmvjya", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Не удалось отправить. Попробуйте позже!");
      setSent(true);
      setLoading(false);
      form.reset();
    } catch (e) {
      setLoading(false);
      setErr(e.message);
    }
  };

  if (sent) {
    return (
      <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.51 }}
          src="https://i.postimg.cc/s2Jwy0KV/photo-5211136734690145958-y.jpg"
          alt="sparkle"
          style={{ width: 128, marginBottom:16 }}
        />
        <h2>Спасибо! Я свяжусь с вами!</h2>
      </section>
    );
  }

  return (
    <section id="contact">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Связаться со мной</h2>
      <form
        onSubmit={handleSubmit}
        className="glass-card"
        style={{
          maxWidth: 600,
          margin: "auto",
          padding: "2rem",
          display: "grid",
          gap: "1.1rem"
        }}
        autoComplete="off"
      >
        <input name="name" type="text" required placeholder="Ваше имя" autoComplete="name"/>
        <input name="email" type="email" required placeholder="E-mail" autoComplete="email"/>
        <textarea name="message" required placeholder="Ваше сообщение" rows="4" />
        <label style={{ fontSize: "0.94rem" }}>
          <input type="checkbox" required style={{marginRight:8}} /> Я согласен(а) с политикой
        </label>
        {err && <div style={{ color: "#ff2266", fontSize: "0.95rem" }}>{err}</div>}
        <motion.button
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="ripple-btn glass-card btn-gradient"
          disabled={loading}
          style={{
            padding: "0.8rem 2.3rem",
            border: "none",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "1.09rem",
            fontWeight: 500,
            letterSpacing: "0.05em"
          }}
        >
          {loading ? "Отправка..." : "Отправить"}
        </motion.button>
      </form>
    </section>
  );
};

export default ContactForm;
