import React from 'react';
import { Card, Img } from '@savannabergen/react_library';

const BasicInformation = () => {
  return (
    <Card title={<span style={{ color: '#6c5ce7' }}>Basic Information</span>}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <Img src="/star.jpg" alt="Profile Image" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>Savanna Bergen</p>
          <p style={{ fontSize: '18px', fontWeight: '500' }}> Email: <a href="mailto:savanna.bergen@gmail.com" style={{ textDecoration: 'none', color: '#6c5ce7' }}> savanna.bergen@gmail.com </a> </p>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>Phone: 204-823-2811</p>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>Location: Winnipeg, MB</p>
        </div>
      </div>
    </Card>
  );
};

export default BasicInformation;