import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const PrivacyPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <SEO
                title="Privacy Policy | Arvayon Pro Build Studio"
                description="Privacy Policy for Arvayon Pro Build Studio – Project Management Consultancy (PMC)."
            />
            <Navbar />

            <main className="pt-20 md:pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-[#D4B878] mb-4">Privacy Policy</h1>
                    <p className="text-sm text-gray-400 mb-12">Last Updated: 2026 | Arvayon Pro Build Studio</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p>
                            Arvayon Pro Build Studio respects user privacy and is committed to protecting
                            personal information collected through this website.
                        </p>
                        <p>
                            Information such as name, phone number, and email address is collected solely
                            for communication, consultation, and Project Management Consultancy (PMC) services.
                        </p>
                        <p>
                            User information shall not be shared with third parties except where required
                            by law or statutory authorities.
                        </p>
                        <p>
                            While reasonable security measures are implemented, absolute data security
                            over the internet cannot be guaranteed.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPage;
