import React from 'react';
import styled from 'styled-components';
import { color, font, titleFont } from './utilities';

const HeaderArea = styled.header`
  background: ${color[0]};
  height: 40rem;
  max-width: 100vw;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const Title = styled.h1`
  text-align: center;

  margin: 3rem;
  ${titleFont};
  color: ${color[3]};
  font-size: 8rem;
`;
const SubTitle = styled.h2`
  margin: 1rem; 
  ${font};
  font-weight: 300;
  color: ${color[3]};
  font-size: 4rem;
  letter-spacing: 2.5rem;
  transform: translateY(-9.5rem);
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
