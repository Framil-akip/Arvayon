import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <Navbar />
            <div className="pt-24">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
