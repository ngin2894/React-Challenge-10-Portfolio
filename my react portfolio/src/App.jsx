import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProjectImage from './assets/projectImage.png'
import './App.css'
import Navigation from './components/Navigation';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';
import Footer from './components/footer';

function App() {

  return (
    <Router>
      <div>
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
