import React from 'react';
import { Card } from '@siavanna/ts_library';
import { Text } from '@siavanna/ts_library'

const DeveloperSetup = () => {
  return (
    <Card title={<span style={{ color: '#6c5ce7' }}>Developer Setup</span>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 20px' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>VSCode Setup:</h2>
          <Text style={{ fontSize: '16px', color: '#666' }}>
            I use Visual Studio Code (VSCode) with the Windows Subsystem for Linux (WSL) Ubuntu distribution for most of my development work. This setup allows me to leverage the power of Linux while still working on a Windows machine.
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default DeveloperSetup;