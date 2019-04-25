import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Project from './Project';
import { color, projectList } from './utilities';

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
  transform: translateY(-14.5rem);
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem 3rem 3rem 3rem;
  width: 98%;
  height: 90%;
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
