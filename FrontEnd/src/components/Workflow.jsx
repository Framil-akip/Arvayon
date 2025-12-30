import React from 'react';

const steps = [
    {
        title: 'Initial Consultation',
        desc: 'Talk to our Interior Designer & Get an Estimate',
        href: '#contact',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: 'Design & Approval',
        desc: 'Detailed Drawing and Approval',
        href: '/services/architectural',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        title: 'Production',
        desc: 'Production at Own Factories',
        href: '/services/structural-drawing',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        title: 'Execution',
        desc: 'Material Delivery & Execution',
        href: '/services/hire-engineer',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
        )
    },
    {
        title: 'Handover',
        desc: 'On Time Project Hand Over',
        href: '#portfolio',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
        )
    }
];

const Workflow = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2000); // Change step every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding bg-primary border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                        Our Working Process
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        PROJECT COMPLETION IN <span className="text-accent">40 WORKING DAYS*</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) - Positioned at bottom of circles (top-24 = 96px, circle height is 96px) */}
                    <div className="hidden lg:block absolute top-24 left-0 w-full border-t-2 border-dashed border-amber-300/30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 overflow-visible">
                        {steps.map((step, index) => {
                            const isActive = index === activeStep;
                            return (
                                <a key={index} href={step.href} className="relative flex flex-col items-center group">
                                    {/* Icon Circle with Enhanced Glow */}
                                    <div className="relative mb-6">
                                        {/* Outer Glow Ring - Active State */}
                                        <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 pointer-events-none
                                            ${isActive ? 'bg-accent/60 scale-150' : 'bg-amber-200/10 scale-100 group-hover:bg-amber-200/30 group-hover:scale-125'}`}>
                                        </div>

                                        {/* Icon Container */}
                                        <div className={`relative w-24 h-24 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500
                                            ${isActive
                                                ? 'bg-accent/20 border-accent text-accent scale-110 shadow-[0_0_30px_rgba(255,215,0,0.4)]'
                                                : 'bg-primary border-amber-300/50 text-amber-300 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10'
                                            }`}>

                                            {/* Inner Pulse Ring */}
                                            <div className={`absolute inset-3 rounded-full border transition-all duration-500
                                                ${isActive ? 'border-accent/50 animate-ping' : 'border-transparent group-hover:border-accent/30'}`}>
                                            </div>

                                            {/* Icon */}
                                            <div className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-[160px] mx-auto">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Mobile/Tablet Connecting Line */}
                                    {index !== steps.length - 1 && (
                                        <div className="lg:hidden absolute bottom-[-40px] left-1/2 w-0.5 h-10 bg-amber-300/30 -translate-x-1/2"></div>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
