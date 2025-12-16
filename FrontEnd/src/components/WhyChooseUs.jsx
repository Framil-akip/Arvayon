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
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <div className="w-20 h-1 bg-accent mb-10"></div>

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
                                        <p className="text-gray-400 leading-relaxed">
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
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-secondary p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
                                </div>
                                <div className="bg-secondary p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
                                </div>
                                <div className="bg-secondary p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">5+</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                                </div>
                                <div className="bg-secondary p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
