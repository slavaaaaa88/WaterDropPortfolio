**/src/components/IdeaGenerator.js**
import React, { useState } from "react";
import { motion } from "framer-motion";

const ideas = [
  "Interactive Product Configurator",
  "AI-Driven FAQ Bot",
  "Real-Time Data Dashboard",
  "3-Step Lead Magnet Funnel",
  "Gamified Onboarding Flow",
  "Personalized E-commerce Landing",
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
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Idea Generator</h2>
      <div
        className="glass-card"
        style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}
      >
        <img
          src="https://i.postimg.cc/g0pNCPVS/photo-5211136734690145955-y.jpg"
          alt="Idea Generator"
          style={{ width: "100%", borderRadius: "var(--radius)" }}
          loading="lazy"
        />
        <form onSubmit={handleGenerate} style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            type="submit"
            className="ripple-btn glass-card"
            style={{
              padding: "0.75rem 2rem",
              background:
                "linear-gradient(135deg,var(--primary) 0%,var(--secondary) 100%)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Generate Ideas
          </button>
        </form>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          {cards.map((c) => (
            <motion.div
              key={c}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card"
              style={{ padding: "1rem", fontSize: "0.9rem" }}
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeaGenerator;
