import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import EducationAndTraining from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';


const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{border:'2px solid rgb(0,209,255)', backgroundColor:'black'}}>
      <AboutUs />
      <HeroSection />
      <WorkExperience /> 
      <EducationAndTraining />
      <Skills /> 
      </div>
      
     
      
      <Contact />
      
      
    </div>
  );
};

export default App;
