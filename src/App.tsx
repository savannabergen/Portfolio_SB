import React from 'react';
import SectionManager from './components/SectionManager';
import OpeningSection from './components/OpeningSection';
import './index.css';

function App() {
  return (
    <div className="App">
      <OpeningSection />
      <SectionManager />
    </div>
  );
}

export default App;