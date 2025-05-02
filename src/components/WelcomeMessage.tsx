import React from 'react';
import { Img } from '@siavanna/ts_library';
import { Hamburger } from '@siavanna/ts_library';

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome to My Portfolio</h1>
      <Img src="/me.png" alt="Project Image" />
      <p>I'm Savanna, a Web Developer with a passion for creating innovative solutions.</p>
      <Hamburger />
    </div>
  );
};

export default WelcomeMessage;