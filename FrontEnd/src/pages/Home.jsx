import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import ProjectScroll from '../components/ProjectScroll';
import OfferAd from '../components/OfferAd';
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
        <div className="bg-primary min-h-screen text-white pb-24 md:pb-0">
            <Navbar />
            <div className="pt-24">
                <OfferAd />
            </div>
            <Hero />
            <TrustSection />
            <About />
            <VisionMission />
            {/* ProjectScroll moved to Hero background */}
            <Services />
            <Workflow />
            {/* Packages section removed as per request */}
            {/* <WhyChooseUs /> */}
            <Portfolio />
            <Contact />
            <Footer />
            <ChatBot />
        </div>
    );
};

export default Home;
