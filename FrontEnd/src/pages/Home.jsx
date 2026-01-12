import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import ProjectScroll from '../components/ProjectScroll';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import TrustSection from '../components/TrustSection';
import Workflow from '../components/Workflow';

const Home = () => {
    return (
        <div className="min-h-screen pb-24 md:pb-0">
            <Navbar />
            <div className="pt-28 md:pt-20">
                <Hero />

                <About />
                <VisionMission />
                {/* ProjectScroll moved to Hero background */}
                <Services />
                <TrustSection />
                {/* <Workflow /> */}
                {/* Packages section removed as per request */}
                {/* <WhyChooseUs /> */}
                <Portfolio />
                <Contact />
                <Footer />
                <ChatBot />
            </div>
        </div>
    );
};

export default Home;
