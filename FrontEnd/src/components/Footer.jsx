import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#D4B878] pt-0 pb-8 border-t border-primary/10 font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                    <p className="text-black text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Arvayon Pro Build Studio. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/arvayon_pro_build_studio?igsh=MXFuanJsOHZkcTl1cg==" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/share/1GMM1sASAH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://share.google/t8K1KTRtdS2zz6yKU" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                                <FaLinkedinIn size={18} />
                            </a>
                            <a href="https://wa.me/919363035048" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                                <FaWhatsapp size={18} />
                            </a>
                        </div>
                    </div>
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
