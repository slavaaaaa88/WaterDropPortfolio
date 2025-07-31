import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ideas = [
  "Интерактивный калькулятор для клиентов",
  "AI-FAQ бот",
  "Дашборд статистики в реальном времени",
  "Формы захвата лидов",
  "Геймификация интерфейса",
  "Лендинг с персонализацией",
  "Online-регистрация и бронирование",
  "Визитка с WOW-анимацией",
];

const IdeaGenerator = () => {
  const [cards, setCards] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    const shuffled = [...ideas].sort(() => 0.5 - Math.random());
    setCards(shuffled.slice(0, 3));
  };

  return (
    <section id="ideas">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Генератор идей</h2>
      <div
        className="glass-card"
        style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}
      >
        <img
          src="https://i.postimg.cc/g0pNCPVS/photo-5211136734690145955-y.jpg"
          alt="Идеи"
          style={{ width: "100%", borderRadius: "var(--radius)" }}
          loading="lazy"
        />
        <form onSubmit={handleGenerate} style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            type="submit"
            className="ripple-btn glass-card btn-gradient"
            style={{
              padding: "0.75rem 2.1rem",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.06rem",
            }}
          >
            Сгенерировать идеи
          </button>
        </form>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "1rem",
            marginTop: "1.3rem",
          }}
        >
          <AnimatePresence>
            {cards.map((c) => (
              <motion.div
                key={c}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                className="glass-card"
                style={{ padding: "1.1rem", fontSize: "0.97rem" }}
              >
                {c}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default IdeaGenerator;
