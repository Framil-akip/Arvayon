import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = ({ onMenuClick }) => {


    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-accent backdrop-blur-sm border-t border-yellow-700/40 shadow-2xl">
            <div className="grid grid-cols-5 h-20 items-center px-2">
                {/* Company/About */}
                <Link
                    to="/about"
                    className="flex flex-col items-center justify-center h-full text-gray-800 hover:text-primary transition-colors group"
                >
                    <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-[9px] font-semibold uppercase tracking-wide">COMPANY</span>
                </Link>

                {/* Services/Offers */}
                <Link
                    to="/services"
                    className="flex flex-col items-center justify-center h-full text-gray-800 hover:text-primary transition-colors group"
                >
                    <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-[9px] font-semibold uppercase tracking-wide">OFFERS</span>
                </Link>

                {/* Center Logo - Elevated (empty space in navbar) */}
                <div className="flex flex-col items-center justify-center h-full relative">
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="absolute -top-8"
                    >
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center border-4 border-accent">
                            <span className="block text-accent font-bold text-xl tracking-tight leading-none">
                                AR
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Gallery/Portfolio */}
                <Link
                    to="/portfolio"
                    className="flex flex-col items-center justify-center h-full text-gray-800 hover:text-primary transition-colors group"
                >
                    <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[9px] font-semibold uppercase tracking-wide">GALLERY</span>
                </Link>

                {/* Menu */}
                {/* Contact */}
                <Link
                    to="/contact"
                    className="flex flex-col items-center justify-center h-full text-gray-800 hover:text-primary transition-colors group"
                >
                    <svg className="w-7 h-7 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[9px] font-semibold uppercase tracking-wide">CONTACT</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileBottomNav;
