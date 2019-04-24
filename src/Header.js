import React from 'react';
import styled from 'styled-components';
import {
 color, font, titleFont, subtitleFontSize 
} from './utilities';

const HeaderArea = styled.header`
  background: ${color[0]};
  height: 40rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const Title = styled.h1`
  margin: 3rem;
  ${titleFont};
  color: ${color[3]};
  font-size: 8rem;
`;
const SubTitle = styled.h2`
  ${font};
  font-weight: 300;
  color: ${color[3]};
  font-size: ${subtitleFontSize};
  letter-spacing: 0.7rem;
  transform: translateY(-5rem);
  }
`;

function Header() {
  return (
    <HeaderArea>
      <Title>Andrew Webb</Title>
      <SubTitle>Developer</SubTitle>
    </HeaderArea>
  );
}

export default Header;
