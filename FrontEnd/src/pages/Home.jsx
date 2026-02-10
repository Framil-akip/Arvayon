import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';

import ProjectScroll from '../components/ProjectScroll';
import Services from '../components/Services';
import PMCServices from '../components/PMCServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="min-h-screen pb-20 md:pb-0">
            <SEO
                title="Construction Company in Nagercoil | Civil Contractors | PMC"
                description="Arvayon Pro Build Studio - Best construction company in Nagercoil providing PMC, architectural design, and civil contract services. Build your dream home with experts."
                keywords="Construction Company Nagercoil, Civil Contractors Nagercoil, PMC Services, Arvayon Pro Build Studio, Best Builders Nagercoil, Architectural Design, Structural Design"
            />
            <Navbar />
            <main className="pt-20">
                <Hero />
                <About />

                <PMCServices />
                <Services />
                {/* Workprocess moved inside PMCServices */}
                <Portfolio />
                <Contact />

            </main>
        </div>
    );
};

export default Home;
