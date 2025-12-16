import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
