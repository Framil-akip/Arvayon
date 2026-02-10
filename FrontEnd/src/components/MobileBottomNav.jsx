import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.jpg';

const MobileBottomNav = ({ onMenuClick }) => {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#D4B878] backdrop-blur-sm border-t border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <div className="grid grid-cols-5 h-20 items-center px-2">
                {/* Company/About */}
                <button
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate('/#about');
                        } else {
                            navigate('#about');
                        }
                    }}
                    aria-label="Go to Company section"
                    className={`flex flex-col items-center justify-center h-full transition-colors group w-full ${location.pathname === '/' && location.hash === '#about' ? 'text-white' : 'text-black hover:text-white'}`}
                >
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wide">COMPANY</span>
                </button>

                {/* Services */}
                <button
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate('/#pmc');
                        } else {
                            navigate('#pmc');
                        }
                    }}
                    aria-label="Go to Services section"
                    className={`flex flex-col items-center justify-center h-full transition-colors group w-full ${location.pathname === '/services' || (location.pathname === '/' && location.hash === '#pmc') ? 'text-white' : 'text-black hover:text-white'}`}
                >
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wide">SERVICES</span>
                </button>

                {/* Center Logo - Elevated (empty space in navbar) */}
                <div className="flex flex-col items-center justify-center h-full relative">
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="absolute -top-0"
                    >
                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-[7px] border-[#D4B880] shadow-[0_3px_10px_rgba(0,0,0,0.5)] relative">
                            {/* The Crisp White Ring - Increased Width Outwards */}
                            <div className={`absolute inset-[-1px] rounded-full border-2 transition-opacity duration-300 pointer-events-none ${location.pathname === '/' && !location.hash ? 'border-white opacity-100' : 'border-transparent opacity-0'}`}></div>

                            <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
                                <img src={logoIcon} alt="ARVAYON" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Gallery/Portfolio */}
                <button
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate('/#portfolio');
                        } else {
                            navigate('#portfolio');
                        }
                    }}
                    aria-label="Go to Projects section"
                    className={`flex flex-col items-center justify-center h-full transition-colors group w-full ${location.pathname === '/' && location.hash === '#portfolio' ? 'text-white' : 'text-black hover:text-white'}`}
                >
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wide">PROJECTS</span>
                </button>

                {/* Menu */}
                {/* Contact */}
                <button
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate('/#contact');
                        } else {
                            navigate('#contact');
                        }
                    }}
                    aria-label="Go to Contact section"
                    className={`flex flex-col items-center justify-center h-full transition-colors group w-full ${location.pathname === '/' && location.hash === '#contact' ? 'text-white' : 'text-black hover:text-white'}`}
                >
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-wide">CONTACT</span>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;
