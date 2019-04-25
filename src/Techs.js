import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color, techList } from './utilities';

const TechsArea = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${color[2]};
  height: minmax(50rem, min-content);
  grid-template-columns: repeat(4, 1fr);
  max-width: 100vw;
  clip-path: polygon(50% 0%, 100% 5%, 100% 95%, 50% 100%, 0 95%, 0 5%);
  transform: translate(0rem, -17rem);

  grid-gap: 2rem;
  padding: 5rem 0 5rem 0;
`;

const Tech = styled.div`
  justify-self: center;
  align-self: center;
  align-text: center;

  img {
    height: auto;
    width: 70%;
    transition: all ease 1s;
    &:hover {
      transform: blur(1);
    }
  }
  &:hover,
  .tech-info {
    display: block;
  }
`;

const Techs = () => {
  const [techImages, setTechImages] = useState([]);
  useEffect(() => {
    setTechImages(techList);
  }, []);

  return (
    <TechsArea>
      {techImages.map(tech => (
        <Tech key={tech.id}>
          <img src={tech.image} alt={tech.name} />
        </Tech>
      ))}
    </TechsArea>
  );
};

export default Techs;
