import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import ProjectScroll from '../components/ProjectScroll';
import Services from '../components/Services';
import PMCServices from '../components/PMCServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Workprocess from '../components/Workprocess';

const Home = () => {
    return (
        <div className="min-h-screen pb-20 md:pb-0">
            <Navbar />
            <div className="pt-20">
                <Hero />

                <About />
                <VisionMission />
                {/* ProjectScroll moved to Hero background */}
                <Services />
                <PMCServices />
                <Workprocess />
                {/* Workflow removed */}
                {/* Packages section removed as per request */}
                {/* <WhyChooseUs /> */}
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
