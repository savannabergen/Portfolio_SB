import React from 'react';
import SectionManager from './components/SectionManager';
import OpeningSection from './components/OpeningSection';
import './index.css';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <OpeningSection />
      <WelcomeMessage />
      <SectionManager />
    </div>
  );
}

export default App;