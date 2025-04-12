import React from 'react';
import { Card } from '@savannabergen/react_library';

const Skills = () => {
  const description = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '0 20px'
    }}>
      <p style={{
        fontSize: '16px',
        color: '#666'
      }}>Description: This is a skills description.</p>
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#6c5ce7'
        }}>Languages/Frameworks:</h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• JavaScript</li>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• React</li>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• HTML/CSS</li>
        </ul>
      </div>
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#6c5ce7'
        }}>Tools:</h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• VSCode</li>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• Terminal</li>
        </ul>
      </div>
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#6c5ce7'
        }}>Resources:</h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• Resource 1</li>
          <li style={{
            fontSize: '16px',
            color: '#666'
          }}>• Resource 2</li>
        </ul>
      </div>
    </div>
  );

  return (
    <Card
      title={<span style={{ color: '#6c5ce7' }}>Skills</span>}
      description={description}
    />
  );
};

export default Skills;