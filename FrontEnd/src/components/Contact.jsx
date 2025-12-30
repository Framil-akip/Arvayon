import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-secondary relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                        <div className="w-20 h-1 bg-accent mb-10"></div>
                        <p className="text-gray-300 mb-10 leading-relaxed">
                            Ready to start your dream project? Contact us today for a free consultation and quote.
                        </p>



                        <div className="space-y-8">


                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent mr-6 flex-shrink-0 border border-white/5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>

                                    <p className="text-gray-400">+91 93630 35048</p>
                                    <p className="text-gray-400">+91 91505 35048</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent mr-6 flex-shrink-0 border border-white/5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>

                                    <p className="text-gray-400">admin@arvayonpbs.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent mr-6 flex-shrink-0 border border-white/5">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <div className="w-28 h-28 relative rounded-xl overflow-hidden border border-white/10 hover:border-accent transition-colors duration-300">
                                            <div className="absolute inset-0 z-10 pointer-events-none"></div>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.424667284687!2d77.4326!3d8.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTEnMDAuMCJOIDc3wrAyNSc1Ny40IkU!5e0!3m2!1sen!2sin!4v1635765432109!5m2!1sen!2sin"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                title="Mini Map"
                                                className="w-full h-full object-cover"
                                            ></iframe>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=Antony+Complex,+Ramanputhur+Junction,+Nagercoil,+629001"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 z-20"
                                                title="View on Map"
                                            ></a>
                                        </div>
                                    </div>
                                    <p className="text-gray-400">
                                        Antony Complex, Ramanputhur Junction,<br />
                                        Nagercoil, Kanyakumari District – 629001
                                    </p>
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
                            <button type="submit" className="w-full btn-primary">
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
