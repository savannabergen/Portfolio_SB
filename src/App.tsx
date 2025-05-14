import React from 'react';
import OpeningSection from './components/OpeningSection'
import WelcomeMessage from './components/WelcomeMessage';
import WebDevelopment from './components/WebDevelopment';
import SystemAnalysis from './components/SystemAnalysis';
import DataAi from './components/DataAi';
import { Navbar } from '@siavanna/ts_library';
import './index.css';

const App = () => {
  return (
    <div className="portfolio">
      <OpeningSection />
      <Navbar
      title=""
      links={[
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
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