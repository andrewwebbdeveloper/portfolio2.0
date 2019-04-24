import React from 'react';
import styled from 'styled-components';
import { color, font } from './utilities';

const AboutArea = styled.section`
  overflow: hidden;
  background: ${color[3]};
  height: 50rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  text-align: center;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
  transform: translateY(-7.5rem);
`;

const AboutText = styled.h4`
  padding: 7rem;
  ${font};
  font-size: 5vmax;
  font-weight: 300;
  color: ${color[0]};
`;

const About = () => (
  <AboutArea>
    <AboutText>
      A curious, self-teaching developer focused on creating sensible solutions
      with suitable web technologies.
    </AboutText>
  </AboutArea>
);

export default About;
