import React from 'react';
import OpeningSection from './components/OpeningSection'
import WelcomeMessage from './components/WelcomeMessage';
import WebDevelopment from './components/WebDevelopment';
import SystemAnalysis from './components/SystemAnalysis';
import DataAi from './components/DataAi';
import './index.css'

const App = () => {
  return (
    <div className="portfolio">
      <OpeningSection />
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
    </div>
  );
};

export default App;