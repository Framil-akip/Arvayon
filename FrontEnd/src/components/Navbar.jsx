import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from './MobileBottomNav';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Services', href: 'services' },
        { name: 'Portfolio', href: 'portfolio' },
        { name: 'Contact', href: 'contact' },
    ];


    return (
        <>
            <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-2xl font-serif font-bold text-accent tracking-wider">
                                ARVAYON
                                <span className="block text-xs font-sans text-white tracking-[0.2em] uppercase">Pro Build Studio</span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href === 'home' ? '/' : `/${link.href}`}
                                        className="text-gray-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 uppercase tracking-wide cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-primary border-b border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href === 'home' ? '/' : `/${link.href}`}
                                    className="text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Bottom Navigation */}
            <MobileBottomNav onMenuClick={() => setIsOpen(!isOpen)} />
        </>
    );
};

export default Navbar;
