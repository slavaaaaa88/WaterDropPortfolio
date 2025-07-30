**/src/components/Hero.js**
import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <header style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
    <video
      src="https://dl.dropboxusercontent.com/scl/fi/718k2yxhq5zmv3rccev1x/document_5211136734233915875.mp4?raw=1"
      autoPlay loop muted playsInline
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
      <img
        src="https://i.postimg.cc/T2NNpFx1/photo-5211136734690145953-x.jpg"
        alt="WaterDrop logo"
        style={{ width: 80, marginBottom: 16, borderRadius: "24px", background: "rgba(0,0,0,0.1)" }}
      />
      <h1 style={{ fontSize: "clamp(2.1rem,6vw,4.6rem)", margin: 0, letterSpacing: "-2px" }}>
        Water-Drop Portfolio
      </h1>
      <p style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)", marginBottom: "2.5rem", textShadow: "0 2px 14px #007cf833" }}>
        Современный стеклянный дизайн, AI, калькуляторы, витрина проектов
      </p>
      <button
        className="ripple-btn glass-card btn-gradient"
        style={{
          padding: "1rem 2.5rem",
          fontSize: "1.08rem",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          fontWeight: 600,
          borderRadius: 26,
          boxShadow: "0 2px 16px #00e0ff22",
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        Смотреть портфолио
      </button>
    </motion.div>
  </header>
);

export default Hero;
