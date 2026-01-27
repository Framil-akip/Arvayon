import React from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const PortfolioPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <SEO
                title="Our Portfolio | Recent Construction Projects in Nagercoil"
                description="Explore our portfolio of completed residential and commercial projects. See the quality and craftsmanship that defines Arvayon Pro Build Studio."
                url="/portfolio"
            />
            <Navbar />
            <div className="pt-20 md:pt-24">
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
