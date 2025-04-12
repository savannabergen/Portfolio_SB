import React, { useState } from 'react';
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import Skills from './components/Skills';
import DeveloperSetup from './components/DeveloperSetup';
import './index.css';
import { Button } from '@savannabergen/react_library';

function App() {
  const [sections, setSections] = useState({
    basicInformation: { show: false, order: 0 },
    work: { show: false, order: 0 },
    skills: { show: false, order: 0 },
    developerSetup: { show: false, order: 0 },
  });

  const handleClick = (section: string) => {
    console.log('Button clicked:', section);
    setSections((prevSections) => {
      const newSections = { ...prevSections };
      newSections[section].show = true;
      const order = Object.values(newSections).filter((s) => s.show).length;
      newSections[section].order = order;
      return newSections;
    });
  };

  const handleClose = (section: string) => {
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
        <Button onClick={(e) => { console.log('Button clicked!'); handleClick('basicInformation'); }}>Basic Information</Button>
        <Button onClick={() => handleClick('work')}>Work</Button>
        <Button onClick={() => handleClick('skills')}>Skills</Button>
        <Button onClick={() => handleClick('developerSetup')}>Developer Setup</Button>
      </div>
      <div className="content-container">
        {sortedSections.map(([key]) => (
          <div key={key} className={`section ${sections[key].show ? 'show' : ''}`}>
            <Button variant="close" className="close-button" onClick={() => handleClose(key)}>×</Button>
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