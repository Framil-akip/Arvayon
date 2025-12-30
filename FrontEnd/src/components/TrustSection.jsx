import React from 'react';

const TrustItem = ({ title, description, icon }) => (
    <div className="flex flex-col items-center text-center p-6 group">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent/30 bg-accent/5 flex items-center justify-center mb-6 shadow-[0_0_12px_rgba(255,215,0,0.10)] group-hover:border-accent group-hover:bg-accent/15 group-hover:shadow-[0_0_24px_rgba(255,215,0,0.25)] transition-all duration-500 relative">
            <div className="absolute inset-2 rounded-full border border-accent/20 animate-pulse"></div>
            <span className="text-accent group-hover:scale-110 transition-transform duration-500">
                {icon}
            </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
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
            title: 'Since 20XX',
            description: 'Professional industry experience',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'Premium Standards',
            description: 'IS codes & quality materials',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0c.699.688 1.633 1.054 2.604 1.006a3.42 3.42 0 013.25 3.25c.048.971.414 1.905 1.102 2.604a3.42 3.42 0 010 4.438c-.688.699-1.054 1.633-1.006 2.604a3.42 3.42 0 01-3.25 3.25 3.42 3.42 0 01-2.604 1.102 3.42 3.42 0 01-4.438 0c-.699-.688-1.633-1.054-2.604-1.006a3.42 3.42 0 01-3.25-3.25 3.42 3.42 0 01-1.102-2.604 3.42 3.42 0 010-4.438c.688-.699 1.054-1.633 1.006-2.604a3.42 3.42 0 013.25-3.25 3.42 3.42 0 012.604-1.102z" />
                </svg>
            )
        },
        {
            title: 'Design Accuracy',
            description: 'Clear drawings before execution',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            title: 'On-Time Delivery',
            description: 'Planned milestones',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Multi-Disciplinary Team',
            description: 'Architects, Engineers & PMC',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: 'Post-Project Support',
            description: 'Long-term guidance',
            icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="section-padding bg-primary border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">
                        Why Trust <span className="text-accent">Us?</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-4 justify-center">
                    {trustItems.map((item, index) => (
                        <TrustItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
