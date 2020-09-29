// Utilities index
import memorize from '../img/Memorize-me.png';
import bankofmagic from '../img/bankofmagic.png';
import forkify from '../img/forkify.png';
import socodumps from '../img/socodumps.png';
import businessclass from '../img/businessclass.png';
import adobeXD from '../img/tech/Adobe_XD.svg';
import Css3 from '../img/tech/CSS3.png';
import git from '../img/tech/git.svg';
import html5 from '../img/tech/HTML5.png';
import JavaScript from '../img/tech/JavaScript.svg';
import Netlify from '../img/tech/Netlify.svg';
import react from '../img/tech/react.svg';
import redux from '../img/tech/redux.svg';
import Sass from '../img/tech/Sass.svg';
import Firebase from '../img/tech/Firebase.svg';
import gatsby from '../img/tech/gatsby.png';
import styled from '../img/tech/styled.png';
import jquery from '../img/tech/jquery.svg';
import Jira from '../img/tech/Jira.svg';
import Bitbucket from '../img/tech/Bitbucket.svg';
import vscode from '../img/tech/vs-code-icon.png';

export const techList = [
  {
    id: 4,
    name: 'html5',
    image: html5,
  },
  {
    id: 2,
    name: 'Css3',
    image: Css3,
  },
  {
    id: 5,
    name: 'JavaScript',
    image: JavaScript,
  },
  {
    id: 7,
    name: 'react',
    image: react,
  },
  {
    id: 3,
    name: 'git',
    image: git,
  },
  {
    id: 13,
    name: 'Bitbucket',
    image: Bitbucket,
  },
  {
    id: 6,
    name: 'Netlify',
    image: Netlify,
  },
  {
    id: 8,
    name: 'redux',
    image: redux,
  },
  {
    id: 9,
    name: 'Sass',
    image: Sass,
  },
  {
    id: 10,
    name: 'Firebase',
    image: Firebase,
  },
  {
    id: 11,
    name: 'gatsby',
    image: gatsby,
  },
  {
    id: 12,
    name: 'styled',
    image: styled,
  },
  {
    id: 1,
    name: 'adobeXD',
    image: adobeXD,
  },
  {
    id: 14,
    name: 'Jira',
    image: Jira,
  },
  {
    id: 15,
    name: 'vscode',
    image: vscode,
  },
  {
    id: 16,
    name: 'jQuery',
    image: jquery,
  },
];

export const color = ['#ececec', '#9fd3c7', '#385170', '#142d4c'];

export const titleFont = "font-family:'Bungee Shade', cursive;";

export const font = 'font-family: "Montserrat", sans-serif';

export const projectList = [
  {
    id: 1,
    title: 'Memorize Me',
    image: memorize,
    github: 'https://github.com/andrewwebbdeveloper/Memos',
    url: 'https://memorize-me.netlify.com/',
    description:
      'A JavaScript memory game built using React, React hooks, and styled-components',
  },
  {
    id: 2,
    title: 'SOCO Dumps',
    image: socodumps,
    github: 'https://github.com/andrewwebbdeveloper/SOCOdumps',
    url: 'https://www.socodumps.com/',
    description:
      'A web application designed to allow local users to view Southampton County, VA waste disposal sites based on location and open hours. Uses: HTML, CSS, and Javascript',
  },
  {
    id: 3,
    title: 'Business Class Cleaners',
    image: businessclass,
    github: 'https://github.com/andrewwebbdeveloper/businessclasscleaners',
    url: 'https://www.businessclasscleaners.com/',
    description:
      'A local business website highlighting offerings and a contact form for an office cleaning company in the Tidewater area of Virginia. Uses: HTML, CSS, and Netlify',
  },
  {
    id: 4,
    title: 'Bank of Magic',
    image: bankofmagic,
    github: 'https://github.com/andrewwebbdeveloper/Bank-of-Magic',
    url: 'https://bank-of-magic.netlify.com/',
    description:
      'A Create, Read, Update, Delete application for managing users and balances for wizard bank accounts. Uses: React, Redux, NPM, React Router, Axios, Firebase, and Bootstrap 4',
  },
  {
    id: 5,
    title: 'Forkify',
    image: forkify,
    github: 'https://github.com/andrewwebbdeveloper/forkify',
    url: 'https://forkify-recipies.netlify.com/',
    description:
      'Web Application utilizing Food2Fork API (Limit 50/day) to render recipe information from JSON database. Employs Model-View-Controller (MVC) methodology for data retrieval and DOM manipulation',
  },
];
