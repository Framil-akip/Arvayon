import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    {/* Contact Info */}
                    {/* Contact Info */}
                    <div>
                        <div className="inline-block border-2 border-[#D4B878] px-6 py-2 rounded-lg mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#D4B878] m-0">Get In Touch</h2>
                        </div>

                        <p className="text-gray-600 mb-10 leading-relaxed">
                            Ready to start your dream project? Contact us today for a free consultation and quote.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] mr-6 flex-shrink-0 border border-white/5 shadow-md">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Phone</h4>
                                    <p className="text-gray-600">+91 93630 35048</p>
                                </div>
                            </div>


                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] mr-6 flex-shrink-0 border border-white/5 shadow-md">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Email</h4>
                                    <p className="text-gray-600">admin@arvayonpbs.com</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <h4 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                        <FaFacebookF size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                        <FaLinkedinIn size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-[#D4B878] hover:bg-[#D4B878] hover:text-primary transition-all duration-300 border border-white/5 shadow-md group">
                                        <FaPinterestP size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-primary p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Book Free Consultation</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors duration-300"
                                        placeholder="Your Phone"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors duration-300"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors duration-300"
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#D4B878] text-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-xl">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Contact;
