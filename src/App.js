import React from 'react';
import MainLayout from './MainLayout';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Techs from './Techs';
import Form from './Form';

const App = () => (
  <MainLayout>
    <Header />
    <About />
    <Projects />
    <Techs />
    <Form />
  </MainLayout>
);

export default App;
