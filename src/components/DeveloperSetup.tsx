import React from 'react';
import { Card } from '@savannabergen/react_library';
import { Text } from '@savannabergen/react_library'

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
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Terminal Setup:</h2>
          <Text style={{ fontSize: '16px', color: '#666' }}>
            I use two terminals in my workflow. For most of my development work, I use the built-in terminal in VSCode with WSL Ubuntu. However, for Git-related tasks, I prefer using Git Bash, which provides a familiar Unix-like environment for version control.
          </Text>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#6c5ce7' }}>Preferred Editor Font:</h2>
          <Text style={{ fontSize: '16px', color: '#666' }}>
            My preferred font is Monaco, which provides a clean and readable font style.
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default DeveloperSetup;