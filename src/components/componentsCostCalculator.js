**/src/components/CostCalculator.js**
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  { id: "ui", label: "UI/UX Design", price: 500 },
  { id: "dev", label: "Frontend Dev", price: 1000 },
  { id: "backend", label: "Backend API", price: 1500 },
];

const CostCalculator = () => {
  const [selected, setSelected] = useState([]);
  const [complexity, setComplexity] = useState(3);

  const toggle = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const base = selected.reduce(
    (total, id) => total + options.find((o) => o.id === id).price,
    0
  );
  const price = base * (complexity / 3);

  return (
    <section id="calculator">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Cost Calculator</h2>
      <div
        className="glass-card"
        style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}
      >
        <img
          src="https://i.postimg.cc/1tCBVnL2/photo-5211136734690145959-y.jpg"
          alt="Calculator"
          style={{ width: "100%", borderRadius: "var(--radius)" }}
          loading="lazy"
        />
        <h3>Features</h3>
        {options.map((o) => (
          <label key={o.id} style={{ display: "block", marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={selected.includes(o.id)}
              onChange={() => toggle(o.id)}
            />{" "}
            {o.label} (+${o.price})
          </label>
        ))}

        <h3>Complexity</h3>
        <input
          type="range"
          min="1"
          max="5"
          value={complexity}
          onChange={(e) => setComplexity(Number(e.target.value))}
          style={{ width: "100%" }}
        />
        <AnimatePresence mode="wait">
          <motion.p
            key={price}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "1rem" }}
          >
            ~ ${price.toFixed(0)}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CostCalculator;
