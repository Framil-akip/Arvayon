import React from 'react';

const OfferAd = ({ className = '' }) => {
    return (
        <div className={`bg-[#D4B878] py-3 overflow-hidden shadow-lg border-y border-[#C6A868] relative z-30 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
                <div className="flex-1 overflow-hidden relative">
                    <div className="animate-marquee whitespace-nowrap inline-block">
                        <span className="text-primary font-black text-lg md:text-xl tracking-wide mx-4">
                            GET <span className="text-[#D4B878] px-2 py-0.5 bg-primary transform -skew-x-12 inline-block mx-1">40% OFF</span> ON PREMIUM INTERIOR DESIGNS
                        </span>
                        <span className="text-primary font-black text-lg md:text-xl tracking-wide mx-4">
                            GET <span className="text-[#D4B878] px-2 py-0.5 bg-primary transform -skew-x-12 inline-block mx-1">40% OFF</span> ON PREMIUM INTERIOR DESIGNS
                        </span>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <a href="#contact" className="bg-primary hover:bg-black text-[#D4B878] font-bold py-2 px-6 shadow-md transition-all duration-300 whitespace-nowrap flex items-center justify-center h-10 uppercase text-sm tracking-widest">
                        Claim Now
                    </a>
                </div>
            </div>

        </div>
    );
};

export default OfferAd;
