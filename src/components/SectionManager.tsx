import React, { useState } from 'react';
import BasicInformation from './BasicInformation';
import Work from './Work';
import Skills from './Skills';
import DeveloperSetup from './DeveloperSetup';
import { Button } from '@siavanna/ts_library';

const SectionManager = () => {
  const [sections, setSections] = useState({
    basicInformation: { show: false, order: 0 },
    work: { show: false, order: 0 },
    skills: { show: false, order: 0 },
    developerSetup: { show: false, order: 0 },
  });

  const handleClick = (section: string) => {
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
    <div>
      <div className="button-container">
        <Button onClick={() => handleClick('basicInformation')}>Basic Information</Button>
        <Button onClick={() => handleClick('work')}>Work</Button>
        <Button onClick={() => handleClick('skills')}>Skills</Button>
        <Button onClick={() => handleClick('developerSetup')}>Developer Setup</Button>
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
};

export default SectionManager;