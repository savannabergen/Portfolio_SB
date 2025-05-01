import React from 'react';
import { Card } from '@siavanna/ts_library';
import { Img } from '@siavanna/ts_library';

const Work = () => {
  return (
    <Card title={<span style={{ color: '#6c5ce7' }}>Work</span>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Img src="/star.jpg" alt="Project Image" />
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>North Star Market</h2>
        </div>
        <div>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Link: <a href="https://northstar.market" style={{ textDecoration: 'none', color: '#007bff' }}>
              View Project
            </a>
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#666' }}>Tech List:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: '16px', color: '#666' }}>• Ruby on Rails</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• Postgresql</li>
            <li style={{ fontSize: '16px', color: '#666' }}>• Render</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Work;
