import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white pb-24 md:pb-0">
            <SEO
                title="Our Services | Project Management Consultancy | Civil Works | Nagercoil"
                description="Comprehensive construction services including Project Management Consultancy (PMC), Architectural Design, Structural Engineering, and Turnkey Civil Contracts."
                url="/services"
            />
            <Navbar />
            <div className="pt-24 md:pt-32">
                <Services />
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
