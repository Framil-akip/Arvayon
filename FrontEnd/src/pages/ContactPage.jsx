import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';


import SEO from '../components/SEO';

const ContactPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white pb-24 md:pb-0">
            <SEO
                title="Contact Us | Get a Free Construction Consultation | Nagercoil"
                description="Contact Arvayon Pro Build Studio for a free estimate or consultation. We are ready to help you plan and build your dream project."
                url="/contact"
            />
            <Navbar />
            <div className="pt-24 md:pt-32">
                <Contact />
            </div>

        </div>
    );
};

export default ContactPage;
