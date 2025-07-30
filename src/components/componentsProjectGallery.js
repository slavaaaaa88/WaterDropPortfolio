**/src/components/ProjectGallery.js**
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Мобильный макет",
    img: "https://i.postimg.cc/s2Jwy0KV/photo-5211136734690145958-y.jpg"
  },
  {
    id: 2,
    title: "Десктоп макет",
    img: "https://i.postimg.cc/tCLrz6YH/photo-5211136734690145957-y.jpg"
  }
];

const ProjectGallery = () => (
  <section id="gallery">
    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Примеры работ</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "1.4rem"
      }}
    >
      {projects.map((p) => (
        <motion.div
          key={p.id}
          className="glass-card"
          style={{ padding: 8, display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 24px #00e0ff88" }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={p.img}
            alt={p.title}
            title={p.title}
            style={{ width: "100%", borderRadius: "inherit" }}
            loading="lazy"
          />
          <div style={{ marginTop: 12, fontWeight: 500 }}>{p.title}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectGallery;
