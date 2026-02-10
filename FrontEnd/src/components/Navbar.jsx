import logo from '../assets/logo-cropped.webp';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileBottomNav from './MobileBottomNav';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { name: 'Home', href: 'home', path: '/' },
        { name: 'About', href: 'about', path: '/#about' },
        { name: 'Services', href: 'pmc', path: '/#pmc' },
        { name: 'Projects', href: 'portfolio', path: '/#portfolio' },
        { name: 'Contact', href: 'contact', path: '/#contact' },
    ];


    return (
        <>
            <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10 md:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center">
                                <img src={logo} alt="ARVAYON Pro Build Studio" className="h-10 w-auto object-contain" />
                            </Link>

                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navLinks.map((link) => {
                                    const isHomeLink = link.href === 'home';
                                    const targetId = link.href;

                                    if (isHomePage) {
                                        return (
                                            <a
                                                key={link.name}
                                                href={`#${targetId}`}
                                                className="text-gray-300 hover:text-[#D4B878] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 uppercase tracking-wide cursor-pointer"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'auto' });
                                                }}
                                            >
                                                {link.name}
                                            </a>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="text-gray-300 hover:text-[#D4B878] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 uppercase tracking-wide cursor-pointer"
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-primary border-b border-accent/20">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => {
                                const isHomeLink = link.href === 'home';
                                const targetId = link.href;

                                if (isHomePage) {
                                    return (
                                        <a
                                            key={link.name}
                                            href={`#${targetId}`}
                                            className="text-gray-300 hover:text-[#D4B878] block px-3 py-2 rounded-md text-base font-medium uppercase"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(false);
                                                document.getElementById(targetId)?.scrollIntoView({ behavior: 'auto' });
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-gray-300 hover:text-[#D4B878] block px-3 py-2 rounded-md text-base font-medium uppercase"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Desktop Offer Bar - Removed */}
            </nav>

            {/* Mobile Bottom Navigation */}
            <MobileBottomNav onMenuClick={() => setIsOpen(!isOpen)} />
        </>
    );
};

export default Navbar;
