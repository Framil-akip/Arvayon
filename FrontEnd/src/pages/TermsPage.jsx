import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const TermsPage = () => {
    return (
        <div className="bg-primary min-h-screen text-white">
            <SEO
                title="Terms of Service | Arvayon Pro Build Studio"
                description="Terms of Service for Arvayon Pro Build Studio – Project Management Consultancy (PMC)."
            />
            <Navbar />

            <main className="pt-20 md:pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-[#D4B878] mb-4">Terms of Service</h1>
                    <p className="text-sm text-gray-400 mb-12">Last Updated: 2026 | Arvayon Pro Build Studio</p>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p>
                            Arvayon Pro Build Studio provides PMC services strictly in an advisory
                            and monitoring capacity and does not undertake construction execution.
                        </p>
                        <p>
                            The scope of services is limited to agreed consultancy activities.
                            Any service not expressly mentioned is excluded.
                        </p>
                        <p>
                            The firm shall not be liable for contractor performance, construction delays,
                            statutory approvals, force majeure events, or client-related decisions.
                        </p>
                        <p>
                            Fees shall be paid as agreed. Liability, if any, is limited strictly to
                            the consultancy fees received.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsPage;
