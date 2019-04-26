import React from 'react';
import styled from 'styled-components';
import { color, font, titleFont } from './utilities';
import device from './utilities/media';

const HeaderArea = styled.header`
  background: ${color[0]};
  height: 40rem;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  @media only screen and ${device.tablet} {
    height: 25rem;
  }
  @media only screen and ${device.laptopL} {
    height: 50rem;
  }
  @media only screen and ${device.desktopL} {
    height: 90rem;
  }
`;

const Title = styled.h1`
  text-align: center;

  ${titleFont};
  color: ${color[3]};
  font-size: 8vmax;

  @media ${device.tablet} {
    margin-top: -8rem;
    font-size: 4rem;
    padding: 1rem;
  }
  @media screen and ${device.mobileM} {
    margin-top: -8rem;
    font-size: 3.5rem;
    padding: 1rem;
  }
`;
const SubTitle = styled.h2`
 
 justify-self: center; 

  ${font};
  font-weight: 300;
  color: ${color[3]};
  font-size: 8vmin;
  letter-spacing: 6vmin;
  }

  @media ${device.tablet} {
    font-size: 5vmin; 
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
