// Utilities index
import memorize from '../img/Memorize-me.png';
import bankofmagic from '../img/bankofmagic.png';
import forkify from '../img/forkify.png';
import socodumps from '../img/socodumps.png';
import businessclass from '../img/businessclass.png';
import Css3 from '../img/tech/CSS3.png';
import git from '../img/tech/git.svg';
import html5 from '../img/tech/HTML5.png';
import JavaScript from '../img/tech/JavaScript.svg';
import react from '../img/tech/react.svg';
import Sass from '../img/tech/Sass.svg';
import styled from '../img/tech/styled.png';
import jquery from '../img/tech/jquery.svg';
import tailwindcss from '../img/tech/tailwindcss.svg'
import vuejs from '../img/tech/vuejs.svg'

export const techList = [
  {
    id: 1,
    name: 'html5',
    image: html5,
  },
  {
    id: 2,
    name: 'Css3',
    image: Css3,
  },
  {
    id: 3,
    name: 'JavaScript',
    image: JavaScript,
  },
  {
    id: 4, name: 'vue', image: vuejs,
  },
  {
    id: 5, name: 'tailwind', image: tailwindcss,
  },
  {
    id: 6,
    name: 'react',
    image: react,
  },
  {
    id: 7,
    name: 'git',
    image: git,
  },
  {
    id: 8,
    name: 'Sass',
    image: Sass,
  },
  {
    id: 9,
    name: 'styled',
    image: styled,
  },
  {
    id: 10,
    name: 'jQuery',
    image: jquery,
  },
];

const palettes = [
  ['#ececec', '#9fd3c7', '#385170', '#142d4c'],
  ['#DEF2F1', '#3AAFA9', '#2B7A78', '#17252A'],
  ['#F2F2F2', '#3B945E', '#57BA98', '#182628'],
  ['#ebecf1', '#206a5d', '#1f4068', '#1b1c25'],
  ['#f4f6ff', '#fbd46d', '#4f8a8b', '#07031a'],
  ['#f1ebbb', '#b5076b', '#5c2a9d', '#45046a'],
  ['#10375c', '#844685', '#f3c623', '#faf4ff'],
  ['#5f6caf', '#ffb677', '#ff8364', '#edf7fa'],
  ['#fff1cf', '#ffd369', '#263f44', '#015668'],
];

const getRandomPalette = () =>
  palettes[Math.floor(Math.random() * Math.floor(palettes.length))];

export const color = getRandomPalette();

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
