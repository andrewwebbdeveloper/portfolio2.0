import React from 'react';
import styled from 'styled-components';
import { color, font } from './utilities';
import device from './utilities/media';

const AboutArea = styled.section`
  background: ${color[3]};
  height: min-content;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
  margin-top: -7rem;
  margin-bottom: 10rem;
  padding-bottom: 8rem;

  @media ${device.desktop} {
    margin-top: -13rem;
    padding: 10rem;
  }
  @media ${device.desktopL} {
    margin-top: -13rem;
    padding: 10rem;
  }
`;

const AboutText = styled.h4`
  padding: 9rem;
  ${font};
  font-size: 3vmax;
  font-weight: 300;
  color: ${color[0]};
  max-width: 40rem;

  @media ${device.tablet} {
    font-size: 1.8rem;
    padding: 5rem 2rem;
    max-width: 90%;
  }
  @media ${device.desktop} {
    max-width: 60rem;
  }
  @media ${device.desktopL} {
    max-width: 60rem;
  }
`;

const About = () => (
  <AboutArea>
    <AboutText>
      A curious, creative, clean-code developer focused on making the best
      solutions for the problems at hand with the future in mind.
    </AboutText>
  </AboutArea>
);

export default About;
