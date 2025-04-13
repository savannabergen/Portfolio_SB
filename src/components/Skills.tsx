import React from 'react';
import { Card } from '@savannabergen/react_library';

const Skills = () => {
  return (
    <Card title={<span style={{ color: '#6c5ce7' }}>Skills</span>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 20px' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Full-Stack Development:</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>
            As a full-stack developer, I have expertise in both front-end and back-end development, with a strong understanding of how to design and implement scalable and efficient software systems.
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Front-End:</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '16px', color: '#666' }}>• JavaScript</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• React</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• HTML/CSS</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Back-End:</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '16px', color: '#666' }}>• Ruby on Rails</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• Python</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• PHP</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• Java</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Database:</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '16px', color: '#666' }}>• SQL</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• Database Design (UML, ER diagrams)</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Version Control:</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '16px', color: '#666' }}>• GitHub</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Skills;