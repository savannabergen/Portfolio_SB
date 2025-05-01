import React from 'react';
import styled from 'styled-components';

const WelcomeMessageContainer = styled.div`
  text-align: center;
  padding: 0px 20px 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: -20px;

  @media (max-width: 768px) {
    margin-top: -40px; /* adjust margin for mobile view */
  }
`;

const WelcomeMessage = () => {
  return (
    <WelcomeMessageContainer>
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Savanna, a Web Developer with a passion for creating innovative solutions.</p>
    </WelcomeMessageContainer>
  );
};

export default WelcomeMessage;