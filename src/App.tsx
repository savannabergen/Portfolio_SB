import React from "react";
import OpeningSection from "./components/OpeningSection";
import WelcomeMessage from "./components/WelcomeMessage";
import PhotoGallery from "./components/PhotoGallery";
import WebDevelopment from "./components/WebDevelopment";
import SystemAnalysis from "./components/SystemAnalysis";
import DataAi from "./components/DataAi";
import Contact from "./components/Contact";
import { Navbar } from "@siavanna/ts_library";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const handleLinkClick = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <OpeningSection />
        <Navbar
          theme="dark"
          links={[
            { text: "Web Design", href: "#", onClick: () => handleLinkClick("web-development") },
            { text: "Analysis", href: "#", onClick: () => handleLinkClick("system-analysis") },
            { text: "Data & AI", href: "#", onClick: () => handleLinkClick("data-ai") },
            { text: "Gallery", href: "#", onClick: () => handleLinkClick("photo-gallery") },
            { text: "Contact", href: "#", onClick: () => handleLinkClick("contact") },
          ]}
        />
        <Routes>
  <Route
    path="*"
    element={
      <>
        <WelcomeMessage />
        <div id="web-development">
          <WebDevelopment />
        </div>
        <div id="system-analysis">
          <SystemAnalysis />
        </div>
        <div id="data-ai">
          <DataAi />
        </div>
        <div id="photo-gallery">
          <PhotoGallery />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </>
    }
  />
</Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
