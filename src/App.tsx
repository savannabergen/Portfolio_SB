import React, { useState } from 'react';
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import Skills from './components/Skills';
import DeveloperSetup from './components/DeveloperSetup';
import './index.css';

function App() {
  const [sections, setSections] = useState({
    basicInformation: { show: false, order: 0 },
    work: { show: false, order: 0 },
    skills: { show: false, order: 0 },
    developerSetup: { show: false, order: 0 },
  });

  const handleClick = (section) => {
    setSections((prevSections) => {
      const newSections = { ...prevSections };
      newSections[section].show = true;
      const order = Object.values(newSections).filter((s) => s.show).length;
      newSections[section].order = order;
      return newSections;
    });
  };

  const handleClose = (section) => {
    setSections((prevSections) => {
      const newSections = { ...prevSections };
      newSections[section].show = false;
      const shownSections = Object.entries(newSections).filter(([_, s]) => s.show);
      shownSections.forEach(([key], index) => {
        newSections[key].order = index + 1;
      });
      return newSections;
    });
  };

  const sortedSections = Object.entries(sections)
    .filter(([_, s]) => s.show)
    .sort((a, b) => a[1].order - b[1].order);

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => handleClick('basicInformation')}>Basic Information</button>
        <button onClick={() => handleClick('work')}>Work</button>
        <button onClick={() => handleClick('skills')}>Skills</button>
        <button onClick={() => handleClick('developerSetup')}>Developer Setup</button>
      </div>
      <div className="content-container">
        {sortedSections.map(([key]) => (
          <div key={key} className={`section ${sections[key].show ? 'show' : ''}`}>
            <button className="close-button" onClick={() => handleClose(key)}>×</button>
            {key === 'basicInformation' && <BasicInformation />}
            {key === 'work' && <Work />}
            {key === 'skills' && <Skills />}
            {key === 'developerSetup' && <DeveloperSetup />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;