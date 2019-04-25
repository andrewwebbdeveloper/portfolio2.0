import React from 'react';
import styled from 'styled-components';
import { color, font } from './utilities';

const ProjectArea = styled.div`
  overflow: hidden;
  margin: 3rem;
  margin-top: 5rem; 
  background: ${color[0]};
  width: 90%;
  height: 35rem;
  display: grid;
  grid-template-columns: 40% 60%;
  z-index: 10; 
  /* border: solid 0.2rem ${color[3]}; */

  &::before {
    z-index: 9; 
    position: absolute; 
    width: 90%;
    height: 37rem; 
    content:'';
    background-color: ${color[0]}; 
    transform: rotate(.5deg) translate(-1.8rem, -.7rem);
  }
  &::after {
    z-index: 0; 
    position: absolute; 
    width: 90%;
    height: 37rem; 
    content:''; 
    background-color: ${color[2]}
    transform: rotate(4deg) translate(-1.8rem, -.7rem);
  }

  img {
    overflow: hidden;
    height: 100%;
    width: auto;
    opacity: 0.9;
    z-index: 9;
    grid-column: 1 / 2;
  }

  div {
    
    grid-column: 2 / 3;
    width: 100%;
    background: ${color[0]};
    z-index: 10;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
    display: grid;
    grid-template-rows: minmax( min-content, 5rem) min-content min-content;  
    justify-content: center;
    grid-auto-flow: row;
  }

  
  
  h3 {
    margin: 1rem; 
    margin-bottom: 0;  
    ${font};
    padding: 1rem;   
    color: ${color[2]}; 
    font-weight: 700; 
    font-size: 7vmin; 
    text-align: center; 
  }
  
  p {
    margin: 0;
    padding: 1.5rem; 
    margin-right: 2rem; 
    justify-self: center; 
    text-align: center; 
    display: inline-block; 
    ${font}
    color: ${color[3]}; 
    font-weight: 400; 
    font-size: 1.8rem; 
    letter-spacing: 0.1rem;
    width: 70%;
    
    transform: translateX(13%);
  }
  .link-container {
    justify-self: left; 
    z-index: 20; 
    margin-top: 0; 
    grid-row: 3; 
    grid-column: 1; 
    display: flex;
    justify-content: center; 
    align-items: center; 
    transform: translateX(13%);
  }
  
  a {
    font-size: 5rem; 
    justify-self: center; 
    color: ${color[2]};
    margin: 1rem; 
    transition: all ease-in-out 0.1s; 
    
  }
  a:hover, i:hover {
    color: ${color[1]}; 
    transform: scale(1.1); 
  }
  i {
    
      color: ${color[2]}; 
      transition: all ease-in-out 0.1s; 

    }
  
  .site-link {
    font-size: 2rem; 
    font-weight: 700; 
    text-decoration: none; 
  }

  

`;

const Project = (props) => {
  const {
 key, image, title, github, url, description 
} = props;
  return (
    <ProjectArea key={key} className="project-container">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <div className="link-container">
          <a target="_blank" rel="noreferrer noopener" href={github}>
            <i className="devicon-github-plain-wordmark" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={url}
            alt={title}
            className="site-link"
          >
            Go to Site &rarr;
          </a>
        </div>
        <p>{description}</p>
      </div>
    </ProjectArea>
  );
};

export default Project;
