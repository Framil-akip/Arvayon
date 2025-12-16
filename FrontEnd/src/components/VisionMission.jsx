import React from 'react';

const VisionMission = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <div className="bg-secondary/50 p-10 rounded-xl border border-white/5 hover:border-accent/30 transition-colors duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To become a leading design consultancy in Tamil Nadu delivering innovative, sustainable & cost-effective solutions.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-secondary/50 p-10 rounded-xl border border-white/5 hover:border-accent/30 transition-colors duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-accent mr-2">✓</span>
                                <span className="text-gray-300">Complete solutions under one roof</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">✓</span>
                                <span className="text-gray-300">Creativity with functionality</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent mr-2">✓</span>
                                <span className="text-gray-300">Transparency, quality & timely delivery</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
