import React from 'react';

const OfferAd = () => {
    return (
        <div className="bg-gradient-to-r from-accent via-yellow-400 to-accent py-3 overflow-hidden shadow-lg border-y border-yellow-200 relative z-30">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
                <div className="flex-1 overflow-hidden relative">
                    <div className="animate-marquee whitespace-nowrap inline-block">
                        <span className="text-primary font-black text-lg md:text-xl tracking-wide mx-4">
                            GET <span className="text-white px-2 py-0.5 bg-primary transform -skew-x-12 inline-block mx-1">40% OFF</span> ON PREMIUM INTERIOR DESIGNS
                        </span>
                        <span className="text-primary font-black text-lg md:text-xl tracking-wide mx-4">
                            GET <span className="text-white px-2 py-0.5 bg-primary transform -skew-x-12 inline-block mx-1">40% OFF</span> ON PREMIUM INTERIOR DESIGNS
                        </span>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <a href="#contact" className="bg-primary hover:bg-black text-accent font-bold py-2 px-6 shadow-md transition-all duration-300 whitespace-nowrap flex items-center justify-center h-10 uppercase text-sm tracking-widest">
                        Claim Now
                    </a>
                </div>
            </div>

        </div>
    );
};

export default OfferAd;
