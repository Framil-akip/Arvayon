import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
    return (
        <>
            <section id="contact" className="pt-20 pb-12 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        {/* Contact Info */}
                        {/* Contact Info */}
                        <div>
                            <div className="inline-block mb-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#D4B878] m-0">Get In Touch</h2>
                            </div>

                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                Ready to start your dream project? Contact us today for a free consultation and quote.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] mr-4 flex-shrink-0 border border-white/5 shadow-md">
                                        <FaPhone size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-0">Phone</h3>
                                        <p className="text-gray-600 text-sm">+91 93630 35048</p>
                                    </div>
                                </div>


                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] mr-4 flex-shrink-0 border border-white/5 shadow-md">
                                        <FaEnvelope size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-0">Email</h3>
                                        <p className="text-gray-600 text-sm">admin@arvayonpbs.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Arvayon+Pro+Build+Studio+Ramanpudur+Nagercoil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View on Google Maps"
                                        className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] mr-4 flex-shrink-0 border border-white/5 shadow-md hover:bg-[#D4B878] hover:text-primary transition-all duration-300"
                                    >
                                        <FaMapMarkerAlt size={16} />
                                    </a>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-0">Location</h3>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Arvayon+Pro+Build+Studio+Ramanpudur+Nagercoil"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-[#D4B878] transition-colors duration-300 text-sm"
                                        >
                                            Ramanpudur, Nagercoil
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Follow Us</h3>
                                    <div className="flex space-x-3">
                                        <a href="#" aria-label="Instagram" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                            <FaInstagram size={16} />
                                        </a>
                                        <a href="#" aria-label="Facebook" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                            <FaFacebookF size={16} />
                                        </a>
                                        <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                            <FaLinkedinIn size={16} />
                                        </a>
                                        <a href="#" aria-label="Pinterest" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                            <FaPinterestP size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div id="book-consultation" className="bg-primary p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4">Book Free Consultation</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                                            placeholder="Your Phone"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="3"
                                        className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                                        placeholder="Tell us about your project"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#D4B878] text-primary px-8 py-3 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-xl text-sm">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>


                </div>
            </section>
            <footer className="bg-[#D4B878] pt-0 pb-4 border-t border-primary/10 font-sans relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <p className="text-black text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Arvayon Pro Build Studio. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-black font-medium">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
