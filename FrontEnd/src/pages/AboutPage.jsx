import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <SEO
                title="About Arvayon Pro Build Studio | Construction Company Nagercoil"
                description="Learn about Arvayon Pro Build Studio, leading civil contractors and PMC experts in Nagercoil. Dedicated to quality, transparency, and superior building solutions."
                url="/about"
            />
            <Navbar />
            <div className="pt-20 md:pt-24">
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
