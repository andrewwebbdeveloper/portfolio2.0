import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Project from './Project';
import { color, projectList } from './utilities';
import device from './utilities/media';

const ProjectsArea = styled.section`
  background: ${color[1]};
  height: min-content;

  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  clip-path: polygon(
    0 0,
    10% 3%,
    20% 0,
    30% 3%,
    40% 0,
    50% 3%,
    60% 0,
    70% 3%,
    80% 0,
    90% 3%,
    100% 0,
    100% 100%,
    0 100%
  );
  margin-top: -20rem;
  margin-bottom: 9rem;
  padding-bottom: 9rem;

  @media ${device.tablet} {
    margin-bottom: 15rem;
    padding: 0;
  }
  @media ${device.laptopL} {
    margin-top: -24rem;
    padding-top: 10rem;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 9rem 3rem 3rem 3rem;
  width: 98%;
  height: 90%;

  @media ${device.tablet} {
    width: 100%;
    margin: 9rem 0 3rem 0;
  }
  @media ${device.laptopL} {
    width: 90%;
  }
`;

const Projects = () => {
  const [projectObject, setProjectObject] = useState([]);
  useEffect(() => {
    setProjectObject(projectList);
  }, []);
  return (
    <ProjectsArea>
      <ProjectsContainer>
        {projectObject.map(project => (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            github={project.github}
            url={project.url}
            description={project.description}
          />
        ))}
      </ProjectsContainer>
    </ProjectsArea>
  );
};

export default Projects;
