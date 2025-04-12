import React from 'react';
import { Card } from '@savannabergen/react_library';

const DeveloperSetup = () => {
  const description = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '0 20px'
    }}>
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#6c5ce7'
        }}>VSCode Setup:</h2>
        <p style={{
          fontSize: '16px',
          color: '#666'
        }}>Description: This is a VSCode setup description.</p>
      </div>
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#6c5ce7'
        }}>Terminal Setup:</h2>
        <p style={{
          fontSize: '16px',
          color: '#666'
        }}>Description: This is a terminal setup description.</p>
      </div>
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#6c5ce7'
        }}>Preferred Editor Font:</h2>
        <p style={{
          fontSize: '16px',
          color: '#666'
        }}>Font: Monaco</p>
      </div>
    </div>
  );

  return (
    <Card
      title={<span style={{ color: '#6c5ce7' }}>Developer Setup</span>}
      description={description}
    />
  );
};

export default DeveloperSetup;