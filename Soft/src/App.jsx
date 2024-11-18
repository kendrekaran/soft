import React from 'react';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


function App() {
  
  return (
    <div className="text-gray-200">
      
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
