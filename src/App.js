import React from 'react';
import MainLayout from './MainLayout';
import Header from './Header';
import About from './About';
import Projects from './Projects';

const App = () => (
  <MainLayout>
    <Header />
    <About />
    <Projects />
  </MainLayout>
);

export default App;
