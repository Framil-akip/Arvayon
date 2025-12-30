import React from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const PortfolioPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-24">
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
};

export default PortfolioPage;
