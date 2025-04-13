import React from 'react';
import { HeroImg } from '@savannabergen/react_library';
import styled from 'styled-components';

const HeroImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

function OpeningSection() {
  return (
    <HeroImgContainer>
      <HeroImg src="/welcome.gif" alt="Hero Image" />
    </HeroImgContainer>
  );
}

export default OpeningSection;