import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#D4B878] pt-0 pb-8 border-t border-primary/10 font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                    <p className="text-black text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Arvayon Pro Build Studio. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-black font-medium">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
