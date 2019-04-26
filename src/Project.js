import React from 'react';
import styled from 'styled-components';
import { color, font } from './utilities';
import device from './utilities/media';

const ProjectArea = styled.div`
  overflow: hidden;
  margin: 3rem;
  margin-top: 5rem;
  background: ${color[0]};
  width: 90%;
  height: 33rem;
  display: grid;
  grid-template-columns: 40% 65%;
  z-index: 10; 
  
  
  @media ${device.tablet} {
    margin: .5rem;
    grid-auto-flow: row; 
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    width: 100%;  
    height: min-content; 
  }
  @media ${device.laptopL} {
    height: 40rem; 
    margin: 10rem;  
  }
  @media ${device.desktopL} {
    height: 60rem; 
    margin: 10rem;  
  }

  &::before {
    z-index: 9; 
    position: absolute; 
    width: 93%;
    height: 35rem; 
    content:'';
    background-color: ${color[0]}; 
    transform: rotate(.5deg) translate(-1.8rem, -.7rem);

    
    
  
  @media ${device.laptopL} {
    transform: rotate(.5deg) translate(-2rem, -2rem);
    height: 45rem;  
    width: 85%; 
  }
  @media ${device.desktop} {
    transform: rotate(.5deg) translate(-2rem, -2rem);
    height: 65rem;  
    width: 85%; 
  }
  @media ${device.tablet} {
    display: none; 
  }
  }
  &::after {
    z-index: 0; 
    position: absolute; 
    width: 93%;
    height: 35rem; 
    content:''; 
    background-color: ${color[2]};
    transform: rotate(4deg) translate(-1.8rem, -.7rem);
    
    @media ${device.tablet} {
    grid-auto-flow: row; 
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    max-width: min-content;  
    }
    @media ${device.laptopL} {
    transform: rotate(20deg) translate(-1.8rem, -.7rem);
    height: 40rem;  
    width: 38%;
    }
    @media ${device.desktop} {
    transform: rotate(20deg) translate(-1.8rem, -.7rem);
    height: 60rem;  
    width: 38%;
  }
  }

  img {
    overflow: hidden;
    height: 100%;
    width: auto;
    opacity: 0.9;
    z-index: 9;
    grid-column: 1 / 2;

    @media ${device.tablet} {
    display: none;   
  }
  }

  div {
    
    grid-column: 2 / 3;
    width: 100%;
    height: 105%;
    background: ${color[0]};
    z-index: 10;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%);
    display: grid;
    grid-template-rows: minmax( min-content, 5rem) min-content min-content;  
    justify-content: center;
    grid-auto-flow: row;

    @media screen and ${device.tablet} {
     grid-column: 1;
     clip-path: none; 
   }

    @media ${device.laptopL} {
    padding: 0 0 0 5rem;
    transform: translateX(-5rem); 
  }
    
  }

  
  
  h3 {
    margin: 1rem; 
    margin-bottom: 0;  
    ${font};
    padding: 2rem;   
    color: ${color[2]}; 
    font-weight: 700; 
    font-size: 3rem; 
    text-align: center; 

    @media screen and ${device.tablet} {
      font-size: 3.5rem; 
   }
    @media ${device.laptop} {
    font-size: 2.8rem; 
  }
    @media ${device.laptopL} {
    font-size: 3.5rem; 
  }
    @media ${device.desktop} {
    font-size: 5rem; 
  }
  }
  
  p {
    margin: 0;
   
    justify-self: center; 
    text-align: center; 
    display: inline-block; 
    ${font}
    color: ${color[3]}; 
    font-weight: 400; 
    font-size: 1.8rem; 
    letter-spacing: 0.1rem;
    width: 70%;
    
    transform: translateX(2rem);
    
    @media screen and ${device.tablet} {
    width: 80%; 
    font-size: 1.1rem; 
    transform: none;
  }
   
    @media ${device.laptop} {
    font-size: 1.3rem; 
    }
    /* < Original Size > */
    @media ${device.laptopL} {
    font-size: 2.5rem; 
    }
    @media ${device.desktop} {
    font-size: 4rem; 
    }
  }
  .link-container {
    justify-self: right; 
    z-index: 20; 
    margin-top: 1rem; 
    grid-row: 3; 
    grid-column: 1; 
    display: flex;
    justify-content: center; 
    align-items: center; 
    transform: translateX(3rem);

    @media screen and ${device.tablet} {
      font-size: 1.5rem; 
      transform: none;
      margin: 0 0 1rem 0; 
   }
  }
  
  a {
    text-decoration: none;
    font-size: 5rem; 
    justify-self: center; 
    color: ${color[2]};
    margin: 1rem; 
    transition: all ease-in-out 0.1s; 

    
    @media ${device.laptop} {
    font-size: 4rem; 
    }
    @media ${device.laptopL} {
    font-size: 5rem; 
    }
    
  }
  a:hover, i:hover {
    color: ${color[1]}; 
  }
  i {
    color: ${color[2]}; 
    transition: all ease-in-out 0.1s; 
    
  }
  
  
  .site-link {
    font-size: 2vmax; 
    font-weight: 700; 
    text-decoration: none; 

    @media ${device.laptop} {
    font-size: 1rem; 
    }
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
