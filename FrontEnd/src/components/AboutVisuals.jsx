import React from 'react';
import aboutGrid1 from '../assets/about-grid-1.webp';
import aboutGrid2 from '../assets/about-grid-2.webp';
import aboutGrid3 from '../assets/about-grid-3.webp';

const AboutVisuals = () => {
    return (
        <div className="relative h-full w-full hidden md:block">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl -z-10"></div>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-2 h-full">

                {/* Left Column - Large Image */}
                <div className="relative h-full pt-2 pb-2">
                    <div className="absolute inset-0 bg-accent/5 rounded-2xl transform -rotate-1 scale-105 z-[-1]"></div>
                    <img
                        src={aboutGrid1}
                        alt="Modern Architectural Facade"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.01] transition-transform duration-500"
                    />
                </div>

                {/* Right Column - Two Stacked Images */}
                <div className="flex flex-col gap-2 h-full">
                    <div className="flex-1 relative">
                        <div className="absolute -inset-2 border border-accent/20 rounded-2xl transform translate-x-1 -translate-y-1"></div>
                        <img
                            src={aboutGrid2}
                            alt="Luxury Interior"
                            className="w-full h-full object-cover rounded-2xl shadow-xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                    <div className="flex-1 relative">
                        <img
                            src={aboutGrid3}
                            alt="Architectural Detail"
                            className="w-full h-full object-cover rounded-2xl shadow-xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
                        />
                        {/* Decorative shape */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutVisuals;
