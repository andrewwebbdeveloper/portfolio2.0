import React from 'react';
import styled from 'styled-components';
import { color, font, titleFont } from './utilities';
import device from './utilities/media';
import PDF from './Andrew_Webb_Resume.pdf';

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
    height: 30rem;
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

const ResumeButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 1rem;
  position: relative;
`;
const ResumeButton = styled.button`
  position: absolute;
  text-transform: uppercase;
  right: 2rem;
  top: 2rem;
  width: 7rem;
  height: 3rem;
  ${font};
  color: ${color[3]};
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;

  border: 0.3rem solid ${color[3]};
  transition: all ease 0.1s;
  z-index: 100;

  @media ${device.tablet} {
    right: 1rem;
    top: 1rem;
  }

  &:hover {
    color: ${color[2]};
    border: 0.3rem solid ${color[1]};
  }
  &:active {
    border: 0.3rem solid ${color[0]};
    color: ${color[0]};
    background: ${color[3]};
  }
`;

const Header = () => (
  <>
    <ResumeButtonWrapper>
      <a href={PDF} target="_blank" rel="noopener noreferrer">
        <ResumeButton>résumé</ResumeButton>
      </a>
    </ResumeButtonWrapper>
    <HeaderArea>
      <Title>Andrew Webb</Title>
      <SubTitle>Developer</SubTitle>
    </HeaderArea>
  </>
);

export default Header;
