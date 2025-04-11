import React from 'react';
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import Skills from './components/Skills';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
  return (
    <div className="App">
      <BasicInformation />
      <Work />
      <Skills />
      <DeveloperSetup />
    </div>
  );
}

export default App;