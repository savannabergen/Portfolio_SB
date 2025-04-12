import React from 'react';
import { Card } from '@savannabergen/react_library';

const BasicInformation = () => {
  return (
    <Card title={<span style={{ color: '#6c5ce7' }}>Basic Information</span>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 20px' }}>
        <p style={{ fontSize: '18px', fontWeight: '500' }}>Savanna Grace</p>
        <p style={{ fontSize: '18px', fontWeight: '500' }}>
          Email: <a href="mailto:savanna.bergen@gmail.com" style={{ textDecoration: 'none', color: '#6c5ce7' }}>
            savanna.bergen@gmail.com
          </a>
        </p>
        <p style={{ fontSize: '18px', fontWeight: '500' }}>Phone: 204-823-2811</p>
        <p style={{ fontSize: '18px', fontWeight: '500' }}>Location: Winnipeg, MB</p>
      </div>
    </Card>
  );
};

export default BasicInformation;
