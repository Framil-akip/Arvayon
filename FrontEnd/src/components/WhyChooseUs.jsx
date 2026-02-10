import React from 'react';

const WhyChooseUs = () => {
    const benefits = [
        {
            title: 'End-to-End Design Solutions',
            description: 'From concept to completion, we handle every aspect of your project.',
        },
        {
            title: 'Experienced & Qualified Team',
            description: 'Our team of experts brings years of industry experience to your project.',
        },
        {
            title: 'Creative & Functional Designs',
            description: 'We balance aesthetics with practicality to create spaces that work for you.',
        },
        {
            title: 'Transparent & Affordable Pricing',
            description: 'No hidden costs. We offer clear pricing structures to fit your budget.',
        },
        {
            title: 'On-Time Delivery',
            description: 'We value your time and are committed to delivering projects on schedule.',
        },
    ];

    return (
        <section className="section-padding bg-secondary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <div className="w-20 h-1 bg-accent mb-6"></div>
                        <blockquote className="border-l-4 border-accent pl-4 italic text-gray-300 mb-10 text-lg">
                            "Building with integrity, designing with passion, and delivering with excellence."
                        </blockquote>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border border-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                        <span className="font-bold text-lg">{index + 1}</span>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-accent/10 transform rotate-3 rounded-2xl"></div>
                        <div className="relative bg-primary p-8 rounded-2xl border border-white/5">
                            <div className="bg-secondary/90 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center border-b border-white/10 pb-4">OurForce</h3>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between mb-2 items-end">
                                            <span className="text-gray-300 font-medium text-lg">Creative Innovation</span>
                                            <span className="text-accent font-bold">100%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-3">
                                            <div className="bg-accent h-3 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2 items-end">
                                            <span className="text-gray-300 font-medium text-lg">Client Dedication</span>
                                            <span className="text-accent font-bold">100%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-3">
                                            <div className="bg-accent h-3 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2 items-end">
                                            <span className="text-gray-300 font-medium text-lg">Transparency</span>
                                            <span className="text-accent font-bold">100%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-3">
                                            <div className="bg-accent h-3 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm mt-8 text-center italic">
                                    "Driven by passion, defined by quality."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
