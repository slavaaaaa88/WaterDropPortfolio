**/src/components/ProjectGallery.js**
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Mobile Mockup",
    img: "https://i.postimg.cc/s2Jwy0KV/photo-5211136734690145958-y.jpg",
  },
  {
    id: 2,
    title: "Desktop Mockup",
    img: "https://i.postimg.cc/tCLrz6YH/photo-5211136734690145957-y.jpg",
  },
];

const ProjectGallery = () => (
  <section id="gallery">
    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: "1rem",
      }}
    >
      {projects.map((p) => (
        <motion.div
          key={p.id}
          className="glass-card"
          whileHover={{ scale: 1.06, boxShadow: "0 0 16px var(--primary)" }}
        >
          <img
            src={p.img}
            alt={p.title}
            style={{ width: "100%", borderRadius: "inherit" }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectGallery;
