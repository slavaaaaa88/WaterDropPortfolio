**/src/App.js**
import React from "react";
import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";
import CostCalculator from "./components/CostCalculator";
import IdeaGenerator from "./components/IdeaGenerator";
import ChatbotButton from "./components/ChatbotButton";
import ContactForm from "./components/ContactForm";
import usePageView from "./hooks/usePageView";

function App() {
  usePageView();
  return (
    <>
      <Hero />
      <ProjectGallery />
      <CostCalculator />
      <IdeaGenerator />
      <ContactForm />
      <ChatbotButton />
    </>
  );
}

export default App;

