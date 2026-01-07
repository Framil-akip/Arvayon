import React from 'react';

const TrustItem = ({ title, description, icon, isLast }) => (
    <div className="flex flex-col items-center text-center p-6 group relative">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#D4B878]/30 bg-[#D4B878]/5 flex items-center justify-center mb-6 shadow-[0_0_12px_rgba(212,184,120,0.10)] group-hover:border-[#D4B878] group-hover:bg-[#D4B878]/15 group-hover:shadow-[0_0_24px_rgba(212,184,120,0.25)] transition-all duration-500 relative z-10">
            <div className="absolute inset-2 rounded-full border border-[#D4B878]/20 animate-pulse"></div>
            <span className="text-[#D4B878] group-hover:scale-110 transition-transform duration-500">
                {icon}
            </span>

            {/* Connection Arrow for Desktop */}
            {!isLast && (
                <div className="hidden lg:block absolute top-1/2 left-24 w-48 -translate-y-1/2 z-[-1] pointer-events-none">
                    <svg className="w-full h-16 text-[#D4B878]/40 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4B878] transition-colors duration-300">
            {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
            {description}
        </p>
    </div>
);

const TrustSection = () => {
    const trustItems = [
        {
            title: 'Initial Consultation',
            description: 'Talk to our Interior Designer & Get an Estimate',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )
        },
        {
            title: 'Design & Approval',
            description: 'Detailed Drawing and Approval',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: 'Production',
            description: 'Production at Own Factories',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: 'Execution',
            description: 'Material Delivery & Execution',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Handover',
            description: 'On Time Project Hand Over',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                </svg>
            )
        }
    ];

    return (
        <section className="section-padding bg-primary border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="inline-block border-2 border-[#D4B878] px-6 py-2 rounded-lg">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#D4B878] m-0">
                                Our Working Process
                            </h2>
                        </div>
                    </div>
                    <p className="text-[#D4B878] tracking-widest uppercase text-sm md:text-base font-bold">
                        Project Completion in 45 Working Days
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 justify-center">
                    {trustItems.map((item, index) => (
                        <TrustItem
                            key={index}
                            {...item}
                            isLast={index === trustItems.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
