// Utilities index
import React from 'react';
import memorize from '../img/Memorize-me.png';
import bankofmagic from '../img/bankofmagic.png';
import forkify from '../img/forkify.png';
import socodumps from '../img/socodumps.png';
import businessclass from '../img/businessclass.png';

export const color = ['#ececec', '#9fd3c7', '#385170', '#142d4c'];

export const titleFont = "font-family:'Bungee Shade', cursive;";

export const font = 'font-family: "Montserrat", sans-serif';

export const titleFontSize = '10vmax';

export const subtitleFontSize = '8vmax';

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
    url: 'https://bank-of-magic.netlify.com/login?redirect=%2F',
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
