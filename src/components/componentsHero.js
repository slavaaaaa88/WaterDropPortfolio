**/src/components/Hero.js**
import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <header style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
    <video
      src="https://dl.dropboxusercontent.com/scl/fi/718k2yxhq5zmv3rccev1x/document_5211136734233915875.mp4?raw=1"
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", margin: 0 }}>
        Water-Drop Portfolio
      </h1>
      <p style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", marginBottom: "2rem" }}>
        Modern glass design, AI tools & calculators
      </p>
      <button
        className="ripple-btn glass-card"
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          background:
            "linear-gradient(135deg,var(--primary) 0%,var(--secondary) 100%)",
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        Explore
      </button>
    </motion.div>
  </header>
);

export default Hero;
