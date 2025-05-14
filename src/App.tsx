import React from 'react';
import OpeningSection from './components/OpeningSection';
import WelcomeMessage from './components/WelcomeMessage';
import WebDevelopment from './components/WebDevelopment';
import SystemAnalysis from './components/SystemAnalysis';
import DataAi from './components/DataAi';
import { Navbar } from '@siavanna/ts_library';
import './index.css';

const handleLinkClick = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const App = () => {
  return (
    <div className="portfolio">
      <OpeningSection />
      <Navbar
        title=""
        links={[
          {
            text: 'Home',
            href: '#',
            onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
          },
          {
            text: 'Web Development',
            href: '#',
            onClick: () => handleLinkClick('web-development')
          },
          {
            text: 'System Analysis',
            href: '#',
            onClick: () => handleLinkClick('system-analysis')
          },
          {
            text: 'Data & AI',
            href: '#',
            onClick: () => handleLinkClick('data-ai')
          },
        ]}
      />
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